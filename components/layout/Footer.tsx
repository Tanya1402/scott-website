import Link from 'next/link'
import Image from 'next/image'

const COLLECTIONS = [
  { label: 'Indoor', href: '/indoor' },
  { label: 'Outdoor', href: '/outdoor' },
  { label: 'The Exclusive Edit', href: '/exclusive' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0A100C] border-t border-[rgba(200,169,110,0.12)] pt-16 pb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-7xl mx-auto px-6">
        <div className="pb-8 md:pb-0">
          <Image
            src="/logo-original-transparent.png"
            alt="Scott"
            width={543}
            height={786}
            className="h-20 w-auto mb-4"
          />
          <p className="font-cormorant italic text-[rgba(240,234,224,0.4)] text-[14px]">
            Innovation that Inspires,
          </p>
          <p className="font-cormorant italic text-[rgba(240,234,224,0.4)] text-[14px] mb-6">
            Quality that Endures.
          </p>
          <p className="font-jost text-[11px] text-[rgba(240,234,224,0.4)] tracking-wide">
            India
          </p>
        </div>

        <div className="pb-8 md:pb-0">
          <p className="font-cinzel text-[9px] tracking-[0.35em] uppercase text-[#C8A96E]/50 mb-4">
            Collections
          </p>
          {COLLECTIONS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block mb-3 font-jost text-[11px] text-[rgba(240,234,224,0.45)] hover:text-[rgba(240,234,224,0.8)] transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="pb-8 md:pb-0">
          <p className="font-cinzel text-[9px] tracking-[0.35em] uppercase text-[#C8A96E]/50 mb-4">
            Visit
          </p>
          <a
            href="tel:+919425012129"
            className="block mb-3 font-jost text-[11px] text-[#C8A96E]/65 hover:text-[#C8A96E] transition-colors duration-300"
          >
            +91 94250 12129
          </a>
          <a
            href="tel:+18123454823"
            className="block mb-3 font-jost text-[11px] text-[#C8A96E]/65 hover:text-[#C8A96E] transition-colors duration-300"
          >
            +1 812 345 4823
          </a>
          <a
            href="mailto:vinsunbpl@gmail.com"
            className="block font-jost text-[11px] text-[rgba(240,234,224,0.4)] hover:text-[rgba(240,234,224,0.8)] transition-colors duration-300"
          >
            vinsunbpl@gmail.com
          </a>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-[rgba(200,169,110,0.07)] max-w-7xl mx-auto px-6 flex justify-between text-[9px] font-jost text-[rgba(200,169,110,0.22)] tracking-[0.08em]">
        <p>© 2025 Scott Furniture. Crafted in India.</p>
        <p>Enquire: vinsunbpl@gmail.com</p>
      </div>
    </footer>
  )
}
