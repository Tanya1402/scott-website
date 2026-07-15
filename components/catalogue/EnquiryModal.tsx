'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

interface EnquiryModalProps {
  isOpen: boolean
  onClose: () => void
  productName?: string
}

const inputClass =
  'bg-obsidian border border-gold/20 text-cream font-jost text-sm px-4 py-3 w-full focus:border-gold/60 focus:outline-none transition-colors duration-300 placeholder:text-muted/50'

export default function EnquiryModal({ isOpen, onClose, productName }: EnquiryModalProps) {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    try {
      await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
    } finally {
      setSubmitted(true)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/70 z-[100]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed inset-x-0 bottom-0 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 w-full max-w-full md:max-w-lg max-h-[85vh] overflow-y-auto bg-card border border-gold/30 p-8 z-[101] rounded-t-xl md:rounded-none"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 text-muted hover:text-cream transition-colors duration-300"
            >
              ✕
            </button>

            {!submitted ? (
              <>
                <p className="font-cormorant text-2xl text-cream mb-1">Request Information</p>
                {productName && (
                  <p className="italic font-jost text-sm text-gold mb-6">{productName}</p>
                )}

                <form
                  action="https://formspree.io/f/mwvgpwgb"
                  method="POST"
                  onSubmit={handleSubmit}
                >
                  <div className="mb-4">
                    <label className="font-jost text-xs text-muted tracking-widest uppercase mb-2 block">
                      Name
                    </label>
                    <input type="text" name="name" required className={inputClass} />
                  </div>

                  <div className="mb-4">
                    <label className="font-jost text-xs text-muted tracking-widest uppercase mb-2 block">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+91 98765 43210"
                      className={inputClass}
                    />
                  </div>

                  <div className="mb-4">
                    <label className="font-jost text-xs text-muted tracking-widest uppercase mb-2 block">
                      Email
                    </label>
                    <input type="email" name="email" required className={inputClass} />
                  </div>

                  <input type="hidden" name="product" value={productName || ''} />

                  <div className="mb-4">
                    <label className="font-jost text-xs text-muted tracking-widest uppercase mb-2 block">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      defaultValue={`I'm interested in ${productName || 'your collection'}.`}
                      className={inputClass}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gold text-obsidian font-jost text-xs tracking-widest uppercase py-4 hover:bg-gold/90 transition-colors duration-300"
                  >
                    Send Enquiry
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <p className="text-gold text-4xl mb-4">✓</p>
                <p className="font-cormorant text-2xl text-cream">We&apos;ll be in touch.</p>
                <p className="font-jost text-sm text-muted mt-2">
                  Our team will contact you within 24 hours.
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
