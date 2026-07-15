'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import products from '@/data/products'
import { useWishlist } from '@/components/wishlist/WishlistContext'
import EnquiryModal from '@/components/catalogue/EnquiryModal'
import BackButton from '@/components/ui/BackButton'

export default function WishlistPage() {
  const { ids, toggle } = useWishlist()
  const [selected, setSelected] = useState<string[]>([])
  const [modalOpen, setModalOpen] = useState(false)

  const saved = products.filter((p) => ids.includes(p.id))
  const allSelected = saved.length > 0 && selected.length === saved.length

  function toggleSelect(id: string) {
    setSelected((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]))
  }

  function toggleSelectAll() {
    setSelected(allSelected ? [] : saved.map((p) => p.id))
  }

  const selectedNames = saved
    .filter((p) => selected.includes(p.id))
    .map((p) => p.name)
    .join(', ')

  if (saved.length === 0) {
    return (
      <main className="min-h-screen bg-obsidian flex items-center
        justify-center px-6">
        <div className="text-center max-w-md">
          <p className="font-cinzel text-gold text-xs tracking-[0.4em]
            uppercase mb-6">Your Wishlist</p>
          <h1 className="font-cormorant text-4xl font-light text-cream mb-4">
            Nothing saved yet
          </h1>
          <p className="font-jost text-sm text-muted leading-relaxed mb-8">
            Browse the collection and tap the heart on any piece to save it
            here for a personalised consultation.
          </p>
          <Link href="/#collections"
            className="inline-block font-cinzel text-xs tracking-widest
              uppercase border border-gold/50 text-gold px-8 py-3
              hover:bg-gold hover:text-obsidian transition-all duration-500">
            Explore Collections
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-obsidian pt-[120px] pb-32 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <BackButton />
        </div>
        <p className="font-cinzel text-gold text-xs tracking-[0.4em]
          uppercase mb-4">Your Wishlist</p>
        <h1 className="font-cormorant text-4xl md:text-5xl font-light
          text-cream mb-8">
          Saved Pieces
        </h1>

        <div className="flex items-center justify-between mb-8
          pb-4 border-b border-gold/10">
          <button
            onClick={toggleSelectAll}
            className="font-jost text-xs tracking-widest uppercase
              text-muted hover:text-cream transition-colors duration-300"
          >
            {allSelected ? 'Deselect All' : 'Select All'}
          </button>
          <p className="font-jost text-xs text-muted">
            {selected.length} of {saved.length} selected
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
          gap-8 md:gap-10">
          {saved.map((product) => {
            const isSelected = selected.includes(product.id)
            return (
              <div key={product.id} className="group relative">
                <button
                  onClick={() => toggleSelect(product.id)}
                  aria-label={isSelected ? 'Deselect for enquiry' : 'Select for enquiry'}
                  aria-pressed={isSelected}
                  className={`absolute top-3 left-3 z-10 w-6 h-6 border
                    flex items-center justify-center text-[10px]
                    transition-colors duration-300 ${
                      isSelected
                        ? 'bg-gold border-gold text-obsidian'
                        : 'bg-obsidian/60 backdrop-blur-sm border-gold/40 text-transparent'
                    }`}
                >
                  ✓
                </button>
                <div className="relative aspect-[4/3] overflow-hidden bg-card">
                  <Image
                    src={product.imagePath}
                    alt={product.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                  />
                  <button
                    onClick={() => toggle(product.id)}
                    aria-label="Remove from wishlist"
                    className="absolute top-3 right-3 z-10 w-8 h-8 flex
                      items-center justify-center rounded-full
                      bg-obsidian/60 backdrop-blur-sm
                      hover:bg-obsidian/80 transition-colors duration-300"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24"
                      fill="currentColor" stroke="currentColor" strokeWidth="1.5"
                      className="text-gold">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06
                        a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78
                        1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                    </svg>
                  </button>
                </div>
                <div className="pt-4 pb-2">
                  <p className="font-cinzel text-xs tracking-widest text-cream
                    uppercase leading-relaxed">
                    {product.name}
                  </p>
                  <p className="font-jost text-xs text-muted mt-1 leading-relaxed">
                    {product.subtitle}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {selected.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 z-30 bg-card-deep
          border-t border-gold/20 px-4 md:px-6 py-4 flex items-center
          justify-between">
          <p className="font-jost text-sm text-cream">
            {selected.length} piece{selected.length > 1 ? 's' : ''} selected
          </p>
          <button
            onClick={() => setModalOpen(true)}
            className="font-cinzel text-xs tracking-widest uppercase
              bg-gold text-obsidian px-8 py-3
              hover:bg-gold/90 transition-colors duration-300"
          >
            Enquire
          </button>
        </div>
      )}

      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        productName={selectedNames}
      />
    </main>
  )
}
