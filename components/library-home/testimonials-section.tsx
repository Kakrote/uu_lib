"use client"

import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { motion } from "framer-motion"

export function TestimonialsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-center text-[#2A2A2F] mb-12">What Our Users Say</h2>

        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Card className="border-[#DDE5E9] shadow-lg">
            <CardContent className="p-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-[#3048cd] mb-6 overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=80&width=80"
                    alt="User"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-[#2A2A2F] text-lg mb-6 leading-relaxed">
                  "As a third-year B.Tech student at Bennett University, the Central Library has been a constant
                  companion in my academic and personal journey since day one. My primary reason for visiting the
                  library is to prepare for my UPSC CSE exam, and it offers the perfect environment for my purpose.
                  The peaceful and studious atmosphere of the library, combined with its vast collection of resources,
                  makes it an ideal place to sit and study without distractions, and to see how youngsters need to be
                  for a great tomorrow."
                </p>
                <p className="text-[#3048cd] font-bold text-lg">Dr Deepak Kumar</p>
                <p className="text-[#6B7588]">Assistant Professor</p>
                <p className="text-[#6B7588]">School of Law (SOL)</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
