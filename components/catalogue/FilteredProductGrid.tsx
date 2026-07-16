'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import ProductCard from './ProductCard'
import ProductLightbox from './ProductLightbox'
import EnquiryModal from './EnquiryModal'
import type { Product } from '@/data/products'
import type { CategoryFilter } from '@/data/categories'

interface Props {
  products: Product[]
  filters?: CategoryFilter[]
}

export default function FilteredProductGrid({ products, filters }: Props) {
  const [activeFilter, setActiveFilter] = useState('all')
  const [lightboxProduct, setLightboxProduct] = useState<Product | null>(null)
  const [enquiryProduct, setEnquiryProduct] = useState<string>('')
  const [enquiryOpen, setEnquiryOpen] = useState(false)

  const displayed = !filters || activeFilter === 'all'
    ? products
    : products.filter(p => p.filterKey === activeFilter)

  const lightboxIndex = lightboxProduct
    ? displayed.findIndex(p => p.id === lightboxProduct.id)
    : -1

  function openLightbox(product: Product) {
    setLightboxProduct(product)
  }

  function closeLightbox() {
    setLightboxProduct(null)
  }

  function prevProduct() {
    if (lightboxIndex > 0) {
      setLightboxProduct(displayed[lightboxIndex - 1])
    }
  }

  function nextProduct() {
    if (lightboxIndex < displayed.length - 1) {
      setLightboxProduct(displayed[lightboxIndex + 1])
    }
  }

  function handleEnquire(product: Product) {
    setEnquiryProduct(product.name)
    setLightboxProduct(null)
    setEnquiryOpen(true)
  }

  return (
    <>
      {/* Filter tabs */}
      {filters && filters.length > 1 && (
        <div className="sticky top-[64px] z-30 bg-obsidian/95
          backdrop-blur-sm border-b border-[rgba(200,169,110,0.08)]">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex overflow-x-auto scrollbar-hide">
              {filters.map(f => (
                <button
                  key={f.key}
                  onClick={() => setActiveFilter(f.key)}
                  className={`flex-shrink-0 px-5 py-4 font-jost text-[10px]
                    tracking-widest uppercase transition-all duration-300
                    border-b-2 whitespace-nowrap
                    ${activeFilter === f.key
                      ? 'text-cream border-gold'
                      : 'text-muted border-transparent hover:text-cream/70'
                    }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Product grid */}
      <div className="bg-obsidian max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-14">
        {displayed.length === 0 ? (
          <div className="text-center py-20">
            <p className="font-cormorant text-2xl font-light text-muted italic">
              Collection coming soon.
            </p>
          </div>
        ) : (
          <motion.div
            key={activeFilter}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
              gap-5 md:gap-7"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            {displayed.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={() => openLightbox(product)}
              />
            ))}
          </motion.div>
        )}
      </div>

      {/* Lightbox */}
      <ProductLightbox
        product={lightboxProduct}
        products={displayed}
        onClose={closeLightbox}
        onEnquire={handleEnquire}
        onPrev={prevProduct}
        onNext={nextProduct}
      />

      {/* Enquiry modal */}
      <EnquiryModal
        isOpen={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
        productName={enquiryProduct}
      />
    </>
  )
}
