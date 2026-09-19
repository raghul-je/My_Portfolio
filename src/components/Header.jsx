import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import { navItems, profile } from '../data'
import useTheme from '../hooks/useTheme'

export default function Header() {
  const { theme, toggle } = useTheme()
  const [active, setActive] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const ids = ['home', ...navItems.map((n) => n.id)]
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean)
    const io = new IntersectionObserver(
      (entries) => {
        const vis = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (vis?.target?.id) setActive(vis.target.id)
      },
      { threshold: [0.2, 0.45, 0.7], rootMargin: '-20% 0px -45% 0px' },
    )
    els.forEach((el) => io.observe(el))
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      io.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <header className="fixed top-4 inset-x-0 z-50 flex justify-center px-4">
      <nav
        className={`site-nav glass flex items-center gap-2 rounded-2xl px-3 py-2 transition-all ${
          scrolled ? 'border-white/20 shadow-lg shadow-cyan-500/5' : ''
        }`}
      >
        <a href="#home" className="font-mono text-[11px] text-cyan-300 px-2">
          {'{'} {profile.first} {'}'}
        </a>
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="relative px-3 py-1.5 text-sm text-white/70 hover:text-white"
            >
              {active === item.id && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-lg bg-white/10"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative">{item.label}</span>
            </a>
          ))}
        </div>
        <button
          type="button"
          className="theme-toggle grid h-8 w-8 place-items-center rounded-lg hover:bg-white/10"
          onClick={toggle}
          aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
        >
          {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
        </button>
        <button
          type="button"
          className="md:hidden px-3 py-1 text-sm"
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>
      </nav>
      {open && (
        <div className="site-nav md:hidden absolute top-16 left-1/2 z-50 w-[min(92vw,20rem)] -translate-x-1/2 glass rounded-xl p-3 flex flex-col gap-1">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="px-3 py-2 text-sm"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
