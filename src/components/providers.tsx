"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { LanguageProvider } from "@/lib/i18n/language-provider";
import { type Language } from "@/lib/i18n/translations";

export function Providers({
  children,
  initialLanguage,
}: {
  children: React.ReactNode;
  initialLanguage: Language;
}) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange={false}
    >
      <LanguageProvider initialLanguage={initialLanguage}>
        {children}
      </LanguageProvider>
    </NextThemesProvider>
  );
}
