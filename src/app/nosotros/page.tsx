import type { Metadata } from "next";

import AboutHero from "@/components/about/AboutHero";
import StorySection from "@/components/about/StorySection";
import ExperienceSection from "@/components/about/ExperienceSection";
import PrinciplesSection from "@/components/about/PrinciplesSection";
import AboutCTA from "@/components/about/AboutCTA";

export const metadata: Metadata = {
  title: "Nosotros",

  description:
    "Conocé la historia de Lynk, nuestra base técnica y la forma en que pensamos, trabajamos y resolvemos cada proyecto.",

  alternates: {
    canonical: "/nosotros",
  },

  openGraph: {
    title: "Nosotros | Lynk",
    description:
      "Dos personas, una misma idea: construir Lynk y conectar áreas que normalmente se resuelven por separado.",
    url: "/nosotros",
  },

  twitter: {
    title: "Nosotros | Lynk",
    description:
      "Conocé la historia, la experiencia y la forma de trabajar de Lynk.",
  },
};

export default function NosotrosPage() {
  return (
    <main>
      <AboutHero />
      <StorySection />
      <ExperienceSection />
      <PrinciplesSection />
      <AboutCTA />
    </main>
  );
}