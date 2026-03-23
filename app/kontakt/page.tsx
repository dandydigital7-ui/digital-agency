import { PageHero } from "@/components/page-hero";
import { SubpageShell } from "@/components/subpage-shell";

export default function KontaktPage() {
  return (
    <SubpageShell>
      <PageHero
        subtitle="Kontakt"
        title="Pojďme probrat váš projekt."
        description="Napíšete nám pár vět, my se ozveme do 24 hodin s návrhem dalšího postupu."
      />
      <section className="mx-auto mt-10 grid w-full max-w-6xl gap-4 px-4 md:grid-cols-2">
        <article className="surface-card rounded-2xl p-6">
          <h2 className="text-2xl font-medium">Kontaktní údaje</h2>
          <p className="mt-4 text-[#f0f4ff]/75">E-mail: hello@ehstudio.cz</p>
          <p className="mt-2 text-[#f0f4ff]/75">Telefon: +420 777 123 456</p>
          <p className="mt-2 text-[#f0f4ff]/75">Instagram: @ehstudio</p>
        </article>
        <article className="surface-card rounded-2xl p-6">
          <h2 className="text-2xl font-medium">Co nám napsat</h2>
          <p className="mt-4 text-[#f0f4ff]/75">
            V čem podnikáte, co od webu čekáte a jaký máte termín. Na základě toho
            připravíme jasný návrh řešení.
          </p>
        </article>
      </section>
    </SubpageShell>
  );
}
