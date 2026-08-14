"use client"

import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

import { cn } from "@/lib/utils"

export interface GalleryImage {
  src: string
  alt?: string
}

export interface GalleryProps extends React.HTMLAttributes<HTMLDivElement> {
  images: GalleryImage[]
  columns?: 2 | 3 | 4
}

function Gallery({ images, columns = 3, className, ...props }: GalleryProps) {
  const [open, setOpen] = React.useState(false)
  const [activeIndex, setActiveIndex] = React.useState(0)

  const openLightbox = (index: number) => {
    setActiveIndex(index)
    setOpen(true)
  }

  const goTo = (direction: "prev" | "next") => {
    setActiveIndex((current) => {
      if (direction === "prev") return current === 0 ? images.length - 1 : current - 1
      return current === images.length - 1 ? 0 : current + 1
    })
  }

  React.useEffect(() => {
    if (!open) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goTo("prev")
      if (e.key === "ArrowRight") goTo("next")
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [open, images.length])

  const gridCols = {
    2: "grid-cols-2",
    3: "grid-cols-2 md:grid-cols-3",
    4: "grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
  } as const

  if (!images.length) return null

  return (
    <>
      <div
        className={cn("grid gap-3", gridCols[columns], className)}
        {...props}
      >
        {images.map((image, index) => (
          <button
            key={index}
            type="button"
            className="group relative aspect-square overflow-hidden rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2"
            onClick={() => openLightbox(index)}
          >
            <img
              src={image.src}
              alt={image.alt || `Image ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
          </button>
        ))}
      </div>

      {/* Lightbox Modal */}
      <DialogPrimitive.Root open={open} onOpenChange={setOpen}>
        <DialogPrimitive.Portal>
          <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
          <DialogPrimitive.Content
            className="fixed inset-0 z-50 flex items-center justify-center outline-none"
            aria-describedby={undefined}
          >
            <DialogPrimitive.Title className="sr-only">
              Image gallery viewer
            </DialogPrimitive.Title>

            {/* Close button */}
            <DialogPrimitive.Close className="absolute top-4 right-4 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors">
              <X className="w-5 h-5" />
              <span className="sr-only">Close</span>
            </DialogPrimitive.Close>

            {/* Previous button */}
            {images.length > 1 && (
              <button
                type="button"
                onClick={() => goTo("prev")}
                className="absolute left-4 z-10 flex items-center justify-center w-12 h-12 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            {/* Image */}
            <img
              src={images[activeIndex]?.src}
              alt={images[activeIndex]?.alt || `Image ${activeIndex + 1}`}
              className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg select-none"
            />

            {/* Next button */}
            {images.length > 1 && (
              <button
                type="button"
                onClick={() => goTo("next")}
                className="absolute right-4 z-10 flex items-center justify-center w-12 h-12 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}

            {/* Counter */}
            {images.length > 1 && (
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium backdrop-blur-sm">
                {activeIndex + 1} / {images.length}
              </div>
            )}
          </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
      </DialogPrimitive.Root>
    </>
  )
}

export { Gallery }
