export function PortfolioGrid({ items }) {
  if (!items?.length) return null
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-semibold">Work We’ve Done</h2>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((it) => (
          <article
            key={it.title}
            className="rounded-lg border border-border bg-card text-card-foreground overflow-hidden"
          >
            <div className="relative w-full aspect-[16/9]">
              <img
                src={it.imageUrl || "/placeholder.svg?height=720&width=1280&query=completed%20project"}
                alt={it.title}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold">{it.title}</h3>
              {it.description ? <p className="mt-2 text-sm text-muted-foreground">{it.description}</p> : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
