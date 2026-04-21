"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "acasă" },
  { href: "/despre-noi", label: "despre noi" },
  { href: "/servicii", label: "servicii", hasDropdown: true },
  { href: "/blog", label: "blog" },
];

const serviceLinks = [
  { href: "/servicii/planificare-urbana", label: "planificare urbană" },
  { href: "/servicii/strategii-urbane", label: "strategii urbane" },
  { href: "/servicii/regenerare-urbana", label: "regenerare urbană" },
  { href: "/servicii/design-interior", label: "design interior" },
  { href: "/servicii/graphic-design", label: "design grafic" },
  { href: "/servicii/dezvoltare-web", label: "dezvoltare web" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [pillExpanded, setPillExpanded] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      const isScrolled = window.scrollY > 80;
      setScrolled(isScrolled);
      if (!isScrolled) setPillExpanded(false);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

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
                link.hasDropdown ? (
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
                {link.hasDropdown ? (
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
          className="pointer-events-auto flex flex-col items-stretch bg-dark text-platinum transition-all duration-300"
          style={{
            borderRadius: pillExpanded ? 28 : 999,
            padding: pillExpanded ? "18px 22px" : "10px 12px",
            minWidth: "min(540px, calc(100vw - 32px))",
            boxShadow: "0 12px 40px rgba(0,0,0,0.25), 0 2px 8px rgba(0,0,0,0.12)",
          }}
        >
          {/* Services sub-grid — visible when expanded */}
          {pillExpanded && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3.5 px-2 md:px-2.5 pb-3 mb-3 border-b border-white/10">
              {serviceLinks.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="text-xs md:text-sm font-light opacity-90 hover:text-accent transition-colors"
                  onClick={() => setPillExpanded(false)}
                >
                  {s.label}
                </Link>
              ))}
            </div>
          )}

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
              const active = isActive(link.href);
              const expanded = link.hasDropdown && pillExpanded;
              return (
                <Link
                  key={link.href}
                  href={link.hasDropdown ? "#" : link.href}
                  onClick={
                    link.hasDropdown
                      ? (e) => {
                          e.preventDefault();
                          setPillExpanded((v) => !v);
                        }
                      : undefined
                  }
                  className={`px-2.5 md:px-3.5 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-normal whitespace-nowrap flex items-center gap-1 transition-colors ${
                    active || expanded
                      ? "bg-accent text-foreground"
                      : "hover:bg-white/10 text-platinum"
                  }`}
                >
                  {link.label}
                  {link.hasDropdown && (
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      className={`transition-transform duration-200 ${
                        pillExpanded ? "rotate-180" : ""
                      }`}
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
