"use client";

import { motion } from "framer-motion";
import { SectionWrapper, SectionHeader } from "./section-wrapper";
import { Terminal, Globe, Database, Wrench } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-provider";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export function TechStackSection() {
  const { t } = useLanguage();

  const categories = [
    {
      icon: Terminal,
      title: t.techStack.systems,
      items: t.techStack.systemItems,
    },
    {
      icon: Globe,
      title: t.techStack.webBackend,
      items: t.techStack.webItems,
    },
    {
      icon: Database,
      title: t.techStack.database,
      items: t.techStack.databaseItems,
    },
    {
      icon: Wrench,
      title: t.techStack.devops,
      items: t.techStack.devopsItems,
    },
  ];

  return (
    <SectionWrapper id="tech-stack" className="relative">
      <div className="absolute inset-0 dark:bg-gradient-to-b dark:from-[#09090b] dark:via-zinc-950/30 dark:to-[#09090b] bg-gradient-to-b from-white via-zinc-50/30 to-white" />

      <div className="relative z-10">
        <SectionHeader
          label={t.techStack.label}
          title={t.techStack.title}
          description={t.techStack.description}
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid sm:grid-cols-2 gap-4 md:gap-5"
        >
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="glass-card rounded-2xl p-5 md:p-6 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg dark:bg-zinc-800/80 bg-zinc-100/80 flex items-center justify-center group-hover:dark:bg-zinc-700/80 group-hover:bg-zinc-200/80 transition-colors">
                  <cat.icon
                    size={18}
                    className="dark:text-zinc-400 text-zinc-500 group-hover:dark:text-white group-hover:text-zinc-900 transition-colors"
                  />
                </div>
                <h3 className="text-sm font-semibold dark:text-white text-zinc-900 group-hover:gradient-text transition-all">
                  {cat.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 text-[11px] font-mono dark:text-zinc-400 text-zinc-500 dark:bg-zinc-800/60 bg-zinc-100/80 dark:border-zinc-700/50 border-zinc-200/80 border rounded-md hover:dark:border-emerald-500/30 hover:border-emerald-500/30 hover:dark:text-emerald-400 hover:text-emerald-600 transition-colors duration-200 cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
