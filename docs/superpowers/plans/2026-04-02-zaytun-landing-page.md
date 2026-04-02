# Zaytun Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a single-page Astro marketing site with English, Arabic, and Chinese content switching, a polished industrial B2B visual style, and static contact CTAs.

**Architecture:** Create a small Astro site with one homepage route, shared layout and section components, centralized multilingual content data, and a minimal client-side script for language switching and lightweight UI behavior. Verification should focus on successful local build output and browser preview rather than automated test setup.

**Tech Stack:** Astro, TypeScript, modern CSS

---

## File Structure

### Create

- `package.json` - project scripts and dependencies
- `astro.config.mjs` - Astro configuration
- `tsconfig.json` - TypeScript configuration
- `.gitignore` - dependency, build, and local artifact ignores
- `src/pages/index.astro` - homepage route assembling all sections
- `src/layouts/Layout.astro` - document shell, metadata, shared head, root language hooks
- `src/components/Header.astro` - sticky header, nav, and language switcher markup
- `src/components/HeroSection.astro` - hero content and primary CTAs
- `src/components/StatsSection.astro` - trust metrics section
- `src/components/PainPointsSection.astro` - buyer problem/solution cards
- `src/components/ProductsSection.astro` - featured product cards
- `src/components/ApplicationsSection.astro` - applications grid
- `src/components/TechnologySection.astro` - quality and process section
- `src/components/GlobalServiceSection.astro` - Dubai and global logistics section
- `src/components/ProofSection.astro` - proof-point cards
- `src/components/ContactSection.astro` - static contact CTA block
- `src/components/Footer.astro` - footer links and placeholder contact details
- `src/data/siteContent.ts` - structured multilingual content dictionary
- `src/lib/types.ts` - shared content and language types
- `src/styles/global.css` - global design system and responsive styles
- `src/scripts/site.ts` - language switching, header state, smooth anchor scrolling, count-up setup

### Modify

- None initially; this repository currently contains only documentation input files

## Task 1: Scaffold The Astro Project

**Files:**
- Create: `package.json`
- Create: `astro.config.mjs`
- Create: `tsconfig.json`
- Create: `.gitignore`

- [ ] **Step 1: Create the initial project scaffold**

Add:

- `package.json` scripts for `dev`, `build`, and `preview`
- dependencies for Astro
- `astro.config.mjs` with minimal static-site config
- `tsconfig.json` extending Astro defaults
- `.gitignore` covering `node_modules`, `dist`, `.astro`, `.superpowers/`

- [ ] **Step 2: Install dependencies**

Run: `npm install`
Expected: install completes without dependency resolution errors

- [ ] **Step 3: Verify the project boots**

Run: `npm run build`
Expected: the command may fail until the homepage exists, but the toolchain and config should load correctly

- [ ] **Step 4: Commit**

```bash
git add package.json package-lock.json astro.config.mjs tsconfig.json .gitignore
git commit -m "chore: scaffold astro landing page project"
```

## Task 2: Define Shared Content Types And Multilingual Data

**Files:**
- Create: `src/lib/types.ts`
- Create: `src/data/siteContent.ts`

- [ ] **Step 1: Create shared content types**

Create exact TypeScript types for:

- supported language union: `en | ar | zh`
- nav items
- hero content
- stat entries
- pain-point entries
- product cards
- application items
- proof points
- contact details
- footer content

- [ ] **Step 2: Create the multilingual content module**

Export:

- `languages = ['en', 'ar', 'zh'] as const`
- `defaultLanguage = 'en'`
- `directionByLanguage = { en: 'ltr', ar: 'rtl', zh: 'ltr' }`
- `siteContent` object with complete placeholder copy for all three languages

Content requirements:

- use `/Users/ott/dev/site/Zaytun/product.md` as the only content source
- include exactly four featured products
- include the key trust metrics from the brief
- keep proof points generic and not tied to named real customers
- provide static CTA labels and placeholder contact details

- [ ] **Step 3: Validate content structure by inspection during implementation**

Check that every page section has content in all three languages before moving on.

- [ ] **Step 4: Commit**

```bash
git add src/lib/types.ts src/data/siteContent.ts
git commit -m "feat: define multilingual landing page content"
```

## Task 3: Build The Shared Layout And Base Styles

**Files:**
- Create: `src/layouts/Layout.astro`
- Create: `src/styles/global.css`

- [ ] **Step 1: Create the layout shell**

`Layout.astro` should provide:

- HTML document shell
- metadata props with sensible defaults
- root `lang="en"` and `dir="ltr"`
- import of global styles
- script hook for the site interaction script

- [ ] **Step 2: Create the global style system**

`src/styles/global.css` should define:

- color tokens from the brief
- type scale using `Inter` or similar sans-serif stack
- container and section spacing utilities
- button styles
- card styles
- header styles and scrolled state
- responsive breakpoints for desktop and mobile layouts

- [ ] **Step 3: Run the build to verify the shell compiles**

Run: `npm run build`
Expected: may still fail until the page route exists, but syntax and imports in the layout/style layer should be valid

- [ ] **Step 4: Commit**

```bash
git add src/layouts/Layout.astro src/styles/global.css
git commit -m "feat: add landing page layout shell"
```

## Task 4: Build The Client-Side Site Script

**Files:**
- Create: `src/scripts/site.ts`

- [ ] **Step 1: Implement language switching and header behavior**

Create `setupSiteInteractions()` to handle:

- language trigger buttons
- root language state updates
- `document.documentElement.lang` updates
- `document.documentElement.dir` updates with RTL for Arabic
- selected state for language buttons
- header scrolled class based on scroll position
- smooth in-page anchor scrolling behavior

- [ ] **Step 2: Add simple metric count-up setup**

Keep it minimal:

- observe metric nodes when they become visible
- animate toward final values once
- respect reduced-motion by falling back to final values immediately

- [ ] **Step 3: Verify behavior in local preview once the page exists**

Check manually in the browser:

- English is default
- switching to Arabic flips text direction and visible copy
- switching to Chinese restores LTR and updates visible copy
- header style changes after scroll
- nav anchor links scroll smoothly to their sections

- [ ] **Step 4: Commit**

```bash
git add src/scripts/site.ts
git commit -m "feat: add landing page interaction script"
```

## Task 5: Build The Homepage Route And Section Components

**Files:**
- Create: `src/pages/index.astro`
- Create: `src/components/Header.astro`
- Create: `src/components/HeroSection.astro`
- Create: `src/components/StatsSection.astro`
- Create: `src/components/PainPointsSection.astro`
- Create: `src/components/ProductsSection.astro`
- Create: `src/components/ApplicationsSection.astro`
- Create: `src/components/TechnologySection.astro`
- Create: `src/components/GlobalServiceSection.astro`
- Create: `src/components/ProofSection.astro`
- Create: `src/components/ContactSection.astro`
- Create: `src/components/Footer.astro`
- Modify: `src/layouts/Layout.astro`
- Modify: `src/styles/global.css`

- [ ] **Step 1: Create the homepage route**

`src/pages/index.astro` should:

- import the layout
- import all page sections
- import multilingual content
- render sections in the approved order from the spec
- use English as the server-rendered default

- [ ] **Step 2: Build the header component**

Include:

- logo or wordmark placeholder
- in-page nav anchors
- language switcher controls using `data-language-trigger`
- mobile-friendly navigation treatment

- [ ] **Step 3: Build the hero and trust sections**

Implement:

- `HeroSection.astro`
- `StatsSection.astro`

Requirements:

- strong industrial headline and supporting copy
- primary and secondary CTAs
- four trust metrics from the brief

- [ ] **Step 4: Build the middle content sections**

Implement:

- `PainPointsSection.astro`
- `ProductsSection.astro`
- `ApplicationsSection.astro`
- `TechnologySection.astro`

Requirements:

- pain-point to solution mapping in three cards
- exactly four featured product cards
- application coverage matching the brief
- concise technology and quality messaging

- [ ] **Step 5: Build the closing trust and contact sections**

Implement:

- `GlobalServiceSection.astro`
- `ProofSection.astro`
- `ContactSection.astro`
- `Footer.astro`

Requirements:

- clear Dubai plus China positioning
- generic proof points only
- static contact actions only
- footer with placeholder addresses and support details

- [ ] **Step 6: Run the production build**

Run: `npm run build`
Expected: PASS

- [ ] **Step 7: Commit**

```bash
git add src/pages/index.astro src/components src/layouts/Layout.astro src/styles/global.css
git commit -m "feat: build multilingual landing page"
```

## Task 6: Wire Language-Aware Content Into The Markup

**Files:**
- Modify: `src/pages/index.astro`
- Modify: `src/components/Header.astro`
- Modify: `src/components/HeroSection.astro`
- Modify: `src/components/StatsSection.astro`
- Modify: `src/components/PainPointsSection.astro`
- Modify: `src/components/ProductsSection.astro`
- Modify: `src/components/ApplicationsSection.astro`
- Modify: `src/components/TechnologySection.astro`
- Modify: `src/components/GlobalServiceSection.astro`
- Modify: `src/components/ProofSection.astro`
- Modify: `src/components/ContactSection.astro`
- Modify: `src/components/Footer.astro`
- Modify: `src/scripts/site.ts`

- [ ] **Step 1: Add stable translation hooks to the rendered markup**

Use a simple pattern:

- serialize the `siteContent` object into the page once
- add `data-i18n` keys to translatable nodes
- add stable attribute hooks for text, labels, and CTA content

- [ ] **Step 2: Update the client script to swap visible content**

`src/scripts/site.ts` should replace text content and key labels from the selected language dictionary without introducing a general i18n framework.

- [ ] **Step 3: Run the production build**

Run: `npm run build`
Expected: PASS

- [ ] **Step 4: Verify the multilingual behavior manually in preview**

Check in the browser:

- English loads by default
- Arabic changes visible copy and applies RTL at the document level
- Chinese changes visible copy and returns the page to LTR
- nav labels and hero CTA labels change with the selected language
- anchor navigation scrolls smoothly to the target sections

Run: `npm run preview`

- [ ] **Step 5: Commit**

```bash
git add src/pages/index.astro src/components src/scripts/site.ts
git commit -m "feat: add client-side language switching"
```

## Task 7: Final Visual Polish And Responsive Review

**Files:**
- Modify: `src/styles/global.css`
- Modify: `src/components/Header.astro`
- Modify: `src/components/HeroSection.astro`
- Modify: `src/components/ProductsSection.astro`
- Modify: `src/components/ApplicationsSection.astro`
- Modify: any other component that needs responsive fixes

- [ ] **Step 1: Review desktop presentation in local preview**

Check:

- hero hierarchy and CTA balance
- section spacing
- card alignment
- header readability before and after scroll
- industrial tone rather than generic SaaS styling

- [ ] **Step 2: Review mobile presentation in local preview**

Check:

- stacked hero layout
- CTA visibility near the top
- nav usability
- single-column card behavior where needed
- accessible language switcher placement

- [ ] **Step 3: Apply minimal responsive and visual fixes**

Keep edits small and focused on polish issues found during preview.

- [ ] **Step 4: Run the production build again**

Run: `npm run build`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/styles/global.css src/components
git commit -m "feat: polish landing page presentation"
```

## Task 8: Final Verification

**Files:**
- Modify: none unless fixes are required

- [ ] **Step 1: Run the final production build**

Run: `npm run build`
Expected: PASS with generated static output

- [ ] **Step 2: Run the local preview**

Run: `npm run preview`
Expected: site loads successfully

- [ ] **Step 3: Perform final browser checks**

Verify manually:

- all homepage sections render
- all navigation anchors work
- language switcher works for English, Arabic, and Chinese
- Arabic uses RTL correctly
- contact CTAs render as static actions
- desktop and mobile layouts are both usable

- [ ] **Step 4: Commit any final fixes**

```bash
git add .
git commit -m "chore: finalize landing page implementation"
```
