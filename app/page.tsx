import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import SelectedWorkSection from "@/components/SelectedWorkSection";
import ExperienceEducationSkills from "@/components/ExperienceEducationSkills";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      <div className="min-h-screen flex flex-col bg-[#fef9f5] text-[#141416] selection:bg-[#2250F4] selection:text-white">
        <Navbar />
        <main className="flex-1 flex flex-col">
          <Hero />
          <AboutSection />
          <SelectedWorkSection />
          <ExperienceEducationSkills />
        </main>
      </div>
    </SmoothScroll>
  );
}

