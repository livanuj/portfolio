import { BulletList, Section } from "@/components/ui";
import { experiences } from "@/data/timeline";
import { IconCalendar, IconMapPin } from "@tabler/icons-react";
import React from "react";

export const Timeline: React.FC = () => {
  return (
    <Section id="timeline" title="Timeline" maxWidth="4xl">
      <div className="relative transition-all delay-100 duration-700">
        <div className="absolute bottom-0 left-[7px] top-0 w-0.5 bg-accent-500 dark:bg-accent-400" />

        <div className="space-y-10">
          {experiences.map((exp, expIndex) => (
            <div key={expIndex} className="relative pl-10">
              <div className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-4 border-white bg-accent-500 dark:border-gray-900 dark:bg-accent-400" />

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                    {exp.company}
                  </h3>
                  <div className="mt-1 flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                    <span className="flex items-center gap-1">
                      <IconMapPin size={16} />
                      {exp.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <IconCalendar size={16} />
                      {exp.period}
                    </span>
                  </div>
                </div>

                {exp.roles.map((role, roleIndex) => (
                  <div
                    key={roleIndex}
                    className="border-l-2 border-gray-200 pl-4 dark:border-gray-800"
                  >
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100">{role.title}</h4>
                    <div className="mt-2">
                      <BulletList items={role.highlights} icon="arrow" className="space-y-1.5" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
