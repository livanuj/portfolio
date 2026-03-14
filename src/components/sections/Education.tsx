import React from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

type EducationItem = {
  degree: string;
  institution: string;
  location: string;
  period: string;
  status?: string;
};

const education: EducationItem[] = [
  {
    degree: "MSc in Computer Science",
    institution: "Háskóli Íslands",
    location: "Reykjavík, Iceland",
    period: "Aug 2022 – Present",
    status: "Courses completed, thesis ongoing",
  },
  {
    degree: "BE in Computer Engineering",
    institution: "Kathmandu University",
    location: "Nepal",
    period: "2009 – 2013",
  },
];

export const Education: React.FC = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation();

  return (
    <section id="education" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div
          ref={titleRef}
          className={`mb-12 text-center transition-all duration-1000 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          <h2 className="mb-4 text-4xl font-bold text-gray-900">Education</h2>
          <div className="mx-auto h-1 w-20 bg-gradient-to-r from-primary-500 to-primary-700" />
        </div>
        <div className="mx-auto max-w-4xl" ref={gridRef}>
          <div className="grid gap-6 md:grid-cols-2">
            {education.map((edu, index) => (
              <div
                key={index}
                className={`group rounded-2xl border border-gray-200 bg-white p-8 shadow-lg transition-all duration-1000 hover:shadow-xl ${
                  gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <div className="mb-4">
                  <div className="mb-2 flex items-start justify-between">
                    <h3 className="text-xl font-bold text-gray-900">{edu.degree}</h3>
                    <svg
                      className="h-8 w-8 flex-shrink-0 text-primary-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                      />
                    </svg>
                  </div>
                  <p className="font-semibold text-primary-700">{edu.institution}</p>
                  <p className="text-sm text-gray-600">{edu.location}</p>
                </div>
                <div className="space-y-2 border-t border-gray-100 pt-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    {edu.period}
                  </div>
                  {edu.status && (
                    <p className="text-sm italic text-gray-500">{edu.status}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
