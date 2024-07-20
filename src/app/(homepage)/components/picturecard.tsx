import Image from "next/image";

export function PictureCard({ src, alt }: { src: string; alt: string }) {
  return (
    <Image
      alt={alt}
      src={src}
      width={0}
      height={0}
      sizes="100%"
      className="w-full h-auto xl:w-auto xl:h-full rounded-one"
    />
  );
}
