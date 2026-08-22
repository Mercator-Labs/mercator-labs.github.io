import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export const email = "pinak@locamage.com"
export const calendar = "https://calendar.app.google/j5f5RdS1qkEQQXXA6"
export const links = [["Product", "#product"], ["Use cases", "#use-cases"], ["How it works", "#how"], ["FAQ", "#faq"]]

export function Logo({ className }: { className?: string }) {
  return (
    <a href="#" className={cn("flex items-center gap-2 font-heading text-lg text-foreground", className)}>
      <img src="/icon.svg" alt="" className="size-6 rounded-md" />
      Locamage
    </a>
  )
}

export function Book({ className, size = "lg", ...props }: React.ComponentProps<"a"> & { size?: "default" | "lg" }) {
  return <a href={calendar} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ size }), className)} {...props}>Book a call</a>
}

export function Heading({ kicker, title, children, className }: { kicker: string; title: React.ReactNode; children?: React.ReactNode; className?: string }) {
  return (
    <div className={cn("reveal mx-auto mb-12 max-w-2xl text-center", className)}>
      <p className="mb-3 text-sm font-medium text-primary">{kicker}</p>
      <h2 className="text-3xl md:text-5xl">{title}</h2>
      {children && <p className="mt-4 text-lg text-muted-foreground">{children}</p>}
    </div>
  )
}

export function Placeholder({ className, label = "Placeholder" }: { className?: string; label?: string }) {
  return <div className={cn("grid place-items-center rounded-xl border border-dashed bg-muted text-xs text-muted-foreground", className)}>{label}</div>
}
