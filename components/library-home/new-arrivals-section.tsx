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

const titles = [
  "Thinking Through Graphic History",
  "Transforming Typography",
  "Turner's Apparitions",
  "Stochastic Images",
  "Advanced Design",
  "Creative Coding",
] as const

export function NewArrivalsSection() {
  const [dialogOpen, setDialogOpen] = React.useState(false)
  const [selectedIndex, setSelectedIndex] = React.useState<number | null>(null)

  const handleOpen = (index: number) => {
    setSelectedIndex(index)
    setDialogOpen(true)
  }

  const selectedTitle = selectedIndex !== null ? titles[selectedIndex] : null

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-center text-[#2A2A2F] mb-12">New Arrivals</h2>

        <div
          className={`mx-auto lib-orbit-container h-[360px] w-[360px] md:h-[520px] md:w-[520px] ${
            dialogOpen ? "lib-carousel-paused" : ""
          }`}
        >
          <div className="lib-orbit-ring">
            {titles.map((title, index) => {
              const angle = (360 / titles.length) * index
              return (
                <button
                  key={title}
                  type="button"
                  onClick={() => handleOpen(index)}
                  className="lib-orbit-item rounded-lg focus:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  style={{
                    transform: `translate(-50%, -50%) rotateZ(${angle}deg) translateX(var(--orbit-radius))`,
                  }}
                  aria-label={`Open details for ${title}`}
                >
                  <div className="lib-orbit-face relative">
                    <div className="pointer-events-none absolute left-1/2 top-[calc(100%-0.25rem)] h-6 w-[70%] -translate-x-1/2 rounded-full bg-foreground/10 blur-md" />
                    <Card className="relative w-[140px] md:w-[170px] overflow-hidden border-[#DDE5E9] shadow-lg">
                      <CardContent className="p-0">
                        <div className="aspect-[3/4] bg-gradient-to-br from-[#3048cd] to-[#6BC533]">
                          <Image
                            src={`/placeholder.svg?height=300&width=200&query=${encodeURIComponent(title)}`}
                            alt={title}
                            width={200}
                            height={300}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-2 bg-white">
                          <p className="text-xs font-semibold text-[#2A2A2F] line-clamp-2">{title}</p>
                        </div>
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
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedTitle ?? "New Arrival"}</DialogTitle>
            <DialogDescription>
              {selectedTitle ? "Preview the new arrival." : "Select an item to preview."}
            </DialogDescription>
          </DialogHeader>

          {selectedTitle && (
            <div className="w-full">
              <div className="[perspective:1200px]">
                <div className="aspect-[3/4] w-full overflow-hidden rounded-md bg-muted">
                  <Image
                    src={`/placeholder.svg?height=900&width=600&query=${encodeURIComponent(selectedTitle)}`}
                    alt={selectedTitle}
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
