'use client'
import { useRef, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import type { Product } from '@/data/products'

interface Props {
  product: Product
  onClick: () => void
}

export default function ProductCard({ product, onClick }: Props) {
  const [hovered, setHovered] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  function handleMouseEnter() {
    setHovered(true)
    if (videoRef.current && product.videoPath) {
      videoRef.current.currentTime = 0
      videoRef.current.play().catch(() => {})
    }
  }

  function handleMouseLeave() {
    setHovered(false)
    if (videoRef.current) videoRef.current.pause()
  }

  return (
    <div
      className="group relative cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-card">
        <Image
          src={product.imagePath}
          alt={product.imageAlt}
          fill
          className="object-cover transition-transform duration-700
            group-hover:scale-[1.04]"
          sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
        />
        {product.videoPath && (
          <motion.video
            ref={videoRef}
            src={product.videoPath}
            muted
            playsInline
            loop
            preload="none"
            className="absolute inset-0 w-full h-full object-cover"
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          />
        )}
        <motion.div
          className="absolute inset-0 bg-black/50 flex items-center
            justify-center"
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.35 }}
        >
          <span className="border border-gold text-cream font-jost text-[10px]
            tracking-widest uppercase px-6 py-2.5">
            View Piece
          </span>
        </motion.div>
        {product.isNew && (
          <div className="absolute top-3 left-3 bg-[#0A100C]/85
            border border-gold/40 px-2 py-0.5">
            <span className="font-cinzel text-gold text-[8px]
              tracking-widest uppercase">New</span>
          </div>
        )}
        {product.isExclusive && !product.isNew && (
          <div className="absolute top-3 left-3 bg-[#0A100C]/85
            border border-gold px-2 py-0.5">
            <span className="font-cinzel text-gold text-[8px]
              tracking-widest uppercase">Exclusive</span>
          </div>
        )}
      </div>
      <div className="pt-3 pb-5">
        <p className="font-cinzel text-[10px] tracking-widest text-cream
          uppercase leading-relaxed">
          {product.name}
        </p>
        <p className="font-jost text-[10px] text-muted mt-0.5 leading-relaxed">
          {product.subtitle}
        </p>
      </div>
    </div>
  )
}
