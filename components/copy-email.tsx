"use client"

import { useState } from "react"
import { email } from "@/components/site"
import { Button } from "@/components/ui/button"

export function CopyEmail() {
  const [copied, setCopied] = useState(false)
  const copy = () => navigator.clipboard?.writeText(email).then(() => {
    setCopied(true)
    setTimeout(() => setCopied(false), 2200)
  })
  return <Button variant="outline" size="lg" onClick={copy}>{copied ? "Copied" : "Copy email"}</Button>
}
