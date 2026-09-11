"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const SLIDES = [
  {
    title: "Valet Parking",
    body: "Smooth, hassle-free arrival and departure.",
    a: "/images/overview/svc-valet-a.jpg",
    aAlt: "Valet arrival",
    b: "/images/overview/svc-valet-b.jpg",
    bAlt: "Arrival forecourt",
  },
  {
    title: "Concierge Assistance",
    body: "Personal assistance designed to make every visit seamless.",
    a: "/images/overview/svc-concierge-a.jpg",
    aAlt: "Concierge desk",
    b: "/images/overview/svc-concierge-b.jpg",
    bAlt: "Boutique assistance",
  },
  {
    title: "Premium Waiting Lounges",
    body: "Elegant spaces created for comfort and ease.",
    a: "/images/overview/svc-lounge-a.jpg",
    aAlt: "Waiting lounge terrace",
    b: "/images/overview/svc-lounge-b.jpg",
    bAlt: "Lounge seating",
  },
  {
    title: "Personalised Assistance",
    body: "Thoughtful service designed around the visitor.",
    a: "/images/overview/svc-personal-a.jpg",
    aAlt: "Guest assistance",
    b: "/images/overview/svc-personal-b.jpg",
    bAlt: "Families at Vantaje",
  },
  {
    title: "Unhurried Ambience",
    body: "A destination where time, comfort and convenience are prioritised.",
    a: "/images/overview/svc-ambience-a.jpg",
    aAlt: "Landscaped walk",
    b: "/images/overview/svc-ambience-b.jpg",
    bAlt: "Atrium ambience",
  },
];

export default function ServicesSection() {
  const [index, setIndex] = useState(1);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const go = (dir: 1 | -1) => setIndex((i) => (i + dir + SLIDES.length) % SLIDES.length);

  return (
    <section
      id="v-services"
      className="relative overflow-hidden px-[clamp(18px,3vw,48px)] py-[clamp(60px,10vh,120px)] pb-[clamp(70px,12vh,140px)]"
    >
      <div className="absolute inset-0 opacity-[0.14]">
        <Image src="/images/overview/services-bg.jpg" alt="" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(rgb(11,10,9)_0%,rgba(11,10,9,0.6)_40%,rgb(11,10,9)_100%)]" />
      </div>

      <div className="relative z-[2]">
        <div className="mb-[clamp(26px,4.5vh,56px)] flex flex-wrap items-end justify-between gap-[18px]">
          <h2 className="m-0 max-w-[20ch] text-[clamp(23px,3vw,48px)] leading-none font-light tracking-[-0.02em] text-[rgb(251,247,239)] uppercase">
            Hospitality &amp;{" "}
            <span className="font-display font-normal text-[rgb(232,198,138)] italic normal-case">
              White-Glove
            </span>{" "}
            Services
          </h2>
          <span className="text-[11px] tracking-[0.26em] text-[rgba(240,234,221,0.45)] uppercase">
            Service, considered
          </span>
        </div>

        <div className="relative h-[560px]">
          {SLIDES.map((slide, i) => (
            <div
              key={slide.title}
              className="absolute inset-0 grid grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] items-center gap-[clamp(18px,3vw,54px)] transition-opacity duration-700"
              style={{ opacity: index === i ? 1 : 0, pointerEvents: index === i ? "auto" : "none" }}
            >
              <div className="flex min-w-0 flex-col gap-[clamp(12px,2vh,20px)]">
                <span className="text-[11px] tracking-[0.28em] text-[rgba(240,234,221,0.42)]">
                  {String(i + 1).padStart(2, "0")} / 05
                </span>
                <h3 className="font-display m-0 text-[clamp(26px,3.6vw,58px)] leading-[0.94] font-light tracking-[-0.03em] text-[rgb(232,198,138)] uppercase">
                  {slide.title}
                </h3>
                <p
                  className="m-0 max-w-[34ch] text-[clamp(15.5px,1.15vw,18px)] leading-[1.6] text-[rgba(240,234,221,0.76)]"
                  style={{ fontFamily: "var(--font-eb-garamond), serif" }}
                >
                  {slide.body}
                </p>
              </div>
              <div className="relative min-w-0" style={{ height: "100%" }}>
                <div className="absolute top-[6%] right-0 bottom-[6%] w-[76%] overflow-hidden bg-[rgb(19,17,16)]">
                  <Image src={slide.a} alt={slide.aAlt} fill sizes="40vw" className="object-cover" />
                </div>
                <div className="absolute bottom-[12%] left-0 aspect-[4/3] w-[44%] overflow-hidden rounded-[clamp(12px,1.2vw,18px)] border-[5px] border-[rgb(11,10,9)] bg-[rgb(19,17,16)]">
                  <Image src={slide.b} alt={slide.bAlt} fill sizes="20vw" className="object-cover" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-[clamp(16px,2.6vh,26px)] grid grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] gap-[clamp(18px,3vw,54px)]">
          <div />
          <div className="flex items-center gap-[clamp(10px,1.2vw,16px)]">
            <button
              type="button"
              aria-label="Previous service"
              onClick={() => go(-1)}
              className="flex h-[46px] w-[46px] items-center justify-center rounded-full border border-[rgba(240,234,221,0.24)] text-[rgb(240,234,221)] transition-colors hover:bg-[rgba(240,234,221,0.08)]"
            >
              <svg width="17" height="12" viewBox="0 0 17 12" fill="none" aria-hidden="true">
                <path d="M6.2 1 1 6l5.2 5M1 6h15.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="square" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Next service"
              onClick={() => go(1)}
              className="flex h-[46px] w-[46px] items-center justify-center rounded-full border border-[rgba(240,234,221,0.24)] text-[rgb(240,234,221)] transition-colors hover:bg-[rgba(240,234,221,0.08)]"
            >
              <svg width="17" height="12" viewBox="0 0 17 12" fill="none" aria-hidden="true">
                <path d="M10.8 1 16 6l-5.2 5M16 6H.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="square" />
              </svg>
            </button>
            <span className="text-[11px] tracking-[0.22em] text-[rgba(240,234,221,0.42)]">
              {String(index + 1).padStart(2, "0")} / 05
            </span>
          </div>
        </div>

        <div className="mt-[clamp(18px,3vh,34px)] flex items-center justify-between gap-[clamp(16px,2.4vw,34px)] border-t border-[rgba(240,234,221,0.14)] pt-[clamp(14px,2.4vh,24px)]">
          <div className="flex flex-wrap gap-[clamp(14px,2.4vw,40px)]">
            {SLIDES.map((slide, i) => (
              <button
                key={slide.title}
                type="button"
                onClick={() => setIndex(i)}
                className="font-jost text-[11px] tracking-[0.22em] uppercase transition-colors"
                style={{ color: index === i ? "rgb(232,198,138)" : "rgba(240,234,221,0.42)" }}
              >
                {slide.title.split(" ")[0]}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
