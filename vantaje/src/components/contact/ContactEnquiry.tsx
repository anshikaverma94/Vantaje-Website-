"use client";

import { useState } from "react";

const INTENTS = [
  { number: "01", label: "Investment Opportunity" },
  { number: "02", label: "Retail Space" },
  { number: "03", label: "Office Space" },
  { number: "04", label: "Leasing" },
  { number: "05", label: "General Enquiry" },
];

export default function ContactEnquiry() {
  const [intent, setIntent] = useState(INTENTS[0].label);
  const [submitted, setSubmitted] = useState(false);

  const selectIntent = (label: string) => {
    setIntent(label);
    const form = document.getElementById("c-form");
    if (form) {
      const top = form.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section
        id="c-intent"
        className="relative px-[clamp(18px,3vw,48px)] pt-[clamp(70px,12vh,150px)] pb-[clamp(40px,6vh,64px)]"
      >
        <div className="mb-[clamp(28px,4.5vh,52px)] flex flex-wrap items-end justify-between gap-[18px]">
          <h2 className="m-0 text-[clamp(23px,3vw,48px)] leading-none font-light tracking-[-0.02em] text-[rgb(251,247,239)] uppercase">
            What are you{" "}
            <span className="font-display font-normal text-[rgb(232,198,138)] italic normal-case">
              looking for?
            </span>
          </h2>
          <span className="text-[11px] tracking-[0.26em] text-[rgba(240,234,221,0.45)] uppercase">
            Select one to start your enquiry
          </span>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(210px,1fr))] gap-3">
          {INTENTS.map((item) => {
            const isActive = intent === item.label;
            return (
              <button
                key={item.number}
                type="button"
                onClick={() => selectIntent(item.label)}
                className="flex flex-col gap-2.5 rounded-[14px] border p-[clamp(18px,2.2vw,26px)] text-left transition-colors"
                style={{
                  borderColor: isActive ? "rgba(232,198,138,0.5)" : "rgba(240,234,221,0.14)",
                  background: isActive ? "rgba(232,198,138,0.1)" : "rgba(255,250,242,0.03)",
                }}
              >
                <span className="font-jost text-[11px] tracking-[0.2em] text-[rgb(232,198,138)] uppercase">
                  {item.number}
                </span>
                <span className="text-[15.5px] font-normal text-[rgb(251,247,239)]">{item.label}</span>
              </button>
            );
          })}
        </div>
      </section>

      <section
        id="c-form"
        className="relative border-t border-[rgba(240,234,221,0.12)] px-[clamp(18px,3vw,48px)] py-[clamp(60px,10vh,120px)]"
      >
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[clamp(30px,5vw,72px)]">
          <div className="flex flex-col gap-5">
            <span className="text-[11px] tracking-[0.3em] text-[rgb(232,198,138)] uppercase">
              Enquiry Form
            </span>
            <h2 className="m-0 max-w-[16ch] text-[clamp(26px,3.2vw,44px)] leading-[1.05] font-light tracking-[-0.02em] text-[rgb(251,247,239)] uppercase">
              Tell us what you{" "}
              <span className="font-display font-normal text-[rgb(232,198,138)] italic normal-case">
                need.
              </span>
            </h2>
            <p
              className="m-0 max-w-[42ch] text-[15.5px] leading-[1.7] text-[rgba(240,234,221,0.75)]"
              style={{ fontFamily: "var(--font-eb-garamond), serif" }}
            >
              Share a few details and our team will respond with
              availability, pricing and the documents relevant to your
              requirement.
            </p>
            <div className="font-jost mt-2 flex flex-col gap-2 border-t border-[rgba(240,234,221,0.12)] pt-5 text-[12px] tracking-[0.1em] text-[rgba(240,234,221,0.6)] uppercase">
              <span>Vantaje by Aura</span>
              <span>Sector 48, Sohna Road, Gurugram</span>
              <span>+91-9020887788</span>
              <span className="normal-case">care@aura-world.com</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-5">
              <label className="flex flex-col gap-2">
                <span className="font-jost text-[10.5px] tracking-[0.18em] text-[rgba(240,234,221,0.5)] uppercase">
                  Name
                </span>
                <input
                  type="text"
                  name="name"
                  placeholder="Full name"
                  className="border-0 border-b border-[rgba(240,234,221,0.25)] bg-transparent py-2 text-[15px] text-[rgb(240,234,221)] outline-none placeholder:text-[rgba(240,234,221,0.35)] focus:border-[rgb(232,198,138)]"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="font-jost text-[10.5px] tracking-[0.18em] text-[rgba(240,234,221,0.5)] uppercase">
                  Phone Number
                </span>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+91"
                  className="border-0 border-b border-[rgba(240,234,221,0.25)] bg-transparent py-2 text-[15px] text-[rgb(240,234,221)] outline-none placeholder:text-[rgba(240,234,221,0.35)] focus:border-[rgb(232,198,138)]"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="font-jost text-[10.5px] tracking-[0.18em] text-[rgba(240,234,221,0.5)] uppercase">
                  Email Address
                </span>
                <input
                  type="email"
                  name="email"
                  placeholder="name@company.com"
                  className="border-0 border-b border-[rgba(240,234,221,0.25)] bg-transparent py-2 text-[15px] text-[rgb(240,234,221)] outline-none placeholder:text-[rgba(240,234,221,0.35)] focus:border-[rgb(232,198,138)]"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="font-jost text-[10.5px] tracking-[0.18em] text-[rgba(240,234,221,0.5)] uppercase">
                  Requirement
                </span>
                <input
                  type="text"
                  name="requirement"
                  placeholder="Area, floor or budget"
                  className="border-0 border-b border-[rgba(240,234,221,0.25)] bg-transparent py-2 text-[15px] text-[rgb(240,234,221)] outline-none placeholder:text-[rgba(240,234,221,0.35)] focus:border-[rgb(232,198,138)]"
                />
              </label>
            </div>

            <label className="flex flex-col gap-2">
              <span className="font-jost text-[10.5px] tracking-[0.18em] text-[rgba(240,234,221,0.5)] uppercase">
                Enquiry Type
              </span>
              <select
                name="type"
                value={intent}
                onChange={(e) => setIntent(e.target.value)}
                className="border-0 border-b border-[rgba(240,234,221,0.25)] bg-transparent py-2 text-[15px] text-[rgb(240,234,221)] outline-none focus:border-[rgb(232,198,138)]"
              >
                {INTENTS.map((item) => (
                  <option key={item.number} value={item.label} className="bg-[rgb(16,14,12)] text-[rgb(240,234,221)]">
                    {item.label}
                  </option>
                ))}
              </select>
            </label>

            <label className="flex flex-col gap-2">
              <span className="font-jost text-[10.5px] tracking-[0.18em] text-[rgba(240,234,221,0.5)] uppercase">
                Message
              </span>
              <textarea
                name="message"
                rows={4}
                placeholder="Tell us a little more"
                className="resize-y border-0 border-b border-[rgba(240,234,221,0.25)] bg-transparent py-2 text-[15px] text-[rgb(240,234,221)] outline-none placeholder:text-[rgba(240,234,221,0.35)] focus:border-[rgb(232,198,138)]"
              />
            </label>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="submit"
                disabled={submitted}
                className="font-jost rounded-full bg-[rgb(232,198,138)] px-7 py-4 text-[11.5px] font-medium tracking-[0.18em] text-[rgb(23,18,12)] uppercase transition-opacity hover:opacity-90 disabled:opacity-80"
              >
                {submitted ? "Enquiry Received" : "Submit Enquiry"}
              </button>
              <span
                className="font-jost text-[11px] tracking-[0.1em] uppercase"
                style={{ color: submitted ? "rgb(232,198,138)" : "rgba(240,234,221,0.45)" }}
              >
                {submitted
                  ? "Thank you — our team will be in touch shortly."
                  : "We never share your details"}
              </span>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
