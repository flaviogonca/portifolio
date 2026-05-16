"use client";

import { motion } from "framer-motion";
import { SectionWrapper, SectionHeader } from "./section-wrapper";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Send,
  Loader2,
} from "lucide-react";
import { useState, FormEvent } from "react";

const contactInfo = [
  {
    icon: Phone,
    label: "Telefone",
    value: "(+244) 930 177 216",
    href: "tel:+244930177216",
  },
  {
    icon: Mail,
    label: "Email",
    value: "flaviomalungo0@gmail.com",
    href: "mailto:flaviomalungo0@gmail.com",
  },
  {
    icon: MapPin,
    label: "Localização",
    value: "Talatona, Luanda, Angola",
    href: null,
  },
];

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/fl%C3%A1vio-goncalves-software-developer",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/flaviogoncalves",
  },
];

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      if (!res.ok) {
        throw new Error("Erro ao enviar mensagem");
      }

      setSent(true);
      setFormState({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSent(false), 4000);
    } catch {
      setError("Não foi possível enviar a mensagem. Tente novamente.");
    } finally {
      setSending(false);
    }
  };

  return (
    <SectionWrapper id="contact" className="relative">
      {/* Subtle gradient bg */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#09090b] via-zinc-950/30 to-[#09090b]" />

      <div className="relative z-10">
        <SectionHeader
          label="Contato"
          title="Vamos conversar"
          description="Interessado em trabalhar juntos? Entre em contato e vamos discutir como posso contribuir para o seu projeto."
        />

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Contact details */}
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="glass-card rounded-xl p-4 flex items-center gap-4 group hover:bg-white/[0.06] transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-zinc-800/80 flex items-center justify-center group-hover:bg-zinc-700/80 transition-colors">
                    <item.icon
                      size={16}
                      className="text-zinc-400 group-hover:text-white transition-colors"
                    />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-zinc-600 uppercase tracking-wider">
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm text-zinc-300 hover:text-white transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-sm text-zinc-300">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card w-11 h-11 rounded-xl flex items-center justify-center hover:bg-white/[0.08] transition-all duration-300 group"
                  aria-label={link.label}
                >
                  <link.icon
                    size={18}
                    className="text-zinc-500 group-hover:text-white transition-colors"
                  />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card rounded-2xl p-6 md:p-8 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-[10px] font-mono text-zinc-600 uppercase tracking-wider block mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    className="w-full px-4 py-2.5 text-sm bg-zinc-900/60 border border-zinc-800 rounded-lg text-zinc-200 placeholder:text-zinc-700 focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-mono text-zinc-600 uppercase tracking-wider block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    className="w-full px-4 py-2.5 text-sm bg-zinc-900/60 border border-zinc-800 rounded-lg text-zinc-200 placeholder:text-zinc-700 focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] font-mono text-zinc-600 uppercase tracking-wider block mb-2">
                  Assunto
                </label>
                <input
                  type="text"
                  required
                  value={formState.subject}
                  onChange={(e) =>
                    setFormState({ ...formState, subject: e.target.value })
                  }
                  className="w-full px-4 py-2.5 text-sm bg-zinc-900/60 border border-zinc-800 rounded-lg text-zinc-200 placeholder:text-zinc-700 focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all"
                  placeholder="Assunto da mensagem"
                />
              </div>

              <div>
                <label className="text-[10px] font-mono text-zinc-600 uppercase tracking-wider block mb-2">
                  Mensagem
                </label>
                <textarea
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  className="w-full px-4 py-2.5 text-sm bg-zinc-900/60 border border-zinc-800 rounded-lg text-zinc-200 placeholder:text-zinc-700 focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all resize-none"
                  placeholder="Descreva o seu projeto ou ideia..."
                />
              </div>

              <div className="flex items-center justify-between gap-4">
                {sent && (
                  <span className="text-sm text-emerald-400 font-medium">
                    Mensagem enviada com sucesso!
                  </span>
                )}
                {error && (
                  <span className="text-sm text-red-400 font-medium">
                    {error}
                  </span>
                )}
                {!sent && !error && <span />}

                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-zinc-900 font-medium text-sm rounded-lg hover:bg-zinc-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {sending ? (
                    <Loader2 size={16} className="animate-spin" />
                  ) : (
                    <Send size={16} />
                  )}
                  Enviar
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
