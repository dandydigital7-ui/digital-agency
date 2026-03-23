type PageHeroProps = {
  title: string;
  subtitle: string;
  description: string;
};

export function PageHero({ title, subtitle, description }: PageHeroProps) {
  return (
    <section className="relative z-10 mx-auto w-full max-w-6xl px-4 pt-10">
      <div className="surface-card rounded-3xl p-8 md:p-12">
        <p className="text-sm uppercase tracking-[0.3em] text-[#c9a84c]">{subtitle}</p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-[#f0f4ff]/80">{description}</p>
      </div>
    </section>
  );
}
