import { skillCategories } from "@/data/techSkills";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/utils";
import React from "react";

export const TechSkills: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="tech-skills" className="py-16">
      <div className="mx-auto max-w-5xl" ref={ref}>
        <h2
          className={cn(
            "mb-12 text-3xl font-bold text-gray-900 transition-all duration-700 dark:text-gray-100",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
          )}
        >
          Tech Skills
        </h2>

        <div
          className={cn(
            "grid grid-cols-1 gap-10 transition-all delay-100 duration-700 md:grid-cols-2",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
          )}
        >
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-gray-100">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-start text-gray-700 dark:text-gray-300">
                    <span className="mr-3 mt-0.5 flex-shrink-0 select-none text-accent-600 dark:text-accent-400">
                      ▹
                    </span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
