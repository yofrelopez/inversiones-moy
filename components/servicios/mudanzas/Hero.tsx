// components/servicios/mudanzas/Hero.tsx
import HeroService from "../layout/Hero";
import heroImg from "../../../public/images/services/mudanzas/mudanzas-hero.jpg";

export default function Hero() {
  return (
    <HeroService
      title="Mudanzas Profesionales"
      subtitle="Con más 25 años de experiencia, garantizamos traslados seguros, rápidos y eficientes para hogares y empresas en todo el Perú."
      image={heroImg}
    />
  );
}
