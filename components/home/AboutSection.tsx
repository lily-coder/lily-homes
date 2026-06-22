import Image from "next/image";
import { SectionReveal } from "@/components/shared/SectionReveal";
import { ABOUT_IMAGE } from "@/lib/constants";

export function AboutSection() {
  return (
    <section className="section-spacing overflow-hidden" id="about">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-xl">
          {/* Image column */}
          <SectionReveal className="relative">
            <div className="aspect-[4/5] relative z-10 overflow-hidden rounded-xl">
              <Image
                src={ABOUT_IMAGE}
                alt="Artistic shot of interior textures"
                fill
                className="object-cover object-center hover:scale-105 transition-transform duration-1000"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-secondary-container/30 -z-0 rounded-xl" />
            <div className="absolute -top-8 -left-8 border-2 border-gold-accent/40 w-40 h-40 -z-0 rounded-xl" />
          </SectionReveal>

          {/* Text column */}
          <SectionReveal
            delay={0.15}
            className="space-y-md text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            <span className="font-label-md text-label-md uppercase tracking-[0.4em] text-gold-accent">
              The Lily Story
            </span>
            <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary leading-[1.1] max-w-[32rem]">
              Our Philosophy: Homes Filled with Warmth
            </h2>
            <div className="w-24 h-1 bg-gold-accent/60 my-4" />
            <p className="font-body-lg text-body-lg text-secondary leading-[1.8]">
              Transforming homes into luxury masterpieces where fine details and
              sophisticated comfort converge to create a truly welcoming
              sanctuary.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant leading-[1.8]">
              Our design philosophy bridges international standards with the
              vibrant spirit of East African craftsmanship. Each project is a
              meticulous curation of texture, light, and form, ensuring that
              every corner of your home resonates with sophistication.
            </p>
            <div className="pt-8">
              <button className="border-b-2 border-primary text-primary font-label-md uppercase tracking-[0.2em] pb-2 hover:text-gold-accent hover:border-gold-accent transition-all hover:scale-[1.03]">
                Learn more about our vision
              </button>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
