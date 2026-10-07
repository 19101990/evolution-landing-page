import Image from "next/image";
import { SITE_CONTENT } from "@/data/content";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { BorderBeam } from "@/components/ui/BorderBeam";

export function SystemPillars() {
  const { pillarsSection } = SITE_CONTENT;

  return (
    <section
      id={pillarsSection.id}
      className="relative py-12 md:py-16 bg-[#050A10] overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none"
      />

      <Container className="relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12">
          <Reveal
            direction="up"
            margin="0px 0px -180px 0px"
            delay={0}
          >
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight text-white mb-2">
              {pillarsSection.title.regular}{" "}
              <span className="text-cyan-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.4)]">
                {pillarsSection.title.highlight}
              </span>
            </h2>
          </Reveal>
          
          <Reveal
            direction="up"
            margin="0px 0px -180px 0px"
            delay={0.15}
          >
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              {pillarsSection.subtitle}
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5 items-stretch">
          {pillarsSection.items.map((pillar, index) => {
            const isShifted = index > 0;

            return (
              <Reveal
                key={pillar.id}
                direction="up"
                delay={0.12 * (index + 1)}
                className="h-full"
              >
                <div className="relative h-full rounded-2xl p-[1px] overflow-hidden bg-slate-800/60 shadow-lg">
                  
                  <BorderBeam index={index} duration={3} totalCards={3} />

                  <article className="relative z-10 w-full h-full rounded-[15px] bg-[#04080E] p-5 sm:p-6 min-h-[170px] flex flex-col justify-center overflow-hidden">
                    
                    <div
                      className={`absolute inset-y-0 ${
                        isShifted ? "-left-[50px]" : "left-0"
                      } w-full pointer-events-none select-none z-0`}
                    >
                      <Image
                        src={pillar.imageSrc}
                        alt={pillar.imageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-contain object-left opacity-90"
                      />
                    </div>

                    <div
                      className={`relative z-10 ${
                        isShifted
                          ? "pl-20 sm:pl-24 lg:pl-28"
                          : "pl-24 sm:pl-28 lg:pl-32"
                      } flex flex-col justify-center`}
                    >
                      <h3 className="font-display font-extrabold text-base lg:text-lg uppercase tracking-wider text-cyan-400 mb-1.5 drop-shadow-[0_0_10px_rgba(34,211,238,0.3)]">
                        {pillar.title}
                      </h3>
                      <p className="text-xs lg:text-[13px] text-slate-300 leading-relaxed font-sans">
                        {pillar.description}
                      </p>
                    </div>

                  </article>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}