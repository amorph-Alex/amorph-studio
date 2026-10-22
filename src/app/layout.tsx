import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import "./globals.css";
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from "@/lib/site";
import CookieConsent from "@/components/cookies/CookieConsent";

const comfortaa = Comfortaa({
  variable: "--font-comfortaa",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "amorph studio",
    "planificare urbană",
    "PUZ",
    "PUD",
    "analiză teren",
    "strategii urbane",
    "regenerare urbană",
    "design interior",
    "graphic design",
    "dezvoltare web",
  ],
  // Fără `alternates.canonical` aici: s-ar moșteni pe paginile fără canonical propriu.
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "ro_RO",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" className={`${comfortaa.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
