"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type NavKey = "home" | "overview" | "experiences" | "safety" | "location" | "contact";

const ALL_LINKS: { key: NavKey; href: string; label: string }[] = [
  { key: "home", href: "/", label: "Homepage" },
  { key: "overview", href: "/overview", label: "Overview" },
  { key: "experiences", href: "/experiences", label: "Experiences" },
  { key: "safety", href: "/safety-and-security", label: "Safety and Security" },
  { key: "location", href: "/location", label: "Location" },
  { key: "contact", href: "/contact", label: "Contact" },
];

export default function Header({ active = "home" }: { active?: NavKey }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-[60] flex justify-center p-[clamp(10px,1.6vw,20px)]">
      <div className="w-full max-w-[1320px]">
        <div className="flex w-full items-center gap-[clamp(10px,2vw,26px)] rounded-full border border-[rgba(240,234,221,0.1)] bg-[rgba(16,14,12,0.62)] py-4 pl-[clamp(24px,3vw,40px)] pr-[clamp(20px,3vw,40px)] backdrop-blur-xl">
          <Link href="/" className="flex flex-none items-center">
            <Image
              src="/images/logo.png"
              alt="Vantaje"
              width={140}
              height={36}
              className="block h-[clamp(17px,1.7vw,23px)] w-auto"
              priority
            />
          </Link>

          <nav className="font-jost ml-auto hidden items-center gap-[clamp(8px,1.4vw,20px)] overflow-hidden text-[11.5px] font-normal tracking-[0.18em] uppercase md:flex">
            {ALL_LINKS.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className={`whitespace-nowrap transition-colors ${
                  active === link.key
                    ? "text-[rgb(240,234,221)]"
                    : "text-[rgba(240,234,221,0.62)] hover:text-[rgb(240,234,221)]"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="ml-auto flex h-8 w-8 flex-none flex-col items-center justify-center gap-[5px] md:hidden"
          >
            <span
              className={`block h-px w-5 bg-[rgb(240,234,221)] transition-transform duration-300 ${
                open ? "translate-y-[3px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-[rgb(240,234,221)] transition-opacity duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-px w-5 bg-[rgb(240,234,221)] transition-transform duration-300 ${
                open ? "-translate-y-[3px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        <nav
          className={`font-jost mt-2 flex flex-col overflow-hidden rounded-[24px] border border-[rgba(240,234,221,0.1)] bg-[rgba(16,14,12,0.9)] text-[13px] font-normal tracking-[0.14em] uppercase backdrop-blur-xl transition-[max-height,opacity] duration-300 ease-out md:hidden ${
            open ? "max-h-[400px] opacity-100" : "pointer-events-none max-h-0 opacity-0"
          }`}
        >
          {ALL_LINKS.map((link) => (
            <a
              key={link.key}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`border-b border-[rgba(240,234,221,0.08)] px-6 py-4 last:border-b-0 ${
                active === link.key
                  ? "text-[rgb(240,234,221)]"
                  : "text-[rgba(240,234,221,0.62)]"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
