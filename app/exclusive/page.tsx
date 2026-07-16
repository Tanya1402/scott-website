import type { Metadata } from 'next'
import Image from 'next/image'
import BackButton from '@/components/ui/BackButton'
import FilteredProductGrid from '@/components/catalogue/FilteredProductGrid'
import { getExclusive } from '@/data/products'

export const metadata: Metadata = {
  title: 'The Exclusive Edit — Scott Furniture',
  description: 'Signature Scott originals. Limited. Unrepeatable.',
}

export default function ExclusivePage() {
  const products = getExclusive()
  return (
    <main className="min-h-screen bg-[#060C07]">
      <section className="relative h-[55vh] flex items-end">
        <Image src="/products/exclusive/img39.jpg"
          alt="The Exclusive Edit" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t
          from-[#060C07] via-[#060C07]/50 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full">
          <BackButton />
          <div className="mt-6">
            <p className="font-cinzel text-[#C8A96E] text-[10px] tracking-[0.4em]
              uppercase mb-4 mt-2">Limited Edition</p>
            <h1 className="font-cormorant text-5xl md:text-7xl font-light
              text-[#F0EAE0]">The Exclusive Edit</h1>
            <p className="font-jost text-[12px] text-[rgba(240,234,224,0.6)] mt-3 max-w-md leading-relaxed">
              Signature Scott originals. Limited. Unrepeatable.
            </p>
          </div>
        </div>
      </section>
      <FilteredProductGrid products={products} />
    </main>
  )
}
