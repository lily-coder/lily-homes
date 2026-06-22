import Link from "next/link";
import { SectionReveal } from "@/components/shared/SectionReveal";
import { HOME_SERVICES } from "@/lib/constants";

export function ServicesSection() {
  return (
    <section className="section-spacing bg-surface-container-low" id="services">
      <div className="max-w-container-max mx-auto px-gutter">
        <SectionReveal className="text-center mb-xl flex flex-col items-center">
          <span className="font-label-md text-label-md uppercase tracking-[0.3em] text-gold-accent mb-4 block">
            Our Expertise
          </span>
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary max-w-2xl">
            Curated Design Journeys
          </h2>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
          {HOME_SERVICES.map((service, i) => {
            const isDark = service.variant === "dark";
            return (
              <SectionReveal key={service.title} delay={i * 0.1}>
                <div
                  className={`group h-full p-10 flex flex-col items-center text-center transition-all duration-500 rounded-xl hover:-translate-y-1 ${
                    isDark
                      ? "bg-primary hover:shadow-card-dark"
                      : "bg-surface-container-lowest border border-secondary-container/40 hover:shadow-luxury-lg"
                  }`}
                >
                  {/* Icon */}
                  <div
                    className={`mb-8 ${
                      isDark ? "text-tertiary-fixed-dim" : "text-gold-accent"
                    }`}
                  >
                    <span className="material-symbols-outlined text-6xl">
                      {service.icon}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className={`font-headline-md text-headline-md mb-4 ${
                      isDark ? "text-on-primary" : "text-primary"
                    }`}
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`font-body-md text-body-md mb-10 leading-[1.8] ${
                      isDark ? "text-secondary-fixed-dim" : "text-secondary"
                    }`}
                  >
                    {service.description}
                  </p>

                  {/* Features list */}
                  {service.features && (
                    <ul className="text-left text-sm text-secondary mb-10 space-y-3 mx-auto max-w-[200px]">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-center gap-3">
                          <span className="material-symbols-outlined text-lg text-gold-accent">
                            check_circle
                          </span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Price + CTA */}
                  <div className="mt-auto">
                    <p
                      className={`font-label-md text-xs uppercase tracking-widest mb-2 ${
                        isDark
                          ? "text-secondary-fixed-dim"
                          : "text-on-surface-variant"
                      }`}
                    >
                      {service.priceLabel}
                    </p>
                    <p
                      className={`text-3xl font-semibold mb-8 ${
                        isDark ? "text-on-primary" : "text-primary"
                      }`}
                    >
                      {service.price}
                    </p>
                    <Link
                      href="/services"
                      className={`inline-flex items-center gap-2 font-label-md uppercase tracking-widest group-hover:gap-4 transition-all ${
                        isDark ? "text-tertiary-fixed-dim" : "text-gold-accent"
                      }`}
                    >
                      Explore{" "}
                      <span className="material-symbols-outlined text-lg">
                        arrow_forward
                      </span>
                    </Link>
                  </div>
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
