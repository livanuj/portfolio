import { cn } from "@/utils";
import React from "react";

type Section = {
  id: string;
  label: string;
};

type Props = {
  sections: Section[];
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
};

export const SectionNav: React.FC<Props> = ({ sections, activeSection, onSectionClick }) => {
  return (
    <div className="sticky top-[73px] z-40 hidden border-b border-gray-200 bg-white transition-colors dark:border-gray-800 dark:bg-gray-900 md:block">
      <div className="container mx-auto px-4">
        <nav className="scrollbar-hide flex gap-2 overflow-x-auto py-4">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => onSectionClick(section.id)}
              className={cn(
                "whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors",
                activeSection === section.id
                  ? "bg-accent-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700",
              )}
            >
              {section.label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};
