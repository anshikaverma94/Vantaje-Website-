import Image from "next/image";

type Card =
  | { type: "photo"; src: string; aspect: string; fixed?: { w: number; h: number }; rotate: number; y: number }
  | { type: "caption"; rotate: number; y: number };

const CARDS: Card[] = [
  { type: "photo", src: "/images/strip-1.jpg", aspect: "4/3", rotate: -3.2, y: 10 },
  { type: "photo", src: "/images/strip-2.jpg", aspect: "1/1", fixed: { w: 262, h: 175 }, rotate: 2.4, y: 34 },
  { type: "photo", src: "/images/strip-3.jpg", aspect: "4/3", rotate: -1.6, y: 18 },
  { type: "caption", rotate: -2, y: -14 },
  { type: "photo", src: "/images/strip-4.jpg", aspect: "3/4", fixed: { w: 227, h: 175 }, rotate: 3.1, y: 4 },
  { type: "photo", src: "/images/strip-5.jpg", aspect: "4/3", rotate: -2.4, y: 40 },
  { type: "photo", src: "/images/strip-6.jpg", aspect: "1/1", rotate: 1.8, y: 14 },
  { type: "photo", src: "/images/strip-7.jpg", aspect: "4/3", rotate: -3.6, y: 30 },
  { type: "photo", src: "/images/strip-8.jpg", aspect: "3/4", rotate: 2.2, y: 6 },
];

function PhotoCard({ card }: { card: Card }) {
  if (card.type === "caption") {
    return (
      <div
        className="font-jost mr-[-3.6vw] ml-[-3vw] w-[clamp(196px,19vw,272px)] flex-none bg-[rgb(30,22,16)] px-5 py-[22px] pb-[26px] text-[11px] leading-[2.1] font-normal tracking-[0.08em] text-[rgba(247,244,237,0.82)] uppercase shadow-[0_26px_48px_rgba(0,0,0,0.6)]"
        style={{ transform: `rotate(${card.rotate}deg) translateY(${card.y}px)` }}
      >
        Vantaje by Aura
        <br />
        Sector 48, Sohna Road
        <br />
        Gurugram
      </div>
    );
  }
  return (
    <div
      className="ml-[-3.2vw] w-[clamp(168px,19vw,268px)] flex-none bg-[rgb(247,244,237)] p-[9px] pb-[30px] shadow-[0_26px_48px_rgba(0,0,0,0.55)]"
      style={{ transform: `rotate(${card.rotate}deg) translateY(${card.y}px)` }}
    >
      <div
        className="relative overflow-hidden"
        style={
          card.fixed
            ? { width: card.fixed.w, height: card.fixed.h, maxWidth: "100%" }
            : { width: "100%", aspectRatio: card.aspect }
        }
      >
        <Image
          src={card.src}
          alt=""
          fill
          sizes="270px"
          className="object-cover [filter:sepia(0.12)_saturate(0.96)_contrast(1.02)]"
        />
      </div>
    </div>
  );
}

export default function CtaFooter() {
  const track = [...CARDS, ...CARDS];

  return (
    <section
      id="hp-cta"
      className="relative overflow-hidden bg-[rgb(22,16,12)] pt-[clamp(56px,9vh,96px)]"
    >
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-start gap-x-10 gap-y-7 px-[clamp(24px,5.4vw,86px)]">
        <h2 className="font-display m-0 max-w-[760px] text-[clamp(34px,4.8vw,76px)] leading-[1.04] font-medium tracking-[0.045em] text-[rgb(253,251,246)] uppercase">
          Discover the Centre of What Comes Next.
        </h2>
        <div className="flex w-full max-w-[640px] flex-col justify-self-end gap-6">
          <p className="m-0 text-right text-[17px] leading-[1.85] text-[rgba(247,244,237,0.6)]">
            Experience Vantaje at Sector 48, Sohna Road, Gurugram.
          </p>
          <div className="font-jost flex flex-wrap justify-end gap-2.5 text-center text-[13px] font-medium tracking-[0.14em] uppercase">
            <a href="/contact" className="bg-[rgb(247,244,237)] px-6 py-[15px] text-[rgb(48,45,42)]">
              Book a Site Visit
            </a>
            <a
              href="/contact"
              className="border border-[rgba(247,244,237,0.5)] px-6 py-[15px] text-[rgb(247,244,237)]"
            >
              Request Price Details
            </a>
            <a
              href="/images/VANTAJE%20BROCHURE%202_compressed.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[rgba(247,244,237,0.5)] px-6 py-[15px] text-[rgb(247,244,237)]"
            >
              Download Brochure
            </a>
          </div>
        </div>
      </div>

      <div className="relative mt-[clamp(32px,5.5vh,64px)] h-[clamp(200px,30vh,330px)] overflow-hidden">
        <div className="marquee-track absolute bottom-[-10%] left-0 flex items-end will-change-transform">
          {track.map((card, i) => (
            <PhotoCard key={i} card={card} />
          ))}
        </div>
      </div>

      <div className="font-jost mt-[clamp(38px,6vh,72px)] grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-x-10 gap-y-9 border-t border-[rgba(247,244,237,0.14)] px-[clamp(24px,5.4vw,86px)] pt-[clamp(34px,5vh,54px)] font-normal uppercase">
        <div className="flex flex-col gap-4">
          <span className="font-display text-[26px] tracking-[0.22em] text-[rgb(247,244,237)]">
            Vantaje
          </span>
          <span className="text-[13px] leading-[2] tracking-[0.1em] text-[rgba(247,244,237,0.55)]">
            Sector 48, Sohna Road
            <br />
            Gurugram, Haryana
          </span>
        </div>
        <div className="flex flex-col gap-3.5">
          <span className="text-[11px] tracking-[0.28em] text-[rgba(232,198,138,0.85)]">
            Explore
          </span>
          {[
            ["Home", "#hp-top"],
            ["Experiences", "#hp-experience"],
            ["Location", "#hp-location"],
            ["Advantage", "#hp-advantage"],
          ].map(([label, href]) => (
            <a key={label} href={href} className="text-sm tracking-[0.14em] text-[rgba(247,244,237,0.72)]">
              {label}
            </a>
          ))}
        </div>
        <div className="flex flex-col gap-3.5">
          <span className="text-[11px] tracking-[0.28em] text-[rgba(232,198,138,0.85)]">
            Enquire
          </span>
          {[
            { label: "Book a Site Visit", href: "#hp-cta" },
            {
              label: "Download Brochure",
              href: "/images/VANTAJE%20BROCHURE%202_compressed.pdf",
              external: true,
            },
            { label: "Request Price Details", href: "#hp-cta" },
          ].map(({ label, href, external }) => (
            <a
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="text-sm tracking-[0.14em] text-[rgba(247,244,237,0.72)]"
            >
              {label}
            </a>
          ))}
        </div>
        <div className="flex flex-col gap-3.5">
          <span className="text-[11px] tracking-[0.28em] text-[rgba(232,198,138,0.85)]">
            Follow
          </span>
          {["Instagram", "LinkedIn", "Facebook", "WhatsApp"].map((label) => (
            <a key={label} href="#hp-cta" className="text-sm tracking-[0.14em] text-[rgba(247,244,237,0.72)]">
              {label}
            </a>
          ))}
        </div>
      </div>

      <div className="font-jost mt-[clamp(34px,5vh,58px)] flex flex-wrap items-end justify-between gap-6 border-t border-[rgba(247,244,237,0.18)] px-[clamp(24px,5.4vw,86px)] py-5 text-[13px] font-normal tracking-[0.2em] text-[rgba(247,244,237,0.7)] uppercase">
        <span>Vantaje by Aura — Sector 48, Sohna Road, Gurugram</span>
        <span>2026</span>
      </div>
    </section>
  );
}
