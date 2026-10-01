import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    // Screenshots are mostly interface and text: 75 visibly softens their hairlines.
    qualities: [90],
    // For the comparison bench only: the mockup's own files, so what differs is layout.
    unoptimized: process.env.BENCH === '1',
  },
  experimental: {
    // The root layout sits under [lang]: addresses outside every language need
    // a 404 of their own (src/app/global-not-found.tsx).
    globalNotFound: true,
  },
}

export default nextConfig
