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

For **all other terminal commands** (build, install, deploy, etc.), always ask permission before running.

## Available Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run format` - Format all files with Prettier
- `npm run format:check` - Check formatting without changes

## Architecture

- **Pages Router**: Using Next.js Pages Router (not App Router)
- **Data-driven**: All content centralized in `/src/data` folder
- **Type safety**: Use types from `/src/types/portfolio.ts`
- **Static export**: Configured with `output: 'export'` in `next.config.mjs`

## Conventions

- Imports must be organized: external packages first, then absolute imports (`@/`), then relative
- All React components use `React.FC<Props>` type
- Use `useScrollAnimation` hook for scroll reveal effects
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