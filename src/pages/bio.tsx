import { Layout } from "@/components/layout";
import {
  BioIntro,
  Education,
  OtherSkills,
  SectionNav,
  TechSkills,
  Timeline,
} from "@/components/sections";
import { bioPageSections } from "@/data/navigation";
import { useSectionObserver } from "@/hooks";
import { scrollToSection as scrollToSectionUtil } from "@/utils";

export default function Bio() {
  const [activeSection, setActiveSection] = useSectionObserver(bioPageSections, "intro");

  const scrollToSection = (sectionId: string) => {
    scrollToSectionUtil(sectionId);
    setActiveSection(sectionId);
  };

  return (
    <Layout
      title="Bio | Anuj Shrestha"
      description="Biography, skills, and professional timeline of Anuj Shrestha, senior full-stack developer."
    >
      <SectionNav
        sections={bioPageSections}
        activeSection={activeSection}
        onSectionClick={scrollToSection}
      />
      <div className="container mx-auto px-4 py-12">
        <div className="space-y-0 md:space-y-8">
          <BioIntro />
          <TechSkills />
          <OtherSkills />
          <Timeline />
          <Education />
        </div>
      </div>
    </Layout>
  );
}
