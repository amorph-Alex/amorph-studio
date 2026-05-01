"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

type PillState = "closed" | "services" | "contact";

const navLinks: {
  href: string;
  label: string;
  expandTo?: Exclude<PillState, "closed">;
}[] = [
  { href: "/", label: "acasă" },
  { href: "/despre-noi", label: "despre noi" },
  { href: "/servicii", label: "servicii", expandTo: "services" },
  { href: "/blog", label: "blog" },
  { href: "/contact", label: "contact", expandTo: "contact" },
];

const serviceLinks = [
  { href: "/servicii/planificare-urbana", label: "planificare urbană" },
  { href: "/servicii/strategii-urbane", label: "strategii urbane" },
  { href: "/servicii/regenerare-urbana", label: "regenerare urbană" },
  { href: "/servicii/design-interior", label: "design interior" },
  { href: "/servicii/graphic-design", label: "design grafic" },
  { href: "/servicii/dezvoltare-web", label: "dezvoltare web" },
];

const BOUNCY = "cubic-bezier(.34,1.56,.64,1)";
// Non-overshooting smooth-out — used for border-radius so bouncy interpolation
// doesn't briefly push the value below 0 (which would clamp to sharp corners).
const SMOOTH_OUT = "cubic-bezier(.22,1,.36,1)";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [pillState, setPillState] = useState<PillState>("closed");
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      const isScrolled = window.scrollY > 80;
      setScrolled(isScrolled);
      if (!isScrolled) setPillState("closed");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const isExpanded = pillState !== "closed";

  return (
    <>
      {/* Top header — slides up and fades out on scroll */}
      <header
        className={`w-full bg-background transition-all duration-300 ${
          scrolled
            ? "opacity-0 pointer-events-none -translate-y-3"
            : "opacity-100 translate-y-0"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-5 pt-6 pb-0">
          {/* Top section: Logo + Nav */}
          <div className="flex items-start justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-4">
              <Image
                src="/images/logo.png"
                alt="Amorph Studio"
                width={150}
                height={150}
                className="w-[80px] h-[80px] md:w-[150px] md:h-[150px]"
                priority
              />
              <div className="leading-tight">
                <span className="text-3xl md:text-6xl font-bold tracking-wide text-foreground">
                  amorph
                </span>
                <br />
                <span className="text-lg md:text-4xl font-light tracking-[0.3em] text-foreground">
                  studio
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex flex-col items-end gap-2 text-2xl font-light pt-4">
              {navLinks.map((link) =>
                link.expandTo === "services" ? (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className="hover:text-accent transition-colors flex items-center gap-2"
                    >
                      {link.label} ♡
                    </Link>
                    {servicesOpen && (
                      <div className="absolute top-full right-0 pt-2 z-50">
                        <div className="bg-platinum rounded-lg shadow-lg py-2 min-w-[250px]">
                          {serviceLinks.map((service) => (
                            <Link
                              key={service.href}
                              href={service.href}
                              className="block px-4 py-2 text-lg hover:text-accent transition-colors"
                            >
                              {service.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden flex items-center justify-center mt-5 p-1"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <path d="M4 7h16M4 17h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Divider line with centered dot */}
          <div className="relative mt-6">
            <div className="absolute left-1/2 -translate-x-1/2 -top-[170px] w-px h-[170px] bg-foreground hidden md:block" />
            <div className="flex items-center">
              <div className="flex-1 h-[2px] bg-dark-card" />
              <div className="w-[30px] h-[30px] md:w-[50px] md:h-[50px] bg-foreground rounded-full mx-0 -mt-[2px]" />
              <div className="flex-1 h-[2px] bg-dark-card" />
            </div>
          </div>
        </div>

        {/* Mobile drawer */}
        {mobileOpen && (
          <nav className="md:hidden px-5 pt-3 pb-6 flex flex-col gap-[18px] text-xl font-light border-b border-border">
            {navLinks.map((link) => (
              <div key={link.href}>
                {link.expandTo === "services" ? (
                  <Link
                    href={link.href}
                    className="flex items-center justify-between"
                    onClick={() => setMobileOpen(false)}
                  >
                    <span className={isActive(link.href) ? "text-accent" : ""}>
                      {link.label}
                    </span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </Link>
                ) : (
                  <Link
                    href={link.href}
                    className={isActive(link.href) ? "text-accent" : "hover:text-accent transition-colors"}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        )}
      </header>

      {/* Floating bottom pill — appears when scrolled */}
      <div
        className={`fixed bottom-7 left-0 right-0 flex justify-center z-50 pointer-events-none px-4 transition-all duration-300 ${
          scrolled ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <div
          className="pointer-events-auto flex flex-col items-stretch bg-dark text-platinum"
          style={{
            borderRadius: isExpanded ? 28 : 999,
            padding: isExpanded ? "18px 22px" : "10px 12px",
            minWidth: "min(540px, calc(100vw - 32px))",
            boxShadow: "0 12px 40px rgba(0,0,0,0.25), 0 2px 8px rgba(0,0,0,0.12)",
            transition: `border-radius 500ms ${SMOOTH_OUT}, padding 500ms ${BOUNCY}`,
          }}
        >
          {/* Services panel — always mounted, animates height via grid-rows trick */}
          <div
            className="grid"
            style={{
              gridTemplateRows: pillState === "services" ? "1fr" : "0fr",
              transition: `grid-template-rows 500ms ${BOUNCY}`,
            }}
          >
            <div className="overflow-hidden min-h-0">
              <div
                className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3.5 px-2 md:px-2.5 pb-3 mb-3 border-b border-white/10"
                style={{
                  opacity: pillState === "services" ? 1 : 0,
                  transform:
                    pillState === "services"
                      ? "translateY(0)"
                      : "translateY(-6px)",
                  transition: `opacity 280ms ease, transform 450ms ${BOUNCY}`,
                  transitionDelay: pillState === "services" ? "120ms" : "0ms",
                }}
              >
                {serviceLinks.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    tabIndex={pillState === "services" ? 0 : -1}
                    aria-hidden={pillState !== "services"}
                    className="text-xs md:text-sm font-light opacity-90 hover:text-accent transition-colors"
                    onClick={() => setPillState("closed")}
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Contact panel — always mounted, animates height via grid-rows trick */}
          <div
            className="grid"
            style={{
              gridTemplateRows: pillState === "contact" ? "1fr" : "0fr",
              transition: `grid-template-rows 500ms ${BOUNCY}`,
            }}
          >
            <div className="overflow-hidden min-h-0">
              <div
                className="flex flex-col md:flex-row gap-2.5 md:gap-[22px] px-2 md:px-2.5 pb-3 md:pb-[18px] mb-3 border-b border-white/10"
                style={{
                  opacity: pillState === "contact" ? 1 : 0,
                  transform:
                    pillState === "contact"
                      ? "translateY(0)"
                      : "translateY(-6px)",
                  transition: `opacity 280ms ease, transform 450ms ${BOUNCY}`,
                  transitionDelay: pillState === "contact" ? "120ms" : "0ms",
                }}
              >
                <a
                  href="mailto:office@amorph.ro"
                  tabIndex={pillState === "contact" ? 0 : -1}
                  aria-hidden={pillState !== "contact"}
                  onClick={() => setPillState("closed")}
                  className="flex items-center gap-2.5 hover:text-accent transition-colors"
                >
                  <span className="w-[26px] h-[26px] rounded-full bg-accent inline-flex items-center justify-center shrink-0 text-foreground">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path d="M3 7l9 6 9-6" />
                    </svg>
                  </span>
                  <span className="text-[13px] md:text-sm font-normal">
                    office@amorph.ro
                  </span>
                </a>
                <a
                  href="tel:+40747089434"
                  tabIndex={pillState === "contact" ? 0 : -1}
                  aria-hidden={pillState !== "contact"}
                  onClick={() => setPillState("closed")}
                  className="flex items-center gap-2.5 hover:text-accent transition-colors"
                >
                  <span className="w-[26px] h-[26px] rounded-full bg-accent inline-flex items-center justify-center shrink-0 text-foreground">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </span>
                  <span className="text-[13px] md:text-sm font-normal">
                    +40 747 089 434
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Main pill row */}
          <div className="flex items-center gap-1 md:gap-1.5 justify-between">
            <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-platinum flex items-center justify-center shrink-0">
              <Image
                src="/images/logo.png"
                alt=""
                width={26}
                height={26}
                className="w-[82%] h-[82%] object-contain"
              />
            </div>
            {navLinks.map((link) => {
              const expandedHere =
                link.expandTo !== undefined && pillState === link.expandTo;
              const active = isActive(link.href) || expandedHere;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={
                    link.expandTo
                      ? (e) => {
                          e.preventDefault();
                          setPillState((s) =>
                            s === link.expandTo ? "closed" : link.expandTo!
                          );
                        }
                      : undefined
                  }
                  className={`px-2.5 md:px-3.5 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-normal whitespace-nowrap flex items-center gap-1 transition-colors ${
                    active
                      ? "bg-accent text-foreground"
                      : "hover:bg-white/10 text-platinum"
                  }`}
                >
                  {link.label}
                  {link.expandTo && (
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      style={{
                        transform: expandedHere ? "rotate(180deg)" : "none",
                        transition: `transform 500ms ${BOUNCY}`,
                      }}
                    >
                      <path d="M18 15l-6-6-6 6" />
                    </svg>
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
