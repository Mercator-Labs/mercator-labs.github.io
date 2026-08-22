import { calendar, email, links, Wordmark } from "@/components/site"

const groups: [string, string[][]][] = [
  ["Product", links],
  ["Sensors", ["Optical", "Radar", "Hyperspectral", "Elevation"].map((s) => [s, "#model"])],
  ["Company", [["Request access", "#access"], ["Book a call", calendar], [email, `mailto:${email}`]]],
]

export function Footer() {
  return (
    <footer className="wrap flex flex-col gap-12 border-t py-14 text-base">
      <div className="grid gap-10 md:grid-cols-4">
        <div className="flex flex-col gap-4">
          <Wordmark />
          <p className="max-w-56 leading-relaxed text-muted-foreground">The universal geospatial foundation model. Answers from orbit.</p>
        </div>
        {groups.map(([heading, items]) => (
          <nav key={heading} aria-label={heading} className="flex flex-col gap-4">
            <h2 className="label text-muted-foreground">{heading}</h2>
            <ul className="flex flex-col gap-2.5 text-foreground/80 [&_a:hover]:text-accent">
              {items.map(([label, href]) => <li key={label}><a href={href}>{label}</a></li>)}
            </ul>
          </nav>
        ))}
      </div>
      <p className="text-sm leading-relaxed text-muted-foreground [&_a]:underline [&_a]:underline-offset-2">
        Contains modified Copernicus Sentinel data 2015–2024. Tiles and labels from <a href="https://open-earth-map.org" target="_blank" rel="noopener noreferrer">OpenEarthMap</a> (<a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>) and the <a href="https://ieee-dataport.org/open-access/oscd-onera-satellite-change-detection" target="_blank" rel="noopener noreferrer">Onera Satellite Change Detection dataset</a>, source imagery by FAZO Institute, AIGEO Center (CC BY 4.0) and GeoNRW, Land NRW (<a href="https://www.govdata.de/dl-de/by-2-0" target="_blank" rel="noopener noreferrer">dl-de/by-2-0</a>), shown cropped and recolored.
      </p>
      <div className="label flex flex-col gap-2 border-t pt-6 text-muted-foreground sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} Locamage</p>
        <p>Any sensor · Any resolution · Any revisit</p>
      </div>
    </footer>
  )
}
