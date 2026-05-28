# CLAUDE.md

> **Project context for Claude Code.** Read this file first. Then read `/docs/CONTENT.md` for the website copy and `/docs/DESIGN.md` for design tokens. Then execute the phases in `/docs/BUILD-PHASES.md` one at a time.

---

## 1. What we're building

A marketing website for **Caller Monkey** (`callermonkey.in`), India's AI-powered business communication platform. Caller Monkey is one system that handles voice calls, WhatsApp messages, CRM updates, lead follow-ups, customer reminders, team attendance, email automation, and connections to the customer's existing tools. The website's job is to convert visitors (Indian SMB and mid-market decision makers) into demo bookings.

Built by **Infokey Technology Pvt. Ltd.** as a client project. Footer carries the line `Developed by Infokey ↗` linking to `https://infokeytech.com` in a new tab.

---

## 2. Tech stack

| Layer | Choice |
|---|---|
| Build tool | Vite |
| Framework | React 18 (JavaScript, no TypeScript) |
| Routing | react-router-dom v6 (lazy-loaded pages) |
| Styling | Tailwind CSS via **Play CDN** (not PostCSS install) |
| Animations | framer-motion (subtle only) |
| Icons | lucide-react |
| Forms | react-hook-form + zod |
| Form backend | Web3Forms (free serverless) |
| SEO | react-helmet-async |
| Scroll observer | react-intersection-observer |

Dependencies needed:
```
react react-dom react-router-dom framer-motion lucide-react clsx
react-helmet-async react-hook-form zod react-intersection-observer @hookform/resolvers
```

Dev:
```
vite @vitejs/plugin-react eslint eslint-plugin-react eslint-plugin-react-hooks prettier
```

**Do not install Tailwind as a PostCSS dep.** It's loaded via CDN in `index.html`. The theme is configured inline there. Custom utility patterns live in `src/styles/index.css` as `custom-*` classes (full registry in `/docs/DESIGN.md`).

---

## 3. Site structure (5 pages)

The customer is a non-technical SMB owner in India. Page names are plain English.

| URL | Nav label | What's on it |
|---|---|---|
| `/` | **Home** | Hero · Problem · What Caller Monkey does · How-it-connects teaser · Results · CTA |
| `/features` | **Features** | 10 things Caller Monkey does (friendly icon grid) · What makes it different |
| `/works-with` | **Works With** | The "one brain, everything connects" story · hub-and-spoke visual · 13 tools it links to |
| `/industries` | **Industries** | 12 industries grid + 5 real customer stories |
| `/get-started` | **Get Started** | 4 plans (where to begin) · How going live works (3 steps) · Common questions · Free demo form (`#demo-form`) |
| `*` | **404** | Friendly fallback with 3 link cards back to main pages |

All "Get a Free Demo" / "Start the Conversation" / "Talk to Our Team" CTAs across the site → `/get-started#demo-form`. All "Chat on WhatsApp" CTAs → `wa.me/{number}?text={page-specific message}`.

---

## 4. Plain language guide — important

The client asked us to keep words simple. The visitor is a business owner, not a CTO.

### Words to avoid
- ❌ "Orchestration" (use *connects*, *links together*, *brings together*)
- ❌ "Platform" as a page name (use *Features* or *What It Does*)
- ❌ "Capabilities" as a section header (use *What it does* or *What Caller Monkey handles*)
- ❌ "Infrastructure", "ecosystem", "stack" (use *tools*, *systems*, *what you already use*)
- ❌ "Leverage", "synergy", "paradigm", "seamless", "robust" (just don't)
- ❌ "End-to-end communication infrastructure" (use *runs all your business calling and messaging in one place*)
- ❌ "API integration" (use *connects to your CRM/WhatsApp/email*)
- ❌ "Multi-channel orchestration" (use *one system that handles calls, WhatsApp, and email together*)

### Words to prefer
- ✅ Works with, connects to, links up with
- ✅ Runs, handles, takes care of
- ✅ Helps you, built for you
- ✅ In one place, one system
- ✅ Simple, straightforward, easy to start
- ✅ Your tools, your team, your business

### Section headings should sound conversational
- ❌ "Core Capabilities" → ✅ "What Caller Monkey Does"
- ❌ "The Orchestration Story" → ✅ "How Everything Connects"
- ❌ "Pricing Tiers" → ✅ "Where to Start"
- ❌ "Integration Architecture" → ✅ "Works With Tools You Already Use"

The client's own copy in `/docs/CONTENT.md` is mostly plain already — preserve it. The technical jargon was in our internal labels; that's what we're cleaning up.

### When a section uses the client's prose verbatim
Use as written. Don't rewrite their voice. The plain-language rule applies only to OUR additions: section headers, nav labels, button labels, alt text, error messages, page titles.

---

## 5. Folder structure

```
caller-monkey-v2/
├── CLAUDE.md                          # this file
├── docs/
│   ├── CONTENT.md                     # all website copy (verbatim from client)
│   ├── DESIGN.md                      # design system, colors, custom classes
│   └── BUILD-PHASES.md                # phased build plan
├── public/
│   ├── favicon.svg
│   └── og-image.png                   # 1200x630, generate later
├── index.html                         # Tailwind CDN + theme + font preloads
├── src/
│   ├── main.jsx
│   ├── App.jsx                        # routes
│   ├── styles/
│   │   └── index.css                  # CSS vars + custom-* classes
│   ├── config/
│   │   └── appConfig.js               # contact, links, brand, forms key
│   ├── data/
│   │   ├── navigation.js
│   │   ├── capabilities.js            # 10 things Caller Monkey does
│   │   ├── connections.js             # 13 tools it works with
│   │   ├── industries.js              # 12 industries
│   │   ├── useCases.js                # 5 customer stories
│   │   ├── plans.js                   # 4 starting plans
│   │   ├── faqs.js
│   │   └── seo.js                     # per-page meta
│   ├── props/
│   │   ├── logo/                      # logo PNG/SVG (user drops files here)
│   │   └── illustrations/             # SVG illustrations
│   ├── components/
│   │   ├── atoms/                     # Button, Input, Badge, Icon, Spinner
│   │   ├── molecules/                 # CapabilityCard, IndustryCard, StatCounter, FAQItem, PlanCard, UseCaseCard
│   │   ├── organisms/                 # Header, Footer, CTASection, ConnectionsVisual
│   │   ├── interactive/
│   │   │   └── DemoForm/              # the only interactive feature
│   │   ├── floating/                  # WhatsAppBubble, ScrollToTopFab
│   │   ├── motion/                    # FadeIn, Stagger, PageTransition
│   │   └── layout/                    # PageLayout, Section, Container
│   ├── pages/
│   │   ├── Home/
│   │   ├── Features/
│   │   ├── WorksWith/
│   │   ├── Industries/
│   │   ├── GetStarted/
│   │   └── NotFound/
│   ├── hooks/
│   │   ├── useScrollDirection.js
│   │   ├── useLockBodyScroll.js
│   │   ├── useReducedMotion.js
│   │   ├── useInViewport.js
│   │   └── useWhatsAppLink.js
│   └── utils/
│       ├── classNames.js
│       ├── analytics.js
│       └── seo.js
├── vite.config.js
├── .eslintrc.cjs
├── .prettierrc
├── .gitignore
└── package.json
```

---

## 6. Path aliases (vite.config.js)

```js
resolve: {
  alias: {
    '@':           '/src',
    '@components': '/src/components',
    '@pages':      '/src/pages',
    '@hooks':      '/src/hooks',
    '@utils':      '/src/utils',
    '@data':       '/src/data',
    '@config':     '/src/config',
    '@props':      '/src/props',
  }
}
```

Always use `@props/logo/...` etc — never relative paths like `../../../props/`.

---

## 7. Design system (concise — full version in /docs/DESIGN.md)

**Background:** light / white. No dark sections except optional final CTA strip.

**Colors:**
- Brand green primary: `#2DA744`
- Brand green deep: `#1A6B2A`
- Brand green light tint: `#E8F7EC`
- Greys: `#0B0B0B` → `#171717` → `#2F2F2F` → `#6E6E6E` → `#9E9E9E` → `#CFCFCF` → `#E5E5E5` → `#F3F3F3` → `#FAFAFA`
- Page background: `#FFFFFF` for sections, `#FAFAFA` for alternating bands

**Fonts:**
- Display: **Cabinet Grotesk** (Fontshare, free)
- Body: **Inter Tight** (Google Fonts)
- Numbers/stats: **JetBrains Mono** (Google Fonts)

**Tokens:** all defined as CSS variables on `:root` in `src/styles/index.css`.

**Custom classes:** all repeating patterns live as `custom-*` classes in `src/styles/index.css` — see DESIGN.md for the full registry. Components consume them via Tailwind utilities OR by applying `custom-*` class names directly.

---

## 8. Animation philosophy — SUBTLE

The client asked for subtle animations. **Less is more.**

**Allowed:**
- `FadeIn` on scroll entry (200–300ms, 16–24px Y offset, easeOutQuart)
- `Stagger` on grids (children offset by 80–100ms each)
- Number counter-up on stat reveals (1200ms, eased)
- Hover lifts on cards: `translateY(-2px)` over 200ms
- Mobile menu slide-in via Framer Motion `AnimatePresence`
- Header compress on scroll (CSS transition, no JS animation)
- Page transition: simple opacity fade on route change, 180ms
- WhatsApp bubble: gentle pulse, capped to 6 cycles
- Hub-and-spoke "Works With" visual: connecting lines draw in via `pathLength` on viewport entry, ONCE. Icons gently float. Hovering an icon highlights its connecting line.

**Banned (we tried these earlier — too much for this client):**
- ❌ Three.js / 3D anything
- ❌ Word-by-word reveal headings
- ❌ Parallax scrolling
- ❌ Heavy Lottie loops on every section
- ❌ Background mesh gradients that animate
- ❌ Cursor effects
- ❌ Marquee strips
- ❌ Confetti
- ❌ Card 3D rotateY on hover

If in doubt, omit the animation. **A still page that loads fast beats a busy page that feels designed for designers.**

Always respect `prefers-reduced-motion: reduce` — fall back to opacity-only fades or no animation at all.

---

## 9. Lead capture

### Demo form (only conversion form on the site)
- Location: `/get-started#demo-form`
- Fields: Name (req), Business email (req), Phone with country code (req), Company name, Company size (select 1-10 / 11-50 / 51-200 / 200+), Industry (select with the 12 + "Other"), What's your primary use case? (textarea, 300 char max), Preferred contact time (chips: Morning / Afternoon / Evening / Any)
- Validation: react-hook-form + zod
- Honeypot field: `botcheck` (hidden, off-screen) + min 2s time-check before submit
- POST → `https://api.web3forms.com/submit` with access key from `appConfig.forms.web3FormsAccessKey`
- Three states: idle (form), success (green tick + "We'll reach out in 24 hours" + WhatsApp CTA), error (retry + WhatsApp fallback)
- On submit, prefill from URL params if present (e.g. `?industry=healthcare&source=home-cta`)

### WhatsApp floating bubble
- Fixed bottom-right on every page, 56×56px, WhatsApp green `#25D366`
- Gentle pulse capped to 6 cycles, restarts after scroll
- Opens `https://wa.me/{whatsappDigits}?text={encoded prefilled message}`
- Prefilled text changes by page (see `src/data/whatsappMessages.js`)
- Hidden on viewports < 360px

### Newsletter (footer)
- Single email field
- Posts to Web3Forms with `subject: 'Newsletter signup'`, `source: 'footer-newsletter'`

---

## 10. Content source — `/docs/CONTENT.md`

The client provided a complete content document. **Their copy is the source of truth.** Do not rewrite or "improve" it without asking. Use it verbatim.

`docs/CONTENT.md` has every section already structured:
- Hero headline + sub + CTA text
- All comparison tables
- All "what it does" descriptions (10 items)
- All 13 tools it connects to
- All 12 industry one-liners
- All 5 real customer stories
- 4 starting plans
- All 10 FAQs
- All CTAs and their suggested text
- Footer links
- SEO meta (page title, description, keywords)

When building, extract each table/list into the matching `src/data/*.js` file. Never hard-code copy in JSX components. If a section needs slight rephrasing for visual flow, **flag it as a comment in the data file** rather than silently changing the client's wording.

---

## 11. `appConfig.js` shape

The entire site reads from this one file. Editing it updates the site everywhere. Already scaffolded at `src/config/appConfig.js`.

```js
export const appConfig = {
  brand: {
    name: 'Caller Monkey',
    tagline: 'Scale Communication. Protect Revenue. Grow Without Limits.',
    domain: 'callermonkey.in',
    parent: { name: 'Infokey Technology Pvt. Ltd.', url: 'https://infokeytech.com' },
  },
  contactInfo: {
    email: 'hello@callermonkey.in',
    phone: '+91 99999 99999',
    whatsapp: '919999999999',   // digits-only for wa.me
    address: { line1: '', city: '', pincode: '', country: 'India' },
  },
  social: {
    linkedin: '', instagram: '', youtube: '', whatsapp: '',
  },
  forms: {
    web3FormsAccessKey: 'REPLACE_WITH_ACCESS_KEY',
  },
  routes: {
    home: '/',
    features: '/features',
    worksWith: '/works-with',
    industries: '/industries',
    getStarted: '/get-started',
    demoForm: '/get-started#demo-form',
  },
};

export default appConfig;
```

All placeholders to be replaced by the client closer to launch.

---

## 12. Critical conventions

1. **Files:** PascalCase for components (`Button.jsx`), camelCase for utils/hooks/data (`useScrollDirection.js`, `capabilities.js`).
2. **All copy in `/src/data/`** — never hard-code strings in JSX.
3. **All contact details in `appConfig.js`** — never hard-code phone/email/wa numbers.
4. **All animations through the `motion/` wrappers** (`FadeIn`, `Stagger`) — don't sprinkle Framer Motion directly in components unless the animation is genuinely one-off.
5. **All buttons through the `Button` atom** — never `<button>` directly. Variants: `primary | secondary | ghost | whatsapp`. Sizes: `sm | md | lg`.
6. **All sections wrapped in `<Section>`** — gives consistent vertical padding and optional `dark` / `narrow` variants.
7. **CSS custom classes prefix:** `custom-*` (e.g. `custom-btn-primary`, `custom-card-hover`). They live ONLY in `src/styles/index.css`.
8. **Tailwind colors** map to brand via the theme config in `index.html`. Use `text-brand-green`, `bg-grey-50`, etc. — not raw hex.
9. **Only animate `transform` and `opacity`** — never `width`, `height`, `top`, `left`.
10. **Test reduced motion** for every animation.
11. **Mobile-first** — write mobile styles first, add `md:` and `lg:` for larger.
12. **Tabular data** (comparison tables, the integration list, the plans comparison) — render as actual `<table>` with proper `<thead>` and `<th scope="col">`.
13. **Plain language** — follow section 4 of this file for words to avoid and prefer.

---

## 13. Build plan — high level

Detailed phase-by-phase prompts live in `/docs/BUILD-PHASES.md`. Summary:

1. **Phase 1:** Scaffold (Vite, deps, aliases, routing, placeholders for all 5 pages)
2. **Phase 2:** Design system (paste `index.css`, smoke-test custom classes)
3. **Phase 3:** Layout shell (PageLayout, Header, Footer, WhatsApp bubble, ScrollToTop)
4. **Phase 4:** Atoms + motion wrappers (Button, Input, FadeIn, Stagger)
5. **Phase 5:** Molecules + shared organisms (CapabilityCard, StatCounter, CTASection, FAQItem)
6. **Phase 6:** Home page
7. **Phase 7:** Features page
8. **Phase 8:** Works With page (the hub-and-spoke visual)
9. **Phase 9:** Industries page
10. **Phase 10:** Get Started page (plans + 3-step setup walkthrough + FAQ + demo form)
11. **Phase 11:** 404 + polish + SEO + Lighthouse pass
12. **Phase 12:** Cross-browser/mobile QA

Each phase ends with `npm run dev` + browser check before moving on.

---

## 14. Don'ts

- ❌ Don't use the word "orchestration", "ecosystem", "infrastructure", "stack" anywhere a visitor will read.
- ❌ Don't bring back a separate Pricing page — plans live inside `/get-started`.
- ❌ Don't add an About page. Client didn't provide content.
- ❌ Don't add a Blog. Out of scope for v1.
- ❌ Don't add three.js or any 3D.
- ❌ Don't rewrite the client's copy. Their voice, their words.
- ❌ Don't add testimonials with fake names.
- ❌ Don't add stock photography of headsets/call centres. Icons and illustrated SVGs only.
- ❌ Don't add a language switcher. Site is English. Product is multilingual.
- ❌ Don't add a sticky bottom mobile CTA bar. Header sticky + WhatsApp bubble is enough.
- ❌ Don't auto-show modals or popups on page load.
- ❌ Don't add a cost calculator or qualification quiz (we dropped these intentionally).

---

## 15. Performance targets

- Lighthouse Performance ≥ 90 on mobile
- LCP < 2.5s
- CLS < 0.05
- Initial JS bundle < 180 KB gzipped
- Home page total weight < 1.2 MB
- All routes lazy-loaded
- Fonts preloaded with `font-display: swap`

---

## 16. SEO essentials

- Per-page `<title>` and `<meta name="description">` via react-helmet-async
- Per-page OpenGraph tags (og:title, og:description, og:image)
- Twitter card meta
- `/public/sitemap.xml` listing all 5 routes
- `/public/robots.txt` allowing all + sitemap reference
- Semantic HTML: one `<h1>` per page, sequential heading levels
- All images with `alt` (empty string OK for purely decorative)
- All form fields with associated `<label>`

Page titles + descriptions provided by client at the end of `CONTENT.md`. Adapt the Pricing-page meta to the Get Started page.

---

## 17. How to use this with Claude Code

```
1. Drop these files into your project folder:
   CLAUDE.md
   docs/CONTENT.md
   docs/DESIGN.md
   docs/BUILD-PHASES.md
   index.html              (the pre-built one with Tailwind + theme + fonts)
   src/styles/index.css    (full custom-class registry)
   src/config/appConfig.js

2. In VS Code, open the folder. Open Claude Code.

3. First message:
   "Read CLAUDE.md, then docs/CONTENT.md, then docs/DESIGN.md, then docs/BUILD-PHASES.md.
    Execute Phase 1 from BUILD-PHASES.md. Stop when the dev server is running and all 5 routes
    render their placeholder. Then ask me to confirm before moving to Phase 2."

4. After each phase, review in the browser. Approve, then say "Phase N looks good, do Phase N+1."
```

Keep iterations short. Don't let Claude Code do more than one phase per message.
