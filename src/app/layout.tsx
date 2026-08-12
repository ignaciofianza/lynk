import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";

import "@/app/globals.css";

import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: "400",
});

export const metadata: Metadata = {
  title: {
    default: "lynk",
    template: "%s | lynk",
  },
  description:
    "Soluciones de redes, seguridad, infraestructura, desarrollo y soporte tecnológico en Uruguay.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} ${instrumentSerif.variable}`}
      >
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}