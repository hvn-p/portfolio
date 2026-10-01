'use client'

import NextLink from 'next/link'
import type { ComponentProps } from 'react'
import { useCurtain } from './curtain'

// An internal link that navigates under the page curtain. No prefetch: it would
// fetch every linked page, and its screenshots, on every visit; the curtain covers
// the fetch on click.
export function Link({ href, ...props }: ComponentProps<typeof NextLink> & { href: string }) {
  const cover = useCurtain()
  return (
    <NextLink
      href={href}
      prefetch={false}
      {...props}
      onNavigate={(e) => {
        if (cover(href)) e.preventDefault()
      }}
    />
  )
}
