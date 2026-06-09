"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const SLIDES = [
  {
    src: "/assets/images/portfolio/thumbnail/schneider_1.webp",
    label: "Schneider Electric",
  },
  {
    src: "/assets/images/portfolio/thumbnail/delta-plus_1.webp",
    label: "Delta Plus",
  },
  {
    src: "/assets/images/portfolio/thumbnail/saint_gobain_1.webp",
    label: "Saint-Gobain",
  },
  {
    src: "/assets/images/portfolio/thumbnail/databricks_1.webp",
    label: "Databricks",
  },
  {
    src: "/assets/images/portfolio/thumbnail/global_blue_1.webp",
    label: "Global Blue",
  },
];

const INTERVAL = 4000;

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, INTERVAL);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        overflow: "hidden",
      }}
      aria-hidden="true"
    >
      {SLIDES.map((slide, i) => (
        <div
          key={slide.src}
          style={{
            position: "absolute",
            inset: 0,
            transition: "opacity 1s ease-in-out",
            opacity: i === current ? 1 : 0,
          }}
        >
          <Image
            src={slide.src}
            alt={slide.label}
            fill
            priority={i === 0}
            style={{ objectFit: "cover", objectPosition: "center" }}
            sizes="100vw"
          />
        </div>
      ))}
      {/* Overlay sombre */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.58)",
        }}
      />
      {/* Indicateurs */}
      <div
        style={{
          position: "absolute",
          bottom: 24,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 8,
        }}
      >
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            style={{
              width: i === current ? 24 : 8,
              height: 8,
              borderRadius: 4,
              border: "none",
              background: i === current ? "#fff" : "rgba(255,255,255,0.45)",
              padding: 0,
              cursor: "pointer",
              transition: "width 0.3s ease, background 0.3s ease",
            }}
          />
        ))}
      </div>
    </div>
  );
}
