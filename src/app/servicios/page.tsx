import type { Metadata } from "next";

import ServicesHero from "@/components/services/ServicesHero";
import ServicesGrid from "@/components/services/ServicesGrid";
import ProcessSection from "@/components/services/ProcessSection";
import ServicesCTA from "@/components/services/ServicesCTA";

export const metadata: Metadata = {
  title: "Servicios",

  description:
    "Conocé los servicios de Lynk: redes e infraestructura, seguridad y videovigilancia, desarrollo web, equipos y soporte técnico.",

  alternates: {
    canonical: "/servicios",
  },

  openGraph: {
    title: "Servicios | Lynk",
    description:
      "Redes, seguridad, desarrollo web y soporte que pueden funcionar por separado o combinarse según cada proyecto.",
    url: "/servicios",
  },

  twitter: {
    title: "Servicios | Lynk",
    description:
      "Redes, seguridad, desarrollo web y soporte para proyectos de distintas escalas.",
  },
};

export default function ServiciosPage() {
  return (
    <main>
      <ServicesHero />
      <ServicesGrid />
      <ProcessSection />
      <ServicesCTA />
    </main>
  );
}