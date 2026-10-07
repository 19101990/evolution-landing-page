"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  width?: "fit-content" | "100%";
  margin?: string;
  amount?: number | "some" | "all";
}

export function Reveal({
  children,
  className = "",
  delay = 0,
  duration = 1.4,
  direction = "up",
  width = "100%",
  margin = "0px 0px -70px 0px",
  amount = "some",
}: RevealProps) {
  const getInitialPosition = () => {
    switch (direction) {
      case "up":
        return { y: 28, x: 0 };
      case "down":
        return { y: -28, x: 0 };
      case "left":
        return { x: 36, y: 0 };
      case "right":
        return { x: -36, y: 0 };
      case "none":
        return { x: 0, y: 0 };
    }
  };

  const initialOffset = getInitialPosition();

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...initialOffset,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{
        once: true,
        margin,
        amount,
      }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{ width }}
      className={className}
    >
      {children}
    </motion.div>
  );
}