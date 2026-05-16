"use client";

import { motion } from "framer-motion";
import { SectionWrapper, SectionHeader } from "./section-wrapper";
import { GraduationCap } from "lucide-react";

const education = [
  {
    title: "Engenharia de Software",
    institution: "Escola 42 Luanda",
    period: "2024 - 2026",
    description:
      "Escola de engenharia de software de referência mundial baseada em peer-learning e projetos reais, sem professores nem aulas tradicionais.",
    tags: ["C", "C++", "Unix", "Docker", "Redes", "Desenvolvimento Web"],
  },
  {
    title: "Ensino Médio Técnico de Informática",
    institution: "Instituto Politécnico Industrial Simione Mucune",
    period: "2019 - 2023",
    description:
      "Formação técnica com forte componente prática em programação, TIC, redes e manutenção.",
    tags: ["Programação", "TIC", "Redes", "Manutenção"],
  },
];

export function EducationSection() {
  return (
    <SectionWrapper id="education">
      <SectionHeader
        label="Formação"
        title="Formação Acadêmica"
        description="Percurso acadêmico focado em engenharia de software e formação técnica de excelência."
      />

      <div className="space-y-6 md:space-y-8">
        {education.map((edu, i) => (
          <motion.div
            key={edu.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="glass-card rounded-2xl p-5 md:p-8 group hover:bg-white/[0.06] transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-zinc-800/80 flex items-center justify-center flex-shrink-0 group-hover:bg-zinc-700/80 transition-colors">
                <GraduationCap
                  size={22}
                  className="text-zinc-400 group-hover:text-white transition-colors"
                />
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-white group-hover:gradient-text transition-all">
                      {edu.title}
                    </h3>
                    <p className="text-sm text-zinc-400 mt-0.5">
                      {edu.institution}
                    </p>
                  </div>
                  <span className="text-xs font-mono text-zinc-600 flex-shrink-0">
                    {edu.period}
                  </span>
                </div>

                <p className="text-sm text-zinc-500 leading-relaxed mb-4">
                  {edu.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {edu.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-[11px] font-mono text-zinc-400 bg-zinc-800/60 border border-zinc-700/50 rounded-md hover:bg-zinc-700/60 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
