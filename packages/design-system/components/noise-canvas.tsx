'use client'

import { useEffect, useRef } from 'react'

export const NoiseCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')

    if (!ctx || !canvas) {
      return
    }

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const drawNoise = () => {
      const imageData = ctx?.getImageData(0, 0, canvas.width, canvas.height)
      const data = imageData?.data

      if (!data || !imageData) {
        return
      }

      for (let i = 0; i < data.length; i += 4) {
        const randomValue = Math.random() * 255
        data[i] = randomValue
        data[i + 1] = randomValue
        data[i + 2] = randomValue
        data[i + 3] = 255
      }
      ctx?.putImageData(imageData, 0, 0)
      requestAnimationFrame(drawNoise)
    }

    drawNoise()

    setTimeout(() => {
      canvas?.classList.add('noise-animate')
    }, 0)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      id="noise"
      className="pointer-events-none fixed top-0 left-0 z-[99999] h-full w-full opacity-[0.1]"
    />
  )
}
