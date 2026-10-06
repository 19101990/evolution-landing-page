import type { Metadata } from "next";
import "./globals.css";
import { Inter, Oxanium } from "next/font/google";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const oxanium = Oxanium({
  subsets: ["latin", "latin-ext"],
  variable: "--font-oxanium",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zaprogramuj Swoją Ewolucję | Igor Kiełbowski",
  description: "Świadomy system rozwoju człowieka. Praktyczne połączenie wiedzy o ciele, psychice i środowisku w jeden spójny system.",
  openGraph: {
    title: "Zaprogramuj Swoją Ewolucję | Igor Kiełbowski",
    description: "Pobierz darmową książkę o świadomej regulacji i adaptacji człowieka.",
    url: "https://zaprogramujswojaewolucje.pl",
    siteName: "Zaprogramuj Swoją Ewolucję",
    locale: "pl_PL",
    type: "website",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className="scroll-smooth scroll-pt-[70px]">
      <body className={`${inter.variable} ${oxanium.variable} bg-[#050A10] text-slate-100 font-sans antialiased selection:bg-cyan-500 selection:text-black`}>
        {children}
      </body>
    </html>
  );
}