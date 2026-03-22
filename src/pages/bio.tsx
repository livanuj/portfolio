import Head from "next/head";
import { Header, Footer } from "@/components/layout";
import { BioIntro } from "@/components/sections/BioIntro";
import { TechSkills } from "@/components/sections/TechSkills";
import { OtherSkills } from "@/components/sections/OtherSkills";
import { Timeline } from "@/components/sections/Timeline";
import { Education } from "@/components/sections/Education";
import { scrollToSection as scrollToSectionUtil, cn } from "@/utils";
import { useSectionObserver } from "@/hooks";
import { bioPageSections } from "@/data/navigation";

export default function Bio() {
  const [activeSection, setActiveSection] = useSectionObserver(
    bioPageSections,
    "intro",
  );

  const scrollToSection = (sectionId: string) => {
    scrollToSectionUtil(sectionId);
    setActiveSection(sectionId);
  };

  return (
    <>
      <Head>
        <title>Bio | Anuj Shrestha</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Biography, skills, and professional timeline of Anuj Shrestha, senior full-stack developer."
        />
      </Head>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
        <Header />
        <main>
          <div className="sticky top-[73px] z-40 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 transition-colors">
            <div className="container mx-auto px-4">
              <nav className="flex gap-2 overflow-x-auto py-4">
                {bioPageSections.map((section) => (
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
              <BioIntro />
              <TechSkills />
              <OtherSkills />
              <Timeline />
              <Education />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
