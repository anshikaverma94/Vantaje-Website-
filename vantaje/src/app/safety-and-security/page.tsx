import type { Metadata } from "next";
import Header from "@/components/Header";
import SafetyHero from "@/components/safety/SafetyHero";
import PillarsDeck from "@/components/safety/PillarsDeck";
import SmartOperationsSection from "@/components/safety/SmartOperationsSection";
import SustainabilitySection from "@/components/safety/SustainabilitySection";
import SafetyCtaFooter from "@/components/safety/SafetyCtaFooter";

export const metadata: Metadata = {
  title: "Safety & Security — Vantaje by Aura",
  description:
    "Advanced infrastructure, thoughtful operations and responsible design come together to create a secure and seamlessly managed environment at Vantaje.",
};

export default function SafetyAndSecurityPage() {
  return (
    <>
      <Header active="safety" />
      <div
        id="p-safety"
        className="relative bg-[rgb(11,10,9)] text-[rgb(240,234,221)]"
        style={{ fontFamily: "var(--font-jost), system-ui, sans-serif" }}
      >
        <SafetyHero />
        <PillarsDeck />
        <SmartOperationsSection />
        <SustainabilitySection />
        <SafetyCtaFooter />
      </div>
    </>
  );
}
