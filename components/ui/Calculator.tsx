"use client";

import { FormEvent, useMemo, useState } from "react";

type Variant = "default" | "blue" | "green" | "red";

type Option = {
  label: string;
  description: string;
  value: number;
  variant: Variant;
  priceLabel?: string;
  recurring?: boolean;
  confirmSkipGraphics?: boolean;
};

type Question = {
  id: string;
  text: string;
  subtext?: string;
  options: Option[];
};

type Step = {
  id: string;
  questions?: Question[];
  type?: "summary";
};

type Answer = {
  optionIndex: number;
  value: number;
};

const STEPS: Step[] = [
  {
    id: "web-satisfaction",
    questions: [
      {
        id: "web-satisfaction",
        text: "Jak jste na tom aktuálně s webem?",
        options: [
          {
            label: "Chci nový nebo výrazně lepší web",
            description: "Potřebuji moderní řešení, které přivádí zákazníky.",
            value: 5000,
            priceLabel: "+5 000 Kč",
            variant: "blue",
          },
          {
            label: "Chci využít vaše další služby (AI, grafika, správa)",
            description: "Zajímá mě AI chatbot, grafika nebo správa webu.",
            value: 0,
            variant: "default",
          },
        ],
      },
    ],
  },
  {
    id: "web-scope",
    questions: [
      {
        id: "web-scope",
        text: "Jak rozsáhlý web potřebujete?",
        subtext:
          "Rozsah webu ovlivňuje množství obsahu, strukturu i celkovou náročnost.",
        options: [
          {
            label: "Landing page",
            description:
              "Jednostránkový web zaměřený na jasnou prezentaci a získávání klientů.",
            value: 0,
            variant: "green",
          },
          {
            label: "Web s více stránkami (3+)",
            description:
              "Více podstránek (např. služby, o nás, kontakt) pro lepší prezentaci a důvěryhodnost.",
            value: 3000,
            priceLabel: "+3 000 Kč",
            variant: "blue",
          },
        ],
      },
    ],
  },
  {
    id: "brand-visual",
    questions: [
      {
        id: "brand-visual",
        text: "Máte už grafiku a logo pro váš web?",
        options: [
          {
            label: "Chci kompletní vizuální styl (logo + grafika)",
            description:
              "Vytvoříme vám vizuální identitu včetně loga, barev a tematických fotek pro váš web.",
            value: 4000,
            priceLabel: "+4 000 Kč",
            variant: "blue",
          },
          {
            label: "Ano, grafiku už mám",
            description: "Použijeme vaše podklady a přizpůsobíme je webu.",
            value: 0,
            variant: "green",
          },
          {
            label: "Grafiku teď neřeším",
            description:
              "Zaměříme se jen na funkční web bez řešení vizuální identity.",
            value: 0,
            variant: "red",
            confirmSkipGraphics: true,
          },
        ],
      },
    ],
  },
  {
    id: "ai-chatbot",
    questions: [
      {
        id: "ai-chatbot",
        text: "Chcete mít na webu chytrého asistenta, který komunikuje se zákazníky za vás?",
        options: [
          {
            label: "Ano, chci AI chatbota (doporučeno)",
            description:
              "AI chatbot bude odpovídat na dotazy návštěvníků, pomůže jim s orientací na webu a nasměruje je k objednávce nebo kontaktu. Funguje 24/7 a šetří váš čas.",
            value: 2500,
            priceLabel: "+2 500 Kč",
            variant: "blue",
          },
          {
            label: "Stačí mi klasický web",
            description: "Bez automatické komunikace.",
            value: 0,
            variant: "default",
          },
        ],
      },
    ],
  },
  {
    id: "web-support",
    questions: [
      {
        id: "web-support",
        text: "Chcete mít web bez starostí i po spuštění?",
        options: [
          {
            label: "Ano, chci správu a podporu (doporučeno)",
            description:
              "Postaráme se o web, úpravy i případné problémy. Máte jistotu, že vše funguje.",
            value: 500,
            recurring: true,
            priceLabel: "500 Kč / měsíc",
            variant: "blue",
          },
          {
            label: "Ne, budu si web spravovat sám",
            description: "",
            value: 0,
            variant: "default",
          },
        ],
      },
    ],
  },
  { id: "summary", type: "summary" },
];

const ENDPOINT =
  "https://script.google.com/macros/s/AKfycbyB_iTiqeNs3JvIRTrQbVR-arMJPyAFTXOaic4zQhGqkeyfq4HlaZ9AqkazqUoRak1F/exec";

export default function Calculator() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, Answer>>({});
  const [brandVisualSkipPending, setBrandVisualSkipPending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [formError, setFormError] = useState("");
  const [formData, setFormData] = useState({
    jmeno: "",
    email: "",
    telefon: "",
    firma: "",
    poznamka: "",
  });

  const isSummary = STEPS[currentStep]?.type === "summary";
  const progress = ((currentStep + 1) / STEPS.length) * 100;

  const totals = useMemo(() => {
    let oneTime = 0;
    let monthly = 0;
    for (const step of STEPS) {
      if (!step.questions) continue;
      for (const q of step.questions) {
        const a = answers[q.id];
        if (!a) continue;
        const opt = q.options[a.optionIndex];
        if (!opt) continue;
        if (opt.recurring) monthly += opt.value || 0;
        else oneTime += opt.value || 0;
      }
    }
    return { oneTime, monthly };
  }, [answers]);

  const summaryRows = useMemo(() => {
    const rows: Array<{ question: string; answer: string }> = [];
    for (const step of STEPS) {
      if (!step.questions) continue;
      for (const q of step.questions) {
        const a = answers[q.id];
        if (!a) continue;
        const option = q.options[a.optionIndex];
        if (!option) continue;
        rows.push({ question: q.text, answer: option.label });
      }
    }
    return rows;
  }, [answers]);

  const activeQuestions = STEPS[currentStep]?.questions ?? [];

  const selectOption = (q: Question, option: Option, optionIndex: number) => {
    if (q.id === "brand-visual" && option.confirmSkipGraphics) {
      if (!brandVisualSkipPending) {
        setBrandVisualSkipPending(true);
        return;
      }
      setBrandVisualSkipPending(false);
    }

    if (q.id === "brand-visual" && !option.confirmSkipGraphics) {
      setBrandVisualSkipPending(false);
    }

    setAnswers((prev) => ({ ...prev, [q.id]: { optionIndex, value: option.value } }));
    if (currentStep < STEPS.length - 1) {
      setTimeout(() => setCurrentStep((s) => Math.min(s + 1, STEPS.length - 1)), 150);
    }
  };

  const restart = () => {
    setCurrentStep(0);
    setAnswers({});
    setBrandVisualSkipPending(false);
    setSubmitted(false);
    setSending(false);
    setFormError("");
    setFormData({ jmeno: "", email: "", telefon: "", firma: "", poznamka: "" });
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formData.jmeno.trim() || !formData.email.trim()) return;

    setSending(true);
    setFormError("");

    const finalPrice =
      totals.monthly > 0
        ? `${totals.oneTime.toLocaleString("cs-CZ")} Kč jednorázově + ${totals.monthly.toLocaleString("cs-CZ")} Kč / měsíc`
        : `${totals.oneTime.toLocaleString("cs-CZ")} Kč`;

    try {
      const response = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          name: formData.jmeno,
          email: formData.email,
          phone: formData.telefon,
          company: formData.firma,
          note: formData.poznamka,
          price: finalPrice,
          answers: summaryRows,
          chatbot: answers["ai-chatbot"]?.optionIndex === 0,
          support: answers["web-support"]?.optionIndex === 0,
        }),
      });

      if (!response.ok) throw new Error("submit failed");
      setSubmitted(true);
    } catch {
      setFormError("Odeslání se nepovedlo, zkuste to prosím znovu.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-8 text-white">
      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md md:p-8">
          <div className="mb-4 h-1 overflow-hidden rounded bg-white/10">
            <div
              className="h-full bg-[#2563eb] transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="mb-6 flex gap-2">
            {STEPS.map((_, i) => (
              <span
                key={i}
                className={`h-2 w-2 rounded-full ${
                  i === currentStep
                    ? "bg-[#2563eb] scale-125"
                    : i < currentStep
                      ? "bg-[#2563eb]"
                      : "bg-white/20"
                }`}
              />
            ))}
          </div>

          {!isSummary ? (
            <>
              {activeQuestions.map((q) => (
                <div key={q.id} className="mb-8 last:mb-0">
                  <h3 className="mb-2 text-3xl font-extrabold tracking-tight">{q.text}</h3>
                  {q.subtext ? (
                    <p className="mb-4 text-white/80">{q.subtext}</p>
                  ) : null}

                  <div className="space-y-4">
                    {q.options.map((opt, optionIndex) => {
                      const selected = answers[q.id]?.optionIndex === optionIndex;
                      return (
                        <button
                          key={opt.label}
                          type="button"
                          onClick={() => selectOption(q, opt, optionIndex)}
                          className={`w-full rounded-xl border p-4 text-left transition ${
                            selected
                              ? "border-[#2563eb] bg-[#2563eb]/20"
                              : "border-white/10 bg-white/5 hover:border-[#2563eb]/50"
                          }`}
                        >
                          <div className="text-lg font-semibold">{opt.label}</div>
                          {opt.description ? (
                            <div className="mt-1 text-white/80">{opt.description}</div>
                          ) : null}
                          {opt.priceLabel ? (
                            <div className="mt-2 text-sm font-semibold text-[#93c5fd]">
                              {opt.priceLabel}
                            </div>
                          ) : null}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}

              {brandVisualSkipPending && currentStep === 2 ? (
                <div className="mb-4 rounded-xl border border-yellow-300/30 bg-yellow-300/10 p-3 text-sm text-yellow-200">
                  ⚠️ Opravdu nechcete řešit grafiku? Kvalitní vizuál výrazně zvyšuje
                  důvěru a počet zákazníků.
                </div>
              ) : null}

              <div className="mt-6 flex items-center gap-4">
                {currentStep > 0 ? (
                  <button
                    type="button"
                    className="rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-white/90"
                    onClick={() => {
                      setBrandVisualSkipPending(false);
                      setCurrentStep((s) => Math.max(s - 1, 0));
                    }}
                  >
                    ← Zpět
                  </button>
                ) : null}
              </div>
            </>
          ) : submitted ? (
            <div className="py-10 text-center">
              <p className="text-xl font-semibold text-emerald-300">
                Děkujeme, ozveme se vám co nejdříve.
              </p>
              <button
                type="button"
                onClick={restart}
                className="mt-6 rounded-xl border border-white/20 bg-white/5 px-5 py-3"
              >
                Začít znovu
              </button>
            </div>
          ) : (
            <div>
              <div className="mb-6 border-b border-white/10 pb-6">
                <h3 className="text-3xl font-extrabold tracking-tight">
                  Hotovo. Tady je váš přehled.
                </h3>
                <p className="mt-2 text-white/75">
                  Na základě vašich odpovědí jsme připravili orientační přehled.
                  Vyplňte kontakt a ozveme se vám.
                </p>
              </div>

              <div className="mb-6 space-y-3">
                {summaryRows.map((row, idx) => (
                  <div
                    key={`${row.question}-${idx}`}
                    className="flex flex-wrap justify-between gap-2 border-b border-white/10 pb-3 text-sm"
                  >
                    <span className="text-white/70">{row.question}</span>
                    <span className="font-semibold">{row.answer}</span>
                  </div>
                ))}
              </div>

              <h4 className="mb-4 text-xl font-semibold">Odešlete poptávku</h4>
              <form onSubmit={onSubmit} className="space-y-4">
                <div>
                  <label className="mb-1 block text-sm font-semibold">
                    Jméno a příjmení <span className="text-red-300">*</span>
                  </label>
                  <input
                    required
                    value={formData.jmeno}
                    onChange={(e) =>
                      setFormData((p) => ({ ...p, jmeno: e.target.value }))
                    }
                    className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 outline-none focus:border-[#2563eb]"
                    placeholder="Jan Novák"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-semibold">
                    E-mail <span className="text-red-300">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((p) => ({ ...p, email: e.target.value }))
                    }
                    className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 outline-none focus:border-[#2563eb]"
                    placeholder="jan@firma.cz"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-semibold">Telefon</label>
                  <input
                    value={formData.telefon}
                    onChange={(e) =>
                      setFormData((p) => ({ ...p, telefon: e.target.value }))
                    }
                    className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 outline-none focus:border-[#2563eb]"
                    placeholder="+420 123 456 789"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-semibold">Firma / značka</label>
                  <input
                    value={formData.firma}
                    onChange={(e) =>
                      setFormData((p) => ({ ...p, firma: e.target.value }))
                    }
                    className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 outline-none focus:border-[#2563eb]"
                    placeholder="Moje firma s.r.o."
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-semibold">Poznámka</label>
                  <textarea
                    rows={4}
                    value={formData.poznamka}
                    onChange={(e) =>
                      setFormData((p) => ({ ...p, poznamka: e.target.value }))
                    }
                    className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 outline-none focus:border-[#2563eb]"
                    placeholder="Máte nějaké speciální požadavky?"
                  />
                </div>

                {formError ? (
                  <p className="rounded-xl border border-red-300/30 bg-red-300/10 p-3 text-red-200">
                    {formError}
                  </p>
                ) : null}

                <div className="flex flex-wrap gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={sending}
                    className="rounded-xl bg-[#2563eb] px-6 py-3 font-semibold text-white transition hover:bg-[#1d4ed8] disabled:opacity-70"
                  >
                    {sending ? "Odesílám…" : "Odeslat poptávku"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setCurrentStep(STEPS.length - 2)}
                    className="rounded-xl border border-white/20 bg-white/5 px-5 py-3"
                  >
                    Upravit odpovědi
                  </button>
                  <button
                    type="button"
                    onClick={restart}
                    className="rounded-xl border border-white/10 px-5 py-3 text-white/75"
                  >
                    Začít znovu
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>

        <div className="h-fit rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md lg:sticky lg:top-6">
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-white/70">
            {isSummary ? "Vaše cena" : "Odhadovaná cena"}
          </p>
          <div className="mt-4 space-y-4">
            <div className="flex items-baseline justify-between">
              <span className="text-sm text-white/70">Cena konkurence</span>
              <span className="text-lg text-red-300/80 line-through">
                ≈ {(totals.oneTime * 4).toLocaleString("cs-CZ")} Kč
              </span>
            </div>
            <div className="h-px bg-white/10" />
            <div className="flex items-baseline justify-between">
              <span className="text-sm font-semibold text-white/90">Naše cena</span>
              <span className="text-3xl font-extrabold">
                {totals.oneTime.toLocaleString("cs-CZ")} Kč
              </span>
            </div>
            <div className="h-px bg-white/10" />
            <div className="flex items-baseline justify-between">
              <span className="text-sm text-white/70">Měsíčně</span>
              <span className="text-xl font-bold">
                {totals.monthly > 0
                  ? `${totals.monthly.toLocaleString("cs-CZ")} Kč / měsíc`
                  : "–"}
              </span>
            </div>
          </div>
          <p className="mt-4 border-t border-white/10 pt-4 text-xs text-white/60">
            Cena je orientační. Finální nabídku doladíme podle rozsahu projektu.
          </p>
        </div>
      </div>
    </div>
  );
}
