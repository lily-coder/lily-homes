import { SectionReveal } from "@/components/shared/SectionReveal";
import { STATS } from "@/lib/constants";

export function StatsTestimonials() {
  return (
    <section className="section-spacing bg-surface">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Stats side */}
          <SectionReveal className="space-y-12">
            <div>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-6">
                A Legacy of Loving Homes
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-[36rem] leading-relaxed">
                Our vision is to transform residential spaces into luxury
                masterpieces. Through meticulous fine detailing and a dedication
                to high-end craftsmanship, we create welcoming environments that
                redefine what it means to feel at home.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-y-12 gap-x-8">
              {STATS.map((stat) => (
                <div key={stat.label} className="space-y-2">
                  <div className="font-display-lg text-5xl md:text-6xl text-primary font-bold">
                    {stat.value}
                    <span className="text-on-tertiary-container">
                      {stat.suffix}
                    </span>
                  </div>
                  <div className="font-label-md text-label-md uppercase tracking-widest text-on-surface-variant/80">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </SectionReveal>

          {/* Testimonial side */}
          <SectionReveal delay={0.15}>
            <div className="bg-surface-container p-12 rounded-2xl relative shadow-inner">
              <span className="material-symbols-outlined text-7xl text-on-tertiary-container/20 absolute top-8 left-8">
                format_quote
              </span>
              <div className="relative z-10 pt-8">
                <p className="font-headline-md text-2xl italic text-primary mb-10 leading-relaxed">
                  &ldquo;Lily Home Interiors completely transformed our Muthaiga
                  home. They have an incredible eye for detail and perfectly
                  balanced modern luxury with our personal heritage. The result
                  is a space that feels uniquely ours.&rdquo;
                </p>
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                    SA
                  </div>
                  <div>
                    <div className="font-label-md text-label-md text-primary uppercase tracking-wider">
                      Sarah Amina
                    </div>
                    <div className="font-caption text-caption text-on-surface-variant">
                      Homeowner, Muthaiga Estate
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
