// Icons from the mockup sprite, drawn on a 16×16 grid.

const strokes = {
  up: 'M8 13V3M4 7l4-4 4 4',
  arrow: 'M4.5 11.5 11.5 4.5M6 4.5h5.5V10',
  right: 'M3 8h10M9 4l4 4-4 4',
}

// Line icons follow the text: 0.9em, stroked in the current color.
export function Icon({ name }: { name: keyof typeof strokes }) {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden="true"
      className="size-[0.9em] flex-none fill-none stroke-current stroke-[1.6] [stroke-linecap:round] [stroke-linejoin:round]"
    >
      <path d={strokes[name]} />
    </svg>
  )
}

const brands = {
  github: {
    d: 'M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z',
  },
  linkedin: {
    d: 'M2 0h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zM3.4 6.2h2.1V13H3.4zM4.45 2.9a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4zM6.8 6.2h2v.95c.3-.55 1.02-1.1 2.1-1.1 2.1 0 2.6 1.3 2.6 3.05V13h-2.1V9.55c0-.82-.15-1.6-1.08-1.6-.97 0-1.42.7-1.42 1.65V13H6.8z',
    evenOdd: true,
  },
}

export function BrandIcon({ name }: { name: keyof typeof brands }) {
  const { d, evenOdd } = brands[name] as { d: string; evenOdd?: boolean }
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className="size-[1.05rem] fill-current">
      <path d={d} fillRule={evenOdd ? 'evenodd' : undefined} />
    </svg>
  )
}
