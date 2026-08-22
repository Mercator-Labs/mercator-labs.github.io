const sources = ["Sentinel-1", "Sentinel-2", "Landsat 8/9", "Planet", "Maxar", "NAIP", "ICEYE", "Capella", "EnMAP", "Drone & aerial"]

export function Sources() {
  return (
    <section className="wrap py-14 md:py-16">
      <h2 className="text-center text-sm font-medium text-muted-foreground">Already reading imagery from every major feed</h2>
      <ul className="mt-8 flex flex-wrap justify-center gap-3 text-sm font-medium">
        {sources.map((s) => <li key={s} className="rounded-full border bg-card px-4 py-2 text-foreground/80">{s}</li>)}
        <li className="rounded-full bg-accent px-4 py-2 text-accent-foreground">+ feeds it has never seen</li>
      </ul>
    </section>
  )
}
