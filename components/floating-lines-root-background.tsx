"use client";

import FloatingLines from "@/components/FloatingLines";

const FLOATING_LINES_GRADIENT = ["#2563eb", "#ffffff", "#dc2626"] as const;

/**
 * Single full-viewport FloatingLines layer — use once in root layout.
 * Solid page color (#06000f) sits behind via body; lines render at 60% opacity.
 */
export function FloatingLinesRootBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 opacity-60"
      aria-hidden
    >
      <div className="h-full w-full min-h-[100dvh]">
        <FloatingLines linesGradient={[...FLOATING_LINES_GRADIENT]} />
      </div>
    </div>
  );
}
