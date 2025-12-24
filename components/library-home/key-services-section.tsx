"use client"

import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Globe, Lightbulb } from "lucide-react"
import { motion } from "framer-motion"
import { keyServices } from "@/lib/data"

export function KeyServicesSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Globe":
        return Globe
      case "Lightbulb":
        return Lightbulb
      default:
        return BookOpen
    }
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-center text-[#2A2A2F] mb-12">Key Library Services</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {keyServices.map((service, index) => {
            const IconComponent = getIcon(service.icon)
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Card className="bg-white hover:shadow-lg transition-shadow cursor-pointer border-[#DDE5E9]">
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      <div
                        className="w-16 h-16 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: service.color }}
                      >
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <p className="text-sm font-semibold text-[#2A2A2F]">{service.title}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
