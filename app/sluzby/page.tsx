import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { SubpageShell } from "@/components/subpage-shell";

const services = [
  {
    title: "Web na míru",
    text: "Kombinace strategie, copywritingu a designu pro maximální konverze.",
  },
  {
    title: "Redesign webu",
    text: "Zlepšíme rychlost, strukturu i důvěryhodnost vašeho aktuálního webu.",
  },
  {
    title: "AI automatizace",
    text: "Zavedeme AI workflow, které zrychlí odpovědi, lead management i obsah.",
  },
];

export default function SluzbyPage() {
  return (
    <SubpageShell>
      <PageHero
        subtitle="Služby"
        title="Weby a AI, které opravdu pomáhají růst."
        description="Vybíráme jen to, co má pro vaše podnikání reálný dopad. Bez zbytečné složitosti."
      />
      <section className="mx-auto mt-10 grid w-full max-w-6xl gap-4 px-4 md:grid-cols-3">
        {services.map((service) => (
          <div key={service.title} className="surface-card rounded-2xl p-6">
            <h2 className="text-2xl font-medium">{service.title}</h2>
            <p className="mt-3 text-[#f0f4ff]/75">{service.text}</p>
          </div>
        ))}
      </section>
      <div className="mx-auto mt-10 w-full max-w-6xl px-4">
        <Link
          href="/kontakt"
          className="inline-flex rounded-full bg-[#2563eb] px-6 py-3 font-medium transition hover:bg-[#1d4ed8]"
        >
          Chci návrh řešení
        </Link>
      </div>
    </SubpageShell>
  );
}
