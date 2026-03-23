"use client";

import FloatingLines from "@/components/FloatingLines";

/** Brand gradient — keep in sync with hero / marketing */
export const FLOATING_LINES_GRADIENT = [
  "#2563eb",
  "#ffffff",
  "#dc2626",
] as const;

type FloatingLinesBackdropProps = {
  /** 0–1; use `0.3` for subtle section backgrounds */
  opacity?: number;
  className?: string;
};

/**
 * Full-bleed FloatingLines layer for a `relative` parent.
 * Place first inside the parent; put content in a sibling with `relative z-10`.
 */
export function FloatingLinesBackdrop({
  opacity = 1,
  className = "",
}: FloatingLinesBackdropProps) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 z-0 overflow-hidden ${className}`}
      style={{ opacity }}
      aria-hidden
    >
      <div className="h-full min-h-[8rem] w-full">
        <FloatingLines linesGradient={[...FLOATING_LINES_GRADIENT]} />
      </div>
    </div>
  );
}
