import { AspectRatio } from "@/components/ui/aspect-ratio"

export function Gallery({ images }) {
  if (!images?.length) return null;
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-semibold">Gallery</h2>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((img, idx) => (
          <div key={idx} className="rounded-lg border border-border bg-card text-card-foreground overflow-hidden">
            <AspectRatio ratio={16 / 9}>
              <img
                src={img.src || "/placeholder.svg?height=720&width=1280&query=fabrication%20sample"}
                alt={img.alt || "Project image"}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </AspectRatio>
          </div>
        ))}
      </div>
    </section>
  )
}
