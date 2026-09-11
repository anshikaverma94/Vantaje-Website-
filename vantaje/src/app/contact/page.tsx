import type { Metadata } from "next";
import Header from "@/components/Header";
import ContactHero from "@/components/contact/ContactHero";
import ContactEnquiry from "@/components/contact/ContactEnquiry";
import ContactVisitBanner from "@/components/contact/ContactVisitBanner";
import ContactInfoLinks from "@/components/contact/ContactInfoLinks";
import ContactDetailsCard from "@/components/contact/ContactDetailsCard";
import ContactFooter from "@/components/contact/ContactFooter";

export const metadata: Metadata = {
  title: "Contact — Vantaje by Aura",
  description:
    "Whether you are exploring an investment opportunity, retail space, office space or leasing opportunity, connect with our team to learn more.",
};

export default function ContactPage() {
  return (
    <>
      <Header active="contact" />
      <div
        id="p-contact"
        className="relative bg-[rgb(11,10,9)] text-[rgb(240,234,221)]"
        style={{ fontFamily: "var(--font-jost), system-ui, sans-serif" }}
      >
        <ContactHero />
        <ContactEnquiry />
        <ContactVisitBanner />
        <ContactInfoLinks />
        <ContactDetailsCard />
        <ContactFooter />
      </div>
    </>
  );
}
