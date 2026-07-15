'use client'
import { useRef, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import EnquiryModal from './EnquiryModal'
import type { Product } from '@/data/products'

export default function ProductCard({ product }: { product: Product }) {
  const [hovered, setHovered] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
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
    if (videoRef.current) {
      videoRef.current.pause()
    }
  }

  return (
    <>
      <div
        className="group relative cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-card">
          <Image
            src={product.imagePath}
            alt={product.imageAlt}
            fill
            className="object-cover"
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
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            />
          )}

          <motion.div
            className="absolute inset-0 bg-black/55 flex flex-col items-center justify-center gap-4"
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.4 }}
          >
            <button
              onClick={(e) => {
                e.stopPropagation()
                setModalOpen(true)
              }}
              className="border border-gold text-cream font-jost text-xs tracking-widest uppercase px-8 py-3 hover:bg-gold hover:text-obsidian transition-all duration-300"
            >
              Enquire
            </button>
          </motion.div>

          {product.isNew && (
            <div className="absolute top-3 left-3 bg-obsidian/80 border border-gold/50 px-2 py-1">
              <span className="font-cinzel text-gold text-[9px] tracking-widest uppercase">
                New
              </span>
            </div>
          )}

          {product.isExclusive && !product.isNew && (
            <div className="absolute top-3 left-3 bg-obsidian/80 border border-gold px-2 py-1">
              <span className="font-cinzel text-gold text-[9px] tracking-widest uppercase">
                Exclusive
              </span>
            </div>
          )}
        </div>

        <div className="pt-4 pb-6">
          <p className="font-cinzel text-xs tracking-widest text-cream uppercase leading-relaxed">
            {product.name}
          </p>
          <p className="font-jost text-xs text-muted mt-1 leading-relaxed">{product.subtitle}</p>
        </div>
      </div>

      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        productName={product.name}
      />
    </>
  )
}
