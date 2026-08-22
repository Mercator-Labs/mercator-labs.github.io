import { calendar, email, links, Logo } from "@/components/site"

function Col({ title, items }: { title: string; items: string[][] }) {
  return (
    <div className="flex flex-col gap-2.5">
      <p className="mb-1 font-medium text-foreground">{title}</p>
      {items.map(([label, href]) => <a key={label} href={href} className="hover:text-foreground">{label}</a>)}
    </div>
  )
}

export function Footer() {
  return (
    <footer className="border-t px-6 py-12 text-sm text-muted-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
        <div className="sm:col-span-2 lg:col-span-1">
          <Logo />
          <p className="mt-3 max-w-xs">The universal geospatial foundation model. Satellite imagery, answered.</p>
        </div>
        <Col title="Product" items={links} />
        <Col title="Company" items={[["Contact", "#contact"], ["Book a call", calendar], [email, `mailto:${email}`]]} />
        <Col title="Location" items={[["San Francisco, California", "#"]]} />
      </div>
      <p className="mx-auto mt-10 max-w-6xl text-xs leading-relaxed [&_a]:underline [&_a]:underline-offset-2">
        Contains modified Copernicus Sentinel data 2015–2024. Tiles and labels from <a href="https://open-earth-map.org" target="_blank" rel="noopener noreferrer">OpenEarthMap</a> (<a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>) and the <a href="https://ieee-dataport.org/open-access/oscd-onera-satellite-change-detection" target="_blank" rel="noopener noreferrer">Onera Satellite Change Detection dataset</a>, source imagery by FAZO Institute, AIGEO Center (CC BY 4.0) and GeoNRW, Land NRW (<a href="https://www.govdata.de/dl-de/by-2-0" target="_blank" rel="noopener noreferrer">dl-de/by-2-0</a>), shown cropped and recolored.
      </p>
      <p className="mx-auto mt-6 max-w-6xl border-t pt-6 text-xs">© {new Date().getFullYear()} Locamage</p>
    </footer>
  )
}
