import { useEffect, useState } from 'react'

export default function TypeCycle({ words, className = '' }) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[index]
    const doneTyping = text === word
    const doneDeleting = deleting && text === ''
    const delay = deleting ? 36 : doneTyping ? 1100 : 58

    const t = window.setTimeout(() => {
      if (doneDeleting) {
        setDeleting(false)
        setIndex((i) => (i + 1) % words.length)
        return
      }
      if (doneTyping) {
        setDeleting(true)
        return
      }
      const next = deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)
      setText(next)
    }, delay)

    return () => window.clearTimeout(t)
  }, [deleting, index, text, words])

  return (
    <span className={className}>
      {text}
      <span className="ml-0.5 inline-block w-[2px] animate-pulse bg-cyan-300 align-[-2px]" style={{ height: '0.9em' }} />
    </span>
  )
}
