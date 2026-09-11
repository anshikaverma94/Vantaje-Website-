"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const ITEMS = [
  {
    title: "Prime Strategic Location",
    body: "Excellent visibility and commanding street frontage on Sohna Road, Sector 48.",
    img: "/images/overview/adv-1.jpg",
  },
  {
    title: "Thriving Catchment",
    body: "An affluent audience shaped by surrounding high-density residential sectors and expanding corporate hubs.",
    img: "/images/overview/adv-2.jpg",
  },
  {
    title: "365-Day Footfall Synergy",
    body: "Weekday momentum from professionals, complemented by families and leisure seekers across evenings and weekends.",
    img: "/images/overview/adv-3.jpg",
  },
  {
    title: "Curated Experience",
    body: "Lifestyle and family-oriented destinations designed to encourage longer visits and repeat engagement.",
    img: "/images/overview/adv-4.jpg",
  },
  {
    title: "Compelling Investment Upside",
    body: "A diversified commercial mix with strong potential for rental demand, business growth and capital appreciation.",
    img: "/images/overview/adv-5.jpg",
  },
];

export default function AdvantageSection() {
  const [active, setActive] = useState(0);
  const stageRef = useRef<HTMLDivElement>(null);
  const cycleRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const stopCycle = () => {
    if (cycleRef.current) {
      clearInterval(cycleRef.current);
      cycleRef.current = null;
    }
  };

  useEffect(() => {
    cycleRef.current = setInterval(() => {
      const stage = stageRef.current;
      if (!stage) return;
      const r = stage.getBoundingClientRect();
      if (r.top > window.innerHeight || r.bottom < 0) return;
      setActive((i) => (i + 1) % ITEMS.length);
    }, 4200);
    return stopCycle;
  }, []);

  const select = (i: number) => {
    setActive(i);
    stopCycle();
  };

  return (
    <section
      id="v-advantage"
      className="relative box-border flex min-h-[100svh] flex-col px-[clamp(18px,3vw,48px)] pt-[clamp(84px,11vh,116px)] pb-[clamp(40px,6vh,72px)]"
    >
      <div className="mb-[clamp(22px,3.4vh,40px)] flex flex-none flex-wrap items-end justify-between gap-[18px]">
        <h2 className="m-0 text-[clamp(23px,3vw,48px)] leading-none font-light tracking-[-0.02em] text-[rgb(251,247,239)] uppercase">
          The Vantaje{" "}
          <span className="font-display font-normal text-[rgb(232,198,138)] italic normal-case">
            Advantage
          </span>
        </h2>
        <span className="text-[11px] tracking-[0.26em] text-[rgba(240,234,221,0.45)] uppercase">
          Five reasons to be here
        </span>
      </div>

      <div className="grid flex-1 grid-cols-1 items-stretch gap-[clamp(20px,3vw,52px)] md:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)]">
        <div className="flex flex-col border-t border-[rgba(240,234,221,0.12)]">
          {ITEMS.map((item, i) => {
            const isActive = active === i;
            return (
              <button
                key={item.title}
                type="button"
                onMouseEnter={() => select(i)}
                onFocus={() => select(i)}
                onClick={() => select(i)}
                className="grid w-full grid-cols-[56px_minmax(0,1fr)] items-start gap-3.5 border-b border-[rgba(240,234,221,0.12)] py-[clamp(16px,2.4vh,26px)] text-left"
              >
                <span
                  className="pt-2 text-[11.5px] tracking-[0.2em] transition-colors duration-[400ms]"
                  style={{ color: isActive ? "rgb(232,198,138)" : "rgba(240,234,221,0.4)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="min-w-0">
                  <span
                    className="block text-[clamp(18px,1.9vw,28px)] leading-[1.06] font-light tracking-[-0.01em] uppercase transition-colors duration-[400ms]"
                    style={{ color: isActive ? "#FBF7EF" : "rgba(240,234,221,0.5)" }}
                  >
                    {item.title}
                  </span>
                  <span
                    className="block overflow-hidden text-[15.5px] leading-[1.75] text-[rgba(240,234,221,0.7)]"
                    style={{
                      fontFamily: "var(--font-eb-garamond), serif",
                      maxHeight: isActive ? "240px" : "0px",
                      opacity: isActive ? 1 : 0,
                      marginTop: isActive ? "14px" : "0px",
                      transition:
                        "max-height 0.6s cubic-bezier(0.16,1,0.3,1), opacity 0.45s, margin-top 0.6s",
                    }}
                  >
                    {item.body}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        <div
          ref={stageRef}
          className="relative min-h-[300px] overflow-hidden rounded-[clamp(14px,1.6vw,26px)] border border-[rgba(240,234,221,0.08)] bg-[rgb(19,17,16)] md:max-h-[620px]"
        >
          {ITEMS.map((item, i) => (
            <Image
              key={item.title}
              src={item.img}
              alt=""
              fill
              sizes="50vw"
              className="object-cover"
              style={{
                opacity: active === i ? 1 : 0,
                transform: active === i ? "scale(1.04)" : "scale(1)",
                transition: "opacity 0.8s, transform 1.6s cubic-bezier(0.16,1,0.3,1)",
              }}
            />
          ))}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(11,10,9,0)_45%,rgba(11,10,9,0.82)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 p-[22px] text-[10.5px] tracking-[0.24em] uppercase">
            <span className="text-[rgb(232,198,138)]">Sohna Road · Sector 48</span>
            <span className="text-[rgba(240,234,221,0.5)]">
              {String(active + 1).padStart(2, "0")} / 05
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
