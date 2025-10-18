function Stars({ rating }) {
  const full = Math.max(0, Math.min(5, Math.round(rating)))
  return (
    <div className="flex items-center gap-1 text-yellow-500" aria-label={`Rating: ${full} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} aria-hidden>
          {i < full ? "★" : "☆"}
        </span>
      ))}
    </div>
  )
}

export function Reviews({ items }) {
  if (!items?.length) return null
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-semibold">Customer Reviews</h2>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((r, idx) => (
          <figure key={idx} className="rounded-lg border border-border bg-card text-card-foreground p-6">
            <div className="flex items-center gap-3">
              <img
                src={r.avatarUrl || "/placeholder-user.jpg"}
                alt={`${r.name} avatar`}
                className="h-10 w-10 rounded-full object-cover"
                loading="lazy"
              />
              <div>
                <figcaption className="font-medium">{r.name}</figcaption>
                <Stars rating={r.rating} />
              </div>
            </div>
            <blockquote className="mt-4 text-sm text-muted-foreground">“{r.comment}”</blockquote>
          </figure>
        ))}
      </div>
    </section>
  )
}
