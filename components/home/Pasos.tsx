import React from 'react';
import { Headphones, ShieldCheck, Truck } from 'lucide-react';

export default function Pasos() {
  return (
    <section className="py-20 bg-[#01219C]/4 border-y border-gray-100/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Columna Izquierda: Imagen */}
          <div className="w-full relative flex items-center justify-center order-2 lg:order-1">
            <div className="w-full max-w-[500px] lg:max-w-none rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-white">
              <img
                src="/images/tres_pasos.png"
                alt="Proceso de entrega en 3 pasos"
                className="w-full h-auto object-cover block"
              />
            </div>
          </div>

          {/* Columna Derecha: Texto y Pasos */}
          <div className="space-y-10 order-1 lg:order-2">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-[#01219C] tracking-tight">
                Entregamos en 3 pasos
              </h2>
              <div className="w-16 h-1 bg-yellow-400 rounded" />
              <p className="text-gray-600 text-base md:text-lg max-w-xl">
                La forma rentable de enviar sus productos de bajo peso a los consumidores.
              </p>
            </div>

            <div className="space-y-8">
              {/* Paso 1 */}
              <div className="flex items-start gap-4 md:gap-5">
                <div className="flex-shrink-0 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#01219C] text-white flex items-center justify-center font-bold text-sm shadow-md">
                    1
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#01219C] flex items-center justify-center border border-blue-100/50">
                    <Headphones className="w-6 h-6 stroke-[1.5]" />
                  </div>
                </div>
                <div className="space-y-1">
                  <h4 className="text-lg font-semibold text-[#01219C]">
                    Contáctenos
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed max-w-md">
                    Ofrecemos la información de envío de carga y entrega de distribución.
                  </p>
                </div>
              </div>

              {/* Paso 2 */}
              <div className="flex items-start gap-4 md:gap-5">
                <div className="flex-shrink-0 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#01219C] text-white flex items-center justify-center font-bold text-sm shadow-md">
                    2
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#01219C] flex items-center justify-center border border-blue-100/50">
                    <ShieldCheck className="w-6 h-6 stroke-[1.5]" />
                  </div>
                </div>
                <div className="space-y-1">
                  <h4 className="text-lg font-semibold text-[#01219C]">
                    Entrega segura y protegida
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed max-w-md">
                    Al final del día, en el futuro, una nueva normalidad de la distribución.
                  </p>
                </div>
              </div>

              {/* Paso 3 */}
              <div className="flex items-start gap-4 md:gap-5">
                <div className="flex-shrink-0 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#01219C] text-white flex items-center justify-center font-bold text-sm shadow-md">
                    3
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#01219C] flex items-center justify-center border border-blue-100/50">
                    <Truck className="w-6 h-6 stroke-[1.5]" />
                  </div>
                </div>
                <div className="space-y-1">
                  <h4 className="text-lg font-semibold text-[#01219C]">
                    Optimización de transporte
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed max-w-md">
                    Aproveche la fruta baja para identificar un valor de depósito aproximado.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
