import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechStackMarquee from "@/components/TechStackMarquee";
import AboutSection from "@/components/AboutSection";
import SelectedWorkSection from "@/components/SelectedWorkSection";
import ExperienceEducationSkills from "@/components/ExperienceEducationSkills";
import ContactSection from "@/components/ContactSection";
import SmoothScroll from "@/components/SmoothScroll";
import SectionRouteInitializer from "@/components/SectionRouteInitializer";

export default function Home() {
  return (
    <SmoothScroll>
      <SectionRouteInitializer />
      <div className="min-h-screen flex flex-col bg-[#fef9f5] text-[#141416] selection:bg-[#2250F4] selection:text-white">
        <Navbar />
        <main className="flex-1 flex flex-col">
          <Hero />
          <TechStackMarquee />
          <AboutSection />
          <SelectedWorkSection />
          <ExperienceEducationSkills />
          <ContactSection />
        </main>
      </div>
    </SmoothScroll>
  );
}

