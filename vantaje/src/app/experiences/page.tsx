import type { Metadata } from "next";
import Header from "@/components/Header";
import ExperiencesHero from "@/components/experiences/ExperiencesHero";
import FloorsDeck from "@/components/experiences/FloorsDeck";
import SpacesMarquee from "@/components/experiences/SpacesMarquee";
import ExperiencesCtaFooter from "@/components/experiences/ExperiencesCtaFooter";

export const metadata: Metadata = {
  title: "Experiences — Vantaje by Aura",
  description:
    "From everyday convenience to elevated leisure, Vantaje brings together experiences designed to attract, engage and bring people back.",
};

export default function ExperiencesPage() {
  return (
    <>
      <Header active="experiences" />
      <div
        id="p-experiences"
        className="relative bg-[rgb(11,10,9)] text-[rgb(240,234,221)]"
        style={{ fontFamily: "var(--font-jost), system-ui, sans-serif" }}
      >
        <ExperiencesHero />
        <FloorsDeck />
        <SpacesMarquee />
        <ExperiencesCtaFooter />
      </div>
    </>
  );
}
