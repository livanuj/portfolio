import type { Project } from "@/types/portfolio";

const professionalProjects: Project[] = [
  {
    title: "SmartFlows Platform",
    company: "Taktikal Ehf.",
    role: "Frontend Developer",
    type: "Enterprise SaaS",
    period: "Mar 2023 – Mar 2026",
    description:
      "Built internal workflow tools and customer-facing applications for digital onboarding and document automation. Developed scalable UI components with React, TypeScript, and Next.js supporting complex multi-step workflows, dynamic forms (15+ field types), and rich-text editing with ProseMirror/TipTap.",
    link: "/work/smartflow",
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "React Query",
      "Zustand",
      "ProseMirror",
    ],
  },
  {
    title: "LeaveLogic",
    company: "Whitehat Engineering",
    role: "Lead Frontend Developer",
    type: "Enterprise HR Platform",
    period: "Jan 2021 – Jul 2022",
    description:
      "Led frontend development of a mobile-responsive enterprise leave management platform from scratch. Implemented real-time updates with React Query, built custom calendar interfaces, and designed claims management workflows with multi-section forms and conditional logic.",
    tags: ["React", "React Query", "Material UI", "Ruby on Rails"],
  },
  {
    title: "Project Management System",
    company: "E&T Nepal Pvt. Ltd.",
    role: "Software Engineer",
    type: "Internal Tool",
    period: "Nov 2014 – Mar 2017",
    description:
      "Developed a comprehensive project management system using Ruby on Rails MVC architecture to streamline internal workflows and team collaboration.",
    tags: ["Ruby on Rails", "PostgreSQL", "MVC"],
  },
];

const freelanceProjects: Project[] = [
  {
    title: "Video Streaming Platform",
    company: "Gurzu Inc.",
    role: "Software Developer",
    type: "Freelance",
    period: "Jul 2021 – Oct 2021",
    description:
      "Built a Ruby plugin to automatically download live streaming videos using FFMPEG. Developed a custom JavaScript video player with trimming functionality and integrated an upload service for processed videos.",
    tags: ["Ruby", "FFMPEG", "JavaScript"],
  },
  {
    title: "GraphQL API Development",
    company: "Fuel Panda",
    role: "Senior Software Developer",
    type: "Freelance",
    period: "Dec 2020 – Jan 2021",
    description:
      "Implemented GraphQL APIs with comprehensive queries and mutations to support mobile applications. Documented APIs using GraphQL Voyager for enhanced developer experience.",
    tags: ["GraphQL", "Ruby on Rails", "API Design"],
  },
];

// const demoProjects: Project[] = [
//   {
//     title: "Workflow Builder",
//     role: "Personal Project",
//     type: "Interactive Demo",
//     period: "2024",
//     description:
//       "An interactive drag-and-drop workflow builder showcasing complex state management, dynamic UI updates, and real-time validation. Features reorderable steps, inline editing, and system design patterns used in enterprise applications.",
//     link: "/workflow-builder",
//     tags: ["React", "TypeScript", "Zustand", "dnd-kit", "Zod"],
//   },
// ];

export const portfolioData = {
  professional: professionalProjects,
  freelance: freelanceProjects,
  // demos: demoProjects,
};
