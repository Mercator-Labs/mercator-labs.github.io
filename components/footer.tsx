import { bands, email, links } from "@/components/site"
import { cn } from "@/lib/utils"

function Col({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2.5">
      <p className="mb-1 text-sm uppercase tracking-widest text-background/50">{title}</p>
      {children}
    </div>
  )
}

export function Footer() {
  return (
    <footer className="bg-foreground px-pad pt-12 pb-7 text-background/70 [&_a:hover]:text-background">
      <div className="grid gap-8 border-b border-background/10 pb-9 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
        <div className="sm:col-span-2 lg:col-span-1">
          <p className="mb-2 flex items-center gap-2.5 font-heading text-lg tracking-wide text-background before:size-2 before:bg-primary">Locamage</p>
          <p className="text-lg leading-relaxed">Satellite imagery,<br />answered.</p>
        </div>
        <Col title="Product">{links.slice(0, 3).map(([label, href]) => <a key={href} href={href}>{label}</a>)}</Col>
        <Col title="Company">
          <a href="#contact">Contact</a>
          <a href={`mailto:${email}`}>{email}</a>
        </Col>
        <Col title="Location">
          <span>San Francisco</span>
          <span>California</span>
        </Col>
      </div>
      <p className="my-6 max-w-4xl text-xs leading-relaxed text-background/50 [&_a]:underline [&_a]:underline-offset-2">
        Contains modified Copernicus Sentinel data 2015–2024. Tiles and labels from <a href="https://open-earth-map.org" target="_blank" rel="noopener noreferrer">OpenEarthMap</a> (<a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>) and the <a href="https://ieee-dataport.org/open-access/oscd-onera-satellite-change-detection" target="_blank" rel="noopener noreferrer">Onera Satellite Change Detection dataset</a>, source imagery by FAZO Institute, AIGEO Center (CC BY 4.0) and GeoNRW, Land NRW (<a href="https://www.govdata.de/dl-de/by-2-0" target="_blank" rel="noopener noreferrer">dl-de/by-2-0</a>), shown cropped and recolored.
      </p>
      <div className="flex flex-wrap items-center justify-between gap-2 text-sm tabular-nums">
        <span>© {new Date().getFullYear()} Locamage</span>
        <div className="flex">{Object.values(bands).map((b) => <i key={b} className={cn("h-2.5 w-4", b)} />)}</div>
        <span>37°46′N · 122°25′W</span>
      </div>
    </footer>
  )
}
