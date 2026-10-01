import { notFound } from 'next/navigation'

// Any address the site does not know, in a known language: its 404, in that language.
export default function Missing() {
  notFound()
}
