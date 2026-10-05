import type { CSSProperties } from 'react'
import { wordmark } from './wordmark-paths'

// "Pierre Hervelin", drawn from the font's outlines. --i numbers the letters for
// the motion that moves them one after another.
export function Wordmark() {
  const { viewBox, first, last } = wordmark
  const letter = (d: string, i: number) => (
    <path key={i} d={d} style={{ '--i': i } as CSSProperties} className="[transform-box:fill-box]" />
  )
  return (
    <svg
      viewBox={viewBox}
      aria-hidden="true"
      focusable="false"
      className="wordmark block h-auto w-full overflow-hidden fill-current"
    >
      <g>{first.map((d, i) => letter(d, i))}</g>
      <g>{last.map((d, i) => letter(d, first.length + i))}</g>
    </svg>
  )
}
