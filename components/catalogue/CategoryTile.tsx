'use client'
import { useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { SubCategory } from '@/data/categories'

interface Props {
  href: string
  sub: SubCategory
}

export default function CategoryTile({ href, sub }: Props) {
  const [hovered, setHovered] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  function handleMouseEnter() {
    setHovered(true)
    if (videoRef.current && sub.heroVideo) {
      videoRef.current.currentTime = 0
      videoRef.current.play().catch(() => {})
    }
  }

  function handleMouseLeave() {
    setHovered(false)
    if (videoRef.current) videoRef.current.pause()
  }

  return (
    <Link href={href}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative block overflow-hidden bg-card
        aspect-square border border-[rgba(200,169,110,0.08)]
        hover:border-[rgba(200,169,110,0.35)] transition-all duration-500">
      <Image src={sub.tileImage ?? sub.heroImage} alt={sub.label} fill
        className="object-cover object-center transition-transform duration-700
          group-hover:scale-[1.03]"
        sizes="(max-width:640px) 50vw, 33vw" />
      {sub.heroVideo && (
        <video
          ref={videoRef}
          src={sub.heroVideo}
          muted
          playsInline
          loop
          preload="none"
          className="absolute inset-0 w-full h-full object-cover
            transition-opacity duration-500"
          style={{ opacity: hovered ? 1 : 0 }}
        />
      )}
      <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t
        from-black/95 via-black/70 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <p className="font-cinzel text-cream text-xs
          tracking-widest uppercase group-hover:text-gold
          transition-colors duration-300 mb-1">{sub.label}</p>
        <p className="font-jost text-xs text-muted/70
          leading-relaxed hidden md:block">{sub.description}</p>
        <p className="font-jost text-xs text-gold/0
          group-hover:text-gold/80 transition-all duration-500 mt-2">
          Explore →
        </p>
      </div>
      <div className="absolute bottom-0 left-0 h-px bg-gold
        w-0 group-hover:w-full transition-all duration-700" />
    </Link>
  )
}
