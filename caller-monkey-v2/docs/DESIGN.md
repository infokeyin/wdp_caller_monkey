# DESIGN.md

> Design tokens, colors, fonts, custom-class registry. The full `src/styles/index.css` is provided alongside this doc — paste it into the project and consume `custom-*` classes from components.

---

## 1. Colors

Pulled from the Caller Monkey logo (green banner + grey gorilla) and extended into a usable scale.

### Brand greens
| Token | Hex | Use |
|---|---|---|
| `--color-green-50` | `#E8F7EC` | Lightest tint, subtle bg sections |
| `--color-green-100` | `#C7ECCF` | Hover backgrounds |
| `--color-green-200` | `#9BDDA8` | Borders in green zones |
| `--color-green-400` | `#3FBC5A` | Hover state for primary buttons |
| `--color-green-500` | `#2DA744` | **Primary brand green** (logo banner) |
| `--color-green-600` | `#218A37` | Active / pressed primary buttons |
| `--color-green-700` | `#1A6B2A` | Deep green (banner shadow, dark CTAs) |
| `--color-green-900` | `#0F3E18` | Deepest green, rare use |

### Greys
| Token | Hex | Use |
|---|---|---|
| `--color-grey-50` | `#FAFAFA` | Page band background (alt) |
| `--color-grey-100` | `#F3F3F3` | Card backgrounds, soft sections |
| `--color-grey-200` | `#E5E5E5` | Borders, dividers |
| `--color-grey-300` | `#CFCFCF` | Disabled states |
| `--color-grey-400` | `#9E9E9E` | Muted text, icon defaults |
| `--color-grey-500` | `#6E6E6E` | Secondary text |
| `--color-grey-600` | `#4A4A4A` | Body text |
| `--color-grey-700` | `#2F2F2F` | Strong body text |
| `--color-grey-900` | `#171717` | Headlines |
| `--color-grey-950` | `#0B0B0B` | Hero headlines, near-black |

### Semantic
| Token | Hex | Use |
|---|---|---|
| `--color-success` | `#2DA744` | Aliased to brand green |
| `--color-warning` | `#F4A623` | Pricing "Most popular" ribbon |
| `--color-error` | `#D9342B` | Form errors |
| `--color-info` | `#2C7BE5` | Info badges (rare) |
| `--color-whatsapp` | `#25D366` | WhatsApp bubble + button |

### Surfaces
| Token | Hex | Use |
|---|---|---|
| `--color-bg` | `#FFFFFF` | Default page background |
| `--color-bg-alt` | `#FAFAFA` | Alternating section bands |
| `--color-bg-elevated` | `#FFFFFF` | Cards, modals |
| `--color-bg-dark` | `#0B0B0B` | Final CTA strip only (optional) |
| `--color-text` | `#171717` | Default text |
| `--color-text-muted` | `#6E6E6E` | Secondary text |
| `--color-text-on-dark` | `#FAFAFA` | Text on dark CTA strip |
| `--color-text-on-green` | `#FFFFFF` | Text on green button |
| `--color-border` | `#E5E5E5` | Default border |

---

## 2. Typography

| Role | Font | Source |
|---|---|---|
| Display | **Cabinet Grotesk** Variable | [Fontshare](https://www.fontshare.com/fonts/cabinet-grotesk) — free |
| Body | **Inter Tight** | Google Fonts — free |
| Numbers / Stats / Code | **JetBrains Mono** | Google Fonts — free |

### Scale
| Token | clamp() | Use |
|---|---|---|
| `--text-display` | `clamp(2.5rem, 5vw + 1rem, 4.5rem)` | Hero H1 only |
| `--text-h1` | `clamp(2rem, 3.5vw + 1rem, 3.25rem)` | Page H1 |
| `--text-h2` | `clamp(1.5rem, 2.5vw + 1rem, 2.25rem)` | Section heading |
| `--text-h3` | `clamp(1.25rem, 1.5vw + 1rem, 1.625rem)` | Subsection |
| `--text-h4` | `1.25rem` | Card titles |
| `--text-lg` | `1.125rem` | Lead paragraphs |
| `--text-base` | `1rem` | Body |
| `--text-sm` | `0.875rem` | Small text |
| `--text-xs` | `0.75rem` | Microcopy, eyebrow |

### Weights & spacing
- `--leading-tight: 1.1`, `--leading-snug: 1.25`, `--leading-normal: 1.55`, `--leading-relaxed: 1.7`
- `--tracking-tight: -0.025em`, `--tracking-widest: 0.12em`

---

## 3. Spacing / layout

| Token | Value | Use |
|---|---|---|
| `--space-section-y` | `clamp(4rem, 7vw, 7rem)` | Vertical padding on `<Section>` |
| `--space-container-x` | `clamp(1.25rem, 4vw, 2.5rem)` | Container horizontal padding |
| `--container-max` | `1200px` | Default content width |
| `--container-wide` | `1400px` | Footer, wide visuals |
| `--container-narrow` | `760px` | Reading-width sections |

---

## 4. Radius, shadows, motion

```
--radius-sm: 6px           --shadow-sm: 0 1px 2px rgba(11,11,11,.04)
--radius-md: 10px          --shadow-md: 0 4px 12px rgba(11,11,11,.06)
--radius-lg: 16px          --shadow-lg: 0 12px 32px rgba(11,11,11,.10)
--radius-xl: 24px          --shadow-green: 0 8px 24px rgba(45,167,68,.22)
--radius-full: 9999px      --shadow-inset: inset 0 1px 0 rgba(255,255,255,.08)

--ease-out-quart: cubic-bezier(0.25, 1, 0.5, 1)
--ease-out-expo:  cubic-bezier(0.16, 1, 0.3, 1)
--duration-fast: 150ms     --duration-base: 300ms     --duration-slow: 600ms
```

---

## 5. Tailwind theme config (paste into index.html `<script>`)

```html
<script src="https://cdn.tailwindcss.com?plugins=forms,typography"></script>
<script>
  tailwind.config = {
    theme: {
      container: { center: true, padding: '1.25rem', screens: { '2xl': '1200px' } },
      extend: {
        colors: {
          brand: {
            green:        '#2DA744',
            'green-dark': '#1A6B2A',
            'green-light':'#3FBC5A',
            'green-50':   '#E8F7EC',
          },
          grey: {
            50:'#FAFAFA',100:'#F3F3F3',200:'#E5E5E5',300:'#CFCFCF',
            400:'#9E9E9E',500:'#6E6E6E',600:'#4A4A4A',700:'#2F2F2F',
            900:'#171717',950:'#0B0B0B',
          },
          whatsapp: '#25D366',
        },
        fontFamily: {
          display: ['"Cabinet Grotesk"','sans-serif'],
          body:    ['"Inter Tight"','sans-serif'],
          mono:    ['"JetBrains Mono"','monospace'],
        },
        borderRadius: { DEFAULT: '10px', lg: '16px', xl: '24px' },
        boxShadow: {
          card:  '0 4px 12px rgba(11,11,11,0.06)',
          float: '0 12px 32px rgba(11,11,11,0.10)',
          green: '0 8px 24px rgba(45,167,68,0.22)',
        },
      },
    },
  };
</script>
```

---

## 6. Custom-class registry

All defined in `src/styles/index.css`. Use these instead of repeating long Tailwind chains.

**Layout:**
- `custom-container` · `custom-container-wide` · `custom-container-narrow`
- `custom-section` · `custom-section-alt` · `custom-section-dark`

**Typography:**
- `custom-display` · `custom-h1` · `custom-h2` · `custom-h3`
- `custom-eyebrow` · `custom-lead` · `custom-mono-stat`

**Buttons** (apply to `<button>` or `<a>`):
- `custom-btn` (base)
- variants: `-primary` · `-secondary` · `-ghost` · `-whatsapp`
- sizes: `-sm` · `-lg`

**Cards:**
- `custom-card` · `custom-card-hover` · `custom-card-feature`

**Tags / Badges:**
- `custom-tag` · `custom-tag-dark` · `custom-tag-warning`

**Forms:**
- `custom-input` · `custom-input-error` · `custom-label` · `custom-error-text`

**Tables:**
- `custom-table` (clean bordered table, used for all comparison tables)

**Decorative:**
- `custom-divider` · `custom-divider-gradient`
- `custom-focus-ring` (a11y)

**Animations:** (kept very minimal)
- `custom-anim-pulse-wa` (the WhatsApp bubble pulse)
- `custom-anim-fade-up` (CSS-only fallback for FadeIn)

> The exact CSS for these classes lives in `src/styles/index.css` which is included in the boilerplate. Don't duplicate them in component files.

---

## 7. Component-level rules

- **Buttons:** always use the `Button` atom. Don't write raw `<button>` with Tailwind chains.
- **Sections:** always wrap page content in `<Section>` (which applies `custom-section` padding and an optional `variant="alt|dark|narrow"`).
- **Containers:** all section content sits inside `<Container>`.
- **Cards:** prefer `<Card>` molecule over composing custom-card classes inline.
- **Icons:** wrap lucide-react icons in the `Icon` atom for consistent size/colour/stroke. Default 20px stroke 1.75.
- **Tables (comparison data):** use the `<Table>` molecule which applies `custom-table`. Real semantic `<table>` element.

---

## 8. What "subtle animations" means here

The client asked for subtle. Concrete rules:

| Behaviour | Yes | No |
|---|---|---|
| Section reveal on scroll | Fade up, 20px Y, 250ms, easeOutQuart, once | Word-by-word, slide-from-side, scale-from-zero |
| Hover on cards | `translateY(-2px)`, shadow lift, 200ms | 3D rotateY, tilt, scale > 1.02 |
| Headline animation | Static, just appears in via FadeIn | Word-by-word, character-by-character |
| Counter stats | Count up from 0 once on viewport entry | Looping, spinning |
| Page change | Opacity fade 180ms | Slide horizontally, dissolve, complex |
| Background | Static colour | Animated mesh, parallax, particles |
| Mascot / logo | Static | Animated mascot (Lottie), bouncing, etc |
| WhatsApp bubble | Gentle pulse, capped to 6 cycles | Permanent pulse, bouncing |
| Hub-and-spoke visual | Connecting lines draw in once on entry, icons gently float | Lines redraw on every scroll, orbiting motion |
| Cursor effects | None | Custom cursor, magnetic, glow |

If unsure, **make it static**. We are aiming for the feel of Linear, Vercel, or Resend, not a Codrops demo.

---

## 9. Reduced motion fallbacks

Every animation must degrade gracefully when `prefers-reduced-motion: reduce` is set:

| Normal | Reduced |
|---|---|
| Fade up | Opacity 0 → 1, no movement |
| Stagger | All children appear at once |
| Counter up | Show final value immediately |
| Page transition | No transition |
| WhatsApp pulse | No pulse |
| Hub-and-spoke line draw | Lines visible immediately |
| Card hover lift | No lift (colour change only) |

Handle via the CSS media query block already in `index.css`, plus the `useReducedMotion()` hook for JS-driven animations.
