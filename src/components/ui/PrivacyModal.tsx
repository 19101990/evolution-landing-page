"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import { SITE_CONTENT } from "@/data/content";

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PrivacyModal({ isOpen, onClose }: PrivacyModalProps) {
  const { privacyPolicy } = SITE_CONTENT;

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

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
    >
      <div
        aria-hidden="true"
        onClick={onClose}
        className="fixed inset-0 bg-[#050A10]/85 backdrop-blur-sm transition-opacity"
      />

      <div className="relative z-10 w-full max-w-2xl max-h-[85vh] flex flex-col rounded-2xl border border-slate-800 bg-[#08101A] shadow-2xl shadow-black/80 overflow-hidden">

        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-800/80 bg-[#050A10]/60">
          <div>
            <h2
              id="privacy-modal-title"
              className="font-mono text-base sm:text-lg font-black uppercase tracking-wider text-cyan-400 drop-shadow-[0_0_12px_rgba(34,211,238,0.35)]"
            >
              {privacyPolicy.title}
            </h2>
            <p className="text-[11px] text-slate-400 mt-0.5">
              {privacyPolicy.lastUpdated}
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label="Zamknij okno"
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors"
          >
            <X className="w-5 h-5 stroke-[2]" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6 text-xs sm:text-sm text-slate-300 leading-relaxed">
          {privacyPolicy.sections.map((section, idx) => (
            <div key={idx} className="space-y-1.5">
              <h3 className="font-semibold text-white tracking-wide">
                {section.heading}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        <div className="px-6 py-4 border-t border-slate-800/80 bg-[#050A10]/60 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-200 text-xs font-semibold tracking-wider transition-colors"
          >
            Zamknij
          </button>
        </div>

      </div>
    </div>
  );
}