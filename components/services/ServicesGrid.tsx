import { SectionReveal } from "@/components/shared/SectionReveal";
import { SERVICES_GRID } from "@/lib/constants";

export function ServicesGrid() {
  return (
    <section className="section-spacing bg-surface" id="services">
      <div className="max-w-container-max mx-auto px-gutter">
        <SectionReveal className="mb-16 text-center flex flex-col items-center">
          <span className="text-on-tertiary-container font-label-md text-label-md uppercase tracking-[0.3em] mb-4 block">
            Curated Excellence
          </span>
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-6">
            Crafting Your Warmth
          </h2>
          <div className="h-1 w-20 bg-on-tertiary-container mx-auto rounded-full" />
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES_GRID.map((service, i) => (
            <SectionReveal key={service.title} delay={i * 0.1}>
              <div
                className={`group flex flex-col h-full p-10 rounded-xl shadow-luxury hover:shadow-luxury-hover transition-all duration-500 hover:-translate-y-1 ${
                  service.featured
                    ? "bg-surface-container-low border-2 border-on-tertiary-container"
                    : "bg-surface-container-low border border-secondary-container/40"
                }`}
              >
                <div className="mb-8 inline-flex items-center justify-center w-14 h-14 rounded-lg bg-secondary-container text-primary">
                  <span className="material-symbols-outlined text-3xl">
                    {service.icon}
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-primary mb-5">
                  {service.title}
                </h3>
                <p className="text-on-surface-variant font-body-md text-body-md mb-8 flex-grow leading-[1.8]">
                  {service.description}
                </p>
                <div className="flex justify-start items-center pt-6 border-t border-secondary-container">
                  <span className="material-symbols-outlined text-gold-accent group-hover:translate-x-3 transition-transform duration-300">
                    arrow_forward
                  </span>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
