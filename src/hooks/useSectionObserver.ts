import { useEffect, useState } from "react";

type Section = {
  id: string;
  label: string;
};

/**
 * Custom hook to observe which section is currently in view
 * @param sections - Array of sections to observe
 * @param defaultSection - Initial active section (default: first section)
 * @returns [activeSection, setActiveSection] - The currently active section and setter function
 */
export const useSectionObserver = (sections: Section[], defaultSection?: string) => {
  const [activeSection, setActiveSection] = useState(defaultSection || sections[0]?.id || "");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-120px 0px -60% 0px", // Account for sticky header
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [sections]);

  return [activeSection, setActiveSection] as const;
};
