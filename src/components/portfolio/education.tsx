"use client";

import { motion } from "framer-motion";
import { SectionWrapper, SectionHeader } from "./section-wrapper";
import { GraduationCap } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-provider";

export function EducationSection() {
  const { t } = useLanguage();

  const education = [
    {
      title: t.education.edu1Title,
      institution: t.education.edu1Institution,
      period: "2024 - 2026",
      description: t.education.edu1Description,
      tags: ["C", "C++", "Unix", "Docker", t.education.tagNetworks, t.education.tagWebDev],
    },
    {
      title: t.education.edu2Title,
      institution: t.education.edu2Institution,
      period: "2019 - 2023",
      description: t.education.edu2Description,
      tags: [t.education.tagProgramming, t.education.tagTIC, t.education.tagNetworks, t.education.tagMaintenance],
    },
  ];

  return (
    <SectionWrapper id="education">
      <SectionHeader
        label={t.education.label}
        title={t.education.title}
        description={t.education.description}
      />

      <div className="space-y-6 md:space-y-8">
        {education.map((edu, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="glass-card rounded-2xl p-5 md:p-8 group dark:hover:bg-white/[0.06] hover:bg-zinc-900/[0.04] transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl dark:bg-zinc-800/80 bg-zinc-100/80 flex items-center justify-center flex-shrink-0 group-hover:dark:bg-zinc-700/80 group-hover:bg-zinc-200/80 transition-colors">
                <GraduationCap
                  size={22}
                  className="dark:text-zinc-400 text-zinc-500 group-hover:dark:text-white group-hover:text-zinc-900 transition-colors"
                />
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-base md:text-lg font-semibold dark:text-white text-zinc-900 group-hover:gradient-text transition-all">
                      {edu.title}
                    </h3>
                    <p className="text-sm dark:text-zinc-400 text-zinc-500 mt-0.5">
                      {edu.institution}
                    </p>
                  </div>
                  <span className="text-xs font-mono dark:text-zinc-600 text-zinc-400 flex-shrink-0">
                    {edu.period}
                  </span>
                </div>

                <p className="text-sm dark:text-zinc-500 text-zinc-500 leading-relaxed mb-4">
                  {edu.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {edu.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-[11px] font-mono dark:text-zinc-400 text-zinc-500 dark:bg-zinc-800/60 bg-zinc-100/80 dark:border-zinc-700/50 border-zinc-200/80 border rounded-md dark:hover:bg-zinc-700/60 hover:bg-zinc-200/80 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
