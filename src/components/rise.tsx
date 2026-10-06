import { Fragment } from 'react'

// A title whose words rise from under their baseline as it comes into view (reveal.css).
// Screen readers get the plain text; each word shown sits in its own mask, so the title
// still wraps between words. Only plain spaces split it: a non-breaking one, as before a
// French question mark, keeps its two sides in the same mask.
export function Rise({ text }: { text: string }) {
  return (
    <>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {text.split(' ').map((word, i) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: words repeat, their position is their identity
          <Fragment key={i}>
            {i > 0 && ' '}
            <span className="rv-word">
              <span>{word}</span>
            </span>
          </Fragment>
        ))}
      </span>
    </>
  )
}
