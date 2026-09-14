import { motion } from 'framer-motion'
import { experience } from '../data'

export default function Experience() {
  return (
    <section id="experience" className="relative px-5 py-16 sm:px-6 md:py-28">
      <div className="mx-auto max-w-5xl">
        <p className="font-mono text-xs text-cyan-300">{'</Experience>'}</p>
        <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl md:text-6xl">{experience.headline}</h2>
        <div className="glass mt-10 rounded-3xl p-6">
          <div className="font-mono text-xs text-white/45">{experience.dates}</div>
          <h3 className="mt-1 text-2xl font-semibold">{experience.title}</h3>
          <p className="text-sm text-cyan-200/80">{experience.company}</p>
          <p className="mt-3 text-sm text-white/60">{experience.summary}</p>
        </div>
        <div className="relative mt-10 pl-6">
          <div className="absolute bottom-0 left-2 top-0 w-px bg-gradient-to-b from-cyan-400 via-violet-500 to-transparent" />
          {experience.chapters.map((job, i) => (
            <motion.article
              key={job.platform}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="relative mb-8 glass rounded-2xl p-6"
            >
              <span
                className="absolute -left-[23px] top-7 h-3 w-3 rounded-full ring-4 ring-[#07070c]"
                style={{ background: job.color }}
              />
              <div className="font-mono text-xs text-white/45">{job.when}</div>
              <h3 className="mt-1 text-xl font-semibold">{job.platform}</h3>
              <ul className="mt-3 space-y-2 text-sm text-white/60">
                {job.points.map((point) => (
                  <li key={point}>→ {point}</li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {job.tech.map((t) => (
                  <span key={t} className="tech-tag rounded-full bg-white/5 px-2.5 py-1 text-xs text-white/70">
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
