# Paralox Media Website

AI-powered digital agency website built with React + Framer Motion.

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm start
# Opens → http://localhost:3000

# 3. Build for production
npm run build
```

---

## Project Structure

```
src/
├── App.jsx                   ← Root app, routing, loader gate
├── index.js                  ← Entry point
│
├── styles/
│   └── global.css            ← Keyframes, resets, responsive utilities
│
├── data/
│   └── index.js              ← All static data (team, brands, packages, tokens)
│
├── hooks/
│   └── useCurrency.js        ← IP-based currency detection
│
├── components/
│   └── ui/
│       ├── Atoms.jsx         ← Chip, GradText, Heading
│       ├── FadeUp.jsx        ← Scroll-triggered fade-up wrapper
│       ├── Nav.jsx           ← Navbar + mobile drawer
│       ├── Footer.jsx        ← Minimal dark footer
│       ├── ParticleLoader.jsx← Full-screen canvas particle animation
│       ├── TeamCarousel.jsx  ← 3D perspective carousel for team
│       ├── BrandSlider.jsx   ← Dual-row brand marquee
│       └── Testimonials.jsx  ← Auto-rotating testimonials
│
└── pages/
    ├── HomePage.jsx          ← Hero + Services grid + Packages + Partners
    ├── AboutPage.jsx         ← Team carousel + Vision/Mission + Countries
    ├── ServicesPage.jsx      ← Full services list + Process steps
    ├── PackagesPage.jsx      ← Tabbed pricing (SMM / DM / Startup / Custom)
    ├── GalleryPage.jsx       ← Filtered portfolio grid
    └── ContactPage.jsx       ← Contact cards + Form
```

---

## Editing Content

| What to change           | File to edit                        |
|--------------------------|-------------------------------------|
| Team members             | `src/data/index.js` → `TEAM_DATA`   |
| Brand colors / tokens    | `src/data/index.js` → `T`           |
| Package pricing          | `src/data/index.js` → `SMM_PACKAGES` etc. |
| Testimonials             | `src/data/index.js` → `TESTIMONIALS`|
| Particle loader words    | `src/data/index.js` → `PARTICLE_WORDS` |
| Hero tagwords            | `src/data/index.js` → `TAGWORDS`    |
| Contact info             | `src/pages/ContactPage.jsx` + `src/components/ui/Footer.jsx` |
| Currency rates           | `src/data/index.js` → `CURRENCY_MAP`|

---

## Tech Stack

- **React 18** — UI framework
- **Framer Motion** — Animations, page transitions, parallax
- **Lucide React** — All icons
- **CSS (global.css)** — Keyframes, responsive grid utilities

---

## Deploy

```bash
npm run build
# Drag the build/ folder to https://netlify.com/drop
```
