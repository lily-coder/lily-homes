import Image from "next/image";
import Link from "next/link";
import { SERVICES_HERO_IMAGE } from "@/lib/constants";

export function ServicesHero() {
  return (
    <section className="relative h-[75vh] min-h-[560px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={SERVICES_HERO_IMAGE}
          alt="Luxurious interior design project in Nairobi"
          fill
          priority
          className="object-cover object-center scale-105"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 hero-overlay z-10" />
      <div className="relative z-20 text-center px-gutter max-w-4xl pt-16">
        <span className="font-label-md text-label-md uppercase tracking-[0.3em] text-tertiary-fixed-dim mb-6 block">
          Services &amp; Portfolio
        </span>
        <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-white mb-6 drop-shadow-sm">
          Homes Filled with Warmth &amp; Love
        </h1>
        <p className="font-body-lg text-body-lg text-white/90 mb-10 max-w-2xl mx-auto">
          Designing homes where comfort thrives and love resides. Our vision is
          to transform residential spaces into luxury masterpieces through
          meticulous fine detailing.
        </p>
        <Link
          href="#services"
          className="bg-gold-accent text-white px-10 py-4 rounded-lg font-label-md text-label-md uppercase tracking-[0.15em] shadow-xl shadow-gold-accent/20 hover:scale-[1.03] transition-transform inline-block"
        >
          Our Services
        </Link>
      </div>
    </section>
  );
}
