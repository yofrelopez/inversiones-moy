import Image from "next/image";

export default function Nosotros() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16 space-y-20">

        {/* Quienes Somos */}
        <div className="flex flex-col lg:flex-row gap-10 items-start">
        
        <div className="w-full lg:w-1/2">
          <h2 className="heading-2">Quiénes Somos</h2>
          <div className="heading-underline" />
          <p className="subtitle">Compromiso y seguridad</p>
          <p className="paragraph">

            Somos un equipo profesional que se esmera en atender las necesidades de nuestros exigentes clientes, tanto corporativos como particulares, satisfaciendo al rubro logístico, de distribución y transporte profesional.
            <br /><br />
            Nuestro personal está apoyado con equipos de alta tecnología, aplicativos en tiempo real, comunicaciones, sistema de rastreo, seguimiento y seguridad de su mercadería. Además, ponemos a disposición de nuestros clientes, una moderna y amplia flota de camiones propios con diversas capacidades.

          </p>
        </div>

        <div className="relative w-full lg:w-1/2 h-[400px]">
          <Image
            src="/images/nosotros_0.png"
            alt="Quienes Somos"
            fill
            className="object-cover rounded"
          />
        </div>


      </div>



      {/* Historia */}
      <div className="flex flex-col lg:flex-row gap-10 items-start">
        <div className="relative w-full lg:w-1/2 h-[400px]">
          <Image
            src="/images/nosotros_1.jpg"
            alt="Historia"
            fill
            className="object-cover rounded"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <h2 className="heading-2">Historia</h2>
          <div className="heading-underline" />
          <p className="subtitle">25 años de trayectoria</p>
          <p className="paragraph">
            Inversiones Moy S.A.C. nace el año 1995, mediante el esfuerzo de un grupo de profesionales con amplia experiencia en el rubro de transporte y operaciones logísticas, obteniendo experiencia en empresas con amplias flotas de distribución.
            <br /><br />
            La experiencia, unido a la filosofía oriental de Calidad Total, ha hecho que nuestra compañía tenga la confianza de empresas líderes de nuestro país, lo que afianza nuestro crecimiento y constante superación.
          </p>
        </div>
      </div>

      {/* Visión */}
      <div className="flex flex-col-reverse lg:flex-row gap-10 items-start">
        <div className="w-full lg:w-1/2">
          <h2 className="heading-2">Visión</h2>
          <div className="heading-underline" />
          <p className="subtitle">Ser los mejores</p>
          <p className="paragraph">
            Nuestra visión es consolidarnos como la empresa líder en mudanzas profesionales, servicios logísticos y transporte a nivel nacional, destacando por nuestra excelencia operativa, innovación constante y compromiso con la mejora continua.
            <br /><br />
            Alcanzaremos esta meta fortaleciendo el talento de nuestros colaboradores, quienes representan el motor de nuestra organización.
          </p>
        </div>
        <div className="relative w-full lg:w-1/2 h-[400px]">
          <Image
            src="/images/servicios_5.png"
            alt="Visión"
            fill
            className="object-cover rounded"
          />
        </div>
      </div>

      {/* Misión */}
      <div className="flex flex-col lg:flex-row gap-10 items-start">
      <div className="relative w-full lg:w-1/2 h-[400px]">
          <Image
            src="/images/nosotros_2.jpg"
            alt="Misión"
            fill
            className="object-cover rounded"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <h2 className="heading-2">Misión</h2>
          <div className="heading-underline" />
          <p className="subtitle">Satisfacción de nuestros clientes</p>
          <p className="paragraph">
            Nuestra misión es garantizar la plena satisfacción de nuestros clientes mediante un servicio logístico y de mudanzas que se distinga por su calidad, seguridad, puntualidad y eficiencia.
            <br /><br />
            Nos comprometemos a brindar soluciones integrales adaptadas a cada necesidad, respaldados por tecnología de vanguardia, procesos optimizados y un equipo humano altamente calificado.
          </p>
        </div>
      </div>
    </section>
  );
}
