import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contacto - Solicita Información y Cotizaciones',
  description: 'Contáctanos para solicitar información sobre nuestros servicios logísticos. Teléfonos, dirección, formulario de contacto y horarios de atención. Respuesta inmediata a cotizaciones.',
  alternates: {
    canonical: '/contacto',
  },
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

import HeroService from '../../../components/servicios/layout/Hero';
import ContactForm from '../../../components/contacto/ContactForm';
import MapaWrapper from '../../../components/contacto/MapaWrapper';

export default function Page() {
  return (
    <main>
      <HeroService 
        title="Contáctanos" 
        subtitle="Estamos listos para atender tus necesidades logísticas y de transporte." 
        image="/images/contacto_hero.jpg" 
      />
      
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 space-y-16">
        {/* Fila 1: Mapa Interactivo de Oficinas y Sedes */}
        <div className="space-y-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-[#01219C]">Nuestras Oficinas y Sedes</h3>
            <p className="text-gray-600 mt-2">
              Haz clic en el marcador de cualquiera de nuestras sedes en el mapa para ver sus detalles de contacto y operaciones específicas.
            </p>
          </div>
          <div className="h-[550px] w-full rounded-lg overflow-hidden shadow-lg border border-gray-200 relative">
            <MapaWrapper />
          </div>
        </div>

        {/* Fila 2: Información Central y Formulario de Contacto */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start pt-16 border-t border-gray-100">
          {/* Columna Izquierda: Información y Canales */}
          <div className="flex flex-col justify-between h-full">
            <div>
              <h2 className="text-3xl font-bold text-[#01219C] mb-4">Ponte en contacto</h2>
              <div className="w-16 h-1 bg-yellow-400 mb-6" />
              <p className="text-gray-700 mb-8">
                Estamos aquí para ayudarte. Si tienes alguna duda sobre nuestros servicios o quieres solicitar una cotización, no dudes en contactarnos. Puedes escribirnos, llamarnos o ubicar cualquiera de nuestras sedes en el mapa interactivo.
              </p>
              
              {/* Datos de Contacto Centralizados */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="text-[#01219C] p-2 bg-blue-50 rounded-lg">
                    {/* Icono de Teléfono */}
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-[#01219C] text-sm">Teléfonos Centrales</p>
                    <p className="text-gray-600 text-sm">01 287 2434 / 99 832 1531</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-[#01219C] p-2 bg-blue-50 rounded-lg">
                    {/* Icono de WhatsApp */}
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-[#01219C] text-sm">WhatsApp Comercial</p>
                    <p className="text-gray-600 text-sm">+51 99 832 1531</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-[#01219C] p-2 bg-blue-50 rounded-lg">
                    {/* Icono de Correo */}
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-[#01219C] text-sm">Correos Electrónicos</p>
                    <p className="text-gray-600 text-sm">mvelasquez@inversionesmoy.com.pe</p>
                    <p className="text-gray-600 text-sm">mudanzas@inversionesmoy.com.pe</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Formulario */}
          <div>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
