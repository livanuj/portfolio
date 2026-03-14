import React from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

type Role = {
  title: string;
  period: string;
  highlights: string[];
};

type ExperienceItem = {
  company: string;
  location: string;
  period: string;
  roles: Role[];
};

const experiences: ExperienceItem[] = [
  {
    company: "Taktikal Ehf.",
    location: "Reykjavík, Iceland",
    period: "Mar 2023 – Mar 2026 (3 years)",
    roles: [
      {
        title: "Frontend Developer",
        period: "Mar 2023 – Mar 2026",
        highlights: [
          "Develop internal workflow tools and customer-facing applications for the SmartFlows platform used to automate digital onboarding and document processes",
          "Build scalable and reusable UI components using React, TypeScript, and Next.js to support complex multi-step workflows, forms, and document generation",
          "Implement state management using TanStack React Query for server data, while managing client-side application state with Zustand",
          "Develop a custom rich-text editor using ProseMirror and TipTap to support dynamic document generation and editing within workflows",
          "Implement conditional logic engines that dynamically adapt forms and workflows based on user input and predefined rules",
        ],
      },
      {
        title: "Full-stack Developer",
        period: "Mar 2023 – Mar 2026",
        highlights: [
          "Contribute to the Risk Monitoring project by developing user interfaces using Elixir Phoenix LiveView, enabling real-time updates",
          "Utilize AI-assisted development tools to accelerate prototyping, debugging, and feature implementation in backend systems using Elixir",
        ],
      },
    ],
  },
  {
    company: "Whitehat Engineering (LeaveLogic)",
    location: "Remote",
    period: "Apr 2017 – Mar 2023 (6 years)",
    roles: [
      {
        title: "Lead Frontend Developer",
        period: "Jan 2021 – Jul 2022",
        highlights: [
          "Led the frontend development of a mobile-responsive enterprise HR platform, building the application from scratch using React, React Query, and Material UI",
          "Developed a custom calendar interface using ReactDatepicker featuring three inline date pickers with color-coded benefit indicators",
        ],
      },
      {
        title: "Full Stack Developer",
        period: "Apr 2017 – Jul 2022",
        highlights: [
          "Developed backend services using Ruby on Rails, designing RESTful APIs to support frontend application features and business workflows",
          "Implemented a dynamic claim submission workflow with prefilled forms and webhook integrations to transmit completed claims to insurance providers",
        ],
      },
    ],
  },
  {
    company: "Gurzu Inc.",
    location: "Freelance",
    period: "Jul 2021 – Oct 2021",
    roles: [
      {
        title: "Software Developer (Ruby on Rails)",
        period: "Jul 2021 – Oct 2021",
        highlights: [
          "Created a tool in Ruby that automatically downloads live streaming videos using FFMPEG",
          "Developed a video player in JavaScript that has functionality to trim videos",
          "Created service that trims video sequences and uploads them to server",
        ],
      },
    ],
  },
  {
    company: "FuelPanda",
    location: "Freelance",
    period: "Dec 2020 – Jan 2021",
    roles: [
      {
        title: "Senior Software Developer (Ruby on Rails)",
        period: "Dec 2020 – Jan 2021",
        highlights: ["Implemented GraphQL APIs to support mobile applications"],
      },
    ],
  },
  {
    company: "E&T Nepal Pvt. Ltd.",
    location: "Nepal",
    period: "Nov 2014 – Mar 2017 (2 years 5 months)",
    roles: [
      {
        title: "Software Engineer",
        period: "Nov 2014 – Mar 2017",
        highlights: ["Developed a project management system using Ruby on Rails MVC architecture"],
      },
    ],
  },
];

export const Experience: React.FC = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: timelineRef, isVisible: timelineVisible } = useScrollAnimation();

  return (
    <section id="experience" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div
          ref={titleRef}
          className={`mb-12 text-center transition-all duration-1000 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          <h2 className="mb-4 text-4xl font-bold text-gray-900">Experience</h2>
          <div className="mx-auto h-1 w-20 bg-gradient-to-r from-primary-500 to-primary-700" />
        </div>
        <div className="mx-auto max-w-5xl" ref={timelineRef}>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 top-0 hidden h-full w-0.5 bg-gradient-to-b from-primary-500 to-primary-700 md:block" />
            
            <div className="space-y-12">
              {experiences.map((exp, expIndex) => (
                <div
                  key={expIndex}
                  className={`relative md:pl-12 transition-all duration-1000 ${
                    timelineVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{
                    transitionDelay: `${expIndex * 150}ms`,
                  }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-2 hidden h-4 w-4 -translate-x-[7px] rounded-full border-4 border-white bg-primary-600 shadow-md md:block" />
                  
                  <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-8 shadow-lg transition-all hover:shadow-xl">
                    <div className="mb-6 border-b border-gray-200 pb-4">
                      <h3 className="mb-2 text-2xl font-bold text-gray-900">{exp.company}</h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {exp.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {exp.period}
                        </span>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      {exp.roles.map((role, roleIndex) => (
                        <div key={roleIndex} className={roleIndex > 0 ? "border-t border-gray-200 pt-6" : ""}>
                          <div className="mb-3">
                            <h4 className="text-xl font-bold text-primary-700">{role.title}</h4>
                            {exp.roles.length > 1 && (
                              <p className="text-sm text-gray-500">{role.period}</p>
                            )}
                          </div>
                          <ul className="space-y-2">
                            {role.highlights.map((highlight, highlightIndex) => (
                              <li
                                key={highlightIndex}
                                className="flex gap-3 text-gray-700"
                              >
                                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600" />
                                <span className="leading-relaxed">{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
