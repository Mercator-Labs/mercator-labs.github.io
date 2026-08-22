"use client"

import { useEffect, useState } from "react"

const sensors = ["optical", "radar", "hyperspectral", "elevation", "revisits"]

export function SensorRotator() {
  const [i, setI] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % sensors.length), 1900)
    return () => clearInterval(id)
  }, [])
  return (
    <span className="relative inline-grid">
      <span aria-hidden className="invisible">hyperspectral</span>
      <span key={i} className="absolute inset-0 text-accent fill-mode-both duration-500 animate-in fade-in slide-in-from-bottom-1">{sensors[i]}</span>
    </span>
  )
}
