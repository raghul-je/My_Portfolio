import { useRef } from 'react'

export default function useMagnetic(strength = 0.28) {
  const ref = useRef(null)

  const onMove = (e) => {
    const el = ref.current
    if (!el || window.matchMedia('(pointer: coarse)').matches) return
    const r = el.getBoundingClientRect()
    const x = e.clientX - (r.left + r.width / 2)
    const y = e.clientY - (r.top + r.height / 2)
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`
  }

  const onLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.transform = 'translate(0, 0)'
    el.style.transition = 'transform 0.4s cubic-bezier(.2,.8,.2,1)'
    window.setTimeout(() => {
      if (el) el.style.transition = 'transform 0.12s ease'
    }, 400)
  }

  return { ref, onMove, onLeave }
}
