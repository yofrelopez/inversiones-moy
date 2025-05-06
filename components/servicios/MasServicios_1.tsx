import Image from "next/image";

export default function MasServicios_1() {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-16 space-y-20">
      {/* Fila 1: Mudanza de residencias */}
      <div className="flex flex-col lg:flex-row gap-10 items-center">
        <div className="relative w-full lg:w-1/2 h-[420px]">
          <Image
            src="/images/servicios_3.jpg"
            alt="Mudanza de residencias"
            fill
            className="object-cover rounded"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl font-semibold text-[#01219C]">Mudanzas de residencias</h2>
          <div className="w-12 h-1 bg-yellow-400 my-2" />
          <p className="text-sm text-gray-500 mb-3">Mudanza de casa y departamento</p>
          <p className="text-sm text-gray-600 leading-relaxed space-y-3">
            Las mudanzas suelen ser tediosas, demandan de mucho tiempo y suelen ser riesgosas tanto en la maniobra de enseres como en su traslado.
            <br /><br />
            Ahorra tiempo y gana seguridad con nuestro servicio de mudanzas, donde aseguramos el traslado de tus valiosos enseres gracias a nuestros 25 años de experiencia y los mayores estándares de seguridad, salubridad y limpieza.
            <br /><br />
            Contamos con sistemas de embalaje, carretas inteligentes, funda acolchonadas para proteger muebles, protector de ascensores, jabas plásticas, roperos portátiles, rastreo GPS, equipos para maniobras en pisos altos y furgones de todas las capacidades.
          </p>
        </div>
      </div>

      {/* Fila 2: Mudanza corporativa + Gestión logística */}
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Columna izquierda: textos */}
        <div className="w-full lg:w-1/2 space-y-12">
          {/* Mudanza corporativa */}
          <div>
            <h2 className="text-3xl font-semibold text-[#01219C]">Mudanzas corporativas</h2>
            <div className="w-12 h-1 bg-yellow-400 my-2" />
            <p className="text-sm text-gray-500 mb-3">Mudanza de oficinas y empresas</p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Sabemos que las mudanzas a empresas necesitan ser muy eficientes y seguras.
              Por eso, brindamos una programación logística de acuerdo con el requerimiento
              de cada servicio y sus fechas límite. Garantizamos la calidad de nuestro servicio
              y el riguroso cuidado de su patrimonio.
            </p>
          </div>

          {/* Gestión logística */}
          <div>
            <h2 className="text-3xl font-semibold text-[#01219C]">Gestión logística</h2>
            <div className="w-12 h-1 bg-yellow-400 my-2" />
            <p className="text-sm text-gray-500 mb-3">Reconocidas empresas confían en nosotros</p>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Las empresas más importantes a nivel nacional confían en nuestro servicio de gestión
              logística y transporte, siendo este nuestro core business y servicio más demandado.
              <br /><br />
              Podemos controlar todo el sistema de distribución dentro de su compañía, desde la solicitud de pedidos,
              recojo, embarque, transporte, liquidación y facturación. Así, podrás brindar una mejor calidad de atención
              a tus clientes, concentrándote en el rubro principal de tu organización y mejorando la cadena de suministros
              a nivel organizacional. Nuestros principales servicios son:
            </p>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
              <li>Distribución local y nacional con unidades propias</li>
              <li>Puerta a Puerta</li>
              <li>Cross docking</li>
              <li>Almacén de Tránsito</li>
              <li>Empaque</li>
              <li>Carga y Descarga</li>
              <li>Seguro de Mercancías</li>
              <li>Seguimiento de Mercancías en Tiempo Real (GPS)</li>
              <li>Sistema de trazabilidad y seguimiento</li>
            </ul>
          </div>
        </div>

        {/* Columna derecha: imágenes */}
        <div className="w-full lg:w-1/2 space-y-6">
          <div className="relative w-full h-[450px]">
            <Image
              src="/images/servicios_4.jpg"
              alt="Mudanza corporativa"
              fill
              className="object-cover rounded"
            />
          </div>
          <div className="relative w-full h-[300px]">
            <Image
              src="/images/servicios_5.png"
              alt="Gestión logística"
              fill
              className="object-cover rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
