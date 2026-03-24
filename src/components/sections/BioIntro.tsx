import { Section } from "@/components/ui";
import { bioIntroParagraphs } from "@/data/bioIntro";
import React from "react";

export const BioIntro: React.FC = () => {
  return (
    <Section id="intro" title="About Me" maxWidth="3xl">
      <div className="max-w-none transition-all delay-100 duration-700">
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
    </Section>
  );
};
