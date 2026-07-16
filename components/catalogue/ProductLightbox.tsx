'use client'
import { useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import type { Product } from '@/data/products'

interface Props {
  product: Product | null
  products: Product[]
  onClose: () => void
  onEnquire: (product: Product) => void
  onPrev: () => void
  onNext: () => void
}

export default function ProductLightbox({
  product, products, onClose, onEnquire, onPrev, onNext
}: Props) {
  // Close on Escape key
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose, onPrev, onNext])

  // Prevent body scroll when open
  useEffect(() => {
    if (product) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [product])

  const currentIndex = product
    ? products.findIndex(p => p.id === product.id)
    : -1

  return (
    <AnimatePresence>
      {product && (
        <>
          {/* Backdrop — click to close */}
          <motion.div
            key="lb-backdrop"
            className="fixed inset-0 z-[90] bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />

          {/* Card — centred, does NOT close on click */}
          <motion.div
            key="lb-card"
            className="fixed inset-0 z-[91] flex items-center justify-center
              p-4 md:p-8 pointer-events-none"
          >
            <motion.div
              className="bg-[#111A14] border border-[rgba(200,169,110,0.15)]
                w-full max-w-lg pointer-events-auto relative
                shadow-[0_40px_100px_rgba(0,0,0,0.7)]"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={e => e.stopPropagation()}
            >
              {/* X button — top right, outside the card slightly */}
              <button
                onClick={onClose}
                aria-label="Close"
                className="absolute -top-3 -right-3 w-7 h-7 bg-[#111A14]
                  border border-[rgba(200,169,110,0.25)] flex items-center
                  justify-center text-gold/50 hover:text-gold
                  hover:border-gold/60 transition-all duration-200 z-10
                  text-sm"
              >
                ✕
              </button>

              {/* Product image — large, fills card width */}
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <Image
                  src={product.imagePath}
                  alt={product.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width:768px) 100vw, 512px"
                  priority
                />
              </div>

              {/* Info */}
              <div className="p-5">
                <p className="font-jost text-[8px] tracking-[0.3em] uppercase
                  text-gold/40 mb-1.5">
                  {product.mainCategory} · {product.subCategory}
                </p>
                <p className="font-cormorant text-xl text-cream font-light mb-1">
                  {product.name}
                </p>
                <p className="font-jost text-[11px] text-muted mb-4">
                  {product.subtitle}
                </p>

                {/* Enquire button */}
                <button
                  onClick={() => onEnquire(product)}
                  className="w-full bg-gold text-obsidian font-cinzel text-[9px]
                    tracking-[0.2em] uppercase py-3.5
                    hover:bg-gold/90 transition-colors duration-300"
                >
                  Enquire About This Piece
                </button>
              </div>

              {/* Prev / Next */}
              <div className="flex justify-between items-center px-5 pb-4
                pt-2 border-t border-[rgba(200,169,110,0.08)]">
                <button
                  onClick={onPrev}
                  disabled={currentIndex <= 0}
                  className="font-jost text-[9px] tracking-[0.12em] uppercase
                    text-gold/35 hover:text-gold disabled:opacity-20
                    transition-colors duration-200"
                >
                  ← Prev
                </button>
                <span className="font-jost text-[9px] text-gold/20
                  tracking-[0.1em]">
                  {String(currentIndex + 1).padStart(2,'0')} /{' '}
                  {String(products.length).padStart(2,'0')}
                </span>
                <button
                  onClick={onNext}
                  disabled={currentIndex >= products.length - 1}
                  className="font-jost text-[9px] tracking-[0.12em] uppercase
                    text-gold/35 hover:text-gold disabled:opacity-20
                    transition-colors duration-200"
                >
                  Next →
                </button>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
