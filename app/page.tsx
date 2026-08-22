import { Capabilities } from "@/components/capabilities"
import { Cta } from "@/components/cta"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/hero"
import { Model } from "@/components/model"
import { Nav } from "@/components/nav"
import { Sources } from "@/components/sources"

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Sources />
        <Capabilities />
        <Model />
        <Cta />
      </main>
      <Footer />
    </>
  )
}
