"use client";

import { motion } from "framer-motion";
import { SectionWrapper, SectionHeader } from "./section-wrapper";
import {
  Server,
  Code2,
  Globe,
  GitBranch,
  Cloud,
  Container,
  Activity,
  Shield,
  TestTube,
  FileCheck,
  Cpu,
  Layers,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-provider";

function SkillCard({
  name,
  icon: Icon,
  level,
  delay,
}: {
  name: string;
  icon: React.ElementType;
  level: number;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4 }}
      className="glass-card rounded-xl p-4 group dark:hover:bg-white/[0.06] hover:bg-zinc-900/[0.04] transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="w-8 h-8 rounded-lg dark:bg-zinc-800/80 bg-zinc-100/80 flex items-center justify-center group-hover:dark:bg-zinc-700/80 group-hover:bg-zinc-200/80 transition-colors">
          <Icon size={14} className="dark:text-zinc-400 text-zinc-500 group-hover:dark:text-white group-hover:text-zinc-900 transition-colors" />
        </div>
        <span className="text-sm font-medium dark:text-zinc-300 text-zinc-700 group-hover:dark:text-white group-hover:text-zinc-900 transition-colors">
          {name}
        </span>
      </div>
      <div className="relative h-1 dark:bg-zinc-800 bg-zinc-200 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.3, duration: 0.8, ease: "easeOut" }}
          className="absolute left-0 top-0 h-full dark:bg-gradient-to-r dark:from-zinc-400 dark:to-white bg-gradient-to-r from-zinc-400 to-zinc-900 rounded-full"
        />
      </div>
      <div className="flex justify-end mt-1.5">
        <span className="text-[10px] font-mono dark:text-zinc-600 text-zinc-400">{level}%</span>
      </div>
    </motion.div>
  );
}

function LanguageCard({
  name,
  level,
  delay,
}: {
  name: string;
  level: number;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4 }}
      className="glass-card rounded-xl p-4 group dark:hover:bg-white/[0.06] hover:bg-zinc-900/[0.04] transition-all duration-300"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <Code2 size={16} className="dark:text-zinc-400 text-zinc-500 group-hover:dark:text-white group-hover:text-zinc-900 transition-colors" />
          <span className="text-sm font-medium dark:text-zinc-300 text-zinc-700 group-hover:dark:text-white group-hover:text-zinc-900 transition-colors">
            {name}
          </span>
        </div>
        <span className="text-xs font-mono dark:text-zinc-600 text-zinc-400">{level}%</span>
      </div>
      <div className="relative h-1.5 dark:bg-zinc-800 bg-zinc-200 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.3, duration: 0.8, ease: "easeOut" }}
          className="absolute left-0 top-0 h-full dark:bg-gradient-to-r dark:from-zinc-400 dark:to-white bg-gradient-to-r from-zinc-400 to-zinc-900 rounded-full"
        />
      </div>
    </motion.div>
  );
}

export function SkillsSection() {
  const { t } = useLanguage();

  const coreSkills = [
    { name: t.skills.sysDesign, icon: Layers, level: 90 },
    { name: t.skills.backend, icon: Server, level: 92 },
    { name: t.skills.apisRest, icon: Globe, level: 88 },
    { name: t.skills.architecture, icon: Cpu, level: 85 },
    { name: t.skills.integration, icon: GitBranch, level: 87 },
    { name: t.skills.cloud, icon: Cloud, level: 80 },
    { name: t.skills.devops, icon: Container, level: 78 },
    { name: t.skills.cicd, icon: GitBranch, level: 82 },
    { name: t.skills.observability, icon: Activity, level: 76 },
    { name: t.skills.security, icon: Shield, level: 75 },
    { name: t.skills.testing, icon: TestTube, level: 80 },
    { name: t.skills.governance, icon: FileCheck, level: 74 },
  ];

  const languages = [
    { name: "JavaScript", level: 88 },
    { name: "Python", level: 90 },
    { name: "SQL", level: 85 },
  ];

  const competencies = [
    t.skills.compScalable,
    t.skills.compLead,
    t.skills.compIntegration,
    t.skills.compDocs,
    t.skills.compMonitoring,
    t.skills.compPerformance,
    t.skills.compReliability,
  ];

  return (
    <SectionWrapper id="skills" className="relative">
      <div className="absolute inset-0 dark:bg-gradient-to-b dark:from-[#09090b] dark:via-zinc-950/50 dark:to-[#09090b] bg-gradient-to-b from-white via-zinc-50/50 to-white" />

      <div className="relative z-10">
        <SectionHeader
          label={t.skills.label}
          title={t.skills.title}
          description={t.skills.description}
        />

        {/* Core Skills */}
        <div className="mb-12">
          <h3 className="text-sm font-mono tracking-wider dark:text-zinc-500 text-zinc-400 uppercase mb-6">
            {t.skills.core}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {coreSkills.map((skill, i) => (
              <SkillCard key={i} {...skill} delay={i * 0.05} />
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Languages */}
          <div>
            <h3 className="text-sm font-mono tracking-wider dark:text-zinc-500 text-zinc-400 uppercase mb-6">
              {t.skills.languages}
            </h3>
            <div className="space-y-3">
              {languages.map((lang, i) => (
                <LanguageCard key={lang.name} {...lang} delay={i * 0.1} />
              ))}
            </div>
          </div>

          {/* Competencies */}
          <div>
            <h3 className="text-sm font-mono tracking-wider dark:text-zinc-500 text-zinc-400 uppercase mb-6">
              {t.skills.competencies}
            </h3>
            <div className="space-y-2">
              {competencies.map((comp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.3 }}
                  className="glass-card rounded-lg p-3 flex items-center gap-3 group dark:hover:bg-white/[0.06] hover:bg-zinc-900/[0.04] transition-all duration-300"
                >
                  <div className="w-1.5 h-1.5 rounded-full dark:bg-white/30 bg-zinc-400/50 group-hover:dark:bg-white group-hover:bg-zinc-900 transition-colors" />
                  <span className="text-sm dark:text-zinc-400 text-zinc-500 group-hover:dark:text-zinc-200 group-hover:text-zinc-700 transition-colors">
                    {comp}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
