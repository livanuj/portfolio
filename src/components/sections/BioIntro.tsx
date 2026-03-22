import { bioIntroParagraphs } from "@/data/bioIntro";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/utils";
import React from "react";

export const BioIntro: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="intro" className="py-16">
      <div className="max-w-3xl mx-auto" ref={ref}>
        <h2
          className={cn(
            "text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
          )}
        >
          About Me
        </h2>
        <div
          className={cn(
            "prose prose-lg dark:prose-invert max-w-none transition-all duration-700 delay-100",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
          )}
        >
          {bioIntroParagraphs.map((text, i) => (
            <p
              key={i}
              className={
                i < bioIntroParagraphs.length - 1
                  ? "text-gray-700 dark:text-gray-300 leading-relaxed mb-4"
                  : "text-gray-700 dark:text-gray-300 leading-relaxed"
              }
            >
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};
