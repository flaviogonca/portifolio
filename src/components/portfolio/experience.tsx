"use client";

import { motion } from "framer-motion";
import { SectionWrapper, SectionHeader } from "./section-wrapper";
import { Briefcase } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-provider";

export function ExperienceSection() {
  const { t } = useLanguage();

  const experiences = [
    {
      title: t.experience.exp1Title,
      company: t.experience.exp1Company,
      period: t.experience.exp1Period,
      current: true,
      bullets: [t.experience.exp1Bullet1, t.experience.exp1Bullet2],
    },
    {
      title: t.experience.exp2Title,
      company: t.experience.exp2Company,
      period: t.experience.exp2Period,
      current: false,
      bullets: [t.experience.exp2Bullet1, t.experience.exp2Bullet2],
    },
    {
      title: t.experience.exp3Title,
      company: t.experience.exp3Company,
      period: t.experience.exp3Period,
      current: false,
      bullets: [t.experience.exp3Bullet1, t.experience.exp3Bullet2],
    },
  ];

  return (
    <SectionWrapper id="experience">
      <SectionHeader
        label={t.experience.label}
        title={t.experience.title}
        description={t.experience.description}
      />

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px dark:bg-gradient-to-b bg-gradient-to-b from-zinc-300 dark:from-zinc-700 dark:via-zinc-800 via-zinc-200 to-transparent" />

        <div className="space-y-8 md:space-y-10">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="relative pl-12 md:pl-20"
            >
              {/* Timeline dot */}
              <div className="absolute left-2.5 md:left-6.5 top-6">
                <div
                  className={`w-3 h-3 rounded-full border-2 ${
                    exp.current
                      ? "dark:bg-white bg-zinc-900 dark:border-white border-zinc-900 shadow-[0_0_12px_rgba(255,255,255,0.3)] dark:shadow-[0_0_12px_rgba(255,255,255,0.3)] shadow-[0_0_12px_rgba(0,0,0,0.2)]"
                      : "dark:bg-zinc-800 bg-zinc-200 dark:border-zinc-600 border-zinc-400"
                  }`}
                />
              </div>

              {/* Card */}
              <div className="glass-card rounded-2xl p-5 md:p-6 group dark:hover:bg-white/[0.06] hover:bg-zinc-900/[0.04] transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-base md:text-lg font-semibold dark:text-white text-zinc-900 group-hover:gradient-text transition-all">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <Briefcase size={13} className="dark:text-zinc-500 text-zinc-400" />
                      <span className="text-sm dark:text-zinc-400 text-zinc-500">{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {exp.current && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[10px] font-mono font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                        <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
                        {t.experience.current}
                      </span>
                    )}
                    <span className="text-xs font-mono dark:text-zinc-600 text-zinc-400">
                      {exp.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2">
                  {exp.bullets.map((bullet, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2.5 text-sm dark:text-zinc-400 text-zinc-500 leading-relaxed"
                    >
                      <span className="mt-2 w-1 h-1 rounded-full dark:bg-zinc-600 bg-zinc-300 flex-shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
