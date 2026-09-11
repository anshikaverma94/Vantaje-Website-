import Image from "next/image";
import Link from "next/link";

type NavKey = "home" | "overview" | "experiences" | "safety";

const BASE_LINKS: { key: NavKey; href: string; label: string }[] = [
  { key: "home", href: "/", label: "Homepage" },
  { key: "overview", href: "/overview", label: "Overview" },
  { key: "experiences", href: "#", label: "Experiences" },
];

export default function Header({
  active = "home",
  locationHref = "#hp-location",
  ctaHref = "#hp-cta",
}: {
  active?: NavKey;
  locationHref?: string;
  ctaHref?: string;
}) {
  return (
    <header className="fixed inset-x-0 top-0 z-[60] flex justify-center p-[clamp(10px,1.6vw,20px)]">
      <div className="flex w-full max-w-[1320px] items-center gap-[clamp(10px,2vw,26px)] rounded-full border border-[rgba(240,234,221,0.1)] bg-[rgba(16,14,12,0.62)] py-4 pl-[clamp(24px,3vw,40px)] pr-[clamp(24px,3vw,40px)] backdrop-blur-xl">
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
          {BASE_LINKS.map((link) => (
            <a
              key={link.label}
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
          <a
            href="/safety-and-security"
            className={`whitespace-nowrap transition-colors ${
              active === "safety"
                ? "text-[rgb(240,234,221)]"
                : "text-[rgba(240,234,221,0.62)] hover:text-[rgb(240,234,221)]"
            }`}
          >
            Safety and Security
          </a>
          <a
            href={locationHref}
            className="whitespace-nowrap text-[rgba(240,234,221,0.62)] transition-colors hover:text-[rgb(240,234,221)]"
          >
            Location
          </a>
          <a
            href={ctaHref}
            className="whitespace-nowrap text-[rgba(240,234,221,0.62)] transition-colors hover:text-[rgb(240,234,221)]"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
