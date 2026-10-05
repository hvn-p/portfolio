import type { CSSProperties } from 'react'

// A label whose letters roll on hover. The plain text is what shows without
// motion and what screen readers get; the letters, two stacked copies each, only
// show with motion (motion.css). Letters are grouped by word, each word holding
// its trailing space, so a label longer than its line wraps between words.
export function Roll({ text }: { text: string }) {
  const words = text.split(' ')
  let i = 0
  return (
    <>
      <span className="motion-safe:sr-only">{text}</span>
      <span aria-hidden="true" className="roll">
        {words.map((word, w) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: words repeat, their position is their identity
          <span key={w} className="roll-word">
            {[...(w < words.length - 1 ? `${word} ` : word)].map((char) => {
              const c = char === ' ' ? ' ' : char
              const k = i++
              return (
                <span key={k} className="ch" style={{ '--i': k } as CSSProperties}>
                  <span>{c}</span>
                  <span>{c}</span>
                </span>
              )
            })}
          </span>
        ))}
      </span>
    </>
  )
}
