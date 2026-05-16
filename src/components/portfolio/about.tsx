"use client";

import { motion } from "framer-motion";
import { SectionWrapper, SectionHeader } from "./section-wrapper";
import { useLanguage } from "@/lib/i18n/language-provider";

export function AboutSection() {
  const { t } = useLanguage();

  const badges = [
    t.about.badgeBackend,
    t.about.badgeSystemDesign,
    t.about.badgeAPIs,
    t.about.badgeCloud,
    t.about.badgeDevOps,
    t.about.badgeCICD,
    t.about.badgeObservability,
    t.about.badgeArchitecture,
    t.about.badgeSecurity,
    t.about.badgeTechLead,
  ];

  const highlights = [
    { icon: "⚡", title: t.about.archVision, description: t.about.archVisionDesc },
    { icon: "🔧", title: t.about.practicalExec, description: t.about.practicalExecDesc },
    { icon: "🤝", title: t.about.collaboration, description: t.about.collaborationDesc },
    { icon: "📊", title: t.about.measurability, description: t.about.measurabilityDesc },
  ];

  return (
    <SectionWrapper id="about">
      <SectionHeader label={t.about.label} title={t.about.title} />

      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        {/* Professional Summary */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="glass-card rounded-2xl p-6 md:p-8 h-full">
            <h3 className="text-lg font-semibold dark:text-white text-zinc-900 mb-4">
              {t.about.summaryTitle}
            </h3>
            <p className="dark:text-zinc-400 text-zinc-500 leading-relaxed text-sm md:text-base">
              {t.about.summary}
            </p>

            <div className="mt-6 pt-6 dark:border-white/5 border-zinc-200/50 border-t">
              <h4 className="text-sm font-medium dark:text-zinc-300 text-zinc-700 mb-3">
                {t.about.keyCompetencies}
              </h4>
              <div className="flex flex-wrap gap-2">
                {badges.map((badge, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                    className="px-3 py-1.5 text-xs font-medium dark:text-zinc-300 text-zinc-600 dark:bg-zinc-800/60 bg-zinc-100/80 dark:border-zinc-700/50 border-zinc-200/80 border rounded-lg dark:hover:bg-zinc-700/60 hover:bg-zinc-200/80 dark:hover:border-zinc-600/50 hover:border-zinc-300/50 transition-all cursor-default"
                  >
                    {badge}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Technical Highlights */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="glass-card rounded-xl p-5 dark:hover:bg-white/[0.06] hover:bg-zinc-900/[0.04] transition-all duration-300 group"
            >
              <div className="text-2xl mb-3">{item.icon}</div>
              <h4 className="text-sm font-semibold dark:text-white text-zinc-900 mb-1.5 group-hover:gradient-text transition-all">
                {item.title}
              </h4>
              <p className="text-xs dark:text-zinc-500 text-zinc-500 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
