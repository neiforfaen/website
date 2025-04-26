'use client'

import { useEffect, useState } from 'react'

export const TickingClock = () => {
  const getTime = () => {
    const now = new Date()

    const opts: Intl.DateTimeFormatOptions = {
      timeZone: 'Europe/Berlin',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    }

    return now.toLocaleTimeString('en-US', opts)
  }

  const [time, setTime] = useState(getTime())

  // biome-ignore lint/correctness/useExhaustiveDependencies: getTime changes on every render
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTime())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <p id="status-description" className="m-0 mt-1 text-[#7c7c83]">
      {time}
    </p>
  )
}
