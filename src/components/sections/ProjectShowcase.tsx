import type { ProjectShowcaseData } from "@/types/portfolio";
import { IconArrowLeft, IconExternalLink } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type ProjectShowcaseProps = {
  data: ProjectShowcaseData;
};

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ data }) => {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Back Link */}
      <Link
        href={data.backLink || "/work"}
        className="inline-flex items-center gap-2 text-accent-600 dark:text-accent-400 hover:underline mb-8"
      >
        <IconArrowLeft size={20} />
        <span>All Projects</span>
      </Link>

      {/* Project Header */}
      <div className="mb-12">
        <div className="flex items-start justify-between gap-4 mb-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100">
            {data.title}
          </h1>
          {data.link && (
            <a
              href={data.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent-600 hover:bg-accent-700 dark:bg-accent-500 dark:hover:bg-accent-600 text-white rounded-lg font-medium transition-colors whitespace-nowrap"
            >
              <span>Visit Product</span>
              <IconExternalLink size={18} />
            </a>
          )}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
              Company
            </p>
            <p className="font-semibold text-gray-900 dark:text-gray-100">
              {data.company}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
              Role
            </p>
            <p className="font-semibold text-gray-900 dark:text-gray-100">
              {data.role}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
              Period
            </p>
            <p className="font-semibold text-gray-900 dark:text-gray-100">
              {data.period}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
              Type
            </p>
            <p className="font-semibold text-gray-900 dark:text-gray-100">
              {data.type}
            </p>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Overview
        </h2>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {data.overview}
          </p>
        </div>
      </section>

      {/* Key Features Section */}
      {data.features.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8">
            Key Features & Contributions
          </h2>

          {data.features.map((feature, index) => (
            <div key={index} className="mb-12">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                {feature.description}
              </p>

              {/* Screenshot */}
              {feature.screenshot ? (
                <div className="rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                  <Image
                    src={feature.screenshot.src}
                    alt={feature.screenshot.alt}
                    width={1200}
                    height={675}
                    className="w-full h-auto"
                  />
                </div>
              ) : (
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 aspect-video flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-gray-500 dark:text-gray-400 mb-2">
                      Screenshot placeholder
                    </p>
                    <p className="text-sm text-gray-400 dark:text-gray-500">
                      {feature.title}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </section>
      )}

      {/* Technologies Section */}
      {data.technologies.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Technologies Used
          </h2>
          <div className="flex flex-wrap gap-2">
            {data.technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-accent-50 dark:bg-accent-900/20 text-accent-700 dark:text-accent-300 rounded-lg font-medium border border-accent-200 dark:border-accent-800"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Key Achievements Section */}
      {data.achievements.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Key Achievements
          </h2>
          <ul className="space-y-3">
            {data.achievements.map((achievement, index) => (
              <li
                key={index}
                className="flex items-start text-gray-700 dark:text-gray-300"
              >
                <span className="text-accent-600 dark:text-accent-400 mr-3 mt-0.5 select-none flex-shrink-0">
                  ▹
                </span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
};
