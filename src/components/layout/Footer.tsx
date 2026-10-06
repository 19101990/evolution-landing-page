"use client";

import { useState } from "react";
import { SITE_CONTENT } from "@/data/content";
import { Container } from "@/components/ui/Container";
import { PrivacyModal } from "@/components/ui/PrivacyModal";
import { ContactModal } from "@/components/ui/ContactModal";

export function Footer() {
  const { footer } = SITE_CONTENT;
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <footer className="relative bg-[#050A10] border-t border-slate-900 py-8 sm:py-10 text-xs">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            
            {/* Left: Brand & Author */}
            <div className="flex flex-col items-center sm:items-start gap-1">
              <span className="font-mono text-sm font-black tracking-wider text-white select-none font-display">
                {footer.brand.title}{" "}
                <span className="text-cyan-400 drop-shadow-[0_0_12px_rgba(34,211,238,0.4)]">
                  {footer.brand.highlight}
                </span>
              </span>
              <span className="text-[11px] text-slate-500 font-medium">
                {footer.brand.author}
              </span>
            </div>

            {/* Right: Copyright & Modal Triggers */}
            <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-6 gap-y-2 text-slate-400 text-[11px] sm:text-xs">
              <span>{footer.copyright}</span>
              
              <button
                type="button"
                onClick={() => setIsContactOpen(true)}
                className="hover:text-cyan-400 transition-colors duration-200 cursor-pointer"
              >
                Kontakt
              </button>

              <button
                type="button"
                onClick={() => setIsPrivacyOpen(true)}
                className="hover:text-cyan-400 transition-colors duration-200 cursor-pointer"
              >
                Polityka prywatności
              </button>
            </div>

          </div>
        </Container>
      </footer>

      {/* Modals */}
      <PrivacyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
      />
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </>
  );
}