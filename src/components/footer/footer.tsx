"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/components/language-provider";

const footerCopy = {
  en: {
    title: "© 2025 · Rodrigo Gollo",
    crafted: "Crafted with Next.js, Tailwind CSS, and shadcn/ui.",
    rights: "All rights reserved.",
  },
  pt: {
    title: "© 2025 · Rodrigo Gollo",
    crafted: "Feito com Next.js, Tailwind CSS e shadcn/ui.",
    rights: "Todos os direitos reservados.",
  },
} as const;

const socials = [
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

export default function Footer() {
  const { language } = useLanguage();
  const copy = footerCopy[language];

  return (
    <footer className="border-t border-border py-10 text-center text-sm text-muted-foreground">
      <p className="text-base font-semibold text-foreground">{copy.title}</p>
      <p className="mt-2">{copy.crafted}</p>
      <p className="mt-1">{copy.rights}</p>

      <div className="mt-6 flex items-center justify-center gap-4">
        {socials.map((social) => {
          const Icon = social.icon;
          return (
            <Link
              key={social.label}
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={social.label}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Icon className="h-5 w-5" />
            </Link>
          );
        })}
      </div>
    </footer>
  );
}

