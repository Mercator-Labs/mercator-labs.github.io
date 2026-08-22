import { Intro, Plate } from "@/components/site"

const inputs = [
  ["Optical", "street level to whole-country mosaics"],
  ["Radar", "structure through cloud and darkness"],
  ["Hyperspectral", "hundreds of bands past visible light"],
  ["Elevation", "terrain read as part of the scene"],
  ["Revisits", "the same acre, week after week"],
  ["Unseen sensors", "new feeds read on arrival, no retraining"],
]

const notes = [
  ["Thin-map places read clearly", "It learned from imagery covering the whole planet, so an unsurveyed region reads as well as a mapped one."],
  ["Your vocabulary, not ours", "Mark a few examples of the thing you track and it maps the rest using your labels."],
  ["Your archive becomes searchable", "The imagery you already pay to store turns into a queryable history of any acre."],
]

export function Model() {
  return (
    <section id="model" className="relative overflow-hidden bg-primary py-16 text-primary-foreground md:py-24">
      <div aria-hidden className="instrument-grid pointer-events-none absolute inset-0 opacity-[0.06] [--grid-line:currentColor]" />
      <div className="relative">
        <Intro dark kicker="The model" title={<>One model. <span className="text-accent">Any sensor.</span></>}>Most Earth AI is built for one satellite and falls apart on the next. Locamage was built the other way around.</Intro>
        <div className="wrap mt-14 grid gap-6 lg:grid-cols-2">
          <Plate src="/img/ftw/2_orig.webp" alt="Sentinel-2 harvest composite of Iowa farmland used to illustrate the model reading many sensors at once" className="md:rounded-[2.5rem]">
            <div aria-hidden className="absolute inset-0 bg-foreground/25" />
            <svg aria-hidden className="absolute inset-0 size-full" preserveAspectRatio="none"><path d="M 38% 44% L 58% 44% L 58% 62%" fill="none" stroke="currentColor" strokeOpacity=".7" strokeWidth="1.5" strokeDasharray="4 5" /></svg>
            <div className="absolute top-[24%] left-[8%] flex h-[38%] w-[30%] items-center justify-center rounded-2xl border border-current/25 bg-current/10 text-4xl font-medium tracking-tight backdrop-blur-md md:text-6xl">API</div>
            <div className="absolute top-[42%] right-[8%] flex h-[40%] w-[34%] items-center justify-center rounded-2xl border border-current/25 bg-current/10 text-4xl font-medium tracking-tight backdrop-blur-md md:text-6xl">SDK</div>
            <div className="absolute bottom-4 left-4 max-w-xs rounded-3xl bg-accent p-5 text-accent-foreground shadow-2xl md:bottom-6 md:left-6">
              <p className="text-lg leading-tight font-medium tracking-tight md:text-xl">One model reads them together.</p>
              <p className="mt-3 text-sm leading-relaxed text-accent-foreground/85">Plain words: where to look, what changed, and what to do about it.</p>
            </div>
          </Plate>
          <ul className="flex flex-col divide-y divide-current/12 rounded-[2rem] border border-current/12 bg-current/5 px-6 md:rounded-[2.5rem] md:px-8">
            {inputs.map(([name, detail], i) => (
              <li key={name} className="flex flex-1 flex-col justify-center gap-1 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                <span className="flex items-baseline gap-4">
                  <span className="label text-current/40">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-xl font-medium tracking-tight">{name}</span>
                </span>
                <span className="text-sm leading-relaxed text-current/60 sm:text-right">{detail}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="wrap mt-14 grid gap-8 md:grid-cols-3 md:gap-10">
          {notes.map(([title, body]) => (
            <div key={title}>
              <h3 className="text-lg leading-snug font-medium tracking-tight">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-current/60">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
