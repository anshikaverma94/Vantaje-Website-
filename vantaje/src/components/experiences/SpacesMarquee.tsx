import Image from "next/image";

const IMAGES = [
  { src: "/images/experiences/marquee-1.jpg", alt: "Store interior", offset: false },
  { src: "/images/experiences/marquee-2.jpg", alt: "Restaurant", offset: true },
  { src: "/images/experiences/marquee-3.jpg", alt: "Rooftop dining", offset: false },
  { src: "/images/experiences/marquee-4.jpg", alt: "Gaming lounge", offset: true },
  { src: "/images/experiences/marquee-5.jpg", alt: "Kids play area", offset: false },
  { src: "/images/experiences/marquee-6.jpg", alt: "Atrium", offset: true },
  { src: "/images/experiences/marquee-7.jpg", alt: "Workspace floor", offset: false },
];

function MarqueeSet({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <div className="flex flex-none items-start gap-[clamp(12px,1.6vw,20px)] pr-[clamp(12px,1.6vw,20px)]" aria-hidden={ariaHidden}>
      {IMAGES.map((item) => (
        <div
          key={item.alt}
          className="relative aspect-[3/4] w-[clamp(180px,20vw,260px)] flex-none overflow-hidden rounded-[8px]"
          style={{ marginTop: item.offset ? "clamp(20px,4vh,48px)" : 0 }}
        >
          <Image src={item.src} alt={item.alt} fill sizes="260px" className="object-cover" />
        </div>
      ))}
    </div>
  );
}

export default function SpacesMarquee() {
  return (
    <section
      id="x-gallery"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden bg-[rgb(11,10,9)] py-[clamp(60px,10vh,110px)]"
    >
      <div className="marquee-track flex w-max">
        <MarqueeSet />
        <MarqueeSet ariaHidden />
      </div>

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[linear-gradient(90deg,rgba(11,10,9,0.4)_0%,rgba(11,10,9,0)_18%,rgba(11,10,9,0)_82%,rgba(11,10,9,0.4)_100%)]">
        <h2 className="m-0 flex items-center gap-4 bg-[rgb(11,10,9)] px-6 text-[clamp(24px,4vw,60px)] leading-none font-light tracking-[0.04em] text-[rgb(251,247,239)] uppercase [text-shadow:0_10px_40px_rgba(8,6,5,0.9)]">
          <span className="font-light text-[rgba(240,234,221,0.35)]">[</span>
          Our Spaces
          <span className="font-light text-[rgba(240,234,221,0.35)]">]</span>
        </h2>
      </div>

      <span className="font-jost pointer-events-none absolute right-[clamp(18px,3vw,48px)] bottom-[clamp(18px,3vh,32px)] text-[10.5px] tracking-[0.3em] text-[rgba(240,234,221,0.4)] uppercase">
        Scroll
      </span>
    </section>
  );
}
