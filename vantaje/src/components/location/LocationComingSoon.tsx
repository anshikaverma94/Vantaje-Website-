import Image from "next/image";

export default function LocationComingSoon() {
  return (
    <section className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden px-[clamp(18px,3vw,48px)] pt-[clamp(120px,18vh,200px)] pb-[clamp(64px,10vh,110px)]">
      <div className="absolute inset-0">
        <Image
          src="/images/location/location-hero.png"
          alt="Vantaje location, Sector 48, Sohna Road, Gurugram"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center [filter:saturate(0.5)_contrast(1.04)_brightness(0.42)]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_22%_52%,rgba(11,10,9,0.2)_0%,rgba(11,10,9,0.72)_46%,rgba(11,10,9,0.96)_100%)]" />
      </div>

      <div className="animate-fadeUp relative z-[2] flex max-w-[720px] flex-col gap-[clamp(16px,2.4vh,26px)]">
        <div className="flex items-center gap-3">
          <span className="relative flex h-[9px] w-[9px] flex-none">
            <span className="absolute inset-0 animate-ping rounded-full bg-[rgb(232,198,138)] opacity-60" />
            <span className="relative h-full w-full rounded-full border border-[rgb(232,198,138)] bg-[rgb(232,198,138)]" />
          </span>
          <span className="font-jost text-[11px] font-medium tracking-[0.32em] text-[rgb(232,198,138)] uppercase">
            Location
          </span>
          <span className="h-px w-[34px] bg-[rgba(240,234,221,0.28)]" />
          <span className="font-jost text-[11px] tracking-[0.24em] text-[rgba(240,234,221,0.7)] uppercase">
            In preparation
          </span>
        </div>

        <h1 className="m-0 text-[clamp(44px,7.6vw,124px)] leading-[0.94] font-extralight tracking-[-0.035em] text-[rgb(251,247,239)] uppercase">
          Coming{" "}
          <span className="font-display font-normal text-[rgb(232,198,138)] italic normal-case">
            soon.
          </span>
        </h1>

        <p
          className="m-0 max-w-[48ch] text-[clamp(16px,1.25vw,20px)] leading-[1.7] text-[rgba(251,247,239,0.84)]"
          style={{ fontFamily: "var(--font-eb-garamond), serif" }}
        >
          The location story — connectivity, catchment and the drive-time
          map around Sector 48, Sohna Road — is being finalised. Speak with
          our team in the meantime.
        </p>

        <div className="grid max-w-[860px] grid-cols-[repeat(auto-fit,minmax(190px,1fr))] gap-[clamp(10px,1.2vw,16px)]">
          <div className="flex flex-col gap-2 rounded-[14px] border border-[rgba(240,234,221,0.14)] bg-[rgba(255,250,242,0.03)] p-[clamp(16px,1.8vw,22px)]">
            <span className="font-jost text-[10.5px] tracking-[0.2em] text-[rgb(232,198,138)] uppercase">
              Address
            </span>
            <span className="text-[14px] leading-[1.5] text-[rgb(240,234,221)]">
              Sector 48, Sohna Road
              <br />
              Gurugram, Haryana
            </span>
          </div>
          <div className="flex flex-col gap-2 rounded-[14px] border border-[rgba(240,234,221,0.14)] bg-[rgba(255,250,242,0.03)] p-[clamp(16px,1.8vw,22px)]">
            <span className="font-jost text-[10.5px] tracking-[0.2em] text-[rgb(232,198,138)] uppercase">
              Phone
            </span>
            <a
              href="tel:+919020887788"
              className="text-[14px] text-[rgb(240,234,221)] transition-colors hover:text-[rgb(232,198,138)]"
            >
              +91-9020887788
            </a>
          </div>
          <div className="flex flex-col gap-2 rounded-[14px] border border-[rgba(240,234,221,0.14)] bg-[rgba(255,250,242,0.03)] p-[clamp(16px,1.8vw,22px)]">
            <span className="font-jost text-[10.5px] tracking-[0.2em] text-[rgb(232,198,138)] uppercase">
              Email
            </span>
            <a
              href="mailto:care@aura-world.com"
              className="text-[14px] text-[rgb(240,234,221)] transition-colors hover:text-[rgb(232,198,138)]"
            >
              care@aura-world.com
            </a>
          </div>
        </div>

        <div className="font-jost mt-1 flex flex-wrap gap-2.5 text-[11.5px] font-medium tracking-[0.18em] uppercase">
          <a
            href="/contact"
            className="rounded-full bg-[rgb(232,198,138)] px-7 py-4 text-[rgb(23,18,12)] transition-opacity hover:opacity-90"
          >
            Enquire with the Team
          </a>
          <a
            href="/overview"
            className="rounded-full border border-[rgba(240,234,221,0.28)] bg-[rgba(28,22,18,0.3)] px-7 py-4 text-[rgb(240,234,221)] transition-colors hover:bg-[rgba(28,22,18,0.5)]"
          >
            Project Overview
          </a>
        </div>
      </div>
    </section>
  );
}
