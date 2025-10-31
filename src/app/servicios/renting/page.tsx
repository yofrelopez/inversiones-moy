
import { Metadata } from 'next'
import HeroRenting from "../../../../components/servicios/renting/Hero";
import ContentSection from "../../../../components/servicios/renting/ContentSection";
import GalleryHighlights from "../../../../components/servicios/almacenaje/GalleryHighlights";

export const metadata: Metadata = {
  title: 'Renting de Vehículos - Alquiler de Camiones y Transporte',
  description: 'Servicio de renting vehicular para empresas. Alquiler de camiones, furgones y vehículos de transporte con mantenimiento incluido. Flotas modernas y confiables para operaciones logísticas.',
  keywords: [
    'renting vehicular',
    'alquiler camiones',
    'renting transporte',
    'flota vehicular',
    'alquiler furgones',
    'renting empresarial',
    'vehiculos logistica',
    'transporte renting peru'
  ],
  openGraph: {
    title: 'Renting de Vehículos - Flotas para Empresas',
    description: 'Servicio especializado de renting vehicular con flotas modernas para operaciones logísticas empresariales. Mantenimiento y seguro incluidos.',
    url: 'https://inversiones-moy-web.vercel.app/servicios/renting',
    images: ['/images/renting-og.jpg'],
  },
}

export default function RentingPage() {
    return (
        <>
            <HeroRenting />
            <ContentSection />
            <GalleryHighlights />
            {/* Aquí irán los demás componentes modularizados */}
        </>
    );
}
