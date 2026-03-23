import { Card, IconBadge, Section } from "@/components/ui";
import { otherSkills } from "@/data/otherSkills";
import type { OtherSkillIconId } from "@/types/portfolio";
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
  return (
    <Section id="other-skills" title="Specializations" maxWidth="5xl">
      <div className="grid gap-6 transition-all delay-100 duration-700 md:grid-cols-2">
        {otherSkills.map((skill) => {
          const IconComponent = otherSkillIcons[skill.icon];
          return (
            <Card key={skill.title} hover>
              <div className="flex items-start gap-4">
                <IconBadge>
                  <IconComponent size={24} />
                </IconBadge>
                <div className="flex-1">
                  <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-gray-100">
                    {skill.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    {skill.description}
                  </p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </Section>
  );
};
