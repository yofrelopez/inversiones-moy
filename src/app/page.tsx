import { Metadata } from 'next'
import Hero from "../../components/home/Hero";
import Soluciones from "../../components/home/Soluciones";

export const metadata: Metadata = {
  title: 'Inicio - Servicios Logísticos Profesionales',
  description: 'Inversiones Moy ofrece servicios logísticos integrales en Perú: mudanzas residenciales y corporativas, almacenaje, renting vehicular, transporte en cadena de frío y materiales peligrosos. Más de 25 años de experiencia.',
  keywords: [
    'servicios logisticos peru',
    'mudanzas lima',
    'empresa logistica',
    'transporte mercancia',
    'almacenaje seguro',
    'logistica integral'
  ],
  openGraph: {
    title: 'Inversiones Moy - Servicios Logísticos Integrales en Perú',
    description: 'Empresa líder con más de 25 años ofreciendo soluciones logísticas completas: mudanzas, almacenaje, renting y transporte especializado.',
    url: 'https://inversiones-moy-web.vercel.app',
    images: ['/images/home-og.jpg'],
  },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Soluciones />
    </>
  );
}
