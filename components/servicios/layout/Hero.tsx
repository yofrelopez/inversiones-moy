"use client";
import Image from "next/image";

interface HeroServiceProps {
  title: string;
  subtitle?: string;
  image: string;
}

export default function HeroService({ title, subtitle, image }: HeroServiceProps) {
  const words = title.split(" ");
  const [first, ...rest] = words;
  const lastWord = rest[rest.length - 1];
  const middleWords = rest.slice(0, -1);

  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center">
      <Image src={image} alt={title} fill priority className="object-cover brightness-50" />
      <div className="relative z-10 lg:min-w-7xl mx-auto px-6 md:px-12 text-left">
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          {/* Desktop: línea debajo de primera palabra */}
          <span className="hidden md:inline">
            <span className="border-b-4 border-yellow-400 pb-3">{first}</span>{" "}
            {rest.join(" ")}
          </span>
          
          {/* Mobile: línea debajo de última palabra */}
          <span className="md:hidden">
            {first} {middleWords.join(" ")}{middleWords.length > 0 ? " " : ""}
            <span className="border-b-4 border-yellow-400 pb-3">{lastWord}</span>
          </span>
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
