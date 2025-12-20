"use client"

import * as React from "react"

import Image from "next/image"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

type Book = {
  name: string
  img: string
  description: string
}

const Newarrivals = () => {
  const [dialogOpen, setDialogOpen] = React.useState(false)
  const [selectedBook, setSelectedBook] = React.useState<Book | null>(null)
  const [cardWidth, setCardWidth] = React.useState(350)

  React.useEffect(() => {
    const updateCardWidth = () => {
      if (window.innerWidth < 640) {
        // mobile
        setCardWidth(140)
      } else if (window.innerWidth < 1024) {
        // small devices (tablets)
        setCardWidth(200)
      } else {
        // big screens
        setCardWidth(350)
      }
    }

    updateCardWidth()
    window.addEventListener('resize', updateCardWidth)
    return () => window.removeEventListener('resize', updateCardWidth)
  }, [])

  const books: Book[] = [
    {
      name: "Think and Grow Rich-1",
      img: "/images/tagr.webp",
      description:
        "A practical classic about mindset, habits, and goal-setting to help you build a clear plan for success.",
    },
    {
      name: "Think and Grow Rich-2",
      img: "/images/tagr.webp",
      description:
        "A practical classic about mindset, habits, and goal-setting to help you build a clear plan for success.",
    },
    {
      name: "Think and Grow Rich-3",
      img: "/images/tagr.webp",
      description:
        "A practical classic about mindset, habits, and goal-setting to help you build a clear plan for success.",
    },
    {
      name: "Think and Grow Rich-4",
      img: "/images/tagr.webp",
      description:
        "A practical classic about mindset, habits, and goal-setting to help you build a clear plan for success.",
    },
    {
      name: "Think and Grow Rich-5",
      img: "/images/tagr.webp",
      description:
        "A practical classic about mindset, habits, and goal-setting to help you build a clear plan for success.",
    },
    {
      name: "Think and Grow Rich-6",
      img: "/images/tagr.webp",
      description:
        "A practical classic about mindset, habits, and goal-setting to help you build a clear plan for success.",
    },
  ]

  const total = books.length
  // Keep the carousel in-frame by computing a reasonable radius.
  // For N items around a ring: r = (w/2) / tan(pi/N)
  const radius = Math.round((cardWidth / 2) / Math.tan(Math.PI / total)) + 40

  const handleOpen = (book: Book) => {
    console.log('handleOpen called', book.name)
    setSelectedBook(book)
    setDialogOpen(true)
    console.log('State updated - dialogOpen should be true')
  }

  const handleDialogChange = (open: boolean) => {
    console.log('handleDialogChange called', open)
    setDialogOpen(open)
    if (!open) setSelectedBook(null)
  }

  React.useEffect(() => {
    console.log('Dialog state changed:', dialogOpen, 'Selected:', selectedBook?.name)
  }, [dialogOpen, selectedBook])

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <header>
          <h2 className="text-3xl font-extrabold text-center text-[#2A2A2F] mb-12">New Arrivals</h2>
        </header>

        <div className="mx-auto perspective-1000 h-[360px] w-[360px] md:h-[520px] md:w-[520px] flex items-center justify-center">
          <div
            className={`relative w-[200px] h-[250px] preserve-3d spin-carousel ${
              dialogOpen ? "spin-carousel-paused" : ""
            }`}
          >
            {books.map((book, index) => {
              const angle = index * (360 / total)

              return (
                <button
                  key={index}
                  type="button"
                  onClick={(e) => {
                    console.log('Button clicked!', book.name)
                    e.stopPropagation()
                    handleOpen(book)
                  }}
                  className="absolute left-1/2 top-1/2 h-[250px] w-[170px] -translate-x-1/2 -translate-y-1/2 cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  style={{
                    transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                  }}
                  aria-label={`Open details for ${book.name}`}
                >
                  <span className="relative block h-full w-full">
                    <Image
                      src={book.img}
                      alt={book.name}
                      fill
                      sizes="200px"
                      className="object-cover rounded-lg"
                    />
                  </span>
                  <span className="absolute bottom-[-2rem] left-1/2 -translate-x-1/2 text-sm font-semibold text-[#2A2A2F]">
                    {book.name}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      <Dialog open={dialogOpen} onOpenChange={handleDialogChange}>
        <DialogContent className="relative">
          {selectedBook && (
            <div className="absolute right-6 top-6 h-24 w-16 overflow-hidden rounded-md bg-muted">
              <Image
                src={selectedBook.img}
                alt={selectedBook.name}
                width={128}
                height={192}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          )}

          <DialogHeader className={selectedBook ? "pr-20" : undefined}>
            <DialogTitle>{selectedBook?.name ?? "New Arrival"}</DialogTitle>
            <DialogDescription>
              {selectedBook?.description ?? "Select an item to preview."}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </section>
  )
}

export default Newarrivals
