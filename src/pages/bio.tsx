import { SectionPage } from "@/components/layout";
import {
  BioIntro,
  Education,
  OtherSkills,
  References,
  TechSkills,
  Timeline,
} from "@/components/sections";
import { bioPageSections } from "@/data/navigation";

export default function Bio() {
  return (
    <SectionPage
      title="Bio | Anuj Shrestha"
      description="Biography, skills, and professional timeline of Anuj Shrestha, senior full-stack developer."
      sections={bioPageSections}
      defaultSection="intro"
    >
      <BioIntro />
      <TechSkills />
      <OtherSkills />
      <Timeline />
      <Education />
      <References />
    </SectionPage>
  );
}
