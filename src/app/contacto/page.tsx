import type { Metadata } from "next";

import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contacto",

  description:
    "Contactá a Lynk para conversar sobre redes, seguridad, desarrollo web, soporte o cualquier proyecto que necesites resolver.",

  alternates: {
    canonical: "/contacto",
  },

  openGraph: {
    title: "Contacto | Lynk",
    description:
      "Contanos qué necesitás resolver y vemos cómo podemos ayudarte.",
    url: "/contacto",
  },

  twitter: {
    title: "Contacto | Lynk",
    description: "Ponete en contacto con Lynk y contanos sobre tu proyecto.",
  },
};

export default function ContactoPage() {
  return (
    <main>
      <ContactHero />
      <ContactForm />
    </main>
  );
}
