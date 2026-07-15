'use client'

import Link from 'next/link'
import dynamic from 'next/dynamic'
import { motion, type Variants } from 'framer-motion'
import categories from '@/data/categories'
import TrustedBy from '@/components/sections/TrustedBy'
import Certifications from '@/components/sections/Certifications'
import CategoryCard from '@/components/home/CategoryCard'

const HeroSection = dynamic(() => import('@/components/hero/HeroSection'), {
  ssr: false,
  loading: () => <div className="h-screen bg-obsidian" />,
})

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } },
}
const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}
const viewport = { once: true, margin: '-60px' }

export default function HomePage() {
  return (
    <main>
      <HeroSection />

      {/* Category grid */}
      <section id="collections" className="bg-obsidian py-16 md:py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: '-60px' }}
          >
            <p className="font-cinzel text-gold text-xs tracking-[0.4em]
              uppercase text-center mb-4">The Collections</p>
            <h2 className="font-cormorant text-3xl md:text-5xl font-light
              text-cream text-center mb-12 md:mb-16">
              Every room. Every surface. Considered.
            </h2>
          </motion.div>

          {/* Top row — 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mb-3 md:mb-4">
            {['premium-sofas', 'chaise', 'exclusive'].map((slug, index) => {
              const cat = categories.find((c) => c.slug === slug)
              if (!cat) return null
              return (
                <CategoryCard key={cat.slug} cat={cat} index={index} prestige={cat.isPrestige} />
              )
            })}
          </div>

          {/* Bottom row — 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
            {['tables', 'beds', 'sofas'].map((slug, index) => {
              const cat = categories.find((c) => c.slug === slug)
              if (!cat) return null
              return (
                <CategoryCard key={cat.slug} cat={cat} index={index} />
              )
            })}
          </div>
        </div>
      </section>

      <TrustedBy />

      <Certifications />

      {/* Client testimonials */}
      <section className="bg-[#1A1208] py-16 md:py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={viewport}
          >
            <p className="font-cinzel text-gold text-xs tracking-[0.4em] uppercase text-center mb-4">
              Client Stories
            </p>
            <h2 className="font-cormorant text-4xl font-light text-cream text-center mb-16">
              What our patrons say
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gold/10"
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          >
            {[
              {
                quote:
                  "The Arcadia sofa has completely transformed our drawing room. Every guest asks about it. Scott's craftsmanship is unlike anything we had seen in Bhopal or Mumbai.",
                author: 'Priya & Vikram Malhotra',
                location: 'Arera Colony, Bhopal',
              },
              {
                quote:
                  'We furnished our entire bungalow through Scott — from the foyer to the master bedroom. The attention to detail and quality of materials exceeded our expectations completely.',
                author: 'Rajiv Sharma',
                location: 'Kolar Road, Bhopal',
              },
              {
                quote:
                  'I had been searching for a truly luxurious sofa set for two years. When I visited Scott’s showroom, I knew I had found it. Perfect finish, no compromises.',
                author: 'Dr. Meena Agrawal',
                location: 'E-7, Bhopal',
              },
            ].map(({ quote, author, location }) => (
              <motion.div
                key={author}
                className="bg-[#1A1208] p-10 border-t-2 border-gold/20"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
                }}
              >
                <p className="text-gold text-2xl mb-6 font-cormorant leading-none">❝</p>
                <p className="font-cormorant text-lg font-light text-cream italic leading-relaxed mb-8">
                  {quote}
                </p>
                <p className="font-cinzel text-xs tracking-widest text-cream uppercase">
                  {author}
                </p>
                <p className="font-jost text-xs text-muted mt-1">{location}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Brand statement */}
      <section className="bg-card py-32 px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-cinzel text-gold text-xs tracking-[0.4em] uppercase mb-8">
            Est. Bhopal
          </p>
          <motion.blockquote
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="font-cormorant text-3xl md:text-4xl font-light text-cream leading-relaxed italic"
          >
            &quot;Furniture is not purchased. It is chosen — and it remains, long after the moment
            of choosing.&quot;
          </motion.blockquote>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="mt-16 grid grid-cols-3 gap-px border-t border-gold/20 pt-16"
          >
            {[
              ['25+', 'Years of craft'],
              ['1,200+', 'Homes furnished'],
              ['80+', 'Designs'],
            ].map(([num, label]) => (
              <motion.div key={label} variants={fadeUp} className="text-center p-6 md:p-10">
                <p className="font-cormorant text-4xl text-gold">{num}</p>
                <p className="font-jost text-xs text-muted tracking-widest uppercase mt-2">
                  {label}
                </p>
              </motion.div>
            ))}
          </motion.div>
          <div className="mt-12">
            <Link
              href="/about"
              className="font-cinzel text-xs tracking-widest uppercase text-cream border-b border-gold/40 pb-1 hover:text-gold hover:border-gold transition-colors duration-300"
            >
              Our story →
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
