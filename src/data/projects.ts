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
    tags: ["React", "TypeScript", "Next.js", "React Query", "Zustand", "ProseMirror"],
  },
  {
    title: "LeaveLogic",
    company: "Whitehat Engineering",
    role: "Full-stack Developer",
    type: "Leave Management Platform",
    period: "Apr 2017 – Mar 2023",
    description:
      "Full-stack developer building Ruby on Rails application with benefits calculation engine, API architecture, HR platform integrations. Led React migration in 2021, replacing old frontend of employee portal with modern React application using Material-UI, React Query for server state management, custom calendar interfaces, and multi-section claims workflows.",
    link: "/work/leavelogic",
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

const sideProjects: Project[] = [
  {
    title: "WTRA - Running Events Directory",
    role: "AI-DLC Workshop",
    type: "Event by AWS",
    period: "2026",
    description:
      "Designed and built a full-stack SEO-first directory for discovering running events in three hours, end to end from PRD to deployment, using the AI-DLC (AI-driven development lifecycle) methodology. Built with Next.js 15, TypeScript, Tailwind, and Supabase (Postgres, full-text search, auth); implemented server-side search and filtering, JSON-LD structured data for search/AI discoverability, and an admin dashboard for event publishing.",
    link: "https://wtra.livanuj.dev/",
    tags: ["React", "TypeScript", "Tailwind", "Supabase", "Zod"],
  },
  {
    title: "Ghost Run Delta Mapper",
    role: "Solo project",
    type: "Harnessing AI agents",
    period: "2026",
    description:
      "Built a local-first running analytics tool that compares a current run against a previous run on the same track using Strava's GPX data, visualizing pace deltas across the route on an interactive Mapbox map. Designed and implemented the full pipeline: GPX parsing, temporal alignment between runs of different lengths, fixed-distance segmentation, and delta/zone classification (green/yellow/red) with route-divergence handling for mismatched geometries.  Built with React, TypeScript, Vite, and a Node.js API; includes an animated playback overlay with live segment stats, full test coverage (unit + Playwright E2E), and CI. Deployed live to Vercel; planning to integration into WTRA to let runners compare current year's racing performance against last year's in the same event.",
    link: "https://ghostrun.livanuj.dev/",
    tags: ["React", "TypeScript", "Tailwind", "Supabase", "Zod"],
  },
];

export const portfolioData = {
  professional: professionalProjects,
  freelance: freelanceProjects,
  sideProject: sideProjects,
};
