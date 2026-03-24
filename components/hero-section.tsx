"use client";

import { Typewriter } from "@/components/ui/typewriter-text";
import Link from "next/link";

const HERO_TYPEWRITER_LINES: string[] = [
  "Weby které prodávají, ne jen hezky vypadají.",
  "AI nástroje nezbytné k podnikání v dnešní době.",
  "Váš byznys online za 7 dní.",
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-x-hidden">
      <div className="relative z-10 flex min-h-screen flex-col justify-center px-4 pb-24 pt-28 sm:px-6 md:px-8 pointer-events-none">
        <div className="mx-auto w-full max-w-4xl text-center pointer-events-auto">
          <p className="inline-flex rounded-full border border-[#2563eb]/40 bg-[#2563eb]/10 px-4 py-2 text-sm text-[#f0f4ff]">
            Weby a AI pro podnikatele
          </p>
          <h1 className="mt-8 min-h-[8rem] text-4xl font-semibold leading-tight tracking-tight text-[#f0f4ff] sm:min-h-[9rem] md:min-h-[10rem] md:text-6xl lg:min-h-[12rem] lg:text-7xl">
            <Typewriter
              text={HERO_TYPEWRITER_LINES}
              speed={80}
              deleteSpeed={40}
              delay={2000}
              loop
              className="text-[#f0f4ff]"
            />
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#f0f4ff]/75">
            Jsme tým který chce pomáhat podnikatelům růst. Stavíme weby s novodobým designem
            který je přehledný, udrží pozornost zákazníka a přivádí poptávky — a AI
            systémy které pracují za vás.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/sluzby"
              className="inline-flex rounded-full bg-[#2563eb] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#1d4ed8] sm:text-base"
            >
              Chci web který prodává →
            </Link>
            <Link
              href="/prace"
              className="inline-flex rounded-full border border-[#c9a84c]/60 px-6 py-3 text-sm font-medium text-[#f6dd93] transition hover:bg-[#c9a84c]/15 sm:text-base"
            >
              Prohlédnout práce
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
