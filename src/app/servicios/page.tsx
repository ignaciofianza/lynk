import ServicesHero from "@/components/services/ServicesHero";
import ServicesGrid from "@/components/services/ServicesGrid";
import ProcessSection from "@/components/services/ProcessSection";
import ServicesCTA from "@/components/services/ServicesCTA";

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