import Link from "next/link";

export default function OverviewCtaFooter() {
  return (
    <section
      id="v-cta"
      className="relative overflow-hidden px-[clamp(18px,3vw,48px)] pt-[clamp(70px,12vh,150px)] pb-[clamp(26px,4vh,44px)]"
    >
      <div className="pointer-events-none absolute top-0 left-1/2 h-full w-[min(1200px,120%)] -translate-x-1/2 bg-[radial-gradient(60%_55%_at_50%_12%,rgba(232,198,138,0.16)_0%,rgba(11,10,9,0)_70%)]" />

      <div className="relative flex flex-col items-center gap-[clamp(22px,4vh,42px)] text-center">
        <h2 className="m-0 max-w-[20ch] text-[clamp(26px,4.2vw,68px)] leading-[0.98] font-light tracking-[-0.025em] text-[rgb(251,247,239)] uppercase">
          The New High Street{" "}
          <span className="font-display font-normal text-[rgb(232,198,138)] italic normal-case">
            Address
          </span>{" "}
          of Gurugram.
        </h2>
        <div className="font-jost flex flex-wrap justify-center gap-2.5 text-[11.5px] font-medium tracking-[0.18em] uppercase">
          <a
            href="#v-cta"
            className="rounded-full bg-[rgb(232,198,138)] px-7 py-4 text-[rgb(23,18,12)]"
          >
            Request Price Details
          </a>
          <a
            href="/images/VANTAJE%20BROCHURE%202_compressed.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[rgba(240,234,221,0.28)] px-7 py-4 text-[rgb(240,234,221)]"
          >
            Download Brochure
          </a>
          <a
            href="#v-cta"
            className="rounded-full border border-[rgba(240,234,221,0.28)] px-7 py-4 text-[rgb(240,234,221)]"
          >
            Book a Site Visit
          </a>
        </div>
      </div>

      <div className="mt-[clamp(50px,9vh,110px)] flex flex-wrap items-end justify-between gap-[22px] border-t border-[rgba(240,234,221,0.12)] pt-[clamp(20px,3vh,34px)] uppercase">
        <div className="flex flex-col gap-3">
          <span className="text-base font-medium tracking-[0.34em] text-[rgb(240,234,221)]">
            Vantaje
          </span>
          <span className="text-[11.5px] leading-[2] tracking-[0.12em] text-[rgba(240,234,221,0.45)]">
            Sector 48, Sohna Road
            <br />
            Gurugram, Haryana
          </span>
        </div>
        <div className="font-jost flex flex-wrap gap-5 text-[11.5px] tracking-[0.16em]">
          <Link href="/" className="text-[rgba(240,234,221,0.6)] transition-colors hover:text-[rgb(240,234,221)]">
            Home
          </Link>
          <a href="#v-advantage" className="text-[rgba(240,234,221,0.6)] transition-colors hover:text-[rgb(240,234,221)]">
            Advantage
          </a>
          <a href="#v-arch" className="text-[rgba(240,234,221,0.6)] transition-colors hover:text-[rgb(240,234,221)]">
            Architecture
          </a>
          <a href="#v-services" className="text-[rgba(240,234,221,0.6)] transition-colors hover:text-[rgb(240,234,221)]">
            Services
          </a>
        </div>
      </div>
    </section>
  );
}
