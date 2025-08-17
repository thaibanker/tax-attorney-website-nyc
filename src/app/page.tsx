import { ProfessionalHeader } from "@/components/professional-header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { ProfessionalFooter } from "@/components/professional-footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <ProfessionalHeader />
      <main>
        <HeroSection />
        <ServicesSection />
      </main>
      <ProfessionalFooter />
    </div>
  );
}


