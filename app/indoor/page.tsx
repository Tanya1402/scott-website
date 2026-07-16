import type { Metadata } from 'next'
import Image from 'next/image'
import BackButton from '@/components/ui/BackButton'
import CategoryTile from '@/components/catalogue/CategoryTile'
import categories from '@/data/categories'

export const metadata: Metadata = {
  title: 'Indoor Collection — Scott Furniture',
  description: 'Sofas, chairs, tables, beds, chaise and accessories.',
}

export default function IndoorPage() {
  const indoor = categories.find(c => c.slug === 'indoor')!
  return (
    <main className="min-h-screen bg-obsidian">
      <section className="relative h-[55vh] flex items-end">
        <Image src={indoor.heroImage} alt="Scott Indoor Collection"
          fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t
          from-obsidian via-obsidian/40 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full">
          <BackButton />
          <div className="mt-6">
            <p className="font-cinzel text-[#C8A96E] text-[10px] tracking-[0.4em]
              uppercase mb-4 mt-2">The Scott Collection</p>
            <h1 className="font-cormorant text-6xl md:text-8xl font-light
              text-[#F0EAE0]">Indoor</h1>
            <p className="font-jost text-[12px] text-[rgba(240,234,224,0.6)] mt-3 max-w-md leading-relaxed">
              {indoor.description}
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {indoor.subCategories?.map((sub) => (
              <CategoryTile key={sub.slug} href={`/indoor/${sub.slug}`} sub={sub} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
