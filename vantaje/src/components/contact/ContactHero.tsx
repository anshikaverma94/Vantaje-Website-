import Image from "next/image";

export default function ContactHero() {
  return (
    <section
      id="c-top"
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden px-[clamp(18px,3vw,48px)] pt-[clamp(96px,14vh,150px)] pb-[clamp(50px,8vh,84px)]"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/contact/hero-dusk.jpg"
          alt="Vantaje at dusk"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-[50%_46%] [filter:saturate(0.96)_contrast(1.02)_brightness(0.9)]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,10,9,0.7)_0%,rgba(11,10,9,0.16)_28%,rgba(11,10,9,0.9)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,10,9,0.9)_0%,rgba(11,10,9,0.5)_30%,rgba(11,10,9,0)_58%)]" />
      </div>

      <div className="animate-fadeUp relative z-[2] flex max-w-[720px] flex-col gap-[clamp(16px,2.4vh,26px)]">
        <div className="flex items-center gap-3">
          <span className="font-jost text-[11px] font-medium tracking-[0.32em] text-[rgb(232,198,138)] uppercase">
            Contact
          </span>
          <span className="h-px w-[34px] bg-[rgba(240,234,221,0.28)]" />
          <span className="font-jost text-[11px] tracking-[0.24em] text-[rgba(240,234,221,0.7)] uppercase">
            Vantaje by Aura
          </span>
        </div>

        <h1 className="m-0 text-[clamp(40px,6.4vw,104px)] leading-[0.98] font-extralight tracking-[0.01em] text-[rgb(251,247,239)] uppercase">
          Begin Your Vantaje{" "}
          <span className="font-display font-normal text-[rgb(232,198,138)] italic normal-case">
            Journey.
          </span>
        </h1>

        <p
          className="m-0 max-w-[56ch] text-[clamp(16px,1.4vw,21px)] leading-[1.72] text-[rgba(240,234,221,0.76)]"
          style={{ fontFamily: "var(--font-eb-garamond), serif" }}
        >
          Whether you are exploring an investment opportunity, retail space,
          office space or leasing opportunity, connect with our team to learn
          more.
        </p>

        <div className="font-jost mt-1 flex flex-wrap gap-2.5 text-[11.5px] font-medium tracking-[0.18em] uppercase">
          <a
            href="#c-form"
            className="rounded-full bg-[rgb(232,198,138)] px-7 py-4 text-[rgb(23,18,12)] transition-opacity hover:opacity-90"
          >
            Make an Enquiry
          </a>
          <a
            href="#c-visit"
            className="rounded-full border border-[rgba(240,234,221,0.28)] bg-[rgba(28,22,18,0.3)] px-7 py-4 text-[rgb(240,234,221)] transition-colors hover:bg-[rgba(28,22,18,0.5)]"
          >
            Book a Site Visit
          </a>
        </div>
      </div>
    </section>
  );
}
