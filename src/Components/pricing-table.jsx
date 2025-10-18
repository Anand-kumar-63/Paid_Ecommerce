export function PricingTable({ tiers }) {
  if (!tiers?.length) return null
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-semibold">Pricing</h2>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {tiers.map((tier) => (
          <article
            key={tier.name}
            className={`rounded-lg border border-border bg-card text-card-foreground p-6 shadow-sm ${
              tier.highlighted ? "ring-2 ring-primary" : ""
            }`}
          >
            <h3 className="text-lg font-semibold">{tier.name}</h3>
            <p className="mt-2 text-2xl font-bold">{tier.price}</p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {tier.features.map((f) => (
                <li key={f}>• {f}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
