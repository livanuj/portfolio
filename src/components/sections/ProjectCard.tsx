import React from "react";
import Link from "next/link";
import { IconExternalLink } from "@tabler/icons-react";
import type { Project } from "@/types/portfolio";

type ProjectCardProps = {
  project: Project;
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const CardContent = (
    <div className="group relative border-l-4 border-l-accent-500 dark:border-l-accent-400 bg-white dark:bg-gray-900 border-y border-r border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:shadow-lg transition-all">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
            {project.title}
          </h3>
          {project.company && (
            <p className="text-accent-600 dark:text-accent-400 font-medium mt-1">
              {project.company}
            </p>
          )}
          <div className="flex flex-wrap gap-3 mt-2 text-sm text-gray-600 dark:text-gray-400">
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
            className="flex-shrink-0 text-gray-400 dark:text-gray-600 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors"
          />
        )}
      </div>
      <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
        {project.description}
      </p>
      {project.tags && project.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs font-medium rounded bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
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
