import React from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ProjectCard } from "./ProjectCard";
import {
  workGridByCategory,
  type WorkGridCategory,
} from "@/data/workGrid";

type WorkGridProps = {
  category: WorkGridCategory;
};

export const WorkGrid: React.FC<WorkGridProps> = ({ category }) => {
  const { ref, isVisible } = useScrollAnimation();
  const { title, projects } = workGridByCategory[category];

  return (
    <section id={category} className="py-16">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <h2
          className={`text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {title}
        </h2>
        <div
          className={`space-y-6 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
