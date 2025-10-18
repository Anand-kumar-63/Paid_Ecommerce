import Link from "next/link"

export function ServicesGrid({ items }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <article
          key={item.slug}
          className="bg-card text-card-foreground rounded-lg border border-border shadow-sm hover:shadow-md transition"
        >
          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-t-lg">
            {/* Using img for simplicity and broad support */}
            <img
              src={item.imageUrl || "/placeholder.svg"}
              alt={item.title}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="p-5 flex flex-col gap-2">
            <h3 className="text-lg font-semibold text-pretty">{item.title}</h3>
            <p className="text-sm text-muted-foreground">{item.description}</p>
            <div className="pt-2">
              <Link
                href={`/services/${item.slug}`}
                className="inline-flex items-center gap-2 text-primary hover:underline"
                aria-label={`Learn more about ${item.title}`}
              >
                Learn more
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}
/**
 * @typedef {Object} Sector
 * @property {string} slug
 * @property {string} title
 * @property {string} description
 * @property {string} imageUrl
 * @property {string[]} [highlights]
 * @property {{src:string,alt:string}[]} [gallery]
 * @property {{name:string,price:string,features:string[],highlighted?:boolean}[]} [pricing]
 * @property {{title:string,imageUrl:string,description?:string}[]} [portfolio]
 * @property {{name:string,rating:number,comment:string,avatarUrl?:string}[]} [reviews]
 */

const sectors = [
  {
    slug: "playground-equipment",
    title: "Playground Equipment",
    description:
      "Slides, chain swings, sea-saws, merry-go-rounds for schools and public parks with strong, child-safe designs.",
    imageUrl: "https://www.playlsi.com/globalassets/1440x560-hero/challenging-play-02_1440x560.jpg",
    highlights: ["Child-safe, durable designs", "Weather-resistant finishes", "Installation and maintenance support"],
  },
  {
    slug: "government-contractor-works",
    title: "Government & Contractor Works",
    description:
      "Trolleys, custom industrial fabrication, and heavy-duty solutions trusted by contractors and government projects.",
    imageUrl: "https://media.biltrax.com/wp-content/uploads/2022/07/iStock-1028568006.jpg",
    highlights: ["Heavy-duty industrial fabrication", "Compliance-focused builds", "Custom solutions for tenders"],
  },
  {
    slug: "schools-hospitals",
    title: "Schools & Hospitals",
    description: "Durable, safe, and long-lasting structures designed for educational and healthcare institutions.",
    imageUrl: "https://cdn.prod.website-files.com/66009083978d59646ab59be1/6799cdab67f89ea7bf001207_tmppy6c_h5b.jpeg",
    highlights: ["Hygienic, easy-to-clean finishes", "Safety-first engineering", "Long service life"],
  },
  {
    slug: "public-society-parks",
    title: "Public & Society Parks",
    description: "Benches, canopies, play structures, and urban furniture for modern community parks and green spaces.",
    imageUrl:
      "https://d34c09ztlk5mrb.cloudfront.net/cunningham-recreation/d2sacxxyngi6cb_cloudfront_net/Hoover_183d17ce614a305ef7e14498bef98c4b.jpg",
    highlights: ["Urban-friendly designs", "Low-maintenance materials", "Anti-vandalism considerations"],
  },
  {
    slug: "gates-grills-railings",
    title: "Gates, Grills & Railings",
    description:
      "Modern, stylish, and long-lasting designs in iron and steel for homes, offices, and industrial spaces.",
    imageUrl:
      "https://i0.wp.com/laitoncrafts.com/wp-content/uploads/2023/04/grills-Image-copy.webp?fit=1920%2C1080&ssl=1",
    highlights: ["Custom patterns and finishes", "Security-first designs", "Indoor and outdoor applications"],
  },
  {
    slug: "ss-304-steel-work",
    title: "SS 304 Steel Work",
    description: "Professional stainless steel work with SS 304 grade – corrosion resistant and quality assured.",
    imageUrl: "https://www.azom.com/images/Article_Thumbs/ThumbForArticle_2867_16010306047694886.png",
    highlights: ["Food-grade applications", "Corrosion-resistant builds", "Polished and matte finishes"],
  },
  {
    slug: "industrial-sheds",
    title: "Industrial Sheds",
    description: "Fabrication and design of industrial sheds with maximum strength, durability, and cost efficiency.",
    imageUrl: "https://assets.jswonemsme.com/medium_peb_industrial_28c55e9222/medium_peb_industrial_28c55e9222.jpg",
    highlights: ["Optimized structural design", "Fast on-site assembly", "Cost-efficient planning"],
  },
]

function getSectorBySlug(slug) {
  return sectors.find((s) => s.slug === slug)
}

export { sectors, getSectorBySlug }
