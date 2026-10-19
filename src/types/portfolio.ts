export type Project = {
  title: string;
  company?: string;
  role: string;
  type: string;
  period?: string;
  description: string;
  link?: string;
  links?: { label: string; url: string }[];
  tags?: string[];
};

export type ProjectFeature = {
  title: string;
  description?: string;
  bullets?: string[];
  screenshots?: Array<{
    src: string;
    alt: string;
  }>;
  // "phone" shows portrait screenshots side by side instead of stacked full width
  screenshotLayout?: "phone";
};

export type ProjectShowcaseData = {
  title: string;
  company?: string;
  role: string;
  period?: string;
  type: string;
  // An array renders as separate paragraphs
  overview: string | string[];
  link?: string;
  features: ProjectFeature[];
  featuresTitle?: string;
  technologies: string[];
  achievements: string[];
  backLink?: string;
};

export type TimelineRole = {
  title: string;
  period: string;
  highlights: string[];
};

export type ExperienceItem = {
  company: string;
  location: string;
  period: string;
  roles: TimelineRole[];
};

export type EducationItem = {
  degree: string;
  institution: string;
  location: string;
  period: string;
  status?: string;
  details?: string[];
};

export type ReferenceItem = {
  name: string;
  title: string;
  company: string;
  email: string;
  quote?: string;
  source?: string;
  sourceUrl?: string;
  link?: string;
};

export type SkillCategory = {
  title: string;
  skills: string[];
};

export type OtherSkillIconId = "code" | "bulb" | "brain" | "rocket" | "users";

export type OtherSkillItem = {
  icon: OtherSkillIconId;
  title: string;
  description: string;
};
