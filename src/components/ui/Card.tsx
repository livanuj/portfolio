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
        "rounded-lg border border-gray-200 bg-white p-6 transition-all",
        hover && "hover:border-accent-500",
        className,
      )}
    >
      {children}
    </div>
  );
};
