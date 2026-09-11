import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PlazaVideo from "@/components/PlazaVideo";
import ExperienceRing from "@/components/ExperienceRing";
import LocationScroll from "@/components/LocationScroll";
import Advantage from "@/components/Advantage";
import CtaFooter from "@/components/CtaFooter";

export default function Home() {
  return (
    <>
      <Header />
      <div
        id="p-home"
        className="relative bg-[rgb(247,244,237)]"
        style={{ fontFamily: "var(--font-eb-garamond), Georgia, serif" }}
      >
        <Hero />
        <PlazaVideo />
        <ExperienceRing />
        <LocationScroll />
        <Advantage />
        <CtaFooter />
      </div>
    </>
  );
}
