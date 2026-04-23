"use client";

import { HiOutlineGlobeAlt, HiOutlineCube } from "react-icons/hi";
import { TbTruckDelivery, TbDeviceMobileMessage } from "react-icons/tb";
import Image from "next/image";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

export default function PorqueNosotros() {
  return (
    <div className="relative w-full flex justify-center lg:mt-[-130px]">
      {/* Fondo blanco que se expande hacia la derecha SOLO en lg: */}
      <div className="absolute inset-y-0 2xl:left-95 right-0 bg-white lg:rounded-none rounded-lg" />

      <motion.section 
        className="relative z-10 w-full max-w-6xl flex flex-col lg:flex-row gap-10 items-center px-6 sm:px-10 lg:px-[40px] py-12 bg-white"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Columna izquierda: Imágenes */}
        <div className="flex flex-col gap-6 w-full lg:w-1/2">
          <motion.div className="relative w-full h-64 sm:h-80" variants={imageVariants}>
            <Image
              src="/images/servicios_1.jpg"
              alt="Registro de envío"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover rounded"
            />
          </motion.div>
          <motion.div className="relative w-full h-48 sm:h-56" variants={imageVariants}>
            <Image
              src="/images/servicios_2.jpg"
              alt="Colaborador Moy"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover rounded"
            />
          </motion.div>
        </div>

        {/* Columna derecha: Contenido */}
        <div className="w-full lg:w-1/2">
          <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-semibold text-[#01219C] mb-2">
            ¿Por qué Nosotros?
          </motion.h2>
          <motion.div variants={itemVariants} className="w-12 h-1 bg-yellow-400 mb-4" />
          <motion.p variants={itemVariants} className="text-gray-700 mb-8">
            Nuestra ventaja corporativa destaca por la constante innovación y compromiso.
          </motion.p>

          <div className="space-y-6">
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
              <motion.div key={i} variants={itemVariants} className="flex items-start gap-4 group">
                <div className="text-yellow-400 group-hover:text-[#01219C] transition-colors shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-600">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}
