"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { AnimatedGrid } from "./animated-grid";
import { useLanguage } from "@/lib/i18n/language-provider";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function HeroSection() {
  const { t } = useLanguage();

  const metrics = [
    { value: "3+", label: t.hero.metricYears },
    { value: "30%", label: t.hero.metricEfficiency },
    { value: "7", label: t.hero.metricTeams },
    { value: "4", label: t.hero.metricSectors },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 dark:bg-[#09090b] bg-white" />
      <AnimatedGrid />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 dark:bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.03)_0%,_transparent_70%)] bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.02)_0%,_transparent_70%)]" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16"
        >
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-wider dark:text-zinc-400 text-zinc-500 dark:border-zinc-800 border-zinc-200 dark:bg-zinc-900/50 bg-zinc-100/50">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                {t.hero.available}
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6 dark:text-white text-zinc-900"
            >
              {t.hero.title1}{" "}
              <span className="gradient-text">{t.hero.titleHighlight1}</span>{" "}
              {t.hero.title2}{" "}
              <span className="gradient-text">{t.hero.titleHighlight2}</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg dark:text-zinc-500 text-zinc-500 max-w-2xl leading-relaxed mb-8 mx-auto lg:mx-0"
            >
              {t.hero.subtitle}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 dark:bg-white bg-zinc-900 dark:text-zinc-900 text-white font-medium text-sm rounded-lg dark:hover:bg-zinc-200 hover:bg-zinc-700 transition-colors group"
              >
                <Mail size={16} />
                {t.hero.ctaContact}
              </a>
              <a
                href="#experience"
                className="inline-flex items-center gap-2 px-6 py-3 dark:border-zinc-800 border-zinc-300 dark:text-zinc-400 text-zinc-500 font-medium text-sm rounded-lg dark:hover:border-zinc-600 hover:border-zinc-400 dark:hover:text-white hover:text-zinc-900 transition-all group"
              >
                {t.hero.ctaExperience}
                <ArrowDown
                  size={14}
                  className="group-hover:translate-y-0.5 transition-transform"
                />
              </a>
            </motion.div>
          </div>

          {/* Avatar */}
          <motion.div
            variants={itemVariants}
            className="relative flex-shrink-0"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full dark:bg-white/5 bg-zinc-900/5 blur-3xl scale-110" />
              <div className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden dark:border-zinc-800 border-zinc-200 border-2 glow-white">
                <Image
                  src="/avatar.png"
                  alt="Flávio Goncalves"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Status indicator */}
              <div className="absolute bottom-2 right-2 w-4 h-4 rounded-full bg-emerald-500 dark:border-[#09090b] border-white border-2" />
            </div>
          </motion.div>
        </motion.div>

        {/* Metrics */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 md:mt-20"
        >
          {metrics.map((metric) => (
            <motion.div
              key={metric.label}
              variants={itemVariants}
              className="glass-card rounded-xl p-5 text-center group dark:hover:bg-white/[0.06] hover:bg-zinc-900/[0.04] transition-all duration-300"
            >
              <div className="text-2xl md:text-3xl font-bold dark:text-white text-zinc-900 mb-1 group-hover:gradient-text transition-all">
                {metric.value}
              </div>
              <div className="text-xs md:text-sm dark:text-zinc-500 text-zinc-500 font-medium">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 dark:bg-gradient-to-t dark:from-[#09090b] dark:to-transparent bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
