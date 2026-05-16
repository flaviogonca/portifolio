"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { AnimatedGrid } from "./animated-grid";
import Image from "next/image";

const metrics = [
  { value: "3+", label: "Anos de Experiência" },
  { value: "30%", label: "Melhoria de Eficiência" },
  { value: "7", label: "Equipas Lideradas" },
  { value: "4", label: "Setores Atendidos" },
];

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
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#09090b]" />
      <AnimatedGrid />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.03)_0%,_transparent_70%)]" />

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
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-wider text-zinc-400 border border-zinc-800 bg-zinc-900/50">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Disponível para projetos
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6"
            >
              Construindo sistemas{" "}
              <span className="gradient-text">robustos</span> para produtos que
              precisam{" "}
              <span className="gradient-text">escalar.</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-zinc-500 max-w-2xl leading-relaxed mb-8 mx-auto lg:mx-0"
            >
              Sou Flávio Goncalves, software developer com 3 anos de experiência
              em criação, implementação e otimização de sistemas complexos. Meu
              foco é transformar requisitos de negócio em soluções técnicas
              confiáveis, mensuráveis e sustentáveis.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-zinc-900 font-medium text-sm rounded-lg hover:bg-zinc-200 transition-colors group"
              >
                <Mail size={16} />
                Entrar em contato
              </a>
              <a
                href="#experience"
                className="inline-flex items-center gap-2 px-6 py-3 border border-zinc-800 text-zinc-400 font-medium text-sm rounded-lg hover:border-zinc-600 hover:text-white transition-all group"
              >
                Ver experiência
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
              <div className="absolute inset-0 rounded-full bg-white/5 blur-3xl scale-110" />
              <div className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-2 border-zinc-800 glow-white">
                <Image
                  src="/avatar.png"
                  alt="Flávio Goncalves"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Status indicator */}
              <div className="absolute bottom-2 right-2 w-4 h-4 rounded-full bg-emerald-500 border-2 border-[#09090b]" />
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
              className="glass-card rounded-xl p-5 text-center group hover:bg-white/[0.06] transition-all duration-300"
            >
              <div className="text-2xl md:text-3xl font-bold text-white mb-1 group-hover:gradient-text transition-all">
                {metric.value}
              </div>
              <div className="text-xs md:text-sm text-zinc-500 font-medium">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#09090b] to-transparent" />
    </section>
  );
}
