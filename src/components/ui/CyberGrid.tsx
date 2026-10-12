"use client";

export function CyberGrid() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0"
    >
      <div
        className="cyber-diagonal-grid absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(rgba(34, 211, 238, 0.26) 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
        }}
      />

      <style>{`
        .cyber-diagonal-grid {
          -webkit-mask-image: linear-gradient(
            65deg,
            transparent 0%,
            transparent 20%,
            black 25%,
            transparent 30%,
            transparent 70%,
            black 75%,
            transparent 80%,
            transparent 100%
          );
          mask-image: linear-gradient(
            65deg,
            transparent 0%,
            transparent 20%,
            black 25%,
            transparent 30%,
            transparent 70%,
            black 75%,
            transparent 80%,
            transparent 100%
          );
          -webkit-mask-size: 200% 200%;
          mask-size: 200% 200%;
          animation: cyberContinuousSweep 7s ease-in-out infinite;
        }

        @keyframes cyberContinuousSweep {
          0% {
            -webkit-mask-position: 100% 0%;
            mask-position: 100% 0%;
            opacity: 0.7;
          }
          30% {
            -webkit-mask-position: 80% 20%;
            mask-position: 80% 20%;
            opacity: 0.55;
          }
          58% {
            -webkit-mask-position: 42% 58%;
            mask-position: 42% 58%;
            opacity: 0.95;
          }
          82% {
            -webkit-mask-position: 22% 78%;
            mask-position: 22% 78%;
            opacity: 0.65;
          }
          100% {
            -webkit-mask-position: 0% 100%;
            mask-position: 0% 100%;
            opacity: 0.7;
          }
        }
      `}</style>
    </div>
  );
}