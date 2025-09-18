"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type Slide = {
  title: string;
  kpi: string;
  img: string;
};

// Self-contained slider data
const SLIDES: Slide[] = [
  {
    title: "İş Sağlığı ve Güvenliği Eğitimleri",
    kpi: "Çalışanlarınıza yasal gerekliliklere uygun, anlaşılır ve uygulamalı eğitimler sunuyoruz.",
    img: "/img/case1.jpg",
  },
  {
    title: "Uygulamalı OSGB Çözümleri",
    kpi: "Her işletmeye özel iş sağlığı ve güvenliği uygulamaları geliştiriyoruz.",
    img: "/img/case2.jpg",
  },
  {
    title: "Risk Analizi Hizmetlerimiz",
    kpi: "İş yerlerinde potansiyel tehlikeleri belirleyerek güvenli bir çalışma ortamı sağlıyoruz.",
    img: "/img/case3.jpg",
  },
];

interface HeroRightSliderProps {
  className?: string;
  intervalMs?: number; // default 4000ms
}

export default function HeroRightSlider({
  className = "",
  intervalMs = 4000,
}: HeroRightSliderProps) {
  const [index, setIndex] = useState(0);

  const total = SLIDES.length;

  // Guard against invalid interval
  const safeInterval = useMemo(() => Math.max(1500, intervalMs | 0), [intervalMs]);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, safeInterval);
    return () => clearInterval(id);
  }, [safeInterval, total]);

  const goTo = (i: number) => setIndex(i % total);

  return (
    <div
      className={`relative w-full h-full overflow-hidden rounded-2xl shadow-xl ${className}`}
    >
      <div className="relative h-full min-h-[300px] md:min-h-[460px]">
        {/* Slides stacked absolutely with fade crossfade */}
        {SLIDES.map((slide, i) => {
          const isActive = i === index;
          return (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                isActive ? "opacity-100" : "opacity-0"
              }`}
            >
              {/* Background image */}
              <Image
                src={slide.img}
                alt={slide.title}
                fill
                priority={i === 0}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />

              {/* Dark navy gradient overlay for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b2545]/90 via-[#0b2545]/60 to-transparent" />

              {/* Bottom content */}
              <div className="absolute inset-x-0 bottom-0 p-4 md:p-6 text-white">
                <h3 className="text-lg md:text-xl font-semibold drop-shadow-sm">{slide.title}</h3>
                <p className="text-sm md:text-base text-white/90 mt-1">{slide.kpi}</p>
              </div>
            </div>
          );
        })}

        {/* Dots - bottom right */}
        <div className="absolute bottom-3 right-3 flex items-center gap-2">
          {SLIDES.map((_, i) => {
            const active = i === index;
            return (
              <button
                key={i}
                aria-label={`Slide ${i + 1}`}
                onClick={() => goTo(i)}
                className={`h-2.5 w-2.5 rounded-full border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/60 ${
                  active
                    ? "bg-white border-white scale-100"
                    : "bg-white/30 border-white/50 hover:bg-white/60 hover:scale-110"
                }`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
