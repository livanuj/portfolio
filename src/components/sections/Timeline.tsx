import React from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { IconMapPin, IconCalendar } from "@tabler/icons-react";
import { experiences } from "@/data/timeline";
import { cn } from "@/utils";

export const Timeline: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="timeline" className="py-16">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <h2
          className={cn(
            "text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
          )}
        >
          Timeline
        </h2>

        <div
          className={cn(
            "relative transition-all duration-700 delay-100",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
          )}
        >
          {/* Timeline line */}
          <div className="absolute left-[7px] top-0 bottom-0 w-0.5 bg-accent-500 dark:bg-accent-400" />

          <div className="space-y-10">
            {experiences.map((exp, expIndex) => (
              <div key={expIndex} className="relative pl-10">
                {/* Timeline dot */}
                <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-accent-500 dark:bg-accent-400 border-4 border-white dark:border-gray-900" />

                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                      {exp.company}
                    </h3>
                    <div className="flex flex-wrap gap-4 mt-1 text-sm text-gray-600 dark:text-gray-400">
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
                      className="border-l-2 border-gray-200 dark:border-gray-800 pl-4"
                    >
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                        {role.title}
                      </h4>
                      <ul className="mt-2 space-y-1.5">
                        {role.highlights.map((highlight, hIndex) => (
                          <li
                            key={hIndex}
                            className="text-sm text-gray-600 dark:text-gray-400 flex gap-2"
                          >
                            <span className="text-accent-500 dark:text-accent-400 mt-1">
                              ▹
                            </span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
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
