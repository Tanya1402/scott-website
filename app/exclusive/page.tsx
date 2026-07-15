import Image from 'next/image'
import ProductGrid from '@/components/catalogue/ProductGrid'
import { getByCategory } from '@/data/products'
import categories from '@/data/categories'

export default function ExclusivePage() {
  const category = categories.find((c) => c.slug === 'exclusive')!
  const products = getByCategory('exclusive')

  return (
    <main className="min-h-screen bg-card-deep">
      <section className="relative h-[60vh] flex items-end">
        <Image
          src={category.heroImage}
          alt={category.label}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full">
          <p className="font-cinzel text-gold text-xs tracking-[0.4em] uppercase mb-4">
            The Scott Collection
          </p>
          <div className="inline-block border border-gold/60 px-3 py-1 mb-4">
            <span className="font-cinzel text-gold text-[10px] tracking-widest uppercase">
              Limited Edition
            </span>
          </div>
          <h1 className="font-cormorant text-5xl md:text-7xl font-light text-cream leading-none">
            {category.label}
          </h1>
          <p className="font-jost text-sm text-muted mt-4 max-w-md">{category.description}</p>
        </div>
      </section>

      <ProductGrid products={products} />
    </main>
  )
}
