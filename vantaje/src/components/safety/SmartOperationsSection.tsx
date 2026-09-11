"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const CARDS = [
  {
    number: "01",
    title: "Multi-Level Parking",
    img: "/images/safety/ops-1.jpg",
    alt: "Multi-level parking deck at dusk",
    textOrder: 1,
    imgOrder: 2,
    gradient: "linear-gradient(270deg, rgba(11,10,9,0) 55%, rgba(11,10,9,0.72) 100%)",
    top: 88,
  },
  {
    number: "02",
    title: "High-Speed Elevators",
    img: "/images/safety/ops-2.jpg",
    alt: "Lift lobby with floor indicators",
    textOrder: 2,
    imgOrder: 1,
    gradient: "linear-gradient(90deg, rgba(11,10,9,0) 55%, rgba(11,10,9,0.72) 100%)",
    top: 104,
  },
  {
    number: "03",
    title: "Managed Operations",
    img: "/images/safety/ops-3.jpg",
    alt: "Security control room monitoring feeds",
    textOrder: 1,
    imgOrder: 2,
    gradient: "linear-gradient(270deg, rgba(11,10,9,0) 55%, rgba(11,10,9,0.72) 100%)",
    top: 120,
  },
];

export default function SmartOperationsSection() {
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const shadeRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let raf = 0;

    const syncStack = () => {
      const cards = cardRefs.current;
      const last = cards.length - 1;
      cards.forEach((card, i) => {
        if (!card) return;
        if (i === last) {
          card.style.transform = "";
          const sh = shadeRefs.current[i];
          if (sh) sh.style.opacity = "0";
          return;
        }
        const next = cards[i + 1];
        if (!next) return;
        const r = card.getBoundingClientRect();
        const nr = next.getBoundingClientRect();
        const h = r.height || 1;
        const p = Math.max(0, Math.min(1, (r.top + h - nr.top) / h));
        card.style.transform = `scale(${(1 - p * 0.04).toFixed(4)})`;
        const shade = shadeRefs.current[i];
        if (shade) shade.style.opacity = (p * 0.55).toFixed(3);
      });
    };

    const loop = () => {
      syncStack();
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section id="s-ops" className="relative overflow-clip py-[clamp(60px,10vh,120px)]">
      <div className="absolute inset-0 opacity-[0.12]">
        <Image
          src="/images/safety/ops-bg.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(11,10,9)_0%,rgba(11,10,9,0.55)_42%,rgb(11,10,9)_100%)]" />
      </div>

      <div className="relative mx-auto max-w-[1320px] px-[clamp(18px,3vw,48px)]">
        <div className="mb-5 text-[11px] tracking-[0.3em] text-[rgb(232,198,138)] uppercase">
          Smart Operations
        </div>
        <h2 className="m-0 mb-[clamp(30px,5vh,64px)] max-w-[22ch] text-[clamp(26px,4vw,64px)] leading-[0.98] font-light tracking-[-0.028em] text-[rgb(251,247,239)] uppercase">
          Designed to Work{" "}
          <span className="font-display font-normal text-[rgb(232,198,138)] italic normal-case">
            Seamlessly.
          </span>
        </h2>

        <div className="flex flex-col gap-[clamp(30px,7vh,90px)]">
          {CARDS.map((item, i) => (
            <div key={item.number} className="sticky pb-0" style={{ top: `${item.top}px` }}>
              <article
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                className="relative grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] overflow-hidden border border-[rgba(240,234,221,0.12)] bg-[rgb(16,14,12)] [transform-origin:50%_0] [will-change:transform]"
              >
                <div
                  className="flex flex-col gap-[clamp(14px,2vh,22px)] p-[clamp(26px,3.4vw,54px)]"
                  style={{ order: item.textOrder }}
                >
                  <div className="flex items-center gap-3 text-[10.5px] tracking-[0.28em] uppercase">
                    <span className="text-[rgb(232,198,138)]">{item.number}</span>
                    <span className="block h-px w-[34px] bg-[rgba(240,234,221,0.28)]" />
                    <span className="text-[rgba(240,234,221,0.45)]">Smart Operations</span>
                  </div>
                  <h3 className="mx-0 mt-auto mb-0 max-w-[16ch] text-[clamp(24px,2.8vw,44px)] leading-[1.02] font-light tracking-[-0.022em] text-[rgb(251,247,239)] uppercase">
                    {item.title}
                  </h3>
                  <a
                    href="#s-cta"
                    className="font-jost inline-flex items-center gap-2.5 text-[11px] tracking-[0.2em] text-[rgba(240,234,221,0.6)] uppercase transition-colors hover:text-[rgb(232,198,138)]"
                  >
                    Enquire Now <span className="text-[rgb(232,198,138)]">→</span>
                  </a>
                </div>

                <div
                  className="group relative min-h-[clamp(230px,34vh,380px)] overflow-hidden bg-[rgb(19,17,16)]"
                  style={{ order: item.imgOrder }}
                >
                  <div
                    ref={(el) => {
                      shadeRefs.current[i] = el;
                    }}
                    className="pointer-events-none absolute inset-0 z-[3] bg-[rgb(7,6,5)] opacity-0 transition-opacity duration-200 ease-linear"
                  />
                  <Image
                    src={item.img}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-[2200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  />
                  <div className="absolute inset-0" style={{ background: item.gradient }} />
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
