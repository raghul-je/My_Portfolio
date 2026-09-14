import { motion } from 'framer-motion'
import { aboutCopy, education, orbitSkills } from '../data'
import portrait from '../assets/raghul.jpg'
import useMq from '../hooks/useMq'

export default function About() {
  const desktop = useMq('(min-width: 768px)')
  const orbit = desktop ? 140 : 108

  return (
    <section id="about" className="relative overflow-x-clip px-5 py-16 sm:px-6 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(124,108,255,0.12),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(76,230,255,0.1),transparent_35%)]" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        <div>
          <p className="font-mono text-xs text-cyan-300">{'</AboutMe>'}</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl md:text-6xl">
            {aboutCopy.heading}
          </h2>
          <div className="mt-5 max-w-xl space-y-3 text-white/65">
            {aboutCopy.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          <div className="mt-6 grid grid-cols-3 gap-3">
            {aboutCopy.stats.map((s) => (
              <div key={s.label} className="glass rounded-2xl px-3 py-4 text-center">
                <div className="font-display text-2xl font-extrabold text-cyan-300">{s.value}</div>
                <div className="mt-1 text-[11px] text-white/50">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="mt-8 space-y-4">
            {education.map((ed, i) => (
              <motion.div
                key={ed.degree}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: i * 0.08 }}
                className="glass rounded-2xl p-4"
              >
                <div className="flex justify-between gap-4 text-sm text-white/50">
                  <span>{ed.period}</span>
                  {ed.grade ? <span>{ed.grade}</span> : null}
                </div>
                <div className="mt-1 font-semibold">{ed.degree}</div>
                <div className="text-sm text-white/55">{ed.institution}</div>
                {ed.note ? <div className="mt-1 text-xs text-cyan-200/70">{ed.note}</div> : null}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  className="mt-3 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500"
                />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto grid aspect-square w-[min(100%,300px)] place-items-center sm:w-[360px]">
          <svg className="absolute inset-6" viewBox="0 0 200 200">
            <motion.circle
              cx="100"
              cy="100"
              r="88"
              fill="none"
              stroke="rgba(76,230,255,0.35)"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4 }}
            />
          </svg>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 22, ease: 'linear', repeat: Infinity }}
            className="absolute inset-0"
          >
            {orbitSkills.map((s, i) => {
              const deg = (360 / orbitSkills.length) * i
              return (
                <div
                  key={s.label}
                  className="absolute left-1/2 top-1/2"
                  style={{ transform: `rotate(${deg}deg) translate(${orbit}px) rotate(-${deg}deg)` }}
                >
                  <motion.span
                    whileHover={{ scale: 1.15 }}
                    className="grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full text-xs font-bold text-black"
                    style={{ background: s.color }}
                  >
                    {s.label}
                  </motion.span>
                </div>
              )
            })}
          </motion.div>
          <div className="relative h-32 w-32 overflow-hidden rounded-full ring-2 ring-cyan-300/40">
            <motion.div
              animate={{ scale: [1, 1.16, 1], opacity: [0.4, 0.15, 0.4] }}
              transition={{ duration: 2.4, repeat: Infinity }}
              className="absolute inset-0 rounded-full ring-2 ring-cyan-300/40"
            />
            <img src={portrait} alt="Raghul JE" className="h-full w-full object-cover object-[50%_18%]" />
          </div>
        </div>
      </div>
    </section>
  )
}
