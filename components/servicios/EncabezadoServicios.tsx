"use client";

import { HiOutlineTruck, HiOutlineClipboardList, HiOutlineCube } from "react-icons/hi";
import { TbTruckDelivery, TbSnowflake, TbAlertTriangle } from "react-icons/tb";
import Link from "next/link";
import { motion } from "framer-motion";

const servicios = [
  {
    id: "mudanzas",
    icon: <HiOutlineCube size={90} strokeWidth={1} />,
    title: "Mudanza Local",
    desc: "Ahorra tiempo y gana seguridad con nuestro servicio de mudanzas de casas y corporativas.",
  },
  {
    id: "gestion-logistica",
    icon: <HiOutlineTruck size={90} strokeWidth={1} />,
    title: "Gestión Logística",
    desc: "Control de todo el sistema de distribución de compañías, trasladamos insumos y ecommerce.",
  },
  {
    id: "almacenaje",
    icon: <HiOutlineClipboardList size={90} strokeWidth={1} />,
    title: "Almacenaje",
    desc: "Guardado, controlado inventarios y cuidado riguroso de existencias.",
  },
  {
    id: "renting",
    icon: <TbTruckDelivery size={90} strokeWidth={1} />,
    title: "Renting",
    desc: "Arrendamiento de unidades de transporte y solución de movilidad para empresas.",
  },
  {
    id: "transporte-frio",
    icon: <TbSnowflake size={90} strokeWidth={1} />,
    title: "Transporte en frío",
    desc: "Control de temperatura ideal para productos perecederos y medicinales.",
  },
  {
    id: "productos-peligrosos",
    icon: <TbAlertTriangle size={90} strokeWidth={1} />,
    title: "Productos peligrosos",
    desc: "Traslado de materiales peligrosos junto a personal capacitado y con permisos correspondientes.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function EncabezadoServicios() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="bg-cover bg-center lg:h-[750px] bg-no-repeat text-white py-20 px-6"
      style={{ backgroundImage: "url('/images/fondo-servicios.jpg')" }}
    >
      <motion.div 
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-center items-start pb-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {servicios.map((servicio, i) => (
          <motion.div key={i} variants={itemVariants}>
            <Link
              href={`#${servicio.id}`}
              onClick={(e) => handleScroll(e, servicio.id)}
              className="flex flex-col items-center gap-4 transition-colors cursor-pointer"
            >
              <div className="text-yellow-400 hover:text-white">{servicio.icon}</div>
              <h3 className="text-xl font-light">{servicio.title}</h3>
              <p className="text-sm text-white font-extralight">{servicio.desc}</p>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
