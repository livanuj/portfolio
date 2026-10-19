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
      "Designed and built a full-stack SEO-first directory for discovering running events, end to end from PRD to deployment, using the AI-DLC (AI Development Life Cycle) framework. Built with Next.js 15, TypeScript, Tailwind, and Supabase. Built solo, from PRD to deployed MVP, in about three hours. Phase 2, in progress: rebuilding the database layer and additional features in Elixir.",
    link: "https://wtra.livanuj.dev/",
    links: [
      { label: "Phase 1 · Next.js MVP", url: "https://wtra.livanuj.dev/" },
      { label: "Phase 2 · Elixir (in progress)", url: "https://wtra-dev.livanuj.dev/" },
    ],
    tags: ["React", "TypeScript", "Tailwind", "Supabase", "Zod", "Elixir", "Phoenix"],
  },
  {
    title: "Ghost Run Mapper",
    role: "Solo project",
    type: "Harnessing AI agents",
    period: "2026",
    description:
      "Race your own past self. Pick two runs on the same route and see exactly where you were faster or slower, not just your overall pace. Takes two GPX files exported from Strava and renders the pace comparison on an interactive Mapbox map. Built with React, TypeScript, Vite and a Node.js API, using an AI agent harness through a TDD workflow. Deployed live to Vercel. Plan to merge this into WTRA syncing with Strava, instead of a manual GPX upload.",
    link: "https://ghostrun.livanuj.dev/",
    tags: ["React", "TypeScript", "Tailwind", "mapbox-gl"],
  },
  {
    title: "Grocery List",
    role: "Product owner",
    type: "Built with Kiro (AI-DLC)",
    period: "2026",
    description:
      "A grocery list my partner and I use every day, organized by store, with a combined view of everything left to buy and a finish-trip flow that carries unbought items to the next trip. Built entirely by Kiro. I described what I wanted, reviewed the requirements and tasks, and tested it end to end.",
    link: "/work/grocery-list",
    tags: ["React", "TypeScript", "Tailwind", "Supabase", "IndexedDB", "dnd-kit"],
  },
  {
    title: "Homemade UNO",
    role: "Product owner",
    type: "Built with Claude Code",
    period: "2026",
    description:
      "Real-time multiplayer Uno for playing with friends on any device, with a 2v2 Team mode where partners see each other's cards and play together, something I couldn't find in most Uno games. Built entirely by Claude Code. I didn't write or review the code; I described what I wanted and tested it end to end.",
    link: "/work/homemade-uno",
    tags: [
      "React",
      "TypeScript",
      "Tailwind",
      "Supabase",
      "Realtime",
      "Edge Functions",
      "Motion",
      "PWA",
    ],
  },
];

export const portfolioData = {
  professional: professionalProjects,
  freelance: freelanceProjects,
  sideProject: sideProjects,
};
