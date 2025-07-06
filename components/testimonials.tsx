"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function Testimonials() {
  const { ref, isVisible } = useScrollAnimation({ animationId: "testimonials" })

  const testimonials = [
    {
      quote:
        "Never realized Facebook Ads were such a powerful tool, and the results that follow were beyond our expectations at such a low price",
      name: "Lalit Bansal",
      title: "Director, Jupiter Exports Canada",
      avatar: "/images/testimonial-2.png", // Switched to Suvidth's picture
    },
    {
      quote:
        "The team at GYN Ontario has provided us with about 400,000 impressions and a high conversion rate, Our ROI has never been better.",
      name: "Suvidhkumar Manubhai Sudani",
      title: "Founder, OM Scrap Metal",
      avatar: "/images/testimonial-1.png", // Switched to Lalit's picture
    },
    {
      quote: "GYN Ontario has provided us with exceptional results at a very low price we were ever expecting",
      name: "Anjum Gupta",
      title: "Insurance Broker",
      avatar: "/images/testimonial-3.png", // Unchanged
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  return (
    <section
      id="testimonials"
      ref={ref as React.RefObject<HTMLDivElement>}
      className="section-padding bg-slate-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-900/20 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900/10 rounded-full filter blur-3xl"></div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className={`mb-4 text-white ${isVisible ? "animate-fade-in" : ""}`}>What Our Clients Say</h2>
          <p
            className={`text-xl text-slate-300 max-w-3xl mx-auto ${isVisible ? "animate-slide-up" : ""}`}
            style={{ animationDelay: "0.2s" }}
          >
            Don't just take our word for it - hear from some of our satisfied clients
          </p>
        </div>

        <div
          className={`relative max-w-4xl mx-auto ${isVisible ? "animate-fade-in" : ""}`}
          style={{ animationDelay: "0.4s" }}
        >
          <div className="overflow-hidden rounded-xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-slate-800 p-8 rounded-lg shadow-md border border-slate-700">
                    <div className="text-xl italic text-slate-300 mb-6">"{testimonial.quote}"</div>
                    <div className="flex items-center">
                      <div className="relative w-16 h-16 overflow-hidden rounded-full border-2 border-blue-500 p-1">
                        <Image
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.name}
                          fill
                          className="object-cover rounded-full"
                        />
                      </div>
                      <div className="ml-4">
                        <div className="font-bold text-white">{testimonial.name}</div>
                        <div className="text-slate-400">{testimonial.title}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={goToPrevious}
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-4 bg-slate-800 p-3 rounded-full shadow-md hover:bg-slate-700 transition-all duration-300 border border-slate-700"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6 text-slate-300" />
          </button>

          <button
            onClick={goToNext}
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-4 bg-slate-800 p-3 rounded-full shadow-md hover:bg-slate-700 transition-all duration-300 border border-slate-700"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6 text-slate-300" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 w-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-blue-500 w-6" : "bg-slate-600"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
