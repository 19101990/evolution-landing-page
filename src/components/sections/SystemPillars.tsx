import Image from "next/image";
import { SITE_CONTENT } from "@/data/content";
import { Container } from "@/components/ui/Container";

export function SystemPillars() {
  const { pillarsSection } = SITE_CONTENT;

  return (
    <section
      id={pillarsSection.id}
      className="relative py-10 md:py-14 bg-[#050A10] overflow-hidden"
    >
      <Container className="relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-white mb-2 font-display">
            {pillarsSection.title.regular}{" "}
            <span className="text-cyan-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.35)]">
              {pillarsSection.title.highlight}
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            {pillarsSection.subtitle}
          </p>
        </div>

        {/* 3 Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
        {pillarsSection.items.map((pillar, index) => {
            const isShifted = index > 0;

            return (
            <article
                key={pillar.id}
                className="group relative overflow-hidden rounded-2xl border border-slate-800/80 bg-[#04080E] p-5 sm:p-6 min-h-[160px] flex flex-col justify-center hover:border-cyan-500/40 transition-colors duration-300"
            >
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
                        className="object-contain object-left"
                    />
                </div>

                <div
                className={`relative z-10 ${
                    isShifted
                    ? "pl-20 sm:pl-24 lg:pl-28"
                    : "pl-24 sm:pl-28 lg:pl-32"
                } flex flex-col justify-center`}
                >
                <h3 className="font-extrabold text-base lg:text-lg uppercase tracking-wider text-cyan-400 mb-1.5 drop-shadow-[0_0_10px_rgba(34,211,238,0.3)] font-display">
                    {pillar.title}
                </h3>
                <p className="text-xs lg:text-[13px] text-slate-300 leading-relaxed">
                    {pillar.description}
                </p>
                </div>
            </article>
            );
        })}
        </div>
      </Container>
    </section>
  );
}