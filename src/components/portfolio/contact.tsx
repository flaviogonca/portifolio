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
import { useLanguage } from "@/lib/i18n/language-provider";

export function ContactSection() {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: Phone,
      label: t.contact.phone,
      value: "(+244) 930 177 216",
      href: "tel:+244930177216",
    },
    {
      icon: Mail,
      label: t.contact.email,
      value: "fmalungo@student.42luanda.com",
      href: "mailto:fmalungo@student.42luanda.com",
    },
    {
      icon: MapPin,
      label: t.contact.location,
      value: "Talatona, Luanda, Angola",
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/fl%C3%A1vio-gon%C3%A7alves-006637389/",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/flaviogonca",
    },
  ];

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
      // For static export deployment, direct contact form submission is not available
      // Users should contact via email or other contact methods
      setError(
        "Contact form submission is not available. Please reach out via email or social media."
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <SectionWrapper id="contact" className="relative">
      <div className="absolute inset-0 dark:bg-gradient-to-b dark:from-[#09090b] dark:via-zinc-950/30 dark:to-[#09090b] bg-gradient-to-b from-white via-zinc-50/30 to-white" />

      <div className="relative z-10">
        <SectionHeader
          label={t.contact.label}
          title={t.contact.title}
          description={t.contact.description}
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
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="glass-card rounded-xl p-4 flex items-center gap-4 group dark:hover:bg-white/[0.06] hover:bg-zinc-900/[0.04] transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg dark:bg-zinc-800/80 bg-zinc-100/80 flex items-center justify-center group-hover:dark:bg-zinc-700/80 group-hover:bg-zinc-200/80 transition-colors">
                    <item.icon
                      size={16}
                      className="dark:text-zinc-400 text-zinc-500 group-hover:dark:text-white group-hover:text-zinc-900 transition-colors"
                    />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono dark:text-zinc-600 text-zinc-400 uppercase tracking-wider">
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm dark:text-zinc-300 text-zinc-600 hover:dark:text-white hover:text-zinc-900 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-sm dark:text-zinc-300 text-zinc-600">{item.value}</span>
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
                  className="glass-card w-11 h-11 rounded-xl flex items-center justify-center dark:hover:bg-white/[0.08] hover:bg-zinc-900/[0.06] transition-all duration-300 group"
                  aria-label={link.label}
                >
                  <link.icon
                    size={18}
                    className="dark:text-zinc-500 text-zinc-400 group-hover:dark:text-white group-hover:text-zinc-900 transition-colors"
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
                  <label className="text-[10px] font-mono dark:text-zinc-600 text-zinc-400 uppercase tracking-wider block mb-2">
                    {t.contact.formName}
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    className="w-full px-4 py-2.5 text-sm dark:bg-zinc-900/60 bg-white/80 dark:border-zinc-800 border-zinc-200 border rounded-lg dark:text-zinc-200 text-zinc-800 dark:placeholder:text-zinc-700 placeholder:text-zinc-400 focus:outline-none dark:focus:border-zinc-600 focus:border-zinc-400 dark:focus:ring-1 dark:focus:ring-zinc-600 focus:ring-1 focus:ring-zinc-400 transition-all"
                    placeholder={t.contact.formNamePlaceholder}
                  />
                </div>
                <div>
                  <label className="text-[10px] font-mono dark:text-zinc-600 text-zinc-400 uppercase tracking-wider block mb-2">
                    {t.contact.formEmail}
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    className="w-full px-4 py-2.5 text-sm dark:bg-zinc-900/60 bg-white/80 dark:border-zinc-800 border-zinc-200 border rounded-lg dark:text-zinc-200 text-zinc-800 dark:placeholder:text-zinc-700 placeholder:text-zinc-400 focus:outline-none dark:focus:border-zinc-600 focus:border-zinc-400 dark:focus:ring-1 dark:focus:ring-zinc-600 focus:ring-1 focus:ring-zinc-400 transition-all"
                    placeholder={t.contact.formEmailPlaceholder}
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] font-mono dark:text-zinc-600 text-zinc-400 uppercase tracking-wider block mb-2">
                  {t.contact.formSubject}
                </label>
                <input
                  type="text"
                  required
                  value={formState.subject}
                  onChange={(e) =>
                    setFormState({ ...formState, subject: e.target.value })
                  }
                  className="w-full px-4 py-2.5 text-sm dark:bg-zinc-900/60 bg-white/80 dark:border-zinc-800 border-zinc-200 border rounded-lg dark:text-zinc-200 text-zinc-800 dark:placeholder:text-zinc-700 placeholder:text-zinc-400 focus:outline-none dark:focus:border-zinc-600 focus:border-zinc-400 dark:focus:ring-1 dark:focus:ring-zinc-600 focus:ring-1 focus:ring-zinc-400 transition-all"
                  placeholder={t.contact.formSubjectPlaceholder}
                />
              </div>

              <div>
                <label className="text-[10px] font-mono dark:text-zinc-600 text-zinc-400 uppercase tracking-wider block mb-2">
                  {t.contact.formMessage}
                </label>
                <textarea
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  className="w-full px-4 py-2.5 text-sm dark:bg-zinc-900/60 bg-white/80 dark:border-zinc-800 border-zinc-200 border rounded-lg dark:text-zinc-200 text-zinc-800 dark:placeholder:text-zinc-700 placeholder:text-zinc-400 focus:outline-none dark:focus:border-zinc-600 focus:border-zinc-400 dark:focus:ring-1 dark:focus:ring-zinc-600 focus:ring-1 focus:ring-zinc-400 transition-all resize-none"
                  placeholder={t.contact.formMessagePlaceholder}
                />
              </div>

              <div className="flex items-center justify-between gap-4">
                {sent && (
                  <span className="text-sm text-emerald-500 font-medium">
                    {t.contact.successMessage}
                  </span>
                )}
                {error && (
                  <span className="text-sm text-red-500 font-medium">
                    {error}
                  </span>
                )}
                {!sent && !error && <span />}

                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex items-center gap-2 px-6 py-2.5 dark:bg-white bg-zinc-900 dark:text-zinc-900 text-white font-medium text-sm rounded-lg dark:hover:bg-zinc-200 hover:bg-zinc-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {sending ? (
                    <Loader2 size={16} className="animate-spin" />
                  ) : (
                    <Send size={16} />
                  )}
                  {t.contact.formSend}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
