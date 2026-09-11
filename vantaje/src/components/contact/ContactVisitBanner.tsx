import Image from "next/image";

export default function ContactVisitBanner() {
  return (
    <section
      id="c-visit"
      className="relative flex min-h-[clamp(440px,72vh,720px)] flex-col justify-end overflow-hidden px-[clamp(18px,3vw,48px)] py-[clamp(40px,6vh,64px)]"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/contact/site-visit.jpg"
          alt="Vantaje site at Sector 48, Sohna Road"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,10,9,0.85)_0%,rgba(11,10,9,0.4)_35%,rgba(11,10,9,0)_62%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,10,9,0.2)_0%,rgba(11,10,9,0)_35%,rgba(11,10,9,0.7)_100%)]" />
      </div>

      <div className="animate-fadeUp relative z-[2] flex max-w-[560px] flex-col gap-4">
        <span className="text-[11px] tracking-[0.3em] text-[rgb(232,198,138)] uppercase">
          Book a Site Visit
        </span>
        <h2 className="m-0 text-[clamp(26px,3.6vw,52px)] leading-[1.02] font-light tracking-[-0.02em] text-[rgb(251,247,239)] uppercase">
          Experience Vantaje{" "}
          <span className="font-display font-normal text-[rgb(232,198,138)] italic normal-case">
            firsthand.
          </span>
        </h2>
        <p
          className="m-0 text-[16px] leading-[1.6] text-[rgba(240,234,221,0.78)]"
          style={{ fontFamily: "var(--font-eb-garamond), serif" }}
        >
          Visit Vantaje at Sector 48, Sohna Road, Gurugram.
        </p>
        <a
          href="#c-form"
          className="font-jost mt-2 inline-flex w-fit items-center gap-2.5 rounded-full bg-[rgb(232,198,138)] px-7 py-4 text-[11.5px] font-medium tracking-[0.18em] text-[rgb(23,18,12)] uppercase transition-opacity hover:opacity-90"
        >
          Book a Site Visit →
        </a>
      </div>
    </section>
  );
}
