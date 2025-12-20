"use client"

import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Globe, Lightbulb } from "lucide-react"
import { motion } from "framer-motion"

const services = [
  { icon: BookOpen, title: "Online GD Room Booking", color: "#3048cd" },
  { icon: Globe, title: "Remote Access", color: "#E32424" },
  { icon: Lightbulb, title: "Resource Guide", color: "#FFA200" },
  { icon: BookOpen, title: "Research Support", color: "#6BC533" },
  { icon: BookOpen, title: "Plagiarism Checking (Turnitin)", color: "#4453CD" },
  { icon: BookOpen, title: "Faculty Profiling (Altius)", color: "#E32424" },
  { icon: BookOpen, title: "Resource Sharing", color: "#FFA200" },
  { icon: BookOpen, title: "IT Facilities", color: "#6BC533" },
  { icon: BookOpen, title: "Borrowing Facility", color: "#3048cd" },
  { icon: BookOpen, title: "Reference Service", color: "#E32424" },
  { icon: BookOpen, title: "Library Membership", color: "#FFA200" },
  { icon: BookOpen, title: "Inter Library Loan Service", color: "#6BC533" },
] as const

export function KeyServicesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-center text-[#2A2A2F] mb-12">Key Library Services</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((service, index) => (
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
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <p className="text-sm font-semibold text-[#2A2A2F]">{service.title}</p>
              </CardContent>
            </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
