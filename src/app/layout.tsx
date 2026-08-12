import type { Metadata } from "next";

import "@/app/globals.css";

import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { PageTransitionProvider } from "@/components/motion/PageTransitionProvider";

export const metadata: Metadata = {
  title: {
    default: "lynk",
    template: "%s | lynk",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" data-scroll-behavior="smooth">
      <body>
        <PageTransitionProvider>
          <Navbar />

          {children}

          <Footer />
        </PageTransitionProvider>
      </body>
    </html>
  );
}
