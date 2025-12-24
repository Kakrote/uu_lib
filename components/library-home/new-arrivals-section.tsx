"use client"

import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import Image from "next/image"
import { LibraryImages } from "@/lib/about"

export function NewArrivalsSection() {
  const [dialogOpen, setDialogOpen] = React.useState(false)
  const [selectedIndex, setSelectedIndex] = React.useState<number | null>(null)

  const handleOpen = (index: number) => {
    setSelectedIndex(index)
    setDialogOpen(true)
  }

  const selectedImage = selectedIndex !== null ? LibraryImages[selectedIndex] : null

  return (
    <section className="py-12 sm:py-12 md:py-16 bg-[#3366c5] ">
        <h2 className="text-4xl md:text-6xl font-extrabold text-center text-[#ffffff] mb-8 ">Library Gallery</h2>
      <div className=" px-4  overflow-hidden  ">

        <div
          className={`mx-auto lib-orbit-container h-[495px] w-[280px] sm:h-[360px] sm:w-[360px] md:h-[550px] md:w-[550px] lg:h-[820px] lg:w-[820px]  ${
            dialogOpen ? "lib-carousel-paused" : ""
          }`}
        >
          <div className="lib-orbit-ring  ">
            {LibraryImages.map((image, index) => {
              const angle = (360 / LibraryImages.length) * index
              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleOpen(index)}
                  className="lib-orbit-item rounded-lg focus:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  style={{
                    transform: `translate(-50%, -50%) rotateZ(${angle}deg) translateX(var(--orbit-radius))`,
                  }}
                  aria-label={`Open details for ${image.label}`}
                >
                  <div className="lib-orbit-face relative ">
                    <div className="pointer-events-none absolute left-1/2 top-[calc(100%-0.25rem)] h-6 w-[80%] -translate-x-1/2 rounded-full bg-foreground/10 blur-md" />
                    <Card className="relative w-[100px] sm:w-[120px] md:w-[150px] lg:w-[220px] xl:w-[250px] bg-transparent overflow-hidden  border-none shadow-lg">
                      <CardContent className="p-0">
                        <div className="aspect-[3/4] bg-gradient-to-br from-[#3048cd] to-[#6BC533] ">
                          <Image
                            src={image.img}
                            alt={image.label}
                            width={200}
                            height={300}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        {/* <div className="p-1.5 sm:p-2 md:p-2.5 lg:p-3 xl:p-4">
                          <p className="text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg uppercase font-semibold text-[#ffffff] line-clamp-2">{image.label}</p>
                        </div> */}
                      </CardContent>
                    </Card>
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-[90vw] sm:max-w-[600px] md:max-w-[700px]">
          <DialogHeader>
            <DialogTitle className="text-lg sm:text-xl md:text-2xl">{selectedImage?.label ?? "New Arrival"}</DialogTitle>
            <DialogDescription className="text-sm sm:text-base">
              {selectedImage ? "Preview the new arrival." : "Select an item to preview."}
            </DialogDescription>
          </DialogHeader>

          {selectedImage && (
            <div className="w-full">
              <div className="[perspective:1200px]">
                <div className="aspect-[3/4] w-full overflow-hidden rounded-md bg-muted">
                  <Image
                    src={selectedImage.img}
                    alt={selectedImage.label}
                    width={600}
                    height={900}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
