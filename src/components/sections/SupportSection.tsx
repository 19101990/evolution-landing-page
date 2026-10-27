import Image from "next/image";
import { Coffee } from "lucide-react";
import { SITE_CONTENT } from "@/data/content";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function SupportSection() {
  const { supportSection } = SITE_CONTENT;

  return (
    <section
      id={supportSection.id}
      aria-labelledby="support-title"
      className="relative pt-5 pb-0 sm:pb-10 bg-[#050A10] overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
        }}
      >
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2">
          <div className="support-glow-cyan w-[380px] sm:w-[500px] h-[300px] sm:h-[360px] bg-cyan-500/20 rounded-full blur-[110px] sm:blur-[140px]" />
        </div>

        <div className="absolute top-1/2 right-1/4 -translate-y-1/2">
          <div className="support-glow-orange w-[300px] sm:w-[420px] h-[260px] sm:h-[320px] bg-[#FF6B00]/16 rounded-full blur-[110px] sm:blur-[130px]" />
        </div>
      </div>

      <style>{`
        .support-glow-cyan {
          animation: pulseSupportCyan 6s ease-in-out infinite alternate;
          will-change: transform, opacity;
        }

        .support-glow-orange {
          animation: pulseSupportOrange 7.5s ease-in-out infinite alternate;
          will-change: transform, opacity;
        }

        @keyframes pulseSupportCyan {
          0% {
            transform: scale(0.92);
            opacity: 0.6;
          }
          100% {
            transform: scale(1.08);
            opacity: 1;
          }
        }

        @keyframes pulseSupportOrange {
          0% {
            transform: scale(0.94);
            opacity: 0.55;
          }
          100% {
            transform: scale(1.1);
            opacity: 0.95;
          }
        }
      `}</style>

      <Container className="relative z-10">
        <Reveal direction="up" duration={1.2} margin="0px 0px -60px 0px">
          <div className="relative rounded-2xl border border-cyan-500/20 bg-[#07121e]/60 backdrop-blur-md p-6 sm:p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden">
            <div
              aria-hidden="true"
              className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              <div className="lg:col-span-8 flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 shrink-0 flex items-center justify-center p-2 rounded-xl bg-cyan-950/30 border border-cyan-500/20 shadow-[0_0_25px_rgba(34,211,238,0.2)]">
                  <Image
                    src={supportSection.imageSrc}
                    alt=""
                    width={80}
                    height={80}
                    className="w-full h-full object-contain filter drop-shadow-[0_0_18px_rgba(34,211,238,0.6)] select-none pointer-events-none"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <h2 id="support-title" className="font-display text-xl sm:text-2xl font-black uppercase tracking-tight text-white mb-1.5">
                    {supportSection.title.regular}{" "}
                    <span className="text-cyan-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.5)]">
                      {supportSection.title.highlight}
                    </span>
                  </h2>

                  <p className="text-xs sm:text-sm font-semibold text-slate-200 mb-2 font-sans">
                    {supportSection.subtitle.prefix}{" "}
                    <span className="text-cyan-400">
                      {supportSection.subtitle.highlight}
                    </span>
                  </p>

                  <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed max-w-xl font-sans">
                    {supportSection.description}
                  </p>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col items-start lg:items-end w-full">
                <a
                  href={supportSection.buttonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group inline-flex items-center justify-center gap-3 w-full sm:w-auto px-7 py-3.5 rounded-lg border border-cyan-500/40 bg-[#081829] text-cyan-400 font-display text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-[0_0_10px_rgba(34,211,238,0.08)] hover:border-cyan-400/80 hover:text-white hover:bg-cyan-500/10 hover:shadow-[0_0_18px_rgba(34,211,238,0.2)] hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Coffee className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform duration-300 stroke-[2]" />
                  <span>{supportSection.buttonText}</span>
                </a>

                <p className="text-[11px] sm:text-xs text-slate-400 max-w-[260px] text-left lg:text-right mt-2.5 leading-snug font-sans">
                  {supportSection.note}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}