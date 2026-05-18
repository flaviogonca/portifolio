"use client";

import { ArrowUp } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-provider";

const techStack = ["C", "TypeScript", "Node.js", "Python", "Docker", "PostgreSQL"];

export function Footer() {
  const { t } = useLanguage();

  const quickLinks = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.techStack, href: "#tech-stack" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <footer className="relative dark:border-white/5 border-zinc-200/50 border-t dark:bg-[#09090b] bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md dark:bg-white/10 bg-zinc-900/10 flex items-center justify-center dark:border-white/10 border-zinc-900/10 border">
                <span className="text-[10px] font-bold dark:text-white text-zinc-900">FG</span>
              </div>
              <span className="text-sm font-medium dark:text-zinc-400 text-zinc-500">
                Flávio Goncalves
              </span>
            </div>
            <p className="text-xs dark:text-zinc-600 text-zinc-400">
              {t.footer.role}
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex items-center gap-4">
            {quickLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs dark:text-zinc-600 text-zinc-400 hover:dark:text-zinc-300 hover:text-zinc-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Back to top */}
          <a
            href="#hero"
            className="w-9 h-9 rounded-lg dark:bg-zinc-800/60 bg-zinc-100/80 dark:border-zinc-700/50 border-zinc-200/80 border flex items-center justify-center dark:hover:bg-zinc-700/60 hover:bg-zinc-200/80 transition-colors group"
            aria-label={t.footer.backToTop}
          >
            <ArrowUp
              size={14}
              className="dark:text-zinc-500 text-zinc-400 group-hover:dark:text-white group-hover:text-zinc-900 transition-colors"
            />
          </a>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 dark:border-white/5 border-zinc-200/50 border-t flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs dark:text-zinc-700 text-zinc-400">
            © {new Date().getFullYear()} Flávio Goncalves. {t.footer.copyright}
          </p>
          <div className="flex items-center gap-2 flex-wrap justify-center">
            {techStack.map((tech, i) => (
              <span key={tech} className="flex items-center gap-2">
                <span className="text-[10px] font-mono dark:text-zinc-700 text-zinc-400">
                  {tech}
                </span>
                {i < techStack.length - 1 && (
                  <span className="dark:text-zinc-800 text-zinc-300">·</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
