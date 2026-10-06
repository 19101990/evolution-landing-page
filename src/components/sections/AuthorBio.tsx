import Image from "next/image";
import { SITE_CONTENT } from "@/data/content";
import { Container } from "@/components/ui/Container";

export function AuthorBio() {
  const { authorSection } = SITE_CONTENT;

  return (
    <section
      id={authorSection.id}
      className="relative py-12 md:py-20 bg-[#050A10] overflow-hidden"
    >
      {/* Ambient background glow behind the portrait */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-10 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none -z-10"
      />

      <Container className="relative z-10">
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Portrait with seamless right & bottom dissolves */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[420px] lg:max-w-none h-[360px] sm:h-[440px] lg:h-[480px] overflow-hidden">
              <Image
                src={authorSection.photo.src}
                alt={authorSection.photo.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-top select-none pointer-events-none"
              />
              
              {/* Right edge fade into background */}
              <div
                aria-hidden="true"
                className="absolute inset-y-0 right-0 w-2/5 bg-gradient-to-r from-transparent via-[#050A10]/20 to-[#050A10] pointer-events-none"
              />

              
            </div>
          </div>

          {/* Right Column: Narrative Copy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Eyebrow */}
            <span className="font-mono text-xs uppercase tracking-widest text-slate-400 font-semibold mb-2">
              {authorSection.eyebrow}
            </span>

            {/* Name */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-white mb-6 font-display">
              {authorSection.name.first}{" "}
              <span className="text-[#FF6B00] drop-shadow-[0_0_20px_rgba(255,107,0,0.3)]">
                {authorSection.name.last}
              </span>
            </h2>

            {/* Bio Paragraphs */}
            <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
              {authorSection.bio.map((paragraph, index) => (
                <p key={index}>
                  {paragraph}
                </p>
              ))}
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}