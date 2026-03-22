import { education } from "@/data/education";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { IconCalendar, IconSchool } from "@tabler/icons-react";
import React from "react";
import { cn } from "../../utils";

export const Education: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="education" className="py-16">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <h2
          className={cn(
            "text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
          )}
        >
          Education
        </h2>

        <div
          className={cn(
            "space-y-6 transition-all duration-700 delay-100",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
          )}
        >
          {education.map((edu, index) => (
            <div
              key={index}
              className={cn(
                "border border-gray-200 dark:border-gray-800 rounded-lg p-6 bg-white dark:bg-gray-900 hover:border-accent-500 dark:hover:border-accent-400 transition-all",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4",
              )}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-2 rounded-lg bg-accent-100 dark:bg-accent-900/20 text-accent-600 dark:text-accent-400">
                  <IconSchool size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                    {edu.degree}
                  </h3>
                  <p className="text-accent-600 dark:text-accent-400 font-medium mt-1">
                    {edu.institution}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {edu.location}
                  </p>
                  <div className="flex items-center gap-2 mt-3 text-sm text-gray-600 dark:text-gray-400">
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
