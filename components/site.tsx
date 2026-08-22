import { cn } from "@/lib/utils"

export const email = "pinak@locamage.com"
export const calendar = "https://calendar.app.google/j5f5RdS1qkEQQXXA6"
export const links = [["Capabilities", "#capabilities"], ["The model", "#model"]]

export function Wordmark() {
  return (
    <a href="#" className="flex items-center gap-2.5 text-[0.9375rem] font-semibold tracking-tight">
      <span aria-hidden className="relative flex size-6 items-center justify-center rounded-sm bg-primary before:absolute before:inset-x-0 before:top-1/2 before:h-px before:bg-primary-foreground/35 after:absolute after:inset-y-0 after:left-1/2 after:w-px after:bg-primary-foreground/35">
        <span className="size-1.5 rounded-full bg-accent" />
      </span>
      Locamage
    </a>
  )
}

export function Eyebrow({ className, ...props }: React.ComponentProps<"p">) {
  return <p className={cn("inline-flex w-fit items-center gap-2 rounded-full border bg-card px-3.5 py-1.5 text-sm font-medium", className)} {...props} />
}

export function Intro({ kicker, title, children, dark }: { kicker: string; title: React.ReactNode; children?: React.ReactNode; dark?: boolean }) {
  return (
    <div className="wrap text-center">
      <Eyebrow className={cn("mx-auto", dark && "border-current/20 bg-transparent")}>
        {dark && <i className="size-1.5 rounded-full bg-accent" />}
        {kicker}
      </Eyebrow>
      <h2 className="display-band mx-auto mt-6 max-w-4xl">{title}</h2>
      {children && <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-current/70 md:text-xl">{children}</p>}
    </div>
  )
}

export function Plate({ src, alt, className, children }: { src: string; alt: string; className?: string; children?: React.ReactNode }) {
  return (
    <div className={cn("relative overflow-hidden rounded-[2rem] bg-foreground md:rounded-[2.75rem]", className)}>
      <img src={src} alt={alt} className="block w-full transition-transform duration-700 group-hover:scale-105" />
      <div aria-hidden className="absolute inset-0 overflow-hidden">
        <div className="scan-grid scan-floor absolute inset-x-[-40%] top-[-10%] bottom-0" />
      </div>
      {children}
    </div>
  )
}
