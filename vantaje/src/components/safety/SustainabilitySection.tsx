import Image from "next/image";

const TAGS = [
  "Energy-Efficient Design",
  "Sustainable Building Practices",
  "Water Conservation Systems",
  "Responsible Resource Management",
];

export default function SustainabilitySection() {
  return (
    <section id="s-eco" className="relative px-[clamp(18px,3vw,48px)] py-[clamp(70px,12vh,150px)]">
      <div className="relative min-h-[clamp(460px,62vh,660px)] overflow-hidden rounded-[10px] border border-[rgba(240,234,221,0.12)]">
        <Image
          src="/images/safety/eco.jpg"
          alt="Vantaje at sunset"
          fill
          sizes="100vw"
          className="object-cover object-[78%_50%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,10,9,0.92)_0%,rgba(11,10,9,0.6)_40%,rgba(11,10,9,0.1)_75%,rgba(11,10,9,0)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,10,9,0.3)_0%,rgba(11,10,9,0)_30%,rgba(11,10,9,0.4)_100%)]" />

        <div className="relative flex h-full max-w-[600px] flex-col justify-center gap-5 p-[clamp(24px,4vw,56px)]">
          <div className="text-[11px] tracking-[0.3em] text-[rgb(232,198,138)] uppercase">
            Sustainability
          </div>
          <h2 className="m-0 text-[clamp(26px,3.6vw,58px)] leading-[1.02] font-light tracking-[-0.02em] text-[rgb(251,247,239)] uppercase">
            Responsible by{" "}
            <span className="font-display font-normal text-[rgb(232,198,138)] italic normal-case">
              Design.
            </span>
          </h2>
          <p
            className="m-0 max-w-[46ch] text-[16px] leading-[1.7] text-[rgb(222,214,198)]"
            style={{ fontFamily: "var(--font-eb-garamond), serif" }}
          >
            Vantaje brings together efficient building practices and
            responsible resource management as part of its long-term
            approach.
          </p>

          <div className="mt-2 grid grid-cols-1 gap-px overflow-hidden rounded-[6px] bg-[rgba(240,234,221,0.14)] sm:grid-cols-2">
            {TAGS.map((tag) => (
              <div key={tag} className="bg-[rgb(11,10,9)] px-4 py-3.5">
                <span className="font-jost text-[12px] tracking-[0.14em] text-[rgba(240,234,221,0.82)] uppercase">
                  {tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
