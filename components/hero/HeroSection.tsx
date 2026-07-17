'use client'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const scenes = [
  { id: 's1', src: '/hero/hero-exterior.jpg', alt: 'Scott' },
  { id: 's3', src: '/hero/hero-living.jpg', alt: 'Scott living collection' },
  { id: 's4', src: '/hero/hero-dining.jpg', alt: 'Scott dining collection' },
  { id: 's5', src: '/hero/hero-pool.jpg', alt: 'Scott collection' },
]

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
    gsap.set('#s2,#s3,#s4,#s5', { opacity: 0 })
    gsap.set('#door-l,#door-r', { xPercent: 0 })
    gsap.set('#t1,#t2,#t4,#t5', { opacity: 0, y: 28 })
    gsap.set('#t3a,#t3b,#t3c', { opacity: 0, y: 28 })

    // Scene 1 (0–20%): exterior, fade in title text, then fade out
    master
      .to('#t1', { opacity: 1, y: 0, duration: 0.08 }, 0)
      .to('#t1', { opacity: 0, y: -20, duration: 0.05 }, 0.15)
      .to('#s1', { opacity: 0, duration: 0.02 }, 0.18)

      // Scene 2 (20–40%): doors slide apart revealing s3 behind
      .to('#s2', { opacity: 1, duration: 0.01 }, 0.19)
      .to('#door-l', { xPercent: -100, duration: 0.15 }, 0.2)
      .to('#door-r', { xPercent: 100, duration: 0.15 }, 0.2)
      .to('#s3', { opacity: 1, duration: 0.01 }, 0.2)
      .to('#t2', { opacity: 1, y: 0, duration: 0.04 }, 0.22)
      .to('#t2', { opacity: 0, duration: 0.04 }, 0.34)

      // Scene 3 (40–60%): living room — staggered word reveal
      .to('#t3a', { opacity: 1, y: 0, duration: 0.05 }, 0.42)
      .to('#t3b', { opacity: 1, y: 0, duration: 0.05 }, 0.46)
      .to('#t3c', { opacity: 1, y: 0, duration: 0.05 }, 0.5)
      .to('#t3a,#t3b,#t3c', { opacity: 0, duration: 0.04 }, 0.57)
      .to('#s3', { opacity: 0, duration: 0.02 }, 0.59)
      .to('#s4', { opacity: 1, duration: 0.02 }, 0.59)

      // Scene 4 (60–80%): dining — Ken Burns + right-aligned text
      .to('#s4 .ken-burns', { scale: 1.05, duration: 0.2, ease: 'none' }, 0.6)
      .to('#t4', { opacity: 1, y: 0, duration: 0.06 }, 0.62)
      .to('#t4', { opacity: 0, duration: 0.04 }, 0.77)
      .to('#s4', { opacity: 0, duration: 0.02 }, 0.79)
      .to('#s5', { opacity: 1, duration: 0.02 }, 0.79)

      // Scene 5 (80–100%): pool — full tagline + CTA, stays visible
      .to('#t5', { opacity: 1, y: 0, duration: 0.08 }, 0.82)
    // t5 stays — no exit

    return () => ScrollTrigger.getAll().forEach((st) => st.kill())
  }, [])

  return (
    <div ref={containerRef} style={{ height: '600vh' }} className="relative">
      <div
        ref={stageRef}
        className="relative h-screen w-full overflow-hidden bg-obsidian hero-animated-bg"
      >
        {/* ── IMAGE LAYERS ── */}

        {/* Scene 1 — Exterior, Ken Burns zoom */}
        <div id={scenes[0].id} className="absolute inset-0 z-[15]">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 ken-burns-zoom">
              <Image
                src={scenes[0].src}
                alt={scenes[0].alt}
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
            </div>
            <div className="absolute inset-0 bg-black/45" />
          </div>
        </div>

        {/* Scene 2 — pure dark void behind the doors, nothing else */}
        <div id="s2" className="absolute inset-0 bg-black" />

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
        <div id={scenes[1].id} className="absolute inset-0">
          <Image
            src={scenes[1].src}
            alt={scenes[1].alt}
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/45" />
        </div>

        {/* Scene 4 — Dining, Ken Burns zoom */}
        <div id={scenes[2].id} className="absolute inset-0 overflow-hidden">
          <div className="ken-burns absolute inset-0 origin-center">
            <Image
              src={scenes[2].src}
              alt={scenes[2].alt}
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
          <div className="absolute inset-0 bg-black/45" />
        </div>

        {/* Scene 5 — Pool */}
        <div id={scenes[3].id} className="absolute inset-0">
          <Image
            src={scenes[3].src}
            alt={scenes[3].alt}
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/45" />
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

        {/* T1 — Scene 1 text: left-aligned */}
        <div id="t1"
          className="absolute inset-0 z-20 flex flex-col justify-center px-12
            md:px-20 pointer-events-none"
          style={{ opacity: 0 }}>
          <p className="font-cinzel text-gold text-xs tracking-[0.5em] uppercase
            mb-8">
            India · Est. 1991
          </p>
          <h1 className="font-cormorant text-6xl md:text-8xl lg:text-9xl
            font-light text-cream leading-[0.9] mb-6">
            Innovation<br />
            <em className="text-gold italic">that Inspires</em>
          </h1>
          <p className="font-jost text-base md:text-lg text-cream/90 leading-relaxed
            max-w-sm mb-10">
            Quality that Endures — German precision,<br />
            crafted for extraordinary homes.
          </p>
          <div className="pointer-events-auto">
            <Link href="#collections"
              className="inline-block font-cinzel text-xs tracking-[0.25em]
                uppercase bg-gold text-obsidian px-8 py-4
                hover:bg-gold/90 transition-colors duration-300">
              Explore Collections
            </Link>
          </div>
        </div>

        {/* T2 — Scene 2 (doors): single line, centred */}
        <div
          id="t2"
          className="absolute inset-0 z-20 flex items-center justify-center px-6 md:px-12 pointer-events-none"
        >
          <p className="font-cormorant text-3xl md:text-5xl font-light text-cream italic tracking-wide">
            Enter.
          </p>
        </div>

        {/* T3a/b/c — Scene 3 (living): staggered words */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-2 px-6 md:px-12 pointer-events-none">
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

        {/* T4 — Scene 4 (dining): right-aligned */}
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

        {/* T5 — Scene 5 (pool): centred, CTA */}
        <div
          id="t5"
          className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6 md:px-12"
        >
          <p className="font-cinzel text-gold text-xs tracking-[0.4em] uppercase mb-6">
            Scott — India
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

        {/* Circular scroll indicator — permanent overlay */}
        <div className="absolute bottom-10 right-10 md:right-16 z-20
          pointer-events-none">
          <div className="relative w-16 h-16 border border-gold/30 rounded-full
            flex flex-col items-center justify-center gap-1
            animate-pulse">
            <span className="font-jost text-[7px] tracking-[0.3em] text-gold/60
              uppercase">Scroll</span>
            <span className="text-gold/60 text-sm">↓</span>
          </div>
        </div>
      </div>
    </div>
  )
}
