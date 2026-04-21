"use client";

import { useState } from "react";

type FormState = "idle" | "error" | "loading" | "success";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [formState, setFormState] = useState<FormState>("idle");

  const hasErrors =
    formData.name.trim() === "" || formData.email.trim() === "";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (hasErrors) {
      setFormState("error");
      return;
    }

    setFormState("loading");
    // Simulate API call — replace with real integration
    await new Promise((r) => setTimeout(r, 1500));
    setFormState("success");
  };

  const inputBase =
    "w-full px-5 py-2.5 bg-dark text-platinum placeholder:text-platinum/60 rounded-full text-lg font-light outline-none focus:ring-2 focus:ring-accent";

  if (formState === "success") {
    return (
      <section className="max-w-[1440px] mx-auto px-5 py-12">
        <h2 className="text-5xl md:text-[90px] font-normal text-center mb-6">
          hai să vorbim
        </h2>
        <p className="text-sm md:text-base font-light text-foreground mb-8 max-w-[820px] mx-auto text-center">
          Știm că în foarte multe situații domeniul construcțiilor poate fi
          confuz. Ne puteți adresa orice întrebare și vă vom răspunde în maxim
          24h de la întrebarea dumneavoastră.
        </p>
        <div className="max-w-[774px] mx-auto mt-8 px-8 py-12 bg-dark text-platinum rounded-[25px] text-center">
          <div className="w-16 h-16 rounded-full bg-accent mx-auto mb-5 flex items-center justify-center">
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#2d2d2d"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <path d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div className="text-[28px] font-normal mb-2">Mulțumim!</div>
          <div className="text-sm md:text-base font-light opacity-80">
            Am primit mesajul tău. Revenim în maxim 24h.
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-[1440px] mx-auto px-5 py-12">
      <h2 className="text-5xl md:text-[90px] font-normal text-center mb-6">
        hai să vorbim
      </h2>
      <p className="text-sm md:text-base font-light text-foreground mb-8 max-w-[820px] mx-auto text-center">
        Știm că în foarte multe situații domeniul construcțiilor poate fi
        confuz. Ne puteți adresa orice întrebare și vă vom răspunde în maxim
        24h de la întrebarea dumneavoastră.
      </p>

      <form onSubmit={handleSubmit} className="max-w-[774px] mx-auto space-y-4">
        <input
          type="text"
          placeholder="Nume și prenume*"
          value={formData.name}
          onChange={(e) => {
            setFormData({ ...formData, name: e.target.value });
            if (formState === "error") setFormState("idle");
          }}
          className={`${inputBase} ${
            formState === "error" && formData.name.trim() === ""
              ? "ring-2 ring-[#e04f3e]"
              : ""
          }`}
        />
        <input
          type="email"
          placeholder="Email*"
          value={formData.email}
          onChange={(e) => {
            setFormData({ ...formData, email: e.target.value });
            if (formState === "error") setFormState("idle");
          }}
          className={`${inputBase} ${
            formState === "error" && formData.email.trim() === ""
              ? "ring-2 ring-[#e04f3e]"
              : ""
          }`}
        />
        <input
          type="tel"
          placeholder="Telefon"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className={inputBase}
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
        {formState === "error" && (
          <p className="text-[13px] text-[#e04f3e] px-1">
            Te rog completează câmpurile obligatorii marcate cu *.
          </p>
        )}
        <div className="flex justify-center pt-2">
          <button
            type="submit"
            disabled={formState === "loading"}
            className={`px-10 py-2.5 rounded-full text-lg font-normal transition-colors ${
              formState === "loading"
                ? "bg-muted text-platinum cursor-wait"
                : "bg-accent text-foreground hover:bg-accent-hover"
            }`}
          >
            {formState === "loading" ? "Se trimite..." : "Trimite!"}
          </button>
        </div>
      </form>
    </section>
  );
}
