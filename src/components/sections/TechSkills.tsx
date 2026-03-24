import { BulletList, Section } from "@/components/ui";
import { skillCategories } from "@/data/techSkills";
import React from "react";

export const TechSkills: React.FC = () => {
  return (
    <Section id="tech-skills" title="Tech Skills" maxWidth="5xl">
      <div className="grid grid-cols-1 gap-10 transition-all delay-100 duration-700 md:grid-cols-2">
        {skillCategories.map((category) => (
          <div key={category.title}>
            <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-gray-100">
              {category.title}
            </h3>
            <BulletList items={category.skills} icon="arrow" />
          </div>
        ))}
      </div>
    </Section>
  );
};
