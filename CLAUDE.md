# SCOTT Furniture — Master Reference

Read this file at the start of every Claude Code session. Do not skip it.

---

## Project Identity

**Brand:** SCOTT — Premium luxury furniture, Bhopal, Madhya Pradesh, India
**Tagline:** Innovation that Inspires, Quality that Endures
**Target audience:** High-net-worth homeowners, interior designers, hotel procurement, architects
**Quality bar:** Minotti.com meets RH.com. Never a generic e-commerce feel.
**Contact:** swoodsbpl@gmail.com | +91 94250 12129 | +91 92292 29292
**Address:** 36, BHEL Ancillary Industrial Estate, Habibganj, Bhopal, M.P. 462024

---

## What This Site Is (and Is Not)

This is a **luxury brand showcase** — not a shop. It exists to:
1. Establish premium positioning for Scott in Bhopal and beyond
2. Display the product catalogue with editorial weight
3. Drive showroom visits and WhatsApp/email enquiries

It is NOT:
- An e-commerce store (no cart, no checkout, no payment)
- A CMS-driven site (no database, no Strapi, no Contentful)
- A search-driven catalogue (no search bar)
- A social platform (no accounts, no reviews system)

---

## Tech Stack

- **Next.js 14** — App Router + TypeScript (strict mode)
- **Tailwind CSS** — brand tokens in tailwind.config.ts
- **Framer Motion** — all animations except hero scroll (page transitions, reveals, hover, modals)
- **GSAP + ScrollTrigger** — hero section ONLY (pinned scroll sequence)
- **next/font/google** — Cormorant Garamond, Cinzel, Jost (loaded in layout.tsx)
- **next/image** — every image, no exceptions, no bare `<img>` tags ever
- **Formspree** — contact and enquiry forms (placeholder action URL in code)

**Do not add:** analytics, cookie banners, CMS, auth, database, chat widgets, lazy-loaded ad scripts.

---

## Brand Tokens

```css
/* In globals.css as :root CSS variables */
--obsidian:   #1A1A18;   /* primary page background */
--gold:       #C9A96E;   /* primary accent — borders, CTAs, hover states */
--cream:      #FDFAF5;   /* primary text, headings on dark backgrounds */
--card:       #1C1C1C;   /* product card backgrounds */
--card-deep:  #111110;   /* Exclusive section background, footer */
--muted:      #6B6B6B;   /* secondary text, labels, captions */
```

In Tailwind, these are extended as:
```
bg-obsidian, text-cream, border-gold, bg-card, bg-card-deep, text-muted
```

---

## Typography

```
font-cormorant  Cormorant Garamond — All headings, hero display text, scene copy
                Use: weights 300 (light), 400 (regular), 600 (semibold), italic variants
                Never use for body paragraphs or nav links

font-cinzel     Cinzel — Brand wordmark, section labels (ALL CAPS eyebrows), collection titles
                Use: weight 400 only
                Never use for body text

font-jost       Jost — All body copy, nav links, captions, button text, card metadata
                Use: weights 300, 400, 500
                Default body font
```

All three loaded in `app/layout.tsx` via next/font/google. Referenced in tailwind.config.ts.

---

## File & Folder Structure

```
app/
  layout.tsx              ← fonts, metadata, NavBar, Footer, CustomCursor, ScrollProgress
  globals.css             ← CSS vars, scrollbar, selection, base reset, gold focus rings
  page.tsx                ← homepage: HeroSection + CategoryStrip + FeaturedCollections
  sofas/page.tsx          ← Sofas collection grid (filterable)
  premium-sofas/page.tsx  ← Premium Sofas collection grid (filterable)
  beds/page.tsx           ← Bedroom collection grid
  exclusive/page.tsx      ← Exclusive Edit (darker bg, special treatment)
  chaise/page.tsx         ← Chaise Lounges collection grid (filterable)
  about/page.tsx          ← Brand story, heritage, stats
  contact/page.tsx        ← Showroom info, enquiry form

components/
  ui/
    CustomCursor.tsx       ← 'use client', gold dot + ring follower, hide on touch devices
    ScrollProgress.tsx     ← 'use client', gold 1px top progress bar
    WhatsAppFloat.tsx      ← Fixed bottom-right WhatsApp button (always visible)
  layout/
    NavBar.tsx             ← 'use client', transparent → dark on scroll, mobile hamburger
    Footer.tsx             ← Three-column, brand info, links, contact
  hero/
    HeroSection.tsx        ← 'use client', dynamic import ONLY (ssr: false). GSAP scroll.
  catalogue/
    ProductCard.tsx        ← next/image, hover reveal, EnquiryModal trigger
    ProductGrid.tsx        ← Filterable grid (filter buttons + card grid)
    EnquiryModal.tsx       ← 'use client', Framer Motion AnimatePresence, Formspree
  Note: Section content is inline in page files, not extracted components.

data/
  products.ts             ← ALL product arrays. URL-encoded filenames. See pattern below.
  categories.ts           ← Category definitions with slugs and display names
```

---

## Image Assets

### Hero Images (in `/public/hero/`)
Six real photographs of Scott showroom / styled interiors:
```
hero-exterior.jpg    ← mansion/building exterior
hero-doors.jpg       ← grand entrance doors
hero-living.jpeg     ← living room with fireplace
hero-pool.jpg        ← outdoor/pool area
hero-bedroom.jpeg    ← master bedroom
hero-dining.jpeg     ← dining room
```

### Product Images
```
/public/products/sofa-bed/        ← 44 files: "SOFA AND BED SCOTT NEW_page-00XX.jpg"
/public/products/sofa-exclusive/  ← 29 files: "Scott exclusive_page-00XX.jpg"
```

### CRITICAL: Filenames Have Spaces
Always URL-encode filenames in data/products.ts. next/image will 404 on spaces.

```typescript
// ✅ Correct
const filename = 'SOFA AND BED SCOTT NEW_page-0001.jpg'
const path = `/products/sofa-bed/${encodeURIComponent(filename)}`

// ❌ Wrong — will 404
const path = `/products/sofa-bed/SOFA AND BED SCOTT NEW_page-0001.jpg`
```

### Extracted Clean Product Images (when available)
As Tanya extracts clean images from PDF catalogs, they go in:
```
/public/products/clean/           ← logo-removed, background-standardized images
                                     Named: product-slug-colorway.webp
                                     e.g.: mylo-chair-sage-green.webp
                                          arcadia-sofa-taupe.webp
```

---

## Product Data Shape

```typescript
interface Product {
  id: string
  name: string
  category: 'sofa' | 'chair' | 'bed' | 'exclusive'
  filename: string        // raw filename with spaces preserved
  path: string            // URL-encoded, ready for next/image src
  alt: string
  featured?: boolean      // shows in homepage Featured section
  isNew?: boolean         // shows "New" badge on card
}

interface Category {
  slug: string
  label: string           // display name e.g. "Sofas & Sectionals"
  description: string
  heroImage?: string      // optional category hero image path
}
```

No prices anywhere in the data shape. No prices in components. No prices in comments.

---

## Product Catalogue (from catalogs as of July 2025)

### Sofas (sofa-bed catalog, pages ~1–44)
- Arcadia L-Shape — Italian leather, taupe, adjustable headrest, 5-seater
- Eclipse Straight Sofa — Italian leather, grey, movable headrest, multiple compositions
- Noir L-Shape — Full-grain leather, matt black metal legs, slim armrests
- Caramel Sectional — Italian leather, caramel/cognac colourway, L-shape
- Chesterfield Cream — Deep button-tufted, cream velvet, rolled arms, wooden legs
- Majestic Chesterfield — Lavender/slate tufted velvet, full seat
- Windsor Velvet — Navy blue velvet, channel-back, gold base rail and legs
- Slate Channel Sofa — Grey velvet, vertical channels, brass legs
- Ivory Bouclé — White/cream channel-back sofa, Scandinavian influence
- Seraph Curved — Organic banana-form bouclé, charcoal grey
- Eden Modular — Cream bouclé, rounded individual modules + ottoman
- Palazzo Corner — Green bouclé, ultra-deep, corner sectional

### Chairs (both catalogs)
- Mylo Accent Chair — Sage green bouclé, gold ring arms, signature piece
- Drift Lounge Recliner — Cognac/tan leather, platform base, digital control strip
- Atlas Lounge Pair — Tan leather, adjustable backrest + headrest, platform plinth
- Amethyst Tub Chair — Purple velvet, tufted back, curved barrel form, gold legs
- Noir Tub Chair — Dark grey velvet, ring-back detail, sculptural form

### Beds (sofa-bed catalog)
- Haven Wing Bed — Sage/mint fabric, channel-tufted wingback headboard, platform
- Sovereign Platform — Light grey fabric, deep geometric panel headboard
- [Additional beds visible in catalog pages — extract full list during audit]

### Exclusive (Scott_exclusive catalog, pages ~1–29)
- Mylo Luxury Accent Chair — Sage green bouclé, gold ring arms (hero exclusive piece)
- All pieces in the exclusive catalog are treated as premium tier

---

## Hero Scroll Architecture

GSAP ScrollTrigger, 600vh pinned container. Inner div sticky at top:0, height:100vh.

```
Scene 1 — Exterior:      opacity fade in. Text: "SCOTT" + "Innovation that Inspires"
Scene 2 — Doors:         two panel divs slide apart via translateX, revealing Scene 3
Scene 3 — Living room:   staggered word reveal. Text: "Crafted / for / Permanence"
Scene 4 — Pool:          right-aligned text, Ken Burns scale 100→105%. Text: tagline
Scene 5 — Bedroom:       centered text. Text: "The Sanctuary Collection"
Scene 6 — Dining:        full tagline + "Visit the Showroom" CTA button (gold)
```

### SSR-Safe GSAP Pattern
```typescript
// In HeroSection.tsx:
'use client'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

// In app/page.tsx — MUST be dynamic, ssr: false:
const HeroSection = dynamic(
  () => import('@/components/hero/HeroSection'),
  { ssr: false }
)
```

---

## Animation System

### What uses what:
- **GSAP ScrollTrigger** → Hero section only
- **Framer Motion** → Everything else: page transitions, card hovers, modal open/close, section reveals, category strip

### Standard Framer Motion patterns:
```typescript
// Section reveal (use on every major section):
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
  viewport={{ once: true, margin: '-80px' }}
>

// Card hover:
<motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3 }}>

// Gold shimmer on hover (CSS, not JS):
// Use: hover:border-gold/60 transition-colors duration-500
```

---

## Category Pages Structure

Each category page (`/sofas`, `/chairs`, `/beds`, `/exclusive`) follows this structure:

```
1. Category hero — full-bleed image + category name overlaid
2. Filter strip — "All | [sub-filters specific to category]"
3. Product grid — 3 columns desktop, 2 tablet, 1 mobile
4. Each card: image fills card → hover reveals name + "Enquire" button
5. No prices anywhere on any card
```

---

## Enquiry Flow

Single path: **EnquiryModal** — triggered from every "Enquire" button sitewide.

```typescript
// EnquiryModal receives the product context:
interface EnquiryModalProps {
  isOpen: boolean
  onClose: () => void
  productName?: string   // pre-fills the message
}

// Form fields: Name, Phone, Email, Product interest (pre-filled), Message
// Action: Formspree endpoint (placeholder until client confirms)
// On submit: show success state inside modal, don't navigate away
```

---

## Component Rules (non-negotiable)

1. Every image uses `next/image` — never bare `<img>` tags
2. `'use client'` only when genuinely needed: scroll listeners, GSAP, Framer hooks, event handlers, browser APIs
3. No prices anywhere — not in components, data, comments, or alt text
4. One primary CTA per page viewport (usually "Enquire" or "Visit Showroom")
5. Mobile-first Tailwind: base classes for mobile, `md:` and `lg:` for larger screens
6. `CustomCursor` hides on touch: `if (navigator.maxTouchPoints > 0) return null`
7. EnquiryModal is the only enquiry path — no separate enquiry pages
8. WhatsApp float button is always visible on all pages

---

## Styling Rules

```css
/* Scrollbar — in globals.css */
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: #1A1A18; }
::-webkit-scrollbar-thumb { background: #C9A96E; border-radius: 3px; }

/* Text selection */
::selection { background: #C9A96E; color: #1A1A18; }

/* Focus ring — replace browser default */
:focus-visible { outline: 1px solid #C9A96E; outline-offset: 2px; }

/* Card hover shadow */
.product-card:hover { box-shadow: 0 0 40px rgba(201, 169, 110, 0.12); }

/* Standard transitions */
/* Default: transition-all duration-500 */
/* Nav background change: duration-700 */
/* Card reveals: duration-300 */
```

---

## Known Risks & Solutions

| Risk | Solution |
|------|----------|
| GSAP SSR crash | `dynamic(() => import(...), { ssr: false })` on HeroSection — mandatory |
| Spaces in filenames → 404 | `encodeURIComponent()` in data/products.ts — always |
| Large exclusive images slow load | `quality={75}` + correct `sizes` prop on every next/image |
| Custom cursor janky on mobile | Return null when `navigator.maxTouchPoints > 0` |
| ScrollTrigger stale on Next.js route change | `ScrollTrigger.refresh()` in useEffect cleanup |
| Framer Motion + SSR mismatch | Mark any component using Framer hooks as 'use client' |

---

## Copy Voice

All text in the UI should sound like **a luxury Italian furniture brand** — not a marketplace. Apply these rules:

- Headings: elevated, spare, slightly poetic. "The Architecture of Rest." not "Bedroom Furniture"
- Descriptions: material-focused, not features-focused. "Hand-stitched saddle leather" not "Durable material"
- CTAs: dignified. "Enquire Now" not "Buy Now". "Visit the Showroom" not "Find us"
- Labels: clean Cinzel caps. "THE SCOTT COLLECTION" not "Our Products"
- No exclamation marks anywhere. No discount language. No urgency language.

---

## Brand Story Copy (use verbatim in About page)

Tagline: "Innovation that Inspires, Quality that Endures"

Stats: 25+ years of craft | 1,200+ homes furnished | 80+ designs in catalogue

Brand para: "Founded in the heart of Bhopal, Scott has spent over two decades perfecting the relationship between craft and comfort. Every piece begins as a conversation — about how you live, what you value, and how a room should feel at the end of the day. Our furniture carries the weight of honest materials, precise construction, and the belief that the objects you live with should be worth living with."

---

## Session Checklist

Before reporting a session complete:
- [ ] `npm run dev` starts without errors
- [ ] No TypeScript errors in terminal
- [ ] No red console errors in browser
- [ ] Mobile viewport tested at 375px width
- [ ] Tested the specific page/component built this session

Final session only:
- [ ] `npm run build` completes clean
- [ ] `npm run start` serves production build without errors
- [ ] All six hero images display correctly
- [ ] EnquiryModal opens and closes on mobile
- [ ] WhatsApp float visible on all pages

---

## What NOT to Build

Do not build these even if asked in the moment:
- Cart or checkout of any kind
- User accounts or authentication
- Price display or pricing tiers
- CMS integration (Sanity, Contentful, Strapi)
- Search functionality
- Cookie consent banner
- Wishlist with persistence (heart icon is visual only)
- Live chat widget (WhatsApp CTA is enough)
- Blog or news section
- Stock/availability indicators
- components/sections/ extraction (content is inline in pages — this is fine)
