import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import AboutTeaser from "@/components/sections/AboutTeaser";
import ContactForm from "@/components/sections/ContactForm";
import BlogPreview from "@/components/sections/BlogPreview";
import SectionDivider from "@/components/ui/SectionDivider";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <SectionDivider />
        <AboutTeaser />
        <SectionDivider />
        <ContactForm />
        <SectionDivider />
        <BlogPreview />
      </main>
      <Footer />
    </>
  );
}
