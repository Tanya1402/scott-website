import Image from 'next/image'
import Link from 'next/link'

const COLLECTIONS = [
  { label: 'Sofas', href: '/sofas' },
  { label: 'Premium Sofas', href: '/premium-sofas' },
  { label: 'Beds', href: '/beds' },
  { label: 'Exclusive', href: '/exclusive' },
  { label: 'Chaise', href: '/chaise' },
  { label: 'About Us', href: '/about' },
]

export default function Footer() {
  return (
    <footer className="bg-card-deep border-t border-gold/20 pt-16 pb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto px-6">
        <div>
          <Image
            src="/logo.png"
            alt="Scott Furniture"
            width={100}
            height={34}
            className="h-auto w-auto object-contain mb-4"
          />
          <p className="font-cormorant italic text-muted text-lg">
            Innovation that Inspires,
          </p>
          <p className="font-cormorant italic text-muted text-lg mb-6">
            Quality that Endures.
          </p>
          <p className="font-jost text-xs text-muted tracking-wide">
            Bhopal, Madhya Pradesh
          </p>
        </div>

        <div>
          <p className="font-cinzel text-xs tracking-widest text-gold uppercase mb-6">
            Collections
          </p>
          {COLLECTIONS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block mb-3 font-jost text-sm text-muted hover:text-cream transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div>
          <p className="font-cinzel text-xs tracking-widest text-gold uppercase mb-6">
            Visit
          </p>
          <p className="font-jost text-sm text-muted mb-3">
            36, BHEL Ancillary Industrial Estate
          </p>
          <p className="font-jost text-sm text-muted mb-3">
            Habibganj, Bhopal M.P. 462024
          </p>
          <a
            href="tel:+919425012129"
            className="block mb-3 font-jost text-sm text-muted hover:text-gold transition-colors duration-300"
          >
            +91 94250 12129
          </a>
          <a
            href="tel:+919229229292"
            className="block mb-3 font-jost text-sm text-muted hover:text-gold transition-colors duration-300"
          >
            +91 92292 29292
          </a>
          <a
            href="mailto:swoodsbpl@gmail.com"
            className="block font-jost text-sm text-muted hover:text-gold transition-colors duration-300"
          >
            swoodsbpl@gmail.com
          </a>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-gold/10 max-w-7xl mx-auto px-6 flex justify-between text-xs font-jost text-muted/50">
        <p>© 2025 Scott Furniture. Crafted in Bhopal.</p>
        <p>Enquire: swoodsbpl@gmail.com</p>
      </div>
    </footer>
  )
}
