import { SectionPage } from "@/components/layout";
import { WorkGrid } from "@/components/sections";
import { workPageSections } from "@/data/navigation";
import { workGridByCategory } from "@/data/workGrid";

export default function Work() {
  const availableSections = workPageSections.filter((section) => {
    const category = workGridByCategory[section.id as keyof typeof workGridByCategory];
    return category && category.projects.length > 0;
  });

  return (
    <SectionPage
      title="Work | Anuj Shrestha"
      description="Professional work, freelance projects, and interactive demos by Anuj Shrestha."
      sections={availableSections}
      defaultSection={availableSections[0]?.id || "professional"}
    >
      {availableSections.map((section) => (
        <WorkGrid
          key={section.id}
          title={section.label}
          projects={workGridByCategory[section.id as keyof typeof workGridByCategory]?.projects!}
        />
      ))}
    </SectionPage>
  );
}
