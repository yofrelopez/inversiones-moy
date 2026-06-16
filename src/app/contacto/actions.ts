'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export type FormState = {
  success: boolean;
  message?: string;
  errors?: {
    nombre?: string[];
    email?: string[];
    mensaje?: string[];
  };
};

export async function sendContactEmail(prevState: FormState, formData: FormData): Promise<FormState> {
  const nombre = formData.get('nombre') as string;
  const email = formData.get('email') as string;
  const telefono = formData.get('telefono') as string;
  const mensaje = formData.get('mensaje') as string;

  const errors: NonNullable<FormState['errors']> = {};

  // Validaciones del Servidor
  if (!nombre || nombre.trim().length === 0) {
    errors.nombre = ['El nombre es obligatorio.'];
  }

  const emailRegex = /\S+@\S+\.\S+/;
  if (!email || !emailRegex.test(email)) {
    errors.email = ['Debe proporcionar un correo electrónico válido.'];
  }

  if (!mensaje || mensaje.trim().length === 0) {
    errors.mensaje = ['El mensaje no puede estar vacío.'];
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: 'Por favor, corrija los errores en el formulario.',
      errors,
    };
  }

  try {
    // Definimos las tareas de envío en paralelo para optimizar la velocidad de respuesta al usuario
    const sendAdminEmail = resend.emails.send({
      from: 'Web Inversiones Moy <no-reply@moy.com.pe>',
      to: ['kevinvelop@gmail.com', 'yofrelopez.s@gmail.com'],
      subject: `Nuevo mensaje de contacto de ${nombre.trim()}`,
      replyTo: email.trim(),
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 20px; border-radius: 8px;">
          <h2 style="color: #01219C; border-bottom: 2px solid #01219C; padding-bottom: 10px; margin-top: 0;">
            Nuevo Mensaje de Contacto
          </h2>
          <p>Has recibido un nuevo mensaje a través del formulario de la web <strong>moy.com.pe</strong>.</p>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 120px;">Nombre:</td>
              <td style="padding: 8px 0;">${nombre.trim()}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Correo:</td>
              <td style="padding: 8px 0;"><a href="mailto:${email.trim()}">${email.trim()}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Teléfono:</td>
              <td style="padding: 8px 0;">${telefono ? telefono.trim() : 'No especificado'}</td>
            </tr>
          </table>
          
          <div style="margin-top: 20px; background-color: #f9f9f9; padding: 15px; border-radius: 5px; border-left: 4px solid #01219C;">
            <strong style="display: block; margin-bottom: 8px; color: #01219C;">Mensaje:</strong>
            <p style="margin: 0; white-space: pre-wrap;">${mensaje.trim()}</p>
          </div>
          
          <footer style="margin-top: 30px; font-size: 0.8em; color: #777; border-top: 1px solid #eee; padding-top: 10px; text-align: center;">
            Este correo fue generado automáticamente por el sitio web de Inversiones Moy.
          </footer>
        </div>
      `,
    });

    const sendClientEmail = resend.emails.send({
      from: 'Inversiones Moy <no-reply@moy.com.pe>',
      to: [email.trim()],
      subject: 'Hemos recibido tu mensaje - Inversiones Moy',
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 20px; border-radius: 8px;">
          <h2 style="color: #01219C; border-bottom: 2px solid #01219C; padding-bottom: 10px; margin-top: 0;">
            ¡Gracias por escribirnos!
          </h2>
          <p>Hola <strong>${nombre.trim()}</strong>,</p>
          <p>Confirmamos que hemos recibido tu mensaje a través de nuestra web <strong>moy.com.pe</strong>.</p>
          <p>Un miembro de nuestro equipo lo revisará y se pondrá en contacto contigo en la brevedad posible.</p>
          
          <div style="margin-top: 20px; background-color: #f9f9f9; padding: 15px; border-radius: 5px; border-left: 4px solid #01219C;">
            <strong style="display: block; margin-bottom: 8px; color: #01219C;">Copia de tu consulta:</strong>
            <p style="margin: 0; white-space: pre-wrap; font-size: 0.9em; color: #555;">${mensaje.trim()}</p>
          </div>
          
          <p style="margin-top: 20px;">Atentamente,<br><strong>El equipo de Inversiones Moy</strong></p>
          
          <footer style="margin-top: 30px; font-size: 0.8em; color: #777; border-top: 1px solid #eee; padding-top: 10px; text-align: center;">
            Este es un correo automático de confirmación. Por favor, no respondas directamente a este mensaje.
          </footer>
        </div>
      `,
    }).catch(err => {
      // Si el correo de auto-respuesta falla (ej. bandeja llena o dominio inválido), no bloqueamos la experiencia
      console.error('Error al enviar correo de auto-respuesta al cliente:', err);
      return { data: null, error: err };
    });

    // Ejecutamos ambos envíos de forma simultánea
    const [adminRes] = await Promise.all([sendAdminEmail, sendClientEmail]);

    if (adminRes.error) {
      console.error('Error al enviar correo de administración con Resend:', adminRes.error);
      return {
        success: false,
        message: `Error al enviar el correo: ${adminRes.error.message}`,
      };
    }

    return {
      success: true,
      message: '¡Muchas gracias por escribirnos! Hemos recibido tu mensaje y te responderemos pronto.',
    };
  } catch (err: any) {
    console.error('Error en el servidor al procesar el correo:', err);
    return {
      success: false,
      message: 'Hubo un error inesperado al enviar el mensaje. Intente de nuevo más tarde.',
    };
  }
}
