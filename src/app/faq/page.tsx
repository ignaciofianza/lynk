import type { Metadata } from "next";

import FAQHero from "@/components/faq/FAQHero";
import FAQList from "@/components/faq/FAQList";
import FAQCTA from "@/components/faq/FAQCTA";

export const metadata: Metadata = {
  title: "FAQ",

  description:
    "Encontrá respuestas a las preguntas más frecuentes sobre los servicios, proyectos, presupuestos y forma de trabajo de Lynk.",

  alternates: {
    canonical: "/faq",
  },

  openGraph: {
    title: "FAQ | Lynk",
    description:
      "Respuestas claras a las dudas más comunes antes de empezar un proyecto con Lynk.",
    url: "/faq",
  },

  twitter: {
    title: "FAQ | Lynk",
    description:
      "Preguntas frecuentes sobre servicios, proyectos y forma de trabajo de Lynk.",
  },
};

export default function FAQPage() {
  return (
    <main>
      <FAQHero />
      <FAQList />
      <FAQCTA />
    </main>
  );
}