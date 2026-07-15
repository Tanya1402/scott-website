import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import BackButton from '@/components/ui/BackButton'
import TrustedBy from '@/components/sections/TrustedBy'
import Certifications from '@/components/sections/Certifications'

export const metadata: Metadata = {
  title: 'Our Story — Scott Furniture',
  description:
    'A design-led furniture manufacturer powered by German precision. Trusted by Hyatt, Airport Authority of India, and landmark institutions.',
}

const projects = [
  { name: 'Hyatt Regency', category: 'Luxury Hospitality' },
  { name: 'Airport Authority of India', category: 'Infrastructure' },
  { name: 'Shrewsbury School', category: 'Education' },
  { name: 'Wipro', category: 'Corporate' },
  { name: 'Holiday Inn', category: 'Hospitality' },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-obsidian">
      {/* Hero */}
      <section className="relative h-[70vh] flex items-end">
        <Image
          src="/hero/hero-exterior.jpg"
          alt="Scott Furniture"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/50 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 w-full">
          <div className="mb-6">
            <BackButton />
          </div>
          <p className="font-cinzel text-gold text-xs tracking-[0.4em] uppercase mb-6">
            Est. Bhopal, India
          </p>
          <h1 className="font-cormorant text-5xl md:text-7xl font-light text-cream leading-none">
            Our Story
          </h1>
        </div>
      </section>

      {/* German precision credential */}
      <section className="bg-card-deep py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="font-cormorant text-2xl md:text-3xl font-light text-cream italic leading-relaxed max-w-3xl mx-auto">
            &quot;A design-led furniture manufacturer powered by one of only five German precision
            systems worldwide.&quot;
          </p>
          <div className="mt-8 w-12 h-px bg-gold/40 mx-auto" />
          <p className="font-jost text-sm text-muted mt-6 max-w-xl mx-auto leading-relaxed">
            Trusted across airports, hospitals, luxury hotels, and landmark institutions. Every
            Scott piece is engineered to perform — and designed to endure.
          </p>
        </div>
      </section>

      {/* Brand story */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-16 items-start">
          <div>
            <p className="font-cinzel text-gold text-xs tracking-[0.4em] uppercase mb-6">
              The Philosophy
            </p>
            <h2 className="font-cormorant text-4xl font-light text-cream mb-8 leading-tight">
              Twenty-five years of craft.
              <br />
              Not a single compromise.
            </h2>
            <div className="space-y-6 font-jost text-sm text-muted leading-relaxed">
              <p>
                Founded in Bhopal, Scott has spent over two decades perfecting the relationship
                between craft and comfort. Every piece begins as a conversation — about how you
                live, what you value, and how a room should feel at the end of the day.
              </p>
              <p>
                Our furniture carries the weight of honest materials, precise construction, and
                the conviction that the objects you live with should be worth living with. Italian
                leathers. European bouclés. Hand-stitched detail. Not because it is fashionable —
                because it is correct.
              </p>
              <p>
                Each Scott piece is selected, not simply bought. It arrives in your home as an
                object of permanence.
              </p>
            </div>
            <div className="mt-10">
              <Link
                href="/contact"
                className="font-cinzel text-xs tracking-widest uppercase text-cream border-b border-gold/40 pb-1 hover:text-gold hover:border-gold transition-colors duration-300"
              >
                Visit the showroom →
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gold/10">
            {[
              {
                num: '25+',
                label: 'Years of craft',
                desc: 'Established in Bhopal, shaping interiors across central India.',
              },
              {
                num: '1,200+',
                label: 'Homes furnished',
                desc: 'From private residences to hotel suites and landmark institutions.',
              },
              {
                num: '80+',
                label: 'Designs in catalogue',
                desc: 'Italian leather sofas, European bouclé sectionals, precision beds.',
              },
              {
                num: '5',
                label: 'German systems worldwide',
                desc: 'One of only five manufacturers globally with this precision capability.',
              },
            ].map(({ num, label, desc }) => (
              <div key={label} className="bg-obsidian p-8">
                <p className="font-cormorant text-4xl text-gold mb-2">{num}</p>
                <p className="font-cinzel text-cream text-xs tracking-widest uppercase mb-2">
                  {label}
                </p>
                <p className="font-jost text-xs text-muted leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project highlights */}
      <section className="bg-card py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="font-cinzel text-gold text-xs tracking-[0.4em] uppercase text-center mb-4">
            Project Highlights
          </p>
          <h2 className="font-cormorant text-4xl font-light text-cream text-center mb-16">
            Trusted by India&apos;s finest institutions
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gold/10">
            {projects.map(({ name, category }) => (
              <div key={name} className="bg-card p-10">
                <p className="font-cinzel text-gold text-[10px] tracking-widest uppercase mb-3">
                  {category}
                </p>
                <p className="font-cormorant text-2xl font-light text-cream">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TrustedBy />

      <Certifications />

      {/* Full-bleed image with quote */}
      <section className="relative h-[50vh]">
        <Image src="/hero/hero-living.jpg" alt="Scott showroom" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/55 flex items-center justify-center px-6">
          <blockquote className="font-cormorant text-2xl md:text-4xl font-light text-cream text-center max-w-2xl italic leading-relaxed">
            &quot;Furniture is not purchased. It is chosen — and it remains, long after the moment
            of choosing.&quot;
          </blockquote>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-card py-16 md:py-24 px-6 text-center">
        <p className="font-cinzel text-gold text-xs tracking-[0.4em] uppercase mb-6">
          The Showroom
        </p>
        <h2 className="font-cormorant text-4xl font-light text-cream mb-4">
          Come and see for yourself.
        </h2>
        <p className="font-jost text-sm text-muted mb-10 max-w-sm mx-auto leading-relaxed">
          36, BHEL Ancillary Industrial Estate
          <br />
          Habibganj, Bhopal M.P. 462024
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="font-cinzel text-xs tracking-widest uppercase bg-gold text-obsidian px-10 py-4 hover:bg-gold/90 transition-colors duration-300"
          >
            Enquire Now
          </Link>
          <a
            href="https://maps.google.com/?q=36+BHEL+Ancillary+Industrial+Estate+Habibganj+Bhopal"
            target="_blank"
            rel="noopener noreferrer"
            className="font-cinzel text-xs tracking-widest uppercase border border-gold/60 text-cream px-10 py-4 hover:bg-gold/10 transition-colors duration-300"
          >
            Get Directions
          </a>
        </div>
      </section>
    </main>
  )
}
