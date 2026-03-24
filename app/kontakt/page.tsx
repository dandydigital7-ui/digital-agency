import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SubpageShell } from "@/components/subpage-shell";

export const metadata: Metadata = {
  title: "Kontakt | EH Studio",
};

export default function KontaktPage() {
  return (
    <SubpageShell>
      <PageHero
        subtitle="Kontakt"
        title="Kontakt"
        description="Odpovídáme do 24 hodin. Vždy."
      />
      <section className="mx-auto mt-10 grid w-full max-w-6xl gap-4 px-4">
        <article className="surface-card rounded-2xl p-6">
          <h2 className="text-2xl font-medium">Kontaktní údaje</h2>
          <p className="mt-4 text-[#f0f4ff]/75">E-mail: hello@ehstudio.cz</p>
          <p className="mt-2 text-[#f0f4ff]/75">Telefon: +420 777 123 456</p>
          <p className="mt-2 text-[#f0f4ff]/75">Instagram: @ehstudio</p>
        </article>
      </section>
    </SubpageShell>
  );
}
