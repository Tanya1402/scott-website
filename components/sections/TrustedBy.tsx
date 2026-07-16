'use client'
import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const clients = [
  {
    name: 'Hyatt Regency',
    category: 'Luxury Hospitality',
    description: 'Premium guest room and lobby furniture for one of Bhopal\'s landmark hospitality destinations.',
    image: '/projects/hyatt.jpg',
  },
  {
    name: 'Airport Authority of India',
    category: 'Infrastructure',
    description: 'Large-scale seating and lounge furniture for Bhopal airport terminals.',
    image: '/projects/airport.jpg',
  },
  {
    name: 'Shrewsbury School',
    category: 'Education',
    description: 'Bespoke furniture for an international school campus — from classrooms to common rooms.',
    image: '/projects/shrewsbury.jpg',
  },
  {
    name: 'Wipro',
    category: 'Corporate',
    description: 'Executive and collaborative workspace furniture for a leading technology campus.',
    image: '/projects/wipro.jpg',
  },
  {
    name: 'Radisson Hotel',
    category: 'Hospitality',
    description: 'Full suite of hospitality furniture across rooms, lobbies, and dining areas.',
    image: '/projects/radisson.jpg',
  },
  {
    name: 'Holiday Inn',
    category: 'Hospitality',
    description: 'Coordinated guest room and public area furniture for a premier hotel property.',
    image: '/projects/holiday-inn.jpg',
  },
  {
    name: 'Maruti Suzuki',
    category: 'Automotive',
    description: 'Premium office and reception furniture for a flagship corporate facility.',
    image: null,
  },
  {
    name: 'Honda Motors',
    category: 'Automotive',
    description: 'Precision-crafted furniture for executive offices and client-facing spaces.',
    image: null,
  },
  {
    name: 'BHEL',
    category: 'Public Sector',
    description: 'Institutional furniture for one of India\'s largest public sector enterprises.',
    image: null,
  },
]

export default function TrustedBy() {
  const [current, setCurrent] = useState(0)

  function prev() {
    setCurrent(i => (i === 0 ? clients.length - 1 : i - 1))
  }
  function next() {
    setCurrent(i => (i === clients.length - 1 ? 0 : i + 1))
  }

  const client = clients[current]

  return (
    <section className="py-20 md:py-28 px-6 md:px-10
      border-y border-gold/10">
      <div className="max-w-7xl mx-auto">
        <p className="font-jost text-[10px] tracking-[0.4em]
          text-[#C8A96E] uppercase text-center mb-3">Trusted By</p>
        <h2 className="font-cormorant text-5xl md:text-6xl font-light
          text-[#F0EAE0] text-center mb-16">
          In distinguished company
        </h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Left arrow */}
          <button onClick={prev} aria-label="Previous"
            className="absolute left-0 top-1/2 -translate-y-1/2
              -translate-x-14 md:-translate-x-16 z-10
              w-10 h-10 border border-gold/30 bg-card
              flex items-center justify-center text-[#C8A96E]
              hover:border-gold hover:bg-gold/10
              transition-all duration-300">
            ←
          </button>

          {/* Right arrow */}
          <button onClick={next} aria-label="Next"
            className="absolute right-0 top-1/2 -translate-y-1/2
              translate-x-14 md:translate-x-16 z-10
              w-10 h-10 border border-gold/30 bg-card
              flex items-center justify-center text-[#C8A96E]
              hover:border-gold hover:bg-gold/10
              transition-all duration-300">
            →
          </button>

          {/* Card */}
          <div className="border border-gold/15 overflow-hidden relative">
            {/* Gold corner accents */}
            <div className="absolute top-0 left-0 w-6 h-px bg-gold/60 z-10" />
            <div className="absolute top-0 left-0 w-px h-6 bg-gold/60 z-10" />
            <div className="absolute bottom-0 right-0 w-6 h-px bg-gold/60 z-10" />
            <div className="absolute bottom-0 right-0 w-px h-6 bg-gold/60 z-10" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 md:grid-cols-2 min-h-[280px]"
              >
                {/* Image side */}
                <div className="relative min-h-[200px] md:min-h-[280px]
                  bg-[#111A14]">
                  {client.image ? (
                    <>
                      <Image
                        src={client.image}
                        alt={client.name}
                        fill
                        className="object-cover"
                        sizes="(max-width:768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r
                        from-transparent to-[#111A14]/70" />
                    </>
                  ) : (
                    <div className="absolute inset-0 flex items-center
                      justify-center">
                      <span className="font-cinzel text-gold/20 text-sm
                        tracking-widest uppercase">{client.name}</span>
                    </div>
                  )}
                </div>

                {/* Text side */}
                <div className="bg-[#111A14] p-10 md:p-14 flex flex-col
                  justify-center">
                  <p className="font-jost text-[10px] tracking-[0.35em]
                    text-[#C8A96E] uppercase mb-4">
                    {client.category}
                  </p>
                  <h3 className="font-cormorant text-3xl md:text-4xl
                    font-light text-[#F0EAE0] mb-5 leading-tight">
                    {client.name}
                  </h3>
                  <p className="font-jost text-[12px] text-[rgba(240,234,224,0.6)]
                    leading-relaxed">
                    {client.description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots + counter */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {clients.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)}
                aria-label={`Go to ${i + 1}`}
                className={`transition-all duration-300 rounded-full
                  ${i === current
                    ? 'w-5 h-1.5 bg-gold'
                    : 'w-1.5 h-1.5 bg-gold/25 hover:bg-gold/50'
                  }`}
              />
            ))}
          </div>
          <p className="font-jost text-[10px] text-[rgba(200,169,110,0.35)] tracking-[0.15em]
            text-center mt-3">
            {String(current + 1).padStart(2, '0')} / {String(clients.length).padStart(2, '0')}
          </p>
        </div>
      </div>
    </section>
  )
}
