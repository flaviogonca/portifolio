import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { cookies } from "next/headers";
import { Providers } from "@/components/providers";
import { LANGUAGE_STORAGE_KEY } from "@/lib/i18n/language-provider";
import type { Language } from "@/lib/i18n/translations";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Flávio Gonçalves — Software Engineer / Backend Developer Student · 42 Luanda",
  description:
    "Portfolio de Flávio Gonçalves — Software Engineer Student na 42 Luanda. 1,300+ horas de projetos hands-on, Common Core completo, fase avançada do currículo.",
  keywords: [
    "Flávio Gonçalves",
    "Software Engineer",
    "42 Luanda",
    "Student",
    "Full-Stack",
    "Portfolio",
    "Luanda",
    "Angola",
  ],
  authors: [{ name: "Flávio Malungo Goncalves" }],
  icons: {
    icon: "/foto.png",
  },
  openGraph: {
    title: "Flávio Gonçalves — Software Engineer Student · 42 Luanda",
    description:
      "Software Engineer Student na 42 Luanda. 1,300+ horas de projetos, Common Core completo, fase avançada.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flávio Gonçalves — Software Engineer Student · 42 Luanda",
    description:
      "Software Engineer Student na 42 Luanda. 1,300+ horas de projetos, Common Core completo, fase avançada.",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let initialLanguage: Language = "pt";
  try {
    const cookieStore = await cookies();
    const savedLanguage = cookieStore.get(LANGUAGE_STORAGE_KEY)?.value;
    if (savedLanguage === "en" || savedLanguage === "pt" || savedLanguage === "fr") {
      initialLanguage = savedLanguage;
    }
  } catch {
    // If cookies can't be read (e.g., in _not-found), use default language
    initialLanguage = "pt";
  }

  return (
    <html lang={initialLanguage} suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <Providers initialLanguage={initialLanguage}>{children}</Providers>
      </body>
    </html>
  );
}
