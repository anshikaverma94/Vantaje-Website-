import type { Metadata } from "next";
import { EB_Garamond, Cormorant_Garamond, Jost } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import BackToMainSite from "@/components/BackToMainSite";
import "./globals.css";

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Vantaje by Aura — Sector 48, Sohna Road, Gurugram",
  description:
    "Vantaje brings together business, lifestyle, leisure and everyday experiences at one distinctive address in Gurugram.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${ebGaramond.variable} ${cormorant.variable} ${jost.variable}`}
    >
      <body className="min-h-full">
        <SmoothScroll />
        {children}
        <BackToMainSite />
      </body>
    </html>
  );
}
