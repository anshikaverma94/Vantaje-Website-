import type { Metadata } from "next";
import Header from "@/components/Header";
import LocationComingSoon from "@/components/location/LocationComingSoon";
import LocationFooter from "@/components/location/LocationFooter";

export const metadata: Metadata = {
  title: "Location — Vantaje by Aura",
  description:
    "The location story for Vantaje at Sector 48, Sohna Road, Gurugram is being finalised. Speak with our team in the meantime.",
};

export default function LocationPage() {
  return (
    <>
      <Header active="location" />
      <div
        id="p-location"
        className="relative bg-[rgb(11,10,9)] text-[rgb(240,234,221)]"
        style={{ fontFamily: "var(--font-jost), system-ui, sans-serif" }}
      >
        <LocationComingSoon />
        <LocationFooter />
      </div>
    </>
  );
}
