"use client";

import Image from "next/image";
import { useState } from "react";

type LikeCardProps = {
  src: string;
  alt: string;
  description: string;
};

export default function LikeCard({ src, alt, description }: LikeCardProps) {
  const [show, setShow] = useState(false);

  return (
    <div
      className="relative w-full cursor-pointer overflow-hidden rounded-lg border border-slate-700 bg-slate-800 shadow-lg"
      onClick={() => setShow((prev) => !prev)}
    >
      <Image
        src={src}
        alt={alt}
        width={500}
        height={500}
        sizes="(max-width: 640px) 100vw, 33vw"
        className="block w-full object-cover"
      />

      {show && (
        <div className="absolute inset-0 flex items-end bg-black/50 p-4 text-white">
          <p className="text-sm leading-relaxed">{description}</p>
        </div>
      )}
    </div>
  );
}
