"use client"

import { useEffect, useState } from "react"
import { type Band, Chips, Meta } from "@/components/site"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const jobs: { id: string; tags: string; q: string; body: string; runs: Band[]; w: number; alt: string }[] = [
  { id: "map", tags: "Land cover · Buildings · Roads", q: "What is on this land?", body: "It draws the map from the pixels up. Every rooftop, road, field, and pond, labeled and measured, ready to check against a permit or a claim.", runs: ["optical", "radar", "elevation"], w: 1024, alt: "Aerial view of Lohur with every building picked out in blue" },
  { id: "monitor", tags: "Crops · Forests · Water", q: "Are the crops okay?", body: "It reads every field the way an agronomist would, all of them at once, week after week. Stress and patchy growth get flagged while there is still time to act.", runs: ["optical", "hyperspectral", "revisits"], w: 1000, alt: "Aerial view of farmland around Aachen with agricultural parcels marked in blue" },
  { id: "find", tags: "Solar · Construction · Water", q: "Where are all the solar farms?", body: "Describe what you are hunting for. Solar panels, new construction, ponds, bare ground. It checks every acre in the region and marks the hits.", runs: ["optical", "elevation"], w: 1024, alt: "Aerial view of Dhaka with every pond marked in blue" },
  { id: "compare", tags: "Two dates · Sentinel-2 · 10 m/px", q: "What changed since March?", body: "Give it two dates, or every pass in the archive, and it outlines what actually moved. Clouds and shifting light get ignored, so the difference you see is real.", runs: ["optical", "radar", "revisits"], w: 1070, alt: "Two-date Sentinel-2 city scene with detected changes highlighted in blue" },
  { id: "measure", tags: "Acres · Biomass · Extent", q: "How much forest came back?", body: "Some questions end in a number. Planted acres, standing timber, water surface, new pavement. It measures from orbit and shows where the number came from.", runs: ["optical", "hyperspectral", "elevation"], w: 1000, alt: "Aerial view near Dortmund with tree cover marked in blue" },
]

export function Jobs() {
  const [active, setActive] = useState("")
  useEffect(() => {
    const els = jobs.map((j) => document.getElementById(j.id)!)
    const io = new IntersectionObserver(() => setActive(jobs[els.findLastIndex((e) => e.getBoundingClientRect().top <= innerHeight * 0.35)]?.id ?? ""), { rootMargin: "-10% 0px -55% 0px" })
    els.forEach((e) => io.observe(e))
    return () => io.disconnect()
  }, [])
  return (
    <div className="grid max-w-7xl items-start gap-6 lg:grid-cols-[12rem_1fr] lg:gap-10">
      <nav aria-label="Jobs" className="flex flex-wrap gap-2 lg:sticky lg:top-24 lg:flex-col lg:gap-0">
        {jobs.map((j) => (
          <a key={j.id} href={`#${j.id}`} className={cn("border px-4 py-2 font-heading capitalize text-muted-foreground transition-colors hover:text-foreground lg:border-0 lg:border-l-2 lg:text-xl", active === j.id && "border-primary text-foreground")}>
            {j.id}
          </a>
        ))}
      </nav>
      <div className="flex min-w-0 flex-col gap-5">
        {jobs.map((j) => (
          <Card key={j.id} id={j.id} className="reveal gap-0 py-0 text-base">
            <Meta className="border-b">
              <span className="capitalize text-foreground">{j.id}</span>
              <span className="max-sm:hidden">{j.tags}</span>
            </Meta>
            <div className="grid md:grid-cols-[1fr_minmax(15rem,24rem)]">
              <img src={`/img/job_${j.id}-760.webp`} srcSet={`/img/job_${j.id}-760.webp 760w, /img/job_${j.id}-${j.w}.webp ${j.w}w`} sizes="(max-width: 768px) 100vw, 380px" alt={j.alt} loading="lazy" className="h-[clamp(12rem,48vw,16rem)] w-full border-b object-cover md:order-1 md:h-full md:min-h-64 md:border-b-0 md:border-l" />
              <div className="flex flex-col justify-center gap-5 p-5 md:p-8">
                <h3 className="text-2xl tracking-tight md:text-3xl">{j.q}</h3>
                <p className="max-w-[54ch] text-lg leading-relaxed text-muted-foreground">{j.body}</p>
                <Chips label="Runs on" items={j.runs} className="border-t pt-4" />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
