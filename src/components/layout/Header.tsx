"use client";

import Link from "next/link";
import Image from "next/image";
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
    <header className="w-full bg-background relative">
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
            className="md:hidden flex flex-col gap-1.5 mt-6"
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

      {/* Mobile Menu */}
      {mobileOpen && (
        <nav className="md:hidden px-5 py-4 flex flex-col gap-4 text-lg font-light">
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
                      className="text-muted hover:text-accent transition-colors text-base"
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
