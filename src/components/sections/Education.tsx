import { education } from "@/data/education";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { IconCalendar, IconSchool } from "@tabler/icons-react";
import React from "react";
import { cn } from "../../utils";

export const Education: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="education" className="py-16">
      <div className="mx-auto max-w-4xl" ref={ref}>
        <h2
          className={cn(
            "mb-8 text-3xl font-bold text-gray-900 transition-all duration-700 dark:text-gray-100",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
          )}
        >
          Education
        </h2>

        <div
          className={cn(
            "space-y-6 transition-all delay-100 duration-700",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
          )}
        >
          {education.map((edu, index) => (
            <div
              key={index}
              className={cn(
                "rounded-lg border border-gray-200 bg-white p-6 transition-all hover:border-accent-500 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-accent-400",
                isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
              )}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 rounded-lg bg-accent-100 p-2 text-accent-600 dark:bg-accent-900/20 dark:text-accent-400">
                  <IconSchool size={24} />
                </div>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
