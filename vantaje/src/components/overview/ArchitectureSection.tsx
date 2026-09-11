"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const MARQUEE_ITEMS = [
  "Contemporary Glass Façade",
  "Striking Modern Geometry",
  "Grand Arrival Experience",
  "Expansive Plazas",
  "Commanding Street Presence",
];

function useParallax(speed: number) {
  const ref = useRef<HTMLDivElement>(null);
  const [y, setY] = useState(0);

  useEffect(() => {
    let raf = 0;
    const tick = () => {
      const el = ref.current;
      if (el) {
        const rect = el.getBoundingClientRect();
        const center = rect.top + rect.height / 2 - window.innerHeight / 2;
        setY(-center * speed);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [speed]);

  return { ref, y };
}

function ParallaxImage({
  src,
  alt,
  aspect,
  speed,
}: {
  src: string;
  alt: string;
  aspect: string;
  speed: number;
}) {
  const { ref, y } = useParallax(speed);
  return (
    <div ref={ref} className="overflow-hidden bg-[rgb(19,17,16)]">
      <div className="relative w-full" style={{ aspectRatio: aspect }}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
          style={{ transform: `scale(1.15) translateY(${y}px)` }}
        />
      </div>
    </div>
  );
}

export default function ArchitectureSection() {
  const track = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <section id="v-arch" className="relative overflow-hidden pt-[clamp(60px,10vh,120px)]">
      <div className="px-[clamp(18px,3vw,48px)]">
        <div className="mb-5 text-[11px] tracking-[0.3em] text-[rgb(232,198,138)] uppercase">
          Architectural Brilliance
        </div>
        <h2 className="m-0 max-w-[22ch] text-[clamp(23px,3vw,48px)] leading-[1.02] font-light tracking-[-0.02em] text-[rgb(251,247,239)] uppercase">
          Architecture Crafted for{" "}
          <span className="font-display font-normal text-[rgb(232,198,138)] italic normal-case">
            Timeless Appeal
          </span>{" "}
          and Maximum Commercial Visibility.
        </h2>
      </div>

      <div className="mt-[clamp(34px,6vh,68px)] overflow-hidden border-y border-[rgba(240,234,221,0.12)] py-[clamp(16px,2.4vh,26px)]">
        <div className="marquee-track flex w-max">
          {track.map((label, i) => (
            <span
              key={i}
              className="flex items-center gap-[clamp(20px,3vw,48px)] pr-[clamp(20px,3vw,48px)] text-[clamp(17px,2vw,30px)] font-light tracking-[-0.01em] whitespace-nowrap text-[rgba(240,234,221,0.82)] uppercase"
            >
              {label}
              <span className="text-[0.5em] text-[rgb(232,198,138)]">◆</span>
            </span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-[clamp(12px,1.6vw,20px)] px-[clamp(18px,3vw,48px)] pt-[clamp(26px,4.5vh,56px)] pb-[clamp(34px,6vh,72px)]">
        <ParallaxImage src="/images/overview/arch-1.jpg" alt="Façade by day" aspect="3/4" speed={0.06} />
        <div className="flex flex-col gap-[clamp(12px,1.6vw,20px)]">
          <ParallaxImage src="/images/overview/arch-2.jpg" alt="Retail atrium" aspect="16/10" speed={0.09} />
          <ParallaxImage src="/images/overview/arch-3.jpg" alt="Rooftop plaza" aspect="16/10" speed={0.07} />
        </div>
        <ParallaxImage src="/images/overview/arch-4.jpg" alt="Aerial view at night" aspect="3/4" speed={0.05} />
      </div>
    </section>
  );
}
