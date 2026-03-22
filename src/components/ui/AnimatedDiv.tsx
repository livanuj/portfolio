import React from "react";
import { cn } from "../../utils";

export interface AnimatedDivProps extends React.HTMLAttributes<HTMLDivElement> {
  delay?: string;
  className?: string;
  children: React.ReactNode;
}

export const AnimatedDiv: React.FC<AnimatedDivProps> = ({
  delay = "0s",
  className = "",
  children,
  ...props
}) => {
  return (
    <div
      className={cn("opacity-0 animate-fade-in", className)}
      style={{
        animationDelay: delay,
        animationFillMode: "forwards",
        ...props.style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};
