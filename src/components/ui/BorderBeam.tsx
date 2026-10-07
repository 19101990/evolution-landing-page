"use client";

import { motion } from "framer-motion";

interface BorderBeamProps {
  index: number;
  duration?: number;
  totalCards?: number;
}

export function BorderBeam({
  index,
  duration = 3,
  totalCards = 3,
}: BorderBeamProps) {
  const repeatDelay = duration * (totalCards - 1);
  const delay = index * duration;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl z-0">
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[350%] aspect-square"
        style={{
          background:
            "conic-gradient(from 0deg at 50% 50%, transparent 0deg, transparent 270deg, rgba(34, 211, 238, 0.15) 310deg, #22d3ee 350deg, #e0f2fe 360deg)",
        }}
        animate={{
          rotate: [0, 360],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          rotate: {
            duration,
            ease: "linear",
            repeat: Infinity,
            repeatDelay,
            delay,
          },
          opacity: {
            duration,
            times: [0, 0.08, 0.92, 1],
            repeat: Infinity,
            repeatDelay,
            delay,
          },
        }}
      />
    </div>
  );
}