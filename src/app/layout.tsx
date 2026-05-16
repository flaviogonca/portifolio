import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
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
  title: "Flávio Goncalves — Software Engineer & Back-End Developer",
  description:
    "Portfolio de Flávio Goncalves — Software Developer com 3+ anos de experiência em sistemas robustos, arquitetura backend e soluções escaláveis.",
  keywords: [
    "Flávio Goncalves",
    "Software Engineer",
    "Back-End Developer",
    "System Design",
    "Portfolio",
    "Luanda",
    "Angola",
  ],
  authors: [{ name: "Flávio Malungo Goncalves" }],
  icons: {
    icon: "/avatar.png",
  },
  openGraph: {
    title: "Flávio Goncalves — Software Engineer",
    description:
      "Construindo sistemas robustos para produtos que precisam escalar.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flávio Goncalves — Software Engineer",
    description:
      "Construindo sistemas robustos para produtos que precisam escalar.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-[#09090b] text-zinc-100`}
      >
        {children}
      </body>
    </html>
  );
}
