# Portfolio project instructions

## Project context

- This repository is a personal portfolio built with Angular 19, TypeScript 5.7, PrimeNG 19, Tailwind CSS 3.4, and SCSS.
- The application uses standalone Angular components, Angular Router, server-side rendering, client hydration, and the PrimeNG Aura theme.
- Most user-facing copy is Traditional Chinese (`zh-TW`), with selected English headings and technology names. Preserve that language style unless the task explicitly requests translation or rewriting.
- Production browser output is `dist/browser`. Deployment targets include GitHub Pages and Cloudflare static assets; a manually triggered GCP VM workflow also exists.

## Source layout

- `src/app/pages/` contains route-level pages.
- `src/app/components/` contains reusable UI and page-section components.
- `src/app/data/` contains reusable typed content data.
- `src/app/app.routes.ts` is the routing source of truth.
- `src/assets/styles.scss` contains global styles; `src/assets/scss/_variables.scss` and `_mixins.scss` contain shared design tokens and mixins.
- `.github/workflows/` contains deployment automation.

Do not edit generated or dependency directories: `dist/`, `.angular/`, or `node_modules/`.

## Angular and TypeScript conventions

- Keep new components standalone. Do not introduce NgModules unless a dependency strictly requires one.
- Follow the local component structure: a `.ts` class with external `.html` and `.scss` files, plus a colocated `.spec.ts` when behavior warrants testing.
- Declare all template dependencies in the component `imports` array. Prefer Angular Router primitives such as `routerLink` over manual navigation.
- Keep route-level features lazy-loaded with `loadComponent` when they are not needed for initial rendering. Preserve existing URLs and GitHub Pages base-path behavior.
- The TypeScript and Angular compilers run in strict mode. Avoid `any`, unsafe casts, non-null assertions, implicit returns, and untyped object shapes. Introduce interfaces or type aliases for reusable data structures.
- Prefer immutable updates and `readonly` for values that are not reassigned. Keep derived values derived rather than duplicating state.
- Services should use `providedIn: 'root'` when they are application singletons. Keep components focused on presentation and interaction; move shared data transformations or cross-component state into typed services or data modules.
- Preserve SSR and hydration compatibility. Do not access `window`, `document`, `localStorage`, browser dimensions, or DOM APIs during server rendering. Guard browser-only work with Angular platform checks or appropriate render lifecycle APIs.
- Avoid adding a new dependency when Angular, PrimeNG, RxJS, or a small local implementation already provides the needed capability. Explain and obtain approval before introducing a major UI, animation, or state-management library.

## Templates, UI, and accessibility

- Prefer PrimeNG 19 components for established interactive UI patterns. Confirm APIs match PrimeNG 19 and the Aura theme; do not use examples from incompatible PrimeNG versions.
- Use semantic HTML before ARIA. Interactive elements must be keyboard accessible and have visible focus states and accessible names.
- Keep one meaningful page-level `h1`, logical heading order, descriptive link text, appropriate image `alt` text, and usable landmarks.
- Preserve the current visual language: dark slate surfaces, blue/teal accents, restrained gradients, rounded interactive elements, and clear typography. Do not redesign unrelated sections while implementing a focused change.
- Design mobile-first and verify narrow, tablet, desktop, and wide layouts. Avoid fixed widths that cause horizontal overflow.
- Animations must not block navigation or content. Prefer `transform` and `opacity`, and respect `prefers-reduced-motion`. Avoid scroll hijacking, custom cursors, or heavy animation libraries unless explicitly requested.
- When changing routed page content, keep document titles, focus behavior, and screen-reader route announcements in mind.

## Styling conventions

- Use Tailwind utilities for local layout, spacing, responsive behavior, and simple visual states.
- Use component SCSS for complex selectors, reusable component styling, keyframes, and styles that would make templates hard to read.
- Reuse shared tokens and mixins from `src/assets/scss/` instead of duplicating colors, typography, spacing, transitions, or z-index values.
- Use Sass modules with `@use`; never add deprecated `@import`.
- For color manipulation, import `sass:color` and use `color.adjust()` or the existing `darken-color()` / `lighten-color()` helpers. Do not add deprecated `darken()` or `lighten()` calls.
- Scope component styles carefully. Avoid `::ng-deep`, global overrides, and `!important` unless integration constraints leave no cleaner option.

## Content and data

- Treat portfolio copy, employment history, education, project descriptions, dates, and links as user-owned factual content. Do not invent, silently rewrite, or remove facts.
- Place repeated structured content in typed constants under `src/app/data/` rather than duplicating it across templates.
- Preserve UTF-8 encoding for Traditional Chinese text.

## Testing and verification

- Existing unit tests use Jasmine and Karma. Add or update focused `.spec.ts` tests when component logic, services, routing behavior, or user interactions change.
- Do not introduce Playwright test files or replace Karma unless the task explicitly requests an E2E test setup.
- After code changes, run the smallest relevant checks, then run:
  - `npm run build`
  - `npm test -- --watch=false` when testable application behavior changed
- There is no configured lint script. Do not claim linting passed unless a lint command is added and run.
- For visual work, verify the running site at mobile and desktop sizes and check the browser console. Use the installed web design and webapp testing skills when the request matches them.

## Deployment and repository safety

- Use `npm ci` in CI because `package-lock.json` is committed. Keep CI on Node.js 20 unless the deployment environment changes.
- Keep GitHub Actions permissions minimal, secrets out of source and logs, and deployment cleanup steps guarded with `if: always()` where appropriate.
- GitHub Pages builds require `--base-href /Portfolio/` and publish `dist/browser`; preserve SPA fallback handling unless deployment strategy changes.
- Cloudflare Wrangler serves `dist/browser` as static assets. Do not assume the GCP, GitHub Pages, and Cloudflare targets have identical path or runtime behavior.
- Never commit credentials, private keys, tokens, environment secrets, or machine-specific paths.
- Preserve unrelated working-tree changes. Do not reformat, regenerate, or rewrite files outside the requested scope.

## Common commands

- Install exactly from the lockfile: `npm ci`
- Start development server: `npm start`
- Production build: `npm run build`
- Unit tests: `npm test -- --watch=false`
- Cloudflare local preview: `npm run preview`
- Cloudflare deployment: `npm run deploy`
