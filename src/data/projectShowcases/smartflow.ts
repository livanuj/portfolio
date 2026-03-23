import type { ProjectShowcaseData } from "@/types/portfolio";

export const smartflowData: ProjectShowcaseData = {
  title: "SmartFlows Platform",
  company: "Taktikal Ehf.",
  role: "Frontend Developer",
  period: "2023 - 2026",
  type: "Enterprise SaaS",
  overview:
    "SmartFlows is an enterprise-grade workflow automation platform that streamlines " +
    "digital onboarding and document automation processes. I built internal workflow " +
    "tools and customer-facing applications with complex multi-step workflows, dynamic " +
    "forms supporting 15+ field types, and rich-text editing capabilities." +
    "The platform is built with React, TypeScript, and Next.js, utilizing React Query for " +
    "data management and Zustand for state management. I integrated ProseMirror and TipTap " +
    "for powerful document editing features, including custom extensions for templates and variables.",
  link: "https://www.taktikal.com/smartflows",
  features: [
    {
      title: "Dynamic Form Builder",
      description:
        "Developed a flexible form builder supporting 15+ field types including text, number, " +
        "date pickers, dropdowns, file uploads, and signature fields. Implemented dynamic clarification " +
        "system where selecting answers triggers conditional follow-up questions automatically. " +
        "Built real-time validation using Zod schema validation, with the same interactive form experience " +
        "for both admin preview and signee completion flows. Added field dependencies and conditional " +
        "logic ensuring forms adapt intelligently to user responses.",
      screenshots: [
        {
          src: "/screenshots/smartflow/sm-flow-editor.png",
          alt: "Form Builder",
        },
        {
          src: "/screenshots/smartflow/sm-fields-with-clarification.png",
          alt: "Dynamic Form Builder with Clarification System",
        },
        {
          src: "/screenshots/smartflow/sm-clarification-demo.gif",
          alt: "Clarification System Demo Animation",
        },
      ],
    },
    {
      title: "Rich Text Document Editor",
      description:
        "Integrated ProseMirror and TipTap for powerful document editing capabilities. " +
        "Built reference system allowing admins to embed form's fields directly into documents and email templates - " +
        "when signees complete the form, their answers automatically populate into the referenced fields. " +
        "Implemented conditional block rendering where entire paragraphs show/hide based on expression-based rules " +
        "evaluated against form's responses, enabling dynamic contract generation that adapts to user input. " +
        "Allows non-technical users to create complex documents with dynamic content.",
      screenshots: [
        {
          src: "/screenshots/smartflow/sm-doc-editor.png",
          alt: "Rich Text Document Editor",
        },
        {
          src: "/screenshots/smartflow/sm-document-editor.gif",
          alt: "Rich Text Document Editor Demo",
        },
      ],
    },
    {
      title: "Advanced Conditional Logic Engine",
      description:
        "Engineered expression-based conditional logic system enabling dynamic show/hide form rules " +
        "based on previous answers. Implemented conditional document rendering where contract text " +
        "automatically changes based on form's responses. Built visual rule builder with " +
        "expression evaluation, supporting complex nested conditions and multi-field dependencies " +
        "for creating intelligent, adaptive forms.",
      screenshots: [
        {
          src: "/screenshots/smartflow/sm-conditional-logic.png",
          alt: "Conditional Logic Rule in Form Builder",
        },
        {
          src: "/screenshots/smartflow/sm-conditional-logic-editor.png",
          alt: "Conditional Logic Rule Editor",
        },
      ],
    },
  ],
  technologies: [
    "React",
    "TypeScript",
    "Next.js",
    "React Query",
    "Zustand",
    "ProseMirror",
    "TipTap",
    "Tailwind CSS",
    "Zod",
  ],
  achievements: [
    "Replaced code-based SmartForm system with no-code visual builder, eliminating manual field development and enabling non-technical users to create forms independently",
    "Built document editor with question reference system, eliminating need for developers to manually update PDF templates and embed field references",
    "Designed template marketplace with 20+ pre-built flows (NDAs, employment contracts, AML forms) reducing time to create workflow processes by 80%",
    "Reduced form abandonment by 40% through progressive disclosure signing experience and mobile-responsive UI",
  ],
  backLink: "/work",
};
