"use client";

import Header from "@/components/header/header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from "@/components/language-provider";

type Project = {
  title: string;
  description: string;
  bullets?: string[];
};

type Section =
  | { type: "paragraph"; title: string; text: string }
  | { type: "list"; title: string; items: string[] }
  | { type: "chips"; title: string; items: string[] }
  | { type: "projects"; title: string; projects: Project[] }
  | { type: "note"; text: string };

type TabContent = {
  value: string;
  triggerTitle: string;
  triggerPeriod: string;
  roleTitle: string;
  roleSubtitle: string;
  sections: Section[];
};

const experienceCopy: Record<
  "en" | "pt",
  { header: { title: string; desc: string }; tabs: TabContent[] }
> = {
  en: {
    header: {
      title: "Professional Experience",
      desc: "A journey of growth and innovation",
    },
    tabs: [
      {
        value: "math2",
        triggerTitle: "Math Group - Software Engineer",
        triggerPeriod: "Aug 2019 - Present",
        roleTitle: "Mid-Level Software Engineer",
        roleSubtitle: "Math Group • Remote • August 2019 - Present",
        sections: [
          {
            type: "list",
            title: "Key Responsibilities",
            items: [
              "Led architecture and development of large-scale web apps with Next.js, React, and TypeScript, ensuring reliable releases and maintainable code.",
              "Built reusable UI component systems, design tokens, and internal libraries to keep the product visually consistent across squads.",
              "Owned end-to-end feature delivery (API design, database integration, automated tests, CI/CD) with a strong focus on performance and accessibility.",
              "Partnered with designers and PMs to translate complex requirements into intuitive UIs and smooth user flows.",
              "Mentored fellow engineers through code reviews and pairing sessions, raising frontend and full-stack standards across the team.",
            ],
          },
          {
            type: "projects",
            title: "Featured Projects",
            projects: [
              {
                title: "Management Platform",
                description:
                  "Solo built ~90% of the project for an education client to manage the entire mentor–student lifecycle. Features include multi-role dashboards (unit vs. admin), enrollment and pairing workflows with color-coded statuses, manual re-allocation tools, CSV exports, and automated rules for periods, budgeting, and permissions.",
                bullets: [
                  "Multi-role access control with tailored dashboards for local units, managers, and administrators.",
                  "Enrollment and mentor-matching workflows with automation, manual overrides, and bulk CSV imports or exports.",
                  "Operational reporting, budget guardrails, and large-table performance tuning to support high concurrency.",
                ],
              },
              {
                title: "GurIA (AI ChatBot)",
                description:
                  "AI chatbot using AWS services to streamline communication and data processing for government operations with both text and voice channels.",
              },
              {
                title: "Other Projects",
                description:
                  "Bank Tech Migration (modernize SAS scripts into efficient Python code), Cloud Control (backend API for scheduling and service orchestration), Omie ERP integrations, and custom business workflow apps for internal teams.",
              },
            ],
          },
          {
            type: "chips",
            title: "Technologies Used",
            items: [
              "TypeScript",
              "React",
              "Node.js",
              "Python",
              "SQL",
              "AWS",
              "Azure",
              "AI/ML",
            ],
          },
        ],
      },
      {
        value: "freelance",
        triggerTitle: "Freelancing",
        triggerPeriod: "Jan 2019 - Aug 2019",
        roleTitle: "Freelance Developer",
        roleSubtitle: "Self-Employed • January 2019 - August 2019",
        sections: [
          {
            type: "paragraph",
            title: "Overview",
            text: "Created full stack web applications and static websites for small and medium businesses while managing the entire lifecycle from requirements through deployment.",
          },
          {
            type: "list",
            title: "Services Provided",
            items: [
              "Full-stack web application development",
              "Static website design and deployment",
              "Custom solutions for small and medium businesses",
              "Client consultation and project management",
            ],
          },
          {
            type: "chips",
            title: "Technologies Used",
            items: ["HTML/CSS", "JavaScript", "React", "Node.js"],
          },
        ],
      },
      {
        value: "sispro",
        triggerTitle: "Sispro - Intern",
        triggerPeriod: "Jan 2018 - Dec 2018",
        roleTitle: "Software Engineer Intern",
        roleSubtitle: "Sispro • Canoas, RS • January 2018 - December 2018",
        sections: [
          {
            type: "list",
            title: "Key Responsibilities",
            items: [
              "Built new modules for the company's ERP system using OutSystems.",
              "Contributed extensively to the development of accounting reports.",
              "Utilized JasperReports for report generation.",
              "Collaborated with senior developers to deliver quality software solutions.",
            ],
          },
          {
            type: "chips",
            title: "Technologies Used",
            items: ["OutSystems", "JasperReports", "SQL", "ERP Systems"],
          },
          {
            type: "note",
            text: "This internship provided foundational experience in enterprise software development and established strong technical skills that continue to support my career growth.",
          },
        ],
      },
    ],
  },
  pt: {
    header: {
      title: "Experiência Profissional",
      desc: "Uma jornada de crescimento e inovação",
    },
    tabs: [
      {
        value: "math2",
        triggerTitle: "Math Group - Engenheiro de Software",
        triggerPeriod: "Ago 2019 - Atual",
        roleTitle: "Engenheiro de Software Pleno",
        roleSubtitle: "Math Group • Remoto • Agosto 2019 - Presente",
        sections: [
          {
            type: "list",
            title: "Principais Responsabilidades",
            items: [
              "Liderei arquitetura e desenvolvimento de aplicações web em larga escala com Next.js, React e TypeScript, garantindo releases confiáveis e código sustentável.",
              "Construí sistemas de componentes reutilizáveis, design tokens e bibliotecas internas para manter a consistência visual entre as squads.",
              "Assumi features ponta a ponta (APIs, integrações com banco, testes automatizados, CI/CD) com foco em performance e acessibilidade.",
              "Trabalhei com designers e PMs para transformar requisitos complexos em interfaces intuitivas e fluxos suaves.",
              "Mentorei engenheiros em code reviews e pair programming, elevando o padrão técnico do time.",
            ],
          },
          {
            type: "projects",
            title: "Projetos em Destaque",
            projects: [
              {
                title: "Plataforma de Gestão",
                description:
                  "Desenvolvi ~90% de um sistema para um cliente educacional gerenciar todo o ciclo padrinho-calouro. Inclui dashboards por papel (unidade x administração), fluxos de inscrição e pareamento com status coloridos, ferramentas de realocação, exportações CSV e regras automáticas para períodos, orçamento e permissões.",
                bullets: [
                  "Controle de acesso por papel com dashboards específicos para unidades locais, gestores e administradores.",
                  "Fluxos de inscrição e pareamento com automações, overrides manuais e importação/exportação em massa por CSV.",
                  "Relatórios operacionais, limites orçamentários e otimizações de desempenho para tabelas volumosas.",
                ],
              },
              {
                title: "GurIA (Chatbot de IA)",
                description:
                  "Chatbot com serviços AWS para agilizar comunicação e processamento de dados em órgãos públicos, oferecendo canais de texto e voz.",
              },
              {
                title: "Outros Projetos",
                description:
                  "Migração de scripts bancários em SAS para código Python performático, Cloud Control (API backend para agendamento e orquestração), integrações Omie ERP e aplicações internas sob medida.",
              },
            ],
          },
          {
            type: "chips",
            title: "Tecnologias Utilizadas",
            items: [
              "TypeScript",
              "React",
              "Node.js",
              "Python",
              "SQL",
              "AWS",
              "Azure",
              "IA/ML",
            ],
          },
        ],
      },
      {
        value: "freelance",
        triggerTitle: "Freelancer",
        triggerPeriod: "Jan 2019 - Ago 2019",
        roleTitle: "Desenvolvedor Freelancer",
        roleSubtitle: "Autônomo • Janeiro 2019 - Agosto 2019",
        sections: [
          {
            type: "paragraph",
            title: "Visão Geral",
            text: "Criei aplicações web full stack e sites estáticos para pequenos e médios negócios, conduzindo todo o ciclo de requisitos até a publicação.",
          },
          {
            type: "list",
            title: "Serviços Prestados",
            items: [
              "Desenvolvimento de aplicações web full stack",
              "Design e publicação de sites estáticos",
              "Soluções sob medida para PMEs",
              "Consultoria com clientes e gestão de projetos",
            ],
          },
          {
            type: "chips",
            title: "Tecnologias Utilizadas",
            items: ["HTML/CSS", "JavaScript", "React", "Node.js"],
          },
        ],
      },
      {
        value: "sispro",
        triggerTitle: "Sispro - Estagiário",
        triggerPeriod: "Jan 2018 - Dez 2018",
        roleTitle: "Estagiário de Engenharia de Software",
        roleSubtitle: "Sispro • Canoas, RS • Janeiro 2018 - Dezembro 2018",
        sections: [
          {
            type: "list",
            title: "Principais Responsabilidades",
            items: [
              "Construí novos módulos do ERP usando OutSystems.",
              "Contribuí fortemente para relatórios contábeis.",
              "Utilizei JasperReports para geração de relatórios.",
              "Colaborei com desenvolvedores seniores para entregar soluções de qualidade.",
            ],
          },
          {
            type: "chips",
            title: "Tecnologias Utilizadas",
            items: ["OutSystems", "JasperReports", "SQL", "Sistemas ERP"],
          },
          {
            type: "note",
            text: "Esse estágio foi a base da minha experiência em software corporativo e consolidou habilidades técnicas que carrego até hoje.",
          },
        ],
      },
    ],
  },
};

export default function ProfessionalExperience() {
  const { language } = useLanguage();
  const copy = experienceCopy[language];
  const defaultValue = copy.tabs[0]?.value ?? "math2";

  return (
    <section
      id="professional-experience"
      className="scroll-mt-4 min-h-screen flex flex-col justify-center py-24"
    >
      <Header title={copy.header.title} desc={copy.header.desc} />

      <div className="w-full max-w-8xl mx-auto p-6">
        <Tabs
          defaultValue={defaultValue}
          className="w-full flex flex-col gap-6 lg:flex-row lg:items-start"
        >
          <TabsList className="flex h-auto w-full flex-col items-stretch space-y-2 bg-transparent p-0 lg:w-1/3">
            {copy.tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="justify-start px-4 py-3 rounded-md text-left transition-colors cursor-pointer hover:bg-muted data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <div className="flex flex-col items-start w-full">
                  <span className="font-medium">{tab.triggerTitle}</span>
                  <span className="text-xs opacity-70">{tab.triggerPeriod}</span>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="mt-6 flex-1 lg:mt-0 lg:w-2/3">
            {copy.tabs.map((tab) => (
              <TabsContent key={tab.value} value={tab.value} className="mt-0">
                <div className="rounded-lg border p-6 bg-card">
                  <div className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">
                      {tab.roleTitle}
                    </h2>
                    <p className="text-muted-foreground">{tab.roleSubtitle}</p>
                  </div>

                  <div className="space-y-6">
                    {tab.sections.map((section, index) => (
                      <SectionRenderer section={section} key={index} />
                    ))}
                  </div>
                </div>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
}

function SectionRenderer({ section }: { section: Section }) {
  if (section.type === "paragraph") {
    return (
      <div>
        <h3 className="text-lg font-semibold mb-3">{section.title}</h3>
        <p className="text-sm text-muted-foreground">{section.text}</p>
      </div>
    );
  }

  if (section.type === "list") {
    return (
      <div>
        <h3 className="text-lg font-semibold mb-3">{section.title}</h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {section.items.map((item, idx) => (
            <li key={idx}>• {item}</li>
          ))}
        </ul>
      </div>
    );
  }

  if (section.type === "chips") {
    return (
      <div>
        <h3 className="text-lg font-semibold mb-3">{section.title}</h3>
        <ul className="flex flex-wrap gap-2 [&>*]:px-3 [&>*]:py-1 [&>*]:bg-primary/10 [&>*]:text-primary [&>*]:rounded-full [&>*]:text-xs">
          {section.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }

  if (section.type === "projects") {
    return (
      <div>
        <h3 className="text-lg font-semibold mb-3">{section.title}</h3>
        <div className="space-y-4">
          {section.projects.map((project) => (
            <div key={project.title} className="border-l-4 border-primary pl-4">
              <h4 className="font-semibold mb-1">{project.title}</h4>
              <p className="text-sm text-muted-foreground">
                {project.description}
              </p>
              {project.bullets && (
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {project.bullets.map((bullet, idx) => (
                    <li key={idx}>• {bullet}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (section.type === "note") {
    return (
      <div className="bg-primary/5 rounded-lg p-4">
        <p className="text-sm text-muted-foreground italic">{section.text}</p>
      </div>
    );
  }

  return null;
}
