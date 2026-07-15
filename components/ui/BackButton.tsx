import Link from 'next/link'

export default function BackButton() {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-2 font-jost text-xs
        text-muted hover:text-cream transition-colors duration-300
        tracking-widest uppercase group"
    >
      <span className="group-hover:-translate-x-1 transition-transform
        duration-300 inline-block">←</span>
      <span>Back</span>
    </Link>
  )
}
