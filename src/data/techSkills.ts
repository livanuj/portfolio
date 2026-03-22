import type { SkillCategory } from "@/types/portfolio";

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      "TypeScript & JavaScript proficiency",
      "React & Next.js expertise (incl. server components)",
      "State management (Redux, React Query, Zustand)",
      "Modern styling (Tailwind CSS, CSS-in-JS)",
      "SEO & Performance optimization",
      "Interface development & UX best practices",
      "Build tooling & CI/CD",
    ],
  },
  {
    title: "Backend & APIs",
    skills: [
      "Node.js ecosystem",
      "Ruby on Rails",
      "Elixir",
      "REST API design & implementation",
      "GraphQL",
      "PostgreSQL & database design",
    ],
  },
  {
    title: "Tools & Infrastructure",
    skills: [
      "Nx Monorepo architecture",
      "Git & GitHub workflows",
      "AWS & Azure cloud services",
      "CI/CD pipelines",
      "Zod validation",
      "Testing (Jest, Cypress, Unit tests)",
    ],
  },
  {
    title: "Rich Text & Content",
    skills: [
      "ProseMirror core library",
      "TipTap framework",
      "TinyMCE integration",
      "WYSIWYG editor development",
    ],
  },
];
