"use client";

import { useState } from "react";

const ITEMS = [
  {
    title: "Prime Strategic Location",
    body: "Excellent visibility and commanding street frontage on Sohna Road, Sector 48.",
  },
  {
    title: "Thriving Catchment",
    body: "Surrounded by an affluent residential base and a growing corporate workforce.",
  },
  {
    title: "365-Day Footfall Synergy",
    body: "A blend of retail, dining, offices and entertainment keeps the address active every day of the year.",
  },
  {
    title: "Curated Experience",
    body: "Every space is designed to deliver a consistent, elevated experience for visitors and tenants alike.",
  },
  {
    title: "Compelling Investment Upside",
    body: "Positioned in one of Gurugram's fastest-growing commercial corridors with strong long-term potential.",
  },
];

export default function Advantage() {
  const [open, setOpen] = useState(0);

  return (
    <section
      id="hp-advantage"
      className="relative bg-[rgb(235,229,217)] px-[clamp(24px,5.4vw,86px)] py-[clamp(96px,16vh,190px)]"
    >
      <div className="relative mb-[clamp(40px,6.4vh,74px)] flex flex-wrap items-end justify-between gap-6">
        <h2 className="font-display m-0 text-[clamp(34px,4.6vw,72px)] leading-[1.04] font-medium tracking-[0.05em] text-[rgb(74,51,40)] uppercase">
          The Vantaje Advantage
        </h2>
        <a
          href="#hp-cta"
          className="font-jost border border-[rgba(74,51,40,0.4)] px-8 py-[15px] text-sm font-medium tracking-[0.22em] text-[rgb(74,51,40)] uppercase"
        >
          Why Vantaje
        </a>
      </div>

      <div className="relative flex flex-col">
        {ITEMS.map((item, i) => {
          const isOpen = open === i;
          return (
            <button
              key={item.title}
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              className={`grid w-full grid-cols-[88px_1fr] items-baseline gap-[18px] border-t border-[rgba(172,146,119,0.45)] py-[clamp(20px,3.2vh,34px)] text-left ${
                i === ITEMS.length - 1 ? "border-b" : ""
              }`}
            >
              <span
                className={`font-jost text-sm font-medium tracking-[0.24em] transition-colors ${
                  isOpen ? "text-[rgb(232,198,138)]" : "text-[rgb(172,146,119)]"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="min-w-0">
                <span
                  className={`font-display block text-[clamp(26px,3.4vw,50px)] leading-[1.08] font-medium tracking-[0.05em] text-[rgb(74,51,40)] uppercase transition-colors`}
                >
                  {item.title}
                </span>
                <span
                  className="block overflow-hidden font-serif text-[15.5px] leading-[1.75] text-[rgba(74,51,40,0.7)] transition-[max-height,opacity,margin-top] duration-500"
                  style={{
                    maxHeight: isOpen ? "120px" : "0px",
                    opacity: isOpen ? 1 : 0,
                    marginTop: isOpen ? "10px" : "0px",
                  }}
                >
                  {item.body}
                </span>
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
