import type { CSSProperties } from 'react'
import { display, text } from './wordmark-paths'

// "Pierre Hervelin", drawn from the fonts' outlines. --i numbers the letters for
// the motion that moves them one after another.
export function Wordmark({ cut }: { cut: 'display' | 'text' }) {
  const { viewBox, first, last } = cut === 'display' ? display : text
  const letter = (d: string, i: number) => (
    <path key={i} d={d} style={{ '--i': i } as CSSProperties} className="[transform-box:fill-box]" />
  )
  return (
    <svg
      viewBox={viewBox}
      aria-hidden="true"
      focusable="false"
      className="block h-auto w-full overflow-hidden fill-current"
    >
      <g>{first.map((d, i) => letter(d, i))}</g>
      <g>{last.map((d, i) => letter(d, first.length + i))}</g>
    </svg>
  )
}
