import Hero from "@/components/home/Hero";
import ServicesPreview from "@/components/home/ServicesPreview";
import AboutPreview from "@/components/home/AboutPreview";
import WhyLynk from "@/components/home/WhyLynk";
import ContactCTA from "@/components/home/ContactCTA";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ServicesPreview />
      <AboutPreview />
      <WhyLynk />
      <ContactCTA />
    </main>
  );
}