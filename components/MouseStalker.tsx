"use client";

import { useEffect, useState } from "react";

export default function MouseStalker() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed left-0 top-0 z-[9999] h-4 w-4 rounded-full bg-[#ff8fc7] shadow-[0_0_14px_rgba(255,143,199,0.6)]"
      style={{
        transform: `translate(${position.x - 8}px, ${position.y - 8}px)`,
      }}
    />
  );
}
