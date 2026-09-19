import { useEffect, useRef } from 'react'

const LINK_DIST = 150
const REPULSE = 160
const BASE_SPEED = 0.38
const MAX_SPEED = 0.85
const MAX_COUNT = 80
const CLICK_PUSH = 2

function makeNode(w, h, x, y) {
  const angle = Math.random() * Math.PI * 2
  const speed = 0.18 + Math.random() * BASE_SPEED
  return {
    x: x ?? Math.random() * w,
    y: y ?? Math.random() * h,
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed,
    r: 1 + Math.random() * 2.2,
  }
}

export default function Particles() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d', { alpha: true })
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const mouse = { x: -9999, y: -9999 }
    let w = 0
    let h = 0
    let nodes = []

    const targetCount = () => {
      if (w < 768) return 28
      return Math.min(MAX_COUNT, Math.max(50, Math.floor((w * h) / 28000)))
    }

    const resize = () => {
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = Math.floor(w * dpr)
      canvas.height = Math.floor(h * dpr)
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const target = targetCount()
      if (nodes.length === 0) {
        nodes = Array.from({ length: target }, () => makeNode(w, h))
      } else if (nodes.length < target) {
        while (nodes.length < target) nodes.push(makeNode(w, h))
      } else if (nodes.length > target) {
        nodes.length = target
      }
    }

    const onMove = (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }
    const onLeave = () => {
      mouse.x = -9999
      mouse.y = -9999
    }
    const onClick = (e) => {
      for (let i = 0; i < CLICK_PUSH; i += 1) {
        nodes.push(makeNode(w, h, e.clientX + (Math.random() - 0.5) * 24, e.clientY + (Math.random() - 0.5) * 24))
      }
      if (nodes.length > MAX_COUNT) nodes.splice(0, nodes.length - MAX_COUNT)
    }
    const onWheel = (e) => {
      const impulse = Math.max(-0.7, Math.min(0.7, e.deltaY * 0.004))
      nodes.forEach((n) => {
        n.vy += impulse * (0.2 + Math.random() * 0.35)
        n.vx += (Math.random() - 0.5) * Math.abs(impulse) * 0.35
      })
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mouseleave', onLeave)
    window.addEventListener('click', onClick)
    window.addEventListener('wheel', onWheel, { passive: true })
    window.addEventListener('resize', resize)
    resize()

    let raf
    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      const dark = document.documentElement.getAttribute('data-theme') !== 'light'
      const link2 = LINK_DIST * LINK_DIST

      for (let i = 0; i < nodes.length; i += 1) {
        const n = nodes[i]
        n.x += n.vx
        n.y += n.vy

        if (n.x < 0 || n.x > w) n.vx *= -1
        if (n.y < 0 || n.y > h) n.vy *= -1
        n.x = Math.max(0, Math.min(w, n.x))
        n.y = Math.max(0, Math.min(h, n.y))

        const dx = n.x - mouse.x
        const dy = n.y - mouse.y
        const dist = Math.hypot(dx, dy)
        if (dist > 0 && dist < REPULSE) {
          const force = ((REPULSE - dist) / REPULSE) * 1.4
          n.vx += (dx / dist) * force * 0.06
          n.vy += (dy / dist) * force * 0.06
        }

        const spd = Math.hypot(n.vx, n.vy)
        if (spd > MAX_SPEED) {
          n.vx = (n.vx / spd) * MAX_SPEED
          n.vy = (n.vy / spd) * MAX_SPEED
        }
      }

      ctx.lineWidth = 1
      ctx.lineCap = 'round'
      for (let i = 0; i < nodes.length; i += 1) {
        const a = nodes[i]
        for (let j = i + 1; j < nodes.length; j += 1) {
          const b = nodes[j]
          const d2 = (a.x - b.x) ** 2 + (a.y - b.y) ** 2
          if (d2 >= link2) continue
          const fade = 1 - Math.sqrt(d2) / LINK_DIST
          ctx.beginPath()
          ctx.strokeStyle = dark
            ? `rgba(210, 220, 255, ${0.16 * fade})`
            : `rgba(0, 0, 0, ${0.18 + 0.42 * fade})`
          ctx.moveTo(a.x, a.y)
          ctx.lineTo(b.x, b.y)
          ctx.stroke()
        }
      }

      for (let i = 0; i < nodes.length; i += 1) {
        const n = nodes[i]
        ctx.beginPath()
        ctx.fillStyle = dark ? 'rgba(255,255,255,0.28)' : 'rgba(0,0,0,0.55)'
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fill()
      }

      raf = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseleave', onLeave)
      window.removeEventListener('click', onClick)
      window.removeEventListener('wheel', onWheel)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={ref} className="pointer-events-none fixed inset-0 z-0" aria-hidden="true" />
}
