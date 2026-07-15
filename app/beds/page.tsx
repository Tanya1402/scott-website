import Image from 'next/image'
import ProductGrid from '@/components/catalogue/ProductGrid'
import BackButton from '@/components/ui/BackButton'
import { getByCategory } from '@/data/products'
import categories from '@/data/categories'

export default function BedsPage() {
  const category = categories.find((c) => c.slug === 'beds')!
  const products = getByCategory('beds')

  return (
    <main className="min-h-screen bg-obsidian">
      <section className="relative h-[45vh] md:h-[60vh] flex items-end">
        <Image
          src={category.heroImage}
          alt={category.label}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full">
          <div className="mb-6">
            <BackButton />
          </div>
          <p className="font-cinzel text-gold text-xs tracking-[0.4em] uppercase mb-4">
            The Scott Collection
          </p>
          <h1 className="font-cormorant text-4xl md:text-6xl lg:text-7xl font-light text-cream leading-none">
            {category.label}
          </h1>
          <p className="font-jost text-sm text-muted mt-4 max-w-xs md:max-w-md">
            {category.description}
          </p>
        </div>
      </section>

      <ProductGrid products={products} />
    </main>
  )
}
