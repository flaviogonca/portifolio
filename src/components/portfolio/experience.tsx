"use client";

import { motion } from "framer-motion";
import { SectionWrapper, SectionHeader } from "./section-wrapper";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Designer de Sistemas",
    company: "Freelancer",
    period: "2026",
    current: true,
    bullets: [
      "Projetei e implementei arquiteturas de sistemas avançadas em um robô de trading Python para mercado financeiro, aumentando 40% da eficiência operacional.",
      "Implementei soluções escaláveis alinhadas aos objetivos de negócio.",
    ],
  },
  {
    title: "Software Developer / Back-End Developer",
    company: "Génesis Technology",
    period: "2023 - 2024",
    current: false,
    bullets: [
      "Desenvolvi projetos para clientes dos setores de saúde, finanças e educação.",
      "Implementei melhorias em design e integração de sistemas elevando desempenho e confiabilidade.",
    ],
  },
  {
    title: "Analista de Projetos de TI",
    company: "Systems Design",
    period: "2022 - 2023",
    current: false,
    bullets: [
      "Apoiei projetos de implementação de sistemas para clientes de pequeno e médio porte.",
      "Colaborei na documentação técnica e especificações funcionais.",
    ],
  },
];

export function ExperienceSection() {
  return (
    <SectionWrapper id="experience">
      <SectionHeader
        label="Carreira"
        title="Experiência Profissional"
        description="Trajetória profissional focada em engenharia de software, arquitetura de sistemas e entrega de soluções de alto impacto."
      />

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-zinc-700 via-zinc-800 to-transparent" />

        <div className="space-y-8 md:space-y-10">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="relative pl-12 md:pl-20"
            >
              {/* Timeline dot */}
              <div className="absolute left-2.5 md:left-6.5 top-6">
                <div
                  className={`w-3 h-3 rounded-full border-2 ${
                    exp.current
                      ? "bg-white border-white shadow-[0_0_12px_rgba(255,255,255,0.3)]"
                      : "bg-zinc-800 border-zinc-600"
                  }`}
                />
              </div>

              {/* Card */}
              <div className="glass-card rounded-2xl p-5 md:p-6 group hover:bg-white/[0.06] transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-white group-hover:gradient-text transition-all">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <Briefcase size={13} className="text-zinc-500" />
                      <span className="text-sm text-zinc-400">{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {exp.current && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[10px] font-mono font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                        <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
                        Atual
                      </span>
                    )}
                    <span className="text-xs font-mono text-zinc-600">
                      {exp.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2">
                  {exp.bullets.map((bullet, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2.5 text-sm text-zinc-400 leading-relaxed"
                    >
                      <span className="mt-2 w-1 h-1 rounded-full bg-zinc-600 flex-shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
