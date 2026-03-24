import type { Project } from "@/types/portfolio";
import { IconExternalLink } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

type Props = {
  project: Project;
};

export const ProjectCard: React.FC<Props> = ({ project }) => {
  const CardContent = (
    <div className="group relative rounded-lg border-y border-l-4 border-r border-gray-200 border-l-accent-500 bg-white p-6 transition-all hover:shadow-lg dark:border-gray-800 dark:border-l-accent-400 dark:bg-gray-900">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 transition-colors group-hover:text-accent-600 dark:text-gray-100 dark:group-hover:text-accent-400">
            {project.title}
          </h3>
          {project.company && (
            <p className="mt-1 font-medium text-accent-600 dark:text-accent-400">
              {project.company}
            </p>
          )}
          <div className="mt-2 flex flex-wrap gap-3 text-sm text-gray-600 dark:text-gray-400">
            <span>{project.role}</span>
            <span>•</span>
            <span>{project.type}</span>
            <span>•</span>
            <span>{project.period}</span>
          </div>
        </div>
        {project.link && (
          <IconExternalLink
            size={20}
            className="flex-shrink-0 text-gray-400 transition-colors group-hover:text-accent-600 dark:text-gray-600 dark:group-hover:text-accent-400"
          />
        )}
      </div>
      <p className="mt-4 leading-relaxed text-gray-700 dark:text-gray-300">{project.description}</p>
      {project.tags && project.tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );

  if (project.link) {
    return (
      <Link href={project.link} className="block">
        {CardContent}
      </Link>
    );
  }

  return CardContent;
};
