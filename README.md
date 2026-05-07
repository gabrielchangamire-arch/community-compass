# Community Compass

> Find help. Give help.

A free, ad-free directory pointing people toward real local help — and pointing helpers toward vetted ways to give. Designed first for the **Seattle / Bellevue / King County** area, structured so any city can fork it.

[![Deploy](https://github.com/gabrielchangamire-arch/community-compass/actions/workflows/deploy.yml/badge.svg)](https://github.com/gabrielchangamire-arch/community-compass/actions/workflows/deploy.yml)

**Live:** https://gabrielchangamire-arch.github.io/community-compass/

## Why

Most "find help" sites bury people in forms, ads, or paywalls. Most "give help" sites optimize for the donor's emotions, not the recipient's outcome. Community Compass is a small attempt at the opposite: dignity-first directory, evidence-first donations.

It does three things:

1. **Find help.** 17 categories — food, housing, dental, mental health, safety/abuse, immigrant support, education, scholarships, tutoring, libraries, transportation, recreation, childcare, healthcare, benefits, jobs, legal aid — each with curated real organizations, phone numbers, and websites.
2. **Give help.** Vetted local + global nonprofits grouped by cause (Charity Navigator 4-star or GiveWell-recommended), plus real volunteer shifts.
3. **Show that good is winning.** Long-run data from Our World in Data, UNICEF, World Bank, and UNESCO — to balance the news cycle with reality.

## Tech

- **React 18** with hooks
- **Vite 6** dev server + build
- **React Router 6** for navigation
- **Lucide React** icons
- **Plain CSS** with custom properties (no Tailwind, no animation library — animations are pure CSS)
- **Vitest** + **React Testing Library** for tests
- **GitHub Actions** auto-deploy to GitHub Pages

Build output is fully static. No backend, no database, no tracking, no ads.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5174
npm test         # one-shot vitest
npm run build    # production build into dist/
npm run preview  # serve the production build locally
```

## Project structure

```
src/
  main.jsx                     react-router boot
  App.jsx                      routes
  styles/globals.css           all styles in one annotated file
  data/
    categories.js              the 17 need-help + 6 give-help categories
    resources.js               curated organizations per need category
    donate.js                  vetted nonprofits per give category
    volunteer.js               real local volunteer shifts
    goodNews.js                long-run good-news data with sources
    impactStats.js             "your dollar goes far" facts
  components/
    layout/Header.jsx, Footer.jsx
    Icon.jsx                   wraps lucide icons by name
    PathCard.jsx               the two big landing cards
    CategoryCard.jsx           used on Need-help directory
    ResourceCard.jsx           used on Need-help category detail
    DonateCard.jsx             used on Give-help
    VolunteerCard.jsx          used on Give-help
    GoodNewsCard.jsx           used on Good-news page
    Disclaimer.jsx             yellow advisory banner
  pages/
    Landing.jsx
    NeedHelp.jsx               category grid
    NeedHelpCategory.jsx       detail page per category
    GiveHelp.jsx               donate + volunteer + impact strip
    GoodNewsPage.jsx
    About.jsx
    NotFound.jsx
tests/                         vitest + RTL
.github/workflows/deploy.yml   build + test + deploy to gh-pages
```

## Data principles

- **Need-help resources** must be real organizations we can verify by name, free or sliding-scale, and broadly accessible (no upfront fees, low ID barriers when possible).
- **Donate destinations** must be 501(c)(3) and rated favorably by [Charity Navigator](https://www.charitynavigator.org/) or [GiveWell](https://www.givewell.org/). The card shows the rating; donors should verify before giving.
- **Good-news entries** must come from a high-quality long-run source (Our World in Data, UNICEF, World Bank, UNESCO, or peer-reviewed). The source is linked on every card.
- **No advertising.** No affiliate links. No tracking pixels. The site doesn't know who you are and doesn't want to.

Every resource detail page surfaces a "call ahead" disclaimer because eligibility, hours, and addresses change.

## Contributing

To add a resource, fix a stale entry, or extend coverage to a new city:

1. Edit the relevant file in `src/data/`. Each entry is a plain JS object.
2. Make sure the entry is real, free or sliding-scale, and you can find a working website.
3. Open a PR. Adding a brief note about *why* an entry is missing or wrong helps reviewers.

To add a whole new city:

1. Add city names to the `areas` arrays of relevant resources.
2. If you want city-scoped views, file an issue first — the structure is ready for it but the routing needs a tweak.

## Roadmap

- City selector on Need-Help (cards filter by selected city)
- A "near me" map view for in-person resources (Mapbox or Leaflet)
- Spanish translation for the Need-Help side
- A small Cloudflare Worker to suggest resources via email
- "Last verified" date on each entry, displayed in the UI

## What this project demonstrates

Built as a portfolio project for software engineering internship applications, the project shows:

- **Front-end engineering**: React Router, component design, accessibility-first markup, plain CSS without a UI framework, responsive layouts, smooth animation discipline
- **Information design**: cognitive load reduced from a wall of links to a clear two-path landing
- **Data curation**: editorial judgment about what counts as a useful resource and a vetted nonprofit
- **Operational transparency**: every claim has a source; every limitation has a disclaimer
- **CI/CD**: GitHub Actions builds, tests, and deploys on every push

Most importantly: it's a working contribution, not a portfolio prop. If one person finds the right hotline through this site, that's the win.
