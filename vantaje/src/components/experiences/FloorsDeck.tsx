"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const FLOORS = [
  {
    number: "01",
    titleLine1: "Designed for visibility.",
    titleLine2: "Built for engagement.",
    body: "Double-height, highly visible storefronts crafted for maximum brand exposure, effortless consumer movement and high-impact interaction.",
    tags: ["Double-height frontage", "Street-level access"],
    label: "High Street Retail",
    images: ["/images/experiences/retail-1.jpg", "/images/experiences/retail-2.jpg", "/images/experiences/retail-3.jpg"],
    bg: "rgb(13,11,10)",
  },
  {
    number: "02",
    titleLine1: "Curated for",
    titleLine2: "aspirational experiences.",
    body: "Premium spaces created for boutique fashion, lifestyle brands and flagship retail experiences.",
    tags: ["Boutique fashion", "Flagship formats"],
    label: "Retail, Fashion & Lifestyle",
    images: ["/images/experiences/fashion-1.jpg", "/images/experiences/fashion-2.jpg", "/images/experiences/fashion-3.jpg"],
    bg: "rgb(19,16,16)",
  },
  {
    number: "03",
    titleLine1: "An everyday",
    titleLine2: "anchor for the city.",
    body: "A high-frequency destination designed around daily essential shopping, generating consistent and repeat visitation across the Vantaje ecosystem.",
    tags: ["Daily essentials", "Repeat footfall"],
    label: "Hypermart",
    images: ["/images/experiences/hypermart-1.jpg", "/images/experiences/hypermart-2.jpg", "/images/experiences/hypermart-3.jpg"],
    bg: "rgb(15,13,12)",
  },
  {
    number: "04",
    titleLine1: "A destination for",
    titleLine2: "every occasion.",
    body: "A thoughtfully curated food and beverage experience bringing together cafés, fine dining, al fresco experiences and vibrant evening destinations.",
    tags: ["Cafés & fine dining", "Al fresco terraces"],
    label: "Culinary & Leisure",
    images: ["/images/experiences/culinary-1.jpg", "/images/experiences/culinary-2.jpg", "/images/experiences/culinary-3.jpg"],
    bg: "rgb(21,18,17)",
  },
  {
    number: "05",
    titleLine1: "Leisure that brings",
    titleLine2: "people together.",
    body: "Immersive, multi-generational entertainment designed to anchor weekend activity, social engagement and repeat visitation.",
    tags: ["Weekend anchor", "Multi-generational"],
    label: "Entertainment & Gaming",
    images: ["/images/experiences/entertainment-1.jpg", "/images/experiences/entertainment-2.jpg", "/images/experiences/entertainment-3.jpg"],
    bg: "rgb(13,11,10)",
  },
  {
    number: "06",
    titleLine1: "Created for",
    titleLine2: "families.",
    body: "A safe and engaging environment for children, designed to make family visits more comfortable, enjoyable and unhurried.",
    tags: ["Supervised play", "Family comfort"],
    label: "Kids Play Area",
    images: ["/images/experiences/kids-1.jpg", "/images/experiences/kids-2.jpg", "/images/experiences/kids-3.jpg"],
    bg: "rgb(19,16,16)",
  },
  {
    number: "07",
    titleLine1: "Business at the",
    titleLine2: "centre of everything.",
    body: "Contemporary workspace environments designed to support modern businesses while creating a captive day-long audience for retail, dining and convenience.",
    tags: ["Day-long audience", "Contemporary floors"],
    label: "Modern Workspaces",
    images: ["/images/experiences/workspace-1.jpg", "/images/experiences/workspace-2.jpg", "/images/experiences/workspace-3.jpg"],
    bg: "rgb(15,13,12)",
  },
];

const N = FLOORS.length;
const CIRC = 94.25; // 2 * PI * 15

export default function FloorsDeck() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const ringRef = useRef<SVGCircleElement>(null);
  const pctRef = useRef<HTMLSpanElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    let raf = 0;

    const update = () => {
      const wrap = wrapRef.current;
      if (!wrap) return;
      const vh = window.innerHeight || 800;
      const y = window.scrollY || 0;
      const span = wrap.offsetHeight - vh || 1;
      const raw = Math.max(0, Math.min(1, (y - wrap.offsetTop) / span));
      const pos = raw * (N - 1);
      const activeIdx = Math.max(0, Math.min(N - 1, Math.round(pos)));

      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        const d = i - pos;
        card.style.zIndex = String(20 + i);

        if (d > 1) {
          card.style.opacity = "0";
          card.style.pointerEvents = "none";
          card.style.transform = "perspective(1500px) translate(-50%,-50%) translateY(112%)";
          card.style.filter = "none";
          return;
        }
        if (d > 0) {
          const e2 = 1 - Math.pow(1 - (1 - d), 2);
          card.style.opacity = "1";
          card.style.pointerEvents = i === activeIdx && Math.abs(d) < 0.15 ? "auto" : "none";
          card.style.transform = `perspective(1500px) translate(-50%,-50%) translateY(${((1 - e2) * 112).toFixed(2)}%)`;
          card.style.filter = "none";
          return;
        }
        const ad = Math.min(3.2, -d);
        card.style.opacity = ad > 1.9 ? Math.max(0, 1 - (ad - 1.9) / 0.9).toFixed(3) : "1";
        card.style.pointerEvents = i === activeIdx && Math.abs(d) < 0.15 ? "auto" : "none";
        card.style.transform =
          `perspective(1500px) translate(-50%,-50%) translateY(${(-Math.min(16, ad * 7)).toFixed(2)}%) ` +
          `rotateX(${Math.min(26, ad * 15).toFixed(2)}deg) ` +
          `translateZ(${(-ad * 60).toFixed(1)}px) ` +
          `scale(${(1 - Math.min(0.16, ad * 0.05)).toFixed(3)})`;
        card.style.filter = `brightness(${Math.max(0.55, 1 - ad * 0.16).toFixed(3)})`;
      });

      setActive(activeIdx);

      const pct = Math.round(raw * 100);
      if (pctRef.current) pctRef.current.textContent = `${pct}%`;
      if (ringRef.current) ringRef.current.setAttribute("stroke-dashoffset", (CIRC * (1 - raw)).toFixed(2));
    };

    const loop = () => {
      update();
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  const jump = (delta: number) => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const vh = window.innerHeight || 800;
    const span = wrap.offsetHeight - vh || 1;
    const i = Math.max(0, Math.min(N - 1, active + delta));
    window.scrollTo({ top: wrap.offsetTop + (span * i) / (N - 1) + 2, behavior: "smooth" });
  };

  return (
    <div id="x-chapters" ref={wrapRef} className="relative bg-[rgb(239,232,219)]" style={{ height: "800svh" }}>
      <div className="sticky top-0 flex h-[100svh] flex-col gap-[clamp(10px,1.6vh,20px)] overflow-hidden px-[clamp(14px,2.4vw,40px)] pt-[clamp(46px,7vh,88px)] pb-[clamp(24px,4vh,50px)]">
        <div className="flex flex-none flex-wrap items-end justify-between gap-3">
          <div className="flex items-center gap-3 text-[11px] tracking-[0.24em] text-[rgba(24,20,16,0.55)] uppercase">
            <span>What we build</span>
            <span className="h-px w-8 bg-[rgba(24,20,16,0.25)]" />
            <span className="text-[rgb(150,105,44)]">
              {String(active + 1).padStart(2, "0")} / {String(N).padStart(2, "0")}
            </span>
          </div>
          <span className="text-[11px] tracking-[0.24em] text-[rgba(24,20,16,0.45)] uppercase">
            Scroll to stack the floors
          </span>
        </div>

        <div
          className="relative min-h-0 flex-1 overflow-hidden"
          style={{ perspective: "1900px", perspectiveOrigin: "50% 30%" }}
        >
          {FLOORS.map((floor, i) => (
            <article
              key={floor.number}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              className="absolute top-1/2 left-1/2 grid h-[min(74svh,560px)] w-[min(1180px,94%)] grid-cols-1 gap-[clamp(18px,3vw,52px)] overflow-hidden rounded-[clamp(14px,1.4vw,22px)] border border-[rgba(240,234,221,0.1)] p-[clamp(22px,2.6vw,44px)] text-[rgb(240,234,221)] shadow-[0_-6px_34px_rgba(28,20,14,0.2),0_46px_90px_rgba(28,20,14,0.4)] md:grid-cols-[minmax(0,1fr)_minmax(0,1.02fr)]"
              style={{ background: floor.bg, transformOrigin: "50% 0%" }}
            >
              <div className="flex min-w-0 flex-col justify-between gap-[clamp(14px,2vh,26px)]">
                <div className="flex flex-col gap-[clamp(12px,1.8vh,20px)]">
                  <div className="flex items-center justify-between gap-3 text-[10.5px] tracking-[0.28em] text-[rgb(255,250,242)] uppercase">
                    <span>{floor.label}</span>
                    <span>({floor.number})</span>
                  </div>
                  <h2 className="m-0 max-w-[22ch] text-[clamp(25px,2.9vw,44px)] leading-[1.06] font-normal tracking-[-0.02em] text-[rgb(255,250,242)]">
                    {floor.titleLine1}
                    <br />
                    <span className="font-display text-[1.06em] font-normal text-[rgb(255,250,242)] italic">
                      {floor.titleLine2}
                    </span>
                  </h2>
                  <p
                    className="m-0 max-w-[44ch] text-[clamp(14.5px,1.05vw,17px)] leading-[1.65] text-[rgb(255,250,242)]"
                    style={{ fontFamily: "var(--font-eb-garamond), serif" }}
                  >
                    {floor.body}
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-[clamp(10px,1.4vw,18px)]">
                  <a
                    href="#x-cta"
                    className="font-jost inline-flex items-center gap-2.5 rounded-full bg-[rgb(232,198,138)] px-5 py-3.5 text-[10.5px] tracking-[0.2em] text-[rgb(23,18,12)] uppercase transition-colors hover:bg-[rgb(244,220,174)]"
                  >
                    Explore this floor →
                  </a>
                  <div className="flex flex-wrap gap-3 text-[9.5px] tracking-[0.22em] text-[rgb(255,250,242)] uppercase">
                    {floor.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative hidden min-w-0 gap-[clamp(8px,0.9vw,14px)] md:grid md:grid-cols-3">
                <div
                  className="relative overflow-hidden rounded-[8px]"
                  style={{ background: "rgba(255,250,242,0.12)" }}
                >
                  <Image src={floor.images[0]} alt={floor.label} fill sizes="15vw" className="object-cover" />
                </div>
                <div
                  className="relative overflow-hidden rounded-[8px]"
                  style={{ background: "rgba(255,250,242,0.12)", marginTop: "clamp(14px,2.4vh,30px)" }}
                >
                  <Image src={floor.images[1]} alt={floor.label} fill sizes="15vw" className="object-cover" />
                </div>
                <div
                  className="relative overflow-hidden rounded-[8px]"
                  style={{ background: "rgba(255,250,242,0.12)", marginTop: "clamp(28px,4.8vh,60px)" }}
                >
                  <Image src={floor.images[2]} alt={floor.label} fill sizes="15vw" className="object-cover" />
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-[clamp(20px,3vh,32px)] flex flex-none items-center justify-center gap-5">
          <button
            type="button"
            aria-label="Previous floor"
            onClick={() => jump(-1)}
            disabled={active === 0}
            className="flex h-[46px] w-[46px] flex-none items-center justify-center rounded-full border border-[rgba(24,20,16,0.2)] text-[rgb(24,20,16)] transition-opacity disabled:opacity-30"
          >
            ←
          </button>

          <div className="flex items-center gap-3 text-[rgb(24,20,16)]">
            <span className="relative flex h-9 w-9 flex-none items-center justify-center">
              <svg viewBox="0 0 34 34" width="36" height="36" className="absolute inset-0 -rotate-90">
                <circle cx="17" cy="17" r="15" fill="none" stroke="rgba(24,20,16,0.15)" strokeWidth="2" />
                <circle
                  ref={ringRef}
                  cx="17"
                  cy="17"
                  r="15"
                  fill="none"
                  stroke="rgb(150,105,44)"
                  strokeWidth="2"
                  strokeDasharray={CIRC}
                  strokeDashoffset={CIRC}
                  strokeLinecap="round"
                />
              </svg>
              <span ref={pctRef} className="text-[9px] font-medium tracking-[0.05em]">
                0%
              </span>
            </span>
            <span className="font-jost text-[12px] tracking-[0.16em] uppercase">{FLOORS[active].label}</span>
          </div>

          <button
            type="button"
            aria-label="Next floor"
            onClick={() => jump(1)}
            disabled={active === N - 1}
            className="flex h-[46px] w-[46px] flex-none items-center justify-center rounded-full border border-[rgba(24,20,16,0.2)] text-[rgb(24,20,16)] transition-opacity disabled:opacity-30"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
