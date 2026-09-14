"use client";

import Image from "next/image";
import { useState } from "react";

export default function Hero() {
  const [mode, setMode] = useState<"day" | "night">("day");

  return (
    <section
      id="hp-top"
      className="relative flex min-h-screen items-end overflow-hidden px-[clamp(24px,5.4vw,86px)] pt-[clamp(90px,14vh,150px)] pb-[clamp(50px,8vh,84px)]"
    >
      <div
        className="absolute inset-0 transition-opacity duration-[1400ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
        style={{ opacity: mode === "day" ? 1 : 0 }}
      >
        <Image
          src="/images/lightM.png"
          alt="Vantaje — daytime façade"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-[50%_55%]"
        />
      </div>

      <div
        className="absolute inset-0 transition-opacity duration-[1400ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
        style={{ opacity: mode === "night" ? 1 : 0 }}
      >
        <Image
          src="/images/darkM.png"
          alt="Vantaje — façade after dark"
          fill
          quality={90}
          sizes="100vw"
          className="object-cover object-[50%_55%]"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(24,18,14,0.62)_0%,rgba(24,18,14,0.1)_32%,rgba(24,18,14,0.92)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(24,18,14,0.9)_0%,rgba(24,18,14,0.6)_30%,rgba(24,18,14,0)_58%)]" />

      <div className="relative z-[5] grid w-full grid-cols-[repeat(auto-fit,minmax(320px,1fr))] items-end gap-[clamp(30px,5vw,72px)]">
        <div className="min-w-0">
          <div className="font-jost animate-fadeUp mb-[26px] text-sm font-medium tracking-[0.44em] text-[rgb(232,198,138)] uppercase">
            Vantaje by Aura
          </div>
          <h1
            className="font-display animate-fadeUp m-0 text-[clamp(42px,5.6vw,124px)] leading-[0.98] font-light tracking-[0.02em] text-[rgb(253,251,246)] uppercase [animation-delay:120ms] [text-shadow:0_6px_40px_rgba(20,14,10,0.75)]"
          >
            Everything.
            <br />
            Centred.
            <br />
            Here.
          </h1>
          <div className="animate-ruleGrow my-5 h-px w-full max-w-[340px] origin-left bg-[rgba(232,198,138,0.75)]" />
          <div className="font-jost animate-fadeUp text-base font-medium tracking-[0.26em] text-[rgb(247,244,237)] uppercase [animation-delay:300ms] [text-shadow:0_2px_18px_rgba(20,14,10,0.8)]">
            Sector 48, Sohna Road, Gurugram
          </div>
        </div>

        <div className="animate-fadeUp max-w-[460px] justify-self-end [animation-delay:420ms]">
          <div className="mb-5 flex gap-[7px]">
            <button
              type="button"
              onClick={() => setMode("day")}
              className={`min-w-[96px] flex-none rounded-lg border px-3 py-[7px] text-center backdrop-blur-sm transition-colors ${
                mode === "day"
                  ? "border-[rgba(247,244,237,0.5)] bg-[rgb(242,238,225)]"
                  : "border-[rgba(247,244,237,0.28)] bg-[rgba(28,22,18,0.36)]"
              }`}
            >
              <span
                className={`font-jost block text-[9.5px] font-medium tracking-[0.2em] uppercase transition-colors ${
                  mode === "day" ? "text-[rgb(48,45,42)]" : "text-[rgb(247,244,237)]"
                }`}
              >
                Morning
              </span>
              <span
                className={`font-jost mt-0.5 block text-[7.5px] font-light tracking-[0.2em] uppercase transition-colors ${
                  mode === "day" ? "text-[rgba(48,45,42,0.62)]" : "text-[rgba(247,244,237,0.6)]"
                }`}
              >
                Daylight view
              </span>
            </button>
            <button
              type="button"
              onClick={() => setMode("night")}
              className={`min-w-[96px] flex-none rounded-lg border px-3 py-[7px] text-center backdrop-blur-sm transition-colors ${
                mode === "night"
                  ? "border-[rgba(247,244,237,0.5)] bg-[rgb(242,238,225)]"
                  : "border-[rgba(247,244,237,0.28)] bg-[rgba(28,22,18,0.36)]"
              }`}
            >
              <span
                className={`font-jost block text-[9.5px] font-medium tracking-[0.2em] uppercase transition-colors ${
                  mode === "night" ? "text-[rgb(48,45,42)]" : "text-[rgb(247,244,237)]"
                }`}
              >
                Night
              </span>
              <span
                className={`font-jost mt-0.5 block text-[7.5px] font-light tracking-[0.2em] uppercase transition-colors ${
                  mode === "night" ? "text-[rgba(48,45,42,0.62)]" : "text-[rgba(247,244,237,0.6)]"
                }`}
              >
                After dark
              </span>
            </button>
          </div>
          <div className="font-jost flex flex-wrap gap-3 text-sm font-medium tracking-[0.22em] uppercase">
            <a
              href="#hp-experience"
              className="bg-[rgb(247,244,237)] px-[34px] py-4 text-[rgb(48,45,42)] transition-opacity hover:opacity-90"
            >
              Explore Vantaje
            </a>
            <a
              href="#hp-cta"
              className="border border-[rgba(247,244,237,0.55)] bg-[rgba(28,22,18,0.3)] px-[34px] py-4 text-[rgb(247,244,237)] transition-colors hover:bg-[rgba(28,22,18,0.5)]"
            >
              Enquire Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
