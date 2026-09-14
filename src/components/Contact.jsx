import { motion } from 'framer-motion'
import { Github, Linkedin, Phone } from 'lucide-react'
import { profile, socials } from '../data'

const links = [
  { label: 'Call', href: socials.phone, detail: profile.phoneLabel, icon: Phone },
  { label: 'LinkedIn', href: socials.linkedin, detail: 'raghul-je', icon: Linkedin },
  { label: 'GitHub', href: socials.github, detail: 'Still-not-found', icon: Github },
]

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-x-clip px-5 py-16 sm:px-6 md:py-28">
      <div className="blob absolute -bottom-20 right-0 h-80 w-80 rounded-full bg-violet-600/30" />
      <div className="relative mx-auto max-w-5xl">
        <p className="font-mono text-xs text-cyan-300">{'</GetInTouch>'}</p>
        <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl md:text-6xl">
          Open to work.{' '}
          <span className="animate-gradient bg-gradient-to-r from-cyan-300 via-violet-400 to-emerald-300 bg-clip-text text-transparent">
            Let’s build.
          </span>
        </h2>
        <p className="mt-4 max-w-xl text-white/55">
          {profile.location} · {profile.company}. Full-time, freelance, or remote — if you need a software engineer
          who ships React + Node + Express + MySQL products from the process up, say hello.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {links.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ y: -4 }}
                className="glass block rounded-3xl p-6"
              >
                <Icon size={18} className="text-cyan-300" />
                <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.2em] text-white/40">{item.label}</p>
                <p className="mt-2 font-display text-2xl font-semibold">{item.detail}</p>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
