'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'

const navLinks = [
  { label: 'Sofas', href: '/sofas' },
  { label: 'Premium', href: '/premium-sofas' },
  { label: 'Beds', href: '/beds' },
  { label: 'Exclusive', href: '/exclusive' },
  { label: 'Chaise', href: '/chaise' },
  { label: 'Tables', href: '/tables' },
  { label: 'About', href: '/about' },
]

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Main nav bar */}
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-700
        ${scrolled
          ? 'bg-[#0E0C09]/98 backdrop-blur-md border-b border-[rgba(201,169,110,0.2)]'
          : 'bg-[#0E0C09]/90 backdrop-blur-sm border-b border-[rgba(201,169,110,0.1)]'
        }`}>
        <div className="flex items-center justify-between h-[88px] px-6 md:px-12">

          {/* Left — hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="flex items-center gap-3 group flex-shrink-0"
            aria-label="Open menu"
          >
            <div className="flex flex-col gap-[6px]">
              <span className="block w-7 h-[1.5px] bg-gold/60
                group-hover:bg-gold transition-colors duration-300" />
              <span className="block w-5 h-[1.5px] bg-gold/60
                group-hover:bg-gold transition-colors duration-300" />
              <span className="block w-7 h-[1.5px] bg-gold/60
                group-hover:bg-gold transition-colors duration-300" />
            </div>
            <span className="font-jost text-xs tracking-[0.25em]
              text-muted group-hover:text-cream uppercase transition-colors
              duration-300 hidden sm:block">
              Menu
            </span>
          </button>

          {/* Centre — SCOTT wordmark */}
          <Link href="/" className="absolute left-1/2 -translate-x-1/2">
            <span className="font-cinzel text-3xl sm:text-4xl md:text-5xl
              lg:text-6xl tracking-[0.35em] sm:tracking-[0.3em]
              md:tracking-[0.22em] lg:tracking-[0.18em]
              text-gold hover:text-gold/80 transition-colors duration-300
              uppercase whitespace-nowrap">
              SCOTT
            </span>
          </Link>

          {/* Right — icons + CTA */}
          <div className="flex items-center gap-4 flex-shrink-0">
            {/* Wishlist */}
            <Link href="/wishlist" aria-label="Wishlist"
              className="hidden sm:flex w-10 h-10 items-center justify-center
                text-muted hover:text-gold transition-colors duration-300">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1.5">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06
                  a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78
                  1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
            </Link>
            {/* Bulk enquiry */}
            <Link href="/contact" aria-label="Send enquiry"
              className="hidden sm:flex w-10 h-10 items-center justify-center
                text-muted hover:text-gold transition-colors duration-300">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1.5">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14
                  a2 2 0 0 1 2 2z"/>
              </svg>
            </Link>
            {/* Visit showroom CTA */}
            <Link href="/contact"
              className="font-cinzel text-xs tracking-[0.18em] uppercase
                border border-gold/50 text-gold px-5 py-3
                hover:bg-gold hover:text-obsidian transition-all duration-500
                hidden md:block whitespace-nowrap">
              Visit Showroom
            </Link>
          </div>
        </div>
      </nav>

      {/* Left-side dropdown menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMenuOpen(false)}
            />

            {/* Panel */}
            <motion.div
              className="fixed top-0 left-0 h-full w-[280px] sm:w-[340px] z-50
                bg-[#0E0C09] border-r border-gold/15 flex flex-col"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Panel header */}
              <div className="flex items-center justify-between h-[88px]
                px-6 border-b border-gold/10 flex-shrink-0">
                <Link href="/" onClick={() => setMenuOpen(false)}>
                  <span className="font-cinzel text-2xl
                    tracking-[0.45em] text-gold uppercase">SCOTT</span>
                </Link>
                <button onClick={() => setMenuOpen(false)}
                  className="relative w-6 h-6 flex-shrink-0"
                  aria-label="Close menu">
                  <span className="absolute top-1/2 left-0 w-6 h-px
                    bg-gold rotate-45 -translate-y-1/2" />
                  <span className="absolute top-1/2 left-0 w-6 h-px
                    bg-gold -rotate-45 -translate-y-1/2" />
                </button>
              </div>

              {/* Nav links — vertical list */}
              <nav className="flex-1 overflow-y-auto py-2">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block font-jost text-sm tracking-[0.2em]
                      uppercase text-muted hover:text-gold hover:bg-gold/5
                      transition-colors duration-300 px-6 py-4
                      border-b border-gold/5">
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* Panel footer */}
              <div className="flex-shrink-0 p-6 border-t border-gold/10
                flex flex-col gap-4">
                <Link href="/contact" onClick={() => setMenuOpen(false)}
                  className="text-center font-cinzel text-xs
                    tracking-[0.18em] uppercase border border-gold/50
                    text-gold px-5 py-3
                    hover:bg-gold hover:text-obsidian transition-all
                    duration-500">
                  Visit Showroom
                </Link>
                <div className="font-jost text-xs text-muted space-y-1">
                  <p>+91 94250 12129</p>
                  <p>swoodsbpl@gmail.com</p>
                  <p>Bhopal, India</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
