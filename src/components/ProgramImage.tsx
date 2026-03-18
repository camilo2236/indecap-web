import Image from "next/image";

interface ProgramImageProps {
  src: string;
  alt: string;
}

export function ProgramImage({ src, alt }: ProgramImageProps) {
  return (
    <div className="relative w-full h-56 md:h-64 rounded-2xl overflow-hidden shadow-md">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 33vw"
        priority={false}
      />

      {/* Overlay suave institucional */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
    </div>
  );
}