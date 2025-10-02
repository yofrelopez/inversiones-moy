// components/servicios/almacenaje/Pricing.tsx
"use client";

import Link from "next/link";

export default function PricingAlmacenaje() {
  return (
    <section className="w-full py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-6">
        {/* Encabezado */}
        <header className="text-center">

        <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-moyblue)] text-center">
        Planes{" "}
        <span className="relative inline-block">
            sencillos
            {/* oculto en móvil, visible desde md */}
            <span className="hidden md:block absolute left-0 -bottom-4 h-1 w-full bg-yellow-400" />
        </span>{" "}
        de almacenaje
        </h2>
          <p className="mt-10 text-gray-700 max-w-2xl mx-auto">
            Pagas solo por el espacio que usas. Todos nuestros planes incluyen recojo gratis en Lima Metropolitana.
          </p>

        </header>

        {/* Filas */}
        <div className="mt-12 space-y-4">
          {/* === Plan Pequeño === */}
          <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-4 md:items-center">
              {/* Col 1 */}
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-900">Plan Pequeño</h3>
                <p className="mt-1 text-sm text-gray-600">
                  Perfecto para guardar cajas, archivos, ropa o pequeños muebles.
                </p>
              </div>

              {/* Col 2 */}
              <div className="p-5 md:border-l md:border-gray-200">
                <span className="block text-xs tracking-wide uppercase text-gray-500">Capacidad</span>
                <span className="mt-1 block font-medium text-gray-800">Hasta 5 m³</span>
              </div>

              {/* Col 3 */}
              <div className="p-5 md:border-l md:border-gray-200">
                <span className="block text-[10px] tracking-widest uppercase text-gray-500">Desde</span>
                <span className="mt-1 block text-2xl font-bold text-moyblue">S/ 35.00</span>
              </div>

              {/* Col 4 */}
              <div className="p-5 md:border-l md:border-gray-200 md:text-right">
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center rounded
                             bg-yellow-400 text-[var(--color-moyblue)]
                             font-normal px-6 py-2.5 shadow hover:bg-yellow-300 transition"
                >
                  Solicita tu estimación exacta
                </Link>
              </div>
            </div>
          </div>

          {/* === Plan Estándar === */}
          <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-4 md:items-center">
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-900">Plan Estándar</h3>
                <p className="mt-1 text-sm text-gray-600">
                  Ideal para mudanzas pequeñas o almacenamiento temporal.
                </p>
              </div>

              <div className="p-5 md:border-l md:border-gray-200">
                <span className="block text-xs tracking-wide uppercase text-gray-500">Capacidad</span>
                <span className="mt-1 block font-medium text-gray-800">De 5 a 10 m³</span>
              </div>

              <div className="p-5 md:border-l md:border-gray-200">
                <span className="block text-[10px] tracking-widest uppercase text-gray-500">Desde</span>
                <span className="mt-1 block text-2xl font-bold text-moyblue">S/ 55.00</span>
              </div>

              <div className="p-5 md:border-l md:border-gray-200 md:text-right">
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center rounded
                             bg-yellow-400 text-[var(--color-moyblue)]
                             font-normal px-6 py-2.5 shadow hover:bg-yellow-300 transition"
                >
                  Solicita tu estimación exacta
                </Link>
              </div>
            </div>
          </div>

          {/* === Plan Personalizado === */}
          <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-4 md:items-center">
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-900">Plan Personalizado</h3>
                <p className="mt-1 text-sm text-gray-600">
                  Para quienes necesitan más espacio o tienen artículos especiales.
                </p>
              </div>

              <div className="p-5 md:border-l md:border-gray-200">
                <span className="block text-xs tracking-wide uppercase text-gray-500">Capacidad</span>
                <span className="mt-1 block font-medium text-gray-800">Más de 10 m³</span>
              </div>

              <div className="p-5 md:border-l md:border-gray-200">
                <span className="block text-[10px] tracking-widest uppercase text-gray-500">Precio</span>
                <span className="mt-1 block text-2xl font-bold text-moyblue">A medida</span>
              </div>

              <div className="p-5 md:border-l md:border-gray-200 md:text-right">
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center rounded
                             bg-yellow-400 text-[var(--color-moyblue)]
                             font-normal px-6 py-2.5 shadow hover:bg-yellow-300 transition"
                >
                  Solicita tu estimación exacta
                </Link>
              </div>
            </div>
          </div>
          {/* === Fin filas === */}
        </div>
      </div>
    </section>
  );
}
