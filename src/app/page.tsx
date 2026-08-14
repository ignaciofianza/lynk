import type { Metadata } from "next";

import Hero from "@/components/home/Hero";
import ServicesPreview from "@/components/home/ServicesPreview";
import AboutPreview from "@/components/home/AboutPreview";
import FAQPreview from "@/components/home/FAQPreview";
import ContactCTA from "@/components/home/ContactCTA";

export const metadata: Metadata = {
  title: "Inicio | Lynk",

  description:
    "Lynk reúne redes, seguridad, desarrollo web y soporte bajo una misma mirada. Soluciones para hogares, comercios, empresas y proyectos en Montevideo, Uruguay.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Inicio | Lynk",
    description:
      "Redes, seguridad, desarrollo web y soporte bajo una misma mirada.",
    url: "/",
  },

  twitter: {
    title: "Inicio | Lynk",
    description:
      "Redes, seguridad, desarrollo web y soporte bajo una misma mirada.",
  },
};

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ServicesPreview />
      <AboutPreview />
      <FAQPreview />
      <ContactCTA />
    </main>
  );
}