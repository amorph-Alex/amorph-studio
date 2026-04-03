import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import "./globals.css";

const comfortaa = Comfortaa({
  variable: "--font-comfortaa",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: {
    default: "Amorph Studio",
    template: "%s | Amorph Studio",
  },
  description:
    "Studio multidisciplinar de design — planificare urbană, strategii urbane, regenerare urbană, design interior și graphic design.",
  keywords: [
    "amorph studio",
    "planificare urbana",
    "design interior",
    "strategii urbane",
    "regenerare urbana",
    "graphic design",
    "arhitectura",
  ],
  openGraph: {
    title: "Amorph Studio",
    description:
      "Studio multidisciplinar de design — planificare urbană, strategii urbane, regenerare urbană, design interior și graphic design.",
    type: "website",
    locale: "ro_RO",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" className={`${comfortaa.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
