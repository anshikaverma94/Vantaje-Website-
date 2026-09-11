"use client";

import Image from "next/image";
import { useState } from "react";

const ECO = [
  {
    kicker: "01 · Retail",
    text: "High street retail creates visibility.",
    img: "/images/overview/eco-retail.jpg",
    alt: "High street retail",
  },
  {
    kicker: "02 · Offices",
    text: "Offices bring weekday momentum.",
    img: "/images/overview/eco-offices.jpg",
    alt: "Offices",
  },
  {
    kicker: "03 · Dining",
    text: "Dining and entertainment extend activity into the evenings.",
    img: "/images/overview/eco-dining.jpg",
    alt: "Dining and entertainment",
  },
  {
    kicker: "04 · Everyday",
    text: "Everyday conveniences create reasons to return.",
    img: "/images/overview/eco-everyday.jpg",
    alt: "Everyday conveniences",
  },
];

export default function AboutSection() {
  // -1 = no card active (all equal width), matching the original's o__eco state
  const [active, setActive] = useState(-1);

  return (
    <section
      id="v-about"
      className="relative overflow-hidden py-[clamp(70px,12vh,150px)]"
      onMouseLeave={() => setActive(-1)}
    >
      <div className="grid grid-cols-[repeat(auto-fit,minmax(290px,1fr))] gap-[clamp(24px,4vw,70px)] px-[clamp(18px,3vw,48px)]">
        <div>
          <div className="mb-5 text-[11px] tracking-[0.3em] text-[rgb(232,198,138)] uppercase">
            About Vantaje
          </div>
          <h2 className="m-0 max-w-[16ch] text-[clamp(24px,3.2vw,50px)] leading-none font-light tracking-[-0.02em] text-[rgb(251,247,239)] uppercase">
            A Destination Designed Around{" "}
            <span className="font-display font-normal text-[rgb(232,198,138)] italic normal-case">
              Synergy
            </span>
          </h2>
        </div>
        <div className="flex max-w-[620px] flex-col gap-[22px] justify-self-end">
          <p
            className="m-0 text-[clamp(16px,1.2vw,19px)] leading-[1.6] text-[rgba(240,234,221,0.88)]"
            style={{ fontFamily: "var(--font-eb-garamond), serif" }}
          >
            Vantaje is conceived as an integrated commercial address where
            every element contributes to a larger ecosystem.
          </p>
          <p
            className="m-0 text-[15.5px] leading-[1.8] text-[rgba(240,234,221,0.6)]"
            style={{ fontFamily: "var(--font-eb-garamond), serif" }}
          >
            Together, they shape a destination designed to remain active
            across the day and throughout the year.
          </p>
        </div>
      </div>

      <div className="mt-[clamp(34px,6vh,74px)] flex h-[560px] items-stretch gap-[clamp(8px,1vw,14px)] px-[clamp(18px,3vw,48px)]">
        {ECO.map((item, i) => {
          const isOn = active === i;
          const flexGrow = active === -1 ? 1 : isOn ? 2.1 : 0.78;
          return (
            <article
              key={item.kicker}
              onMouseEnter={() => setActive(i)}
              onClick={() => setActive((a) => (a === i ? -1 : i))}
              className="relative min-w-0 cursor-pointer overflow-hidden border bg-[rgb(19,17,16)] transition-[flex-grow] duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                flexGrow,
                flexShrink: 1,
                flexBasis: 0,
                borderColor: isOn ? "rgba(232,198,138,0.5)" : "rgba(240,234,221,0.08)",
                transition:
                  "flex-grow 0.9s cubic-bezier(0.16,1,0.3,1), border-color 0.5s",
              }}
            >
              <Image
                src={item.img}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover"
                style={{
                  filter: isOn ? "grayscale(0) brightness(0.92)" : "grayscale(0.35) brightness(0.72)",
                  transform: isOn ? "scale(1.035)" : "scale(1)",
                  transition: "transform 2.2s cubic-bezier(0.22,0.61,0.36,1), filter 1.1s ease",
                }}
              />
              <div
                className="absolute inset-0 bg-[linear-gradient(rgba(11,10,9,0)_30%,rgba(11,10,9,0.9)_100%)] transition-opacity duration-500"
                style={{ opacity: isOn ? 0.95 : 0.55 }}
              />
              <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2.5 p-[clamp(16px,2vw,24px)]">
                <span className="text-[10.5px] tracking-[0.26em] whitespace-nowrap text-[rgb(232,198,138)] uppercase">
                  {item.kicker}
                </span>
                <p
                  className="m-0 max-w-[26ch] text-[clamp(15px,1.1vw,17.5px)] leading-[1.45] text-[rgb(251,247,239)] transition-all duration-700"
                  style={{
                    fontFamily: "var(--font-eb-garamond), serif",
                    opacity: isOn ? 1 : 0,
                    transform: isOn ? "translateY(0)" : "translateY(14px)",
                  }}
                >
                  {item.text}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
