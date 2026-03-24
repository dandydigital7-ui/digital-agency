import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SubpageShell } from "@/components/subpage-shell";

export const metadata: Metadata = {
  title: "Naše práce | Reference a projekty | EH Studio",
};

const projects = [
  {
    name: "NovaDent",
    result: "+43 % více poptávek do 60 dní",
    detail: "Nový web, jasná nabídka služeb a chytré formulářové cesty.",
  },
  {
    name: "Atelier Forma",
    result: "2x více rezervací konzultací",
    detail: "Redesign značky, web prezentace a AI asistent pro FAQ.",
  },
  {
    name: "ProfiFinance",
    result: "35 hodin měsíčně ušetřeno",
    detail: "AI automatizace lead kvalifikace a návazné e-mailové sekvence.",
  },
];

export default function PracePage() {
  return (
    <SubpageShell>
      <PageHero
        subtitle="Práce"
        title="Naše práce"
        description="Reálné projekty. Reálné výsledky. Žádné šablony."
      />
      <section className="mx-auto mt-10 grid w-full max-w-6xl gap-4 px-4 md:grid-cols-3">
        {projects.map((project) => (
          <article key={project.name} className="surface-card rounded-2xl p-6">
            <p className="text-sm uppercase tracking-wide text-[#c9a84c]">Case study</p>
            <h2 className="mt-2 text-2xl font-medium">{project.name}</h2>
            <p className="mt-4 text-lg text-[#f6dd93]">{project.result}</p>
            <p className="mt-3 text-[#f0f4ff]/75">{project.detail}</p>
          </article>
        ))}
      </section>
    </SubpageShell>
  );
}
