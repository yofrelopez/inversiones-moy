"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const bullets = [
  "Aplicativo propio de trazabilidad: visibilidad en tiempo real de cada envío con reportes automáticos para su empresa.",
  "Infraestructura propia: flota moderna y almacenes de tránsito que aseguran continuidad operativa.",
  "Seguridad garantizada: seguro de mercancías en todos los traslados y protocolos de carga/descarga profesional.",
  "Escalabilidad: capacidad de adaptarnos al crecimiento y expansión de su compañía a nivel nacional.",
  "Atención 24/7: soporte especializado en todo momento, alineado con las exigencias de empresas globales.",
];

export default function ValueProposition() {
  return (
    // Superposición real sobre la franja azul anterior:
    <section className="relative z-10 -mt-24 md:-mt-28 lg:-mt-56">
      <div className="max-w-7xl mx-auto px-6">
        {/* Card desplazado hacia la derecha dejando aire a la izquierda */}
        <div className="bg-white rounded-xl shadow-2xl md:grid md:grid-cols-5 gap-8 items-center
                        p-6 md:p-10 lg:p-12 lg:px-[150px]
                        md:ml-12 lg:ml-16
                        min-h-[420px] lg:min-h-[480px]">

          {/* Texto (3/5) */}
          <div className="md:col-span-3">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              Nuestra <span className="border-b-4 border-yellow-400 pb-4">Propuesta</span> de Valor
            </h3>

            <p className="pt-4 mt-4 text-gray-700 leading-relaxed">
              No solo transportamos productos. Nos convertimos en un socio estratégico que impulsa
              la eficiencia de su cadena de suministros con innovación, seguridad y control absoluto.
            </p>

            <ul className="mt-6 space-y-3">
              {bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <CheckCircle2 className="mt-[2px] shrink-0 text-[#2FB455]" size={18} strokeWidth={1.8} />
                  <span className="text-[15px] leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Imagen (2/5) */}
          <div className="md:col-span-2 flex justify-center md:justify-end">
            <Image
              src="/images/services/gestion-logistica/moving_man.png"
              alt="Equipo especializado"
              width={420}
              height={520}
              className="object-contain max-h-[420px] lg:max-h-[620px]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
