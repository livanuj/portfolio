import React from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

type SkillCategory = {
  title: string;
  skills: string[];
};

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["TypeScript", "JavaScript", "Ruby", "Elixir"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["React", "Next.js", "Ruby on Rails", "Phoenix", "Express.js"],
  },
  {
    title: "State Management",
    skills: ["React Query", "Redux", "Zustand"],
  },
  {
    title: "Styling",
    skills: ["Tailwind CSS", "CSS-in-JS"],
  },
  {
    title: "Rich Text Editors",
    skills: ["ProseMirror", "TipTap"],
  },
  {
    title: "APIs",
    skills: ["REST APIs", "GraphQL"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MySQL"],
  },
  {
    title: "Cloud & Infrastructure",
    skills: ["Docker", "AWS", "Azure"],
  },
  {
    title: "DevOps & Tools",
    skills: ["Git", "CI/CD", "Webpack"],
  },
  {
    title: "Testing",
    skills: ["Jest", "Cypress"],
  },
  {
    title: "Utilities",
    skills: ["Immer", "Zod", "lodash", "dnd kit", "React Router"],
  },
  {
    title: "Additional",
    skills: ["Phoenix LiveView", "FFMPEG", "Third-party API integrations"],
  },
];

export const Skills: React.FC = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();

  return (
    <section id="skills" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div
          ref={titleRef}
          className={`mb-12 text-center transition-all duration-1000 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          <h2 className="mb-4 text-4xl font-bold text-gray-900">Technical Skills</h2>
          <div className="mx-auto h-1 w-20 bg-gradient-to-r from-primary-500 to-primary-700" />
        </div>

        <div className="mx-auto max-w-6xl" ref={contentRef}>
          <div
            className={`grid gap-8 sm:grid-cols-2 lg:grid-cols-3 transition-all duration-1000 ${
              contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {skillCategories.map((category, categoryIndex) => (
              <div key={category.title} className="rounded-xl bg-white p-6 shadow-md">
                <h3 className="mb-4 text-lg font-bold text-gray-900">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-gray-200 bg-gray-50 px-4 py-1.5 text-sm font-medium text-gray-700 transition-all hover:border-primary-500 hover:bg-primary-50 hover:text-primary-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
