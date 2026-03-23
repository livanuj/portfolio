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
      <div className="mx-auto max-w-5xl" ref={ref}>
        <h2
          className={cn(
            "mb-8 text-3xl font-bold text-gray-900 transition-all duration-700 dark:text-gray-100",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
          )}
        >
          Specializations
        </h2>

        <div
          className={cn(
            "grid gap-6 transition-all delay-100 duration-700 md:grid-cols-2",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
          )}
        >
          {otherSkills.map((skill) => {
            const IconComponent = otherSkillIcons[skill.icon];
            return (
              <div
                key={skill.title}
                className="rounded-lg border border-gray-200 bg-white p-6 transition-all hover:border-accent-500 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-accent-400"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 rounded-lg bg-accent-100 p-2 text-accent-600 dark:bg-accent-900/20 dark:text-accent-400">
                    <IconComponent size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-gray-100">
                      {skill.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
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
