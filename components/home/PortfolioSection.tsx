import Image from "next/image";
import Link from "next/link";
import { SectionReveal } from "@/components/shared/SectionReveal";
import { HOME_PORTFOLIO_ITEMS } from "@/lib/constants";

export function PortfolioSection() {
  return (
    <section className="section-spacing bg-surface-container-low" id="portfolio">
      <div className="max-w-container-max mx-auto px-gutter">
        {/* Header */}
        <SectionReveal className="flex flex-col md:flex-row mb-xl gap-md justify-between items-center text-center md:text-left">
          <div>
            <span className="font-label-md text-label-md uppercase tracking-[0.3em] text-gold-accent mb-4 block">
              Our Gallery
            </span>
            <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">
              Masterpieces in Comfort
            </h2>
          </div>
          <Link
            href="/services#portfolio"
            className="font-label-md text-label-md uppercase tracking-widest text-primary hover:text-gold-accent transition-all flex items-center gap-3 group"
          >
            Full Portfolio{" "}
            <span className="material-symbols-outlined transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
              north_east
            </span>
          </Link>
        </SectionReveal>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {HOME_PORTFOLIO_ITEMS.map((item, i) => (
            <SectionReveal key={item.alt} delay={(i % 3) * 0.075}>
              <div className="aspect-[4/5] rounded-xl overflow-hidden relative group cursor-pointer shadow-luxury">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Always-on subtle gradient for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-all duration-500 flex flex-col justify-end p-8">
                  <span className="text-white font-label-md uppercase tracking-widest translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    {item.label}
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
