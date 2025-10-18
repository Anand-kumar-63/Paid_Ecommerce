import { notFound } from "next/navigation"
import { getSectorBySlug, sectors } from "@/lib/data/sectors"
import { Gallery } from "@/components/gallery"
import { PricingTable } from "@/components/pricing-table"
import { PortfolioGrid } from "@/components/portfolio-grid"
import { Reviews } from "@/components/reviews"

export function generateStaticParams() {
  return sectors.map((s) => ({ slug: s.slug }))
}

export function generateMetadata({ params }) {
  const sector = getSectorBySlug(params.slug)
  if (!sector) return { title: "Service not found" }
  return {
    title: `${sector.title} • Fabrication`,
    description: sector.description,
    openGraph: {
      title: sector.title,
      description: sector.description,
      images: [{ url: sector.imageUrl }],
    },
  }
}

export default function SectorPage({ params }) {
  const sector = getSectorBySlug(params.slug)
  if (!sector) return notFound()

  const gallery =
    sector.gallery && sector.gallery.length > 0
      ? sector.gallery
      : [
          { src: sector.imageUrl, alt: sector.title },
          { src: "/fabrication-sample.jpg", alt: "Fabrication sample" },
          { src: "/work-in-progress.jpg", alt: "Work in progress" },
        ]

  const pricing =
    sector.pricing && sector.pricing.length > 0
      ? sector.pricing
      : [
          {
            name: "Basic",
            price: "From ₹9,999",
            features: ["Site visit & estimate", "Standard materials", "3–5 day lead time"],
          },
          {
            name: "Standard",
            price: "From ₹24,999",
            features: ["Custom sizing", "Powder-coated finish", "7–10 day lead time"],
            highlighted: true,
          },
          {
            name: "Premium",
            price: "From ₹49,999",
            features: ["Engineering review", "Premium materials", "Priority install"],
          },
        ]

  const portfolio =
    sector.portfolio && sector.portfolio.length > 0
      ? sector.portfolio
      : [
          {
            title: "Project Alpha",
            imageUrl: "/installed-structure.jpg",
            description: "Installed structure at a public park.",
          },
          {
            title: "Project Bravo",
            imageUrl: "/industrial-fabrication.jpg",
            description: "Custom industrial fabrication for contractor.",
          },
          {
            title: "Project Charlie",
            imageUrl: "/stainless-steel-finish.jpg",
            description: "SS 304 handrail with polished finish.",
          },
        ]

  const reviews =
    sector.reviews && sector.reviews.length > 0
      ? sector.reviews
      : [
          { name: "Amit Sharma", rating: 5, comment: "Excellent build quality and on-time delivery." },
          { name: "Priya Singh", rating: 4, comment: "Great communication and sturdy materials." },
          { name: "Rahul Verma", rating: 5, comment: "Professional team, clean installation." },
        ]

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <header className="mb-8">
        <p className="text-sm text-muted-foreground">
          <a href="/services" className="hover:underline">
            Services
          </a>{" "}
          / {sector.title}
        </p>
        <h1 className="text-3xl font-bold text-balance">{sector.title}</h1>
        <p className="mt-2 text-muted-foreground">{sector.description}</p>
      </header>

      <section className="rounded-lg border border-border bg-card text-card-foreground overflow-hidden">
        <div className="relative w-full aspect-[16/9]">
          <img
            src={sector.imageUrl || "/placeholder.svg"}
            alt={sector.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="p-6">
          {sector.highlights && sector.highlights.length > 0 && (
            <div className="mb-4">
              <h2 className="text-xl font-semibold">Highlights</h2>
              <ul className="mt-2 list-disc pl-5 text-muted-foreground">
                {sector.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>
          )}
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/services"
              className="inline-flex items-center rounded-md border border-border bg-secondary text-secondary-foreground px-4 py-2 text-sm hover:opacity-90"
            >
              Back to all services
            </a>
            <a
              href="/contact"
              className="inline-flex items-center rounded-md bg-primary text-primary-foreground px-4 py-2 text-sm hover:opacity-90"
            >
              Get a quote
            </a>
          </div>
        </div>
      </section>

      <Gallery images={gallery} />
      <PricingTable tiers={pricing} />
      <PortfolioGrid items={portfolio} />
      <Reviews items={reviews} />
    </main>
  )
}
