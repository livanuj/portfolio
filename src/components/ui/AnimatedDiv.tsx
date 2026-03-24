import React from "react";
import { cn } from "../../utils";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  delay?: string;
  className?: string;
  children: React.ReactNode;
};

export const AnimatedDiv: React.FC<Props> = ({
  delay = "0s",
  className = "",
  children,
  ...props
}) => {
  return (
    <div
      className={cn("animate-fade-in opacity-0", className)}
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
