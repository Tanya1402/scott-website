import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import FilteredProductGrid from '@/components/catalogue/FilteredProductGrid'
import { getBySubCategory } from '@/data/products'

export const metadata: Metadata = {
  title: 'Beds & Headboards — Scott Furniture',
}

export default function BedsPage() {
  const products = getBySubCategory('beds')
  return (
    <main className="min-h-screen bg-obsidian">
      <section className="relative h-[45vh] md:h-[55vh] flex items-end">
        <Image src="/products/indoor/beds/34.jpg" alt="Beds"
          fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t
          from-obsidian via-obsidian/50 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-14 w-full">
          <Link href="/indoor"
            className="inline-flex items-center gap-2 font-jost text-[11px]
              text-[rgba(240,234,224,0.5)] hover:text-[#C8A96E] transition-colors duration-300
              tracking-[0.2em] uppercase mb-6 group">
            <span className="group-hover:-translate-x-1 transition-transform
              duration-300 inline-block">←</span>
            <span>Indoor</span>
          </Link>
          <p className="font-cinzel text-[#C8A96E] text-[10px] tracking-[0.4em]
            uppercase mb-4 mt-2">Indoor Collection</p>
          <h1 className="font-cormorant text-5xl md:text-7xl font-light
            text-[#F0EAE0]">Beds & Headboards</h1>
        </div>
      </section>
      <FilteredProductGrid products={products} />
    </main>
  )
}
