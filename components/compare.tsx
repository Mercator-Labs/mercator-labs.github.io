"use client"

import { Slider } from "@base-ui/react/slider"
import { useState } from "react"

export function Compare() {
  const [v, setV] = useState(50)
  return (
    <div className="mx-auto mt-16 max-w-5xl overflow-hidden rounded-2xl border bg-card shadow-2xl shadow-primary/10 fill-mode-both delay-200 duration-1000 animate-in fade-in slide-in-from-bottom-8">
      <div className="flex items-center gap-3 border-b px-4 py-3">
        <span className="flex gap-1.5 *:size-3 *:rounded-full *:bg-border max-sm:hidden"><i /><i /><i /></span>
        <p className="flex-1 truncate rounded-lg bg-muted px-3 py-1.5 text-left text-sm text-muted-foreground">Outline every field in this scene and flag the ones harvested early.</p>
        <span className="rounded-md bg-primary px-2.5 py-1 text-xs font-medium text-primary-foreground">Ask</span>
      </div>
      <div className="relative aspect-video cursor-ew-resize select-none">
        <img src="/img/ftw/2_orig.webp" alt="Sentinel-2 harvest composite, Iowa 2024" fetchPriority="high" className="absolute inset-0 size-full object-cover" />
        <img src="/img/ftw/2_masked.webp" alt="Harvest image with AI field boundary predictions overlaid" className="absolute inset-0 size-full object-cover" style={{ clipPath: `inset(0 0 0 ${v}%)` }} />
        <Slider.Root value={v} onValueChange={setV} min={2} max={98} thumbAlignment="center" className="absolute inset-0">
          <Slider.Control className="relative size-full touch-pan-y">
            <Slider.Thumb
              aria-label="Compare harvest image with field predictions"
              getAriaValueText={(_, n) => `${n}% predictions visible`}
              className="h-full w-px bg-white/90 outline-none after:absolute after:top-1/2 after:left-1/2 after:flex after:size-10 after:-translate-1/2 after:items-center after:justify-center after:rounded-full after:bg-card after:text-sm after:shadow-lg after:content-['‹_›'] focus-within:after:bg-primary focus-within:after:text-primary-foreground"
            />
          </Slider.Control>
        </Slider.Root>
        <span className="pointer-events-none absolute bottom-4 left-4 rounded-full bg-card/90 px-3 py-1 text-xs font-medium">Imagery</span>
        <span className="pointer-events-none absolute right-4 bottom-4 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">Locamage</span>
      </div>
    </div>
  )
}
