"use client";

import { useState } from "react";
import { SITE_CONTENT } from "@/data/content";
import { Button } from "@/components/ui/Button";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { logo, links, ctaButton } = SITE_CONTENT.navigation;

  return (
    <header className="sticky top-0 z-50 bg-[#050A10]/90 backdrop-blur-md border-b border-slate-800/80">
      <Container className="h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="font-extrabold text-sm sm:text-base tracking-wider uppercase leading-tight">
          <span className="text-slate-100">{logo.first}</span>{" "}
          <span className="block text-cyan-400">{logo.second}</span>
        </a>

        {/* Desktop Anchor Links */}
        <nav className="hidden md:flex items-center gap-8 font-mono text-xs text-slate-400">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-slate-100 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button href="#" className="px-5 py-2.5">
            {ctaButton}
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-slate-400 hover:text-slate-100 p-2"
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </Container>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#070D14] border-b border-slate-800 px-6 py-6 space-y-4">
          <nav className="flex flex-col gap-4 font-mono text-sm text-slate-300">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-cyan-400"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2">
            <Button
              href="#" //"/Zaprogramuj swoją ewolucję - Igor Kiełbowski.pdf"
              className="w-full py-3"
            >
              {ctaButton}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}