interface PageHeroProps {
  title: string;
  description: string;
}

export function PageHero({ title, description }: PageHeroProps) {
  return (
    <section className="bg-[#123f68] py-8 text-white sm:py-9">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-black leading-tight md:text-4xl">{title}</h1>
        <p className="mt-2 w-full text-base leading-relaxed text-[#e7eef0] md:text-lg">{description}</p>
      </div>
    </section>
  );
}