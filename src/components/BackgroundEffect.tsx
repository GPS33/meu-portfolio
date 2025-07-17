'use client'

import { useEffect, useRef } from 'react'

export function BackgroundEffect() {
  const lightRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const light = lightRef.current
      if (light) {
        light.style.left = `${clientX}px`
        light.style.top = `${clientY}px`
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 -z-10 bg-neutral-950 overflow-hidden">
      {/* Luz suave que segue o mouse */}
      <div
        ref={lightRef}
        className="absolute w-[100px] h-[100px] bg-cyan-500/10 blur-2xl rounded-full pointer-events-none transition-all duration-4"
        style={{ transform: 'translate(-50%, -50%)' }}
      />

      {/* Grade de fundo discreta */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
    </div>
  )
}
