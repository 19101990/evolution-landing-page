import Image from "next/image";
import { SITE_CONTENT } from "@/data/content";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function AuthorBio() {
  const { authorSection } = SITE_CONTENT;

  return (
    <section
      id={authorSection.id}
      className="relative py-14 md:py-24 bg-[#050A10] overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-10 -translate-y-1/2 w-[450px] h-[450px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none -z-10"
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          <div className="lg:col-span-5 relative flex justify-center lg:justify-start">
            <Reveal
              direction="right"
              duration={1.4}
              margin="0px 0px -100px 0px"
              className="w-full flex justify-center lg:justify-start"
            >
              <div className="relative w-full max-w-[420px] lg:max-w-none h-[380px] sm:h-[460px] lg:h-[500px] overflow-hidden">
                <Image
                  src={authorSection.photo.src}
                  alt={authorSection.photo.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-top select-none pointer-events-none"
                />

                <div
                  aria-hidden="true"
                  className="absolute inset-y-0 right-0 w-2/5 bg-gradient-to-r from-transparent via-[#050A10]/40 to-[#050A10] pointer-events-none"
                />

                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#050A10] via-[#050A10]/60 to-transparent pointer-events-none"
                />
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            <Reveal
              direction="left"
              delay={0.1}
              duration={1.4}
              margin="0px 0px -100px 0px"
            >
              <span className="font-mono text-xs uppercase tracking-widest text-slate-400 font-semibold mb-2 block">
                {authorSection.eyebrow}
              </span>

              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-white mb-6">
                {authorSection.name.first}{" "}
                <span className="text-[#FF6B00] drop-shadow-[0_0_20px_rgba(255,107,0,0.35)]">
                  {authorSection.name.last}
                </span>
              </h2>
            </Reveal>

            <Reveal
              direction="left"
              delay={0.25}
              duration={1.4}
              margin="0px 0px -100px 0px"
            >
              <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl font-sans">
                {authorSection.bio.map((paragraph, index) => (
                  <p key={index}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>

          </div>

        </div>
      </Container>
    </section>
  );
}