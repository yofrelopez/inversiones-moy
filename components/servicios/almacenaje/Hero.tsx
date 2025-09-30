// components/servicios/almacenaje/Hero.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroAlmacenaje() {
  return (
    <section className="relative w-full overflow-hidden md:h-[662px]">
      {/* Fondo */}
      <Image
        src="/images/services/almacenaje/hero-bg.jpg"
        alt=""
        fill
        priority
        className="absolute inset-0 -z-10 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-black/35" />

      {/* Contenedor principal */}
      <div className="relative mx-auto h-full max-w-7xl px-6 pt-10 md:py-12">
        {/* IMG REPARTIDOR — DESKTOP/TABLET: izquierda, pegado a la base y superpuesto al panel */}
        <div className="pointer-events-none select-none hidden md:block md:absolute md:bottom-0 md:left-4 lg:left-20 xl:left-30 md:z-20">
          <Image
            src="/images/services/almacenaje/repartidor.png"
            alt="Repartidor con caja"
            width={520}
            height={520}
            priority
            className="
              /* tamaños progresivos */
              md:w-[380px]      /* ≈380px */
              lg:w-[480px] /* límite intermedio */
              xl:w-[520px] /* máximo 520px */
              h-auto
            "
          />
        </div>

        {/* Layout: en móvil 1 columna; desde md reservamos la izquierda para la imagen */}
        <div className="grid w-full gap-8 md:h-full md:[grid-template-columns:280px_1fr] lg:[grid-template-columns:440px_1fr] xl:[grid-template-columns:540px_1fr]">
          {/* Espaciador solo en md+ para dejar el área del repartidor a la izquierda */}
          <div className="hidden md:block" />

          {/* Panel blanco (derecha en md+, arriba en móvil) */}
          <div className="self-center">
            <div className="relative max-w-xl rounded-2xl bg-white/95 p-6 md:p-8 lg:p-10 shadow-xl ring-1 ring-black/10 backdrop-blur md:z-10">
              <p className="text-xs tracking-[0.18em] uppercase text-moyblue">
                ¡Más espacio para ti!
              </p>
              {/* Título: fijo en base/sm/md; crece recién en lg */}
              <h1 className="mt-3 text-3xl lg:text-5xl font-extrabold leading-tight text-gray-900">
                Guardamos tus cosas, fácil y seguro
              </h1>
              <p className="mt-4 text-base md:text-lg leading-relaxed text-gray-600">
                ¿No tienes dónde guardar? Vamos hasta tu casa en Lima Metropolitana, recogemos tus
                productos gratis y los almacenamos con seguridad y control.
              </p>

              <Link
                href="/contacto"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-moyblue px-7 py-3 font-semibold tracking-wide text-white transition hover:bg-moyblue-90"
              >
                Reserva tu espacio hoy
              </Link>
            </div>

            {/* IMG REPARTIDOR — MÓVIL: debajo, 1 columna, levemente superpuesto al panel (no adentro) */}
            <div className="md:hidden relative">
              {/* overlap suave: subimos la imagen un poco */}
              <div className="-mt-6 pl-1">
                <Image
                  src="/images/services/almacenaje/repartidor.png"
                  alt="Repartidor con caja"
                  width={420}
                  height={420}
                  priority
                  className="
                    w-84    /* base ≈336px */
                    sm:w-[440px] /* ≥640px */
                    h-auto
                  "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
