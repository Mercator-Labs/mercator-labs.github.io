import { ArrowRightIcon, MousePointer2Icon, SatelliteIcon } from "lucide-react"
import { SensorRotator } from "@/components/sensor-rotator"
import { calendar, Eyebrow, Plate } from "@/components/site"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const pill = "label inline-flex items-center gap-2 rounded-full bg-background/90 px-3 py-1.5 backdrop-blur-sm"
const choices = [["Yes", "bg-accent"], ["Not sure", "bg-foreground/30"], ["No", "bg-foreground/60"]]

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="instrument-grid pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]" />
      <div className="wrap relative grid items-center gap-12 pt-12 pb-16 md:pt-16 md:pb-24 lg:grid-cols-2 lg:gap-16">
        <div>
          <Eyebrow><SatelliteIcon className="size-4 text-accent" />The universal geospatial model</Eyebrow>
          <h1 className="display-hero mt-7">Ask any place <span className="text-accent">what changed.</span></h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">Point Locamage at imagery from any satellite, plane, drone, or street camera and ask in the words you already use. It reads the scene and answers.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#access" className={cn(buttonVariants({ size: "lg" }))}>Ask for access<ArrowRightIcon /></a>
            <a href={calendar} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "border-foreground/20")}>Book a call</a>
          </div>
          <p className="label mt-8 flex items-center gap-2 text-muted-foreground">Reads <SensorRotator /></p>
        </div>
        <figure className="relative">
          <Plate src="/img/ftw/2_masked.webp" alt="Sentinel-2 harvest composite of Iowa farmland with every field boundary predicted by Locamage outlined in blue">
            <div className="absolute top-4 left-4 flex flex-wrap gap-2 md:top-6 md:left-6">
              <span className={pill}><i className="animate-blink size-1.5 rounded-full bg-accent" />Sentinel-2</span>
              <span className={cn(pill, "text-muted-foreground max-sm:hidden")}>Iowa · Oct 2024</span>
            </div>
            <span className={cn(pill, "absolute top-4 right-4 text-muted-foreground max-md:hidden md:top-6 md:right-6")}>10 m/px · field boundaries</span>
            <div aria-hidden className="animate-sweep absolute inset-x-0 top-0 h-[14%] bg-gradient-to-b from-transparent via-accent/25 to-transparent after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-accent/70" />
            <div aria-hidden className="pointer-events-none absolute top-[22%] right-[8%] max-md:hidden">
              <div className="animate-roam">
                <div className="w-max max-w-xs rounded-2xl bg-card/95 p-3 shadow-xl backdrop-blur-sm">
                  <p className="mb-2 text-sm font-medium tracking-tight">Has this field been harvested?</p>
                  <div className="flex gap-1.5">
                    {choices.map(([label, dot]) => <span key={label} className="flex items-center gap-1.5 rounded-lg bg-secondary px-2.5 py-1.5 text-xs font-medium"><i className={cn("size-2 rounded-sm", dot)} />{label}</span>)}
                  </div>
                </div>
                <MousePointer2Icon className="mt-1 ml-16 size-6 fill-accent text-accent drop-shadow-md" />
              </div>
            </div>
          </Plate>
          <figcaption className="relative z-10 mx-4 -mt-10 rounded-3xl bg-card p-5 shadow-2xl md:absolute md:-bottom-8 md:-left-6 md:mx-0 md:mt-0 md:max-w-sm md:p-6">
            <p className="flex items-center gap-2 text-lg font-medium tracking-tight text-accent md:text-xl">
              <span aria-hidden className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-accent"><i className="size-2 rounded-sm bg-accent-foreground" /></span>
              Where does each field end?
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Every parcel in the scene is outlined from a single October pass, harvested and standing fields alike. The boundaries follow the real edge of each field, not the survey grid, and carry over to the next revisit.</p>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
