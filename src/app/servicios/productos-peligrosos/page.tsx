import { Metadata } from 'next'
import HeroProductosPeligrosos from "../../../../components/servicios/productos-peligrosos/Hero";
import ContentSection from "../../../../components/servicios/productos-peligrosos/ContentSection";
import GalleryHighlights from "../../../../components/servicios/almacenaje/GalleryHighlights";

export const metadata: Metadata = {
  title: 'Transporte de Materiales Peligrosos - Certificado y Seguro',
  description: 'Transporte especializado y certificado de materiales peligrosos (MATPEL). Operadores capacitados, vehículos autorizados y cumplimiento normativo. Máxima seguridad en transporte de químicos y sustancias peligrosas.',
  keywords: [
    'transporte materiales peligrosos',
    'matpel peru',
    'transporte quimicos',
    'sustancias peligrosas',
    'transporte certificado',
    'materiales hazmat',
    'transporte seguro quimicos',
    'logistica materiales peligrosos'
  ],
  openGraph: {
    title: 'Transporte de Materiales Peligrosos Certificado',
    description: 'Especialistas certificados en transporte de materiales peligrosos con máxima seguridad y cumplimiento normativo total.',
    url: 'https://inversiones-moy-web.vercel.app/servicios/productos-peligrosos',
    images: ['/images/productos-peligrosos-og.jpg'],
  },
}

export default function ProductosPeligrososPage() {
    return (
        <>
            <HeroProductosPeligrosos />
            <ContentSection />
            <GalleryHighlights />
        </>
    );
}