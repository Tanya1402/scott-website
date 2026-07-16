import Link from 'next/link'

export default function BackButton() {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-2 font-jost text-[11px]
        text-[rgba(240,234,224,0.5)] hover:text-[#C8A96E] transition-colors duration-300
        tracking-[0.2em] uppercase group"
    >
      <span className="group-hover:-translate-x-1 transition-transform
        duration-300 inline-block">←</span>
      <span>Back</span>
    </Link>
  )
}
