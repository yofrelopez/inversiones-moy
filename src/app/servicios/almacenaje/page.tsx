import { Metadata } from 'next'
import CityBestAlmacenaje from "../../../../components/servicios/almacenaje/CityBest";
import GalleryHighlights from "../../../../components/servicios/almacenaje/GalleryHighlights";
import HeroAlmacenaje from "../../../../components/servicios/almacenaje/Hero";
import PricingAlmacenaje from "../../../../components/servicios/almacenaje/Pricing";

export const metadata: Metadata = {
  title: 'Almacenaje y Depósito - Bodegaje Seguro para Empresas',
  description: 'Servicios de almacenaje y depósito con instalaciones seguras y modernas. Bodegaje temporal y permanente para empresas, control de inventario, manejo especializado de mercancías. Tarifas competitivas.',
  keywords: [
    'almacenaje lima',
    'deposito mercancia',
    'bodegaje empresas',
    'almacen seguro',
    'servicio almacenaje',
    'deposito temporal',
    'warehousing peru',
    'almacenamiento industrial'
  ],
  openGraph: {
    title: 'Servicios de Almacenaje y Depósito Seguros',
    description: 'Almacenes modernos y seguros para el depósito de mercancías. Servicios de bodegaje con control de inventario y manejo especializado.',
    url: 'https://inversiones-moy-web.vercel.app/servicios/almacenaje',
    images: ['/images/almacenaje-og.jpg'],
  },
}

export default function AlmacenajePage() {
    return (
        <>
        <HeroAlmacenaje />
        <CityBestAlmacenaje />
        <PricingAlmacenaje />
        <GalleryHighlights />

        </>
    );
}