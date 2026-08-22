import { ArrowRightIcon } from "lucide-react"
import { calendar, email, Intro } from "@/components/site"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Cta() {
  return (
    <section id="access" className="wrap py-16 md:py-24">
      <div className="relative overflow-hidden rounded-[2rem] bg-primary py-16 text-primary-foreground md:rounded-[2.75rem] md:py-24">
        <div aria-hidden className="instrument-grid pointer-events-none absolute inset-0 opacity-[0.07] [--grid-line:currentColor]" />
        <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-40 overflow-hidden [mask-image:linear-gradient(to_top,black,transparent)]">
          <div className="scan-grid scan-floor absolute inset-x-[-30%] inset-y-0 opacity-40" />
        </div>
        <div className="relative">
          <Intro dark kicker="Request access" title={<>Somewhere in orbit there is a picture of <span className="text-accent">your problem.</span></>}>Tell us what imagery you have and what you need to know from it. You will get a straight answer about whether Locamage fits.</Intro>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href={calendar} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ size: "lg" }))}>Book a call<ArrowRightIcon /></a>
            <a href={`mailto:${email}`} className={cn(buttonVariants({ variant: "outline", size: "lg" }), "border-current/25 bg-transparent hover:bg-current/10 hover:text-current")}>{email}</a>
          </div>
        </div>
      </div>
    </section>
  )
}
