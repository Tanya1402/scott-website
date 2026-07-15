'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const certs = [
  {
    code: 'BIFMA',
    label: 'Furniture Assoc.',
    title: 'Business & Institutional Furniture Manufacturers Association',
    description: 'The gold standard for commercial furniture — covering safety, durability, sustainability, and performance across all product categories. BIFMA certification means every Scott piece meets the highest institutional-grade requirements.',
  },
  {
    code: 'ISO 9001',
    label: 'Quality Mgmt',
    title: 'Quality Management Systems',
    description: 'ISO 9001 certification confirms that Scott operates a rigorous quality management system across all manufacturing processes — from material sourcing through to final delivery. Consistent quality, every time.',
  },
  {
    code: 'ISO 14001',
    label: 'Environment',
    title: 'Environmental Management',
    description: 'Our ISO 14001 certification reflects a genuine commitment to reducing environmental impact across our operations — responsible sourcing, waste reduction, and sustainable manufacturing practices.',
  },
  {
    code: 'RoHS',
    label: 'Safe Materials',
    title: 'Restriction of Hazardous Substances',
    description: 'RoHS compliance ensures that no hazardous materials are used in the production of Scott furniture — protecting both the people who make our pieces and the families who live with them.',
  },
  {
    code: 'GreenGuard',
    label: 'Air Quality',
    title: 'GreenGuard Indoor Air Quality Certified',
    description: 'GreenGuard certification means Scott furniture meets some of the world\'s most rigorous chemical emission standards — contributing to healthier indoor air quality in your home.',
  },
]

export default function Certifications() {
  const [active, setActive] = useState(0)

  return (
    <section className="bg-[#0A0806] py-20 md:py-28 px-6 md:px-10">
      <div className="max-w-4xl mx-auto">
        <p className="font-jost text-[10px] tracking-[0.4em] text-gold/50
          uppercase text-center mb-3">Quality Assured</p>
        <h2 className="font-cinzel text-sm tracking-[0.2em] uppercase
          font-light text-cream text-center mb-4">
          Built to international standards
        </h2>
        <p className="font-jost text-sm text-muted text-center mb-14
          max-w-md mx-auto leading-relaxed">
          Every Scott piece is certified across quality, environmental,
          and safety standards recognised worldwide.
        </p>

        {/* Tab strip */}
        <div className="flex border-b border-gold/15 mb-12 overflow-x-auto
          scrollbar-hide">
          {certs.map((cert, i) => (
            <button key={cert.code}
              onClick={() => setActive(i)}
              className={`flex-1 min-w-[100px] pb-4 pt-2 px-3 text-center
                border-b-2 transition-all duration-300
                ${active === i
                  ? 'border-gold'
                  : 'border-transparent hover:border-gold/30'
                }`}>
              <span className={`font-cinzel text-sm tracking-wider block
                mb-1.5 transition-colors duration-300
                ${active === i ? 'text-gold' : 'text-muted'}`}>
                {cert.code}
              </span>
              <span className="font-jost text-[9px] text-muted/60
                tracking-wide block">
                {cert.label}
              </span>
            </button>
          ))}
        </div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-2xl mx-auto"
          >
            <div className="w-14 h-14 border border-gold/30 rounded-full
              flex items-center justify-center mx-auto mb-6">
              <span className="text-gold text-lg">✦</span>
            </div>
            <h3 className="font-cormorant text-2xl md:text-3xl font-light
              text-cream mb-5 leading-tight">
              {certs[active].title}
            </h3>
            <p className="font-jost text-sm text-muted leading-relaxed">
              {certs[active].description}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* German precision statement */}
        <div className="mt-16 border border-gold/10 p-8 md:p-10
          text-center bg-[#0E0C09]/50">
          <p className="font-cormorant text-xl md:text-2xl font-light
            text-cream/50 italic leading-relaxed">
            "One of only five manufacturers worldwide powered by
            German precision engineering systems."
          </p>
        </div>
      </div>
    </section>
  )
}
