"use client";

import { MotionConfig } from "framer-motion";

/** Respects the visitor's "reduce motion" OS setting */
export function MotionRoot({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
