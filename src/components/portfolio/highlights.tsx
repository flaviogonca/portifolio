"use client";

import { motion } from "framer-motion";
import { SectionWrapper, SectionHeader } from "./section-wrapper";
import { Network, Building2, Users } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-provider";

export function HighlightsSection() {
  const { t } = useLanguage();

  const highlights = [
    {
      icon: Network,
      title: t.highlights.scalableTitle,
      description: t.highlights.scalableDesc,
    },
    {
      icon: Building2,
      title: t.highlights.multiSectorTitle,
      description: t.highlights.multiSectorDesc,
    },
    {
      icon: Users,
      title: t.highlights.techLeadTitle,
      description: t.highlights.techLeadDesc,
    },
  ];

  return (
    <SectionWrapper id="highlights" className="relative">
      <div className="absolute inset-0 dark:bg-gradient-to-b dark:from-[#09090b] dark:via-zinc-950/30 dark:to-[#09090b] bg-gradient-to-b from-white via-zinc-50/30 to-white" />

      <div className="relative z-10">
        <SectionHeader
          label={t.highlights.label}
          title={t.highlights.title}
          description={t.highlights.description}
        />

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="group relative"
            >
              {/* Glow effect on hover */}
              <div className="absolute -inset-px rounded-2xl dark:bg-gradient-to-b bg-gradient-to-b dark:from-white/10 from-zinc-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

              <div className="relative glass-card rounded-2xl p-6 md:p-8 h-full dark:hover:bg-white/[0.06] hover:bg-zinc-900/[0.04] transition-all duration-300 group-hover:bg-white/[0.06]">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl dark:bg-zinc-800/80 bg-zinc-100/80 flex items-center justify-center mb-5 group-hover:dark:bg-zinc-700/80 group-hover:bg-zinc-200/80 transition-colors">
                  <item.icon
                    size={22}
                    className="dark:text-zinc-400 text-zinc-500 group-hover:dark:text-white group-hover:text-zinc-900 transition-colors"
                  />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold dark:text-white text-zinc-900 mb-2 group-hover:gradient-text transition-all">
                  {item.title}
                </h3>
                <p className="text-sm dark:text-zinc-500 text-zinc-500 leading-relaxed">
                  {item.description}
                </p>

                {/* Decorative line */}
                <div className="mt-5 pt-5 dark:border-white/5 border-zinc-200/50 border-t">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-px dark:bg-gradient-to-r dark:from-white/30 dark:to-transparent bg-gradient-to-r from-zinc-400/30 to-transparent group-hover:dark:from-white/60 group-hover:from-zinc-900/40 transition-all" />
                    <span className="text-[10px] font-mono dark:text-zinc-600 text-zinc-400 group-hover:dark:text-zinc-500 group-hover:text-zinc-600 transition-colors">
                      {t.highlights.learnMore}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
