---
name: component-creation
description: "Use when: creating new React components, UI components, section components, or refactoring components. Provides patterns for React.FC typing, shared components usage (Section, Card, BulletList, IconBadge), dark mode support, scroll animations, and file organization."
---

# Component Creation Skill

This skill documents the established patterns for creating new React components in this Next.js portfolio project.

## Core Patterns

### Component Type Definition

**All components** use the `React.FC<Props>` pattern with explicit TypeScript typing:

```typescript
import React from "react";

type MyComponentProps = {
  title: string;
  optional?: boolean;
};

export const MyComponent: React.FC<MyComponentProps> = (props) => {
  const { title, optional } = props;
  // Component implementation
};
```

### Shared Component Library

**Before creating new components**, check if shared components can be used:

1. **Section** (`@/components/ui/Section`) - For scroll-animated page sections
   - Props: `id`, `title`, `maxWidth` (3xl|4xl|5xl), `children`
   - Handles: section wrapper, scroll animation, heading, animation classes
   - Use for: Any page section with title and auto-scroll animation

2. **Card** (`@/components/ui/Card`) - For card-based layouts
   - Props: `children`, `className`, `hover` (boolean)
   - Standard card styling with dark mode support
   - Use for: Educational cards, skill cards, content blocks

3. **BulletList** (`@/components/ui/BulletList`) - For list items with icons
   - Props: `items` (string[]), `icon` ("check" | "arrow")
   - Auto-handles icon rendering and spacing
   - Use for: Feature lists, skill lists, highlight lists

4. **IconBadge** (`@/components/ui/IconBadge`) - For icon wrappers
   - Props: `children`, `className`
   - Standard icon badge styling with accent colors
   - Use for: Wrapping TablerIcons in cards

5. **SectionPage** (`@/components/layout/SectionPage`) - For pages with section navigation
   - Props: `title`, `description`, `sections`, `defaultSection`, `children`
   - Handles: Layout, SectionNav, scroll observer, scroll-to functionality
   - Use for: Pages with multiple sections and nav (like bio.tsx, work.tsx)

### Example: Creating a Section Component

**Before (old pattern):**

```typescript
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/utils";

export const MySection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="my-section" className="py-16">
      <div className="mx-auto max-w-4xl" ref={ref}>
        <h2 className={cn(
          "mb-8 text-3xl font-bold text-gray-900 transition-all duration-700 dark:text-gray-100",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        )}>
          My Section
        </h2>
        <div className={cn(
          "transition-all delay-100 duration-700",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        )}>
          {/* Content */}
        </div>
      </div>
    </section>
  );
};
```

**After (using shared Section):**

```typescript
import { Section } from "@/components/ui";

export const MySection: React.FC = () => {
  return (
    <Section id="my-section" title="My Section" maxWidth="4xl">
      {/* Content - animation handled automatically */}
    </Section>
  );
};
```

## Dark Mode Support

**REQUIRED**: All components must support dark mode using Tailwind's `dark:` prefix.

### Standard Dark Mode Patterns

```typescript
// Backgrounds
className = "bg-white dark:bg-gray-900";

// Borders
className = "border-gray-200 dark:border-gray-800";

// Text hierarchy
className = "text-gray-900 dark:text-gray-100"; // Primary text (headings)
className = "text-gray-700 dark:text-gray-300"; // Body text
className = "text-gray-600 dark:text-gray-400"; // Secondary text
className = "text-gray-500 dark:text-gray-500"; // Tertiary text

// Accent colors (always use these for CTA elements)
className = "text-accent-600 dark:text-accent-400";
className = "bg-accent-500 hover:bg-accent-600 dark:bg-accent-400 dark:hover:bg-accent-500";

// Hover states
className = "hover:text-accent-600 dark:hover:text-accent-400";
className = "hover:border-accent-500 dark:hover:border-accent-400";
```

## Animation & Scroll Effects

### Using useScrollAnimation Hook

The `useScrollAnimation` hook is now mostly abstracted into the `Section` component, but can still be used directly if needed:

```typescript
import { useScrollAnimation } from "@/hooks";
import { cn } from "@/utils";

const { ref, isVisible } = useScrollAnimation();

<div
  ref={ref}
  className={cn(
    "transition-all duration-700",
    isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
  )}
>
  {/* Content */}
</div>
```

### Staggered Animations

For child elements, add `delay-100` or `delay-200`:

```typescript
<div className="transition-all delay-100 duration-700">
  {/* This animates 100ms after parent */}
</div>
```

## File Organization

### Component Location

- UI primitives → `src/components/ui/`
- Layout components → `src/components/layout/`
- Section components → `src/components/sections/`
- Page-specific → `src/pages/`

### Barrel Exports

**Always update barrel exports** when creating new components:

```typescript
// src/components/ui/index.ts
export { MyNewComponent } from "./MyNewComponent";

// src/components/layout/index.ts
export { MyNewLayout } from "./MyNewLayout";
```

## Styling Utilities

### cn() Utility

Use the `cn()` utility from `@/utils` for conditional className concatenation:

```typescript
import { cn } from "@/utils";

<div className={cn(
  "base classes",
  condition && "conditional classes",
  optionalClassName
)}>
```

### Reusable Helper Functions

Keep component files focused on rendering and React behavior. When logic is reusable or non-trivial, move it to `src/utils`.

- Put pure parsing, formatting, and transform helpers in `src/utils/`.
- Export helpers via `src/utils/index.ts` and import them as `@/utils`.
- Keep helper functions in a component only when they are clearly one-off and tiny.
- Do not move React-specific logic (state, effects, hooks, JSX) into utils.

Example:

```typescript
// src/utils/text.ts
export const quoteLines = (quote: string): string[] =>
  quote
    .replace(/\/n/g, "\n")
    .trim()
    .split(/\r?\n/g)
    .map((line) => line.trim())
    .filter(Boolean);

// src/utils/index.ts
export { quoteLines } from "./text";

// component file
import { quoteLines } from "@/utils";
```

### Common Spacing Patterns

```typescript
// Section spacing
className = "py-16"; // Vertical section padding

// Container spacing
className = "px-4"; // Horizontal padding
className = "mx-auto"; // Center horizontally
className = "max-w-4xl"; // Content width constraint

// Element spacing
className = "mb-8"; // Margin below headings
className = "space-y-6"; // Vertical stack spacing
className = "gap-4"; // Flex/Grid gap
```

## Integration Checklist

When creating a new component:

- [ ] Use `React.FC<Props>` pattern with explicit types
- [ ] Check if shared components (Section, Card, BulletList, IconBadge) can be used
- [ ] Add dark mode support to all className declarations
- [ ] Use `cn()` utility for conditional classes
- [ ] Move reusable pure helpers to `src/utils/` and export through `src/utils/index.ts`
- [ ] Import from barrel exports (`@/components/ui`, `@/components/layout`)
- [ ] Add new component to appropriate barrel export file
- [ ] Use scroll animation patterns if needed
- [ ] Follow established spacing/layout patterns
- [ ] Test in both light and dark modes

## TDD Requirement for Component Work

- For any new component or substantial component change, follow a TDD-first approach:
  - Write failing unit/component tests before implementing the component. Prefer `vitest` + `@testing-library/react` for interactive UI behavior.
  - Keep tests focused and fast: isolate logic from DOM where practical (move heavy logic into utils and unit-test them).
  - After tests fail, implement the minimal code to make them pass, then refactor with tests still passing.
  - Add integration or E2E Playwright tests only when the change affects navigation, multi-component flows, or cross-page behavior.
  - Include a short test plan in the PR describing the failing tests and the verification steps used to get to green.

## Typical component TDD steps

1. Add unit/component test file under `tests/unit` that imports the component and asserts expected behavior.
2. Run the targeted tests locally: `npm run test:unit -- tests/unit/MyComponent.test.ts`
3. Implement the smallest code change to satisfy the tests.
4. Re-run `npx tsc --noEmit && npm run lint` then the full unit suite.
5. Add an E2E smoke test only if needed, and run `npm run test:e2e -- <spec>`.

## Examples in Codebase

Reference these components for patterns:

- **Section usage**: `src/components/sections/TechSkills.tsx`
- **Card usage**: `src/components/sections/Education.tsx`
- **BulletList usage**: `src/components/sections/Timeline.tsx`
- **SectionPage usage**: `src/pages/bio.tsx`
- **Dark mode patterns**: Any component in `src/components/sections/`

## Related Files

- Shared components: `src/components/ui/`
- Type definitions: `src/types/portfolio.ts`
- Utilities: `src/utils/cn.ts`
- Hooks: `src/hooks/useScrollAnimation.ts`
