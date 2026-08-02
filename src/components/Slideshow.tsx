import { useEffect, useState } from "react";

type SlideshowProps = {
  images: string[];
  alt: string;
  className?: string;
  imageClassName?: string;
  interval?: number;
  width?: number;
  height?: number;
  loading?: "lazy" | "eager";
};

export function Slideshow({
  images,
  alt,
  className = "",
  imageClassName = "",
  interval = 4000,
  width,
  height,
  loading = "lazy",
}: SlideshowProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;
    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % images.length),
      interval,
    );
    return () => window.clearInterval(id);
  }, [images.length, interval]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {images.map((src, i) => (
        <img
          key={src + i}
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={i === 0 ? loading : "lazy"}
          className={`${i === 0 ? "" : "absolute inset-0"} w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${imageClassName}`}
          style={{ opacity: i === index ? 1 : 0 }}
        />
      ))}
    </div>
  );
}
