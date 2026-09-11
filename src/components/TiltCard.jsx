import { useRef } from 'react'
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'framer-motion'

const SPRING = { stiffness: 200, damping: 20, mass: 0.5 }

export default function TiltCard({ children, className = '', ...motionProps }) {
  const ref = useRef(null)
  const pointerX = useMotionValue(0.5)
  const pointerY = useMotionValue(0.5)
  const rotateX = useSpring(useTransform(pointerY, [0, 1], [10, -10]), SPRING)
  const rotateY = useSpring(useTransform(pointerX, [0, 1], [-10, 10]), SPRING)
  const glare = useMotionTemplate`radial-gradient(420px circle at ${useTransform(pointerX, (v) => `${v * 100}%`)} ${useTransform(pointerY, (v) => `${v * 100}%`)}, rgba(255,255,255,0.16), transparent 42%)`

  const onMove = (e) => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    const r = ref.current?.getBoundingClientRect()
    if (!r) return
    pointerX.set((e.clientX - r.left) / r.width)
    pointerY.set((e.clientY - r.top) / r.height)
  }

  const onLeave = () => {
    pointerX.set(0.5)
    pointerY.set(0.5)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      whileHover={{
        y: -10,
        boxShadow: '0 22px 50px rgba(76, 230, 255, 0.12)',
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 800,
        transformStyle: 'preserve-3d',
      }}
      className={`group relative ${className}`}
      {...motionProps}
    >
      {children}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 mix-blend-screen transition-opacity duration-200 group-hover:opacity-100"
        style={{ background: glare }}
      />
    </motion.div>
  )
}
