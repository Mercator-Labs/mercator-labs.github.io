import { calendar, links, Wordmark } from "@/components/site"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
      <div className="wrap flex h-16 items-center justify-between gap-6">
        <Wordmark />
        <nav className="hidden items-center gap-8 text-base font-medium text-muted-foreground md:flex [&_a:hover]:text-foreground">
          {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <div className="flex items-center gap-2">
          <a href={calendar} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ variant: "ghost" }), "max-sm:hidden")}>Book a call</a>
          <a href="#access" className={cn(buttonVariants())}>Request access</a>
        </div>
      </div>
    </header>
  )
}
