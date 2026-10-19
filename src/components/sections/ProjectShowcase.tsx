import type { ProjectShowcaseData } from "@/types/portfolio";
import { IconArrowLeft, IconExternalLink } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  data: ProjectShowcaseData;
};

export const ProjectShowcase: React.FC<Props> = ({ data }) => {
  return (
    <div className="mx-auto max-w-4xl">
      <Link
        href={data.backLink || "/work"}
        className="mb-8 inline-flex items-center gap-2 text-accent-600 hover:underline"
      >
        <IconArrowLeft size={20} />
        <span>All Projects</span>
      </Link>

      <div className="mb-12">
        <div className="mb-6 flex items-start justify-between gap-4">
          <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">{data.title}</h1>
          {data.link && (
            <a
              href={data.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-lg bg-accent-600 px-4 py-2 font-medium text-white transition-colors hover:bg-accent-700"
            >
              <span>Visit Product</span>
              <IconExternalLink size={18} />
            </a>
          )}
        </div>

        <div className="mb-6 grid grid-cols-2 gap-4 md:grid-cols-4">
          <div>
            <p className="mb-1 text-sm text-gray-600">Company</p>
            <p className="font-semibold text-gray-900">{data.company}</p>
          </div>
          <div>
            <p className="mb-1 text-sm text-gray-600">Role</p>
            <p className="font-semibold text-gray-900">{data.role}</p>
          </div>
          <div>
            <p className="mb-1 text-sm text-gray-600">Period</p>
            <p className="font-semibold text-gray-900">{data.period}</p>
          </div>
          <div>
            <p className="mb-1 text-sm text-gray-600">Type</p>
            <p className="font-semibold text-gray-900">{data.type}</p>
          </div>
        </div>
      </div>

      <section className="mb-16">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">Overview</h2>
        <div className="max-w-none">
          <p className="leading-relaxed text-gray-700">{data.overview}</p>
        </div>
      </section>

      {data.features.length > 0 && (
        <section className="mb-16">
          <h2 className="mb-8 text-2xl font-bold text-gray-900">Key Features & Contributions</h2>

          {data.features.map((feature, index) => (
            <div key={index} className="mb-12">
              <h3 className="mb-3 text-xl font-semibold text-gray-900">{feature.title}</h3>

              {feature.description && (
                <p className="mb-6 leading-relaxed text-gray-700">{feature.description}</p>
              )}

              {feature.bullets && feature.bullets.length > 0 && (
                <ul className="mb-6 space-y-2">
                  {feature.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="flex items-start text-gray-700">
                      <span className="mr-3 mt-1 flex-shrink-0 select-none text-accent-600">•</span>
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}

              {feature.screenshots && feature.screenshots.length > 0 && (
                <div className="space-y-4">
                  {feature.screenshots.map((screenshot, screenshotIndex) => {
                    return (
                      <div
                        key={screenshotIndex}
                        className="overflow-hidden rounded-lg border border-gray-200"
                      >
                        <Image
                          src={screenshot.src}
                          alt={screenshot.alt}
                          width={1200}
                          height={675}
                          className="h-auto w-full"
                        />
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </section>
      )}

      {data.technologies.length > 0 && (
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">Technologies Used</h2>
          <div className="flex flex-wrap gap-2">
            {data.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-accent-200 bg-accent-50 px-4 py-2 font-medium text-accent-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>
      )}

      {data.achievements.length > 0 && (
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">Key Achievements</h2>
          <ul className="space-y-3">
            {data.achievements.map((achievement, index) => (
              <li key={index} className="flex items-start text-gray-700">
                <span className="mr-3 mt-0.5 flex-shrink-0 select-none text-accent-600">▹</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
};
