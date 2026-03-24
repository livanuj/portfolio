import { cn } from "@/utils";
import { IconCheck } from "@tabler/icons-react";
import React from "react";

type Props = {
  items: string[];
  icon?: "check" | "arrow";
  className?: string;
};

export const BulletList: React.FC<Props> = (props) => {
  const { items, icon = "arrow", className } = props;

  return (
    <ul className={cn("space-y-2", className)}>
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-2">
          {icon === "check" ? (
            <IconCheck
              size={20}
              className="mt-0.5 flex-shrink-0 text-accent-600 dark:text-accent-400"
            />
          ) : (
            <span className="mt-1 text-accent-600 dark:text-accent-400">▹</span>
          )}
          <span className="leading-relaxed text-gray-700 dark:text-gray-300">{item}</span>
        </li>
      ))}
    </ul>
  );
};
