import { HiOutlineGlobeAlt, HiOutlineCube } from "react-icons/hi";
import { TbTruckDelivery, TbDeviceMobileMessage } from "react-icons/tb";
import Image from "next/image";

export default function PorqueNosotros() {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 items-center">
      {/* Columna izquierda: Imágenes */}
      <div className="flex flex-col gap-6 w-full lg:w-1/2">
        <div className="relative w-full h-80">
          <Image
            src="/images/servicios_1.jpg"
            alt="Registro de envío"
            fill
            className="object-cover rounded"
          />
        </div>
        <div className="relative w-full h-56">
          <Image
            src="/images/servicios_2.jpg"
            alt="Colaborador Moy"
            fill
            className="object-cover rounded"
          />
        </div>
      </div>

      {/* Columna derecha: Contenido */}
      <div className="w-full lg:w-1/2">
        <h2 className="text-3xl font-semibold text-[#01219C] mb-2">
          ¿Por qué Nosotros?
        </h2>
        <div className="w-12 h-1 bg-yellow-400 mb-4" />
        <p className="text-gray-700 mb-8">
          Nuestra ventaja corporativa destaca por la constante innovación y compromiso.
        </p>

        <div className="space-y-6">
          {/* Beneficios */}
          {[
            {
              icon: <HiOutlineGlobeAlt size={40} strokeWidth={1} />,
              title: "Localización GPS",
              desc: "Seguimiento en tiempo real de todas nuestras unidades de transporte asegurando la integridad de los productos.",
            },
            {
              icon: <TbDeviceMobileMessage size={40} strokeWidth={1} />,
              title: "Aplicativos propios",
              desc: "Contamos con sistemas y aplicativos móviles hechos a medida que nos permiten saber el estado de las mercancías a tiempo real.",
            },
            {
              icon: <HiOutlineCube size={40} strokeWidth={1} />,
              title: "Maniobras",
              desc: "Poseemos personal altamente calificado y herramientas especializadas para el traslado de productos complejos de manipular.",
            },
            {
              icon: <TbTruckDelivery size={40} strokeWidth={1} />,
              title: "Siempre a tiempo",
              desc: "Gestionamos los riesgos para cumplir con la entrega oportuna. Nuestro compromiso es brindar puntualidad, confianza y seguridad.",
            },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4 group">
              <div className="text-yellow-400 group-hover:text-[#01219C] transition-colors">
                {item.icon}
              </div>
              <div>
                <h4 className="font-semibold text-gray-600">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
