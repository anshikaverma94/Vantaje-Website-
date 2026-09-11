const LINKS = [
  { number: "01", label: "Download Brochure" },
  { number: "02", label: "Request Floor Plans / Layouts" },
  { number: "03", label: "Request Price Details" },
];

export default function ContactInfoLinks() {
  return (
    <section
      id="c-info"
      className="relative border-t border-[rgba(240,234,221,0.12)] px-[clamp(18px,3vw,48px)] py-[clamp(60px,10vh,120px)]"
    >
      <div className="mb-[clamp(28px,4.5vh,52px)] flex flex-wrap items-end justify-between gap-[18px]">
        <div>
          <span className="mb-3 block text-[11px] tracking-[0.3em] text-[rgb(232,198,138)] uppercase">
            Project Information
          </span>
          <h2 className="m-0 text-[clamp(23px,3vw,44px)] leading-none font-light tracking-[-0.02em] text-[rgb(251,247,239)] uppercase">
            Explore Vantaje{" "}
            <span className="font-display font-normal text-[rgb(232,198,138)] italic normal-case">
              in detail.
            </span>
          </h2>
        </div>
        <span className="max-w-[32ch] text-[13px] leading-[1.5] text-[rgba(240,234,221,0.5)]">
          Documents are shared by our team once your enquiry is received.
        </span>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-3">
        {LINKS.map((item) => (
          <a
            key={item.number}
            href="#c-form"
            className="flex items-center justify-between gap-4 rounded-[14px] border border-[rgba(240,234,221,0.14)] bg-[rgba(255,250,242,0.03)] p-[clamp(18px,2.2vw,26px)] transition-colors hover:border-[rgba(232,198,138,0.4)]"
          >
            <span className="flex flex-col gap-2.5">
              <span className="font-jost text-[11px] tracking-[0.2em] text-[rgb(232,198,138)] uppercase">
                {item.number}
              </span>
              <span className="text-[15px] font-normal text-[rgb(251,247,239)]">{item.label}</span>
            </span>
            <span className="text-[rgb(232,198,138)]">→</span>
          </a>
        ))}
      </div>
    </section>
  );
}
