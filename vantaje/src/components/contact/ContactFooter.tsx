import Link from "next/link";

export default function ContactFooter() {
  return (
    <footer className="relative border-t border-[rgba(240,234,221,0.12)] px-[clamp(18px,3vw,48px)] pt-[clamp(34px,6vh,60px)] pb-[clamp(26px,4vh,44px)]">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-[clamp(24px,4vw,48px)]">
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
            <a href="#c-visit" className="text-[rgba(240,234,221,0.68)] transition-colors hover:text-[rgb(240,234,221)]">
              Book a Site Visit
            </a>
            <a
              href="/images/VANTAJE%20BROCHURE%202_compressed.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[rgba(240,234,221,0.68)] transition-colors hover:text-[rgb(240,234,221)]"
            >
              Download Brochure
            </a>
            <a href="#c-info" className="text-[rgba(240,234,221,0.68)] transition-colors hover:text-[rgb(240,234,221)]">
              Request Price Details
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-[11px] tracking-[0.24em] text-[rgba(240,234,221,0.45)] uppercase">
            Follow
          </span>
          <div className="font-jost flex flex-col gap-2.5 text-[12.5px] tracking-[0.08em]">
            <a href="#c-details" className="text-[rgba(240,234,221,0.68)] transition-colors hover:text-[rgb(240,234,221)]">
              Instagram
            </a>
            <a href="#c-details" className="text-[rgba(240,234,221,0.68)] transition-colors hover:text-[rgb(240,234,221)]">
              LinkedIn
            </a>
            <a href="#c-details" className="text-[rgba(240,234,221,0.68)] transition-colors hover:text-[rgb(240,234,221)]">
              Facebook
            </a>
          </div>
        </div>
      </div>

      <div className="mt-[clamp(20px,3vh,34px)] flex flex-wrap items-center justify-between gap-3 border-t border-[rgba(240,234,221,0.12)] pt-[clamp(18px,2.6vh,26px)] text-[11px] tracking-[0.12em] text-[rgba(240,234,221,0.45)] uppercase">
        <span>Vantaje by Aura — Sector 48, Sohna Road, Gurugram</span>
        <span>2026</span>
      </div>
    </footer>
  );
}
