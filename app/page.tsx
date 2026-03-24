import type { Metadata } from "next";
import { HeroSection } from "@/components/hero-section";
import Link from "next/link";

export const metadata: Metadata = {
  title: "EH Studio | Weby a AI nástroje pro podnikatele",
};

export default function Home() {
  const stats = [
    { value: "3+", label: "DOKONČENÝCH PROJEKTŮ" },
    { value: "7 dní", label: "OD BRIEFINGU PO WEB" },
    { value: "3x", label: "VÍCE POPTÁVEK" },
    { value: "100%", label: "KLIENTŮ DOPORUČUJE" },
  ];

  const services = [
    {
      title: "Tvorba webů",
      text: "Víte že 97 % lidí hledá firmu online než jí vůbec zavolá? A přesto většina malých podnikatelů nemá web který by je reprezentoval. My to měníme. Stavíme weby s moderním designem který se načte za 2 sekundy, funguje perfektně na mobilu a přivádí zákazníky z Googlu. Firmy s profesionálním webem získávají průměrně 3x více poptávek — a náš web se vám vrátí už za první měsíc.",
    },
    {
      title: "AI nástroje",
      text: "Ale web sám nestačí. Průměrný podnikatel stráví 3 hodiny denně odpovídáním na zprávy a hovory. Naše AI nástroje to řeší za vás — automaticky, 24 hodin denně, 7 dní v týdnu. Firmy které používají AI automatizaci snižují provozní náklady o 30 % a zvyšují tržby o 25 %.",
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
        <h2 className="text-3xl font-semibold md:text-4xl">Jeden tým. Dvě služby. Jeden cíl — váš růst.</h2>
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
        <h2 className="text-3xl font-semibold md:text-4xl">Jiní slibují. My dodáváme.</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="surface-card rounded-2xl p-6">
            <h3 className="text-xl font-medium">Ceny které dávají smysl</h3>
            <p className="mt-3 text-[#f0f4ff]/75">
              Nabízíme profesionální weby a AI nástroje za ceny výrazně nižší než u klasických agentur. Kvalita za férovou cenu — bez kompromisů.
            </p>
          </div>
          <div className="surface-card rounded-2xl p-6">
            <h3 className="text-xl font-medium">Demo do 24 hodin, hotovo za 7 dní</h3>
            <p className="mt-3 text-[#f0f4ff]/75">
              Do 24 hodin uvidíte první návrh. Finální web máte za 7 dní. Žádné čekání, žádné výmluvy.
            </p>
          </div>
          <div className="surface-card rounded-2xl p-6">
            <h3 className="text-xl font-medium">Platíte za výsledky, ne za náš čas</h3>
            <p className="mt-3 text-[#f0f4ff]/75">
              Nezajímá nás kolik hodin jsme strávili. Zajímá nás kolik poptávek vám web přinese.
            </p>
          </div>
          <div className="surface-card rounded-2xl p-6">
            <h3 className="text-xl font-medium">Časově flexibilní</h3>
            <p className="mt-3 text-[#f0f4ff]/75">
              Pracujeme kolem vašeho rozvrhu. Schůzka ráno, večer, o víkendu — jsme tam kdy vy potřebujete.
            </p>
          </div>
          <div className="surface-card rounded-2xl p-6">
            <h3 className="text-xl font-medium">Jediní na trhu kdo spojuje web a AI</h3>
            <p className="mt-3 text-[#f0f4ff]/75">
              Nenajdete v ČR a SR jiný tým který vám pod jednou střechou postaví profesionální web a zároveň implementuje AI nástroje. Jsme první a prozatím jediní.
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
            Každý den bez webu je zákazník u konkurence.
          </h2>
          <p className="mt-4 max-w-2xl text-[#f0f4ff]/80">
            Použijte naši kalkulačku — za 2 minuty zjistíte přesnou cenu webu nebo AI
            nástroje pro váš byznys. Bez skrytých poplatků. Bez závazků.
          </p>
          <Link
            href="/cenik"
            className="mt-6 inline-flex rounded-full bg-emerald-500 px-6 py-3 font-medium text-[#062018] transition hover:bg-emerald-400"
          >
            Spočítat cenu za 2 minuty →
          </Link>
        </div>
      </section>
    </div>
  );
}
