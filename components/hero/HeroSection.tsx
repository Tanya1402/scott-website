'use client'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const container = containerRef.current
    const stage = stageRef.current
    if (!container || !stage) return

    // Pin the sticky stage for the full scroll distance
    ScrollTrigger.create({
      trigger: container,
      start: 'top top',
      end: 'bottom bottom',
      pin: stage,
      pinSpacing: false,
      anticipatePin: 1,
    })

    // ── Master timeline ──
    // scrub:true means 1:1 with scroll position. No duration matters — progress drives it.
    const master = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1.5,
      },
    })

    // Initial state — only scene 1 visible
    gsap.set('#s2,#s3,#s4,#s5,#s6', { opacity: 0 })
    gsap.set('#door-l,#door-r', { xPercent: 0 })
    gsap.set('#t1,#t2,#t3,#t4,#t5,#t6', { opacity: 0, y: 28 })

    // Scene 1 (0–16%): exterior, fade in title text, then fade out
    master
      .to('#t1', { opacity: 1, y: 0, duration: 0.08 }, 0)
      .to('#t1', { opacity: 0, y: -20, duration: 0.06 }, 0.10)
      .to('#s1', { opacity: 0, duration: 0.04 }, 0.14)

      // Scene 2 (16–32%): doors slide apart revealing s3 behind
      .to('#s2', { opacity: 1, duration: 0.01 }, 0.16)
      .to('#t2', { opacity: 1, y: 0, duration: 0.04 }, 0.18)
      .to('#door-l', { xPercent: -100, duration: 0.10 }, 0.20)
      .to('#door-r', { xPercent: 100, duration: 0.10 }, 0.20)
      .to('#s3', { opacity: 1, duration: 0.01 }, 0.20)
      .to('#t2', { opacity: 0, duration: 0.04 }, 0.28)
      .to('#s2', { opacity: 0, duration: 0.01 }, 0.31)

      // Scene 3 (32–48%): living room — staggered word reveal
      .to('#t3a', { opacity: 1, y: 0, duration: 0.05 }, 0.33)
      .to('#t3b', { opacity: 1, y: 0, duration: 0.05 }, 0.37)
      .to('#t3c', { opacity: 1, y: 0, duration: 0.05 }, 0.41)
      .to('#t3a,#t3b,#t3c', { opacity: 0, duration: 0.04 }, 0.45)
      .to('#s3', { opacity: 0, duration: 0.03 }, 0.47)

      // Scene 4 (48–64%): pool — Ken Burns + right-aligned text
      .to('#s4', { opacity: 1, duration: 0.03 }, 0.48)
      .to('#s4 .ken-burns', { scale: 1.06, duration: 0.16, ease: 'none' }, 0.48)
      .to('#t4', { opacity: 1, y: 0, duration: 0.06 }, 0.52)
      .to('#t4', { opacity: 0, duration: 0.04 }, 0.61)
      .to('#s4', { opacity: 0, duration: 0.03 }, 0.63)

      // Scene 5 (64–80%): bedroom — centred
      .to('#s5', { opacity: 1, duration: 0.03 }, 0.64)
      .to('#t5', { opacity: 1, y: 0, duration: 0.06 }, 0.67)
      .to('#t5', { opacity: 0, duration: 0.04 }, 0.77)
      .to('#s5', { opacity: 0, duration: 0.03 }, 0.79)

      // Scene 6 (80–100%): dining — full tagline + CTA, stays visible
      .to('#s6', { opacity: 1, duration: 0.03 }, 0.80)
      .to('#t6', { opacity: 1, y: 0, duration: 0.08 }, 0.83)
    // t6 stays — no exit

    return () => ScrollTrigger.getAll().forEach((st) => st.kill())
  }, [])

  return (
    <div ref={containerRef} style={{ height: '600vh' }} className="relative">
      <div
        ref={stageRef}
        className="relative h-screen w-full overflow-hidden bg-obsidian hero-animated-bg"
      >
        {/* ── IMAGE LAYERS ── */}

        {/* Scene 1 — Living room, Ken Burns zoom */}
        <div id="s1" className="absolute inset-0 z-[15]">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 ken-burns-zoom">
              <Image
                src="/hero/hero-living.jpeg"
                alt="Scott — luxury living"
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
            </div>
            <div className="absolute inset-0 bg-black/50" />
          </div>
        </div>

        {/* Scene 2 — Doors (behind door panels, just a dark bg) */}
        <div id="s2" className="absolute inset-0 bg-obsidian" />

        {/* Door panels — left and right halves of hero-doors.jpg */}
        <div id="door-l" className="absolute inset-y-0 left-0 w-1/2 overflow-hidden z-10">
          <Image
            src="/hero/hero-doors.jpg"
            alt=""
            fill
            className="object-cover object-left"
            sizes="50vw"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div id="door-r" className="absolute inset-y-0 right-0 w-1/2 overflow-hidden z-10">
          <Image
            src="/hero/hero-doors.jpg"
            alt=""
            fill
            className="object-cover object-right"
            sizes="50vw"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Scene 3 — Living room (revealed behind doors) */}
        <div id="s3" className="absolute inset-0">
          <Image
            src="/hero/hero-living.jpeg"
            alt="Scott living collection"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/45" />
        </div>

        {/* Scene 4 — Pool with Ken Burns wrapper */}
        <div id="s4" className="absolute inset-0 overflow-hidden">
          <div className="ken-burns absolute inset-0 origin-center">
            <Image
              src="/hero/hero-pool.jpg"
              alt="Scott collection"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Scene 5 — Bedroom */}
        <div id="s5" className="absolute inset-0">
          <Image
            src="/hero/hero-bedroom.jpeg"
            alt="The Sanctuary collection"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Scene 6 — Dining */}
        <div id="s6" className="absolute inset-0">
          <Image
            src="/hero/hero-dining.jpeg"
            alt="Scott dining collection"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Subtle gold atmospheric glow, sits above every scene, below the text layers */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at 35% 65%, rgba(201,169,110,0.07) 0%, transparent 55%)',
          }}
        />

        {/* ── TEXT OVERLAYS ── all z-20, pointer-events-none except CTA */}

        {/* T1 — Scene 1 text: centred wordmark */}
        <div
          id="t1"
          className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6 pointer-events-none"
        >
          <p className="font-cinzel text-gold text-xs tracking-[0.5em] uppercase mb-8">
            Bhopal, India
          </p>
          <h1 className="font-cinzel text-6xl md:text-8xl lg:text-9xl tracking-[0.2em] text-cream leading-none">
            SCOTT
          </h1>
          <div className="mt-6 w-16 h-px bg-gold/60" />
          <p className="font-cormorant text-xl md:text-2xl text-gold italic mt-6">
            Innovation that Inspires
          </p>
          <p className="font-cormorant text-xl md:text-2xl text-cream/80 italic">
            Quality that Endures
          </p>
        </div>

        {/* T2 — Scene 2 (doors): single line, centred */}
        <div
          id="t2"
          className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
        >
          <p className="font-cormorant text-3xl md:text-5xl font-light text-cream italic tracking-wide">
            Enter.
          </p>
        </div>

        {/* T3a/b/c — Scene 3 (living): staggered words */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-2 pointer-events-none">
          {[
            { id: 't3a', word: 'Crafted' },
            { id: 't3b', word: 'for' },
            { id: 't3c', word: 'Permanence.' },
          ].map(({ id, word }) => (
            <p
              key={id}
              id={id}
              className="font-cormorant text-5xl md:text-7xl font-light text-cream"
              style={{ opacity: 0, transform: 'translateY(28px)' }}
            >
              {word}
            </p>
          ))}
        </div>

        {/* T4 — Scene 4 (pool): right-aligned */}
        <div
          id="t4"
          className="absolute inset-0 z-20 flex items-center justify-end px-12 md:px-24 pointer-events-none"
        >
          <div className="text-right max-w-sm">
            <p className="font-cinzel text-gold text-xs tracking-[0.4em] uppercase mb-4">
              The Collection
            </p>
            <p className="font-cormorant text-4xl md:text-5xl font-light text-cream leading-tight">
              Every detail.
              <br />
              Considered.
            </p>
          </div>
        </div>

        {/* T5 — Scene 5 (bedroom): centred */}
        <div
          id="t5"
          className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center pointer-events-none"
        >
          <p className="font-cinzel text-gold text-xs tracking-[0.4em] uppercase mb-4">
            The Sanctuary
          </p>
          <p className="font-cormorant text-5xl md:text-6xl font-light text-cream italic">
            For those who rest with intention.
          </p>
        </div>

        {/* T6 — Scene 6 (dining): centred, CTA */}
        <div
          id="t6"
          className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6"
        >
          <p className="font-cinzel text-gold text-xs tracking-[0.4em] uppercase mb-6">
            Scott — Bhopal
          </p>
          <p className="font-cormorant text-4xl md:text-6xl font-light text-cream mb-2">
            Innovation that Inspires.
          </p>
          <p className="font-cormorant text-4xl md:text-6xl font-light text-cream italic mb-10">
            Quality that Endures.
          </p>
          <Link
            href="/contact"
            className="font-cinzel text-xs tracking-widest uppercase bg-gold text-obsidian px-10 py-4 hover:bg-gold/90 transition-colors duration-300"
          >
            Visit the Showroom
          </Link>
        </div>

        {/* Scroll indicator — fades out when scroll starts */}
        <div
          id="scroll-hint"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 pointer-events-none"
        >
          <p className="font-jost text-xs text-muted/70 tracking-[0.3em] uppercase">Scroll</p>
          <div className="w-px h-12 bg-gradient-to-b from-gold/60 to-transparent" />
        </div>
      </div>
    </div>
  )
}
