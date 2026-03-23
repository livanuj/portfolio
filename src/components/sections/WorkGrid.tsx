import { Section } from "@/components/ui";
import React from "react";
import { Project } from "../../types/portfolio";
import { ProjectCard } from "./ProjectCard";

type Props = {
  title: string;
  projects: Project[];
};

export const WorkGrid: React.FC<Props> = (props) => {
  const { title, projects } = props;

  // Convert title to id format (e.g., "Professional Work" -> "professional")
  const sectionId = title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");

  return (
    <Section id={sectionId} title={title} maxWidth="5xl">
      <div className="space-y-6 transition-all delay-100 duration-700">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </Section>
  );
};
