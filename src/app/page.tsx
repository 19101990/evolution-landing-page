import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { SystemPillars } from "@/components/sections/SystemPillars";
import { AuthorBio } from "@/components/sections/AuthorBio";
import { SupportSection } from "@/components/sections/SupportSection";
import { FinalCta } from "@/components/sections/FinalCta";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050A10] text-slate-100">
      <Navbar />
      <Hero />
      <SystemPillars />
      <AuthorBio />
      <SupportSection />
      <FinalCta />
      <Footer />
    </main>
  );
}