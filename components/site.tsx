import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export const email = "pinak@locamage.com"
export const calendar = "https://calendar.app.google/j5f5RdS1qkEQQXXA6"
export const links = [["What it does", "#jobs"], ["Use cases", "#markets"], ["The model", "#model"], ["Contact", "#contact"]]
export const bands = { optical: "bg-primary", radar: "bg-teal-700", hyperspectral: "bg-violet-600", elevation: "bg-amber-700", revisits: "bg-green-700", unseen: "bg-pink-700" }
export type Band = keyof typeof bands

export function Book({ className, size = "lg", ...props }: React.ComponentProps<"a"> & { size?: "default" | "lg" }) {
  return <a href={calendar} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ size }), className)} {...props}>Book a call</a>
}

export function Kicker({ children }: { children: React.ReactNode }) {
  return <p className="mb-5 flex items-center gap-3 text-sm font-medium uppercase tracking-widest text-primary before:h-px before:w-4 before:bg-primary">{children}</p>
}

export function Intro({ kicker, title, children }: { kicker: string; title: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="reveal mb-12 grid items-end gap-4 md:grid-cols-2 md:gap-10">
      <div>
        <Kicker>{kicker}</Kicker>
        <h2 className="text-headline">{title}</h2>
      </div>
      <p className="max-w-lg text-lg leading-relaxed text-muted-foreground md:text-xl">{children}</p>
    </div>
  )
}

export function Meta({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("flex justify-between gap-4 bg-muted px-4 py-2.5 text-xs uppercase tracking-wider text-muted-foreground tabular-nums", className)} {...props} />
}

export function Chips({ label, items, className }: { label: string; items: Band[]; className?: string }) {
  return (
    <p className={cn("flex flex-wrap items-center gap-x-3 gap-y-2 text-xs uppercase tracking-widest text-muted-foreground", className)}>
      {label}
      {items.map((b) => (
        <Badge key={b} variant="outline" className="gap-2 font-normal">
          <i className={cn("size-2", bands[b])} />
          {b}
        </Badge>
      ))}
    </p>
  )
}
