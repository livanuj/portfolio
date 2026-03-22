import React from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { skillCategories } from "@/data/techSkills";

export const TechSkills: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="tech-skills" className="py-16">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <h2
          className={`text-3xl font-bold text-gray-900 dark:text-gray-100 mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Tech Skills
        </h2>

        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-10 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-start text-gray-700 dark:text-gray-300"
                  >
                    <span className="text-accent-600 dark:text-accent-400 mr-3 mt-0.5 select-none flex-shrink-0">
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
