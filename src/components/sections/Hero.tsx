import React from "react";

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 py-24 text-white">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-white blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-white blur-3xl" />
      </div>
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          {/* <div className="mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '100ms' }}>
            <span className="inline-block rounded-full bg-white/20 px-4 py-2 text-sm font-semibold backdrop-blur-sm">
              Available for opportunities
            </span>
          </div> */}
          <h1
            className="mb-6 opacity-0 animate-fade-in text-6xl font-bold tracking-tight"
            style={{ animationDelay: "300ms" }}
          >
            Full-Stack Developer
          </h1>
          <p
            className="mb-8 opacity-0 animate-fade-in text-xl leading-relaxed text-primary-50"
            style={{ animationDelay: "500ms" }}
          >
            9+ years of experience building web applications and internal
            platforms with expertise in React, TypeScript, and modern frontend
            architecture, with backend experience in Ruby on Rails, Node.js, and
            Elixir.
          </p>
          <div
            className="flex flex-wrap justify-center gap-4 opacity-0 animate-fade-in"
            style={{ animationDelay: "700ms" }}
          >
            <a
              href="#experience"
              className="rounded-lg bg-white px-8 py-3 font-semibold text-primary-700 shadow-lg transition-all hover:shadow-xl hover:scale-105"
            >
              View Experience
            </a>
            <a
              href="#skills"
              className="rounded-lg border-2 border-white px-8 py-3 font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10"
            >
              See Skills
            </a>
            <a
              href="#contact"
              className="rounded-lg border-2 border-white/50 px-8 py-3 font-semibold text-white backdrop-blur-sm transition-all hover:border-white hover:bg-white/10"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
