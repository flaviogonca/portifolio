"use client";

import { Navbar } from "@/components/portfolio/navbar";
import { HeroSection } from "@/components/portfolio/hero";
import { AboutSection } from "@/components/portfolio/about";
import { SkillsSection } from "@/components/portfolio/skills";
import { ExperienceSection } from "@/components/portfolio/experience";
import { HighlightsSection } from "@/components/portfolio/highlights";
import { EducationSection } from "@/components/portfolio/education";
import { ContactSection } from "@/components/portfolio/contact";
import { Footer } from "@/components/portfolio/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#09090b]">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <HighlightsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
