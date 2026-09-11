export default function ContactDetailsCard() {
  return (
    <section id="c-details" className="relative px-[clamp(18px,3vw,48px)] pb-[clamp(70px,12vh,140px)]">
      <div
        className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-[clamp(24px,4vw,60px)] rounded-[16px] border border-[rgba(232,198,138,0.26)] p-[clamp(28px,4vw,56px)]"
        style={{
          background:
            "linear-gradient(140deg, rgba(232,198,138,0.09) 0%, rgba(232,198,138,0.02) 60%, rgba(232,198,138,0) 100%)",
        }}
      >
        <div className="flex flex-col gap-3">
          <span className="text-[11px] tracking-[0.3em] text-[rgb(232,198,138)] uppercase">Contact</span>
          <span className="font-display text-[32px] leading-tight text-[rgb(251,247,239)] italic">
            Vantaje by Aura
          </span>
          <span className="font-jost text-[13px] leading-[1.8] tracking-[0.08em] text-[rgba(240,234,221,0.6)] uppercase">
            Sector 48, Sohna Road
            <br />
            Gurugram, Haryana
          </span>
        </div>

        <div className="flex flex-col gap-6 sm:flex-row sm:gap-[clamp(30px,5vw,64px)]">
          <div className="flex flex-col gap-2">
            <span className="font-jost text-[11px] tracking-[0.2em] text-[rgba(240,234,221,0.5)] uppercase">
              Phone
            </span>
            <a
              href="tel:+919020887788"
              className="text-[clamp(20px,2vw,28px)] font-light text-[rgb(251,247,239)] transition-colors hover:text-[rgb(232,198,138)]"
            >
              +91-9020887788
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-jost text-[11px] tracking-[0.2em] text-[rgba(240,234,221,0.5)] uppercase">
              Email
            </span>
            <a
              href="mailto:care@aura-world.com"
              className="text-[clamp(18px,1.7vw,24px)] font-light text-[rgb(251,247,239)] transition-colors hover:text-[rgb(232,198,138)]"
            >
              care@aura-world.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
