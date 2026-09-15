"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

// const ANNOTATIONS = [
//   { label: "High street retail", top: "28%", left: "10%", delay: "0s" },
//   { label: "Culinary & leisure", top: "52%", left: "14%", delay: "0.7s" },
//   { label: "Modern workspaces", top: "74%", left: "9%", delay: "1.4s" },
// ];

function easeInOutCubic(p: number) {
  return p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;
}

export default function ExperiencesHero() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const plateRef = useRef<HTMLDivElement>(null);
  const scrimRef = useRef<HTMLDivElement>(null);
  const gapRef = useRef<HTMLDivElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);
  const annosRef = useRef<HTMLDivElement>(null);
  const cueRef = useRef<HTMLDivElement>(null);
  const bracketRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    let raf = 0;

    const update = () => {
      const wrap = wrapRef.current;
      const plate = plateRef.current;
      const scrim = scrimRef.current;
      const gap = gapRef.current;
      const row = rowRef.current;
      const annos = annosRef.current;
      const cue = cueRef.current;
      if (!wrap || !plate || !scrim || !gap || !row) return;

      const vh = window.innerHeight || 800;
      const vw = window.innerWidth || 1200;
      const y = window.scrollY || document.documentElement.scrollTop || 0;

      const span = wrap.offsetHeight - vh || 1;
      const p = Math.max(0, Math.min(1, (y - wrap.offsetTop) / span));
      const e = easeInOutCubic(p);

      const gapStart = Math.min(360, vw * 0.3);
      plate.style.width = `${(gapStart * 0.94 + (vw - gapStart * 0.94) * e).toFixed(1)}px`;
      plate.style.height = `${(gapStart * 0.47 + (vh - gapStart * 0.47) * e).toFixed(1)}px`;
      gap.style.width = `${(gapStart * (1 - e) + 18 * e).toFixed(1)}px`;
      row.style.transform = `translateY(calc(-50% + ${(e * vh * 0.3).toFixed(1)}px))`;
      scrim.style.opacity = Math.min(1, e * 1.5).toFixed(2);

      if (annos) {
        annos.style.opacity = p > 0.8 ? "1" : "0";
        annos.style.pointerEvents = p > 0.8 ? "auto" : "none";
      }
      if (cue) {
        cue.style.opacity = p > 0.06 ? "0" : "1";
      }
      const bo = (1 - Math.min(1, e * 1.4)).toFixed(2);
      bracketRefs.current.forEach((b) => {
        if (b) b.style.opacity = bo;
      });
    };

    const loop = () => {
      update();
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div ref={wrapRef} className="relative" style={{ height: "340vh" }}>
      <div className="sticky top-0 flex h-[100svh] items-center justify-center overflow-hidden bg-[rgb(11,10,9)]">
        {/* expanding plate */}
        <div
          ref={plateRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden"
          style={{ width: 340, height: 170 }}
        >
          <Image
            src="/images/experiences/plate.jpg"
            alt="Vantaje at dusk"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div ref={scrimRef} className="absolute inset-0 bg-[rgba(11,10,9,0.55)]" style={{ opacity: 0 }} />
        </div>

        {/* floating annotations, revealed once the plate has expanded */}
        {/* <div ref={annosRef} className="pointer-events-none absolute inset-0 z-[3]" style={{ opacity: 0 }}>
          {ANNOTATIONS.map((a) => (
            <div
              key={a.label}
              className="absolute flex items-center gap-2.5"
              style={{ top: a.top, left: a.left }}
            >
              <span
                className="h-[7px] w-[7px] flex-none rounded-full bg-[rgb(232,198,138)]"
                style={{ animation: "vPulse 2.4s ease infinite", animationDelay: a.delay }}
              />
              <span className="font-jost text-[11px] tracking-[0.2em] whitespace-nowrap text-[rgb(240,234,221)] uppercase [text-shadow:0_2px_16px_rgba(8,6,5,0.9)]">
                {a.label}
              </span>
            </div>
          ))}

          <div className="absolute top-[10%] right-[6%] flex max-w-[280px] flex-col gap-3 rounded-[10px] border border-[rgba(240,234,221,0.16)] bg-[rgba(16,14,12,0.66)] p-[clamp(18px,2.4vw,28px)] backdrop-blur-md">
            <span className="font-display text-[38px] leading-none text-[rgb(232,198,138)] italic">07</span>
            <span className="font-jost text-[11px] tracking-[0.2em] text-[rgba(240,234,221,0.6)] uppercase">
              Experiences / one address
            </span>
            <span className="h-px w-full bg-[rgba(240,234,221,0.16)]" />
            <p
              className="m-0 text-[14.5px] leading-[1.6] text-[rgba(240,234,221,0.82)]"
              style={{ fontFamily: "var(--font-eb-garamond), serif" }}
            >
              From everyday convenience to elevated leisure, Vantaje brings
              together experiences designed to attract, engage and bring
              people back.
            </p>
            <a
              href="#x-chapters"
              className="font-jost mt-1 text-[11px] font-medium tracking-[0.18em] text-[rgb(232,198,138)] uppercase transition-opacity hover:opacity-75"
            >
              Explore the Experiences →
            </a>
          </div>
        </div> */}

        {/* title split around the growing plate */}
        <div
          ref={rowRef}
          className="absolute top-1/2 left-1/2 z-[2] flex -translate-x-1/2 items-center justify-center whitespace-nowrap"
          style={{ animation: "vFade 1.2s ease both" }}
        >
          <span className="text-[clamp(24px,4.8vw,84px)] leading-none font-extralight tracking-[0.01em] text-[rgb(251,247,239)] uppercase">
            The Vantaje
          </span>
          <span
            ref={(el) => {
              bracketRefs.current[0] = el;
            }}
            className="px-2 text-[clamp(24px,4.8vw,84px)] leading-none font-extralight text-[rgba(240,234,221,0.4)]"
          >
            [
          </span>
          <div ref={gapRef} className="h-px flex-none" style={{ width: 340 }} />
          <span
            ref={(el) => {
              bracketRefs.current[1] = el;
            }}
            className="px-2 text-[clamp(24px,4.8vw,84px)] leading-none font-extralight text-[rgba(240,234,221,0.4)]"
          >
            ]
          </span>
          <span className="text-[clamp(24px,4.8vw,84px)] leading-none font-extralight tracking-[0.01em] text-[rgb(251,247,239)] uppercase">
            Experiences
          </span>
        </div>

        {/* scroll cue */}
        <div
          ref={cueRef}
          className="font-jost absolute bottom-[clamp(24px,4vh,48px)] left-1/2 z-[2] flex -translate-x-1/2 flex-col items-center gap-2 text-[10.5px] tracking-[0.3em] text-[rgba(240,234,221,0.55)] uppercase"
        >
          Scroll
          <span className="h-[34px] w-px bg-[linear-gradient(180deg,rgba(232,198,138,0.8)_0%,rgba(232,198,138,0)_100%)]" />
        </div>
      </div>
    </div>
  );
}
