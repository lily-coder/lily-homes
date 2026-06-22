import type { Metadata } from "next";
import { ServicesHero } from "@/components/services/ServicesHero";
import { ServicesGrid } from "@/components/services/ServicesGrid";
import { PortfolioMasonry } from "@/components/services/PortfolioMasonry";
import { StatsTestimonials } from "@/components/services/StatsTestimonials";
import { ContactSection } from "@/components/services/ContactSection";

export const metadata: Metadata = {
  title: "Services & Portfolio",
  description:
    "Luxury interior design services in Nairobi. Space planning, room styling, and full home design.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <PortfolioMasonry />
      <StatsTestimonials />
      <ContactSection />
    </>
  );
}
