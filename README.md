# Portfolio - Anuj Shrestha

A modern, professional portfolio website showcasing full-stack development expertise. Built with React, TypeScript, and Next.js with a focus on clean architecture, dark mode support, and smooth user experience.

## ✨ Features

- 🎨 Modern, clean design with smooth scroll animations
- 🌓 Dark mode support with system preference detection
- 📱 Fully responsive across all devices
- ⚡ Static site generation for optimal performance
- 🎯 Data-driven architecture for easy content updates
- 🧭 Sticky section navigation with active state tracking
- 🎭 Smooth scrolling and intersection observer animations
- 📊 Professional timeline and project showcase layouts
- 🔧 Type-safe data structures with TypeScript
- ♿ Accessible with proper ARIA labels

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (Pages Router)
- **Language**: TypeScript 5.3+
- **Styling**: Tailwind CSS 3.4 with dark mode variants
- **Theme**: next-themes for dark mode management
- **Icons**: Tabler Icons React
- **Utilities**: clsx + tailwind-merge for className management
- **Optimization**: Next.js Image for optimized images

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view your portfolio.

### Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server (after build)
npm start

# Run ESLint
npm run lint
```

### Build for Production

```bash
# Create optimized production build
npm run build
```

The build output will be in the `.next` folder, optimized and ready for deployment.

## 📄 Pages

The portfolio consists of three main pages:

- **Home (`/`)** - Landing page with profile introduction and quick navigation
- **Bio (`/bio`)** - Detailed biography, skills, timeline, and education
- **Work (`/work`)** - Professional work, freelance projects, and demos
- **Project Showcase (`/work/[project]`)** - Individual project detail pages

## 🎨 Customization

### Update Personal Information

All content is centralized in the `/src/data` folder for easy updates:

**Site Information** - `src/data/site.ts`

```typescript
export const site = {
  fullName: "Your Name",
  location: "Your Location",
  email: "your.email@example.com",
  githubUrl: "https://github.com/yourusername",
  linkedinUrl: "https://linkedin.com/in/yourusername",
  profileImage: "/images/profile.jpg",
  // ...
};
```

**Bio Intro** - `src/data/bioIntro.ts`

```typescript
export const bioIntroParagraphs: string[] = [
  "Your introduction paragraph...",
  // Add more paragraphs
];
```

**Tech Skills** - `src/data/techSkills.ts`

- Update your technical skills by category

**Timeline** - `src/data/timeline.ts`

- Add your work experience and education timeline

**Projects** - `src/data/projects.ts`

- Showcase your professional and freelance work

**Education** - `src/data/education.ts`

- Update your educational background

### Theme Colors

Customize the accent color in `tailwind.config.js`:

```javascript
colors: {
  accent: {
    50: '#ecfeff',
    // ... customize your accent colors
    600: '#0891b2',
    // ...
  },
}
```

### Dark Mode

Dark mode is automatically handled by `next-themes`. The theme toggle is in the header and respects system preferences by default.

## 🔧 Development Tips

### Adding a New Project

1. Add project data to `src/data/projects.ts`:

```typescript
{
  title: "Your Project",
  company: "Company Name",
  role: "Your Role",
  type: "Project Type",
  period: "Jan 2024 – Present",
  description: "Project description...",
  link: "/work/your-project", // Optional
  tags: ["React", "TypeScript"],
}
```

2. (Optional) Create a detailed showcase page:
   - Create `src/data/projectShowcases/your-project.ts`
   - Create `src/pages/work/your-project.tsx`

### Updating Skills

Edit `src/data/techSkills.ts`:

```typescript
export const skillCategories: SkillCategory[] = [
  {
    title: "Your Category",
    skills: [
      "Skill 1",
      "Skill 2",
      // ...
    ],
  },
];
```

### Customizing Animations

Adjust animation timing in components using `useScrollAnimation`:

```typescript
const { ref, isVisible } = useScrollAnimation(0.15); // threshold
```

Or modify the hook in `src/hooks/useScrollAnimation.ts` for global changes.

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── layout/              # Layout components
│   │   │   ├── Header.tsx       # Navigation header with theme toggle
│   │   │   ├── Footer.tsx       # Footer with social links
│   │   │   └── index.ts         # Barrel exports
│   │   ├── sections/            # Page sections
│   │   │   ├── BioIntro.tsx     # Biography introduction
│   │   │   ├── TechSkills.tsx   # Technical skills grid
│   │   │   ├── OtherSkills.tsx  # Specializations showcase
│   │   │   ├── Timeline.tsx     # Work experience timeline
│   │   │   ├── Education.tsx    # Education history
│   │   │   ├── ProjectCard.tsx  # Project card component
│   │   │   ├── WorkGrid.tsx     # Projects grid layout
│   │   │   ├── ProjectShowcase.tsx # Project detail page
│   │   │   └── index.ts         # Barrel exports
│   │   └── ui/                  # UI components
│   │       ├── Logo.tsx         # Logo component
│   │       ├── ThemeToggle.tsx  # Dark mode toggle
│   │       ├── AnimatedDiv.tsx  # Animated wrapper
│   │       └── index.ts         # Barrel exports
│   ├── data/                    # Content data (edit here!)
│   │   ├── site.ts              # Site-wide information
│   │   ├── bioIntro.ts          # Biography paragraphs
│   │   ├── techSkills.ts        # Technical skills by category
│   │   ├── otherSkills.ts       # Other specializations
│   │   ├── timeline.ts          # Work experience timeline
│   │   ├── education.ts         # Education history
│   │   ├── projects.ts          # Project listings
│   │   ├── workGrid.ts          # Work page configuration
│   │   ├── navigation.ts        # Section navigation config
│   │   └── projectShowcases/    # Individual project details
│   │       └── smartflow.ts     # Example project showcase
│   ├── hooks/                   # Custom React hooks
│   │   ├── useScrollAnimation.ts # Scroll reveal animation
│   │   ├── useSectionObserver.ts # Section tracking
│   │   └── index.ts             # Barrel exports
│   ├── types/                   # TypeScript types
│   │   └── portfolio.ts         # Type definitions
│   ├── utils/                   # Utility functions
│   │   ├── cn.ts                # ClassName merger (clsx + tw-merge)
│   │   ├── scroll.ts            # Smooth scroll utilities
│   │   └── index.ts             # Barrel exports
│   ├── pages/                   # Next.js pages
│   │   ├── _app.tsx             # App wrapper with ThemeProvider
│   │   ├── _document.tsx        # HTML document
│   │   ├── index.tsx            # Home page
│   │   ├── bio.tsx              # Biography page
│   │   ├── work.tsx             # Work portfolio page
│   │   ├── workflow-builder.tsx # Demo page (placeholder)
│   │   └── work/
│   │       └── smartflow.tsx    # Project detail page
│   └── styles/
│       └── globals.css          # Global styles & CSS variables
├── public/                      # Static assets
│   └── images/
│       └── profile.jpg          # Profile image
├── next.config.mjs              # Next.js config
├── tailwind.config.js           # Tailwind CSS config
├── tsconfig.json                # TypeScript config
└── package.json
```

## 🏗️ Architecture Highlights

### Data-Driven Content

All portfolio content lives in `/src/data`, making it easy to update without touching components:

- Update your bio, skills, timeline, and projects in TypeScript files
- Type-safe data structures prevent errors
- Single source of truth for all content

### Barrel Exports

Components use barrel exports (`index.ts`) for cleaner imports:

```typescript
// ✅ Clean imports via barrel exports
import { Header, Footer } from "@/components/layout";
import { BioIntro, TechSkills, Timeline } from "@/components/sections";
import { Logo, ThemeToggle } from "@/components/ui";

// ❌ Without barrel exports (verbose)
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BioIntro from "@/components/sections/BioIntro";
```

### Utility-First Styling

Uses the `cn()` utility (clsx + tailwind-merge) for managing className strings:

```typescript
import { cn } from '@/utils';

<div className={cn(
  "base-classes",
  isActive && "active-classes",
  variant === "primary" ? "primary-classes" : "secondary-classes"
)} />
```

### Custom Hooks

- `useScrollAnimation` - Intersection Observer-based reveal animations
- `useSectionObserver` - Tracks which section is in viewport for nav highlighting

## 🐛 Troubleshooting

### Development server not starting

```bash
# Clear Next.js cache and reinstall
rm -rf .next node_modules
npm install
npm run dev
```

### Build errors

```bash
# Check for TypeScript and ESLint errors
npx tsc --noEmit
npm run lint
```

### Dark mode not working

- Ensure `ThemeProvider` is wrapping your app in `_app.tsx`
- Check that dark mode classes are applied correctly in Tailwind config
- Clear browser cache and localStorage

### Images not loading

- Verify images exist in `/public/images/`
- Check image paths in data files (e.g., `site.ts`)
- Ensure proper file extensions (.jpg, .png, etc.)

## 🎓 Learning Resources

Built with:

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [next-themes](https://github.com/pacocoursey/next-themes)

## 🤝 Contributing

This is a personal portfolio, but feel free to:

- Fork it for your own portfolio
- Submit issues for bugs
- Suggest improvements

## 📄 License

MIT License

Copyright (c) 2024-2026 Anuj Shrestha

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
