import { useEffect, useRef } from 'react'

const COLORS = [
  '#ff7a18', '#ff6b2c', '#ff5c4d', '#ff4d6d', '#ff3e8c',
  '#f031a6', '#d62ac0', '#b624d6', '#9a2be2', '#7c3aed',
  '#6366f1', '#4f7cf0', '#3b8ef0', '#22a6f0', '#06b6d4',
  '#14c9c0', '#22d3a8', '#34e08c', '#4ce66a', '#4ce6ff',
]

export default function CursorTrail() {
  const dots = useRef([])
  const glow = useRef(null)
  const core = useRef(null)
  const pos = useRef({ x: 0, y: 0, gx: 0, gy: 0 })
  const chain = useRef(Array.from({ length: 20 }, () => ({ x: 0, y: 0 })))

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return
    const onMove = (e) => {
      pos.current.x = e.clientX
      pos.current.y = e.clientY
    }
    window.addEventListener('mousemove', onMove, { passive: true })

    let raf
    const tick = () => {
      const p = pos.current
      p.gx += (p.x - p.gx) * 0.16
      p.gy += (p.y - p.gy) * 0.16
      if (core.current) core.current.style.transform = `translate(${p.x - 9}px, ${p.y - 9}px)`
      if (glow.current) glow.current.style.transform = `translate(${p.gx - 210}px, ${p.gy - 210}px)`

      let x = p.x
      let y = p.y
      chain.current.forEach((c, i) => {
        c.x += (x - c.x) * 0.38
        c.y += (y - c.y) * 0.38
        const el = dots.current[i]
        if (el) {
          const s = 1 - i * 0.038
          el.style.transform = `translate(${c.x - 8}px, ${c.y - 8}px) scale(${s})`
        }
        x = c.x
        y = c.y
      })
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <div className="hidden md:block" aria-hidden="true">
      <div ref={glow} className="cursor-glow" />
      <div ref={core} className="cursor-core" />
      {COLORS.map((c, i) => (
        <div
          key={c}
          ref={(el) => {
            dots.current[i] = el
          }}
          className="trail-dot"
          style={{ background: c, opacity: 0.85 - i * 0.03 }}
        />
      ))}
    </div>
  )
}
