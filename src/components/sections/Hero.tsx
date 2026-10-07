import Image from "next/image";
import { Download } from "lucide-react";
import { SITE_CONTENT } from "@/data/content";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  const { hero, supportSection, finalCta } = SITE_CONTENT;

  return (
    <section id="book" className="relative pt-10 pb-10 md:pt-20 md:pb-12 overflow-hidden">
      <div className="absolute inset-0 z-[1] select-none pointer-events-none">
        <Image
          src={hero.backgroundImage.src}
          alt={hero.backgroundImage.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-top opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050A10]/40 via-transparent to-[#050A10]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050A10] via-[#050A10]/70 to-transparent" />
      </div>

      <div
        aria-hidden="true"
        className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/3 right-4 w-[360px] h-[360px] bg-[#FF6B00]/10 rounded-full blur-[130px] pointer-events-none"
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          <div className="lg:col-span-7 flex flex-col items-start text-left order-2 lg:order-1">
            
            <Reveal direction="up" delay={0.05} duration={1.4}>
              <span className="font-mono text-xs uppercase tracking-widest text-cyan-400 font-semibold mb-3 block">
                {hero.authorEyebrow}
              </span>
            </Reveal>

            <Reveal direction="up" delay={0.15} duration={1.4}>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight leading-[1.05] text-white mb-6">
                {hero.title.line1} <br />
                {hero.title.line2}{" "}
                <span className="text-[#FF6B00] drop-shadow-[0_0_25px_rgba(255,107,0,0.35)]">
                  {hero.title.highlight}
                </span>
              </h1>
            </Reveal>

            <Reveal direction="up" delay={0.25} duration={1.4}>
              <div className="font-mono text-sm sm:text-base text-slate-200 space-y-1 mb-6 border-l-2 border-cyan-500/60 pl-4 py-0.5">
                {hero.tagline.map((line, index) => (
                  <p key={index} className="font-semibold">
                    {line}
                  </p>
                ))}
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.35} duration={1.4}>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl mb-8 font-sans">
                {hero.description}
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.45} duration={1.4}>
              <div className="w-full sm:w-auto">
                <Button
                  href={finalCta.cta.fileUrl}
                  download
                  className="w-full sm:w-auto px-4 py-4 text-xs sm:text-sm font-bold font-display tracking-wider shadow-lg shadow-[#FF6B00]/20 hover:shadow-[#FF6B00]/40 transition-shadow duration-300"
                >
                  <Download className="w-4 h-4 mr-1 stroke-[2.5]" />
                  {hero.cta.buttonText}
                </Button>
              </div>

              <p className="font-mono text-xs text-slate-500 mt-3 tracking-wide">
                {hero.cta.fileBadge}
              </p>

              <p className="text-xs text-slate-400 mt-4">
                {hero.cta.supportNote}{" "}
                <a
                  href={supportSection.buttonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 font-medium underline underline-offset-4 transition-colors"
                >
                  {hero.cta.supportLinkText}
                </a>
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-5 flex justify-center items-center relative order-1 lg:order-2 w-full">
            <Reveal direction="up" delay={0.2} duration={1.4} className="w-full flex justify-center">
              <div className="relative w-full max-w-[220px] sm:max-w-[340px] lg:max-w-none flex items-center justify-center mx-auto">
                
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-tr from-cyan-500/25 via-[#FF6B00]/20 to-transparent rounded-2xl filter blur-2xl sm:blur-3xl opacity-80"
                />

                <Image
                  src={hero.bookCover.src}
                  alt={hero.bookCover.alt}
                  width={520}
                  height={720}
                  priority
                  sizes="(max-width: 640px) 220px, (max-width: 1024px) 340px, 40vw"
                  className="relative z-10 w-auto h-auto max-h-[300px] sm:max-h-[440px] lg:max-h-[580px] object-contain drop-shadow-[0_15px_35px_rgba(0,0,0,0.85)] select-none pointer-events-none"
                />
              </div>
            </Reveal>
          </div>

        </div>
      </Container>
    </section>
  );
}