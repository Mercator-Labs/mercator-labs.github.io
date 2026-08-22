"use client"

import { MenuIcon } from "lucide-react"
import { useState } from "react"
import { Book, calendar, links, Logo } from "@/components/site"
import { Button, buttonVariants } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-6">
        <Logo />
        <nav className="hidden gap-8 text-sm text-muted-foreground md:flex [&_a:hover]:text-foreground">
          {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <a href="#contact" className={buttonVariants({ variant: "ghost" })}>Request access</a>
          <Book size="default" />
        </div>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger render={<Button variant="ghost" size="icon" className="md:hidden" />}>
            <MenuIcon />
            <span className="sr-only">Menu</span>
          </SheetTrigger>
          <SheetContent side="top" className="gap-4 px-6 pt-20 pb-8 text-xl [&_a:hover]:text-foreground">
            <SheetTitle className="sr-only">Navigation</SheetTitle>
            {[...links, ["Request access", "#contact"], ["Book a call", calendar]].map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
