"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function MasServicios_2() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 space-y-20">
      {/* Almacenaje */}
      <motion.div 
        id="almacenaje"
        className="flex flex-col lg:flex-row gap-10 items-start"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl font-semibold text-[#01219C]">Almacenaje</h2>
          <div className="w-12 h-1 bg-yellow-400 my-2" />
          <p className="text-sm text-gray-500 mb-3">Cuidamos rigurosamente su patrimonio</p>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            Entendemos que los espacios físicos son reducidos y limitados, es por esto que te ofrecemos el servicio de almacenaje y control de inventarios. El almacenaje incluye:
          </p>
          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
            <li><strong>Recepción de productos:</strong> Se comprueba y registra el estado de los productos entrantes, así como la cantidad, calidad y otras características, de acuerdo a los requerimientos del cliente.</li>
            <li><strong>Almacenamiento:</strong> Consiste en guardar los productos de tal manera que su acceso sea eficiente.</li>
            <li><strong>Conservación y mantenimiento:</strong> Los productos deberán conservarse en perfecto estado durante su almacenaje, aplicando las normas de seguridad, salud y otros requerimientos vigentes.</li>
            <li><strong>Administración de inventarios:</strong> Consiste en llevar un registro de las mercancías para mantener informado al cliente acerca de sus productos y la cantidad que mantiene en el almacén.</li>
            <li><strong>Transporte:</strong> Una vez que se levanta el pedido del producto, se embala y envía según sus características y destino.</li>
          </ul>
          <div className="mt-6">
            <Link href="/servicios/almacenaje" className="inline-block px-6 py-2 border-2 border-[#01219C] text-[#01219C] font-semibold rounded hover:bg-[#01219C] hover:text-white transition-colors">
              Ver Detalles
            </Link>
          </div>
        </div>
        <div className="relative w-full lg:w-1/2 h-[400px]">
          <Image
            src="/images/servicios_6.jpg"
            alt="Almacenaje"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover rounded"
          />
        </div>
      </motion.div>

      {/* Renting */}
      <motion.div 
        id="renting"
        className="flex flex-col-reverse lg:flex-row gap-10 items-start"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="relative w-full lg:w-1/2 h-[400px]">
          <Image
            src="/images/servicios_7.jpg"
            alt="Renting"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover rounded"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl font-semibold text-[#01219C]">Renting</h2>
          <div className="w-12 h-1 bg-yellow-400 my-2" />
          <p className="text-sm text-gray-500 mb-3">Solución de movilidad para empresas</p>
          <p className="text-sm text-gray-600 leading-relaxed mb-3">
            El servicio de renting de vehículos viene creciendo de forma positiva en el Perú, gracias a sus diversos beneficios, como: el no registro de activos ni endeudamiento, no consumo de línea de crédito, mejoramiento del flujo de caja y la liquidez de la compañía.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed mb-3">
            El renting resulta una interesante solución de movilidad para las empresas que buscan mejores resultados en costo-beneficio, enfocándose en su core business y en tus clientes.
          </p>
          <p className="text-sm text-gray-600 mb-2">¿Qué ofrecemos?</p>
          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
            <li>Alquiler de unidades móviles equipadas</li>
            <li>Mantenimiento del automóvil</li>
            <li>Pago de Impuestos</li>
            <li>Renovación anual del SOAT</li>
            <li>GPS integrado</li>
          </ul>
          <div className="mt-6">
            <Link href="/servicios/renting" className="inline-block px-6 py-2 border-2 border-[#01219C] text-[#01219C] font-semibold rounded hover:bg-[#01219C] hover:text-white transition-colors">
              Ver Detalles
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Transporte en Frío */}
      <motion.div 
        id="transporte-frio"
        className="flex flex-col lg:flex-row gap-10 items-start"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="relative w-full lg:w-1/2 h-[300px]">
          <Image
            src="/images/servicios_8.jpg"
            alt="Transporte en frío"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover rounded"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl font-semibold text-[#01219C]">Transporte en Frío</h2>
          <div className="w-12 h-1 bg-yellow-400 my-2" />
          <p className="text-sm text-gray-500 mb-3">Climatización durante el traslado</p>
          <p className="text-sm text-gray-600 leading-relaxed">
            Mantener la cadena de frío es un factor importante para muchas organizaciones que ofrecen productos perecederos, material medicinal, vacunas, reactivos, muestras biológicas, etc.
            <br /><br />
            Inversiones Moy ofrece el necesario acondicionamiento en el traslado de sus productos, cumpliendo con estrictos estándares de calidad y compromiso con el cliente. Nuestros furgones llegan a acondicionar la temperatura hasta -20 grados Celsius.
          </p>
          <div className="mt-6">
            <Link href="/servicios/transporte-frio" className="inline-block px-6 py-2 border-2 border-[#01219C] text-[#01219C] font-semibold rounded hover:bg-[#01219C] hover:text-white transition-colors">
              Ver Detalles
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Productos peligrosos */}
      <motion.div 
        id="productos-peligrosos"
        className="flex flex-col-reverse lg:flex-row gap-10 items-start"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl font-semibold text-[#01219C]">Productos Peligrosos</h2>
          <div className="w-12 h-1 bg-yellow-400 my-2" />
          <p className="text-sm text-gray-500 mb-3">Seguridad y Cumplimiento en Cada Envío</p>
          <p className="text-sm text-gray-600 leading-relaxed">
            El traslado de materiales peligrosos exige máxima seguridad y cumplimiento normativo. En Inversiones Moy contamos con experiencia, permisos (D.S. 021-2008-MTC), protocolos bajo los lineamientos de la ONU y personal altamente certificado en manipulación segura para realizar operaciones de transporte confiables y sin riesgos.
          </p>
          <div className="mt-6">
            <Link href="/servicios/productos-peligrosos" className="inline-block px-6 py-2 border-2 border-[#01219C] text-[#01219C] font-semibold rounded hover:bg-[#01219C] hover:text-white transition-colors">
              Ver Detalles
            </Link>
          </div>
        </div>
        <div className="relative w-full lg:w-1/2 h-[300px]">
          <Image
            src="/images/servicios_9.jpg"
            alt="Productos peligrosos"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover rounded"
          />
        </div>
      </motion.div>
    </section>
  );
}
