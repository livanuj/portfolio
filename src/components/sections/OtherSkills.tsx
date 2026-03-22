import { otherSkills } from "@/data/otherSkills";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import type { OtherSkillIconId } from "@/types/portfolio";
import { cn } from "@/utils";
import {
  IconBrain,
  IconBulb,
  IconCode,
  IconRocket,
  IconUsers,
  type Icon,
} from "@tabler/icons-react";
import React from "react";

const otherSkillIcons = {
  code: IconCode,
  bulb: IconBulb,
  brain: IconBrain,
  rocket: IconRocket,
  users: IconUsers,
} satisfies Record<OtherSkillIconId, Icon>;

export const OtherSkills: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="other-skills" className="py-16">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <h2
          className={cn(
            "text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
          )}
        >
          Specializations
        </h2>

        <div
          className={cn(
            "grid gap-6 md:grid-cols-2 transition-all duration-700 delay-100",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
          )}
        >
          {otherSkills.map((skill) => {
            const IconComponent = otherSkillIcons[skill.icon];
            return (
              <div
                key={skill.title}
                className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg bg-white dark:bg-gray-900 hover:border-accent-500 dark:hover:border-accent-400 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-2 rounded-lg bg-accent-100 dark:bg-accent-900/20 text-accent-600 dark:text-accent-400">
                    <IconComponent size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                      {skill.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
