"use client";

import { motion } from "framer-motion";
import { SectionWrapper, SectionHeader } from "./section-wrapper";
import { useLanguage } from "@/lib/i18n/language-provider";

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <SectionWrapper id="about">
      <SectionHeader label={t.about.label} title={t.about.title} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="glass-card rounded-2xl p-6 md:p-8"
      >
        <div className="space-y-4">
          {t.about.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="flex items-start gap-4 group dark:hover:bg-white/[0.03] hover:bg-zinc-900/[0.02] rounded-xl p-3 -mx-3 transition-colors"
            >
              <span className="text-xl flex-shrink-0 mt-0.5">{item.emoji}</span>
              <p className="text-sm md:text-base dark:text-zinc-400 text-zinc-500 leading-relaxed group-hover:dark:text-zinc-300 group-hover:text-zinc-600 transition-colors">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
