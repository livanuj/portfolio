import { cn } from "@/utils";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const IconBadge: React.FC<Props> = (props) => {
  const { children, className } = props;

  return (
    <div
      className={cn(
        "flex-shrink-0 rounded-lg bg-accent-100 p-2 text-accent-600 dark:bg-accent-900/20 dark:text-accent-400",
        className,
      )}
    >
      {children}
    </div>
  );
};
