import type { Metadata } from "next";
import Header from "@/components/Header";
import OverviewHero from "@/components/overview/OverviewHero";
import AboutSection from "@/components/overview/AboutSection";
import AdvantageSection from "@/components/overview/AdvantageSection";
import ArchitectureSection from "@/components/overview/ArchitectureSection";
import ServicesSection from "@/components/overview/ServicesSection";
import OverviewCtaFooter from "@/components/overview/OverviewCtaFooter";

export const metadata: Metadata = {
  title: "Overview — Vantaje by Aura",
  description:
    "Where Sohna Road's premium address meets high street energy — the Vantaje overview.",
};

export default function OverviewPage() {
  return (
    <>
      <Header active="overview" />
      <div
        id="p-overview"
        className="relative bg-[rgb(11,10,9)] text-[rgb(240,234,221)]"
        style={{ fontFamily: "var(--font-jost), system-ui, sans-serif" }}
      >
        <OverviewHero />
        <AboutSection />
        <AdvantageSection />
        <ArchitectureSection />
        <ServicesSection />
        <OverviewCtaFooter />
      </div>
    </>
  );
}
