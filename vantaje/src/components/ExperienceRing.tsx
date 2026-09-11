"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const CARDS = [
  { src: "/images/ring-shop.jpg", label: "Shop", alt: "Shop — high street retail" },
  { src: "/images/ring-dine.jpg", label: "Dine", alt: "Dine — cafés and restaurants" },
  { src: "/images/ring-experience.jpg", label: "Experience", alt: "Experience — entertainment and gaming" },
  { src: "/images/ring-everyday.jpg", label: "Everyday", alt: "Everyday — hypermart" },
  { src: "/images/ring-work.jpg", label: "Work", alt: "Work — contemporary offices" },
];

const STEP = 360 / CARDS.length;
const RADIUS = 504;

export default function ExperienceRing() {
  const [angle, setAngle] = useState(0);
  const rafRef = useRef<number | null>(null);
  const lastRef = useRef<number | null>(null);

  useEffect(() => {
    const tick = (t: number) => {
      if (lastRef.current === null) lastRef.current = t;
      const dt = t - lastRef.current;
      lastRef.current = t;
      setAngle((a) => a + dt * 0.012);
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section
      id="hp-experience"
      className="relative overflow-hidden bg-[radial-gradient(120%_90%_at_50%_15%,rgb(58,44,34)_0%,rgb(36,26,19)_55%,rgb(26,18,13)_100%)] px-[clamp(24px,5.4vw,86px)] py-[clamp(80px,13vh,150px)]"
    >
      <div className="relative flex flex-wrap items-end justify-between gap-x-8 gap-y-6">
        <h2 className="font-display m-0 max-w-[760px] min-w-0 flex-1 basis-80 text-[clamp(34px,4.6vw,72px)] leading-[1.04] font-medium tracking-[0.05em] text-[rgb(247,244,237)] uppercase">
          The Vantaje Experience
        </h2>
        <a
          href="#hp-cta"
          className="font-jost flex-none border border-[rgba(247,244,237,0.45)] px-8 py-[15px] text-sm font-medium tracking-[0.22em] text-[rgb(247,244,237)] uppercase"
        >
          Explore Experiences
        </a>
      </div>

      <div
        className="relative mt-[clamp(46px,7vh,84px)] h-[447px]"
        style={{ perspective: "3200px", perspectiveOrigin: "50% 50%" }}
      >
        <div
          className="absolute top-[70px] left-1/2 h-0 w-0"
          style={{
            transformStyle: "preserve-3d",
            transform: `rotateY(${-angle}deg)`,
          }}
        >
          {CARDS.map((card, i) => (
            <article
              key={card.label}
              className="absolute top-0 -left-[280px] h-[297px] w-[560px]"
              style={{
                transformStyle: "flat",
                backfaceVisibility: "hidden",
                transform: `rotateY(${i * STEP}deg) translateZ(${RADIUS}px)`,
              }}
            >
              <div className="relative h-full w-full overflow-hidden rounded-[14px] bg-[rgb(253,251,246)] shadow-[0_30px_70px_rgba(0,0,0,0.45)]">
                <Image
                  src={card.src}
                  alt={card.alt}
                  fill
                  sizes="560px"
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5">
                  <span className="font-jost text-xs font-medium tracking-[0.26em] text-[rgb(232,198,138)] uppercase">
                    {card.label}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="pointer-events-none absolute bottom-[4%] left-1/2 h-[60px] w-[min(74%,860px)] -translate-x-1/2 bg-[radial-gradient(rgba(0,0,0,0.5),transparent_72%)]" />
      </div>
    </section>
  );
}
