import { Metadata } from 'next'
import ContactoCliente from "../../../components/servicios/ContactoCliente"
import EncabezadoServicios from "../../../components/servicios/EncabezadoServicios"
import MasServicios_1 from "../../../components/servicios/MasServicios_1"
import MasServicios_2 from "../../../components/servicios/MasServicios_2"

import PorqueNosotros from "../../../components/servicios/PorqueNosotros"

export const metadata: Metadata = {
  title: 'Servicios Logísticos - Mudanzas, Almacenaje y Transporte',
  description: 'Descubre nuestros servicios logísticos especializados: mudanzas residenciales y corporativas, almacenaje seguro, renting de vehículos, transporte en cadena de frío y materiales peligrosos. Soluciones integrales para empresas.',
  keywords: [
    'servicios logisticos completos',
    'mudanzas empresariales',
    'almacenaje industrial',
    'renting vehicular',
    'transporte cadena frio',
    'materiales peligrosos',
    'logistica empresarial peru'
  ],
  openGraph: {
    title: 'Servicios Logísticos Especializados - Inversiones Moy',
    description: 'Servicios logísticos integrales para empresas: mudanzas, almacenaje, renting y transporte especializado con más de 25 años de experiencia.',
    url: 'https://inversiones-moy-web.vercel.app/servicios',
    images: ['/images/servicios-og.jpg'],
  },
}

export default function Page() { 


    return (
        <>

            <EncabezadoServicios /> 

            <PorqueNosotros /> 

            
            

            <ContactoCliente />
            <MasServicios_1 />
            <MasServicios_2 />

  
        </>
    )
}
