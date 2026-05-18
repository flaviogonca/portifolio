"use client";

import { useState, useEffect, useSyncExternalStore } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Globe } from "lucide-react";
import { useTheme } from "next-themes";
import { useLanguage, Language } from "@/lib/i18n/language-provider";
import { languageNames, languageFlags } from "@/lib/i18n/translations";

const languages: Language[] = ["pt", "en", "fr"];

const emptySubscribe = () => () => {};

function useMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const mounted = useMounted();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.home, href: "#hero" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.techStack, href: "#tech-stack" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.education, href: "#education" },
    { label: t.nav.languages, href: "#languages" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass shadow-lg dark:shadow-black/10 shadow-black/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="#hero" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg dark:bg-white/10 bg-zinc-900/10 flex items-center justify-center dark:border-white/10 border-zinc-900/10 group-hover:dark:bg-white/15 group-hover:bg-zinc-900/15 transition-colors">
                <span className="text-sm font-bold dark:text-white text-zinc-900">FG</span>
              </div>
              <span className="text-sm font-medium dark:text-zinc-400 text-zinc-500 group-hover:dark:text-white group-hover:text-zinc-900 transition-colors hidden sm:block">
                flavio.dev
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-3 py-1.5 text-xs font-medium dark:text-zinc-500 text-zinc-500 hover:dark:text-white hover:text-zinc-900 transition-colors rounded-md hover:dark:bg-white/5 hover:bg-zinc-900/5"
                >
                  {link.label}
                </a>
              ))}

              {/* Divider */}
              <div className="w-px h-4 dark:bg-zinc-800 bg-zinc-200 mx-2" />

              {/* Language Switcher */}
              <div className="relative">
                <button
                  onClick={() => setLangOpen(!langOpen)}
                  className="flex items-center gap-1.5 px-2 py-1.5 text-xs font-medium dark:text-zinc-500 text-zinc-500 hover:dark:text-white hover:text-zinc-900 transition-colors rounded-md hover:dark:bg-white/5 hover:bg-zinc-900/5"
                >
                  <Globe size={14} />
                  <span className="uppercase">{language}</span>
                </button>
                <AnimatePresence>
                  {langOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 top-full mt-1 glass rounded-lg overflow-hidden shadow-lg min-w-[140px]"
                    >
                      {languages.map((lang) => (
                        <button
                          key={lang}
                          onClick={() => {
                            setLanguage(lang);
                            setLangOpen(false);
                          }}
                          className={`flex items-center gap-2 w-full px-3 py-2 text-xs font-medium transition-colors ${
                            language === lang
                              ? "dark:bg-white/10 bg-zinc-900/10 dark:text-white text-zinc-900"
                              : "dark:text-zinc-400 text-zinc-500 hover:dark:bg-white/5 hover:bg-zinc-900/5 hover:dark:text-white hover:text-zinc-900"
                          }`}
                        >
                          <span>{languageFlags[lang]}</span>
                          <span>{languageNames[lang]}</span>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Theme Toggle */}
              {mounted && (
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="p-1.5 rounded-md dark:text-zinc-500 text-zinc-500 hover:dark:text-white hover:text-zinc-900 hover:dark:bg-white/5 hover:bg-zinc-900/5 transition-colors"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
                </button>
              )}
            </div>

            {/* Mobile controls */}
            <div className="flex items-center gap-2 lg:hidden">
              {/* Language Switcher Mobile */}
              <div className="relative">
                <button
                  onClick={() => setLangOpen(!langOpen)}
                  className="p-2 dark:text-zinc-400 text-zinc-500 hover:dark:text-white hover:text-zinc-900 transition-colors"
                  aria-label="Change language"
                >
                  <Globe size={18} />
                </button>
                <AnimatePresence>
                  {langOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 top-full mt-1 glass rounded-lg overflow-hidden shadow-lg min-w-[140px] z-50"
                    >
                      {languages.map((lang) => (
                        <button
                          key={lang}
                          onClick={() => {
                            setLanguage(lang);
                            setLangOpen(false);
                          }}
                          className={`flex items-center gap-2 w-full px-3 py-2 text-xs font-medium transition-colors ${
                            language === lang
                              ? "dark:bg-white/10 bg-zinc-900/10 dark:text-white text-zinc-900"
                              : "dark:text-zinc-400 text-zinc-500 hover:dark:bg-white/5 hover:bg-zinc-900/5"
                          }`}
                        >
                          <span>{languageFlags[lang]}</span>
                          <span>{languageNames[lang]}</span>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Theme Toggle Mobile */}
              {mounted && (
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="p-2 dark:text-zinc-400 text-zinc-500 hover:dark:text-white hover:text-zinc-900 transition-colors"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                </button>
              )}

              {/* Menu Toggle */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2 dark:text-zinc-400 text-zinc-500 hover:dark:text-white hover:text-zinc-900 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 dark:bg-black/60 bg-black/20 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <div className="absolute top-16 left-0 right-0 glass border-b dark:border-white/5 border-zinc-200/50 p-4 max-h-[calc(100vh-4rem)] overflow-y-auto">
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="px-4 py-3 text-sm font-medium dark:text-zinc-400 text-zinc-500 hover:dark:text-white hover:text-zinc-900 hover:dark:bg-white/5 hover:bg-zinc-900/5 rounded-lg transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
