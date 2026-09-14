import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { moreWork, projects } from '../data'
import TiltCard from './TiltCard'

export default function Projects() {
  return (
    <section id="projects" className="relative px-5 py-16 sm:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs text-cyan-300">{'</SelectedWork>'}</p>
        <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl md:text-6xl">Shipped products.</h2>
        <p className="mt-4 max-w-xl text-sm text-white/50">
          Custom React + Node + Express + MySQL apps I built — plus the live brand sites. Internal tools are case
          studies, not Kissflow skins.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-5 md:mt-12 md:grid-cols-2 md:gap-6">
          {projects.map((p, i) => (
            <TiltCard
              key={p.id}
              className="h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05, margin: '80px 0px' }}
              transition={{ duration: 0.45, delay: Math.min(i, 6) * 0.04 }}
            >
              <article className="glass h-full overflow-hidden rounded-3xl transition-colors duration-300 group-hover:bg-white/[0.08]">
                <div className="relative h-24 sm:h-32" style={{ background: `linear-gradient(135deg, ${p.from}, ${p.to})` }}>
                  <span className="absolute right-4 top-4 rounded-full bg-black/40 px-3 py-1 font-mono text-[11px] uppercase tracking-wider">
                    {p.status}
                  </span>
                </div>
                <div className="p-5 sm:p-6">
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/45">{p.category}</p>
                  <h3 className="mt-2 font-display text-xl font-bold sm:text-2xl">{p.title}</h3>
                  <p className="mt-3 text-sm text-white/60">{p.description}</p>
                  <ul className="mt-4 space-y-1 text-sm text-white/50">
                    {p.features.map((f) => (
                      <li key={f}>→ {f}</li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.technologies.map((t) => (
                      <span
                        key={t}
                        className="tech-tag rounded-full border border-white/10 px-3 py-1 text-xs text-cyan-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  {p.liveUrl ? (
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-flex items-center gap-1 text-sm text-cyan-300"
                    >
                      Open live site <ArrowUpRight size={16} />
                    </a>
                  ) : (
                    <p className="mt-6 text-sm text-white/35">Internal — no public URL</p>
                  )}
                </div>
              </article>
            </TiltCard>
          ))}
        </div>
        <div className="mt-10">
          <p className="font-mono text-xs text-white/40">Also shipped</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {moreWork.map((item) => (
              <span key={item} className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/60">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
