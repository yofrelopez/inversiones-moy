"use client";

import Image from "next/image";
import { FaPhone } from "react-icons/fa";
import { FaLinkedinIn, FaFacebookF, FaYoutube } from "react-icons/fa6";

export default function ContactSection() {
  return (
    <section className="relative bg-moyblue text-white overflow-hidden pb-60">
      {/* Imagen de fondo */}
      <Image
        src="/images/services/gestion-logistica/repartidor.png"
        alt="Atención al cliente 24/7"
        fill
        className="object-cover"
        priority
      />
      {/* Overlay del mismo azul para homogeneidad */}
      <div className="absolute inset-0 bg-moyblue/70" />

      {/* Contenido */}
      <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-20 lg:py-24 pb-28 md:pb-36 text-left">
        <p className="uppercase tracking-wide text-sm md:text-[13px] opacity-90">
          Nuestro servicio de atención está disponible 24/7 para clientes corporativos.
        </p>

        {/* Número grande (en blanco para contraste sobre azul corporativo) */}
        <h2 className="mt-3 text-4xl md:text-5xl font-bold leading-tight flex">
            <a
            href="tel:+51998321531"
            className="flex items-center gap-3 text-white text-5xl font-bold hover:text-yellow-400 transition"
            >
            <FaPhone size={32} className="shrink-0" />
            +51 99 832 1531
            </a>
        </h2>

        {/* Redes (solo LinkedIn, Facebook, YouTube) */}
        <div className="mt-6 flex items-center gap-4 text-xl">
          <a href="#" aria-label="LinkedIn"
          className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white text-white hover:bg-white hover:text-moyblue transition">
            <FaLinkedinIn />
          </a>
          <a href="#" aria-label="Facebook"
          className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white text-white hover:bg-white hover:text-moyblue transition">
            <FaFacebookF />
          </a>
          <a href="#" aria-label="YouTube"
          className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white text-white hover:bg-white hover:text-moyblue transition">
            <FaYoutube />
          </a>
        </div>
      </div>
    </section>
  );
}
