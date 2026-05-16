"use client";

import { motion } from "framer-motion";
import { SectionWrapper, SectionHeader } from "./section-wrapper";
import { Network, Building2, Users } from "lucide-react";

const highlights = [
  {
    icon: Network,
    title: "Arquitetura Escalável",
    description:
      "Modelagem e evolução de arquiteturas para suportar crescimento de usuários e serviços.",
    gradient: "from-white/20 to-white/5",
  },
  {
    icon: Building2,
    title: "Integração Multi Setor",
    description:
      "Entrega de soluções para saúde, finanças e educação com foco em confiabilidade e segurança.",
    gradient: "from-white/20 to-white/5",
  },
  {
    icon: Users,
    title: "Liderança Técnica",
    description:
      "Gestão de equipe para acelerar entregas com padrão técnico consistente.",
    gradient: "from-white/20 to-white/5",
  },
];

export function HighlightsSection() {
  return (
    <SectionWrapper id="highlights" className="relative">
      {/* Subtle gradient bg */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#09090b] via-zinc-950/30 to-[#09090b]" />

      <div className="relative z-10">
        <SectionHeader
          label="Destaques"
          title="Impacto & Resultados"
          description="Principais áreas de impacto e contribuição ao longo da carreira profissional."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="group relative"
            >
              {/* Glow effect on hover */}
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

              <div className="relative glass-card rounded-2xl p-6 md:p-8 h-full group-hover:bg-white/[0.06] transition-all duration-300">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-zinc-800/80 flex items-center justify-center mb-5 group-hover:bg-zinc-700/80 transition-colors">
                  <item.icon
                    size={22}
                    className="text-zinc-400 group-hover:text-white transition-colors"
                  />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:gradient-text transition-all">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  {item.description}
                </p>

                {/* Decorative line */}
                <div className="mt-5 pt-5 border-t border-white/5">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-px bg-gradient-to-r from-white/30 to-transparent group-hover:from-white/60 transition-all" />
                    <span className="text-[10px] font-mono text-zinc-600 group-hover:text-zinc-500 transition-colors">
                      SAIBA MAIS
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
