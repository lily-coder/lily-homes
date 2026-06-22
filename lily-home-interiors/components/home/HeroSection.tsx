import Image from "next/image";
import Link from "next/link";
import { HOME_HERO_IMAGE, LOGO_URL, WHATSAPP_URL } from "@/lib/constants";

export function HeroSection() {
  return (
    <section
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
      id="home"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={HOME_HERO_IMAGE}
          alt="Luxurious Nairobi penthouse living room"
          fill
          priority
          className="object-cover object-center scale-105"
          sizes="100vw"
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-gutter max-w-5xl">
        <Image
          src={LOGO_URL}
          alt="Lily Home Interiors Icon"
          width={80}
          height={80}
          className="mx-auto h-20 w-auto mb-10 invert grayscale mix-blend-screen"
          priority
        />
        <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-white mb-10 drop-shadow-sm">
          Designing homes where comfort thrives and love resides
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-md">
          <Link
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto bg-gold-accent text-white px-10 py-5 rounded-lg font-label-md uppercase tracking-[0.15em] hover:scale-[1.03] transition-transform shadow-xl shadow-gold-accent/20"
          >
            Book a Consultation
          </Link>
          <Link
            href="/services#portfolio"
            className="w-full md:w-auto border border-white/50 backdrop-blur-sm text-white px-10 py-5 rounded-lg font-label-md uppercase tracking-[0.15em] hover:bg-white hover:text-primary transition-all"
          >
            View Portfolio
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-70">
        <span className="material-symbols-outlined text-white text-4xl">
          expand_more
        </span>
      </div>
    </section>
  );
}
