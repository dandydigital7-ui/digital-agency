"use client";

import React, { useEffect, useId, useRef, useState } from "react";

type Ripple = { id: number; x: number; y: number };

/**
 * Visual-only layer: SVG grid, dots, corners, floating particles,
 * mouse glow (#2563eb), click ripples. Transparent — place over page bg.
 */
export default function DigitalSerenityBackground() {
  const [mouseGradientStyle, setMouseGradientStyle] = useState({
    left: "0px",
    top: "0px",
    opacity: 0,
  });
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const [scrolled, setScrolled] = useState(false);
  const floatingElementsRef = useRef<HTMLElement[]>([]);
  const patternId = `grid-${useId().replace(/:/g, "")}`;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouseGradientStyle({
        left: `${e.clientX}px`,
        top: `${e.clientY}px`,
        opacity: 1,
      });
    };
    const handleMouseLeave = () => {
      setMouseGradientStyle((prev) => ({ ...prev, opacity: 0 }));
    };
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const newRipple = { id: Date.now(), x: e.clientX, y: e.clientY };
      setRipples((prev) => [...prev, newRipple]);
      setTimeout(
        () => setRipples((prev) => prev.filter((r) => r.id !== newRipple.id)),
        1000,
      );
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll(".ds-floating-animate");
    floatingElementsRef.current = Array.from(elements) as HTMLElement[];
    const handleScroll = () => {
      if (!scrolled) {
        setScrolled(true);
        floatingElementsRef.current.forEach((el, index) => {
          setTimeout(() => {
            if (el) {
              el.style.animationPlayState = "running";
              el.style.opacity = "";
            }
          }, (parseFloat(el.style.animationDelay || "0") * 1000 || 0) + index * 100);
        });
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const pageStyles = `
    #mouse-gradient-react {
      position: fixed;
      pointer-events: none;
      border-radius: 9999px;
      background-image: radial-gradient(circle, rgba(37, 99, 235, 0.28), rgba(37, 99, 235, 0.14), rgba(37, 99, 235, 0.04) 45%, transparent 72%);
      transform: translate(-50%, -50%);
      will-change: left, top, opacity;
      transition: left 70ms linear, top 70ms linear, opacity 300ms ease-out;
      z-index: 8;
    }
    @keyframes grid-draw { 0% { stroke-dashoffset: 1000; opacity: 0; } 50% { opacity: 0.3; } 100% { stroke-dashoffset: 0; opacity: 0.15; } }
    @keyframes pulse-glow { 0%, 100% { opacity: 0.1; transform: scale(1); } 50% { opacity: 0.35; transform: scale(1.1); } }
    .grid-line { stroke: rgba(37, 99, 235, 0.35); stroke-width: 0.5; opacity: 0; stroke-dasharray: 5 5; stroke-dashoffset: 1000; animation: grid-draw 2s ease-out forwards; }
    .detail-dot { fill: #c9a84c; opacity: 0; animation: pulse-glow 3s ease-in-out infinite; }
    .ds-floating-animate { position: absolute; width: 2px; height: 2px; background: #c9a84c; border-radius: 50%; opacity: 0; animation: float 4s ease-in-out infinite; animation-play-state: paused; }
    @keyframes float { 0%, 100% { transform: translateY(0) translateX(0); opacity: 0.2; } 25% { transform: translateY(-10px) translateX(5px); opacity: 0.6; } 50% { transform: translateY(-5px) translateX(-3px); opacity: 0.4; } 75% { transform: translateY(-15px) translateX(7px); opacity: 0.8; } }
    .ripple-effect { position: fixed; width: 4px; height: 4px; background: rgba(37, 99, 235, 0.65); border-radius: 50%; transform: translate(-50%, -50%); pointer-events: none; animation: pulse-glow 1s ease-out forwards; z-index: 9; box-shadow: 0 0 12px rgba(37, 99, 235, 0.45); }
  `;

  return (
    <>
      <style>{pageStyles}</style>
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-transparent"
        aria-hidden
      >
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id={patternId}
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="rgba(37, 99, 235, 0.12)"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#${patternId})`} />
          <line
            x1="0"
            y1="20%"
            x2="100%"
            y2="20%"
            className="grid-line"
            style={{ animationDelay: "0.5s" }}
          />
          <line
            x1="0"
            y1="80%"
            x2="100%"
            y2="80%"
            className="grid-line"
            style={{ animationDelay: "1s" }}
          />
          <line
            x1="20%"
            y1="0"
            x2="20%"
            y2="100%"
            className="grid-line"
            style={{ animationDelay: "1.5s" }}
          />
          <line
            x1="80%"
            y1="0"
            x2="80%"
            y2="100%"
            className="grid-line"
            style={{ animationDelay: "2s" }}
          />
          <line
            x1="50%"
            y1="0"
            x2="50%"
            y2="100%"
            className="grid-line"
            style={{ animationDelay: "2.5s", opacity: 0.05 }}
          />
          <line
            x1="0"
            y1="50%"
            x2="100%"
            y2="50%"
            className="grid-line"
            style={{ animationDelay: "3s", opacity: 0.05 }}
          />
          <circle
            cx="20%"
            cy="20%"
            r="2"
            className="detail-dot"
            style={{ animationDelay: "3s" }}
          />
          <circle
            cx="80%"
            cy="20%"
            r="2"
            className="detail-dot"
            style={{ animationDelay: "3.2s" }}
          />
          <circle
            cx="20%"
            cy="80%"
            r="2"
            className="detail-dot"
            style={{ animationDelay: "3.4s" }}
          />
          <circle
            cx="80%"
            cy="80%"
            r="2"
            className="detail-dot"
            style={{ animationDelay: "3.6s" }}
          />
          <circle
            cx="50%"
            cy="50%"
            r="1.5"
            className="detail-dot"
            style={{ animationDelay: "4s" }}
          />
        </svg>

        <div
          className="ds-floating-animate"
          style={{ top: "25%", left: "15%", animationDelay: "0.5s" }}
        />
        <div
          className="ds-floating-animate"
          style={{ top: "60%", left: "85%", animationDelay: "1s" }}
        />
        <div
          className="ds-floating-animate"
          style={{ top: "40%", left: "10%", animationDelay: "1.5s" }}
        />
        <div
          className="ds-floating-animate"
          style={{ top: "75%", left: "90%", animationDelay: "2s" }}
        />
      </div>

      <div
        id="mouse-gradient-react"
        className="pointer-events-none h-60 w-60 blur-xl sm:h-80 sm:w-80 sm:blur-2xl md:h-96 md:w-96 md:blur-3xl"
        style={{
          left: mouseGradientStyle.left,
          top: mouseGradientStyle.top,
          opacity: mouseGradientStyle.opacity,
        }}
        aria-hidden
      />

      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="ripple-effect"
          style={{ left: `${ripple.x}px`, top: `${ripple.y}px` }}
        />
      ))}
    </>
  );
}
