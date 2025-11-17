"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/rodrigogollo",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/rodrigo-gollo",
    icon: Linkedin,
  },
  {
    label: "Email",
    href: "mailto:rodrigogollo.nh@gmail.com",
    icon: Mail,
  },
] as const;

const heroCopy = {
  en: {
    role: "Software Engineer",
    description:
      "Software engineer with a strong focus on performance, reliability, and understanding how systems work under the hood.",
    tagline: "Brazilian & Italian Citizen • EU Work Authorization",
  },
  pt: {
    role: "Engenheiro de Software",
    description:
      "Engenheiro de software com foco em performance, confiabilidade e em entender como os sistemas funcionam por baixo dos panos.",
    tagline: "Cidadania Brasileira e Italiana • Autorização de trabalho na UE",
  },
} as const;

export default function Hero() {
  const { language } = useLanguage();
  const copy = heroCopy[language];

  return (
    <section
      id="home"
      className="w-full flex flex-col items-center justify-center text-center min-h-screen px-8 py-20 scroll-mt-32"
    >
      <h1 className="font-extrabold text-5xl md:text-6xl lg:text-7xl mb-6 text-foreground">
        Rodrigo Gollo
      </h1>

      <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground">
        {copy.role}
      </h2>

      <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
        {copy.description}
      </p>

      <div className="flex items-center justify-center gap-6 mb-8">
        {socialLinks.map((social) => {
          const Icon = social.icon;
          return (
            <Link
              key={social.label}
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel={
                social.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label={social.label}
            >
              <Icon className="w-6 h-6" />
            </Link>
          );
        })}
      </div>

      <div className="inline-flex items-start gap-2 text-muted-foreground text-center sm:flex-row sm:items-center">
        <svg
          className="w-5 h-5 mx-auto sm:mx-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>{copy.tagline}</span>
      </div>
    </section>
  );
}
