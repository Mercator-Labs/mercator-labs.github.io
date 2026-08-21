import { Compare } from "@/components/compare"
import { CopyEmail } from "@/components/copy-email"
import { Footer } from "@/components/footer"
import { Jobs } from "@/components/jobs"
import { Nav } from "@/components/nav"
import { type Band, bands, Book, Chips, email, Intro, Kicker, Meta } from "@/components/site"
import { buttonVariants } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const sensors: [Band, string, string][] = [
  ["optical", "Optical", "street level to whole-country mosaics"],
  ["radar", "Radar", "structure through cloud and darkness"],
  ["hyperspectral", "Hyperspectral", "hundreds of bands past visible light"],
  ["elevation", "Elevation", "terrain read as part of the scene"],
  ["revisits", "Revisits", "the same acre, week after week"],
  ["unseen", "Unseen sensors", "new feeds read on arrival, no retraining"],
]

function Mk({ className, ...props }: React.ComponentProps<"a">) {
  return <a className={cn("font-medium text-foreground underline decoration-[3px] underline-offset-[7px] hover:bg-primary/10", className)} {...props} />
}

export default function Page() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-pad focus:z-60 focus:border focus:bg-card focus:px-5 focus:py-2.5">Skip to main content</a>
      <Nav />
      <main id="main">
        <section className="relative grid overflow-hidden bg-muted md:min-h-svh md:grid-cols-2">
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,var(--color-border)_1px,transparent_1px),linear-gradient(var(--color-border)_1px,transparent_1px)] bg-[size:calc(100%/12)_100%,100%_120px] opacity-50 [mask-image:linear-gradient(#000_45%,transparent_94%)]" />
          <div className="relative flex max-w-3xl flex-col justify-center px-pad pt-28 pb-10 fill-mode-both duration-1000 animate-in fade-in slide-in-from-bottom-5 md:pr-16 md:pb-14">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <Kicker>Answers from orbit</Kicker>
              <span className="hidden text-xs uppercase tracking-widest text-muted-foreground lg:inline">Any sensor · Any resolution · Any revisit</span>
            </div>
            <h1 className="mb-6 text-display">Ask a place<br /><span className="text-primary">what changed.</span></h1>
            <p className="mb-9 max-w-md text-lg leading-relaxed text-muted-foreground md:text-xl">Point Locamage at imagery from any satellite, plane, drone, or street camera and ask in the words you already use. It reads the scene and answers.</p>
            <div className="flex flex-wrap gap-3">
              <Book />
              <a href="#contact" className={buttonVariants({ variant: "outline", size: "lg" })}>Ask for access</a>
            </div>
            <Chips label="Reads" items={["optical", "radar", "hyperspectral", "elevation"]} className="mt-9" />
          </div>
          <Compare />
        </section>

        <section id="jobs" className="border-t px-pad py-sy">
          <Intro kicker="What it does" title="What people ask it.">Five jobs cover most of it. They all run on the same model, whatever sensor took the picture.</Intro>
          <Jobs />
          <div id="markets" className="reveal mt-14 max-w-4xl">
            <h3 className="mb-4 text-2xl tracking-tight md:text-3xl">Who runs on it.</h3>
            <p className="text-prose text-muted-foreground">
              <Mk href="#compare" className="decoration-primary">Security teams</Mk> watch places nobody can drive to. <Mk href="#map" className="decoration-amber-700">Insurers</Mk> price a storm before the adjusters land. <Mk href="#monitor" className="decoration-green-700">Growers</Mk> catch stress while it is still cheap to fix. <Mk href="#measure" className="decoration-teal-700">Climate researchers</Mk> keep a running record of forests, coasts, and wetlands.
            </p>
          </div>
        </section>

        <section className="flex min-h-[clamp(28rem,58vh,40rem)] items-end border-t bg-[url(/img/ftw/2_masked.webp)] bg-cover bg-center px-pad pt-24 pb-14">
          <Card className="reveal max-w-2xl gap-0 py-0">
            <p className="p-8 font-heading text-3xl leading-tight tracking-tight md:text-4xl">Somewhere in orbit there is a picture of your problem.<br /><span className="text-primary">Ask it what happened.</span></p>
            <Meta className="flex-wrap border-t">
              <span>Sentinel-2 · Iowa · Oct 2024</span>
              <span>Field boundaries · 10 m/px</span>
            </Meta>
          </Card>
        </section>

        <section id="model" className="border-t bg-card px-pad py-sy">
          <Intro kicker="The model" title={<>One model.<br />Any sensor.</>}>Most Earth AI is built for one satellite and falls apart on the next. Locamage was built the other way.</Intro>
          <Card className="reveal gap-0 py-0 text-base">
            <Meta className="border-b">
              <span>Signal path</span>
              <span>Any resolution · Any revisit</span>
            </Meta>
            <div className="grid items-center gap-6 p-5 md:p-8 lg:grid-cols-[1fr_14rem_1fr] lg:gap-10">
              <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {sensors.map(([band, name, desc]) => (
                  <li key={band} className="flex gap-3 border p-3 last:border-dashed">
                    <i className={cn("mt-1.5 size-2.5 shrink-0", bands[band])} />
                    <div>
                      <strong className="block font-medium">{name}</strong>
                      <span className="text-sm text-muted-foreground">{desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="relative bg-foreground p-6 text-center text-background lg:before:absolute lg:before:top-1/2 lg:before:-left-10 lg:before:h-px lg:before:w-10 lg:before:bg-border lg:after:absolute lg:after:top-1/2 lg:after:-right-10 lg:after:h-px lg:after:w-10 lg:after:bg-border">
                <strong className="block font-heading text-xl font-normal">One model</strong>
                <span className="text-sm text-background/60">reads them together</span>
              </div>
              <div className="flex flex-col gap-2 border bg-muted p-6">
                <span className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground before:size-2.5 before:bg-primary">Answer</span>
                <strong className="font-heading text-lg font-normal">An answer in plain words.</strong>
                <span className="text-sm text-muted-foreground">Where to look, what changed, what to do about it.</span>
              </div>
            </div>
          </Card>
          <p className="reveal mt-12 max-w-4xl text-prose text-muted-foreground">It learned from imagery covering the whole planet, so places with thin maps read as clearly as well-surveyed ones. Mark a few examples of the thing you track and it maps the rest in your vocabulary. And the archive you already pay to store becomes a searchable history of any acre.</p>
        </section>

        <section id="contact" className="grid border-t md:grid-cols-2">
          <div className="reveal px-pad py-sy">
            <Kicker>Contact</Kicker>
            <h2 className="text-headline">Ask for access.</h2>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-muted-foreground">Tell us what imagery you have and what you need to know from it. You will get a straight answer about whether Locamage fits.</p>
          </div>
          <div className="reveal flex flex-col justify-center gap-7 border-t bg-muted px-pad py-sy md:border-t-0 md:border-l">
            <a href={`mailto:${email}`} className="self-start border-b border-primary/20 font-heading text-3xl tracking-tight text-primary transition-colors hover:border-primary md:text-5xl">{email}</a>
            <div className="flex flex-wrap gap-3">
              <Book />
              <CopyEmail />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
