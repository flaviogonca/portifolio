"use client";

import { motion } from "framer-motion";
import { SectionWrapper, SectionHeader } from "./section-wrapper";
import { useLanguage } from "@/lib/i18n/language-provider";

const containerVariants: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants: any = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function SpokenLanguagesSection() {
  const { t } = useLanguage();

  const langs = [
    { name: t.spokenLanguages.portuguese, level: t.spokenLanguages.portugueseLevel, flag: "🇦🇴", percent: 100 },
    { name: t.spokenLanguages.english, level: t.spokenLanguages.englishLevel, flag: "🇬🇧", percent: 85 },
    { name: t.spokenLanguages.french, level: t.spokenLanguages.frenchLevel, flag: "🇫🇷", percent: 30 },
  ];

  return (
    <SectionWrapper id="languages">
      <SectionHeader
        label={t.spokenLanguages.label}
        title={t.spokenLanguages.title}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="grid sm:grid-cols-3 gap-4 md:gap-5"
      >
        {langs.map((lang, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            className="glass-card rounded-2xl p-5 md:p-6 group text-center"
          >
            <div className="text-3xl mb-3">{lang.flag}</div>
            <h3 className="text-base font-semibold dark:text-white text-zinc-900 mb-1 group-hover:gradient-text transition-all">
              {lang.name}
            </h3>
            <p className="text-sm dark:text-zinc-400 text-zinc-500 mb-4">
              {lang.level}
            </p>

            {/* Progress bar */}
            <div className="w-full h-1.5 dark:bg-zinc-800 bg-zinc-200 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${lang.percent}%` }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.8, ease: "easeOut" }}
                className="h-full rounded-full dark:bg-emerald-500/70 bg-emerald-500/60"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
