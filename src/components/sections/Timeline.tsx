import { experiences } from "@/data/timeline";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/utils";
import { IconCalendar, IconMapPin } from "@tabler/icons-react";
import React from "react";

export const Timeline: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="timeline" className="py-16">
      <div className="mx-auto max-w-4xl" ref={ref}>
        <h2
          className={cn(
            "mb-8 text-3xl font-bold text-gray-900 transition-all duration-700 dark:text-gray-100",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
          )}
        >
          Timeline
        </h2>

        <div
          className={cn(
            "relative transition-all delay-100 duration-700",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
          )}
        >
          {/* Timeline line */}
          <div className="absolute bottom-0 left-[7px] top-0 w-0.5 bg-accent-500 dark:bg-accent-400" />

          <div className="space-y-10">
            {experiences.map((exp, expIndex) => (
              <div key={expIndex} className="relative pl-10">
                {/* Timeline dot */}
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
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                        {role.title}
                      </h4>
                      <ul className="mt-2 space-y-1.5">
                        {role.highlights.map((highlight, hIndex) => (
                          <li
                            key={hIndex}
                            className="flex gap-2 text-sm text-gray-600 dark:text-gray-400"
                          >
                            <span className="mt-1 text-accent-500 dark:text-accent-400">▹</span>
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
