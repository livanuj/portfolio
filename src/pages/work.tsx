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
    "professional",
  );

  const scrollToSection = (sectionId: string) => {
    scrollToSectionUtil(sectionId);
    setActiveSection(sectionId);
  };

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
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
        <Header />
        <main>
          <div className="sticky top-[73px] z-40 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 transition-colors">
            <div className="container mx-auto px-4">
              <nav className="flex gap-2 overflow-x-auto py-4">
                {workPageSections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors",
                      activeSection === section.id
                        ? "bg-accent-600 text-white"
                        : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700",
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
              <WorkGrid category="professional" />
              <WorkGrid category="freelance" />
              <WorkGrid category="demos" />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
