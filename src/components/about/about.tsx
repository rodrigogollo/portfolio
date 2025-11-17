"use client";

import Header from "@/components/header/header";
import Image from "next/image";
import { useLanguage } from "@/components/language-provider";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

const aboutCopy = {
  en: {
    header: {
      title: "About Me",
      desc: "Software engineer with a strong focus on performance, reliability, and understanding how systems work under the hood.",
    },
    paragraphs: [
      `I'm a Software Engineer with experience building scalable web applications and AI-powered solutions. Currently working remotely at Math Group since August 2019.`,
      `My expertise spans full-stack development with the MERN stack, modern frameworks like Next.js and TypeScript, and cloud services including AWS and Azure. I have a proven track record of shipping successful end-to-end web applications.`,
      `I'm particularly passionate about AI integration and have delivered chatbot solutions using AWS Bedrock, Polly, Transcribe, and Lambda while modernizing legacy workloads into modern stacks.`,
    ],
    facts: [
      "🇧🇷 Born and raised in Brazil",
      "🇮🇹 Italian citizenship with EU Work Authorization",
      "🎓 Information Systems degree",
    ],
    imageAlt: "Rodrigo's profile picture",
  },
  pt: {
    header: {
      title: "Sobre Mim",
      desc: "Engenheiro de software focado em performance, confiabilidade e em entender como os sistemas funcionam por baixo dos panos.",
    },
    paragraphs: [
      `Sou Engenheiro de Software com experiência em aplicações web escaláveis e soluções com IA. Trabalho remotamente na Math Group desde agosto de 2019.`,
      `Minha experiência cobre desenvolvimento full-stack com o ecossistema MERN, frameworks modernos como Next.js e TypeScript e serviços em nuvem (AWS e Azure). Já conduzi projetos de ponta a ponta entregando interfaces e APIs robustas.`,
      `Tenho grande interesse em integrações com IA e já entreguei chatbots usando AWS Bedrock, Polly, Transcribe e Lambda, além de modernizar cargas legadas para stacks atuais.`,
    ],
    facts: [
      "🇧🇷 Nascido e criado no Brasil",
      "🇮🇹 Cidadania italiana com autorização de trabalho na UE",
      "🎓 Bacharel em Sistemas de Informação",
    ],
    imageAlt: "Foto de perfil do Rodrigo",
  },
} as const;

export default function About() {
  const { language } = useLanguage();
  const copy = aboutCopy[language];

  return (
    <section
      id="about"
      className="scroll-mt-8 min-h-screen flex flex-col justify-center py-24"
    >
      <Header title={copy.header.title} desc={copy.header.desc} />

      <div className="grid md:grid-cols-2 gap-8 items-start mt-8">
        <div className="space-y-6 text-lg text-foreground">
          {copy.paragraphs.map((paragraph, idx) => (
            <p key={idx} className="leading-relaxed">
              {paragraph}
            </p>
          ))}

          <div className="pt-4 border-t border-border">
            <p className="text-muted-foreground whitespace-pre-line">
              {copy.facts.join("\n")}
            </p>
          </div>
        </div>

        <Image
          className="mx-auto border-0 rounded-2xl"
          src={`${BASE_PATH}/images/london.jpg`}
          width={400}
          height={400}
          alt={copy.imageAlt}
          unoptimized={true}
        />
      </div>
    </section>
  );
}
