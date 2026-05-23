"use client";

import { motion } from "framer-motion";
import { Shield, Users, Award } from "lucide-react";
import { SectionWrapper, SectionHeader } from "./section-wrapper";
import { useLanguage } from "@/lib/i18n/language-provider";

const containerVariants: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: any = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const heroVariants: any = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const techBarVariants: any = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.4, ease: "easeOut" },
  },
};

export function DeepDiveSection() {
  const { t } = useLanguage();

  const sections = [
    t.deepDive.sections.auth,
    t.deepDive.sections.game,
    t.deepDive.sections.database,
    t.deepDive.sections.chat,
    t.deepDive.sections.pm,
  ];

  // techList is a dot-separated string in the current translations
  const techItems = t.deepDive.techList.split(" · ");

  return (
    <SectionWrapper id="deep-dive" className="relative">
      {/* Background gradient */}
      <div className="absolute inset-0 dark:bg-gradient-to-b dark:from-[#09090b] dark:via-emerald-950/10 dark:to-[#09090b] bg-gradient-to-b from-white via-emerald-50/20 to-white" />

      <div className="relative z-10">
        <SectionHeader
          label={t.deepDive.label}
          title={t.deepDive.title}
          description={t.deepDive.subtitle}
        />

        {/* Hero Banner */}
        <motion.div
          variants={heroVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="glass-card rounded-2xl p-5 md:p-8 mb-8 group"
        >
          <div className="flex flex-col md:flex-row md:items-center gap-5 md:gap-8">
            {/* Score Badge */}
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="absolute -inset-1 rounded-xl bg-emerald-500/20 blur-md opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative flex items-center gap-2.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-xl px-4 py-3">
                  <Award size={20} className="flex-shrink-0" />
                  <div>
                    <div className="text-xl font-bold tracking-tight font-mono">
                      {t.deepDive.score}
                    </div>
                    <div className="text-[10px] font-mono tracking-wider uppercase text-emerald-500/80">
                      Bonus Points
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-16 dark:bg-white/10 bg-zinc-200" />
            <div className="md:hidden h-px dark:bg-white/10 bg-zinc-200" />

            {/* Team & Role Info */}
            <div className="flex-1 space-y-3">
              <div className="flex flex-wrap items-center gap-3">
                {/* Team Badge */}
                <div className="flex items-center gap-2 dark:bg-zinc-800/60 bg-zinc-100/80 border dark:border-zinc-700/50 border-zinc-200/80 rounded-lg px-3 py-1.5">
                  <Users size={14} className="dark:text-zinc-400 text-zinc-500" />
                  <span className="text-sm dark:text-zinc-300 text-zinc-600 font-medium">
                    {t.deepDive.team}
                  </span>
                </div>

                {/* Role Badge */}
                <div className="flex items-center gap-2 dark:bg-zinc-800/60 bg-zinc-100/80 border dark:border-zinc-700/50 border-zinc-200/80 rounded-lg px-3 py-1.5">
                  <Shield size={14} className="dark:text-emerald-400 text-emerald-600" />
                  <span className="text-sm dark:text-zinc-300 text-zinc-600 font-medium">
                    {t.deepDive.role}
                  </span>
                </div>
              </div>

              <p className="text-sm dark:text-zinc-400 text-zinc-500 leading-relaxed max-w-2xl">
                {t.deepDive.roleDescription}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Feature Sections Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid md:grid-cols-2 gap-4 md:gap-5"
        >
          {sections.map((section, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className={`glass-card rounded-2xl p-5 md:p-6 group ${
                i === 4 ? "md:col-span-2" : ""
              }`}
            >
              {/* Section Title */}
              <h3 className="text-base font-semibold dark:text-white text-zinc-900 mb-4 flex items-center gap-2">
                <span>{section.title}</span>
              </h3>

              {/* Bullet Points */}
              <ul className="space-y-2.5">
                {section.bullets.map((bullet, j) => (
                  <li key={j} className="flex items-start gap-2.5">
                    <span className="mt-1.5 flex-shrink-0 w-1 h-1 rounded-full dark:bg-emerald-400/60 bg-emerald-500/70" />
                    <span className="dark:text-zinc-400 text-zinc-500 text-sm leading-relaxed">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Subtle decorative line */}
              <div className="mt-4 pt-3 dark:border-white/5 border-zinc-200/50 border-t">
                <div className="w-8 h-px dark:bg-gradient-to-r dark:from-emerald-500/40 dark:to-transparent bg-gradient-to-r from-emerald-500/30 to-transparent group-hover:dark:from-emerald-400/70 group-hover:from-emerald-600/50 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Used Footer Bar */}
        <motion.div
          variants={techBarVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="mt-8 glass-card rounded-2xl p-5 md:p-6"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1.5 h-1.5 rounded-full dark:bg-emerald-400/60 bg-emerald-500/70" />
            <span className="text-xs font-mono tracking-widest dark:text-zinc-500 text-zinc-400 uppercase">
              {t.deepDive.techUsed}
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {techItems.map((tech, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.04, duration: 0.3 }}
                className="px-2.5 py-1 text-[11px] font-mono dark:text-zinc-400 text-zinc-500 dark:bg-zinc-800/60 bg-zinc-100/80 dark:border-zinc-700/50 border-zinc-200/80 border rounded-md hover:dark:border-emerald-500/30 hover:border-emerald-500/30 hover:dark:text-emerald-400 hover:text-emerald-600 transition-colors duration-200 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
