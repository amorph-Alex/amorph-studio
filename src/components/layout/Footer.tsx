import Link from "next/link";

const footerColumns = [
  {
    title: null,
    links: [
      { href: "/", label: "acasă" },
      { href: "/despre-noi", label: "despre noi" },
      { href: "/servicii", label: "servicii" },
      { href: "/blog", label: "blog" },
    ],
  },
  {
    title: null,
    links: [
      { href: "/servicii/planificare-urbana", label: "planificare urbană" },
      { href: "/servicii/strategii-urbane", label: "strategii urbane" },
      { href: "/servicii/regenerare-urbana", label: "regenerare urbană" },
      { href: "/servicii/design-interior", label: "design interior" },
      { href: "/servicii/graphic-design", label: "design grafic" },
      { href: "#", label: "dezvoltare web" },
    ],
  },
  {
    title: null,
    links: [{ href: "/despre-noi", label: "ce este amorph?" }],
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-background border-t border-border">
      {/* Divider dot */}
      <div className="flex items-center justify-center py-4">
        <div className="flex-1 h-px bg-border" />
        <div className="w-3 h-3 bg-foreground rounded-full mx-4" />
        <div className="flex-1 h-px bg-border" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          {footerColumns.map((col, i) => (
            <div key={i} className="flex flex-col gap-2">
              {col.links.map((link) => (
                <Link
                  key={link.href + link.label}
                  href={link.href}
                  className="text-muted hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}

          {/* Contact column */}
          <div className="flex flex-col gap-2">
            <span className="font-medium underline">contact</span>
            <a
              href="mailto:office@amorph.ro"
              className="text-muted hover:text-foreground transition-colors"
            >
              office@amorph.ro
            </a>
            <a
              href="tel:+40747089434"
              className="text-muted hover:text-foreground transition-colors"
            >
              +40 747 089 434
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
