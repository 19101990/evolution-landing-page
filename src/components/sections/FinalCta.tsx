import Image from "next/image";
import { Download } from "lucide-react";
import { SITE_CONTENT } from "@/data/content";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCta() {
  const { finalCta } = SITE_CONTENT;

  return (
    <section className="relative mt-10 md:mt-12 py-14 sm:py-16 md:py-20 overflow-hidden bg-[#050A10]">
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <Image
          src={finalCta.backgroundImage.src}
          alt={finalCta.backgroundImage.alt}
          fill
          sizes="100vw"
          className="object-cover object-[right_bottom] sm:object-center !h-[60%] sm:!h-full opacity-100 sm:opacity-80"
        />

        <div className="absolute inset-0 bg-[#050A10]/35" />

        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#050A10] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#050A10] to-transparent" />

        <div className="absolute inset-y-0 left-0 w-full lg:w-2/3 bg-gradient-to-r from-[#050A10] via-[#050A10]/75 to-transparent" />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          <div className="lg:col-span-6">
            <Reveal direction="right" duration={1.4} margin="0px 0px -70px 0px">
              <div className="flex items-start gap-4">
                <svg
                  aria-hidden="true"
                  className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-400 shrink-0 fill-current drop-shadow-[0_0_15px_rgba(34,211,238,0.5)] select-none"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.5 4h5A1.5 1.5 0 0 1 11 5.5v5A1.5 1.5 0 0 1 9.5 12H7.2l1.6 6.2a.8.8 0 0 1-.77 1h-1.8a.8.8 0 0 1-.77-.6L3.1 11.4A1.5 1.5 0 0 1 3 10.5v-5A1.5 1.5 0 0 1 4.5 4zm10 0h5A1.5 1.5 0 0 1 21 5.5v5a1.5 1.5 0 0 1-1.5 1.5h-2.3l1.6 6.2a.8.8 0 0 1-.77 1h-1.8a.8.8 0 0 1-.77-.6l-2.36-7.2A1.5 1.5 0 0 1 13 10.5v-5A1.5 1.5 0 0 1 14.5 4z" />
                </svg>

                <div className="space-y-1.5 max-w-lg lg:pr-[60px]">
                  <p className="text-lg sm:text-base md:text-xl text-slate-100 font-medium leading-relaxed font-sans">
                    {finalCta.quote.text}
                  </p>
                  <p className="text-lg sm:text-base md:text-xl text-cyan-400 font-bold leading-relaxed drop-shadow-[0_0_15px_rgba(34,211,238,0.35)] font-sans">
                    {finalCta.quote.highlight}”
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6 flex flex-col items-center text-center lg:pt-16">
            <Reveal
              direction="left"
              delay={0.15}
              duration={1.4}
              margin="0px 0px -70px 0px"
              className="flex flex-col items-center w-full"
            >
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tight mb-1">
                <span className="text-cyan-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.45)]">
                  {finalCta.title.regular}{" "}
                </span>
                <span className="text-white">
                  {finalCta.title.highlight}
                </span>
              </h2>

              <p className="font-display text-sm sm:text-lg font-bold text-cyan-400 mb-6 tracking-wide drop-shadow-[0_0_10px_rgba(34,211,238,0.25)]">
                {finalCta.subtitle}
              </p>

              <Button
                href={finalCta.cta.fileUrl}
                download="Zaprogramuj swoją ewolucję - Igor Kiełbowski.pdf"
                className="w-full sm:w-auto px-4 py-4 text-xs sm:text-sm font-bold font-display tracking-wider shadow-lg shadow-[#FF6B00]/25 hover:shadow-[#FF6B00]/45 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
              >
                <Download className="w-4 h-4 mr-2 stroke-[2.5]" />
                {finalCta.cta.buttonText}
              </Button>

              <p className="font-mono text-xs text-slate-400 mt-3 tracking-wide">
                {finalCta.cta.fileBadge}
              </p>
            </Reveal>
          </div>

        </div>
      </Container>
    </section>
  );
}