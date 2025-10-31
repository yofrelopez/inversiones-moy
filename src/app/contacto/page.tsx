import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contacto - Solicita Información y Cotizaciones',
  description: 'Contáctanos para solicitar información sobre nuestros servicios logísticos. Teléfonos, dirección, formulario de contacto y horarios de atención. Respuesta inmediata a cotizaciones.',
  keywords: [
    'contacto inversiones moy',
    'telefono empresa logistica',
    'cotizacion servicios',
    'direccion oficina',
    'informacion servicios',
    'contactar empresa',
    'solicitar cotizacion'
  ],
  openGraph: {
    title: 'Contacto - Inversiones Moy Servicios Logísticos',
    description: 'Contáctanos para cotizaciones y consultas sobre servicios logísticos. Atención personalizada y respuesta inmediata.',
    url: 'https://inversiones-moy-web.vercel.app/contacto',
    images: ['/images/contacto-og.jpg'],
  },
}

export default function Page() { return <h1>Contacto</h1>; }
