"use client";
import Image from "next/image";
import { motion } from "framer-motion";

interface HeroServiceProps {
  title: string;
  subtitle?: string;
  image: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function HeroService({ title, subtitle, image }: HeroServiceProps) {
  const words = title.split(" ");
  const [first, ...rest] = words;
  const lastWord = rest[rest.length - 1];
  const middleWords = rest.slice(0, -1);

  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center">
      <Image src={image} alt={title} fill priority className="object-cover brightness-50" />
      <motion.div 
        className="relative z-10 lg:min-w-7xl mx-auto px-6 md:px-12 text-left"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-bold text-white">
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
        </motion.h1>
        {subtitle && (
          <motion.p variants={itemVariants} className="pt-4 mt-4 text-lg md:text-xl text-gray-100 max-w-2xl">
            {subtitle}
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}
