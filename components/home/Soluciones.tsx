"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  HiOutlineTruck,
  HiOutlineClipboardList,
  HiOutlineCube,
} from "react-icons/hi";
import {
  TbTruckDelivery,
  TbSnowflake,
  TbAlertTriangle,
} from "react-icons/tb";

export default function Soluciones() {
  return (
    <section className="bg-white py-16 px-6 text-center text-[#01219C]">
      {/* Título */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-semibold">Nuestras Soluciones</h2>
        <div className="w-16 h-1 bg-yellow-400 mx-auto my-4" />
        <p className="text-gray-700 max-w-xl mx-auto mb-12 pb-4">
          Logística a través de la innovación, dedicación y tecnología.
        </p>
      </motion.div>

      {/* Íconos */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-wrap justify-center gap-16 ax-w-5xl mx-auto mb-12 pt-4 pb-4"
      >
        {[
          { icon: <HiOutlineCube strokeWidth={1} className="text-[36px]" />, label: "Mudanza Local" },
          { icon: <HiOutlineTruck strokeWidth={1} className="text-[36px]" />, label: "Gestión logística" },
          { icon: <HiOutlineClipboardList strokeWidth={1} className="text-[36px]" />, label: "Almacenaje" },
          { icon: <TbTruckDelivery strokeWidth={1} className="text-[36px]" />, label: "Renting" },
          { icon: <TbSnowflake strokeWidth={1} className="text-[36px]" />, label: "Transporte en frío" },
          { icon: <TbAlertTriangle strokeWidth={1} className="text-[36px]" />, label: "Productos peligrosos" },
        ].map(({ icon, label }, i) => (
          <Link
            key={i}
            href="/servicios"
            className="flex flex-col items-center gap-2 cursor-pointer hover:text-yellow-400 transition-colors transform hover:scale-105 duration-300"
          >
            {icon}
            <span className="text-sm">{label}</span>
          </Link>
        ))}
      </motion.div>

      {/* Botón */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="pt-4 pb-8"
      >
        <Link href="/servicios">
            <button className="cursor-pointer px-8 py-3 border border-[#01219C] rounded-full font-normal hover:bg-[#01219C] hover:text-white transition duration-300">
            Más información sobre servicios
            </button>
        </Link>
      </motion.div>
    </section>
  );
}
