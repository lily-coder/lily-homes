import Link from "next/link";
import Image from "next/image";
import { LOGO_URL, SOCIAL_LINKS } from "@/lib/constants";
import { SocialIcon } from "@/components/shared/SocialIcon";

const companyLinks = [
  { label: "About Us", href: "/#about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/services#portfolio" },
];

const supportLinks = [
  { label: "Contact", href: "/services#contact" },
  { label: "Privacy Policy", href: "#" },
  { label: "Careers", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-on-primary pt-xl pb-10" id="footer">
      <div className="max-w-container-max mx-auto px-gutter">
        {/* Main columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-12 gap-y-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-5 lg:col-span-6">
            <div className="flex items-center gap-4 mb-6">
              <Image
                src={LOGO_URL}
                alt="Lily Home Interiors Logo"
                width={48}
                height={48}
                className="h-12 w-auto object-contain invert grayscale mix-blend-screen"
              />
              <span className="font-headline-md text-2xl lg:text-3xl text-on-primary tracking-tight whitespace-nowrap">
                Lily Home Interiors
              </span>
            </div>
            <p className="font-body-md text-body-md text-inverse-on-surface/70 mb-8 leading-[1.8] max-w-[28rem]">
              Transforming houses into sanctuaries of love and timeless comfort.
              Kenya&apos;s premier boutique interior design studio dedicated to
              exquisite craftsmanship.
            </p>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.platform}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="bg-white/5 p-3 rounded-full text-inverse-on-surface/80 hover:bg-gold-accent hover:text-white transition-all duration-300 hover:-translate-y-0.5"
                >
                  <SocialIcon platform={social.platform} className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Company links */}
          <nav className="md:col-span-2 lg:col-span-2 flex flex-col gap-4">
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-gold-accent mb-2">
              Company
            </span>
            {companyLinks.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-body-md text-inverse-on-surface/70 hover:text-white transition-colors duration-300 w-fit"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Support links */}
          <nav className="md:col-span-2 lg:col-span-2 flex flex-col gap-4">
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-gold-accent mb-2">
              Support
            </span>
            {supportLinks.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-body-md text-inverse-on-surface/70 hover:text-white transition-colors duration-300 w-fit"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Location */}
          <div className="md:col-span-3 lg:col-span-2 flex flex-col gap-4">
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-gold-accent mb-2">
              Location
            </span>
            <p className="text-body-md text-inverse-on-surface/70 leading-[1.9]">
              Kilimani, Nairobi
              <br />
              Kenya
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-inverse-on-surface/50">
            © 2024 Lily Home Interiors. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link
              href="#"
              className="text-sm text-inverse-on-surface/50 hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-sm text-inverse-on-surface/50 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
