import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/utils";
import React from "react";
import { Project } from "../../types/portfolio";
import { ProjectCard } from "./ProjectCard";

type WorkGridProps = {
  title: string;
  projects: Project[];
};

export const WorkGrid: React.FC<WorkGridProps> = (props) => {
  const { title, projects } = props;

  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id={title} className="py-16">
      <div className="mx-auto max-w-5xl" ref={ref}>
        <h2
          className={cn(
            "mb-8 text-3xl font-bold text-gray-900 transition-all duration-700 dark:text-gray-100",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
          )}
        >
          {title}
        </h2>
        <div
          className={cn(
            "space-y-6 transition-all delay-100 duration-700",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
          )}
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
