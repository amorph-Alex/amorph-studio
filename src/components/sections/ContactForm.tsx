"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: integrate with email service or API
    console.log("Form submitted:", formData);
  };

  return (
    <section className="max-w-[1440px] mx-auto px-5 py-12">
      <h2 className="text-5xl md:text-[90px] font-normal text-center mb-6">
        hai să vorbim
      </h2>
      <p className="text-sm md:text-base font-light text-foreground mb-8 max-w-[820px] mx-auto">
        Știm că în foarte multe situații domeniul construcțiilor poate fi confuz.
        Ne puteți adresa orice întrebare și vă vom răspunde în maxim 24h de la
        întrebarea dumneavoastră.
      </p>

      <form
        onSubmit={handleSubmit}
        className="max-w-[774px] mx-auto space-y-4"
      >
        <input
          type="text"
          placeholder="Nume și prenume*"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-5 py-2.5 bg-dark text-platinum placeholder:text-platinum/60 rounded-full text-lg font-light outline-none focus:ring-2 focus:ring-accent"
        />
        <input
          type="email"
          placeholder="Email*"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-5 py-2.5 bg-dark text-platinum placeholder:text-platinum/60 rounded-full text-lg font-light outline-none focus:ring-2 focus:ring-accent"
        />
        <input
          type="tel"
          placeholder="Telefon"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full px-5 py-2.5 bg-dark text-platinum placeholder:text-platinum/60 rounded-full text-lg font-light outline-none focus:ring-2 focus:ring-accent"
        />
        <textarea
          placeholder="Cu ce vă putem ajuta?"
          rows={5}
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          className="w-full px-5 py-4 bg-dark text-platinum placeholder:text-platinum/60 rounded-[25px] text-lg font-light outline-none focus:ring-2 focus:ring-accent resize-none"
        />
        <div className="flex justify-center pt-2">
          <button
            type="submit"
            className="px-10 py-2.5 bg-accent text-foreground rounded-full text-lg font-normal hover:bg-accent-hover transition-colors"
          >
            Trimite!
          </button>
        </div>
      </form>
    </section>
  );
}
