import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { SystemPillars } from "@/components/sections/SystemPillars";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050A10] text-slate-100">
      <Navbar />
      <Hero />
      <SystemPillars />
    </main>
  );
}