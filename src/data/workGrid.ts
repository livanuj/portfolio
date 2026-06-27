import { portfolioData } from "@/data/projects";
import type { Project } from "@/types/portfolio";

export type WorkGridCategory = keyof typeof portfolioData;

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
  sideProject: {
    title: "Side Projects",
    projects: portfolioData.sideProject,
  },
};
