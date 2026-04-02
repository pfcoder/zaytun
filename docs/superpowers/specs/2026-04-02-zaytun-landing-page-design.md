# Zaytun Landing Page Design

## Summary

Build a single-page Astro marketing site for an isostatic graphite company with Dubai positioning and a North American industrial B2B visual style. The first version should balance brand credibility and lead generation, use polished placeholder company content based on `product.md`, and support English, Arabic, and Chinese through a client-side language switcher.

## Goals

- Launch a polished single landing page rather than a multi-page site
- Reflect the brief's clean, modern, industrial North American B2B design direction
- Present the company as globally capable, technically credible, and commercially accessible
- Support English, Arabic, and Chinese without introducing a CMS or backend
- Drive users toward direct contact actions such as quote requests, email, phone, or WhatsApp links

## Non-Goals

- No separate page routes in v1
- No backend, CMS, or data persistence
- No working contact form submission in v1
- No product detail pages, downloadable PDFs, search, live maps, or chat
- No attempt to model the full future marketing site architecture beyond what this landing page needs

## Site Architecture

The site will use Astro as a mostly static marketing-site framework. Version 1 will expose a single public route for the homepage. The implementation should prefer static rendering and only add client-side behavior where it materially improves usability.

Expected client-side behavior in v1:

- sticky header state change on scroll
- language switching between English, Arabic, and Chinese
- smooth scrolling for in-page navigation
- light reveal or count-up interactions where appropriate

The site should avoid introducing unnecessary framework complexity. The landing page should remain understandable as a content-first Astro site that can later expand into additional routes if needed.

## Information Architecture

The homepage should follow this section order:

1. Hero
2. Trust metrics
3. Customer pain points and solutions
4. Featured products
5. Industry applications
6. Technology and quality assurance
7. Global service and Dubai positioning
8. Proof points / mini case studies
9. Final CTA and contact block
10. Footer

This sequence is intended to match the brief's B2B narrative:

1. establish trust quickly
2. explain technical capability
3. show product relevance
4. reinforce global operations and logistics positioning
5. end with direct contact actions

## Visual System

The design language should feel industrial, premium, and credible rather than startup-like or abstract.

### Core visual traits

- large horizontal sections with strong spacing
- deep navy and blue palette with restrained orange accent usage
- soft gray-blue backgrounds for section separation
- modern sans-serif typography such as `Inter`
- clean cards, subtle borders, restrained shadows
- high-contrast hero treatment with industrial imagery feel
- minimal decorative effects; emphasis on layout, typography, and photography-inspired presentation

### Tone and brand impression

The site should communicate:

- technical competence
- manufacturing scale
- export readiness
- trustworthiness
- modern presentation without generic SaaS styling

### Interaction style

- transparent header over hero that becomes solid on scroll
- primary and secondary hero CTAs using solid and outline treatments
- hover emphasis on cards
- count-up animation for metrics once visible
- smooth anchor navigation
- restrained motion only; no flashy animation system

## Content Strategy

Launch content should use polished placeholder copy derived from `product.md`. Content should sound credible and specific without inventing unverifiable certifications, customer names, or precise business details beyond the brief.

The content should emphasize:

- high-performance isostatic graphite
- applications across PV, semiconductors, EDM, nuclear, metallurgy, and aerospace
- manufacturing capacity and quality signals from the brief
- global service model with China manufacturing and Dubai business/logistics positioning
- direct outreach and quote-request actions

## Language Model

English should be the default visible language. Arabic and Chinese should be switchable from the header.

For v1, all three languages should be implemented on the same page using a structured translation dictionary and a client-side language switcher. Separate localized routes are out of scope for this version.

Arabic support should account for RTL presentation where practical for the page-level language state. The implementation should avoid over-engineering this: support a correct readable layout and text direction rather than building a full internationalization platform.

## Component Breakdown

The landing page should be assembled from a small, focused set of Astro components:

- `Layout`
- `Header`
- `HeroSection`
- `StatsSection`
- `PainPointsSection`
- `ProductsSection`
- `ApplicationsSection`
- `TechnologySection`
- `GlobalServiceSection`
- `ProofSection`
- `ContactSection`
- `Footer`

Each component should have one clear responsibility and rely on shared layout primitives and content data rather than hardcoding repeated structure throughout the page.

## Content Data Shape

Content should live in a structured data object so all language variants stay centralized and maintainable.

The content model should include at least:

- navigation labels
- hero copy and CTA labels
- section headings and supporting text
- metrics entries
- pain point entries
- featured product entries with short specs
- applications entries
- technology and quality content
- global service copy
- proof-point entries
- contact labels and placeholder values
- footer labels

This should be the single source of truth for page copy in all three languages.

## Section-Level Expectations

### Hero

Should present a strong industrial headline, concise supporting copy, and two CTAs. The visual treatment should imply real industrial capability rather than generic stock-tech imagery.

### Trust Metrics

Should highlight key figures from the brief such as years of innovation, annual output, market share, and customer service scale.

### Pain Points and Solutions

Should pair common buyer concerns with specific company strengths from the brief, using concise copy in a three-card layout.

### Featured Products

Should present four core products as high-quality cards with short specs, enough to imply breadth without becoming a full catalog.

### Industry Applications

Should show where the material is used and signal credibility across multiple industrial sectors.

### Technology and Quality

Should summarize process rigor, quality systems, traceability, and technical confidence signals.

### Global Service and Dubai Positioning

Should explain the company's China manufacturing base and Dubai commercial/logistics role in serving MENA and broader export markets.

### Proof Points

Should use short case-study style statements inspired by the brief, while staying clearly placeholder and not falsely naming real customers.

### Contact

Should prioritize static contact actions only: quote CTA, email, phone, and WhatsApp-style links or placeholders. No live form submission in v1.

## Responsiveness

The page must be intentionally designed for both desktop and mobile.

Desktop expectations:

- wide hero with strong visual hierarchy
- multi-column cards in content sections
- inline navigation and language controls in the header

Mobile expectations:

- stacked hero layout with visible CTAs near the top
- simplified spacing scale
- single-column card layouts where appropriate
- navigation adapted to small screens
- language switcher still accessible without dominating the header

## Testing And Verification Expectations

Version 1 does not require automated test setup. Verification should stay lightweight and focus on shipping the static site cleanly.

The most important checks for v1 are:

- homepage renders successfully
- language switching updates visible copy correctly
- key sections and CTAs are present
- anchor targets exist and navigation links resolve correctly with smooth scrolling
- mobile and desktop layouts remain usable
- production build succeeds

Verification should be done through successful local build output plus manual browser review in desktop and mobile layouts.

## Implementation Boundaries

Version 1 should include:

- one polished Astro landing page
- English, Arabic, and Chinese language switching
- balanced brand and lead-generation messaging
- static contact CTAs
- responsive layout and restrained interaction polish

Version 1 should exclude:

- working form backend
- CMS integration
- separate localized routes
- downloadable resources
- product detail pages
- search, chat, or map integrations

## Risks And Guardrails

- Avoid generic SaaS visual patterns that weaken industrial credibility.
- Avoid inventing overly specific business claims that are not supported by the brief.
- Keep the codebase small and direct; this is a landing page, not a platform.
- Preserve an implementation path to a future multi-page site without prematurely building that system now.
