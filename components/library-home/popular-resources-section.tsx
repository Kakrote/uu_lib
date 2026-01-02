"use client"

import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { motion } from "framer-motion"
import { themeColors } from "@/lib/data"
import { useState, useEffect } from "react"
import Link from "next/link"

interface Resource {
  id: number
  title: string
  description: string
  image: string
  priority: number
  link: string
}

export function PopularResourcesSection() {
  const [resources, setResources] = useState<Resource[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const response = await fetch('https://uucms.uudoon.in/api/library/eservices/?format=json')
        const data = await response.json()
        setResources(data)
      } catch (error) {
        console.error('Error fetching resources:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchResources()
  }, [])

  if (isLoading) {
    return (
      <section className="py-16 overflow-hidden" style={{ backgroundColor: themeColors.popularResourcesBg }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-center text-[#2A2A2F] mb-12">Popular Resources</h2>
          <div className="text-center">Loading...</div>
        </div>
      </section>
    )
  }

  // Duplicate resources for seamless infinite scroll
  const duplicatedResources = [...resources, ...resources, ...resources]

  return (
    <section className="py-16 overflow-hidden" style={{ backgroundColor: themeColors.popularResourcesBg }}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-center text-[#2A2A2F] mb-12">Popular Resources</h2>

        <div className="relative">
          <motion.div
            className="flex gap-6"
            animate={{
              x: [0, -((resources.length * 220) + (resources.length * 24))],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {duplicatedResources.map((resource, index) => (
              <Link
                key={`${resource.id}-${index}`}
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0"
                style={{ width: '250px' }}
              >
                <Card className="bg-white hover:shadow-lg transition-shadow cursor-pointer border-[#DDE5E9] h-full">
                  <CardContent className="p-4 flex flex-col items-center justify-center">
                    <div className="w-28 h-28 mb-4 flex items-center justify-center">
                      <Image
                        src={resource.image}
                        alt={resource.title}
                        width={212}
                        height={212}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <p className="text-base font-semibold text-[#2A2A2F] text-center">{resource.title}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
