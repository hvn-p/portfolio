import type { CSSProperties } from 'react'

// A label whose letters roll on hover. The plain text is what shows without
// motion and what screen readers get; the letters, two stacked copies each, only
// show with motion (motion.css).
export function Roll({ text }: { text: string }) {
  return (
    <>
      <span className="motion-safe:sr-only">{text}</span>
      <span aria-hidden="true" className="roll">
        {[...text].map((char, i) => {
          const c = char === ' ' ? ' ' : char
          return (
            // biome-ignore lint/suspicious/noArrayIndexKey: letters repeat, their position is their identity
            <span key={i} className="ch" style={{ '--i': i } as CSSProperties}>
              <span>{c}</span>
              <span>{c}</span>
            </span>
          )
        })}
      </span>
    </>
  )
}
