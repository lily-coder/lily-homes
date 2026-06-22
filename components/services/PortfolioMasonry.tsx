import Image from "next/image";
import { SectionReveal } from "@/components/shared/SectionReveal";
import { SERVICES_PORTFOLIO_ITEMS } from "@/lib/constants";

export function PortfolioMasonry() {
  return (
    <section className="section-spacing bg-surface-container-low" id="portfolio">
      <div className="max-w-container-max mx-auto px-gutter">
        <SectionReveal className="mb-16 text-center flex flex-col items-center">
          <span className="text-on-tertiary-container font-label-md text-label-md uppercase tracking-[0.3em] mb-4 block">
            Our Work
          </span>
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-6">
            Design Portfolio
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto leading-[1.8]">
            Step inside our gallery of homes designed with heart. Discover how
            we bring warmth and sophisticated love to residences across Nairobi.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_PORTFOLIO_ITEMS.map((item, i) => (
            <SectionReveal key={item.alt} delay={(i % 3) * 0.1}>
              <div
                className={`group relative overflow-hidden rounded-xl shadow-luxury ${
                  item.aspectRatio === "square" ? "aspect-square" : "aspect-[4/5]"
                }`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-1000"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Always-on subtle gradient for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
                {/* Hover overlay with detail */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <div className="text-white translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="font-label-md text-caption uppercase tracking-[0.2em] text-tertiary-fixed-dim mb-2 block">
                      {item.category}
                    </span>
                    <h4 className="font-headline-md text-headline-md">
                      {item.title}
                    </h4>
                  </div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="px-10 py-4 border-2 border-primary text-primary rounded-lg font-label-md text-label-md uppercase tracking-widest hover:bg-primary hover:text-white transition-all shadow-luxury">
            View Full Portfolio
          </button>
        </div>
      </div>
    </section>
  );
}
