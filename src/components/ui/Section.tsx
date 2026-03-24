import { useScrollAnimation } from "@/hooks";
import { cn } from "@/utils";
import React from "react";

type Props = {
  id: string;
  title: string;
  maxWidth?: "3xl" | "4xl" | "5xl";
  children: React.ReactNode;
  className?: string;
};

export const Section: React.FC<Props> = (props) => {
  const { id, title, maxWidth = "4xl", children, className } = props;
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id={id} className={cn("py-16", className)}>
      <div className={cn("mx-auto px-4", `max-w-${maxWidth}`)} ref={ref}>
        <h2
          className={cn(
            "mb-8 text-3xl font-bold text-gray-900 transition-all duration-700 dark:text-gray-100",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
          )}
        >
          {title}
        </h2>
        <div
          className={cn(
            "transition-all duration-700",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
          )}
        >
          {children}
        </div>
      </div>
    </section>
  );
};
