"use client";

import { motion } from "framer-motion";
import { SectionWrapper, SectionHeader } from "./section-wrapper";
import { Folder, ExternalLink, CheckCircle, Star } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-provider";

interface ProjectData {
  name: string;
  description: string;
  tech: string[];
  grade: string;
}

const containerVariants: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: any = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function ProjectsSection() {
  const { t } = useLanguage();

  const projects: ProjectData[] = t.projects.projects;

  return (
    <SectionWrapper id="projects" className="relative">
      <div className="absolute inset-0 dark:bg-gradient-to-b dark:from-[#09090b] dark:via-zinc-950/30 dark:to-[#09090b] bg-gradient-to-b from-white via-zinc-50/30 to-white" />

      <div className="relative z-10">
        <SectionHeader
          label={t.projects.label}
          title={t.projects.title}
          description={t.projects.description}
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
        >
          {projects.map((project, i) => {
            const isFeatured = project.name === "ft_transcendence";

            return (
              <motion.div
                key={i}
                variants={cardVariants}
                className="group relative"
              >
                {/* Glow effect on hover */}
                <div
                  className={`absolute -inset-px rounded-2xl dark:bg-gradient-to-b bg-gradient-to-b dark:from-white/10 from-zinc-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm ${
                    isFeatured ? "dark:from-emerald-500/10 from-emerald-500/5" : ""
                  }`}
                />

                <div
                  className={`relative glass-card rounded-2xl p-5 md:p-6 h-full dark:hover:bg-white/[0.06] hover:bg-zinc-900/[0.04] transition-all duration-300 flex flex-col ${
                    isFeatured
                      ? "dark:border-emerald-500/20 border-emerald-500/15"
                      : ""
                  }`}
                >
                  {/* Header row */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg dark:bg-zinc-800/80 bg-zinc-100/80 flex items-center justify-center group-hover:dark:bg-zinc-700/80 group-hover:bg-zinc-200/80 transition-colors">
                      {isFeatured ? (
                        <Star
                          size={18}
                          className="dark:text-emerald-400 text-emerald-500 group-hover:dark:text-emerald-300 group-hover:text-emerald-400 transition-colors"
                        />
                      ) : (
                        <Folder
                          size={18}
                          className="dark:text-zinc-400 text-zinc-500 group-hover:dark:text-white group-hover:text-zinc-900 transition-colors"
                        />
                      )}
                    </div>

                    {/* Featured badge */}
                    {isFeatured && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-mono font-medium dark:text-emerald-400 text-emerald-600 dark:bg-emerald-500/10 bg-emerald-50 dark:border-emerald-500/20 border-emerald-200 border rounded-full">
                        <Star size={10} />
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Project name */}
                  <h3 className="text-base font-semibold dark:text-white text-zinc-900 mb-1.5 group-hover:gradient-text transition-all font-mono tracking-tight">
                    {project.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm dark:text-zinc-400 text-zinc-500 leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tech stack badges */}
                  <div className="mb-4">
                    <span className="text-[10px] font-mono dark:text-zinc-600 text-zinc-400 uppercase tracking-wider mb-2 block">
                      {t.projects.techLabel}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-[11px] font-mono dark:text-zinc-400 text-zinc-500 dark:bg-zinc-800/60 bg-zinc-100/80 dark:border-zinc-700/50 border-zinc-200/80 border rounded-md dark:hover:bg-zinc-700/60 hover:bg-zinc-200/80 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Grade & footer */}
                  <div className="pt-4 dark:border-white/5 border-zinc-200/50 border-t flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono dark:text-zinc-600 text-zinc-400 uppercase tracking-wider">
                        {t.projects.gradeLabel}
                      </span>
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[11px] font-mono font-medium dark:text-emerald-400 text-emerald-600 dark:bg-emerald-500/10 bg-emerald-50 dark:border-emerald-500/20 border-emerald-200/60 border rounded-md">
                        <CheckCircle size={11} className="dark:text-emerald-400 text-emerald-500" />
                        {project.grade}
                      </span>
                    </div>

                    <ExternalLink
                      size={14}
                      className="dark:text-zinc-600 text-zinc-400 group-hover:dark:text-zinc-400 group-hover:text-zinc-600 transition-colors opacity-0 group-hover:opacity-100"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* View more link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-10 flex justify-center"
        >
          <span className="inline-flex items-center gap-2 text-xs font-mono dark:text-zinc-600 text-zinc-400 dark:hover:text-zinc-400 hover:text-zinc-600 transition-colors cursor-default">
            <ExternalLink size={12} />
            {t.projects.viewMore}
          </span>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
