import { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionDivider from "@/components/ui/SectionDivider";

export const metadata: Metadata = {
  title: "Despre Noi",
  description:
    "Iubim tot ce înseamnă design. Suntem o echipă multidisciplinară dedicată urbanismului, designului interior și graphic design.",
};

export default function DespreNoi() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* About intro */}
        <section className="max-w-[1440px] mx-auto px-5 py-12">
          <div className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-12 items-start">
            <div className="flex justify-center md:justify-start">
              <Image
                src="/images/authors.png"
                alt="Echipa Amorph Studio"
                width={459}
                height={300}
                className="w-full max-w-[459px] h-auto"
              />
            </div>
            <div className="space-y-4 text-sm md:text-base font-light leading-relaxed">
              <p>
                Suntem o echipă multidisciplinară cu o experiență vastă în design
                și proiectare, capabili să abordăm orice tip de proiect,
                indiferent de natura lui.
              </p>
              <p>
                Iubim să ne afundăm în detaliile fine ale creării unui logo sau
                modul în care se îmbină culoarea și textura unui perete din
                dormitor. În același timp, ne dedicăm fiecare minut pentru a
                realiza analize macro-teritoriale relevante, contribuind la
                conturarea unei dezvoltări durabile pentru comunitate.
              </p>
              <p>
                Pasiunea noastră pentru urbanism, strategii urbane, regenerare
                urbană, design interior, design grafic și web development se
                reflectă în fiecare proiect. Fiecare broșură, logo, interfață de
                utilizator sau site web pe care îl dezvoltăm este creat cu
                atenție și grijă, având în vedere atât estetica, cât și
                funcționalitatea.
              </p>
              <p>
                Credem în puterea designului de a transforma spațiile și de a
                îmbunătăți viața oamenilor. Fiecare proiect este o nouă
                oportunitate de a explora creativitatea și inovația, având mereu
                în vedere nevoile și dorințele clienților noștri. Suntem
                dedicați să oferim soluții personalizate și eficiente, adaptate
                fiecărui context specific, și să construim împreună un viitor
                sustenabil și armonios.
              </p>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Big statement */}
        <section className="max-w-[1440px] mx-auto px-5 py-16">
          <h1 className="text-4xl md:text-[72px] font-light leading-tight text-center md:text-left">
            iubim tot ce
            <br />
            înseamnă <span className="font-normal">design</span>
          </h1>
        </section>

        <SectionDivider />

        {/* Philosophy sections */}
        <section className="max-w-[1440px] mx-auto px-5 py-16">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Creativity */}
            <div className="flex items-center gap-8">
              <div className="flex-1">
                <p className="text-2xl md:text-3xl font-normal text-right leading-snug">
                  puțin mai multă
                  <br />
                  <span className="font-bold underline text-3xl md:text-4xl">
                    creativitate
                  </span>
                  <br />
                  <span className="font-light">
                    și foarte multă
                    <br />
                    „ooh! am cam șapte
                    <br />
                    noi idei!"
                  </span>
                </p>
              </div>
              <div className="w-[150px] h-[200px] md:w-[200px] md:h-[280px] bg-dark-card rounded-2xl overflow-hidden flex items-end justify-center">
                <div className="w-[80%] h-[70%] bg-red-600/80 rounded-t-full" />
              </div>
            </div>

            {/* Technical */}
            <div className="flex items-center gap-8">
              <div className="w-[150px] h-[200px] md:w-[200px] md:h-[280px] bg-dark-card rounded-2xl overflow-hidden flex items-end justify-center">
                <div className="w-[80%] h-[70%] bg-accent/80 rounded-t-full" />
              </div>
              <div className="flex-1">
                <p className="text-2xl md:text-3xl font-normal leading-snug">
                  o idee mai
                  <br />
                  <span className="font-bold text-3xl md:text-4xl">tehnic</span>
                  <br />
                  <span className="font-light">
                    și evident că
                    <br />
                    „sigur există o modalitate
                    <br />
                    să facem asta!"
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
