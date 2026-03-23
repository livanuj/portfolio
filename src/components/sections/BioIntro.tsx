import { bioIntroParagraphs } from "@/data/bioIntro";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/utils";
import React from "react";

export const BioIntro: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="intro" className="py-16">
      <div className="mx-auto max-w-3xl" ref={ref}>
        <h2
          className={cn(
            "mb-6 text-3xl font-bold text-gray-900 transition-all duration-700 dark:text-gray-100",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
          )}
        >
          About Me
        </h2>
        <div
          className={cn(
            "prose prose-lg dark:prose-invert max-w-none transition-all delay-100 duration-700",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
          )}
        >
          {bioIntroParagraphs.map((text, i) => (
            <p
              key={i}
              className={
                i < bioIntroParagraphs.length - 1
                  ? "mb-4 leading-relaxed text-gray-700 dark:text-gray-300"
                  : "leading-relaxed text-gray-700 dark:text-gray-300"
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
