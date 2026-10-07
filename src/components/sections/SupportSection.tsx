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
      className="relative py-12 md:py-16 bg-[#050A10] overflow-hidden border-t border-b border-slate-900/60"
    >
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[350px] h-[350px] bg-cyan-500/15 rounded-full blur-[130px] pointer-events-none"
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          <div className="lg:col-span-8">
            <Reveal direction="right" duration={1.4} margin="0px 0px -70px 0px">
              <div className="flex items-start gap-4 sm:gap-6">
                
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 shrink-0 flex items-center justify-center">
                  <Image
                    src={supportSection.imageSrc}
                    alt={supportSection.imageAlt}
                    width={80}
                    height={80}
                    className="w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(34,211,238,0.45)] select-none pointer-events-none"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <h2 className="font-display text-xl sm:text-2xl font-black uppercase tracking-tight text-white mb-1.5">
                    {supportSection.title.regular}{" "}
                    <span className="text-cyan-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.4)]">
                      {supportSection.title.highlight}
                    </span>
                  </h2>

                  <p className="text-xs sm:text-sm font-semibold text-slate-200 mb-2 font-sans">
                    {supportSection.subtitle.prefix}{" "}
                    <span className="text-cyan-400">
                      {supportSection.subtitle.highlight}
                    </span>
                  </p>

                  <p className="text-xs sm:text-[13px] text-slate-400 leading-relaxed max-w-xl font-sans">
                    {supportSection.description}
                  </p>
                </div>

              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center pl-20 sm:pl-24 lg:pl-0">
            <Reveal direction="left" delay={0.15} duration={1.4} margin="0px 0px -70px 0px">
              <a
                href={supportSection.buttonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg border border-cyan-500/60 bg-[#081321] text-cyan-400 hover:text-white hover:border-cyan-400 hover:bg-cyan-500/10 font-display text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.15)] hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] hover:-translate-y-0.5 active:translate-y-0 group"
              >
                <Coffee className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform duration-300 stroke-[2.2]" />
                <span>{supportSection.buttonText}</span>
              </a>

              <p className="text-[11px] sm:text-xs text-slate-400 max-w-[240px] text-left lg:text-right mt-2.5 leading-snug font-sans">
                {supportSection.note}
              </p>
            </Reveal>
          </div>

        </div>
      </Container>
    </section>
  );
}