'use client'

import { useState } from 'react'
import Image from 'next/image'
import BackButton from '@/components/ui/BackButton'

const contactDetails = [
  { label: 'Rakesh Jain', value: '+91 94250 12129', href: 'tel:+919425012129' },
  { label: 'Tanya Jain', value: '+1 812 345 4823', href: 'tel:+18123454823' },
  { label: 'Email', value: 'vinsunbpl@gmail.com', href: 'mailto:vinsunbpl@gmail.com' },
]

const interests = [
  'Sofas & Sectionals',
  'Premium Sofas',
  'Beds & Headboards',
  'The Exclusive Edit',
  'Chaise Lounges',
  'General Enquiry',
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    const form = e.currentTarget
    const data = new FormData(form)
    try {
      const res = await fetch('https://formspree.io/f/mwvgpwgb', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) setSubmitted(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-obsidian">
      {/* Hero — slim, mostly text */}
      <section className="relative h-[40vh] flex items-end">
        <Image
          src="/hero/hero-doors.jpg"
          alt="Scott showroom entrance"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/60 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full">
          <div className="mb-6">
            <BackButton />
          </div>
          <p className="font-cinzel text-gold text-xs tracking-[0.4em] uppercase mb-4">
            India
          </p>
          <h1 className="font-cormorant text-5xl md:text-7xl font-light text-cream">
            Visit the Showroom
          </h1>
        </div>
      </section>

      {/* Two-column layout */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-16">
          {/* Left — contact details + map */}
          <div>
            <p className="font-cinzel text-gold text-xs tracking-[0.4em] uppercase mb-8">
              Find Us
            </p>
            <ul className="space-y-6 mb-12">
              {contactDetails.map(({ label, value, href }) => (
                <li key={label} className="flex gap-4">
                  <span className="w-1 h-1 rounded-full bg-gold mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-cinzel text-[10px] tracking-widest uppercase text-gold/70 mb-1">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="font-jost text-sm text-muted hover:text-cream transition-colors duration-300"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="font-jost text-sm text-muted">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — enquiry form */}
          <div>
            <p className="font-cinzel text-gold text-5xl md:text-6xl font-light tracking-[0.4em] uppercase mb-8">
              Send an Enquiry
            </p>

            {submitted ? (
              <div className="flex flex-col items-start gap-4 py-12">
                <span className="font-cormorant text-5xl text-gold">✓</span>
                <p className="font-cormorant text-3xl font-light text-cream">
                  We&apos;ll be in touch.
                </p>
                <p className="font-jost text-sm text-muted">
                  Our team will contact you within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label className="font-cinzel text-[10px] tracking-widest uppercase text-gold/70 block mb-2">
                    Name *
                  </label>
                  <input
                    name="name"
                    type="text"
                    required
                    className="w-full bg-[#111A14] border border-[rgba(200,169,110,0.2)] text-cream font-jost text-sm px-4 py-3 focus:border-[rgba(200,169,110,0.55)] focus:outline-none transition-colors duration-300 placeholder:text-muted/40"
                    placeholder="Your name"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="font-cinzel text-[10px] tracking-widest uppercase text-gold/70 block mb-2">
                    Phone *
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    required
                    className="w-full bg-[#111A14] border border-[rgba(200,169,110,0.2)] text-cream font-jost text-sm px-4 py-3 focus:border-[rgba(200,169,110,0.55)] focus:outline-none transition-colors duration-300 placeholder:text-muted/40"
                    placeholder="+91 98765 43210"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="font-cinzel text-[10px] tracking-widest uppercase text-gold/70 block mb-2">
                    Email *
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full bg-[#111A14] border border-[rgba(200,169,110,0.2)] text-cream font-jost text-sm px-4 py-3 focus:border-[rgba(200,169,110,0.55)] focus:outline-none transition-colors duration-300 placeholder:text-muted/40"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Interest */}
                <div>
                  <label className="font-cinzel text-[10px] tracking-widest uppercase text-gold/70 block mb-2">
                    I&apos;m interested in
                  </label>
                  <select
                    name="interest"
                    className="w-full bg-[#111A14] border border-[rgba(200,169,110,0.2)] text-cream font-jost text-sm px-4 py-3 focus:border-[rgba(200,169,110,0.55)] focus:outline-none transition-colors duration-300 appearance-none"
                  >
                    {interests.map((i) => (
                      <option key={i} value={i} className="bg-card">
                        {i}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="font-cinzel text-[10px] tracking-widest uppercase text-gold/70 block mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    className="w-full bg-[#111A14] border border-[rgba(200,169,110,0.2)] text-cream font-jost text-sm px-4 py-3 focus:border-[rgba(200,169,110,0.55)] focus:outline-none transition-colors duration-300 placeholder:text-muted/40 resize-none"
                    placeholder="Tell us about your project or the piece you have in mind."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gold text-obsidian font-cinzel text-xs tracking-widest uppercase py-4 hover:bg-gold/90 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Sending…' : 'Send Enquiry'}
                </button>

                <p className="font-jost text-xs text-muted/50 text-center">
                  We respond within one business day.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Showroom video section */}
      <section className="py-24 px-6 bg-card border-t border-gold/10">
        <div className="max-w-7xl mx-auto">
          <p className="font-cinzel text-gold text-xs tracking-[0.4em] uppercase text-center mb-4">
            Currently in the Showroom
          </p>
          <h2 className="font-cormorant text-4xl font-light text-cream text-center mb-6">
            See what&apos;s new
          </h2>
          <p className="font-jost text-sm text-muted text-center mb-12 max-w-md mx-auto leading-relaxed">
            Visit us to see our latest arrivals and pieces currently on display. New collections
            added regularly.
          </p>

          {/* Video placeholder — replace src with real showroom video */}
          <div className="relative aspect-video bg-card-deep border border-gold/20 flex items-center justify-center max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 border border-gold/40 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-gold text-2xl ml-1">▶</span>
              </div>
              <p className="font-cinzel text-cream text-xs tracking-widest uppercase">
                Showroom Video
              </p>
              <p className="font-jost text-xs text-muted mt-2">
                Coming soon — upload your showroom footage here
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
