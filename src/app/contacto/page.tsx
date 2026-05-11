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

import HeroService from '../../../components/servicios/layout/Hero';
import MapaContacto from '../../../components/contacto/MapaContacto';
import ContactForm from '../../../components/contacto/ContactForm';

export default function Page() {
  return (
    <main>
      <HeroService 
        title="Contáctanos" 
        subtitle="Estamos listos para atender tus necesidades logísticas y de transporte." 
        image="/images/contacto_hero.jpg" 
      />
      
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Columna Izquierda: Información y Formulario */}
          <div className="flex flex-col justify-between h-full">
            <div className="mb-8 lg:mb-0">
              <h2 className="text-3xl font-bold text-[#01219C] mb-4">Ponte en contacto</h2>
              <div className="w-16 h-1 bg-yellow-400 mb-6" />
              <p className="text-gray-700 mb-8">
                Estamos aquí para ayudarte. Si tienes alguna duda sobre nuestros servicios o quieres solicitar una cotización, no dudes en contactarnos.
              </p>
              
              {/* Datos de Contacto sin caja gris, más elegantes */}
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <div className="text-[#01219C] mt-1">
                    {/* Icono de Pin */}
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  </div>
                  <div>
                    <p className="font-semibold text-[#01219C] text-sm">Dirección</p>
                    <p className="text-gray-600 text-sm">CAL.6 MZ. K LOTE. 1A URB. LAS VERTIENTES DE LA TABLADA DE LURIN, VILLA EL SALVADOR</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="text-[#01219C] mt-1">
                    {/* Icono de Teléfono */}
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  </div>
                  <div>
                    <p className="font-semibold text-[#01219C] text-sm">Teléfonos</p>
                    <p className="text-gray-600 text-sm">01-287-2434 / 999 999 999</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="text-[#01219C] mt-1">
                    {/* Icono de WhatsApp (Chat) */}
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                  </div>
                  <div>
                    <p className="font-semibold text-[#01219C] text-sm">WhatsApp</p>
                    <p className="text-gray-600 text-sm">+51 999 999 999</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulario */}
            <ContactForm />
          </div>

          {/* Columna Derecha: El Mapa (Altura Completa en desktop) */}
          <div className="h-full">
            <MapaContacto />
          </div>
        </div>
      </section>
    </main>
  );
}
