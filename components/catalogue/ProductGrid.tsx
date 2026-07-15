import ProductCard from './ProductCard'
import type { Product } from '@/data/products'

interface ProductGridProps {
  products: Product[]
}

export default function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-24 text-center">
        <p className="font-cormorant text-2xl font-light text-muted italic">
          Collection coming soon.
        </p>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
        gap-8 md:gap-10">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
