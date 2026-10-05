"use client";

import { useState, useEffect } from "react";
import { X, Mail, Copy, Check, Send } from "lucide-react";
import { SITE_CONTENT } from "@/data/content";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const { contactModal } = SITE_CONTENT;
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(contactModal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${contactModal.email}`;
    }
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
    >
      <div
        aria-hidden="true"
        onClick={onClose}
        className="fixed inset-0 bg-[#050A10]/85 backdrop-blur-md transition-opacity"
      />

      <div className="relative z-10 w-full max-w-xl rounded-2xl border border-slate-800 bg-[#070D16] shadow-2xl shadow-cyan-950/20 overflow-hidden">
        
        <div
          aria-hidden="true"
          className="absolute -top-16 left-1/2 -translate-x-1/2 w-80 h-32 bg-cyan-500/10 rounded-full blur-[70px] pointer-events-none"
        />

        <div className="relative flex items-center justify-between px-6 sm:px-8 py-5 border-b border-slate-800/80">
          <h2
            id="contact-modal-title"
            className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white"
          >
            {contactModal.title.regular}{" "}
            <span className="text-cyan-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.5)]">
              {contactModal.title.highlight}
            </span>
          </h2>

          <button
            onClick={onClose}
            aria-label="Zamknij okno kontaktu"
            className="p-2 -mr-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors"
          >
            <X className="w-5 h-5 stroke-[2]" />
          </button>
        </div>

        <div className="px-6 sm:px-8 py-6 space-y-6 relative z-10">
          
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {contactModal.intro}
          </p>

    
          <div className="p-4 sm:p-5 rounded-xl border border-slate-800 bg-[#04080E] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3.5 min-w-0">
              <div className="w-11 h-11 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <span className="block font-mono text-[10px] uppercase tracking-wider text-slate-500 font-semibold">
                  Bezpośredni e-mail
                </span>
                <span className="font-mono text-xs sm:text-sm text-slate-200 truncate block">
                  {contactModal.email}
                </span>
              </div>
            </div>

            <button
              onClick={handleCopy}
              className="hidden sm:inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#0E1A29] border border-cyan-500/40 hover:bg-cyan-500/10 hover:border-cyan-400 text-cyan-400 text-xs font-bold font-mono tracking-wider transition-all shrink-0 cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">SKOPIOWANO!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>KOPIUJ ADRES</span>
                </>
              )}
            </button>

            <a
              href={`mailto:${contactModal.email}`}
              className="sm:hidden flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-[#0E1A29] border border-cyan-500/40 active:bg-cyan-500/20 text-cyan-400 text-xs font-bold font-mono tracking-wider transition-colors"
            >
              <Send className="w-4 h-4" />
              <span>NAPISZ WIADOMOŚĆ</span>
            </a>
          </div>

          <div className="pt-1">
            <span className="block font-mono text-[11px] uppercase tracking-wider text-slate-400 font-semibold mb-3">
              Social Media
            </span>

            <div className="grid grid-cols-2 gap-4">

              <a
                href={contactModal.socials.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="group flex flex-col items-center justify-center py-5 px-4 rounded-xl border border-slate-800 bg-[#04080E] hover:border-cyan-500/50 hover:bg-cyan-500/5 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-slate-400 group-hover:text-cyan-400 group-hover:scale-110 transition-all duration-300">
                  <svg
                    className="w-8 h-8 fill-none stroke-current stroke-[1.8]"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </div>
                <span className="font-mono text-xs font-bold text-slate-300 group-hover:text-cyan-400 tracking-wider mt-2">
                  INSTAGRAM
                </span>
                <span className="text-[11px] text-slate-500 group-hover:text-slate-400 transition-colors">
                  {contactModal.socials.instagram.handle}
                </span>
              </a>

              <a
                href={contactModal.socials.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="group flex flex-col items-center justify-center py-5 px-4 rounded-xl border border-slate-800 bg-[#04080E] hover:border-cyan-500/50 hover:bg-cyan-500/5 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-slate-400 group-hover:text-cyan-400 group-hover:scale-110 transition-all duration-300">
                  <svg
                    className="w-8 h-8 fill-none stroke-current stroke-[1.8]"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </div>
                <span className="font-mono text-xs font-bold text-slate-300 group-hover:text-cyan-400 tracking-wider mt-2">
                  FACEBOOK
                </span>
                <span className="text-[11px] text-slate-500 group-hover:text-slate-400 transition-colors">
                  {contactModal.socials.facebook.handle}
                </span>
              </a>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}