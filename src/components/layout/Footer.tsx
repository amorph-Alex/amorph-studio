import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-background">
      {/* Divider */}
      <div className="max-w-[1440px] mx-auto px-5">
        <div className="flex items-center">
          <div className="flex-1 h-[2px] bg-dark-card" />
          <div className="w-[30px] h-[30px] md:w-[50px] md:h-[50px] bg-foreground rounded-full" />
          <div className="flex-1 h-[2px] bg-dark-card" />
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-5 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-base md:text-lg font-light">
          {/* Column 1 - Main nav */}
          <div className="flex flex-col gap-3">
            <Link href="/" className="hover:text-accent transition-colors">
              acasă
            </Link>
            <Link
              href="/despre-noi"
              className="hover:text-accent transition-colors"
            >
              despre noi
            </Link>
            <Link
              href="/servicii"
              className="hover:text-accent transition-colors"
            >
              servicii
            </Link>
            <Link href="/blog" className="hover:text-accent transition-colors">
              blog
            </Link>
          </div>

          {/* Column 2 - Services */}
          <div className="flex flex-col gap-3">
            <Link
              href="/servicii/planificare-urbana"
              className="hover:text-accent transition-colors"
            >
              planificare urbană
            </Link>
            <Link
              href="/servicii/strategii-urbane"
              className="hover:text-accent transition-colors"
            >
              strategii urbane
            </Link>
            <Link
              href="/servicii/regenerare-urbana"
              className="hover:text-accent transition-colors"
            >
              regenerare urbană
            </Link>
            <Link
              href="/servicii/design-interior"
              className="hover:text-accent transition-colors"
            >
              design interior
            </Link>
            <Link
              href="/servicii/graphic-design"
              className="hover:text-accent transition-colors"
            >
              design grafic
            </Link>
            <span className="text-muted">dezvoltare web</span>
          </div>

          {/* Column 3 - About */}
          <div className="flex flex-col gap-3">
            <Link
              href="/despre-noi"
              className="hover:text-accent transition-colors"
            >
              ce este amorph?
            </Link>
          </div>

          {/* Column 4 - Contact */}
          <div className="flex flex-col gap-3 items-end text-right">
            <span className="underline font-normal">contact</span>
            <a
              href="mailto:office@amorph.ro"
              className="hover:text-accent transition-colors"
            >
              office@amorph.ro
            </a>
            <a
              href="tel:+40747089434"
              className="hover:text-accent transition-colors"
            >
              +40 747 089 434
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
