import { HiOutlineTruck, HiOutlineClipboardList, HiOutlineCube } from "react-icons/hi";
import { TbTruckDelivery, TbSnowflake, TbAlertTriangle } from "react-icons/tb";
import Link from "next/link";

const servicios = [
  {
    icon: <HiOutlineCube  size={90} strokeWidth={1} />,
    title: "Mudanza Local",
    desc: "Ahorra tiempo y gana seguridad con nuestro servicio de mudanzas de casas y corporativas.",
  },
  {
    icon: <HiOutlineTruck size={90} strokeWidth={1} />,
    title: "Gestión Logística",
    desc: "Control de todo el sistema de distribución de compañías, trasladamos insumos y ecommerce.",
  },
  {
    icon: <HiOutlineClipboardList size={90} strokeWidth={1} />,
    title: "Almacenaje",
    desc: "Guardado, controlado inventarios y cuidado riguroso de existencias.",
  },
  {
    icon: <TbTruckDelivery size={90} strokeWidth={1} />,
    title: "Renting",
    desc: "Arrendamiento de unidades de transporte y solución de movilidad para empresas.",
  },
  {
    icon: <TbSnowflake size={90} strokeWidth={1} />,
    title: "Transporte en frío",
    desc: "Control de temperatura ideal para productos perecederos y medicinales.",
  },
  {
    icon: <TbAlertTriangle size={90} strokeWidth={1} />,
    title: "Productos peligrosos",
    desc: "Traslado de materiales peligrosos junto a personal capacitado y con permisos correspondientes.",
  },
];

export default function EncabezadoServicios() {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat text-white py-20 px-6"
      style={{ backgroundImage: "url('/images/fondo-servicios.jpg')" }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-center pb-6">
        {servicios.map((servicio, i) => (
          <Link
            key={i}
            href="/servicios"
            className="flex flex-col items-center gap-4 transition-colors cursor-pointer"
          >
            <div className="text-yellow-400 hover:text-white">{servicio.icon}</div>
            <h3 className="text-xl font-light">{servicio.title}</h3>
            <p className="text-sm text-white font-extralight">{servicio.desc}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
