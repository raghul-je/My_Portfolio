import { useCallback, useState } from 'react'
import BootLoader from './components/BootLoader'
import CursorTrail from './components/CursorTrail'
import Particles from './components/Particles'
import Progress from './components/Progress'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import SkillsPlayground from './components/SkillsPlayground'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CommandPalette from './components/CommandPalette'

export default function App() {
  const [booting, setBooting] = useState(true)
  const endBoot = useCallback(() => setBooting(false), [])

  return (
    <div className="dot-grid relative min-h-screen bg-[#07070c] text-white">
      {booting && <BootLoader onDone={endBoot} />}
      <Particles />
      <CursorTrail />
      <Progress />
      <Header />
      <CommandPalette />
      <main className="relative z-10">
        <Hero />
        <About />
        <SkillsPlayground />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
