import { ArrowRightIcon, GlobeIcon, LeafIcon, type LucideIcon, MessageSquareIcon, PlusIcon, SatelliteIcon, ShieldIcon, SparklesIcon, SproutIcon, UmbrellaIcon } from "lucide-react"
import { Compare } from "@/components/compare"
import { Footer } from "@/components/footer"
import { Nav } from "@/components/nav"
import { Book, email, Heading, Placeholder } from "@/components/site"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const features: [LucideIcon, string, string][] = [
  [SatelliteIcon, "Any sensor", "Optical, radar, hyperspectral, elevation. One model reads them all, and new feeds on arrival with no retraining."],
  [MessageSquareIcon, "Plain language", "Ask in the words you already use. You get an answer, not a layer to interpret."],
  [SparklesIcon, "A few examples", "Mark a handful of the thing you track and it maps the rest in your vocabulary."],
  [GlobeIcon, "Planet scale", "Trained on imagery of the whole Earth, so thin-mapped places read as clearly as surveyed ones."],
]

const jobs: [string, string, string, string, number][] = [
  ["map", "What is on this land?", "Every rooftop, road, field, and pond, labeled and measured from the pixels up.", "Aerial view with every building picked out in blue", 1024],
  ["monitor", "Are the crops okay?", "Every field read the way an agronomist would, all at once, week after week.", "Farmland with agricultural parcels marked in blue", 1000],
  ["find", "Where are all the solar farms?", "Describe what you are hunting for. It checks every acre and marks the hits.", "City scene with every pond marked in blue", 1024],
  ["compare", "What changed since March?", "Two dates or the whole archive, with clouds and shifting light ignored.", "Two-date satellite scene with detected changes highlighted", 1070],
  ["measure", "How much forest came back?", "Planted acres, standing timber, water surface. Measured from orbit, with receipts.", "Aerial view with tree cover marked in blue", 1000],
]

const steps = [
  ["Bring your imagery", "Satellite, plane, drone, or street camera. Any resolution, any revisit, or start from the open archives."],
  ["Ask a question", "Type it the way you would ask a colleague. Mark a few examples if you are tracking something new."],
  ["Act on the answer", "Where to look, what changed, and how much, with the pixels it came from."],
]

const industries: [LucideIcon, string, string][] = [
  [ShieldIcon, "Security", "Watch places nobody can drive to, and know the moment something moves."],
  [UmbrellaIcon, "Insurance", "Price a storm before the adjusters land, with damage mapped from the first clear pass."],
  [SproutIcon, "Agriculture", "Catch crop stress while it is still cheap to fix, across every field at once."],
  [LeafIcon, "Climate", "Keep a running record of forests, coasts, and wetlands, year after year."],
]

const faqs = [
  ["What imagery does Locamage read?", "Optical, multispectral, radar, hyperspectral, thermal, lidar, and elevation, from any satellite, plane, drone, or street camera. New sensors are read on arrival without retraining."],
  ["Do I need GIS experience?", "No. You ask in plain language and get an answer in plain language, with the pixels it came from."],
  ["Can it learn something specific to us?", "Yes. Mark a few examples of the thing you track and it maps the rest in your vocabulary."],
  ["How do we get access?", "Book a call or email us with what imagery you have and what you need to know from it. You will get a straight answer about whether Locamage fits."],
]

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <section className="px-6 pt-32 pb-20 text-center">
          <div className="mx-auto max-w-3xl fill-mode-both duration-700 animate-in fade-in slide-in-from-bottom-4">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border bg-muted px-3 py-1 text-sm text-muted-foreground hover:text-foreground">
              <span className="size-1.5 rounded-full bg-primary" />Early access is open<ArrowRightIcon className="size-3.5" />
            </a>
            <h1 className="mt-6 text-5xl md:text-7xl">Understand any place on Earth in plain language.</h1>
            <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground md:text-xl">Locamage is one foundation model that reads optical, radar, hyperspectral, and elevation imagery and answers the questions you ask of it. No GIS expertise needed.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Book />
              <a href="#contact" className={cn(buttonVariants({ variant: "outline", size: "lg" }))}>Request access</a>
            </div>
          </div>
          <Compare />
        </section>

        <section className="border-y bg-muted/50 px-6 py-10">
          <p className="mb-6 text-center text-sm text-muted-foreground">Built for teams in security, insurance, agriculture, and climate research</p>
          <div className="mx-auto grid max-w-4xl grid-cols-3 gap-4 md:grid-cols-6">
            {[...Array(6)].map((_, i) => <Placeholder key={i} className="h-10" label="Logo" />)}
          </div>
        </section>

        <section id="product" className="px-6 py-24">
          <Heading kicker="Why Locamage" title="Earth observation without the GIS degree.">Most Earth AI is built for one satellite and falls apart on the next. Locamage was built the other way.</Heading>
          <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map(([Icon, title, body]) => (
              <div key={title} className="reveal rounded-2xl border p-6">
                <Icon className="mb-4 size-5 text-primary" />
                <h3 className="text-lg font-medium">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="use-cases" className="bg-muted/50 px-6 py-24">
          <Heading kicker="What people ask it" title="Five questions cover most of it.">They all run on the same model, whatever sensor took the picture.</Heading>
          <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-6">
            {jobs.map(([id, q, body, alt, w], i) => (
              <div key={id} className={cn("reveal group overflow-hidden rounded-2xl border bg-card", i < 2 ? "md:col-span-3" : "md:col-span-2")}>
                <img src={`/img/job_${id}-760.webp`} srcSet={`/img/job_${id}-760.webp 760w, /img/job_${id}-${w}.webp ${w}w`} sizes="(max-width: 768px) 100vw, 50vw" alt={alt} loading="lazy" className="aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="p-6">
                  <h3 className="text-xl">{q}</h3>
                  <p className="mt-2 text-muted-foreground">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="how" className="px-6 py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
            <div>
              <Heading kicker="How it works" title="From pixels to an answer in three steps." className="mx-0 mb-10 text-left" />
              <ol className="flex flex-col gap-8">
                {steps.map(([title, body], i) => (
                  <li key={title} className="reveal flex gap-4">
                    <span className="grid size-8 shrink-0 place-items-center rounded-full bg-primary/10 text-sm font-medium text-primary">{i + 1}</span>
                    <div>
                      <h3 className="text-lg font-medium">{title}</h3>
                      <p className="mt-1 text-muted-foreground">{body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <Placeholder className="reveal aspect-4/3 rounded-2xl" label="Product screenshot" />
          </div>
        </section>

        <section className="bg-muted/50 px-6 py-24">
          <Heading kicker="Use cases" title="Who runs on it.">Teams that arrive with imagery problems, not GIS expertise.</Heading>
          <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map(([Icon, title, body]) => (
              <div key={title} className="reveal overflow-hidden rounded-2xl border bg-card">
                <Placeholder className="aspect-video rounded-none border-0 border-b" label="Image" />
                <div className="p-6">
                  <Icon className="mb-3 size-5 text-primary" />
                  <h3 className="text-lg font-medium">{title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="faq" className="px-6 py-24">
          <Heading kicker="FAQ" title="Questions, answered." />
          <div className="mx-auto max-w-2xl divide-y rounded-2xl border">
            {faqs.map(([q, a]) => (
              <details key={q} className="group px-6 py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium [&::-webkit-details-marker]:hidden">
                  {q}<PlusIcon className="size-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-45" />
                </summary>
                <p className="mt-3 text-muted-foreground">{a}</p>
              </details>
            ))}
          </div>
        </section>

        <section id="contact" className="px-6 pb-24">
          <div className="reveal mx-auto max-w-6xl rounded-3xl bg-foreground px-6 py-20 text-center text-background">
            <h2 className="mx-auto max-w-2xl text-4xl md:text-5xl">Somewhere in orbit there is a picture of your problem.</h2>
            <p className="mx-auto mt-4 max-w-lg text-lg text-background/70">Tell us what imagery you have and what you need to know from it. You will get a straight answer about whether Locamage fits.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Book />
              <a href={`mailto:${email}`} className={cn(buttonVariants({ variant: "outline", size: "lg" }), "border-background/20 bg-transparent text-background hover:bg-background/10 hover:text-background")}>{email}</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
