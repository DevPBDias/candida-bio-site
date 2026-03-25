import type { Metadata } from "next";
import { inter, newYork } from "./fonts";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import FloatingCTA from "@/components/ui/FloatingCTA";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cândida Dias | Comunicação Estratégica & Reputação",
  description:
    "Especialista em comunicação estratégica para lideranças, CEOs e fundadores. Fortalecendo presença, autoridade e legados institucionais.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Cândida Dias | Comunicação Estratégica & Reputação",
    description:
      "Especialista em comunicação estratégica para lideranças, CEOs e fundadores. Fortalecendo presença, autoridade e legados institucionais.",
    url: "https://candidadias.com.br",
    siteName: "Cândida Dias",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cândida Dias | Comunicação Estratégica & Reputação",
    description:
      "Especialista em comunicação estratégica para lideranças, CEOs e fundadores. Fortalecendo presença, autoridade e legados institucionais.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${newYork.variable} antialiased`}>
        {children}
        <FloatingCTA />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
