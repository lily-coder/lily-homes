"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { LOGO_URL, NAV_LINKS, WHATSAPP_URL } from "@/lib/constants";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const [hash, setHash] = useState("");
  const pathname = usePathname();

  const { scrollY } = useScroll();
  const paddingY = useTransform(scrollY, [0, 80], ["1rem", "0.5rem"]);
  const shadowOpacity = useTransform(scrollY, [0, 80], [0, 0.1]);

  // Track the URL hash so clicking a section link (e.g. /services#portfolio)
  // updates which single nav item is marked active.
  useEffect(() => {
    const update = () => setHash(window.location.hash);
    update();
    window.addEventListener("hashchange", update);
    return () => window.removeEventListener("hashchange", update);
  }, [pathname]);

  // Resolve exactly ONE active link for the current route + hash.
  const activeHref = useMemo(() => {
    const full = `${pathname}${hash}`;
    // 1. Exact match including hash (e.g. /services#portfolio)
    if (NAV_LINKS.some((l) => l.href === full)) return full;
    // 2. Exact page match without hash (e.g. /services -> Services)
    const page = NAV_LINKS.find((l) => l.href === pathname);
    if (page) return page.href;
    // 3. Fallback: a hash-free link whose path matches the route
    const base = NAV_LINKS.find(
      (l) => !l.href.includes("#") && l.href === pathname
    );
    return base?.href ?? pathname;
  }, [pathname, hash]);

  // Hover takes priority; otherwise fall back to the active route link.
  // Both are single values, so only one item is ever highlighted.
  const highlightedHref = hovered ?? activeHref;

  return (
    <>
      <motion.nav
        style={{ paddingTop: paddingY, paddingBottom: paddingY }}
        className="fixed top-0 w-full z-50 bg-surface/80 nav-glass border-b border-secondary-container transition-all duration-500"
      >
        <motion.div
          style={{
            boxShadow: useTransform(
              shadowOpacity,
              (v) => `0 4px 24px rgba(15,39,68,${v})`
            ),
          }}
          className="flex justify-between items-center px-gutter max-w-container-max mx-auto"
        >
          <div className="flex items-center gap-4">
            <Link href="/">
              <Image
                src={LOGO_URL}
                alt="Lily Home Interiors Logo"
                width={40}
                height={40}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <Link
              href="/"
              className="font-headline-md text-2xl text-primary tracking-tight hidden md:block"
            >
              Lily Home Interiors
            </Link>
          </div>

          {/* Desktop nav */}
          <div
            className="hidden lg:flex items-center gap-lg"
            onMouseLeave={() => setHovered(null)}
          >
            {NAV_LINKS.map((link) => {
              const highlighted = highlightedHref === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onMouseEnter={() => setHovered(link.href)}
                  className={`relative font-label-md text-label-md uppercase tracking-widest pb-1 transition-colors duration-300 ${
                    highlighted ? "text-gold-accent" : "text-secondary"
                  }`}
                >
                  {link.label}
                  {highlighted && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-0 right-0 -bottom-0.5 h-0.5 bg-gold-accent"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-4">
            <Link
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-on-primary px-8 py-3 rounded-lg font-label-md uppercase tracking-widest hidden sm:block hover:scale-[1.03] transition-transform shadow-luxury"
            >
              Book Consultation
            </Link>

            {/* Mobile hamburger */}
            <button
              aria-label="Toggle menu"
              className="lg:hidden text-primary p-1"
              onClick={() => setMobileOpen((o) => !o)}
            >
              <span className="material-symbols-outlined text-2xl">
                {mobileOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </motion.div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden overflow-hidden bg-surface-container border-t border-outline-variant"
            >
              <div className="flex flex-col gap-5 max-w-container-max mx-auto px-gutter py-6">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`font-label-md text-label-md uppercase transition-colors ${
                      activeHref === link.href
                        ? "text-gold-accent"
                        : "text-primary hover:text-gold-accent"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-on-primary w-full py-3 rounded-lg font-label-md text-label-md uppercase tracking-widest text-center mt-2"
                  onClick={() => setMobileOpen(false)}
                >
                  Book Consultation
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
