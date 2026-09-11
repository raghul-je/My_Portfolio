import { motion, useScroll, useTransform } from 'framer-motion'
import { Github, Linkedin, Phone } from 'lucide-react'
import { profile, roles, socials } from '../data'
import useMagnetic from '../hooks/useMagnetic'
import TypeCycle from './TypeCycle'
import portrait from '../assets/raghul.jpg'

export default function Hero() {
  const { scrollY } = useScroll()
  const yGrid = useTransform(scrollY, [0, 600], [0, 140])
  const yText = useTransform(scrollY, [0, 600], [0, -80])
  const opacity = useTransform(scrollY, [0, 420], [1, 0])
  const cta = useMagnetic(0.32)
  const resume = useMagnetic(0.26)

  const firstLetters = profile.first.split('')
  const lastLetters = profile.last.split('')

  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden">
      <motion.div style={{ y: yGrid }} className="absolute inset-0 hero-grid opacity-60" />
      <div className="blob absolute -top-24 -left-10 h-[420px] w-[420px] rounded-full bg-[#8000ff]/50" />
      <div className="blob absolute top-32 right-0 h-[380px] w-[380px] rounded-full bg-cyan-400/25 [animation-delay:1.4s]" />
      <div className="blob absolute bottom-0 left-1/3 h-[280px] w-[280px] rounded-full bg-[#0ff4a4]/20 [animation-delay:.7s]" />

      <motion.div
        style={{ y: yText, opacity }}
        className="relative z-10 mx-auto grid min-h-[100svh] max-w-6xl items-center gap-10 px-6 pt-24 pb-16 lg:grid-cols-[1.1fr_0.9fr]"
      >
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-mono text-sm text-cyan-300/90"
          >
            Software Engineer · {profile.company}
          </motion.p>

          <h1 className="mt-4 flex flex-wrap items-end gap-x-[0.22em] font-display text-[clamp(44px,8.4vw,104px)] font-extrabold leading-[1.08] tracking-tight">
            <span className="inline-flex whitespace-nowrap">
              {firstLetters.map((ch, i) => (
                <span key={`f-${ch}-${i}`} className="jello inline-block" style={{ animationDelay: `${i * 40}ms` }}>
                  {ch}
                </span>
              ))}
            </span>
            <span className="inline-flex whitespace-nowrap">
              {lastLetters.map((ch, i) => (
                <span
                  key={`l-${ch}-${i}`}
                  className="jello inline-block"
                  style={{ animationDelay: `${(firstLetters.length + 1 + i) * 40}ms` }}
                >
                  {ch}
                </span>
              ))}
            </span>
          </h1>

          <p className="mt-6 min-h-[2.4em] font-display text-2xl font-semibold text-cyan-300 md:text-4xl">
            <TypeCycle words={roles} />
          </p>
          <p className="mt-3 text-lg font-medium text-white/80 md:text-2xl">
            Turning ideas into reality through code
          </p>
          <p className="mt-4 max-w-xl text-white/55">{profile.about}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {profile.availability.map((item) => (
              <span key={item} className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/70">
                {item}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              ref={cta.ref}
              onMouseMove={cta.onMove}
              onMouseLeave={cta.onLeave}
              className="rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-6 py-3 text-sm font-semibold text-black"
            >
              See the work
            </a>
            <a
              href="#contact"
              ref={resume.ref}
              onMouseMove={resume.onMove}
              onMouseLeave={resume.onLeave}
              className="rounded-full border border-white/20 px-6 py-3 text-sm text-white/80 transition hover:border-cyan-300/50 hover:text-white"
            >
              Let’s talk
            </a>
            <div className="flex gap-3 pl-2">
              {[
                { href: socials.github, icon: Github, label: 'GitHub' },
                { href: socials.linkedin, icon: Linkedin, label: 'LinkedIn' },
                { href: socials.phone, icon: Phone, label: 'Call' },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                    aria-label={item.label}
                    whileHover={{ y: -8 }}
                    whileTap={{ scale: 0.88 }}
                    className="text-white/60 hover:text-cyan-300"
                  >
                    <Icon size={22} />
                  </motion.a>
                )
              })}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto grid place-items-center"
        >
          <div className="absolute h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl md:h-80 md:w-80" />
          <div className="orbit-ball absolute -right-2 bottom-8 h-16 w-16 rounded-full bg-cyan-400/80 md:h-20 md:w-20" />
          <div className="absolute -left-4 top-6 h-14 w-14 rounded-full bg-violet-500/70 [animation:breath_7s_ease-in-out_infinite]" />
          <motion.div
            whileHover={{ scale: 1.04 }}
            transition={{ type: 'spring', stiffness: 260, damping: 18 }}
            className="relative h-64 w-64 overflow-hidden rounded-full border-[5px] border-cyan-300/80 shadow-[0_0_40px_rgba(76,230,255,0.28)] md:h-80 md:w-80"
          >
            <img
              src={portrait}
              alt="Raghul JE"
              className="h-full w-full object-cover object-[50%_18%]"
            />
          </motion.div>
        </motion.div>

        <a href="#about" className="mt-4 inline-flex w-fit flex-col items-center text-white/40 lg:col-span-2">
          <span className="scroll-indicator grid h-10 w-6 place-items-start justify-center rounded-full border border-white/20 pt-1">
            <span className="scroll-dot mx-auto mt-1 h-2 w-0.5 animate-bounce rounded-full bg-cyan-300" />
          </span>
          <span className="mt-2 font-mono text-[10px] tracking-[0.3em]">SCROLL</span>
        </a>
      </motion.div>
    </section>
  )
}
