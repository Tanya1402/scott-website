'use client'

import { useState } from 'react'
import ProductCard from './ProductCard'
import type { Product } from '@/data/products'

interface ProductGridProps {
  products: Product[]
  defaultFilter?: string
}

export default function ProductGrid({ products, defaultFilter = 'all' }: ProductGridProps) {
  const [activeFilter, setActiveFilter] = useState(defaultFilter)

  const allTags = ['all', ...Array.from(new Set(products.flatMap((p) => p.tags)))]
  const displayedProducts =
    activeFilter === 'all' ? products : products.filter((p) => p.tags.includes(activeFilter))

  return (
    <>
      <div className="sticky top-16 z-30 bg-obsidian/95 backdrop-blur-sm border-b border-gold/10 py-4">
        <div className="flex gap-3 px-6 max-w-7xl mx-auto overflow-x-auto scrollbar-hide">
          {allTags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setActiveFilter(tag)}
              className={`font-jost text-xs tracking-widest uppercase whitespace-nowrap transition-colors duration-300 ${
                activeFilter === tag
                  ? 'text-cream border-b border-gold pb-1'
                  : 'text-muted hover:text-cream'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gold/10">
          {displayedProducts.map((product) => (
            <div key={product.id} className="bg-obsidian p-6">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
