import { Metadata } from 'next'
import AlwaysOnTime from "../../../../components/servicios/mudanzas/AlwaysOnTime";
import ContactBand from "../../../../components/servicios/mudanzas/ContactBand";
import FeatureCards from "../../../../components/servicios/mudanzas/FeatureCards";
import Hero from "../../../../components/servicios/mudanzas/Hero";
import Newsletter from "../../../../components/servicios/mudanzas/Newsletter";

export const metadata: Metadata = {
  title: 'Mudanzas Residenciales y Corporativas - Servicio Profesional',
  description: 'Servicio profesional de mudanzas en Lima y todo Perú. Mudanzas residenciales, corporativas y comerciales con equipo especializado, embalaje seguro y transporte protegido. Cotización gratuita.',
  keywords: [
    'mudanzas lima',
    'mudanzas residenciales',
    'mudanzas corporativas',
    'empresa mudanzas peru',
    'mudanzas profesionales',
    'servicio mudanzas',
    'mudanzas comerciales',
    'transporte mudanzas'
  ],
  openGraph: {
    title: 'Mudanzas Profesionales - Residenciales y Corporativas',
    description: 'Servicio especializado de mudanzas con más de 25 años de experiencia. Mudanzas seguras para hogares y empresas en todo Perú.',
    url: 'https://inversiones-moy-web.vercel.app/servicios/mudanzas',
    images: ['/images/mudanzas-og.jpg'],
  },
}

export default function MudanzasPage() {
    return (
        <div>
        <Hero />
        <AlwaysOnTime />
        <Newsletter />
        <FeatureCards />
        <ContactBand />
               </div>


    );
}