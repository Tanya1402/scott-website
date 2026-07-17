'use client'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import Image from 'next/image'
import { motion, type Variants } from 'framer-motion'
import TrustedBy from '@/components/sections/TrustedBy'
import Certifications from '@/components/sections/Certifications'

const HeroSection = dynamic(
  () => import('@/components/hero/HeroSection'),
  { ssr: false, loading: () => <div className="h-screen bg-[#0A100C]" /> }
)

const collections = [
  {
    slug: 'indoor',
    label: 'Indoor',
    sub: 'Sofas · Chairs · Tables · Beds · Accessories',
    image: '/products/indoor/sofas/premium_sofa/palazzocorner.jpeg',
    href: '/indoor',
    isPrestige: false,
  },
  {
    slug: 'outdoor',
    label: 'Outdoor',
    sub: 'Lounge · Dining Chairs',
    image: '/products/outdoor/lounge/img15.jpg',
    href: '/outdoor',
    isPrestige: false,
  },
  {
    slug: 'exclusive',
    label: 'Exclusive Edit',
    sub: 'Limited. Unrepeatable.',
    image: '/products/exclusive/img86.jpg',
    href: '/exclusive',
    isPrestige: true,
  },
]

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1, y: 0,
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
  },
}

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
}

export default function HomePage() {
  return (
    <main>

      {/* ── 01 HERO: #0A100C — darkest forest ── */}
      <HeroSection />

      {/* ── 02 TICKER: #1A2820 — gold text on mid-forest ── */}
      <div className="bg-[#1A2820] border-y border-[rgba(200,169,110,0.12)]
        py-3 overflow-hidden">
        <div className="flex gap-10 animate-[ticker_30s_linear_infinite]
          whitespace-nowrap">
          {[...Array(3)].map((_, rep) => (
            <span key={rep} className="flex gap-10 flex-shrink-0">
              {['Sofas', 'Chairs', 'Tables', 'Beds', 'Outdoor Lounge',
                'Exclusive Edit', 'India', 'Est. 1991',
                'German Precision', 'BIFMA Certified'].map((item, i) => (
                <span key={i} className="flex items-center gap-10">
                  <span className="font-jost text-[9px] tracking-[0.4em]
                    uppercase text-[#C8A96E]/70">{item}</span>
                  <span className="text-[#C8A96E]/50 text-[8px]">◆</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ── 03 COLLECTIONS: #111A14 — mid forest ── */}
      <section className="bg-[#111A14] py-16 md:py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="mb-10 md:mb-14"
          >
            <motion.p variants={fadeUp}
              className="font-cinzel text-[9px] tracking-[0.45em] uppercase
                text-[#C8A96E] text-center mb-3">
              The Collections
            </motion.p>
            <motion.h2 variants={fadeUp}
              className="font-cormorant text-5xl md:text-6xl font-light
                text-cream text-center">
              Every room. Every surface.
            </motion.h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-40px' }}
            className="grid grid-cols-3 gap-[1px] bg-[rgba(200,169,110,0.08)]"
          >
            {collections.map((cat) => (
              <motion.div key={cat.slug} variants={fadeUp}>
                <Link href={cat.href}
                  className="group relative block overflow-hidden aspect-[3/4]
                    border border-[rgba(200,169,110,0.08)]
                    hover:border-[rgba(200,169,110,0.4)]
                    transition-all duration-500">
                  <Image src={cat.image} alt={cat.label} fill
                    className="object-cover transition-transform duration-700
                      group-hover:scale-[1.05]"
                    sizes="(max-width: 767px) 34vw, 33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t
                    from-black/85 via-black/30 to-transparent" />
                  {cat.isPrestige && (
                    <div className="absolute top-2 left-2 md:top-5 md:left-5
                      border border-[rgba(200,169,110,0.6)] px-1.5 py-0.5 md:px-3 md:py-1.5
                      bg-[#0A100C]/80">
                      <span className="font-cinzel text-[#C8A96E] text-[6px] md:text-[10px]
                        tracking-[0.15em] md:tracking-[0.3em] uppercase whitespace-nowrap">
                        <span className="md:hidden">★</span>
                        <span className="hidden md:inline">★ Exclusive</span>
                      </span>
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0
                    p-2.5 sm:p-4 md:p-7">
                    <p className="font-cormorant text-[13px] xs:text-[15px] sm:text-[20px] md:text-[34px]
                      font-light text-[#F0EAE0] mb-0.5 md:mb-2 leading-tight md:leading-none
                      group-hover:text-[#C8A96E] transition-colors duration-400">
                      {cat.label}
                    </p>
                    <p className="hidden md:block font-jost text-[11px] tracking-[0.06em]
                      text-[rgba(240,234,224,0.6)] mb-3">
                      {cat.sub}
                    </p>
                    <div className="hidden md:flex items-center gap-2">
                      <div className="h-px bg-[#C8A96E] w-5
                        group-hover:w-10 transition-all duration-500" />
                      <span className="font-cinzel text-[9px] tracking-[0.25em]
                        uppercase text-[#C8A96E] opacity-0
                        group-hover:opacity-100 transition-all duration-400">
                        Explore
                      </span>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 h-[2px] bg-[#C8A96E]
                    w-0 group-hover:w-full transition-all duration-700" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 04 FEATURED EDITORIAL: #8B6A3A — warm bronze ── */}
      <section className="bg-[#8B6A3A]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 pt-14 pb-4">
          <p className="font-cinzel text-[10px] tracking-[0.45em] uppercase
            text-[rgba(240,234,224,0.7)] mb-3">Featured Pieces</p>
          <h2 className="font-cormorant text-5xl md:text-6xl font-light
            text-[#F0EAE0]">From the current collection</h2>
        </div>

        {/* Row 1: image left, text right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px]
          bg-[rgba(10,16,12,0.15)] mt-1">
          <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[320px]
            overflow-hidden bg-[#111A14]">
            <Image src="/products/indoor/sofas/premium_sofa/img144.jpg"
              alt="Prestige Sofa" fill className="object-cover opacity-90"
              sizes="(max-width:768px) 100vw, 50vw" />
            <div className="absolute inset-0 bg-gradient-to-r
              from-transparent to-[rgba(139,106,58,0.3)]" />
          </div>
          <div className="bg-[#8B6A3A] p-10 md:p-14 flex flex-col justify-center">
            <p className="font-cinzel text-[10px] tracking-[0.4em] uppercase
              text-[rgba(240,234,224,0.7)] mb-4">Indoor · Sofas · Premium</p>
            <h3 className="font-cormorant text-4xl md:text-5xl font-light
              text-[#F0EAE0] mb-4 leading-tight">
              Prestige Sectional
            </h3>
            <p className="font-jost text-[12px] text-[rgba(240,234,224,0.75)]
              leading-relaxed mb-8 max-w-sm">
              Premium grade upholstery, hand-finished in the Scott workshop.
              Designed for the room that makes a statement before you do.
            </p>
            <Link href="/indoor/sofas"
              className="inline-block font-cinzel text-[9px] tracking-widest
                uppercase border border-[rgba(240,234,224,0.3)] text-[#F0EAE0]
                px-7 py-3 hover:bg-[#0A100C] hover:border-[#0A100C]
                transition-all duration-400 w-fit">
              View Sofas
            </Link>
          </div>
        </div>

        {/* Row 2: text left, image right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px]
          bg-[rgba(10,16,12,0.15)] mt-[1px]">
          <div className="bg-[#8B6A3A] p-10 md:p-14 flex flex-col
            justify-center order-2 md:order-1">
            <p className="font-cinzel text-[10px] tracking-[0.4em] uppercase
              text-[rgba(240,234,224,0.7)] mb-4">Indoor · Beds</p>
            <h3 className="font-cormorant text-4xl md:text-5xl font-light
              text-[#F0EAE0] mb-4 leading-tight">
              Haven Wing Bed
            </h3>
            <p className="font-jost text-[12px] text-[rgba(240,234,224,0.75)]
              leading-relaxed mb-8 max-w-sm">
              Channel-tufted wingback headboard in sage fabric.
              The sanctuary your master bedroom has been waiting for.
              Hover to see it come alive.
            </p>
            <Link href="/indoor/beds"
              className="inline-block font-cinzel text-[9px] tracking-widest
                uppercase border border-[rgba(240,234,224,0.3)] text-[#F0EAE0]
                px-7 py-3 hover:bg-[#0A100C] hover:border-[#0A100C]
                transition-all duration-400 w-fit">
              View Beds
            </Link>
          </div>
          <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[320px]
            overflow-hidden bg-[#111A14] order-1 md:order-2">
            <Image src="/products/indoor/beds/34.jpg"
              alt="Haven Wing Bed" fill className="object-cover opacity-90"
              sizes="(max-width:768px) 100vw, 50vw" />
            <div className="absolute inset-0 bg-gradient-to-l
              from-transparent to-[rgba(139,106,58,0.3)]" />
          </div>
        </div>

        {/* Row 3: image left, text right — outdoor */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px]
          bg-[rgba(10,16,12,0.15)] mt-[1px]">
          <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[320px]
            overflow-hidden bg-[#111A14]">
            <Image src="/products/outdoor/lounge/img15.jpg"
              alt="Outdoor Lounge" fill className="object-cover opacity-90"
              sizes="(max-width:768px) 100vw, 50vw" />
            <div className="absolute inset-0 bg-gradient-to-r
              from-transparent to-[rgba(139,106,58,0.3)]" />
          </div>
          <div className="bg-[#8B6A3A] p-10 md:p-14 flex flex-col justify-center">
            <p className="font-cinzel text-[10px] tracking-[0.4em] uppercase
              text-[rgba(240,234,224,0.7)] mb-4">Outdoor · Lounge</p>
            <h3 className="font-cormorant text-4xl md:text-5xl font-light
              text-[#F0EAE0] mb-4 leading-tight">
              Outdoor Collection
            </h3>
            <p className="font-jost text-[12px] text-[rgba(240,234,224,0.75)]
              leading-relaxed mb-8 max-w-sm">
              Weather-resistant lounge and dining furniture for open living.
              Teak, aluminium and rope — built for the Indian climate.
            </p>
            <Link href="/outdoor"
              className="inline-block font-cinzel text-[9px] tracking-widest
                uppercase border border-[rgba(240,234,224,0.3)] text-[#F0EAE0]
                px-7 py-3 hover:bg-[#0A100C] hover:border-[#0A100C]
                transition-all duration-400 w-fit">
              View Outdoor
            </Link>
          </div>
        </div>
      </section>

      {/* ── 05 TRUSTED BY: #0A100C — darkest, max contrast for photos ── */}
      <div className="bg-[#0A100C]">
        <TrustedBy />
      </div>

      {/* ── 06 CERTIFICATIONS: #C8A96E — gold background, dark text ── */}
      <div className="bg-[#C8A96E]">
        <Certifications />
      </div>

      {/* ── 07 TESTIMONIALS: #1A2820 — mid-forest ── */}
      <section className="bg-[#1A2820] py-16 md:py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: '-60px' }}
            className="text-center mb-12"
          >
            <p className="font-cinzel text-[10px] tracking-[0.45em] uppercase
              text-[#C8A96E] mb-3">Client Stories</p>
            <h2 className="font-cormorant text-5xl md:text-6xl font-light
              text-cream">What our patrons say</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px]
            bg-[rgba(200,169,110,0.08)]">
            {[
              {
                quote: 'The Arcadia sofa has completely transformed our drawing room. Every guest asks about it. Scott\'s craftsmanship is unlike anything we had seen in Mumbai.',
                author: 'Priya & Vikram Malhotra',
                location: 'Arera Colony, India',
              },
              {
                quote: 'We furnished our entire bungalow through Scott — from the foyer to the master bedroom. The attention to detail and quality of materials exceeded our expectations completely.',
                author: 'Rajiv Sharma',
                location: 'Kolar Road, India',
              },
              {
                quote: 'I had been searching for a truly luxurious sofa set for two years. When I visited Scott\'s showroom, I knew I had found it. Perfect finish, no compromises.',
                author: 'Dr. Meena Agrawal',
                location: 'E-7, India',
              },
            ].map(({ quote, author, location }) => (
              <div key={author}
                className="bg-[#111A14] p-8 md:p-10
                  border-t-2 border-gold/20">
                <div className="text-[#C8A96E] text-3xl font-cormorant mb-5">❝</div>
                <p className="font-cormorant text-[16px] font-light italic
                  text-[rgba(240,234,224,0.85)] leading-relaxed mb-7">
                  {quote}
                </p>
                <p className="font-cinzel text-[11px] tracking-widest
                  uppercase text-[#F0EAE0]">{author}</p>
                <p className="font-jost text-[11px] text-[rgba(240,234,224,0.5)] mt-1">
                  {location}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 08 BRAND STORY: #8B6A3A — warm bronze ── */}
      <section className="bg-[#8B6A3A]">

        {/* Split: text left, stats right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px]
          bg-[rgba(10,16,12,0.15)]">
          <div className="bg-[#8B6A3A] px-8 md:px-14 py-14 md:py-20">
            <p className="font-jost text-[10px] tracking-[0.45em] uppercase
              text-[rgba(240,234,224,0.7)] mb-5">Est. 1991 · India</p>
            <h2 className="font-cormorant text-5xl md:text-7xl font-light
              text-[#F0EAE0] leading-[1.05] mb-6">
              Thirty-five years.<br />
              <em className="italic text-[rgba(240,234,224,0.85)]">
                Not one compromise.
              </em>
            </h2>
            <p className="font-jost text-[13px] text-[rgba(240,234,224,0.7)]
              leading-relaxed mb-8 max-w-sm">
              Founded in the heart of India, Scott has spent over three
              decades perfecting the relationship between craft and comfort.
              German precision. Honest materials. Pieces built to last
              generations.
            </p>
            <Link href="/about"
              className="font-cinzel text-[10px] tracking-widest uppercase
                text-[#C8A96E] border-b border-[rgba(200,169,110,0.5)] pb-1
                hover:border-[rgba(240,234,224,0.7)]
                transition-colors duration-300">
              Read our story →
            </Link>
          </div>

          <div className="bg-[#8B6A3A]">
            <div className="grid grid-cols-2 gap-[1px]
              bg-[rgba(10,16,12,0.15)] h-full">
              {[
                { n: '35+', l: 'Years of craft' },
                { n: '1,200+', l: 'Homes furnished' },
                { n: '80+', l: 'Designs' },
                { n: '5', l: 'German systems' },
              ].map(({ n, l }) => (
                <div key={l}
                  className="bg-[#8B6A3A] px-8 py-10 flex flex-col
                    justify-center">
                  <span className="font-cormorant text-5xl font-light
                    text-[#0A100C] mb-2">{n}</span>
                  <span className="font-jost text-[9px] tracking-[0.2em]
                    uppercase text-[rgba(10,16,12,0.65)]">{l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Four pillars */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[1px]
          bg-[rgba(10,16,12,0.15)]">
          {[
            {
              n: '01',
              title: 'German Precision',
              text: 'One of only five manufacturers worldwide with this engineering system.',
            },
            {
              n: '02',
              title: 'Certified Quality',
              text: 'BIFMA · ISO 9001 · ISO 14001 · RoHS · GreenGuard.',
            },
            {
              n: '03',
              title: 'Trusted Institutions',
              text: 'Hyatt · Airport Authority of India · Wipro · Shrewsbury.',
            },
            {
              n: '04',
              title: "India's Finest",
              text: 'Visit our showroom by appointment.',
            },
          ].map(({ n, title, text }) => (
            <div key={n}
              className="bg-[#8B6A3A] px-6 py-8
                hover:bg-[rgba(10,16,12,0.08)]
                transition-colors duration-500">
              <span className="font-jost text-[9px] tracking-[0.2em]
                text-[rgba(10,16,12,0.5)] mb-4 block">{n}</span>
              <p className="font-cormorant text-[19px] text-[#F0EAE0] mb-3">
                {title}
              </p>
              <p className="font-jost text-[11px]
                text-[rgba(240,234,224,0.7)] leading-relaxed">{text}</p>
            </div>
          ))}
        </div>

        {/* Closing quote bar */}
        <div className="px-8 py-10 text-center
          border-t border-[rgba(10,16,12,0.2)]">
          <p className="font-cormorant text-2xl md:text-3xl font-light italic
            text-[rgba(10,16,12,0.6)] max-w-2xl mx-auto leading-relaxed">
            &ldquo;Furniture is not purchased. It is chosen — and it remains,
            long after the moment of choosing.&rdquo;
          </p>
        </div>
      </section>

    </main>
  )
}
