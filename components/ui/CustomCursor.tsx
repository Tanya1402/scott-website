'use client'

import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const [isTouch, setIsTouch] = useState(false)
  const [dot, setDot] = useState({ x: 0, y: 0 })
  const [ring, setRing] = useState({ x: 0, y: 0 })
  const mouse = useRef({ x: 0, y: 0 })
  const rafRef = useRef<number>()

  useEffect(() => {
    if (navigator.maxTouchPoints > 0) {
      setIsTouch(true)
      return
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY }
      setDot({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)

    let rx = 0
    let ry = 0
    const animate = () => {
      rx += (mouse.current.x - rx) * 0.12
      ry += (mouse.current.y - ry) * 0.12
      setRing({ x: rx, y: ry })
      rafRef.current = requestAnimationFrame(animate)
    }
    rafRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  if (isTouch) return null

  return (
    <>
      <style>{`* { cursor: none !important; }`}</style>
      <div
        className="fixed top-0 left-0 w-2 h-2 bg-gold rounded-full pointer-events-none z-[9999]"
        style={{ transform: `translate(${dot.x - 4}px, ${dot.y - 4}px)` }}
      />
      <div
        className="fixed top-0 left-0 w-8 h-8 border border-gold/60 rounded-full pointer-events-none z-[9998]"
        style={{ transform: `translate(${ring.x - 16}px, ${ring.y - 16}px)` }}
      />
    </>
  )
}
