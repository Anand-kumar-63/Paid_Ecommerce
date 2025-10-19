import { ServicesGrid, sectors } from "../../Components/services-grid"

// Metadata removed; not applicable in Vite React SPA

export default function ServicesPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-balance">Fabrication Services</h1>
        <p className="mt-2 text-muted-foreground">
          We specialize in custom fabrication work, delivering high-quality solutions for every need. Select a sector to
          see details.
        </p>
      </header>
      <ServicesGrid items={sectors} />
      <section className="mt-12 rounded-lg border border-border bg-card text-card-foreground p-6">
        <h2 className="text-xl font-semibold">Maintenance & Repair Services</h2>
        <p className="mt-2 text-muted-foreground">
          We don’t just build — we keep your equipment in peak condition with regular checkups, emergency repairs, and
          cost-effective AMC packages.
        </p>
      </section>
    </main>
  )
}
