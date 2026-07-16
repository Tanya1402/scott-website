import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import BackButton from '@/components/ui/BackButton'
import categories from '@/data/categories'

export const metadata: Metadata = {
  title: 'Outdoor Collection — Scott Furniture',
  description: 'Lounge furniture and dining chairs for open living.',
}

export default function OutdoorPage() {
  const outdoor = categories.find(c => c.slug === 'outdoor')!
  return (
    <main className="min-h-screen bg-obsidian">
      <section className="relative h-[55vh] flex items-end">
        <Image src={outdoor.heroImage} alt="Scott Outdoor Collection"
          fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t
          from-obsidian via-obsidian/40 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full">
          <BackButton />
          <div className="mt-6">
            <p className="font-cinzel text-[#C8A96E] text-[10px] tracking-[0.4em]
              uppercase mb-4 mt-2">The Scott Collection</p>
            <h1 className="font-cormorant text-6xl md:text-8xl font-light
              text-[#F0EAE0]">Outdoor</h1>
            <p className="font-jost text-[12px] text-[rgba(240,234,224,0.6)] mt-3 max-w-md leading-relaxed">
              {outdoor.description}
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4
            max-w-2xl mx-auto">
            {outdoor.subCategories?.map((sub) => (
              <Link key={sub.slug} href={`/outdoor/${sub.slug}`}
                className="group relative block overflow-hidden
                  aspect-[3/4] border border-[rgba(200,169,110,0.08)]
                  hover:border-[rgba(200,169,110,0.35)] transition-all duration-500">
                <Image src={sub.heroImage} alt={sub.label} fill
                  className="object-cover transition-transform duration-700
                    group-hover:scale-[1.05]"
                  sizes="(max-width:640px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-gradient-to-t
                  from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="font-cinzel text-cream text-xs
                    tracking-widest uppercase group-hover:text-gold
                    transition-colors duration-300 mb-1">{sub.label}</p>
                  <p className="font-jost text-xs text-muted/70
                    leading-relaxed">{sub.description}</p>
                  <p className="font-jost text-xs text-gold/0
                    group-hover:text-gold/80 transition-all duration-500 mt-2">
                    Explore →
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 h-px bg-gold
                  w-0 group-hover:w-full transition-all duration-700" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
