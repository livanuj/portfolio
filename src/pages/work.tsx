import { Footer, Header } from "@/components/layout";
import { WorkGrid } from "@/components/sections/WorkGrid";
import { workPageSections } from "@/data/navigation";
import { workGridByCategory } from "@/data/workGrid";
import { useSectionObserver } from "@/hooks";
import { cn, scrollToSection as scrollToSectionUtil } from "@/utils";
import Head from "next/head";

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
    <>
      <Head>
        <title>Work | Anuj Shrestha</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Professional work, freelance projects, and interactive demos by Anuj Shrestha."
        />
      </Head>
      <div className="min-h-screen bg-white transition-colors dark:bg-gray-900">
        <Header />
        <main>
          <div className="sticky top-[73px] z-40 border-b border-gray-200 bg-white transition-colors dark:border-gray-800 dark:bg-gray-900">
            <div className="container mx-auto px-4">
              <nav className="flex gap-2 overflow-x-auto py-4">
                {availableSections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={cn(
                      "whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors",
                      activeSection === section.id
                        ? "bg-accent-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700",
                    )}
                  >
                    {section.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          <div className="container mx-auto px-4 py-12">
            <div className="space-y-16">
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
        </main>
        <Footer />
      </div>
    </>
  );
}
