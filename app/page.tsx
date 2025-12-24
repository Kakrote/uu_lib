"use client"
import { AnimatedSection } from "@/components/Animated"
import {
  CollectionStatsSection,
  HelpSection,
  HeroSection,
  KeyServicesSection,
  NewArrivalsSection,
  PopularResourcesSection,
  TestimonialsSection,
} from "@/components/library-home"
import Newarrivals from "@/components/library-home/new-arrivals"
import StudentTestimonials from "@/components/library-home/student-testimonials"
import { CommonLayout } from "@/components/common-layout"
import { motion } from "framer-motion"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, ease: "easeOut" }
}

export default function LibraryHome() {
  return (
    <CommonLayout>
      <HeroSection />
      <motion.div {...fadeInUp}>
        <CollectionStatsSection />
      </motion.div>
      {/* <NewArrivalsSection /> */}
      <motion.div {...fadeInUp}>
        <Newarrivals />
      </motion.div>
      <motion.div {...fadeInUp}>
        <PopularResourcesSection />
      </motion.div>
      <motion.div {...fadeInUp}>
        <KeyServicesSection />
      </motion.div>
      <motion.div {...fadeInUp}>
        <HelpSection />
      </motion.div>
      <AnimatedSection>
        <StudentTestimonials />
      </AnimatedSection>
    </CommonLayout>
  )
}
