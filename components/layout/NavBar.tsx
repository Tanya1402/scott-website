'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const NAV_LINKS = [
  { label: 'Sofas', href: '/sofas' },
  { label: 'Premium', href: '/premium-sofas' },
  { label: 'Beds', href: '/beds' },
  { label: 'Exclusive', href: '/exclusive' },
  { label: 'Chaise', href: '/chaise' },
  { label: 'About', href: '/about' },
]

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-700 ${
        scrolled
          ? 'bg-card-deep/90 backdrop-blur-md border-b border-gold/20'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Scott Furniture"
            width={120}
            height={40}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        <nav className="hidden md:flex gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-jost text-xs font-light tracking-widest uppercase text-muted hover:text-cream transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="hidden md:block px-6 py-2.5 border border-gold/60 text-cream font-jost text-xs tracking-widest uppercase hover:bg-gold hover:text-obsidian hover:border-gold transition-all duration-500"
        >
          Visit Showroom
        </Link>

        <button
          type="button"
          aria-label="Open menu"
          className="md:hidden flex flex-col gap-[5px] text-cream"
          onClick={() => setMobileOpen(true)}
        >
          <span className="block w-5 h-px bg-cream" />
          <span className="block w-5 h-px bg-cream" />
          <span className="block w-5 h-px bg-cream" />
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-card-deep z-50 flex flex-col"
          >
            <button
              type="button"
              aria-label="Close menu"
              className="absolute top-6 right-6 text-cream text-2xl"
              onClick={() => setMobileOpen(false)}
            >
              ×
            </button>

            <div className="flex-1 flex flex-col items-center justify-center gap-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-cormorant text-4xl font-light text-cream hover:text-gold transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="pb-10 flex flex-col items-center gap-3">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="px-6 py-2.5 border border-gold/60 text-cream font-jost text-xs tracking-widest uppercase hover:bg-gold hover:text-obsidian hover:border-gold transition-all duration-500"
              >
                Visit Showroom
              </Link>
              <p className="font-jost text-xs text-muted tracking-wide">
                +91 94250 12129 · swoodsbpl@gmail.com
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
