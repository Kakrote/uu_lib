"use client"

import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { motion } from "framer-motion"

const resources = [
  "ACM",
  "Pressreader",
  "ProQuest",
  "National Collections",
  "SCC Online",
  "Star Journals",
  "Scopus",
  "Springer Nature",
] as const

export function PopularResourcesSection() {
  // Duplicate resources for seamless infinite scroll
  const duplicatedResources = [...resources, ...resources, ...resources]

  return (
    <section className="py-16 bg-[#F2F2F5] overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-center text-[#2A2A2F] mb-12">Popular Resources</h2>

        <div className="relative">
          <motion.div
            className="flex gap-6"
            animate={{
              x: [0, -((resources.length * 150) + (resources.length * 24))],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {duplicatedResources.map((resource, index) => (
              <div
                key={index}
                className="flex-shrink-0"
                style={{ width: '150px' }}
              >
                <Card className="bg-white hover:shadow-lg transition-shadow cursor-pointer border-[#DDE5E9] h-full">
                  <CardContent className="p-6 flex flex-col items-center justify-center">
                    <div className="w-16 h-16 mb-3 flex items-center justify-center">
                      <Image
                        src={`/placeholder.svg?height=64&width=64&query=${encodeURIComponent(resource)}+logo`}
                        alt={resource}
                        width={64}
                        height={64}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <p className="text-sm font-semibold text-[#2A2A2F] text-center">{resource}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
