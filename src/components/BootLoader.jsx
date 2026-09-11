import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

const LINES = [
  { prefix: '$', text: 'whoami' },
  { prefix: '', text: 'Raghul JE — software engineer' },
  { prefix: '$', text: 'npm run dev' },
  { prefix: '', text: 'react · node · express · mysql' },
  { prefix: '', text: '11 custom apps  ·  lint ok  ·  ready' },
  { prefix: '', text: 'localhost:5200 — final_raghul_portfolio' },
]

export default function BootLoader({ onDone }) {
  const overlayRef = useRef(null)
  const lineRefs = useRef([])
  const finished = useRef(false)

  const finish = () => {
    if (finished.current) return
    finished.current = true
    const overlay = overlayRef.current
    if (!overlay) {
      onDone?.()
      return
    }
    gsap.to(overlay, {
      xPercent: 120,
      duration: 0.7,
      ease: 'power4.inOut',
      onComplete: () => onDone?.(),
    })
  }

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      onDone?.()
      return undefined
    }

    const tweens = []
    LINES.forEach((line, i) => {
      const el = lineRefs.current[i]
      if (!el) return
      const obj = { i: 0 }
      tweens.push(
        gsap.to(obj, {
          i: line.text.length,
          duration: Math.max(0.25, line.text.length * 0.028),
          delay: 0.35 + i * 0.55,
          ease: 'none',
          onUpdate() {
            el.textContent = line.text.slice(0, Math.floor(obj.i))
          },
        }),
      )
    })

    const exitTimer = window.setTimeout(finish, 4200)
    return () => {
      tweens.forEach((t) => t.kill())
      window.clearTimeout(exitTimer)
    }
  }, [onDone])

  return (
    <div ref={overlayRef} className="fixed inset-0 z-[9998] bg-[#05050a] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none mix-blend-screen crt-scan" />
      <div className="absolute inset-0 grid place-items-center px-4">
        <div className="w-[min(720px,92vw)] glass rounded-xl p-5 font-mono text-[13px] leading-7 shadow-[0_0_70px_rgba(76,230,255,0.12)]">
          <div className="text-cyan-300/90">~/raghul-je</div>
          {LINES.map((line, i) => (
            <div key={line.text} className={i === LINES.length - 1 ? 'text-cyan-300' : 'text-white/80'}>
              {line.prefix ? <span className="text-emerald-400">{line.prefix} </span> : null}
              <span
                ref={(el) => {
                  lineRefs.current[i] = el
                }}
              />
            </div>
          ))}
        </div>
      </div>
      <button
        type="button"
        onClick={finish}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-xs text-white/50 underline"
      >
        skip intro
      </button>
    </div>
  )
}
