import Image from "next/image";

export default function OverviewHero() {
  return (
    <section
      id="v-top"
      className="relative flex min-h-[100svh] flex-col justify-center gap-[clamp(18px,3vh,40px)] overflow-hidden px-[clamp(14px,2.4vw,34px)] pt-[clamp(96px,14vh,150px)] pb-[clamp(28px,5vh,58px)]"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/overview/hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_48%] [filter:saturate(1.04)_contrast(1.03)]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(11,10,9,0.3)_0%,rgba(11,10,9,0)_32%,rgba(11,10,9,0.34)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(96deg,rgba(11,10,9,0.9)_0%,rgba(11,10,9,0.72)_14%,rgba(11,10,9,0.34)_24%,rgba(11,10,9,0.08)_32%,rgba(11,10,9,0)_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(56%_60%_at_0%_60%,rgba(11,10,9,0.9)_0%,rgba(11,10,9,0.8)_46%,rgba(11,10,9,0.46)_72%,rgba(11,10,9,0)_100%)]" />
      </div>

      <div className="relative z-[2] flex flex-col gap-[clamp(6px,1vh,14px)] px-[clamp(4px,1vw,14px)]">
        <div className="flex items-center gap-[clamp(10px,1.6vw,24px)]">
          <h1
            className="m-0 text-[clamp(21px,2.6vw,40px)] leading-[1.08] font-light tracking-[0.02em] whitespace-nowrap text-[rgb(251,247,239)] uppercase"
            style={{ textShadow: "0 1px 3px rgba(8,6,5,0.55), 0 4px 34px rgba(8,6,5,0.9)" }}
          >
            Where Sohna Road&apos;s
          </h1>
        </div>
        <h1
          className="m-0 text-[clamp(21px,2.6vw,40px)] leading-[1.08] font-light tracking-[0.02em] text-[rgb(251,247,239)] uppercase"
          style={{ textShadow: "0 1px 3px rgba(8,6,5,0.55), 0 4px 34px rgba(8,6,5,0.9)" }}
        >
          Premium Address
        </h1>
        <div className="flex flex-wrap items-baseline gap-[clamp(8px,1.2vw,18px)]">
          <h1
            className="m-0 text-[clamp(21px,2.6vw,40px)] leading-[1.08] font-light tracking-[0.02em] text-[rgb(251,247,239)] uppercase"
            style={{ textShadow: "0 1px 3px rgba(8,6,5,0.55), 0 4px 34px rgba(8,6,5,0.9)" }}
          >
            Meets
          </h1>
          <h1
            className="font-display m-0 text-[clamp(22px,2.8vw,44px)] leading-[1.06] font-normal text-[rgb(232,198,138)] italic normal-case"
            style={{ textShadow: "0 1px 3px rgba(8,6,5,0.55), 0 4px 34px rgba(8,6,5,0.9)" }}
          >
            High Street Energy.
          </h1>
        </div>
      </div>

      <div className="relative z-[2] flex flex-wrap items-end justify-between gap-[clamp(18px,3vw,44px)] border-t border-[rgba(240,234,221,0.12)] px-[clamp(4px,1vw,14px)] pt-[clamp(18px,3vh,34px)]">
        <p
          className="m-0 max-w-[48ch] text-[clamp(15.5px,1.15vw,18px)] leading-[1.65] text-[rgb(239,232,218)]"
          style={{ fontFamily: "var(--font-eb-garamond), serif", textShadow: "0 2px 20px rgba(8,6,5,0.9)" }}
        >
          A commercial destination created for businesses, investors and
          visitors at one of Gurugram&apos;s prominent growth corridors.
        </p>
        <div className="flex flex-wrap gap-2.5">
          <a
            href="#v-about"
            className="font-jost rounded-full bg-[rgb(232,198,138)] px-[26px] py-[15px] text-[11.5px] font-medium tracking-[0.18em] text-[rgb(23,18,12)] uppercase"
          >
            Read the Overview
          </a>
          <a
            href="#v-cta"
            className="font-jost rounded-full border border-[rgba(240,234,221,0.28)] px-[26px] py-[15px] text-[11.5px] font-normal tracking-[0.18em] text-[rgb(240,234,221)] uppercase"
          >
            Download Brochure
          </a>
        </div>
      </div>
    </section>
  );
}
