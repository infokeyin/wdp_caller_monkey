# BUILD-PHASES.md

> Execute these phases in order. Don't skip ahead. After each phase, run `npm run dev`, open the browser, and confirm the phase looks right before moving on. Keep iteration loops tight: **one phase per Claude Code message**.

> **Plain language rule:** Read CLAUDE.md section 4 before writing any UI copy. Avoid jargon like "orchestration", "capabilities", "stack", "ecosystem". The visitor is a non-technical SMB owner in India.

---

## Phase 1: Scaffold

### Goal
A Vite + React app that runs, routes between 5 placeholder pages, with Tailwind CDN loaded and the theme configured.

### Files to create
```
package.json
vite.config.js
.eslintrc.cjs
.prettierrc
.gitignore
index.html                     # use the provided boilerplate index.html
src/main.jsx
src/App.jsx
src/styles/index.css           # use the provided boilerplate index.css
src/config/appConfig.js        # use the provided boilerplate appConfig.js
src/pages/Home/Home.jsx
src/pages/Features/Features.jsx
src/pages/WorksWith/WorksWith.jsx
src/pages/Industries/Industries.jsx
src/pages/GetStarted/GetStarted.jsx
src/pages/NotFound/NotFound.jsx
```

### Claude Code prompt
```
Read CLAUDE.md sections 2, 5, and 6.

Scaffold a Vite + React (JS, no TS) project with these dependencies:
  react react-dom react-router-dom framer-motion lucide-react clsx
  react-helmet-async react-hook-form zod react-intersection-observer
  @hookform/resolvers

Dev deps: vite @vitejs/plugin-react eslint eslint-plugin-react
  eslint-plugin-react-hooks prettier

Set up path aliases per CLAUDE.md section 6 in vite.config.js.

The user has already provided these files in the project root — do NOT modify them:
  - index.html (Tailwind CDN + theme + font preloads — leave alone)
  - src/styles/index.css (full design system — leave alone)
  - src/config/appConfig.js (brand config — leave alone)

Create the 5 page placeholder components plus NotFound. Each placeholder is
just a div with the page name in an h1 styled with `custom-h1` class.

Routes:
  /              -> Home
  /features  -> Features
  /works-with    -> WorksWith
  /industries    -> Industries
  /get-started   -> GetStarted
  *              -> NotFound

Wire react-router-dom in App.jsx with all 5 routes plus the catch-all 404,
each lazy-loaded with React.lazy() and Suspense fallback "Loading…".

In main.jsx, wrap App in HelmetProvider from react-helmet-async, import
index.css.

Test:
  npm install
  npm run dev
  Open localhost. Verify every route renders its placeholder.

Stop here. Confirm with me before Phase 2.
```

### Done when
- `npm run dev` runs without errors
- Visiting `/`, `/features`, `/works-with`, `/industries`, `/get-started` each renders its placeholder
- Unknown route renders 404 placeholder
- Tailwind brand colors apply (test by adding `text-brand-green` temporarily)
- Cabinet Grotesk + Inter Tight load (check Network tab > Fonts)

---

## Phase 2: Layout shell

### Goal
Every page wrapped by `PageLayout` (header + footer + floating UI + Helmet meta).

### Files to create
```
src/components/layout/PageLayout.jsx
src/components/layout/Section.jsx
src/components/layout/Container.jsx
src/components/organisms/Header.jsx
src/components/organisms/Footer.jsx
src/components/floating/WhatsAppBubble.jsx
src/components/floating/ScrollToTopFab.jsx
src/hooks/useScrollDirection.js
src/hooks/useLockBodyScroll.js
src/hooks/useReducedMotion.js
src/hooks/useWhatsAppLink.js
src/data/navigation.js
src/data/whatsappMessages.js
src/utils/classNames.js
```

### Claude Code prompt
```
Read CLAUDE.md (sections 4, 8, 9) and docs/CONTENT.md (section 16 Footer).

Build:

1. src/utils/classNames.js — re-export clsx as `cn`.

2. src/data/navigation.js:
   export const navigation = [
     { label: 'Features',     path: '/features' },
     { label: 'Works With',   path: '/works-with' },
     { label: 'Industries',   path: '/industries' },
     { label: 'Get Started',  path: '/get-started' },
   ];

3. src/data/whatsappMessages.js:
   default message + per-page messages keyed by path. Friendly, conversational
   prefilled text (e.g. for /works-with: "Hi! I'd like to see how Caller
   Monkey would connect to my existing tools."). For /features: "Hi!
   I'd like to understand how Caller Monkey would work for my business."

4. src/hooks/* — useScrollDirection (returns 'up'|'down'), useLockBodyScroll(isLocked),
   useReducedMotion (matchMedia wrapper), useWhatsAppLink(message) returns
   `https://wa.me/${appConfig.contactInfo.whatsapp}?text=${encodeURIComponent(message)}`.

5. src/components/layout/Container.jsx — variants: default/wide/narrow,
   applies the `custom-container*` class.

6. src/components/layout/Section.jsx — props: variant ('default'|'alt'|'dark'|'narrow'),
   id. Applies `custom-section` (and `custom-section-alt`/`-dark` accordingly).

7. src/components/layout/PageLayout.jsx — wraps children with:
   - <Helmet> using props { title, description, ogImage }
   - <Header/>
   - <main>{children}</main>
   - <Footer/>
   - <WhatsAppBubble/>
   - <ScrollToTopFab/>
   Also runs window.scrollTo(0,0) on every route change.

8. src/components/organisms/Header.jsx:
   - Logo on left (use src/props/logo/logo-full.png — user will add later;
     for now use text "Caller Monkey" in Cabinet Grotesk display font)
   - Nav items from navigation.js, centered
   - "Get a Free Demo" Link on the right styled as
     `custom-btn custom-btn-primary custom-btn-sm` pointing to
     /get-started#demo-form
   - Sticky to top. Use useScrollDirection: when scrolling down past 80px,
     compress (reduce padding from 1rem to 0.5rem, add backdrop-blur, add
     subtle bottom border). Use CSS transitions, not Framer Motion.
   - Mobile (< 768px): replace nav with hamburger icon. On tap, open a
     full-screen slide-in panel from the right using Framer Motion
     AnimatePresence. Items stack large. "Get a Free Demo" full-width
     button at the bottom of the panel. Close on link click, route change,
     ESC, backdrop tap. Use useLockBodyScroll while open.

9. src/components/organisms/Footer.jsx:
   - 4-column grid from docs/CONTENT.md section 16 (Product / Solutions /
     Industries / Company) + a fifth column for contact info & social.
   - Product column links go to /features (or anchors within it).
   - Use appConfig.contactInfo for email/phone/whatsapp/address.
   - Use appConfig.social for social media URLs.
   - Bottom row: "© 2025 Caller Monkey. All rights reserved. | Made in
     India, Built for India." on the left. On the right: "Developed by
     Infokey ↗" linking to https://infokeytech.com in new tab.
   - Background: --color-grey-950. Text: --color-text-on-dark. Brand
     green accent on link hover only.

10. src/components/floating/WhatsAppBubble.jsx:
    - Fixed bottom-right, 56x56px.
    - Background --color-whatsapp. White WhatsApp/MessageCircle icon.
    - Gentle pulse via custom-anim-pulse-wa, capped to 6 cycles.
    - Hover: scale(1.06) + tooltip "Chat with us on WhatsApp".
    - Click: useWhatsAppLink with page-appropriate message via useLocation.
    - Hidden < 360px.
    - Respects useReducedMotion: no pulse.

11. src/components/floating/ScrollToTopFab.jsx:
    - Appears when window.scrollY > 600.
    - Fixed bottom-right, 44x44px, BELOW the WhatsApp bubble (bottom: 96px).
    - Dark grey circle, white ArrowUp icon.
    - Click: smooth scroll to top.
    - Fade + slide in from below (Framer Motion, 200ms).

Wrap all 5 page placeholders with <PageLayout title="..." description="...">.

Test: every route shows Header + Footer + WhatsApp bubble. Mobile menu
opens/closes. Header compresses on scroll. WhatsApp bubble opens correct
prefilled wa.me link per page.

Stop here.
```

---

## Phase 3: Atoms + motion wrappers

### Files to create
```
src/components/atoms/Button.jsx
src/components/atoms/Input.jsx
src/components/atoms/Textarea.jsx
src/components/atoms/Select.jsx
src/components/atoms/Badge.jsx
src/components/atoms/Tag.jsx
src/components/atoms/Icon.jsx
src/components/atoms/Spinner.jsx
src/components/atoms/ChipToggle.jsx

src/components/motion/FadeIn.jsx
src/components/motion/Stagger.jsx
src/components/motion/PageTransition.jsx

src/hooks/useInViewport.js
```

### Claude Code prompt
```
Read CLAUDE.md section 12 (conventions) and section 8 (animation philosophy).

Build all atoms and motion wrappers listed above.

Button (most important):
  - Props: variant ('primary'|'secondary'|'ghost'|'whatsapp'), size ('sm'|'md'|'lg'),
    icon, iconPosition, loading, as ('button'|'a'|Link).
  - Forward refs.
  - Maps variant + size to custom-btn classes from index.css.

Input / Textarea / Select:
  - Apply custom-input class.
  - Error state: add custom-input-error.
  - Optional label + error message text.
  - Forward refs.

Icon: wrap lucide-react icon by name. Default size 20, stroke-width 1.75.

ChipToggle: pill-style toggle. Selected = brand-green filled, unselected
  outlined.

FadeIn: Framer Motion. Default: opacity 0->1, y +20 -> 0, 250ms, easeOutQuart,
  viewport once with -10% margin. Props for delay, duration, y override.
  Respect useReducedMotion: opacity only.

Stagger: parent + child Framer Motion variants. Default staggerChildren 0.08,
  delayChildren 0.1. Expose Stagger.Child.

PageTransition: opacity fade on pathname change, 180ms. Wraps Routes in App.jsx.

Test: temporary render of FadeIn, Stagger with 3 children, and Button variants
on Home placeholder.

Stop here.
```

---

## Phase 4: Molecules + shared organisms

### Files to create
```
src/components/molecules/CapabilityCard.jsx
src/components/molecules/IndustryCard.jsx
src/components/molecules/StatCounter.jsx
src/components/molecules/UseCaseCard.jsx
src/components/molecules/FAQItem.jsx
src/components/molecules/PlanCard.jsx
src/components/molecules/StepCard.jsx
src/components/molecules/ComparisonTable.jsx

src/components/organisms/CTASection.jsx
src/components/organisms/FAQSection.jsx

src/utils/analytics.js
```

### Claude Code prompt
```
Read CLAUDE.md section 12 and docs/DESIGN.md section 7.

Build all molecules and organisms listed.

CapabilityCard: icon + title + 1-line description. Hover: custom-card-hover.

IndustryCard: icon + name + 1-line description. Optional anchor link. Hover lift.

StatCounter: counts from 0 to target on viewport entry (requestAnimationFrame,
  1200ms, easeOutQuart). Number in JetBrains Mono. Respects useReducedMotion.
  Props: value, suffix, prefix, label.

UseCaseCard: business-type badge + challenge headline + solution paragraph.
  Two layout variants (text-left / text-right) for visual rhythm.

FAQItem: accordion item using <details>/<summary> with AnimatePresence for
  smooth height transitions.

PlanCard: plan name + audience + features list (with check icons) + CTA
  button. Featured plan gets custom-card-feature.

StepCard: numbered step badge + title + 1-liner + result paragraph.

ComparisonTable: takes columns and rows, renders a real <table> with
  custom-table class. <th scope="col">. Used for all comparison blocks.

CTASection: variant ('light'|'dark'|'green'). Headline + sub + 1-2 CTA
  buttons. Used at the bottom of every page.

FAQSection: wraps a list of FAQItems with a section heading.

src/utils/analytics.js: export const track = (event, props = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', event, props);
  }
};

Test: temporary render of one of each molecule on Home with sample data.

Stop here.
```

---

## Phase 5: Home page

### Files to create
```
src/data/capabilities.js
src/data/industries.js
src/data/seo.js
src/pages/Home/Home.jsx
src/pages/Home/sections/HomeHero.jsx
src/pages/Home/sections/HomeTrustBar.jsx
src/pages/Home/sections/HomeProblem.jsx
src/pages/Home/sections/HomeWhatItDoes.jsx
src/pages/Home/sections/HomeConnectsTeaser.jsx
src/pages/Home/sections/HomeResults.jsx
src/pages/Home/sections/HomeCTA.jsx
```

### Claude Code prompt
```
Read CLAUDE.md section 4 (plain language) and docs/CONTENT.md sections 1-4, 12, 14.

Create:
  - src/data/capabilities.js (the 10 items from CONTENT.md section 6,
    with lucide icon names from the "Suggested lucide icons" list)
  - src/data/industries.js (12 industries from CONTENT.md section 9)
  - src/data/seo.js (per-page meta titles + descriptions)

Build the Home page with these 7 sections in order. Use ALL copy verbatim
from docs/CONTENT.md. Section headings on Home must follow the plain-language
rule from CLAUDE.md section 4.

1. HomeHero
   - Full headline (CONTENT.md section 1)
   - Sub-headline below
   - Two CTA buttons:
     * Primary "Get a Free Demo" -> /get-started#demo-form
     * Secondary "See How It Works" -> /features
   - Right side: a subtle connected-icons SVG showing 5 icons (phone,
     CRM, WhatsApp, calendar, email) all linking by thin lines to a
     central monkey/brain node. Animate connecting lines drawing in on
     mount (Framer Motion pathLength, once). Subtle floating motion on
     outer icons via CSS keyframes.
   - Layout: two columns desktop (text 55% / visual 45%), single column
     mobile with visual above text.
   - Apply FadeIn with slight stagger to headline, sub, and CTAs.

2. HomeTrustBar (CONTENT.md section 2)
   - Thin centered band: 7 industry names separated by middle dots.
   - Small grey text, no animation.

3. HomeProblem (CONTENT.md section 3)
   - Section heading: "Your business is growing. Your communication is
     not keeping up."
   - Body paragraph.
   - ComparisonTable with the 6 rows.
   - Closing bold line at the bottom (the "Caller Monkey solves this..."
     line).

4. HomeWhatItDoes
   - Section heading: "What Caller Monkey Does for You" (avoid the word
     "Platform")
   - Body paragraph from CONTENT.md section 4.
   - Mini-section heading: "Think of it as your smartest team member:"
   - 7-item icon list (lucide icons) with green icons.
   - Closing italic line.

5. HomeConnectsTeaser
   - Section heading: "One Brain. Every Tool, Connected."
   - One short paragraph hinting at how things connect.
   - Mini hub-and-spoke visual: Caller Monkey logo at center with just
     6 visible integration icons around it (CRM, WhatsApp, Email,
     Calendar, Payment, Analytics), connecting lines visible.
   - Big CTA below: "See How It Connects →" linking to /works-with.

6. HomeResults
   - Section heading: "What Businesses Experience After Going Live."
   - 4 big StatCounter cards in a row (2x2 mobile):
     * "<2 mins" / "Lead response time"
     * "100%" / "Follow-up coverage"
     * "15 days" / "Go-live timeline"
     * "15+" / "Languages supported"
   - Below: small "See more results →" link expanding to show the full
     Results table from CONTENT.md (use AnimatePresence to expand in place).

7. HomeCTA — uses CTASection
   - Headline: "Let's find where communication is costing your business
     money."
   - Primary CTA: "Start the Conversation →" -> /get-started#demo-form
   - Secondary CTA: "Chat on WhatsApp" -> WhatsApp link.

Wrap Home.jsx in <PageLayout> with home SEO meta.

Test: full home page scrolls naturally. Animations subtle. Stat counters
trigger on scroll. Mobile layout stacks correctly. All CTAs route correctly.

Stop here.
```

---

## Phase 6: Features page

### Files to create
```
src/pages/Features/Features.jsx
src/pages/Features/sections/FeaturesHero.jsx
src/pages/Features/sections/FeaturesWhatItDoes.jsx
src/pages/Features/sections/FeaturesWhyDifferent.jsx
src/pages/Features/sections/FeaturesCTA.jsx
```

### Claude Code prompt
```
Read docs/CONTENT.md sections 6 and 11, and CLAUDE.md section 4 (plain language).

Build the Features page with 4 sections. Section headings use plain
language (no "Capabilities", no "Platform", no "Orchestration").

Note: the 3-step setup walkthrough (CONTENT.md section 5) does NOT live
on this page. It belongs on the Get Started page (Phase 9). Don't build
it here.

1. FeaturesHero
   - Headline: "10 Things Caller Monkey Does for Your Business"
   - Short sub: a one-line description in plain English, e.g.
     "One simple system that handles your calls, messages, follow-ups,
     reminders, and team updates, all in one place."
   - Single primary CTA: "Get a Free Demo"

2. FeaturesWhatItDoes (CONTENT.md section 6, with friendly framing)
   - Section heading: "What Caller Monkey Does"
   - Intro line: "Ten everyday business jobs, handled automatically."
   - 10-card icon grid (5 cols desktop, 2 cols tablet, 1 col mobile) of
     CapabilityCard.
   - Stagger reveal on viewport entry.

3. FeaturesWhyDifferent (CONTENT.md section 11)
   - Section heading: "What Makes Caller Monkey Different"
   - Intro: "In plain words: here's what you get with Caller Monkey that
     you don't get elsewhere."
   - ComparisonTable: left column "What Others Offer" (greyed),
     right column "What Caller Monkey Delivers" (brand green accent).
   - 7 rows from CONTENT.md.

4. FeaturesCTA — CTASection
   - Headline: "Start with one workflow. Measure the result. Then add
     more."
   - Primary: "Talk to Our Team" -> /get-started#demo-form

Wrap in <PageLayout> with appropriate SEO meta.

Stop here.
```

---

## Phase 7: Works With page (the hub-and-spoke visual)

This is the most visually demanding page. Take your time.

### Files to create
```
src/data/connections.js
src/pages/WorksWith/WorksWith.jsx
src/pages/WorksWith/sections/WorksWithHero.jsx
src/pages/WorksWith/sections/WorksWithVisual.jsx
src/pages/WorksWith/sections/WorksWithTable.jsx
src/pages/WorksWith/sections/WorksWithCTA.jsx
src/components/organisms/ConnectionsVisual/HubAndSpoke.jsx
src/components/organisms/ConnectionsVisual/HubAndSpoke.css
```

### Claude Code prompt
```
Read docs/CONTENT.md section 7 (the full "Works With" content) and
CLAUDE.md section 4 (plain language).

The client called this the most important visual on the entire website.
The internal name in the content doc was "orchestration"; on the website
the page is called "Works With" and the language is conversational.

Create src/data/connections.js with the 13 integration entries:
  { name, icon (lucide name), tools, automates, impact, color }

Suggested lucide icons:
  CRM -> Database
  WhatsApp Business API -> MessageSquare
  Email Platform -> Mail
  Attendance & HR -> CalendarCheck
  Employee Location -> MapPin
  Google Calendar -> Calendar
  Payment Gateway -> CreditCard
  Helpdesk -> Headphones
  Lead Platforms -> Target
  SMS Gateway -> MessageCircleMore
  NPS / Survey -> Star
  ERP / Tally -> FileSpreadsheet
  Analytics / BI -> BarChart3

Build the page:

1. WorksWithHero
   - Headline: "Works With Everything You Already Use."
   - Body paragraph: "Most businesses use 5 to 10 different tools — a
     CRM here, a WhatsApp tool there, an attendance app, an email
     system, a reporting dashboard. None of them talk to each other.
     Your team wastes hours moving data between systems by hand."
   - Sub-headline (prominent): "Caller Monkey connects all of them."
   - Body continuation from CONTENT.md (the "When Caller Monkey speaks..."
     paragraph).

2. WorksWithVisual — the centerpiece
   - Container min-height 640px desktop, 480px mobile.
   - Renders HubAndSpoke component.

3. HubAndSpoke component:
   - Inline SVG with viewBox 800x600.
   - Caller Monkey logo (placeholder "CM" in a green circle until logo
     SVG is dropped in) at center, 80px circle.
   - 13 integration icons placed on a circle around center, radius
     240px on desktop. Each icon: 48px white circle with subtle shadow
     and coloured outline matching data.color.
   - Thin connecting line from each icon to center. Default colour
     --color-grey-300, stroke-width 1.
   - On viewport entry: lines draw in via Framer Motion pathLength,
     staggered 60ms each, easeOutQuart, total ~1.5s. viewport={{ once: true }}.
   - Each integration icon: subtle floating motion (translateY ±4px
     over 6s, alternating starts).
   - On hover icon:
     * Scale 1.08
     * Connecting line thickens to stroke-width 2 and tints --color-green-500
     * Tooltip above the icon shows the integration name
   - On click icon:
     * Smooth scroll to matching row in table below
     * Row briefly highlights (3s green background pulse)
   - Mobile (< 768px): vertical layout — central node at top,
     integrations stacked below as a connected list with vertical lines.
   - Respects useReducedMotion: lines and icons appear instantly,
     no floating.

4. WorksWithTable (CONTENT.md section 7, the 13-row table)
   - Section heading: "Here's What Connects to What"
   - Intro: "Each tool Caller Monkey works with, and what gets handled
     automatically when it does."
   - ComparisonTable with 3 columns: Tool / What Gets Handled /
     What You Get.
   - Each row has id={`connection-${slug}`} for the hub visual to scroll to.

5. WorksWithCTA — CTASection
   - Headline: "Want to see how it would connect to YOUR tools?"
   - Primary: "Request a Live Walkthrough" -> /get-started#demo-form

Wrap in <PageLayout>.

After building, test:
  - Hub-and-spoke renders cleanly on desktop and mobile
  - Lines draw in once on entry
  - Hovering icon highlights its line + shows tooltip
  - Clicking icon scrolls to its table row and pulses the row
  - Mobile vertical layout works
  - Reduced-motion fallback works

Stop here.
```

---

## Phase 8: Industries page

### Files to create
```
src/data/useCases.js
src/pages/Industries/Industries.jsx
src/pages/Industries/sections/IndustriesHero.jsx
src/pages/Industries/sections/IndustriesGrid.jsx
src/pages/Industries/sections/IndustriesUseCases.jsx
src/pages/Industries/sections/IndustriesCTA.jsx
```

### Claude Code prompt
```
Read docs/CONTENT.md sections 9 + 10.

Create src/data/useCases.js with the 5 customer stories (CONTENT.md
section 10).

Build the Industries page with 4 sections.

1. IndustriesHero
   - Headline: "Built for Every Industry Where Communication Drives
     Revenue."
   - Short sub.

2. IndustriesGrid
   - Section heading: "Industries We Serve"
   - 12 IndustryCard cards in a 3-col desktop / 2-col tablet / 1-col
     mobile grid. Each: industry icon + name + one-liner.
   - Stagger reveal on entry.

3. IndustriesUseCases
   - Section heading: "Real Stories From Real Businesses"
   - 5 UseCaseCard items vertically. Cards alternate text-left and
     text-right on desktop (zigzag).
   - Each card: badge "Business Type", H3 challenge headline, body
     paragraph for the solution.

4. IndustriesCTA — CTASection
   - Headline: "Don't see your industry? Tell us about your business."
   - Primary: "Get a Free Demo" -> /get-started#demo-form?industry=other

Wrap in <PageLayout>.

Stop here.
```

---

## Phase 9: Get Started page (plans + 3-step setup + FAQ + demo form)

### Files to create
```
src/data/plans.js
src/data/faqs.js
src/data/setupSteps.js
src/pages/GetStarted/GetStarted.jsx
src/pages/GetStarted/sections/GetStartedHero.jsx
src/pages/GetStarted/sections/GetStartedPlans.jsx
src/pages/GetStarted/sections/GetStartedSetup.jsx
src/pages/GetStarted/sections/GetStartedFAQ.jsx
src/pages/GetStarted/sections/GetStartedDemoForm.jsx

src/components/interactive/DemoForm/DemoForm.jsx
src/components/interactive/DemoForm/DemoFormSuccess.jsx
```

### Claude Code prompt
```
Read docs/CONTENT.md sections 5, 8, 13, 15 and CLAUDE.md section 9.

Create:
  - src/data/plans.js (the 4 tiers from CONTENT.md section 8, with
    `features` arrays. Names: keep "Starter", "Growth", "Professional",
    "Enterprise"; descriptions plain-language friendly. DO NOT use the
    word "orchestration" in any plan name or description — replace
    "Full Orchestration" with "Full Setup".)
  - src/data/setupSteps.js (the 3 setup steps from CONTENT.md section 5:
    Connect, Train, Scale. Each step has: number, title, whatHappens,
    result.)
  - src/data/faqs.js (10 FAQs from CONTENT.md section 13)

Build the Get Started page with 5 sections, in this order.

1. GetStartedHero
   - Headline: "Let's Get You Started."
   - Sub: "Pick where to begin. Add more as your business grows. Pay
     only for what you use."
   - Small inline note: "Going live takes 15 days from the day we have
     your scripts and details."

2. GetStartedPlans (CONTENT.md section 8 — framed as "starting points",
   not "pricing tiers")
   - Section heading: "Where to Start"
   - Intro: "Caller Monkey works on a simple subscription model. Start
     with the basics. Add more as you need them. Each step builds on
     the last."
   - 4 PlanCard cards in a row, "Growth" marked as "Most Popular".
   - Each card shows plan name + "Best for" + features (with check icons
     in brand green) + a CTA button "Talk to Our Team" that scrolls to
     #demo-form.
   - Below grid, italic footnote (CONTENT.md section 8 footnote): the
     per-minute + subscription explanation.
   - DO NOT use the word "Orchestration" in the Enterprise plan name.
     Use "Enterprise — Full Setup" instead.

3. GetStartedSetup (CONTENT.md section 5) — moved here from the
   old How It Works page
   - Section heading: "How Going Live Works"
   - Intro: "Going live takes 15 days. Here's exactly how the setup
     happens, from the day you sign up to the day your AI starts
     handling calls."
   - 3 StepCard items in a horizontal row, each numbered (Step 1
     Connect, Step 2 Train, Step 3 Scale).
   - Animated arrow connectors between cards on desktop, subtle, drawn
     in once on viewport entry.
   - Cards stack vertically on mobile with a vertical connector line.

4. GetStartedFAQ (CONTENT.md section 13)
   - Section heading: "Common Questions"
   - FAQSection with all 10 FAQs from CONTENT.md.

5. GetStartedDemoForm (id="demo-form")
   - Section heading: "Book Your Free Demo"
   - Sub: "Tell us a little about your business. We'll show you exactly
     where Caller Monkey would help."
   - Two-column layout on desktop:
     * Left (60%): DemoForm
     * Right (40%): Trust panel with:
       - "What happens next?" 3 numbered steps:
         1. We review your details (within 4 working hours)
         2. We schedule a 30-min discovery call
         3. We do a live walkthrough customised to your business
       - "Or chat with us on WhatsApp" button (whatsapp variant)
       - Tiny trust signals: "Reply within 24 hours" / "NDA on request" /
         "Zero hard-sell"

DemoForm component:
  - react-hook-form + zod for validation
  - Schema validates all required fields per CONTENT.md section 15
  - Honeypot field `botcheck` rendered off-screen with tabIndex={-1}
  - Min 2-second time check on submit (silently drop if too fast)
  - On submit:
    POST https://api.web3forms.com/submit
    headers: Content-Type: application/json, Accept: application/json
    body: {
      access_key: appConfig.forms.web3FormsAccessKey,
      subject: 'New demo request — Caller Monkey',
      from_name: 'Caller Monkey Web',
      source: 'get-started-demo-form',
      name, email, phone, company, company_size, industry,
      use_case, preferred_time,
    }
  - 3 states: idle (form), submitting ("Booking…" + Spinner), success
    (DemoFormSuccess), error (red banner: "Something went wrong. Try
    again or chat with us on WhatsApp.")
  - On mount, read URL params (industry, source) and prefill where
    applicable.
  - Track on submit: track('demo_form_submit', { industry, company_size }).

DemoFormSuccess component:
  - Large green CheckCircle2 icon
  - "We've got your details" headline
  - Sub: "Someone from our team will reach out within 24 hours. Want
    to skip the wait?"
  - WhatsApp CTA button (whatsapp variant, large)
  - Small link "Back to homepage" below

Stop here.
```

### Done when
- Plans render with "Growth" featured, no mention of "orchestration" anywhere
- FAQ accordion works
- Demo form validates and submits to Web3Forms
- Success state shows after submit
- URL params prefill the form when present

---

## Phase 10: 404 + polish + SEO

### Files to touch / create
```
src/pages/NotFound/NotFound.jsx           # build out
public/sitemap.xml
public/robots.txt
public/favicon.svg
public/og-image.png                       # 1200x630 OG card
src/data/seo.js                           # complete with all 5 pages
src/utils/seo.js                          # buildMeta helper
```

### Claude Code prompt
```
Read docs/CONTENT.md section 17 (SEO).

1. Build NotFound:
   - Centered layout, single section.
   - Big "404" in display font.
   - Headline: "We dropped that call."
   - Sub: "But our voice bots are still picking up. Try one of these:"
   - 3 link cards: Home / Features / Get Started.
   - Small monkey SVG mascot.

2. Complete src/data/seo.js with all 5 page meta tags. For the
   /get-started page, use the pricing-page meta from CONTENT.md
   section 17 but adapt: title "Get Started & Free Demo | Caller
   Monkey", description focuses on demo + starting points.

3. Create src/utils/seo.js:
   import { seoData } from '@data/seo';
   export const buildMeta = (pageKey) => seoData[pageKey] || seoData.home;

4. Update PageLayout to use buildMeta(seoKey) for all <Helmet> tags.
   Each page passes seoKey="home" / "features" / "worksWith" /
   "industries" / "getStarted".

5. /public/sitemap.xml with all 5 routes + lastmod date.

6. /public/robots.txt:
   User-agent: *
   Allow: /
   Sitemap: https://callermonkey.in/sitemap.xml

7. Add OG + Twitter meta in PageLayout Helmet:
   - og:image, og:type "website", og:url
   - twitter:card "summary_large_image"
   - canonical link tag

8. Audit all CTAs:
   - Every demo-related CTA links to /get-started#demo-form
   - WhatsApp CTAs use page-specific prefilled messages

9. Run Lighthouse on Home and Get Started (mobile mode). Fix anything
   below 90 Perf:
   - Lazy-load heavy section components
   - loading="lazy" on below-the-fold images
   - Fonts preloaded
   - Initial JS bundle < 200 KB gzipped

10. Fix any Accessibility issues:
    - All images have alt
    - Form fields have labels
    - Color contrast passes WCAG AA
    - Sequential heading levels per page
    - No keyboard trap in mobile menu

Stop here.
```

---

## Phase 11: Cross-browser / mobile QA

### Claude Code prompt
```
Run a self-QA pass:

DESKTOP (1440px):
  [ ] Home loads, all sections render, animations subtle
  [ ] Features loads, features grid + comparison table look right
  [ ] Works With: hub-and-spoke renders, hover/click interactions work
  [ ] Industries: 12 cards grid, 5 use cases zigzag layout
  [ ] Get Started: 4 plans, "Growth" featured, 3-step setup walkthrough draws in, FAQ accordion works
  [ ] Demo form submits to Web3Forms
  [ ] Header sticky + compresses on scroll
  [ ] Footer renders with Infokey attribution in new tab
  [ ] WhatsApp bubble opens correct prefilled message per page
  [ ] No instance of the word "orchestration" anywhere in visible UI

MOBILE (360px, 414px):
  [ ] Hamburger menu opens/closes, locks body scroll
  [ ] All multi-column layouts stack to single column
  [ ] Hub-and-spoke uses vertical layout, not crushed radial
  [ ] WhatsApp bubble visible
  [ ] Touch targets all >= 44x44px

ACCESSIBILITY:
  [ ] Keyboard nav works (Tab, Enter, ESC)
  [ ] Focus rings visible on all interactive elements
  [ ] Form labels associated with inputs
  [ ] prefers-reduced-motion: reduce — all animations degrade gracefully

PERFORMANCE:
  [ ] Lighthouse mobile Perf >= 90
  [ ] LCP < 2.5s
  [ ] CLS < 0.05
  [ ] No layout shifts caused by animations

PLAIN LANGUAGE:
  [ ] No "orchestration", "ecosystem", "infrastructure", "stack",
      "capabilities" (as a label), "leverage" anywhere a visitor reads
  [ ] All section headings sound conversational, not technical

Report which items pass and which need fixes. Then fix the failing ones.

Stop here.
```

---

## After Phase 11

Hand off:

1. Push repo to private GitHub.
2. Short README.md covering:
   - How to run locally
   - Where to update content (`src/data/*.js`)
   - Where to update contact info (`src/config/appConfig.js`)
   - Where to put the Web3Forms access key
   - How to deploy (Vercel / Netlify zero-config)
3. The CLAUDE.md folder so the next developer (or another Claude Code
   iteration) has full context.
