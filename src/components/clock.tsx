'use client'

import { useEffect, useState } from 'react'

// Local time in Bilbao. Empty until the browser renders it, as in the mockup.
export function Clock({ suffix }: { suffix: string }) {
  const [time, setTime] = useState('')
  useEffect(() => {
    const format = new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Europe/Madrid',
      hour: '2-digit',
      minute: '2-digit',
    })
    const tick = () => setTime(` · ${format.format(new Date())} ${suffix}`)
    tick()
    const id = setInterval(tick, 20000)
    return () => clearInterval(id)
  }, [suffix])
  return <span>{time}</span>
}
