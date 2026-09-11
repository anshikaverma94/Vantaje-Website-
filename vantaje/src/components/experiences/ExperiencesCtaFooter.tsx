import Image from "next/image";
import Link from "next/link";

export default function ExperiencesCtaFooter() {
  return (
    <section
      id="x-cta"
      className="relative overflow-hidden px-[clamp(18px,3vw,48px)] pt-[clamp(70px,12vh,150px)] pb-[clamp(26px,4vh,44px)]"
    >
      <div className="absolute inset-0 opacity-[0.22]">
        <Image src="/images/experiences/cta-bg.jpg" alt="" fill sizes="100vw" className="object-cover" />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(11,10,9)_0%,rgba(11,10,9,0.7)_40%,rgb(11,10,9)_100%)]" />
      <div className="pointer-events-none absolute top-0 left-1/2 h-full w-[min(1200px,120%)] -translate-x-1/2 bg-[radial-gradient(60%_55%_at_50%_12%,rgba(232,198,138,0.16)_0%,rgba(11,10,9,0)_70%)]" />

      <div className="animate-fadeUp relative flex flex-col items-center gap-[clamp(22px,4vh,42px)] text-center">
        <span className="text-[11px] tracking-[0.3em] text-[rgb(232,198,138)] uppercase">
          Vantaje · Sohna Road
        </span>
        <h2 className="m-0 max-w-[22ch] text-[clamp(26px,4.2vw,68px)] leading-[0.98] font-light tracking-[-0.025em] text-[rgb(251,247,239)] uppercase">
          More to Discover.{" "}
          <span className="font-display font-normal text-[rgb(232,198,138)] italic normal-case">
            More Reasons to Return.
          </span>
        </h2>
        <div className="font-jost flex flex-wrap justify-center gap-2.5 text-[11.5px] font-medium tracking-[0.18em] uppercase">
          <a
            href="#x-cta"
            className="rounded-full bg-[rgb(232,198,138)] px-7 py-4 text-[rgb(23,18,12)]"
          >
            Enquire Now
          </a>
          <a
            href="#x-cta"
            className="rounded-full border border-[rgba(240,234,221,0.28)] px-7 py-4 text-[rgb(240,234,221)]"
          >
            Book a Site Visit
          </a>
        </div>
      </div>

      <div className="relative mt-[clamp(50px,9vh,110px)] grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-[clamp(24px,4vw,48px)] border-t border-[rgba(240,234,221,0.12)] pt-[clamp(34px,6vh,60px)]">
        <div className="flex flex-col gap-3">
          <span className="font-display text-[26px] tracking-[0.22em] text-[rgb(240,234,221)]">
            Vantaje
          </span>
          <span className="text-[11.5px] leading-[2] tracking-[0.12em] text-[rgba(240,234,221,0.45)] uppercase">
            Sector 48, Sohna Road
            <br />
            Gurugram, Haryana
          </span>
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-[11px] tracking-[0.24em] text-[rgba(240,234,221,0.45)] uppercase">
            Explore
          </span>
          <div className="font-jost flex flex-col gap-2.5 text-[12.5px] tracking-[0.08em]">
            <Link href="/" className="text-[rgba(240,234,221,0.68)] transition-colors hover:text-[rgb(240,234,221)]">
              Home
            </Link>
            <Link href="/experiences" className="text-[rgba(240,234,221,0.68)] transition-colors hover:text-[rgb(240,234,221)]">
              Experiences
            </Link>
            <Link href="/#hp-location" className="text-[rgba(240,234,221,0.68)] transition-colors hover:text-[rgb(240,234,221)]">
              Location
            </Link>
            <Link href="/overview" className="text-[rgba(240,234,221,0.68)] transition-colors hover:text-[rgb(240,234,221)]">
              Advantage
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-[11px] tracking-[0.24em] text-[rgba(240,234,221,0.45)] uppercase">
            Enquire
          </span>
          <div className="font-jost flex flex-col gap-2.5 text-[12.5px] tracking-[0.08em]">
            <a href="#x-cta" className="text-[rgba(240,234,221,0.68)] transition-colors hover:text-[rgb(240,234,221)]">
              Book a Site Visit
            </a>
            <a href="#x-cta" className="text-[rgba(240,234,221,0.68)] transition-colors hover:text-[rgb(240,234,221)]">
              Download Brochure
            </a>
            <a href="#x-cta" className="text-[rgba(240,234,221,0.68)] transition-colors hover:text-[rgb(240,234,221)]">
              Request Price Details
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-[11px] tracking-[0.24em] text-[rgba(240,234,221,0.45)] uppercase">
            Follow
          </span>
          <div className="font-jost flex flex-col gap-2.5 text-[12.5px] tracking-[0.08em]">
            <a href="#x-cta" className="text-[rgba(240,234,221,0.68)] transition-colors hover:text-[rgb(240,234,221)]">
              Instagram
            </a>
            <a href="#x-cta" className="text-[rgba(240,234,221,0.68)] transition-colors hover:text-[rgb(240,234,221)]">
              LinkedIn
            </a>
            <a href="#x-cta" className="text-[rgba(240,234,221,0.68)] transition-colors hover:text-[rgb(240,234,221)]">
              Facebook
            </a>
            <a href="#x-cta" className="text-[rgba(240,234,221,0.68)] transition-colors hover:text-[rgb(240,234,221)]">
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="relative mt-[clamp(20px,3vh,34px)] flex flex-wrap items-center justify-between gap-3 border-t border-[rgba(240,234,221,0.12)] pt-[clamp(18px,2.6vh,26px)] text-[11px] tracking-[0.12em] text-[rgba(240,234,221,0.45)] uppercase">
        <span>Vantaje by Aura — Sector 48, Sohna Road, Gurugram</span>
        <span>2026</span>
      </div>
    </section>
  );
}
