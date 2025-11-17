"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
} from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { NavigationMenuLink, NavigationMenuList } from "../ui/navigation-menu";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { Github, Linkedin, Mail, Menu, Moon, Sun, X } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { useState } from "react";

const navCopy = {
  en: {
    brand: "Rodrigo Gollo",
    home: "Home",
    about: "About",
    experience: "Experience",
    projects: "Projects",
    theme: "Toggle theme",
    language: "Switch language",
    menu: "Menu",
  },
  pt: {
    brand: "Rodrigo Gollo",
    home: "Início",
    about: "Sobre",
    experience: "Experiência",
    projects: "Projetos",
    theme: "Alternar tema",
    language: "Trocar idioma",
    menu: "Menu",
  },
} as const;

const navLinks = [
  { href: "#home", key: "home" },
  { href: "#about", key: "about" },
  { href: "#professional-experience", key: "experience" },
  { href: "#projects", key: "projects" },
] as const;

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

export default function Navbar() {
  const { setTheme, theme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  const copy = navCopy[language];

  const handleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleNavClick = () => setMobileOpen(false);

  return (
    <>
      <NavigationMenu className="font-bold fixed inset-x-0 top-0 z-50 border-b border-border bg-background/95 px-5 py-4 backdrop-blur supports-[backdrop-filter]:bg-background/75 [&_li]:list-none [&_li]:marker:hidden">
        <div className="flex w-full items-center gap-4">
          <NavigationMenuItem className="mr-auto">
            <NavigationMenuLink asChild>
              <Link href="#home">{copy.brand}</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuList className="hidden items-center gap-4 md:flex">
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.key}>
                <NavigationMenuLink asChild>
                  <Link href={link.href}>{copy[link.key]}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>

          <div className="hidden items-center gap-2 md:flex">
            <Button
              variant="outline"
              size="icon"
              onClick={toggleLanguage}
              aria-label={copy.language}
              className="w-12 font-semibold"
            >
              {language.toUpperCase()}
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={handleTheme}
              aria-label={copy.theme}
            >
              <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
            </Button>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label={copy.menu}
          >
            <Menu className="h-[1.2rem] w-[1.2rem]" />
          </Button>
        </div>
      </NavigationMenu>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur">
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between border-b border-border px-6 py-4">
              <span className="text-lg font-semibold">{copy.brand}</span>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-[1.2rem] w-[1.2rem]" />
              </Button>
            </div>

            <div className="flex flex-1 flex-col gap-6 px-6 py-8 text-lg">
              {navLinks.map((link) => (
                <Link
                  key={link.key}
                  href={link.href}
                  onClick={handleNavClick}
                  className="font-medium text-foreground"
                >
                  {copy[link.key]}
                </Link>
              ))}
              <div className="flex gap-3 pt-4">
                <Button
                  variant="outline"
                  onClick={() => {
                    toggleLanguage();
                    setMobileOpen(false);
                  }}
                  aria-label={copy.language}
                  className="flex-1 font-semibold"
                >
                  {language.toUpperCase()}
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    handleTheme();
                    setMobileOpen(false);
                  }}
                  aria-label={copy.theme}
                  className="flex-1"
                >
                  {theme === "light" ? copy.theme : copy.theme}
                </Button>
              </div>
              <div className="flex items-center gap-4 pt-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <Link
                      key={social.label}
                      href={social.href}
                      target={social.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        social.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      aria-label={social.label}
                      className="text-muted-foreground transition-colors hover:text-foreground"
                      onClick={social.href.startsWith("http") ? undefined : handleNavClick}
                    >
                      <Icon className="h-5 w-5" />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
