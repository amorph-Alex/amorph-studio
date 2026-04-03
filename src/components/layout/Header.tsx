"use client";

import Link from "next/link";
import { useState } from "react";

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
  { href: "/servicii/graphic-design", label: "graphic design" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="w-full bg-background">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-foreground rounded-full flex items-center justify-center">
            <span className="text-background text-lg font-bold">A</span>
          </div>
          <div className="leading-tight">
            <span className="text-xl font-semibold tracking-wide">amorph</span>
            <br />
            <span className="text-sm tracking-[0.3em] text-muted">
              s t u d i o
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
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
                  className="hover:text-accent transition-colors"
                >
                  {link.label} ♡
                </Link>
                {servicesOpen && (
                  <div className="absolute top-full left-0 pt-2 z-50">
                    <div className="bg-white rounded-lg shadow-lg py-2 min-w-[200px]">
                      {serviceLinks.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="block px-4 py-2 text-sm hover:bg-background hover:text-accent transition-colors"
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
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-foreground transition-transform ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`w-6 h-0.5 bg-foreground transition-opacity ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`w-6 h-0.5 bg-foreground transition-transform ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <nav className="md:hidden border-t border-border px-6 py-4 flex flex-col gap-4 text-sm">
          {navLinks.map((link) => (
            <div key={link.href}>
              <Link
                href={link.href}
                className="hover:text-accent transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
              {link.hasDropdown && (
                <div className="ml-4 mt-2 flex flex-col gap-2">
                  {serviceLinks.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="text-muted hover:text-accent transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      )}
    </header>
  );
}
