import React from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const About: React.FC = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();

  return (
    <section id="about" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <div
            ref={titleRef}
            className={`mb-12 text-center transition-all duration-1000 ${
              titleVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            }`}
          >
            <h2 className="mb-4 text-4xl font-bold text-gray-900">About Me</h2>
            <div className="mx-auto h-1 w-20 bg-gradient-to-r from-primary-500 to-primary-700" />
          </div>
          <div
            ref={contentRef}
            className={`rounded-2xl bg-gradient-to-br from-gray-50 to-white p-8 shadow-lg transition-all duration-1000 ${
              contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              Full-stack developer with <span className="font-semibold text-primary-700">9+ years of experience</span> building
              web applications and internal platforms. Strong expertise in React, TypeScript, and modern
              frontend architecture, with backend experience in Ruby on Rails, Node.js, and Elixir.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              Proficient in working with complex systems, delivering maintainable code, and collaborating
              with cross-functional teams while staying up to date with emerging technologies such as
              AI-assisted development. Currently pursuing an <span className="font-semibold text-primary-700">MSc in Computer Science</span> at
              Háskóli Íslands.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
