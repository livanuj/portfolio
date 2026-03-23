import { Layout } from "@/components/layout";
import { SectionNav } from "@/components/sections";
import { useSectionObserver } from "@/hooks";
import { scrollToSection as scrollToSectionUtil } from "@/utils";
import React from "react";

type Props = {
  title: string;
  description: string;
  sections: { id: string; label: string }[];
  defaultSection?: string;
  children: React.ReactNode;
};

export const SectionPage: React.FC<Props> = (props) => {
  const { title, description, sections, defaultSection, children } = props;

  const [activeSection, setActiveSection] = useSectionObserver(
    sections,
    defaultSection || sections[0]?.id || "",
  );

  const scrollToSection = (sectionId: string) => {
    scrollToSectionUtil(sectionId);
    setActiveSection(sectionId);
  };

  return (
    <Layout title={title} description={description}>
      <SectionNav
        sections={sections}
        activeSection={activeSection}
        onSectionClick={scrollToSection}
      />
      <div className="container mx-auto px-4 py-12">
        <div className="space-y-0 md:space-y-8">{children}</div>
      </div>
    </Layout>
  );
};
