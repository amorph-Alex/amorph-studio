import Image from "next/image";

export default function AboutTeaser() {
  return (
    <section className="max-w-[1440px] mx-auto px-5 py-12">
      <div className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-12 items-start">
        {/* Authors illustration */}
        <div className="flex justify-center md:justify-start">
          <Image
            src="/images/authors.png"
            alt="Echipa Amorph Studio"
            width={459}
            height={300}
            className="w-full max-w-[459px] h-auto"
          />
        </div>

        {/* Text content */}
        <div className="space-y-4 text-sm md:text-base font-light leading-relaxed text-foreground">
          <p>
            Suntem o echipă multidisciplinară cu o experiență vastă în design și
            proiectare, capabili să abordăm orice tip de proiect, indiferent de
            natura lui.
          </p>
          <p>
            Iubim să ne afundăm în detaliile fine ale creării unui logo sau modul
            în care se îmbină culoarea și textura unui perete din dormitor. În
            același timp, ne dedicăm fiecare minut pentru a realiza analize
            macro-teritoriale relevante, contribuind la conturarea unei
            dezvoltări durabile pentru comunitate.
          </p>
          <p>
            Pasiunea noastră pentru urbanism, strategii urbane, regenerare
            urbană, design interior, design grafic și web development se reflectă
            în fiecare proiect. Fiecare broșură, logo, interfață de utilizator
            sau site web pe care îl dezvoltăm este creat cu atenție și grijă,
            având în vedere atât estetica, cât și funcționalitatea.
          </p>
          <p>
            Credem în puterea designului de a transforma spațiile și de a
            îmbunătăți viața oamenilor. Fiecare proiect este o nouă oportunitate
            de a explora creativitatea și inovația, având mereu în vedere
            nevoile și dorințele clienților noștri. Suntem dedicați să oferim
            soluții personalizate și eficiente, adaptate fiecărui context
            specific, și să construim împreună un viitor sustenabil și armonios.
          </p>
        </div>
      </div>
    </section>
  );
}
