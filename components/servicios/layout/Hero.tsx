"use client";
import Image from "next/image";

interface HeroServiceProps {
  title: string;
  subtitle?: string;
  image: string;
}

export default function HeroService({ title, subtitle, image }: HeroServiceProps) {
  const [first, ...rest] = title.split(" ");

  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center">
      <Image src={image} alt={title} fill priority className="object-cover brightness-50" />
      <div className="relative z-10 min-w-7xl mx-auto px-6 md:px-12 text-left">
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          <span className="border-b-4 border-yellow-400 pb-3">{first}</span>{" "}
          {rest.join(" ")}
        </h1>
        {subtitle && (
          <p className="pt-4 mt-4 text-lg md:text-xl text-gray-100 max-w-2xl">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
