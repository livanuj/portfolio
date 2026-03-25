# Portfolio Project Guidelines

## Code Style

- Use Prettier for all formatting (configured in `.prettierrc`)
- Use TypeScript strict mode - all types must be explicitly defined
- Prefer `const` over `let`, avoid `var`
- Use `cn()` utility from `@/utils` for conditional className concatenation
- Use `satisfies` keyword for type validation that preserves literal types

## Validation & Testing

After making any code changes (edits, file creation, refactoring), **automatically run** these validation commands without asking permission:

```bash
npx tsc --noEmit && npm run lint
```

If validation fails, fix the errors before considering the task complete.

**Pre-commit hooks** are configured via Husky + lint-staged to automatically:

- Run TypeScript type checking (`npm run typecheck`)
- Format and lint staged files
- Prevent commits with errors

For **all other terminal commands** (build, install, deploy, etc.), always ask permission before running.

## Available Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run format` - Format all files with Prettier
- `npm run format:check` - Check formatting without changes
- `npm run typecheck` - Run TypeScript compiler checks without emitting files

## Architecture

- **Pages Router**: Using Next.js Pages Router (not App Router)
- **Data-driven**: All content centralized in `/src/data` folder
- **Type safety**: Use types from `/src/types/portfolio.ts`
- **Static export**: Configured with `output: 'export'` in `next.config.mjs`
- **Component library**: Shared components in `/src/components/ui` and `/src/components/layout`

## Shared Components

**Before creating new components**, check if shared components can be used:

### UI Components (`@/components/ui`)

- **Section** - Page sections with scroll animations, heading, and max-width container
  - Props: `id`, `title`, `maxWidth` (3xl|4xl|5xl), `children`, `className`
  - Use for any section component instead of manual scroll animation setup
- **Card** - Standard card component with dark mode support
  - Props: `children`, `className`, `hover` (boolean for hover border effect)
  - Use for education cards, skill cards, content blocks
- **BulletList** - List items with check or arrow icons
  - Props: `items` (string[]), `icon` ("check" | "arrow"), `className`
  - Use for feature lists, tech skills, timeline highlights
- **IconBadge** - Icon wrapper with accent background
  - Props: `children`, `className`
  - Use for wrapping Tabler icons in cards
- **AnimatedDiv** - Fade-in animation wrapper with delay support
- **Logo** - Site logo component
- **ThemeToggle** - Dark mode toggle button

### Layout Components (`@/components/layout`)

- **SectionPage** - Page layout with section navigation
  - Props: `title`, `description`, `sections`, `defaultSection`, `children`
  - Handles: Layout, SectionNav, scroll observer, scroll-to functionality
  - Use for pages with multiple sections (like bio.tsx, work.tsx)
- **Layout** - Base layout with Header, Footer, and Head meta tags
- **Header** - Top navigation with active route detection
- **Footer** - Site footer with social links

### Example

```typescript
// Instead of manual section setup:
import { Section, Card, BulletList } from "@/components/ui";

export const MySection: React.FC = () => {
  return (
    <Section id="my-section" title="My Section" maxWidth="4xl">
      <Card hover>
        <h3>Feature Title</h3>
        <BulletList items={["Feature 1", "Feature 2"]} icon="check" />
      </Card>
    </Section>
  );
};
```

## Conventions

- Imports must be organized: external packages first, then absolute imports (`@/`), then relative
- All React components use `React.FC<Props>` type
- Shared components preferred over duplicating patterns
- Dark mode support via `next-themes` - always add dark mode variants

### Code Quality

#### ESLint Rules

Key enabled rules:

- Prettier integration for formatting
- React hooks rules enforced
- TypeScript recommended rules
- Tailwind CSS class ordering
- Import organization (via prettier-plugin-organize-imports)

Key disabled rules (project preference):

- `no-console` - Console logs are allowed
- `@typescript-eslint/no-explicit-any` - Any is allowed when necessary
- `import/prefer-default-export` - Named exports preferred
- `react/jsx-props-no-spreading` - Props spreading is allowed

#### Prettier Configuration

- **Print width**: 100 characters
- **Trailing commas**: Always
- **Plugins**:
  - `prettier-plugin-organize-imports` (auto-organizes imports)
  - `prettier-plugin-tailwindcss` (orders Tailwind classes)

**Imports are automatically organized** - don't manually sort them.

## Skills

For detailed guidance on specific tasks, refer to these skills:

- **component-creation** (`/.github/skills/component-creation/SKILL.md`)
  - Creating new React components with proper patterns
  - Using shared components (Section, Card, BulletList, IconBadge)
  - Dark mode support patterns
  - Animation and scroll effects
  - File organization and barrel exports
- **data-content** (`/.github/skills/data-content/SKILL.md`)
  - Adding new portfolio content (projects, education, skills)
  - ProjectShowcaseData structure for detailed project pages
  - Type-first data architecture
  - Integration patterns for new sections

Load these skills when creating components or adding content for comprehensive best practices.
