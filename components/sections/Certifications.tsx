'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const certs = [
  {
    code: 'BIFMA',
    label: 'Furniture Assoc.',
    title: 'Business & Institutional Furniture Manufacturers Association',
    description: 'The gold standard for commercial furniture — covering safety, durability, sustainability, and performance across all product categories. BIFMA certification means every Scott piece meets the highest institutional-grade requirements.',
    year: 'Est. 1973',
  },
  {
    code: 'ISO 9001',
    label: 'Quality Mgmt',
    title: 'Quality Management Systems',
    description: 'ISO 9001 certification confirms that Scott operates a rigorous quality management system across all manufacturing processes — from material sourcing through to final delivery. Consistent quality, every time.',
    year: 'Certified',
  },
  {
    code: 'ISO 14001',
    label: 'Environment',
    title: 'Environmental Management',
    description: 'Our ISO 14001 certification reflects a genuine commitment to reducing environmental impact — responsible sourcing, waste reduction, and sustainable manufacturing practices throughout our operations.',
    year: 'Certified',
  },
  {
    code: 'RoHS',
    label: 'Safe Materials',
    title: 'Restriction of Hazardous Substances',
    description: 'RoHS compliance ensures that no hazardous materials are used in the production of Scott furniture — protecting both the people who make our pieces and the families who live with them.',
    year: 'Compliant',
  },
  {
    code: 'GreenGuard',
    label: 'Air Quality',
    title: 'GreenGuard Indoor Air Quality Certified',
    description: 'GreenGuard certification means Scott furniture meets some of the world\'s most rigorous chemical emission standards — contributing to healthier indoor air quality in every home we furnish.',
    year: 'Certified',
  },
]

export default function Certifications() {
  const [active, setActive] = useState(0)

  return (
    <section className="py-20 md:py-28 px-4 md:px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-jost text-[10px] tracking-[0.45em] uppercase
            text-[rgba(10,16,12,0.55)] mb-4">
            Quality Assured
          </p>
          <h2 className="font-cormorant text-5xl md:text-6xl font-light
            text-[#0A100C]">
            Built to international standards
          </h2>
        </div>

        {/* Tab strip — on gold background */}
        <div className="flex border-b border-[rgba(10,16,12,0.15)] mb-12
          overflow-x-auto scrollbar-hide">
          {certs.map((cert, i) => (
            <button
              key={cert.code}
              onClick={() => setActive(i)}
              className={`flex-1 min-w-[100px] pb-4 pt-2 px-3 text-center
                border-b-2 transition-all duration-300
                ${active === i
                  ? 'border-[#0A100C]'
                  : 'border-transparent hover:border-[rgba(10,16,12,0.2)]'
                }`}
            >
              <span className={`font-cinzel text-[13px] tracking-wide
                block mb-1.5 transition-colors duration-300
                ${active === i
                  ? 'text-[#0A100C]'
                  : 'text-[rgba(10,16,12,0.45)]'
                }`}>
                {cert.code}
              </span>
              <span className="font-jost text-[9px]
                text-[rgba(10,16,12,0.38)] tracking-wide block">
                {cert.label}
              </span>
            </button>
          ))}
        </div>

        {/* Certificate card — dark green rectangle, centred on gold */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto max-w-3xl"
          >
            {/* The certificate card — dark forest green */}
            <div className="bg-[#1A2820] px-10 md:px-16 py-12 md:py-14
              relative overflow-hidden">

              {/* Corner accents — gold */}
              <div className="absolute top-0 left-0 w-8 h-px bg-[#C8A96E]" />
              <div className="absolute top-0 left-0 w-px h-8 bg-[#C8A96E]" />
              <div className="absolute top-0 right-0 w-8 h-px bg-[#C8A96E]" />
              <div className="absolute top-0 right-0 w-px h-8 bg-[#C8A96E]" />
              <div className="absolute bottom-0 left-0 w-8 h-px bg-[#C8A96E]" />
              <div className="absolute bottom-0 left-0 w-px h-8 bg-[#C8A96E]" />
              <div className="absolute bottom-0 right-0 w-8 h-px bg-[#C8A96E]" />
              <div className="absolute bottom-0 right-0 w-px h-8 bg-[#C8A96E]" />

              {/* Certificate content */}
              <div className="text-center">

                {/* Cert code — large gold */}
                <p className="font-cinzel text-[#C8A96E] text-[13px]
                  tracking-[0.5em] uppercase mb-6">
                  {certs[active].code} · {certs[active].year}
                </p>

                {/* Thin gold divider */}
                <div className="w-12 h-px bg-[#C8A96E]/40 mx-auto mb-8" />

                {/* Certificate title — Cormorant, cream */}
                <h3 className="font-cormorant text-3xl md:text-4xl
                  font-light text-[#F0EAE0] mb-6 leading-tight">
                  {certs[active].title}
                </h3>

                {/* Description — muted cream */}
                <p className="font-jost text-[12px]
                  text-[rgba(240,234,224,0.6)] leading-relaxed
                  max-w-xl mx-auto">
                  {certs[active].description}
                </p>

                {/* Bottom divider */}
                <div className="w-12 h-px bg-[#C8A96E]/40 mx-auto mt-8" />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* German precision statement — below card, on gold */}
        <div className="mt-10 text-center">
          <p className="font-cormorant text-xl md:text-2xl font-light italic
            text-[rgba(10,16,12,0.45)] max-w-2xl mx-auto leading-relaxed">
            &ldquo;One of only five manufacturers worldwide powered by
            German precision engineering systems.&rdquo;
          </p>
        </div>

      </div>
    </section>
  )
}
