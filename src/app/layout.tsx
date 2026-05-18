import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Providers } from "@/components/providers";
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
  title: "Flávio Goncalves — Software Engineer Student · 42 Luanda",
  description:
    "Portfolio de Flávio Goncalves — Software Engineer Student na 42 Luanda. 1,300+ horas de projetos hands-on, Common Core completo, fase avançada do currículo.",
  keywords: [
    "Flávio Goncalves",
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
    icon: "/avatar.png",
  },
  openGraph: {
    title: "Flávio Goncalves — Software Engineer Student · 42 Luanda",
    description:
      "Software Engineer Student na 42 Luanda. 1,300+ horas de projetos, Common Core completo, fase avançada.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flávio Goncalves — Software Engineer Student · 42 Luanda",
    description:
      "Software Engineer Student na 42 Luanda. 1,300+ horas de projetos, Common Core completo, fase avançada.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
