"use client"

import { MenuIcon } from "lucide-react"
import { useState } from "react"
import { Book, calendar, links } from "@/components/site"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between gap-6 border-b bg-white/95 px-pad py-3 backdrop-blur">
      <a href="#" className="flex items-center gap-2.5 font-heading text-xl tracking-wide before:size-2.5 before:bg-primary">Locamage</a>
      <nav className="hidden gap-8 text-sm uppercase tracking-wider text-muted-foreground md:flex [&_a:hover]:text-foreground">
        {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
      </nav>
      <Book size="default" className="max-md:hidden" />
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger render={<Button variant="ghost" size="icon" className="md:hidden" />}>
          <MenuIcon />
          <span className="sr-only">Menu</span>
        </SheetTrigger>
        <SheetContent side="top" className="gap-2 px-pad pt-20 pb-10 shadow-none [&_a]:font-heading [&_a]:text-4xl [&_a]:text-muted-foreground [&_a:hover]:text-foreground">
          <SheetTitle className="sr-only">Navigation</SheetTitle>
          {[...links, ["Book a call", calendar]].map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        </SheetContent>
      </Sheet>
    </header>
  )
}
