import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SubpageShell } from "@/components/subpage-shell";

export const metadata: Metadata = {
  title: "Jak pracujeme | Proces spolupráce | EH Studio",
};

const steps = [
  {
    name: "01 - Strategie",
    text: "Pochopíme vaše cíle, zákazníky a největší příležitosti růstu.",
  },
  {
    name: "02 - Design a obsah",
    text: "Navrhneme strukturu, texty a vizuální styl, který prodává.",
  },
  {
    name: "03 - Vývoj",
    text: "Stavíme rychlý web v moderním stacku s čistou architekturou.",
  },
  {
    name: "04 - Spuštění a růst",
    text: "Měříme výkon, ladíme detaily a doplňujeme AI automatizace.",
  },
];

export default function ProcesPage() {
  return (
    <SubpageShell>
      <PageHero
        subtitle="Proces"
        title="Jasný postup od nápadu po klienty."
        description="Každý krok je transparentní, rychlý a orientovaný na business výsledky."
      />
      <section className="mx-auto mt-10 grid w-full max-w-6xl gap-4 px-4 md:grid-cols-2">
        {steps.map((step) => (
          <article key={step.name} className="surface-card rounded-2xl p-6">
            <h2 className="text-2xl font-medium text-gradient-gold">{step.name}</h2>
            <p className="mt-3 text-[#f0f4ff]/75">{step.text}</p>
          </article>
        ))}
      </section>
    </SubpageShell>
  );
}
