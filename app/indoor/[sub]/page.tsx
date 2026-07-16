import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import FilteredProductGrid from '@/components/catalogue/FilteredProductGrid'
import categories from '@/data/categories'
import { getBySubCategory } from '@/data/products'

interface Props { params: { sub: string } }

export async function generateStaticParams() {
  const indoor = categories.find(c => c.slug === 'indoor')
  return indoor?.subCategories?.map(s => ({ sub: s.slug })) ?? []
}

export default function IndoorSubPage({ params }: Props) {
  const indoor = categories.find(c => c.slug === 'indoor')
  const sub = indoor?.subCategories?.find(s => s.slug === params.sub)
  if (!sub) notFound()
  const products = getBySubCategory(params.sub)
  return (
    <main className="min-h-screen bg-obsidian">
      <section className="relative h-[45vh] md:h-[55vh] flex items-end">
        <Image src={sub.heroImage} alt={sub.label}
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
            text-[#F0EAE0]">{sub.label}</h1>
          <p className="font-jost text-[12px] text-[rgba(240,234,224,0.6)] mt-3 max-w-md leading-relaxed">
            {sub.description}
          </p>
        </div>
      </section>
      <FilteredProductGrid products={products} filters={sub.filters} />
    </main>
  )
}
