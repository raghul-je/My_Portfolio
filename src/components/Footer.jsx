import { motion } from 'framer-motion'
import { profile, socials } from '../data'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden px-6 pb-10 pt-20">
      <div className="blob absolute bottom-0 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-[#8000ff]/40" />
      <div className="relative overflow-visible px-2">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="animate-gradient bg-gradient-to-r from-cyan-300 via-violet-400 to-emerald-300 bg-clip-text py-3 text-center font-display text-[clamp(40px,10vw,120px)] font-extrabold leading-[1.15] text-transparent"
        >
          {profile.name}
        </motion.h2>
        <div className="mt-5 flex justify-center gap-5 text-sm text-white/55">
          <a href={socials.github} target="_blank" rel="noreferrer" className="hover:text-cyan-300">
            GitHub
          </a>
          <a href={socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-cyan-300">
            LinkedIn
          </a>
          <a href={socials.phone} className="hover:text-cyan-300">
            {profile.phoneLabel}
          </a>
        </div>
        <p className="mt-4 text-center font-mono text-xs text-white/40">
          Custom products. React · Node · Express · MySQL.
        </p>
      </div>
    </footer>
  )
}
