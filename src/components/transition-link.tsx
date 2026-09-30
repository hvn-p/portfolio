'use client'

import NextLink from 'next/link'
import type { ComponentProps } from 'react'
import { useCurtain } from './curtain'

// An internal link that navigates under the page curtain.
export function Link({ href, ...props }: ComponentProps<typeof NextLink> & { href: string }) {
  const cover = useCurtain()
  return (
    <NextLink
      href={href}
      {...props}
      onNavigate={(e) => {
        if (cover(href)) e.preventDefault()
      }}
    />
  )
}
