'use client'

import { useEffect, useState } from 'react'

export const TickingClock = () => {
  const getTime = (): string =>
    new Date().toLocaleTimeString('en-US', {
      timeZone: 'Europe/Berlin',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    })

  const [time, setTime] = useState(getTime)

  // biome-ignore lint/correctness/useExhaustiveDependencies: getTime changes on every render
  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    const tick = () => {
      setTime(getTime())
      timeoutId = setTimeout(tick, 1000 - (Date.now() % 1000))
    }

    timeoutId = setTimeout(tick, 1000 - (Date.now() % 1000))

    return () => clearTimeout(timeoutId)
  }, [])

  return <p className="m-0 mt-1 text-[#7c7c83]">{time || '00:00'}</p>
}
