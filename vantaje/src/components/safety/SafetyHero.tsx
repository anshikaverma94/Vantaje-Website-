import Image from "next/image";

export default function SafetyHero() {
  return (
    <section
      id="s-top"
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden px-[clamp(18px,3vw,48px)] pt-[clamp(96px,14vh,150px)] pb-[clamp(50px,8vh,84px)]"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/safety/hero.jpg"
          alt="Live security monitoring across the Vantaje atrium"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-[50%_40%] [filter:saturate(0.94)_contrast(1.02)_brightness(0.92)]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,10,9,0.7)_0%,rgba(11,10,9,0.16)_26%,rgba(11,10,9,0.9)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,10,9,0.9)_0%,rgba(11,10,9,0.5)_30%,rgba(11,10,9,0)_58%)]" />
      </div>

      <div className="animate-fadeUp relative z-[2] flex max-w-[720px] flex-col gap-[clamp(16px,2.4vh,26px)]">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-[9px] w-[9px] flex-none">
            <span className="absolute inset-0 animate-ping rounded-full bg-[rgb(232,198,138)] opacity-60" />
            <span className="relative h-full w-full rounded-full border border-[rgb(232,198,138)] bg-[rgb(232,198,138)]" />
          </span>
          <span className="font-jost text-[11px] font-medium tracking-[0.32em] text-[rgb(232,198,138)] uppercase">
            Safety &amp; Security
          </span>
        </div>

        <h1 className="m-0 text-[clamp(42px,8vw,132px)] leading-[0.9] font-light tracking-[0.01em] text-[rgb(251,247,239)] uppercase">
          Elevated{" "}
          <span className="font-display font-normal text-[rgb(232,198,138)] italic normal-case">
            Assurance.
          </span>
        </h1>

        <p
          className="m-0 max-w-[56ch] text-[clamp(16px,1.4vw,21px)] leading-[1.72] text-[rgba(240,234,221,0.76)]"
          style={{ fontFamily: "var(--font-eb-garamond), serif" }}
        >
          Advanced infrastructure, thoughtful operations and responsible
          design come together to create a secure and seamlessly managed
          environment.
        </p>

        <div className="font-jost mt-1 flex flex-wrap gap-2.5 text-[11.5px] font-medium tracking-[0.18em] uppercase">
          <a
            href="#s-pillars"
            className="rounded-full bg-[rgb(232,198,138)] px-7 py-4 text-[rgb(23,18,12)] transition-opacity hover:opacity-90"
          >
            Explore Vantaje
          </a>
          <a
            href="#s-cta"
            className="rounded-full border border-[rgba(240,234,221,0.28)] bg-[rgba(28,22,18,0.3)] px-7 py-4 text-[rgb(240,234,221)] transition-colors hover:bg-[rgba(28,22,18,0.5)]"
          >
            Enquire Now
          </a>
        </div>
      </div>
    </section>
  );
}
