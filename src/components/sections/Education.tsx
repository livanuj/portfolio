import { Card, IconBadge, Section } from "@/components/ui";
import { education } from "@/data/education";
import { IconCalendar, IconSchool } from "@tabler/icons-react";
import React from "react";

export const Education: React.FC = () => {
  return (
    <Section id="education" title="Education" maxWidth="4xl">
      <div className="space-y-6 transition-all delay-100 duration-700">
        {education.map((edu, index) => (
          <Card key={index} hover>
            <div className="flex items-start gap-4">
              <IconBadge>
                <IconSchool size={24} />
              </IconBadge>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  {edu.degree}
                </h3>
                <p className="mt-1 font-medium text-accent-600 dark:text-accent-400">
                  {edu.institution}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{edu.location}</p>
                <div className="mt-3 flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <IconCalendar size={16} />
                  {edu.period}
                </div>
                {edu.status && (
                  <p className="mt-2 text-sm italic text-gray-500 dark:text-gray-500">
                    {edu.status}
                  </p>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};
