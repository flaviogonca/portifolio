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

const coreSkills = [
  { name: "System Design", icon: Layers, level: 90 },
  { name: "Backend", icon: Server, level: 92 },
  { name: "APIs REST", icon: Globe, level: 88 },
  { name: "Arquitetura", icon: Cpu, level: 85 },
  { name: "Integração", icon: GitBranch, level: 87 },
  { name: "Cloud", icon: Cloud, level: 80 },
  { name: "DevOps", icon: Container, level: 78 },
  { name: "CI/CD", icon: GitBranch, level: 82 },
  { name: "Observabilidade", icon: Activity, level: 76 },
  { name: "Segurança", icon: Shield, level: 75 },
  { name: "Testing", icon: TestTube, level: 80 },
  { name: "Governança", icon: FileCheck, level: 74 },
];

const languages = [
  { name: "JavaScript", level: 88 },
  { name: "Python", level: 90 },
  { name: "SQL", level: 85 },
];

const competencies = [
  "Planejamento de soluções escaláveis",
  "Liderança técnica",
  "Integração de sistemas",
  "Documentação técnica",
  "Monitoramento",
  "Performance",
  "Confiabilidade",
];

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
      className="glass-card rounded-xl p-4 group hover:bg-white/[0.06] transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="w-8 h-8 rounded-lg bg-zinc-800/80 flex items-center justify-center group-hover:bg-zinc-700/80 transition-colors">
          <Icon size={14} className="text-zinc-400 group-hover:text-white transition-colors" />
        </div>
        <span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors">
          {name}
        </span>
      </div>
      <div className="relative h-1 bg-zinc-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.3, duration: 0.8, ease: "easeOut" }}
          className="absolute left-0 top-0 h-full bg-gradient-to-r from-zinc-400 to-white rounded-full"
        />
      </div>
      <div className="flex justify-end mt-1.5">
        <span className="text-[10px] font-mono text-zinc-600">{level}%</span>
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
      className="glass-card rounded-xl p-4 group hover:bg-white/[0.06] transition-all duration-300"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <Code2 size={16} className="text-zinc-400 group-hover:text-white transition-colors" />
          <span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors">
            {name}
          </span>
        </div>
        <span className="text-xs font-mono text-zinc-600">{level}%</span>
      </div>
      <div className="relative h-1.5 bg-zinc-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.3, duration: 0.8, ease: "easeOut" }}
          className="absolute left-0 top-0 h-full bg-gradient-to-r from-zinc-400 to-white rounded-full"
        />
      </div>
    </motion.div>
  );
}

export function SkillsSection() {
  return (
    <SectionWrapper id="skills" className="relative">
      {/* Subtle gradient bg */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#09090b] via-zinc-950/50 to-[#09090b]" />

      <div className="relative z-10">
        <SectionHeader
          label="Competências"
          title="Skills & Tecnologias"
          description="Mapa de competências técnicas e ferramentas que utilizo para construir sistemas robustos e escaláveis."
        />

        {/* Core Skills */}
        <div className="mb-12">
          <h3 className="text-sm font-mono tracking-wider text-zinc-500 uppercase mb-6">
            Core
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {coreSkills.map((skill, i) => (
              <SkillCard
                key={skill.name}
                {...skill}
                delay={i * 0.05}
              />
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Languages */}
          <div>
            <h3 className="text-sm font-mono tracking-wider text-zinc-500 uppercase mb-6">
              Linguagens
            </h3>
            <div className="space-y-3">
              {languages.map((lang, i) => (
                <LanguageCard
                  key={lang.name}
                  {...lang}
                  delay={i * 0.1}
                />
              ))}
            </div>
          </div>

          {/* Competencies */}
          <div>
            <h3 className="text-sm font-mono tracking-wider text-zinc-500 uppercase mb-6">
              Competências
            </h3>
            <div className="space-y-2">
              {competencies.map((comp, i) => (
                <motion.div
                  key={comp}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.3 }}
                  className="glass-card rounded-lg p-3 flex items-center gap-3 group hover:bg-white/[0.06] transition-all duration-300"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-white/30 group-hover:bg-white transition-colors" />
                  <span className="text-sm text-zinc-400 group-hover:text-zinc-200 transition-colors">
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
