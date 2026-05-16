"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export function SectionWrapper({ id, children, className = "" }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`relative py-20 md:py-28 ${className}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}

export function SectionHeader({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="mb-12 md:mb-16"
    >
      <span className="inline-block text-xs font-mono tracking-widest dark:text-zinc-500 text-zinc-400 uppercase mb-3">
        {label}
      </span>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight gradient-text mb-4">
        {title}
      </h2>
      {description && (
        <p className="dark:text-zinc-500 text-zinc-500 max-w-2xl text-base md:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
