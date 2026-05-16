"use client";

import { ArrowUp } from "lucide-react";

const quickLinks = [
  { label: "Sobre", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experiência", href: "#experience" },
  { label: "Contato", href: "#contact" },
];

const techStack = ["Next.js", "TypeScript", "Node.js", "Python", "Docker", "PostgreSQL"];

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-[#09090b]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-white/10 flex items-center justify-center border border-white/10">
                <span className="text-[10px] font-bold text-white">FG</span>
              </div>
              <span className="text-sm font-medium text-zinc-400">
                Flávio Goncalves
              </span>
            </div>
            <p className="text-xs text-zinc-600">
              Software Engineer & Back-End Developer
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex items-center gap-4">
            {quickLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs text-zinc-600 hover:text-zinc-300 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Back to top */}
          <a
            href="#hero"
            className="w-9 h-9 rounded-lg bg-zinc-800/60 border border-zinc-700/50 flex items-center justify-center hover:bg-zinc-700/60 transition-colors group"
            aria-label="Voltar ao topo"
          >
            <ArrowUp
              size={14}
              className="text-zinc-500 group-hover:text-white transition-colors"
            />
          </a>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-zinc-700">
            © {new Date().getFullYear()} Flávio Goncalves. Todos os direitos
            reservados.
          </p>
          <div className="flex items-center gap-2 flex-wrap justify-center">
            {techStack.map((tech, i) => (
              <span key={tech} className="flex items-center gap-2">
                <span className="text-[10px] font-mono text-zinc-700">
                  {tech}
                </span>
                {i < techStack.length - 1 && (
                  <span className="text-zinc-800">·</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
