import { GitCompareArrowsIcon, type LucideIcon, MapIcon, RulerIcon, SearchIcon, SproutIcon } from "lucide-react"
import { Eyebrow, Intro, Plate } from "@/components/site"
import { cn } from "@/lib/utils"

const jobs: { verb: string; scope: string; q: string; body: string; sensors: string[]; img: string; icon: LucideIcon; alt: string }[] = [
  { verb: "Map", scope: "Land cover · Buildings · Roads", q: "What is on this land?", body: "It draws the map from the pixels up. Every rooftop, road, field, and pond, labeled and measured, ready to check against a permit or a claim.", sensors: ["optical", "radar", "elevation"], img: "map-1024", icon: MapIcon, alt: "Aerial view of Lohur with every building picked out in blue" },
  { verb: "Monitor", scope: "Crops · Forests · Water", q: "Are the crops okay?", body: "It reads every field the way an agronomist would, all of them at once, week after week. Stress and patchy growth get flagged while there is still time to act.", sensors: ["optical", "hyperspectral", "revisits"], img: "monitor-1000", icon: SproutIcon, alt: "Aerial view of farmland around Aachen with agricultural parcels marked in blue" },
  { verb: "Find", scope: "Water · Solar · Construction", q: "Where are all the ponds?", body: "Describe what you are hunting for, ponds, solar panels, new construction, and it checks every acre in the region, then marks the hits.", sensors: ["optical", "elevation"], img: "find-1024", icon: SearchIcon, alt: "Aerial view of Dhaka with every pond marked in blue" },
  { verb: "Compare", scope: "Two dates · Whole archive", q: "What changed since March?", body: "Give it two dates, or every pass in the archive, and it outlines what actually moved. Clouds and shifting light get ignored.", sensors: ["optical", "radar", "revisits"], img: "compare-1070", icon: GitCompareArrowsIcon, alt: "Two-date Sentinel-2 city scene with detected changes highlighted in blue" },
  { verb: "Measure", scope: "Acres · Biomass · Extent", q: "How much forest came back?", body: "Some questions end in a number. It measures from orbit and shows you where the number came from.", sensors: ["optical", "hyperspectral", "elevation"], img: "measure-1000", icon: RulerIcon, alt: "Aerial view near Dortmund with tree cover marked in blue" },
]

export function Capabilities() {
  return (
    <section id="capabilities" className="border-t bg-secondary/40 py-16 md:py-24">
      <Intro kicker="What it does" title="One model answers every question, from every source.">Map, monitor, find, compare, measure. The same model handles all of it, whatever satellite, plane, or drone took the picture.</Intro>
      <div className="mt-8 md:mt-12">
        {jobs.map((j, i) => {
          const flip = i % 2 === 1
          return (
            <article key={j.verb} className="wrap grid items-center gap-12 py-12 lg:grid-cols-2 lg:gap-20 lg:py-16">
              <div className={cn(flip && "lg:order-2")}>
                <Eyebrow><span className="font-mono text-sm text-accent">{String(i + 1).padStart(2, "0")}</span>{j.verb}</Eyebrow>
                <h3 className="display-band mt-6">{j.q}</h3>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">{j.body}</p>
                <ul className="mt-7 flex flex-wrap gap-2">
                  {j.sensors.map((s) => <li key={s} className="rounded-full border bg-card px-3 py-1 text-base font-medium text-foreground/70">{s}</li>)}
                </ul>
              </div>
              <div className="relative">
                <Plate src={`/img/job_${j.img}.webp`} alt={j.alt} className="md:rounded-[2.5rem]" />
                <div className={cn("animate-float absolute -bottom-6 flex min-h-44 w-56 flex-col rounded-3xl p-5 shadow-2xl", flip ? "left-4 bg-accent text-accent-foreground md:-left-6" : "right-4 bg-card md:-right-6")}>
                  <div className="flex items-start justify-between gap-3">
                    <p className="text-lg leading-tight font-medium tracking-tight">{j.verb}</p>
                    <span className={cn("flex size-8 shrink-0 items-center justify-center rounded-xl", flip ? "bg-accent-foreground/15" : "bg-accent text-accent-foreground")}><j.icon className="size-4" /></span>
                  </div>
                  <p className={cn("mt-auto pt-6 text-base leading-relaxed", flip ? "text-accent-foreground/85" : "text-muted-foreground")}>{j.scope}</p>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
