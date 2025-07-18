'use client'

import { useEffect, useRef } from 'react'

export function NeonBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const lines: { x: number; y: number; dx: number; dy: number }[] = []

    // Criar linhas com direções aleatórias
    for (let i = 0; i < 60; i++) {
      lines.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        dx: (Math.random() - 0.9) * 0.7,
        dy: (Math.random() - 0.9) * 0.7,
      })
    }

    function animate() {
      if (!ctx || !canvas) return

      ctx.fillStyle = '#0b0f1a'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      for (const line of lines) {
        ctx.beginPath()
        ctx.moveTo(line.x, line.y)

        line.x += line.dx
        line.y += line.dy

        if (line.x < 0 || line.x > canvas.width) line.dx *= -1
        if (line.y < 0 || line.y > canvas.height) line.dy *= -1

        ctx.lineTo(line.x + 10, line.y + 10)
        ctx.strokeStyle = `hsla(${Math.random() * 360}, 100%, 70%, 0.6)`
        ctx.lineWidth = 1
        ctx.stroke()
      }

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
      aria-hidden
    />
  )
}
