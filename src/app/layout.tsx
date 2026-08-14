import type { Metadata } from "next";

import "@/app/globals.css";

import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { PageTransitionProvider } from "@/components/motion/PageTransitionProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://lynkuy.vercel.app"),

  title: {
    default: "Inicio | Lynk",
    template: "%s | Lynk",
  },

  applicationName: "Lynk",

  creator: "Lynk",
  publisher: "Lynk",

  openGraph: {
    type: "website",
    locale: "es_UY",
    siteName: "Lynk",
  },

  twitter: {
    card: "summary_large_image",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      data-scroll-behavior="smooth"
    >
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