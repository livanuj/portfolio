import { portfolioData } from "@/data/projects";
import type { Project } from "@/types/portfolio";

export type WorkGridCategory = "professional" | "freelance" | "demos";

export const workGridByCategory: Partial<
  Record<WorkGridCategory, { title: string; projects: Project[] }>
> = {
  professional: {
    title: "Professional Work",
    projects: portfolioData.professional,
  },
  freelance: {
    title: "Freelance Projects",
    projects: portfolioData.freelance,
  },
  // demos: {
  //   title: "Interactive Demos",
  //   projects: portfolioData.demos,
  // },
};
