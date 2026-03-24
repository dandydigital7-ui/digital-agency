import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { SubpageShell } from "@/components/subpage-shell";

const services = [
  {
    title: "Weby které prodávají",
    text: "97 % lidí hledá firmu online než jí zavolá. Váš web musí zaujmout do 3 sekund — jinak zákazník odchází ke konkurenci. Stavíme weby s moderním designem, které se načtou za 2 sekundy, fungují na mobilu a přivádějí zákazníky z Googlu.",
  },
  {
    title: "AI Recepční 24/7",
    text: "Nikdy nezmešká hovor. Odpovídá, rezervuje termíny a posílá potvrzení — i v noci a o víkendu. Průměrná úspora 15 000 Kč/měsíc oproti klasické recepční.",
  },
  {
    title: "AI Chatbot na web",
    text: "Návštěvník přijde na web, chatbot ho provede, odpoví na otázky a převede ho na poptávku. Automaticky, 24/7. Průměrně 3x více poptávek z webu.",
  },
  {
    title: "AI Follow-up systém",
    text: "Po každé návštěvě nebo poptávce systém automaticky posílá zprávy a připomínky. Průměrně 40 % více uzavřených obchodů bez vaší práce.",
  },
  {
    title: "AI správa recenzí",
    text: "Každá Google recenze dostane profesionální odpověď do 5 minut. Lepší reputace na Googlu = více zákazníků každý měsíc.",
  },
];

export default function SluzbyPage() {
  return (
    <SubpageShell>
      <PageHero
        subtitle="Web a AI nástroje pod jednou střechou — vše co moderní podnikatel potřebuje."
        title="Co nabízíme"
        description="Web a AI nástroje pod jednou střechou — vše co moderní podnikatel potřebuje."
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
