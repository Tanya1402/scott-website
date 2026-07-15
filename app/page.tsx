'use client'

import Image from 'next/image'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { motion, type Variants } from 'framer-motion'
import categories from '@/data/categories'
import { getFeatured } from '@/data/products'
import ProductCard from '@/components/catalogue/ProductCard'

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
  const featured = getFeatured()

  return (
    <main>
      <HeroSection />

      {/* Category grid */}
      <section className="bg-obsidian py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="font-cinzel text-gold text-xs tracking-[0.4em] uppercase text-center mb-4"
          >
            The Collections
          </motion.p>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="font-cormorant text-4xl md:text-5xl font-light text-cream text-center mb-16"
          >
            Every room. Every surface. Considered.
          </motion.h2>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="grid grid-cols-2 md:grid-cols-3 gap-px bg-gold/10"
          >
            {categories.map((cat) => (
              <motion.div key={cat.slug} variants={fadeUp}>
                <Link
                  href={`/${cat.slug}`}
                  className="group relative aspect-[3/4] overflow-hidden bg-obsidian block"
                >
                  <Image
                    src={cat.heroImage}
                    alt={cat.label}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    sizes="(max-width:768px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  {cat.isPrestige && (
                    <div className="absolute top-4 left-4 border border-gold/60 px-3 py-1">
                      <span className="font-cinzel text-gold text-[10px] tracking-widest uppercase">
                        Exclusive
                      </span>
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="font-cinzel text-cream text-sm tracking-widest uppercase group-hover:text-gold transition-colors duration-300">
                      {cat.label}
                    </p>
                    <p className="font-jost text-xs text-muted mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0 transition-transform">
                      Explore →
                    </p>
                  </div>
                  {/* Gold border appears on hover */}
                  <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/40 transition-all duration-500 pointer-events-none" />
                  {/* Gold sweep line appears on hover */}
                  <div className="absolute bottom-0 left-0 h-px bg-gold w-0 group-hover:w-full transition-all duration-700 ease-out" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured products strip */}
      <section className="bg-card py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="font-cinzel text-gold text-xs tracking-[0.4em] uppercase text-center mb-4"
          >
            Featured Pieces
          </motion.p>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="font-cormorant text-4xl font-light text-cream text-center mb-16"
          >
            From the current collection
          </motion.h2>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gold/10"
          >
            {featured.map((p) => (
              <motion.div key={p.id} variants={fadeUp} className="bg-card p-6">
                <ProductCard product={p} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Client testimonials */}
      <section className="bg-card py-24 px-6">
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
                className="bg-card p-10 border-l border-gold/30"
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
      <section className="bg-obsidian py-32 px-6">
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
            className="mt-16 grid grid-cols-3 gap-8 border-t border-gold/20 pt-16"
          >
            {[
              ['25+', 'Years of craft'],
              ['1,200+', 'Homes furnished'],
              ['80+', 'Designs'],
            ].map(([num, label]) => (
              <motion.div key={label} variants={fadeUp} className="text-center">
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
