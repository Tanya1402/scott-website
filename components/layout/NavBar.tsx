'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'

const navigation = [
  {
    label: 'Indoor',
    href: '/indoor',
    subs: [
      { label: 'Sofas', href: '/indoor/sofas', count: '190+' },
      { label: 'Chairs', href: '/indoor/chairs', count: '240+' },
      { label: 'Tables', href: '/indoor/tables', count: '130+' },
      { label: 'Beds', href: '/indoor/beds', count: '37' },
      { label: 'Chaise Lounges', href: '/indoor/chaise', count: '3' },
      { label: 'Accessories', href: '/indoor/accessories', count: '29' },
    ],
    heroImage: '/products/indoor/sofas/premium_sofa/palazzocorner.jpeg',
  },
  {
    label: 'Outdoor',
    href: '/outdoor',
    subs: [
      { label: 'Lounge', href: '/outdoor/lounge', count: '140+' },
      { label: 'Dining Chairs', href: '/outdoor/dining-chairs', count: '49' },
    ],
    heroImage: '/products/outdoor/lounge/img15.jpg',
  },
  {
    label: 'Exclusive Edit',
    href: '/exclusive',
    subs: [],
    heroImage: '/products/exclusive/img86.jpg',
  },
]

const company = [
  { label: 'Our Story', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeNav, setActiveNav] = useState<number | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    function outside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false)
        setActiveNav(null)
      }
    }
    if (menuOpen) document.addEventListener('mousedown', outside)
    return () => document.removeEventListener('mousedown', outside)
  }, [menuOpen])

  function clearTimer() {
    if (hoverTimer.current) clearTimeout(hoverTimer.current)
  }

  function startCloseTimer() {
    hoverTimer.current = setTimeout(() => setActiveNav(null), 200)
  }

  function closeAll() {
    setMenuOpen(false)
    setActiveNav(null)
  }

  return (
    <div ref={menuRef} className="fixed top-0 left-0 right-0 z-50">

      {/* Nav bar */}
      <nav
        className={`h-[66px] flex items-center justify-between
          px-6 md:px-10 transition-all duration-500
          ${scrolled
            ? 'bg-[#0A100C]/98 backdrop-blur-md border-b border-[rgba(200,169,110,0.18)]'
            : 'bg-[#0A100C]/94 backdrop-blur-sm border-b border-[rgba(200,169,110,0.10)]'
          }`}
      >
        {/* Left — hamburger + Menu label */}
        <button
          onClick={() => { setMenuOpen(v => !v); if (menuOpen) setActiveNav(null) }}
          className="flex items-center gap-3 group flex-shrink-0"
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-[5px]">
            <span className={`block h-px transition-all duration-300 origin-center
              ${menuOpen
                ? 'w-[18px] bg-gold rotate-45 translate-y-[6px]'
                : 'w-[18px] bg-gold/50 group-hover:bg-gold'
              }`} />
            <span className={`block h-px bg-gold/50 group-hover:bg-gold
              transition-all duration-300
              ${menuOpen ? 'w-[18px] opacity-0' : 'w-[11px]'}`} />
            <span className={`block h-px transition-all duration-300 origin-center
              ${menuOpen
                ? 'w-[18px] bg-gold -rotate-45 -translate-y-[6px]'
                : 'w-[18px] bg-gold/50 group-hover:bg-gold'
              }`} />
          </div>
          <span className="font-jost text-[12px] tracking-[0.22em] uppercase
            text-[#C8A96E]/55 group-hover:text-[#C8A96E] transition-colors duration-300
            hidden sm:block">
            {menuOpen ? 'Close' : 'Menu'}
          </span>
        </button>

        {/* Centre — SCOTT */}
        <Link href="/" className="absolute left-1/2 -translate-x-1/2"
          onClick={closeAll}>
          <span className="font-cinzel text-[26px] md:text-[30px]
            tracking-[0.7em] text-[#D4C4A8]
            hover:text-[#C8A96E] transition-colors duration-300
            uppercase whitespace-nowrap">
            SCOTT
          </span>
        </Link>

        {/* Right */}
        <div className="flex items-center gap-3 md:gap-4 flex-shrink-0">
          <Link href="/wishlist" aria-label="Wishlist"
            className="hidden sm:flex w-9 h-9 items-center justify-center
              text-gold/35 hover:text-gold transition-colors duration-300">
            <svg width="17" height="17" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="1.4">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67
                l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12
                21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </Link>
          <Link href="/contact" aria-label="Enquire"
            className="hidden sm:flex w-9 h-9 items-center justify-center
              text-gold/35 hover:text-gold transition-colors duration-300">
            <svg width="17" height="17" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="1.4">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0
                1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
          </Link>
          <Link href="/contact" onClick={closeAll}
            className="font-cinzel text-[10px] tracking-[0.16em] uppercase
              border border-gold/40 text-gold px-5 py-2.5
              hover:bg-gold hover:text-[#0A100C] transition-all duration-400
              hidden md:block whitespace-nowrap">
            Visit Showroom
          </Link>
        </div>
      </nav>

      {/* Dropdown — only shows when menuOpen */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-full left-0 flex
              shadow-[0_24px_60px_rgba(0,0,0,0.65)]"
          >
            {/* LEFT PANEL: category list only, 220px */}
            <div className="bg-[#0A100C] border border-t-0
              border-[rgba(200,169,110,0.10)] w-[220px] py-4">

              {navigation.map((item, i) => (
                <div
                  key={item.label}
                  onMouseEnter={() => { clearTimer(); setActiveNav(i) }}
                  onMouseLeave={startCloseTimer}
                >
                  <Link
                    href={item.href}
                    onClick={closeAll}
                    className={`flex items-center justify-between px-5 py-3
                      transition-colors duration-180
                      ${activeNav === i
                        ? 'bg-[rgba(200,169,110,0.07)]'
                        : 'hover:bg-[rgba(200,169,110,0.04)]'
                      }`}
                  >
                    <span className={`font-cormorant text-[17px] font-light
                      transition-colors duration-200
                      ${activeNav === i ? 'text-gold' : 'text-cream'}`}>
                      {item.label}
                    </span>
                    {item.subs.length > 0 && (
                      <span className={`text-xs transition-colors duration-200
                        ${activeNav === i ? 'text-gold' : 'text-gold/25'}`}>
                        ›
                      </span>
                    )}
                  </Link>
                </div>
              ))}

              {/* Divider + company links */}
              <div className="mx-5 my-3 h-px bg-[rgba(200,169,110,0.07)]" />
              {company.map(item => (
                <Link key={item.label} href={item.href} onClick={closeAll}
                  className="block px-5 py-2 font-jost text-[11px]
                    tracking-wide text-muted hover:text-cream
                    transition-colors duration-200">
                  {item.label}
                </Link>
              ))}
            </div>

            {/* RIGHT PANEL: subcategories — appears on hover */}
            <AnimatePresence>
              {activeNav !== null &&
               navigation[activeNav].subs.length > 0 && (
                <motion.div
                  key={activeNav}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -6 }}
                  transition={{ duration: 0.16 }}
                  onMouseEnter={clearTimer}
                  onMouseLeave={startCloseTimer}
                  className="bg-[#111A14] border border-t-0 border-l-0
                    border-[rgba(200,169,110,0.10)] w-[220px] py-4"
                >
                  <p className="px-5 pb-3 font-jost text-[8px]
                    tracking-[0.38em] uppercase text-gold/28">
                    {navigation[activeNav].label}
                  </p>
                  {navigation[activeNav].subs.map(sub => (
                    <Link key={sub.href} href={sub.href} onClick={closeAll}
                      className="flex items-center justify-between px-5 py-2.5
                        hover:bg-[rgba(200,169,110,0.05)]
                        transition-colors duration-180 group">
                      <span className="font-jost text-[12px] text-muted/80
                        group-hover:text-cream transition-colors duration-200
                        tracking-wide">
                        {sub.label}
                      </span>
                      <span className="font-jost text-[10px] text-gold/22
                        group-hover:text-gold/50 transition-colors duration-200">
                        {sub.count}
                      </span>
                    </Link>
                  ))}
                  {/* Preview strip */}
                  <div className="mx-5 mt-4 relative h-[56px] overflow-hidden
                    border-l-2 border-gold/15">
                    <Image
                      src={navigation[activeNav].heroImage}
                      alt={navigation[activeNav].label}
                      fill className="object-cover opacity-25"
                      sizes="180px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r
                      from-[#111A14]/90 to-transparent" />
                    <Link href={navigation[activeNav].href}
                      onClick={closeAll}
                      className="absolute inset-0 flex items-center px-3">
                      <span className="font-cinzel text-[8px] tracking-widest
                        uppercase text-gold/45 hover:text-gold
                        transition-colors duration-200">
                        View all →
                      </span>
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
