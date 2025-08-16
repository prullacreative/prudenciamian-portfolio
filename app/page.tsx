import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import SkillsSection from "@/components/skills-section"
import ServicesSection from "@/components/services-section"
import ProjectsSection from "@/components/projects-section"
import ContactSection from "@/components/contact-section"
import FloatingShapes from "@/components/floating-shapes"
import WhatsAppButton from "@/components/whatsapp-button"

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <FloatingShapes />
      <WhatsAppButton />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
      
    </div>
  )
}
