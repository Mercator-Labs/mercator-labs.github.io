"use client"

import { Slider } from "@base-ui/react/slider"
import { useState } from "react"
import { Meta } from "@/components/site"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

export function Compare() {
  const [v, setV] = useState(50)
  return (
    <Card className="relative gap-0 py-0 fill-mode-both delay-300 duration-1000 animate-in fade-in slide-in-from-bottom-5 md:mt-22 md:mr-pad md:mb-12">
      <div className="relative h-[min(92vw,540px)] cursor-ew-resize select-none md:h-auto md:flex-1">
        <img src="/img/ftw/2_orig.webp" alt="Sentinel-2 harvest composite, Iowa 2024" fetchPriority="high" className="absolute inset-0 size-full object-cover" />
        <img src="/img/ftw/2_masked.webp" alt="Harvest image with AI field boundary predictions overlaid" className="absolute inset-0 size-full object-cover" style={{ clipPath: `inset(0 0 0 ${v}%)` }} />
        <Slider.Root value={v} onValueChange={setV} min={2} max={98} thumbAlignment="center" className="absolute inset-0">
          <Slider.Control className="relative size-full touch-pan-y">
            <Slider.Thumb
              aria-label="Compare harvest image with field predictions"
              getAriaValueText={(_, n) => `${n}% predictions visible`}
              className="h-full w-px bg-white/90 outline-none after:absolute after:top-1/2 after:left-1/2 after:flex after:size-10 after:-translate-1/2 after:items-center after:justify-center after:border after:bg-card after:text-sm after:content-['‹_›'] focus-within:after:bg-primary focus-within:after:text-primary-foreground"
            />
          </Slider.Control>
        </Slider.Root>
        <Badge variant="outline" className="pointer-events-none absolute bottom-4 left-4 bg-card uppercase">Harvest</Badge>
        <Badge className="pointer-events-none absolute right-4 bottom-4 uppercase">Predictions</Badge>
      </div>
      <Meta className="border-t">
        <span>Sentinel-2 · Iowa · Oct 2024</span>
        <span>Field boundaries · 10 m/px</span>
      </Meta>
    </Card>
  )
}
