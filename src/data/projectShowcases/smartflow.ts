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
        "date pickers, dropdowns, file uploads, and signature fields. Implemented real-time " +
        "validation, conditional logic, and field dependencies using Zod for schema validation.",
      // screenshot: {
      //   src: "/screenshots/smartflow-form-builder.png",
      //   alt: "Dynamic Form Builder Interface"
      // }
    },
    {
      title: "Multi-Step Workflow Management",
      description:
        "Built intuitive multi-step workflow interfaces with progress tracking, step validation, " +
        "and state management using Zustand. Implemented draft saving, auto-save functionality, " +
        "and seamless navigation between workflow steps.",
      // screenshot: {
      //   src: "/screenshots/smartflow-workflow.png",
      //   alt: "Workflow Step Navigation"
      // }
    },
    {
      title: "Rich Text Document Editor",
      description:
        "Integrated ProseMirror and TipTap for powerful document editing capabilities. " +
        "Implemented custom extensions for templates, variables, and dynamic content insertion. " +
        "Added collaborative editing features and document versioning.",
      // screenshot: {
      //   src: "/screenshots/smartflow-rich-text-editor.png",
      //   alt: "Rich Text Document Editor"
      // }
    },
    {
      title: "Dashboard & Analytics",
      description:
        "Created comprehensive dashboards with real-time data visualization, workflow status " +
        "tracking, and performance metrics. Implemented data filtering, sorting, and export " +
        "functionality using React Query for efficient data management.",
      // screenshot: {
      //   src: "/screenshots/smartflow-dashboard.png",
      //   alt: "Dashboard & Analytics"
      // }
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
    "GraphQL",
  ],
  achievements: [
    "Built scalable component library used across multiple products",
    "Reduced form completion time by 40% with improved UX design",
    "Implemented real-time collaboration features for document editing",
    "Maintained 95%+ code coverage with comprehensive testing suite",
    "Led migration from legacy codebase to modern React architecture",
  ],
  backLink: "/work",
};
