"use client";

import { HeroSection } from "@/components/hero-section";
import Link from "next/link";

export default function Home() {
  const stats = [
    { value: "12+", label: "projektů" },
    { value: "7 dní", label: "dodání" },
    { value: "100%", label: "spokojených" },
    { value: "2", label: "země" },
  ];

  const services = [
    {
      title: "Tvorba webu",
      text: "Vysokokonverzní weby postavené na strategii, UX a jasném obchodním cíli.",
    },
    {
      title: "AI nástroje",
      text: "Automatizace procesů, AI asistenti a chytrá integrace, která šetří čas.",
    },
  ];

  const testimonials = [
    {
      quote:
        "Za jeden týden jsme měli web, který začal přinášet poptávky hned po spuštění.",
      author: "Jan K., realitní makléř",
    },
    {
      quote:
        "EH nám pomohli nejen s webem, ale i s AI automaty na leady. Velký rozdíl.",
      author: "Petra V., majitelka studia",
    },
    {
      quote:
        "Nejlepší spolupráce za poslední roky. Jasný proces, žádné nečekané náklady.",
      author: "Marek R., konzultant",
    },
  ];

  return (
    <div className="pb-8">
      <HeroSection />

      <section className="relative z-10 mx-auto mt-16 w-full max-w-6xl px-4">
        <div className="grid gap-4 md:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label} className="surface-card rounded-2xl p-6">
              <p className="text-3xl font-semibold text-gradient-gold">{item.value}</p>
              <p className="mt-2 text-sm uppercase tracking-wide text-[#f0f4ff]/65">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto mt-16 w-full max-w-6xl px-4">
        <h2 className="text-3xl font-semibold md:text-4xl">Co děláme</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <div key={service.title} className="surface-card rounded-2xl p-6 md:p-8">
              <h3 className="text-2xl font-medium">{service.title}</h3>
              <p className="mt-4 text-[#f0f4ff]/75">{service.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto mt-16 w-full max-w-6xl px-4">
        <h2 className="text-3xl font-semibold md:text-4xl">Proč právě EH</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="surface-card rounded-2xl p-6">
            <h3 className="text-xl font-medium">Web za 7 dní</h3>
            <p className="mt-3 text-[#f0f4ff]/75">
              Rychlý, ale kontrolovaný proces od konceptu po spuštění.
            </p>
          </div>
          <div className="surface-card rounded-2xl p-6">
            <h3 className="text-xl font-medium">Specializace na niky</h3>
            <p className="mt-3 text-[#f0f4ff]/75">
              Víme, jak komunikovat hodnotu ve službách, B2B i lokálních trzích.
            </p>
          </div>
          <div className="surface-card rounded-2xl p-6">
            <h3 className="text-xl font-medium">Transparentní ceny</h3>
            <p className="mt-3 text-[#f0f4ff]/75">
              Přesně víte, co dostanete, kolik to stojí a jaký to má dopad.
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto mt-16 w-full max-w-6xl px-4">
        <h2 className="text-3xl font-semibold md:text-4xl">Co říkají klienti</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {testimonials.map((item) => (
            <blockquote key={item.author} className="surface-card rounded-2xl p-6">
              <p className="text-[#f0f4ff]/85">"{item.quote}"</p>
              <footer className="mt-4 text-sm text-[#c9a84c]">{item.author}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto mt-16 w-full max-w-6xl px-4">
        <div className="rounded-3xl border border-emerald-500/40 p-8 backdrop-blur-sm md:p-12">
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-300/90">
            Společná cesta
          </p>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
            Připraveni získat více klientů?
          </h2>
          <p className="mt-4 max-w-2xl text-[#f0f4ff]/80">
            Ozvěte se nám a během 24 hodin dostanete návrh postupu, ceny i časového
            plánu.
          </p>
          <Link
            href="/kontakt"
            className="mt-6 inline-flex rounded-full bg-emerald-500 px-6 py-3 font-medium text-[#062018] transition hover:bg-emerald-400"
          >
            Domluvit konzultaci
          </Link>
        </div>
      </section>
    </div>
  );
}
