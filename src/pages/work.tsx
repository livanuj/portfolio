import { Layout } from "@/components/layout";
import { SectionNav, WorkGrid } from "@/components/sections";
import { workPageSections } from "@/data/navigation";
import { workGridByCategory } from "@/data/workGrid";
import { useSectionObserver } from "@/hooks";
import { scrollToSection as scrollToSectionUtil } from "@/utils";

export default function Work() {
  const [activeSection, setActiveSection] = useSectionObserver(
    workPageSections,
    workPageSections[0]?.id || "professional",
  );

  const scrollToSection = (sectionId: string) => {
    scrollToSectionUtil(sectionId);
    setActiveSection(sectionId);
  };

  const availableSections = workPageSections.filter((section) => {
    const category = workGridByCategory[section.id as keyof typeof workGridByCategory];
    return category && category.projects.length > 0;
  });

  return (
    <Layout
      title="Work | Anuj Shrestha"
      description="Professional work, freelance projects, and interactive demos by Anuj Shrestha."
    >
      <SectionNav
        sections={availableSections}
        activeSection={activeSection}
        onSectionClick={scrollToSection}
      />
      <div className="container mx-auto px-4 py-12">
        <div className="space-y-0 md:space-y-8">
          {availableSections.map((section) => (
            <WorkGrid
              key={section.id}
              title={section.label}
              projects={
                workGridByCategory[section.id as keyof typeof workGridByCategory]?.projects!
              }
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}
