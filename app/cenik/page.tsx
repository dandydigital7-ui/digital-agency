import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ceník | Kalkulačka cen webů | EH Studio",
};

export default function CenikPage() {
  return (
    <section className="relative z-10 mx-auto flex min-h-[calc(100vh-10rem)] w-full max-w-6xl items-center px-4 py-16">
      <div className="w-full rounded-3xl border border-emerald-500/40 bg-[#0f2a23]/30 p-8 backdrop-blur-sm md:p-12">
        <p className="text-sm uppercase tracking-[0.3em] text-emerald-300/90">CENÍK</p>
        <h1 className="mt-3 text-4xl font-semibold leading-tight text-[#f0f4ff] md:text-6xl">
          Zjistěte cenu za 2 minuty.
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-[#f0f4ff]/80">
          Bez skrytých poplatků. Bez závazků. Jen čísla která dávají smysl.
        </p>

        <Link
          href="/cenik/kalkulacka"
          className="mt-8 inline-flex rounded-full bg-[#2563eb] px-8 py-4 text-lg font-medium text-white transition hover:bg-[#1d4ed8]"
        >
          Spočítat cenu →
        </Link>

        <div className="mt-8 grid gap-3 text-sm text-[#d9ffef]/90 md:grid-cols-3 md:text-base">
          <p>✓ Demo do 24 hodin</p>
          <p>✓ Web za 7 dní</p>
          <p>✓ Férová cena</p>
        </div>
      </div>
    </section>
  );
}
