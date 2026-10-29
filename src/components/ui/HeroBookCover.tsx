"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface HeroBookCoverProps {
  src: string;
  alt: string;
}

export function HeroBookCover({ src, alt }: HeroBookCoverProps) {
  return (
    <div className="relative w-full max-w-[300px] sm:max-w-[340px] lg:max-w-none flex items-center justify-start lg:justify-center">
      
      <motion.div
        aria-hidden="true"
        className="absolute -left-10 sm:-left-16 top-1/4 w-52 sm:w-72 h-64 sm:h-88 bg-cyan-400/45 rounded-full blur-[70px] sm:blur-[85px] pointer-events-none"
        animate={{
          opacity: [0.35, 1, 0.35],
          scale: [0.95, 1.08, 0.95],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        aria-hidden="true"
        className="absolute -right-8 sm:-right-14 bottom-1/4 w-48 sm:w-68 h-60 sm:h-80 bg-[#FF6B00]/45 rounded-full blur-[65px] sm:blur-[80px] pointer-events-none"
        animate={{
          opacity: [1, 0.45, 1],
          scale: [1.08, 0.95, 1.08],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div
        aria-hidden="true"
        className="absolute -inset-2 bg-gradient-to-tr from-cyan-500/25 via-transparent to-[#FF6B00]/25 rounded-3xl blur-2xl pointer-events-none"
      />
      <div className="relative z-10 w-full flex justify-start lg:justify-center">
        <Image
          src={src}
          alt={alt}
          width={520}
          height={720}
          priority
          sizes="(max-width: 640px) 300px, (max-width: 1024px) 340px, 40vw"
          className="w-auto h-auto max-h-[400px] sm:max-h-[440px] lg:max-h-[580px] object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.95)] select-none pointer-events-none"
        />
      </div>

    </div>
  );
}