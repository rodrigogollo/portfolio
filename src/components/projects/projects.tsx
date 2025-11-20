"use client";

import Header from "@/components/header/header";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/components/language-provider";

interface BaseProject {
  id: string;
  title: string;
  description: string;
  stack: readonly string[];
  href: string;
}

interface LanguageCopy {
  header: {
    title: string;
    desc: string;
  };
  linkLabel: string;
  projects: BaseProject[];
}

type ProjectEntry = BaseProject;

const projectCopy: Record<string, LanguageCopy> = {
  en: {
    header: {
      title: "Projects",
      desc: "Selected personal projects I'm proud of.",
    },
    linkLabel: "View on GitHub",
    projects: [
      {
        id: "spotify-pocket",
        title: "Spotify Pocket",
        description:
          "Winamp-inspired desktop Spotify player that handles local playback, authentication, playlists, and library browsing.",
        stack: ["Rust", "Tauri 2.0", "React", "TypeScript"],
        href: "https://github.com/rodrigogollo/spotify-pocket",
      },
      {
        id: "go-twitch-clips-to-video",
        title: "Twitch Clips to Video",
        description:
          "Downloads Twitch clips via API, stitches them with FFmpeg, and outputs a ready-to-share video using a concurrent Go pipeline.",
        stack: ["Golang", "Twitch API", "FFmpeg"],
        href: "https://github.com/rodrigogollo/go-twitch-clips-to-video",
      },
      {
        id: "portfolio",
        title: "Portfolio (This Site)",
        description:
          "Personal portfolio showcasing who I am, my experience, and my favorite projects.",
        stack: ["Next.js", "React", "Tailwind CSS", "shadcn/ui"],
        href: "https://github.com/rodrigogollo/portfolio",
      },
    ],
  },
  pt: {
    header: {
      title: "Projetos",
      desc: "Alguns projetos pessoais que eu tenho orgulho.",
    },
    linkLabel: "Ver no GitHub",
    projects: [
      {
        id: "spotify-pocket",
        title: "Spotify Pocket",
        description:
          "Player desktop para Spotify inspirado no Winamp. Controla reprodução local, autenticação, playlists e navegação da biblioteca.",
        stack: ["Rust", "Tauri 2.0", "React", "TypeScript"],
        href: "https://github.com/rodrigogollo/spotify-pocket",
      },
      {
        id: "go-twitch-clips-to-video",
        title: "Twitch Clips to Video",
        description:
          "Baixa clipes da Twitch via API, mescla tudo com FFmpeg e gera um vídeo completo usando um pipeline concorrente em Go.",
        stack: ["Golang", "Twitch API", "FFmpeg"],
        href: "https://github.com/rodrigogollo/go-twitch-clips-to-video",
      },
      {
        id: "velvet-cake-jar",
        title: "Velvet Cake Jar",
        description:
          "Landing page simples construída com um template HTML5 para ajudar uma confeitaria a validar pedidos rapidamente.",
        stack: ["HTML5", "CSS", "JavaScript"],
        href: "https://github.com/rodrigogollo/velvet-cake-jar",
      },
      {
        id: "portfolio",
        title: "Portfólio (Este Site)",
        description:
          "Portfólio pessoal para apresentar quem sou, minha experiência e meus projetos favoritos.",
        stack: ["Next.js", "React", "Tailwind CSS", "shadcn/ui"],
        href: "https://github.com/rodrigogollo/portfolio",
      },
    ],
  },
};

export default function Projects() {
  const { language } = useLanguage();
  const copy = projectCopy[language];
  const allProjectIds = copy.projects.map((project) => project.id);

  return (
    <section
      id="projects"
      className="scroll-mt-8 min-h-screen flex flex-col justify-center py-24"
    >
      <Header title={copy.header.title} desc={copy.header.desc} />

      <div className="mt-12 w-full max-w-6xl mx-auto">
        <div className="lg:hidden">
          <Accordion
            type="multiple"
            defaultValue={allProjectIds}
            className="space-y-4"
          >
            {copy.projects.map((project) => (
              <AccordionItem key={project.id} value={project.id}>
                <AccordionTrigger>{project.title}</AccordionTrigger>
                <AccordionContent>
                  <ProjectBody project={project} linkLabel={copy.linkLabel} />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-6">
          {copy.projects.map((project) => (
            <article
              key={project.id}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-foreground">
                {project.title}
              </h3>
              <ProjectBody project={project} linkLabel={copy.linkLabel} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectBody({
  project,
  linkLabel,
}: {
  project: ProjectEntry;
  linkLabel: string;
}) {
  return (
    <>
      <p className="text-foreground">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-2 text-sm">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-primary/10 px-3 py-1 text-primary"
          >
            {tech}
          </span>
        ))}
      </div>
      <Link
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline hover:text-primary/80"
      >
        {linkLabel}
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 12h14M12 5l7 7-7 7"
          />
        </svg>
      </Link>
    </>
  );
}
