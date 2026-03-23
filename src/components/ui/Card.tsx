import { cn } from "@/utils";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
};

export const Card: React.FC<Props> = (props) => {
  const { children, className, hover = false } = props;

  return (
    <div
      className={cn(
        "rounded-lg border border-gray-200 bg-white p-6 transition-all dark:border-gray-800 dark:bg-gray-900",
        hover && "hover:border-accent-500 dark:hover:border-accent-400",
        className,
      )}
    >
      {children}
    </div>
  );
};
