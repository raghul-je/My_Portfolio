import { useEffect, useState } from 'react'
import { navItems, projects, socials } from '../data'

export default function CommandPalette() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setOpen((v) => !v)
      }
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  if (!open) return null

  const live = projects.filter((p) => p.liveUrl)

  return (
    <div className="fixed inset-0 z-[80] grid place-items-start bg-black/50 pt-28" onClick={() => setOpen(false)}>
      <div className="glass mx-auto max-h-[70vh] w-[min(480px,92vw)] overflow-y-auto rounded-2xl p-3" onClick={(e) => e.stopPropagation()}>
        <p className="px-2 pb-2 font-mono text-[11px] text-white/40">Ctrl/⌘ K · jump</p>
        {[{ id: 'home', label: 'Home' }, ...navItems].map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={() => setOpen(false)}
            className="block rounded-lg px-3 py-2 text-sm hover:bg-white/10"
          >
            {item.label}
          </a>
        ))}
        <p className="mt-3 px-2 pb-1 font-mono text-[11px] text-white/40">Live sites</p>
        {live.map((p) => (
          <a
            key={p.id}
            href={p.liveUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
            className="block rounded-lg px-3 py-2 text-sm hover:bg-white/10"
          >
            {p.title}
          </a>
        ))}
        <p className="mt-3 px-2 pb-1 font-mono text-[11px] text-white/40">Links</p>
        <a href={socials.github} target="_blank" rel="noreferrer" className="block rounded-lg px-3 py-2 text-sm hover:bg-white/10">
          GitHub
        </a>
        <a href={socials.linkedin} target="_blank" rel="noreferrer" className="block rounded-lg px-3 py-2 text-sm hover:bg-white/10">
          LinkedIn
        </a>
        <a href={socials.phone} className="block rounded-lg px-3 py-2 text-sm hover:bg-white/10">
          Call
        </a>
      </div>
    </div>
  )
}
