import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Bungee } from "next/font/google";
import "./globals.css";

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const display = Bungee({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PORTA — Casa de shows",
  description:
    "PORTA. Casa de shows e noite. Programação, residentes, convidados. Ingressos no Shotgun.",
  openGraph: { title: "PORTA", description: "Casa de shows e noite.", type: "website" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${sans.variable} ${mono.variable} ${display.variable}`}>
      <body className="bg-blue text-bone">{children}</body>
    </html>
  );
}
