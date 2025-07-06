"use client"

import { useEffect } from "react"
import Hero from "@/components/hero"
import MetricsBar from "@/components/metrics-bar"
import Services from "@/components/services"
import Testimonials from "@/components/testimonials"
import PricingTeaser from "@/components/pricing-teaser"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"
import Header from "@/components/header"
import ScrollToTop from "@/components/scroll-to-top"
import { getAndClearTargetSection, scrollToSection } from "@/utils/section-navigation"

export default function ClientPage() {
  // Check for stored target section on page load
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0)

    const targetSection = getAndClearTargetSection()
    if (targetSection) {
      // Add a delay to ensure the page is fully loaded
      setTimeout(() => {
        scrollToSection(targetSection)
      }, 500)
    }
  }, [])

  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <Hero />
      <MetricsBar />
      <Services />
      <Testimonials />
      <PricingTeaser />
      <ContactForm />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
