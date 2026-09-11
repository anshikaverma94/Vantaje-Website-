"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));
const seg = (p: number, a: number, b: number) => clamp((p - a) / (b - a), 0, 1);
const ease = (t: number) => 1 - Math.pow(1 - t, 3);

export default function LocationScroll() {
  const sectionRef = useRef<HTMLElement>(null);
  const [vals, setVals] = useState({
    mapRotate: 64,
    mapScale: 1.32,
    mapOpacity: 0.52,
    carryX: 11,
    carryY: 40,
    carryDrop: 0,
    carryRotate: 5,
    carryScale: 1.26,
    handX: 0,
    handY: 0,
    handRotate: 0,
    handOpacity: 1,
    shadowOpacity: 0,
    shadowScale: 0.6,
    shadowBlur: 22,
    bldShadowY: 44,
    bldShadowBlur: 60,
    ringOpacity: 0,
    ringScale: 0.25,
    labelOpacity: 0,
    labelY: 16,
    copyOpacity: 0,
    copyY: 28,
    hintOpacity: 1,
  });

  useEffect(() => {
    let raf = 0;
    let last: number | null = null;

    const frame = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = Math.max(1, el.offsetHeight - window.innerHeight);
      const p = clamp(-rect.top / total, 0, 1);

      const d = ease(seg(p, 0.04, 0.5));

      const settle = seg(p, 0.46, 0.56);
      const drop = Math.sin(Math.PI * settle) * 8;

      const rel = ease(seg(p, 0.54, 0.68));
      const hx = ease(seg(p, 0.66, 0.88));

      const set = ease(seg(p, 0.4, 0.56));

      const rp = seg(p, 0.5, 0.8);

      const lp = ease(seg(p, 0.6, 0.74));

      const cp = ease(seg(p, 0.64, 0.86));

      setVals({
        mapRotate: 64 - 20 * d,
        mapScale: 1.32 - 0.3 * d,
        mapOpacity: 0.52 + 0.4 * d,
        carryX: 11 * (1 - d),
        carryY: 40 * (1 - d),
        carryDrop: drop,
        carryRotate: 5 * (1 - d),
        carryScale: 1 + 0.26 * (1 - d),
        handX: 3 * rel + 26 * hx,
        handY: -7 * rel - 60 * hx,
        handRotate: -4 * rel - 9 * hx,
        handOpacity: 1 - hx,
        shadowOpacity: 0.75 * set,
        shadowScale: 0.6 + 0.4 * set,
        shadowBlur: 22 - 12 * set,
        bldShadowY: 44 - 22 * set,
        bldShadowBlur: 60 - 26 * set,
        ringOpacity: Math.sin(Math.PI * rp) * 0.8,
        ringScale: 0.25 + 1.1 * rp,
        labelOpacity: lp,
        labelY: 16 - 16 * lp,
        copyOpacity: cp,
        copyY: 28 - 28 * cp,
        hintOpacity: 1 - seg(p, 0.02, 0.16),
      });

      raf = requestAnimationFrame(frame);
    };

    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hp-location"
      className="relative bg-[rgb(18,13,9)]"
      style={{ height: "340vh" }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ perspective: "1400px", perspectiveOrigin: "42% 44%" }}
        >
          <div
            className="absolute -top-[26%] -left-[30%] h-[150%] w-[160%] bg-cover bg-[62%_44%]"
            style={{
              backgroundImage: "url(/images/location-map.jpg)",
              filter: "sepia(0.4) saturate(0.55) brightness(1.05) contrast(1.15)",
              transformOrigin: "42% 46%",
              transform: `rotateX(${vals.mapRotate}deg) scale(${vals.mapScale})`,
              opacity: vals.mapOpacity,
            }}
          />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(82%_76%_at_34%_48%,rgba(18,13,9,0)_0%,rgba(18,13,9,0.42)_66%,rgb(18,13,9)_100%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(270deg,rgba(18,13,9,0.94)_0%,rgba(18,13,9,0.6)_34%,rgba(18,13,9,0)_60%)]" />

        <div
          className="pointer-events-none absolute top-[74%] left-[34%] aspect-square w-[min(30vw,360px)] rounded-full border border-[rgba(232,198,138,0.55)]"
          style={{
            opacity: vals.ringOpacity,
            transform: `translate(-50%,-50%) scale(${vals.ringScale})`,
          }}
        />
        <div
          className="pointer-events-none absolute top-[76%] left-[34%] h-[min(7vw,80px)] w-[min(26vw,300px)] rounded-full bg-[radial-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0)_70%)]"
          style={{
            opacity: vals.shadowOpacity,
            transform: `translate(-50%,-50%) scale(${vals.shadowScale})`,
            filter: `blur(${vals.shadowBlur}px)`,
          }}
        />

        <div
          className="pointer-events-none absolute bottom-0 left-[34%] h-full w-[min(62vw,760px)]"
          style={{
            transform: `translateX(-50%) translate3d(${vals.carryX}vw, calc(${vals.carryY}vh + ${vals.carryDrop}px), 0px) rotate(${vals.carryRotate}deg) scale(${vals.carryScale})`,
            transformOrigin: "50% 90%",
          }}
        >
          <Image
            src="/images/location-hand.png"
            alt=""
            width={900}
            height={900}
            className="absolute right-[4%] bottom-[74%] h-[78%] w-auto"
            style={{
              filter:
                "brightness(0.5) saturate(0.72) contrast(1.06) drop-shadow(-18px 24px 34px rgba(0,0,0,0.6))",
              transform: `translate3d(${vals.handX}%, ${vals.handY}%, 0) rotate(${vals.handRotate}deg)`,
              opacity: vals.handOpacity,
            }}
          />
          <Image
            src="/images/location-building.png"
            alt="Vantaje"
            width={1000}
            height={800}
            className="absolute bottom-[24%] left-1/2 h-[58%] w-auto -translate-x-1/2"
            style={{
              filter: `drop-shadow(0 ${vals.bldShadowY}px ${vals.bldShadowBlur}px rgba(0,0,0,0.6))`,
            }}
          />
        </div>

        <div
          className="pointer-events-none absolute top-[78%] left-[34%] text-center"
          style={{
            opacity: vals.labelOpacity,
            transform: `translateX(-50%) translateY(${vals.labelY}px)`,
          }}
        >
          <div className="mx-auto mb-3.5 h-11 w-px bg-[linear-gradient(rgba(232,198,138,0),rgba(232,198,138,0.8))]" />
          <span className="font-jost text-[13px] font-medium tracking-[0.26em] text-[rgb(232,198,138)] uppercase">
            Sector 48 · Sohna Road
          </span>
        </div>

        <div className="absolute inset-0 flex items-center justify-end px-[clamp(24px,5.4vw,86px)]">
          <div
            className="flex max-w-[min(38vw,470px)] flex-col gap-6"
            style={{
              opacity: vals.copyOpacity,
              transform: `translateY(${vals.copyY}px)`,
            }}
          >
            <h2 className="font-display m-0 text-[clamp(32px,4.2vw,62px)] leading-[1.06] font-medium tracking-[0.05em] text-[rgb(247,244,237)] uppercase">
              Positioned at the Heart of Gurugram
            </h2>
            <div className="h-px w-full bg-[rgba(232,198,138,0.4)]" />
            <p className="m-0 text-[19px] leading-[1.76] text-[rgba(247,244,237,0.82)]">
              Vantaje is located in Sector 48, Sohna Road, along one of
              Gurugram&apos;s fast-growing commercial and residential
              corridors.
            </p>
            <p className="m-0 text-[19px] leading-[1.76] text-[rgba(247,244,237,0.82)]">
              Surrounded by an affluent residential catchment and a thriving
              corporate community, the address offers strong street presence
              and direct accessibility.
            </p>
            <div>
              <a
                href="#hp-cta"
                className="font-jost inline-block bg-[rgb(247,244,237)] px-[34px] py-4 text-sm font-medium tracking-[0.22em] text-[rgb(48,45,42)] uppercase"
              >
                Discover the Location
              </a>
            </div>
          </div>
        </div>

        <div
          className="font-jost pointer-events-none absolute right-[clamp(24px,5.4vw,86px)] bottom-[34px] flex flex-col items-end gap-2.5 text-[11px] font-medium tracking-[0.3em] text-[rgba(247,244,237,0.6)] uppercase"
          style={{ opacity: vals.hintOpacity }}
        >
          Scroll to place
          <span className="h-[34px] w-px bg-[linear-gradient(rgba(247,244,237,0.55),rgba(247,244,237,0))]" />
        </div>
      </div>
    </section>
  );
}
