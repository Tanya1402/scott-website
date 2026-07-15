'use client'
import { useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import type { Category } from '@/data/categories'

export default function CategoryCard({
  cat,
  index,
  prestige,
}: {
  cat: Category
  index: number
  prestige?: boolean
}) {
  const [hovered, setHovered] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  function handleMouseEnter() {
    setHovered(true)
    if (videoRef.current && cat.videoPath) {
      videoRef.current.currentTime = 0
      videoRef.current.play().catch(() => {})
    }
  }

  function handleMouseLeave() {
    setHovered(false)
    videoRef.current?.pause()
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href={`/${cat.slug}`}
        className={`group relative block overflow-hidden
          aspect-[3/4] md:aspect-[4/5]
          ${prestige ? 'border border-gold/40' : 'border border-gold/10 hover:border-gold/40'}
          transition-all duration-500`}
      >
        <Image
          src={cat.heroImage}
          alt={cat.label}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
          sizes="(max-width:640px) 100vw, 33vw"
        />
        {cat.videoPath && (
          <motion.video
            ref={videoRef}
            src={cat.videoPath}
            muted
            playsInline
            loop
            preload="none"
            className="absolute inset-0 w-full h-full object-cover"
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        {prestige && (
          <div className="absolute top-4 left-4 border border-gold/60 px-3 py-1 bg-obsidian/60">
            <span className="font-cinzel text-gold text-[10px] tracking-widest uppercase">
              Exclusive
            </span>
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
          <p className="font-cinzel text-cream text-xs md:text-sm tracking-widest uppercase group-hover:text-gold transition-colors duration-300 mb-1">
            {cat.label}
          </p>
          <p className="font-jost text-xs text-muted/80 leading-relaxed hidden md:block">
            {cat.description}
          </p>
          <p className="font-jost text-xs text-gold/0 group-hover:text-gold/80 transition-all duration-500 mt-2">
            Explore →
          </p>
        </div>
        <div className="absolute bottom-0 left-0 h-px bg-gold w-0 group-hover:w-full transition-all duration-700" />
      </Link>
    </motion.div>
  )
}
