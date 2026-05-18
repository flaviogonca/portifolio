"use client";

import { Navbar } from "@/components/portfolio/navbar";
import { HeroSection } from "@/components/portfolio/hero";
import { AboutSection } from "@/components/portfolio/about";
import { TechStackSection } from "@/components/portfolio/tech-stack";
import { ProjectsSection } from "@/components/portfolio/projects";
import { DeepDiveSection } from "@/components/portfolio/deep-dive";
import { ExperienceSection } from "@/components/portfolio/experience";
import { EducationSection } from "@/components/portfolio/education";
import { SpokenLanguagesSection } from "@/components/portfolio/spoken-languages";
import { ContactSection } from "@/components/portfolio/contact";
import { Footer } from "@/components/portfolio/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col dark:bg-[#09090b] bg-white">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <TechStackSection />
        <ProjectsSection />
        <DeepDiveSection />
        <ExperienceSection />
        <EducationSection />
        <SpokenLanguagesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
