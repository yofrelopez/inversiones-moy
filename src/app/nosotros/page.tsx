import { Metadata } from 'next'
import Nosotros from "../../../components/nosotros/Nosotros";

export const metadata: Metadata = {
  title: 'Nosotros - Empresa Logística con 25+ Años de Experiencia',
  description: 'Conoce la historia de Inversiones Moy, empresa líder en servicios logísticos en Perú con más de 25 años de experiencia. Nuestro equipo, valores y compromiso con la excelencia en el servicio.',
  keywords: [
    'empresa logistica peru',
    'historia inversiones moy',
    'experiencia logistica',
    'equipo profesional',
    'valores empresariales',
    'liderazgo logistico',
    'trayectoria empresarial'
  ],
  openGraph: {
    title: 'Nosotros - Inversiones Moy, Líderes en Logística',
    description: 'Más de 25 años liderando el sector logístico en Perú. Conoce nuestra historia, equipo y compromiso con la excelencia.',
    url: 'https://inversiones-moy-web.vercel.app/nosotros',
    images: ['/images/nosotros-og.jpg'],
  },
}

export default function Page() { 
    
    return(

        <>
        <Nosotros />
        </>

    )
    


}

