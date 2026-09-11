"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import {
  IconSurveillance,
  IconGuard,
  IconLock,
  IconCctv,
  IconGrid,
  IconAlarm,
} from "./icons";

const PILLARS = [
  {
    title: "24/7 Surveillance",
    body: "Continuous smart monitoring across the development.",
    img: "/images/safety/pillar-1.jpg",
    Icon: IconSurveillance,
  },
  {
    title: "Trained Security",
    body: "Professional personnel supporting secure everyday operations.",
    img: "/images/safety/pillar-2.jpg",
    Icon: IconGuard,
  },
  {
    title: "Controlled Access",
    body: "Managed access designed around safety and convenience.",
    img: "/images/safety/pillar-3.jpg",
    Icon: IconLock,
  },
  {
    title: "CCTV Coverage",
    body: "Monitoring across key areas of the property.",
    img: "/images/safety/pillar-4.jpg",
    Icon: IconCctv,
  },
  {
    title: "Smart Security",
    body: "Technology-enabled systems supporting efficient security management.",
    img: "/images/safety/pillar-5.jpg",
    Icon: IconGrid,
  },
  {
    title: "Emergency Response",
    body: "Infrastructure designed for timely response and operational preparedness.",
    img: "/images/safety/pillar-6.jpg",
    Icon: IconAlarm,
  },
];

export default function PillarsDeck() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const scrollToIndex = (i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const clamped = Math.max(0, Math.min(PILLARS.length - 1, i));
    const card = track.children[clamped] as HTMLElement | undefined;
    if (card) {
      track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: "smooth" });
    }
    setActive(clamped);
  };

  const onScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    let closest = 0;
    let min = Infinity;
    Array.from(track.children).forEach((child, i) => {
      const el = child as HTMLElement;
      const diff = Math.abs(el.offsetLeft - track.offsetLeft - track.scrollLeft);
      if (diff < min) {
        min = diff;
        closest = i;
      }
    });
    setActive(closest);
  };

  return (
    <section
      id="s-pillars"
      className="relative overflow-hidden py-[clamp(70px,12vh,150px)]"
    >
      <div className="mb-[clamp(28px,4.5vh,52px)] flex flex-wrap items-end justify-between gap-[18px] px-[clamp(18px,3vw,48px)]">
        <h2 className="m-0 text-[clamp(23px,3vw,48px)] leading-none font-light tracking-[-0.02em] text-[rgb(251,247,239)] uppercase">
          Safety &amp;{" "}
          <span className="font-display font-normal text-[rgb(232,198,138)] italic normal-case">
            Security
          </span>
        </h2>
        <span className="text-[11px] tracking-[0.26em] text-[rgba(240,234,221,0.45)] uppercase">
          Six layers of protection
        </span>
      </div>

      <div
        ref={trackRef}
        onScroll={onScroll}
        className="flex snap-x snap-proximity gap-[clamp(12px,1.6vw,20px)] overflow-x-auto px-[clamp(18px,3vw,48px)] pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {PILLARS.map((item, i) => (
          <article
            key={item.title}
            className="group relative min-w-[268px] flex-[0_0_calc((100%-2*clamp(12px,1.6vw,20px))/3)] snap-start overflow-hidden rounded-[10px] border border-[rgba(240,234,221,0.12)] bg-[rgb(16,14,12)] transition-colors duration-500 hover:border-[rgba(232,198,138,0.4)] hover:bg-[rgb(20,17,16)]"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={item.img}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 90vw, 30vw"
                className="object-cover [filter:saturate(0.88)_brightness(0.86)] transition-transform duration-700 group-hover:scale-[1.07] group-hover:[filter:saturate(1)_brightness(1)]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,10,9,0)_40%,rgba(11,10,9,0.85)_100%)]" />
              <div className="absolute top-3 left-3 flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(240,234,221,0.25)] bg-[rgba(11,10,9,0.55)] backdrop-blur-sm">
                <item.Icon className="h-4 w-4 text-[rgb(232,198,138)]" />
              </div>
              <span className="absolute top-3 right-3 text-[11px] font-medium tracking-[0.14em] text-[rgb(232,198,138)]">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="flex flex-col gap-2 p-[clamp(16px,2vw,22px)]">
              <h3 className="m-0 text-[15.5px] font-medium tracking-[0.04em] text-[rgb(251,247,239)] uppercase">
                {item.title}
              </h3>
              <p
                className="m-0 text-[15px] leading-[1.6] text-[rgba(240,234,221,0.68)]"
                style={{ fontFamily: "var(--font-eb-garamond), serif" }}
              >
                {item.body}
              </p>
              <a
                href="#s-ops"
                className="font-jost mt-1 text-[11px] font-medium tracking-[0.16em] text-[rgb(232,198,138)] uppercase transition-opacity hover:opacity-75"
              >
                Learn More →
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-[clamp(20px,3vh,32px)] flex items-center justify-center gap-4 px-[clamp(18px,3vw,48px)]">
        <button
          type="button"
          aria-label="Previous"
          onClick={() => scrollToIndex(active - 1)}
          disabled={active === 0}
          className="flex h-[46px] w-[46px] flex-none items-center justify-center rounded-full border border-[rgba(240,234,221,0.25)] text-[rgb(240,234,221)] transition-opacity disabled:opacity-30"
        >
          ←
        </button>
        <div className="flex items-center gap-2">
          {PILLARS.map((item, i) => (
            <button
              key={item.title}
              type="button"
              aria-label={`Go to ${item.title}`}
              onClick={() => scrollToIndex(i)}
              className="h-[7px] w-[7px] rounded-full transition-transform"
              style={{
                background: active === i ? "rgb(232,198,138)" : "rgba(240,234,221,0.3)",
                transform: active === i ? "scale(1.5)" : "scale(1)",
              }}
            />
          ))}
        </div>
        <button
          type="button"
          aria-label="Next"
          onClick={() => scrollToIndex(active + 1)}
          disabled={active === PILLARS.length - 1}
          className="flex h-[46px] w-[46px] flex-none items-center justify-center rounded-full border border-[rgba(240,234,221,0.25)] text-[rgb(240,234,221)] transition-opacity disabled:opacity-30"
        >
          →
        </button>
      </div>
    </section>
  );
}
