"use client";

import { useEffect, useRef } from "react";

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    let raf = 0;
    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;

    const update = () => {
      currentX += (targetX - currentX) * 0.14;
      currentY += (targetY - currentY) * 0.14;
      glow.style.transform = `translate3d(${currentX - 250}px, ${currentY - 250}px, 0)`;
      raf = window.requestAnimationFrame(update);
    };

    const handleMove = (event: MouseEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
    };

    window.addEventListener("mousemove", handleMove);
    raf = window.requestAnimationFrame(update);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[5] h-[500px] w-[500px] rounded-full opacity-0 md:opacity-100"
      style={{
        background:
          "radial-gradient(circle, rgb(37 99 235 / 0.12) 0%, rgb(37 99 235 / 0.08) 30%, transparent 70%)",
      }}
    />
  );
}
