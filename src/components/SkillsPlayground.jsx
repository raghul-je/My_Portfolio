import { useEffect, useMemo, useRef, useState } from 'react'
import Matter from 'matter-js'
import { skillTiles, skills } from '../data'

function shade(hex, amt) {
  const t = hex.replace('#', '')
  const n = t.length === 3 ? t.split('').map((c) => c + c).join('') : t
  const num = parseInt(n, 16)
  const r = Math.max(Math.min(255, (num >> 16) + amt), 0)
  const g = Math.max(Math.min(255, ((num >> 8) & 255) + amt), 0)
  const b = Math.max(Math.min(255, (num & 255) + amt), 0)
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`
}

function seeded(seed) {
  let e = seed >>> 0
  return () => {
    e += 1831565813
    let t = Math.imul(e ^ (e >>> 15), 1 | e)
    t ^= t + Math.imul(t ^ (t >>> 7), 61 | t)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

function tileSize() {
  const w = typeof window === 'undefined' ? 1200 : window.innerWidth
  if (w < 480) return 75
  if (w < 640) return 85
  if (w < 768) return 105
  return 140
}

export default function SkillsPlayground() {
  const sceneRef = useRef(null)
  const [size, setSize] = useState(140)
  const rand = useMemo(() => seeded(13579), [])

  useEffect(() => {
    const onResize = () => setSize(tileSize())
    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    const scene = sceneRef.current
    if (!scene) return
    const tiles = Array.from(scene.querySelectorAll('.ps2d-tile'))
    const engine = Matter.Engine.create({ gravity: { x: 0, y: 1 } })
    const runner = Matter.Runner.create()
    const W = scene.clientWidth
    const H = scene.clientHeight
    const M = 80
    const wallOpts = { isStatic: true }
    Matter.World.add(engine.world, [
      Matter.Bodies.rectangle(W / 2, -M / 2, W + 200, M, wallOpts),
      Matter.Bodies.rectangle(W / 2, H + M / 2, W + 200, M, wallOpts),
      Matter.Bodies.rectangle(W + M / 2, H / 2, M, H * 3, wallOpts),
      Matter.Bodies.rectangle(-M / 2, H / 2, M, H * 3, wallOpts),
    ])

    const bodies = new Map()
    const constraints = new Map()
    const rnd = seeded(13579)

    tiles.forEach((el, i) => {
      const key = el.dataset.key
      const x = 80 + rnd() * Math.max(40, W - size - 80)
      const y = 40 + (i % 5) * (size * 0.35) + rnd() * 40
      const body = Matter.Bodies.rectangle(x, y, size, size, {
        chamfer: { radius: 12 },
        restitution: 0.55,
        friction: 0.12,
        density: 0.002,
      })
      Matter.Body.setAngle(body, (rnd() - 0.5) * 0.4)
      Matter.World.add(engine.world, body)
      bodies.set(key, body)
    })

    Matter.Runner.run(runner, engine)

    let raf
    const loop = () => {
      tiles.forEach((el) => {
        const body = bodies.get(el.dataset.key)
        if (!body) return
        const x = Math.round((body.position.x - el.offsetWidth / 2) * 100) / 100
        const y = Math.round((body.position.y - el.offsetHeight / 2) * 100) / 100
        el.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${body.angle}rad)`
      })
      raf = requestAnimationFrame(loop)
    }
    loop()

    const onDown = (e) => {
      const key = e.currentTarget.dataset.key
      const body = bodies.get(key)
      if (!body) return
      Matter.Body.setStatic(body, false)
      body.isSleeping = false
      Matter.Body.setVelocity(body, { x: 0, y: 0 })
      const rect = scene.getBoundingClientRect()
      const c = Matter.Constraint.create({
        pointA: {
          x: (e.clientX ?? e.touches?.[0]?.clientX) - rect.left,
          y: (e.clientY ?? e.touches?.[0]?.clientY) - rect.top,
        },
        bodyB: body,
        stiffness: 0.055,
        damping: 0.12,
        length: 0,
      })
      constraints.set(key, c)
      Matter.World.add(engine.world, c)
      e.currentTarget.setPointerCapture?.(e.pointerId)
    }
    const onMove = (e) => {
      const c = constraints.get(e.currentTarget.dataset.key)
      if (!c) return
      const rect = scene.getBoundingClientRect()
      c.pointA = {
        x: (e.clientX ?? e.touches?.[0]?.clientX) - rect.left,
        y: (e.clientY ?? e.touches?.[0]?.clientY) - rect.top,
      }
    }
    const onUp = (e) => {
      const key = e.currentTarget.dataset.key
      const c = constraints.get(key)
      const body = bodies.get(key)
      if (body) Matter.Body.setVelocity(body, { x: body.velocity.x * 0.75, y: body.velocity.y * 0.75 })
      if (c) {
        Matter.World.remove(engine.world, c)
        constraints.delete(key)
      }
    }

    tiles.forEach((el) => {
      el.addEventListener('pointerdown', onDown)
      el.addEventListener('pointermove', onMove)
      el.addEventListener('pointerup', onUp)
      el.addEventListener('pointercancel', onUp)
    })

    return () => {
      cancelAnimationFrame(raf)
      tiles.forEach((el) => {
        el.removeEventListener('pointerdown', onDown)
        el.removeEventListener('pointermove', onMove)
        el.removeEventListener('pointerup', onUp)
        el.removeEventListener('pointercancel', onUp)
      })
      Matter.Runner.stop(runner)
      Matter.World.clear(engine.world, false)
      Matter.Engine.clear(engine)
    }
  }, [size, rand])

  const font = size > 100 ? 13 : size > 85 ? 11 : 9

  return (
    <>
    <section id="skills" className="ps2d-root bg-[#070a0f]">
      <header className="ps2d-header">
        <p className="font-mono text-xs text-cyan-300">{'</Skills>'}</p>
        <h2 className="font-display text-[clamp(28px,5vw,56px)] font-extrabold">
          Skills <span className="text-cyan-300">Playground</span>
        </h2>
        <p className="mt-1 text-white/60">What I actually build with — React, Node, Express, MySQL. Drag them.</p>
      </header>
      <div ref={sceneRef} className="ps2d-scene">
        <div className="ps2d-layer">
          {skillTiles.map((item) => (
            <div
              key={item.key}
              data-key={item.key}
              className="ps2d-tile rounded-2xl"
              style={{ width: size, height: size, background: item.color, borderColor: shade(item.color, -18) }}
            >
              <div className="pointer-events-none flex h-[88%] w-[88%] flex-col items-center justify-between py-2">
                <div className="font-black text-black/30" style={{ fontSize: size * 0.28 }}>
                  {item.label.slice(0, 1)}
                </div>
                <div className="font-black text-white" style={{ fontSize: font }}>
                  {item.label}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="ps2d-floor-line" />
      </div>
    </section>
    <section className="px-6 pb-20">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
        {[
          { key: 'daily', title: 'Daily', note: 'What I reach for first' },
          { key: 'comfortable', title: 'Comfortable', note: 'Shipped, not tutorial' },
          { key: 'learning', title: 'Learning', note: 'Getting sharper on purpose' },
        ].map((tier) => (
          <div key={tier.key} className="glass rounded-2xl p-5">
            <p className="text-lg font-semibold">{tier.title}</p>
            <p className="mt-1 text-xs text-white/40">{tier.note}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {skills[tier.key].map((skill) => (
                <span key={skill} className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/70">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  )
}
