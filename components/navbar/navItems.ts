// components/navbar/navItems.ts

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const navItems: NavItem[] = [
  { label: "Inicio", href: "/" },
  {
    label: "Servicios",
    href: "/servicios",
    children: [
      { label: "Mudanzas", href: "/servicios/mudanzas" },
      { label: "Gestión Logística", href: "/servicios/gestion-logistica" },
      { label: "Almacenaje", href: "/servicios/almacenaje" },
      { label: "Renting", href: "/servicios/renting" },
      { label: "Transporte en Frío", href: "/servicios/transporte-frio" },
      { label: "Productos Peligrosos", href: "/servicios/productos-peligrosos" },
    ],
  },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contacto" },
  { label: "Cotiza", href: "/cotiza" },
];
