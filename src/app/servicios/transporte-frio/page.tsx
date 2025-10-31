import { Metadata } from 'next'
import HeroTransporteFrio from "../../../../components/servicios/transporte-frio/Hero";
import ContentSection from "../../../../components/servicios/transporte-frio/ContentSection";
import GalleryHighlights from "../../../../components/servicios/almacenaje/GalleryHighlights";

export const metadata: Metadata = {
  title: 'Transporte en Cadena de Frío - Productos Refrigerados',
  description: 'Transporte especializado en cadena de frío para productos perecederos, farmacéuticos y alimentos. Vehículos refrigerados con control de temperatura certificado. Garantizamos la calidad de tus productos.',
  keywords: [
    'transporte cadena frio',
    'transporte refrigerado',
    'productos perecederos',
    'transporte farmaceutico',
    'cadena frio peru',
    'transporte alimentos',
    'vehiculos refrigerados',
    'cold chain logistics'
  ],
  openGraph: {
    title: 'Transporte en Cadena de Frío Certificado',
    description: 'Especialistas en transporte refrigerado con control de temperatura certificado. Protegemos la calidad de productos perecederos y farmacéuticos.',
    url: 'https://inversiones-moy-web.vercel.app/servicios/transporte-frio',
    images: ['/images/transporte-frio-og.jpg'],
  },
}

export default function TransporteFrioPage() {
    return (
        <>
            <HeroTransporteFrio />
            <ContentSection />
            <GalleryHighlights />
            {/* Aquí irán los demás componentes modularizados */}
        </>
    );
}