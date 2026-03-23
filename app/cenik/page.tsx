import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { SubpageShell } from "@/components/subpage-shell";

const plans = [
  {
    name: "Start",
    price: "od 29 000 Kč",
    details: ["Jednostránkový nebo menší firemní web", "Základní SEO", "Dodání do 7 dní"],
  },
  {
    name: "Growth",
    price: "od 49 000 Kč",
    details: ["Vícepodstránkový web", "Konverzní copywriting", "Analytika a měření"],
  },
  {
    name: "Scale + AI",
    price: "od 79 000 Kč",
    details: ["Web + AI workflow", "Automatizace leadů", "Měsíční podpora"],
  },
];

export default function CenikPage() {
  return (
    <SubpageShell>
      <PageHero
        subtitle="Ceník"
        title="Transparentní balíčky bez překvapení."
        description="Vyberte si rozsah, který dává smysl vašim cílům. Přesnou kalkulaci dostanete po krátkém callu."
      />
      <section className="mx-auto mt-10 grid w-full max-w-6xl gap-4 px-4 md:grid-cols-3">
        {plans.map((plan) => (
          <article key={plan.name} className="surface-card rounded-2xl p-6">
            <h2 className="text-2xl font-medium">{plan.name}</h2>
            <p className="mt-3 text-2xl text-[#f6dd93]">{plan.price}</p>
            <ul className="mt-4 space-y-2 text-[#f0f4ff]/75">
              {plan.details.map((detail) => (
                <li key={detail}>• {detail}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>
      <div className="mx-auto mt-10 w-full max-w-6xl px-4">
        <Link
          href="/kontakt"
          className="inline-flex rounded-full border border-[#c9a84c]/70 px-6 py-3 font-medium text-[#f6dd93] transition hover:bg-[#c9a84c]/15"
        >
          Nechat si připravit nabídku
        </Link>
      </div>
    </SubpageShell>
  );
}
