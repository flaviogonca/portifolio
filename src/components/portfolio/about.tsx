"use client";

import { motion } from "framer-motion";
import { SectionWrapper, SectionHeader } from "./section-wrapper";

const badges = [
  "Backend Engineering",
  "System Design",
  "APIs",
  "Cloud",
  "DevOps",
  "CI/CD",
  "Observabilidade",
  "Arquitetura",
  "Segurança",
  "Liderança Técnica",
];

const highlights = [
  {
    icon: "⚡",
    title: "Visão de Arquitetura",
    description: "Design de sistemas com foco em escalabilidade e manutenibilidade",
  },
  {
    icon: "🔧",
    title: "Execução Prática",
    description: "Implementação hands-on com padrões de engenharia modernos",
  },
  {
    icon: "🤝",
    title: "Colaboração",
    description: "Integração entre áreas para entregar software com impacto real",
  },
  {
    icon: "📊",
    title: "Mensurabilidade",
    description: "Soluções técnicas confiáveis e mensuráveis para o negócio",
  },
];

export function AboutSection() {
  return (
    <SectionWrapper id="about">
      <SectionHeader
        label="Sobre"
        title="Perfil profissional"
      />

      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        {/* Professional Summary */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="glass-card rounded-2xl p-6 md:p-8 h-full">
            <h3 className="text-lg font-semibold text-white mb-4">
              Resumo Profissional
            </h3>
            <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
              Profissional comprometido e inovador, com histórico em sistemas de
              missão crítica e melhoria contínua de operações técnicas. Minha
              abordagem combina visão de arquitetura, execução prática e
              colaboração entre áreas para entregar software com qualidade,
              confiabilidade e impacto real no negócio.
            </p>

            <div className="mt-6 pt-6 border-t border-white/5">
              <h4 className="text-sm font-medium text-zinc-300 mb-3">
                Competências-chave
              </h4>
              <div className="flex flex-wrap gap-2">
                {badges.map((badge, i) => (
                  <motion.span
                    key={badge}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                    className="px-3 py-1.5 text-xs font-medium text-zinc-300 bg-zinc-800/60 border border-zinc-700/50 rounded-lg hover:bg-zinc-700/60 hover:border-zinc-600/50 transition-all cursor-default"
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
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="glass-card rounded-xl p-5 hover:bg-white/[0.06] transition-all duration-300 group"
            >
              <div className="text-2xl mb-3">{item.icon}</div>
              <h4 className="text-sm font-semibold text-white mb-1.5 group-hover:gradient-text transition-all">
                {item.title}
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
