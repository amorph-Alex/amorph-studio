import type { Metadata } from "next";
import { pageMetadata, SITE_DESCRIPTION } from "@/lib/site";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import AboutTeaser from "@/components/sections/AboutTeaser";
import Promisiune from "@/components/sections/Promisiune";
import ContactForm from "@/components/sections/ContactForm";
import BlogPreview from "@/components/sections/BlogPreview";
import SectionDivider from "@/components/ui/SectionDivider";

export const metadata: Metadata = pageMetadata({
  title: "Amorph Studio: studio multidisciplinar de urbanism și design",
  description: SITE_DESCRIPTION,
  path: "/",
  absoluteTitle: true,
});

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <SectionDivider />
        <AboutTeaser />
        <Promisiune />
        <ContactForm />
        <SectionDivider />
        <BlogPreview />
      </main>
      <Footer />
    </>
  );
}
