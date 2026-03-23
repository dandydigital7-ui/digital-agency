"use client";

import type { ReactNode } from "react";

/** Spacing wrapper for inner pages; FloatingLines lives in root layout. */
export function SubpageShell({ children }: { children: ReactNode }) {
  return <div className="relative z-10 w-full pb-8">{children}</div>;
}
