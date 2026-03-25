---
name: data-content
description: "Use when: adding new portfolio content, creating new projects, adding education entries, updating skills, or modifying data-driven content. Provides patterns for type-safe data files, ProjectShowcaseData structure, and integrating new content."
---

# Data-Driven Content Skill

This skill documents the data-driven architecture pattern used in this Next.js portfolio project.

## Architecture Overview

All content is **centralized in `/src/data/`** directory and follows a **type-first** approach:

```
Type Definition → Data File → Component → Page
```

This ensures:

- Type safety across the application
- Single source of truth for content
- Easy content updates without touching component code
- Scalable content management

## File Structure

```
src/
├── types/
│   └── portfolio.ts          # All type definitions
├── data/
│   ├── site.ts               # Site metadata
│   ├── bioIntro.ts           # Biography paragraphs
│   ├── education.ts          # Education entries
│   ├── techSkills.ts         # Technical skills by category
│   ├── otherSkills.ts        # Specializations
│   ├── timeline.ts           # Work experience timeline
│   ├── navigation.ts         # Section navigation configs
│   ├── projects.ts           # Project cards data
│   ├── workGrid.ts           # Work grid category mapping
│   └── projectShowcases/
│       ├── smartflow.ts      # Detailed project showcase
│       └── leavelogic.ts     # Detailed project showcase
└── components/
    └── sections/             # Components consume data
```

## Type Definitions

All types are defined in `src/types/portfolio.ts`. Here's the pattern:

```typescript
// Example: Simple project card type
export type Project = {
  title: string;
  company?: string;
  role: string;
  type: string;
  period: string;
  description: string;
  link?: string;
  tags?: string[];
};

// Example: Detailed project showcase type
export type ProjectShowcaseData = {
  title: string;
  company: string;
  role: string;
  period: string;
  type: string;
  overview: string;
  link?: string;
  features: ProjectFeature[];
  technologies: string[];
  achievements: string[];
  backLink?: string;
};
```

**Other available types**: `ExperienceItem`, `TimelineRole`, `EducationItem`, `SkillCategory`, `OtherSkillItem`

See `src/types/portfolio.ts` for complete type definitions.

## Adding New Content

### Adding a New Project Card

**Step 1: Add to data file** (`src/data/projects.ts`)

```typescript
const newProject: Project = {
  title: "My New Project",
  company: "Company Name",
  role: "Your Role",
  type: "Project Type",
  period: "Jan 2024 – Present",
  description: "Brief description of the project...",
  link: "/work/my-new-project", // Optional: link to detail page
  tags: ["React", "TypeScript", "Next.js"],
};

export const portfolioData = {
  professional: [...professionalProjects, newProject],
  freelance: freelanceProjects,
};
```

**Step 2: The component automatically picks it up**

The `WorkGrid` component on `/work` page automatically renders all projects from the data file. No component changes needed!

### Adding a Detailed Project Showcase

**Step 1: Create showcase data file** (`src/data/projectShowcases/myproject.ts`)

```typescript
import type { ProjectShowcaseData } from "@/types/portfolio";

export const myProjectData: ProjectShowcaseData = {
  title: "My New Project",
  company: "Company Name",
  role: "Your Role",
  period: "2024 - Present",
  type: "Project Type",
  overview: "Comprehensive overview paragraph...",
  link: "https://example.com", // Optional external link

  features: [
    {
      title: "Feature Name",
      description: "Feature description",
      bullets: ["Key point 1", "Key point 2", "Key point 3"],
      screenshots: [
        {
          src: "/screenshots/myproject/feature-1.png",
          alt: "Feature screenshot description",
        },
      ],
    },
    // Add more features...
  ],

  technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"],

  achievements: ["Achievement 1", "Achievement 2", "Achievement 3"],

  backLink: "/work", // Optional: custom back link
};
```

**Step 2: Create showcase page** (`src/pages/work/myproject.tsx`)

```typescript
import { Layout } from "@/components/layout";
import { ProjectShowcase } from "@/components/sections/ProjectShowcase";
import { myProjectData } from "@/data/projectShowcases/myproject";

export default function MyProject() {
  return (
    <Layout
      title="My New Project - Company | Anuj Shrestha"
      description="Brief SEO description of the project"
    >
      <div className="container mx-auto px-4 py-12">
        <ProjectShowcase data={myProjectData} />
      </div>
    </Layout>
  );
}
```

**Step 3: Link from project card**

Update the project in `src/data/projects.ts`:

```typescript
{
  title: "My New Project",
  // ... other fields
  link: "/work/myproject",  // Now links to the detailed page
}
```

### Adding Screenshots

1. **Place images** in `/public/screenshots/projectname/`
2. **Reference in data**:
   ```typescript
   screenshots: [
     {
       src: "/screenshots/projectname/feature.png",
       alt: "Descriptive alt text for accessibility",
     },
   ];
   ```
3. **GIF support**: Files ending in `.gif` are automatically marked as `unoptimized` by the ProjectShowcase component

### Adding Education Entry

**Edit** `src/data/education.ts`:

```typescript
export const education: EducationItem[] = [
  {
    degree: "Master of Science in Computer Science",
    institution: "University Name",
    location: "City, Country",
    period: "Aug 2022 – Present",
    status: "Thesis ongoing: Machine Learning in Web Applications",
  },
  // Existing entries...
];
```

The Education component automatically renders all entries.

### Adding Tech Skills

**Edit** `src/data/techSkills.ts`:

```typescript
export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: ["TypeScript & JavaScript proficiency", "React & Next.js expertise", "Your new skill"],
  },
  // Or add a new category
  {
    title: "New Category",
    skills: ["Skill 1", "Skill 2", "Skill 3"],
  },
];
```

### Adding Specializations (Other Skills)

**Edit** `src/data/otherSkills.ts`:

```typescript
export const otherSkills: OtherSkillItem[] = [
  {
    icon: "rocket", // "code" | "bulb" | "brain" | "rocket" | "users"
    title: "New Specialization",
    description: "Description of this specialized skill area.",
  },
  // Existing skills...
];
```

**Note**: Icon mapping is defined in `src/components/sections/OtherSkills.tsx`

### Adding Timeline Entry

**Edit** `src/data/timeline.ts`:

```typescript
export const experiences: ExperienceItem[] = [
  {
    company: "New Company",
    location: "City, Country",
    period: "Jan 2024 – Present",
    roles: [
      {
        title: "Senior Developer",
        period: "Jan 2024 – Present",
        highlights: [
          "Achievement or responsibility 1",
          "Achievement or responsibility 2",
          "Achievement or responsibility 3",
        ],
      },
    ],
  },
  // Existing entries...
];
```

## Page Integration Patterns

### Section Pages (bio.tsx, work.tsx)

These pages use the `SectionPage` component:

```typescript
import { SectionPage } from "@/components/layout";

export default function Bio() {
  return (
    <SectionPage
      title="Bio | Anuj Shrestha"
      description="SEO description"
      sections={bioPageSections}  // From @/data/navigation
      defaultSection="intro"
    >
      {/* Section components that consume data */}
      <BioIntro />
      <TechSkills />
      <OtherSkills />
    </SectionPage>
  );
}
```

### Adding a New Section to Bio Page

1. **Add section ID** to `src/data/navigation.ts`:

   ```typescript
   export const bioPageSections = [
     { id: "intro", label: "Intro" },
     { id: "new-section", label: "New Section" },
     // ...
   ];
   ```

2. **Create data file** (if needed): `src/data/newSection.ts`

3. **Create section component**: `src/components/sections/NewSection.tsx`
   - Use `Section` wrapper component
   - Import data from data file

4. **Add to page**: `src/pages/bio.tsx`
   ```typescript
   <SectionPage /* props */>
     {/* existing sections */}
     <NewSection />
   </SectionPage>
   ```

## Content Update Checklist

When adding new content:

- [ ] Define or verify type in `src/types/portfolio.ts`
- [ ] Add data to appropriate file in `src/data/`
- [ ] Verify component consumes the data automatically OR create component if needed
- [ ] For project showcases: create data file + page component
- [ ] For images: place in `/public/` with descriptive paths
- [ ] Update navigation config if adding new section
- [ ] Test content renders correctly in both light and dark modes

## Benefits of This Pattern

1. **Clean Separation**: Content editors don't need to touch React code
2. **Type Safety**: TypeScript catches data structure errors
3. **Consistency**: All similar content follows the same structure
4. **Scalability**: Adding 10 projects is as easy as adding 1
5. **Maintainability**: Single source of truth for all content

## Related Files

- Type definitions: `src/types/portfolio.ts`
- All data files: `src/data/`
- Section components that consume data: `src/components/sections/`
- Example showcase: `src/pages/work/smartflow.tsx`
