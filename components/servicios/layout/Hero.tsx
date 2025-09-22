import Image, { StaticImageData } from "next/image";

type HeroServiceProps = {
  title: string;
  subtitle?: string;
  image: StaticImageData | string;
  alt?: string;
  priority?: boolean;
};

export default function HeroService({
  title,
  subtitle,
  image,
  alt = title,
  priority = true,
}: HeroServiceProps) {
  const [first, ...rest] = title.split(" ");

  // ✅ detectar import estático vs string
  const isStatic = typeof image === "object" && image !== null && "src" in image;
  const hasBlur =
    isStatic && "blurDataURL" in (image as StaticImageData) && !!(image as any).blurDataURL;

  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center">
      <Image
        src={image}
        alt={alt}
        fill
        priority={priority}
        quality={85}
        sizes="100vw"
        placeholder={hasBlur ? "blur" : "empty"}
        {...(hasBlur ? { blurDataURL: (image as any).blurDataURL } : {})}
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 text-left">
        <h1 className="text-4xl md:text-6xl font-light text-white">
          <span className="border-b-4 border-yellow-400 pb-2">{first}</span>{" "}
          {rest.join(" ")}
        </h1>
        {subtitle && (
          <p className="mt-4 text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
