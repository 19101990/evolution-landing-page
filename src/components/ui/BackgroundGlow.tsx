"use client";

interface BackgroundGlowProps {
  variant?: "dual" | "inverted" | "cyan" | "orange";
  fadeEdges?: boolean;
  singleOnMobile?: boolean;
}

export function BackgroundGlow({
  variant = "dual",
  fadeEdges = true,
  singleOnMobile = true,
}: BackgroundGlowProps) {
  const isDual = variant === "dual" || variant === "inverted";
  const leftColor = variant === "inverted" || variant === "orange" ? "orange" : "cyan";
  const rightColor = variant === "inverted" ? "cyan" : "orange";

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden"
      style={
        fadeEdges
          ? {
              maskImage:
                "linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)",
            }
          : undefined
      }
    >
      <div className="absolute top-1/4 sm:top-1/3 md:top-1/2 left-1/2 -translate-x-1/2 md:left-[-60px] md:translate-x-0 -translate-y-1/2">
        <div
          className={`${
            leftColor === "cyan"
              ? "glow-cyan-pulse bg-cyan-500/25"
              : "glow-orange-pulse bg-[#FF6B00]/24"
          } w-[340px] sm:w-[440px] md:w-[520px] h-[340px] sm:h-[440px] md:h-[520px] rounded-full blur-[100px] md:blur-[140px]`}
        />
      </div>

      {isDual && (
        <div
          className={`${
            singleOnMobile ? "hidden md:block" : "block"
          } absolute top-1/3 right-[-40px]`}
        >
          <div
            className={`${
              rightColor === "orange"
                ? "glow-orange-pulse bg-[#FF6B00]/24"
                : "glow-cyan-pulse bg-cyan-500/25"
            } w-[540px] h-[540px] rounded-full blur-[150px]`}
          />
        </div>
      )}

      <style>{`
        .glow-cyan-pulse {
          animation: ambientPulseCyan 2.2s ease-in-out infinite alternate;
          will-change: transform, opacity;
        }

        .glow-orange-pulse {
          animation: ambientPulseOrange 2.2s ease-in-out infinite alternate-reverse;
          will-change: transform, opacity;
        }

        @keyframes ambientPulseCyan {
          0% {
            transform: scale(0.92);
            opacity: 0.45;
          }
          100% {
            transform: scale(1.08);
            opacity: 1;
          }
        }

        @keyframes ambientPulseOrange {
          0% {
            transform: scale(0.94);
            opacity: 0.55;
          }
          100% {
            transform: scale(1.1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}