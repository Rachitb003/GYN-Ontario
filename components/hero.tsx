"use client"

import type React from "react"
import Link from "next/link"
import { Shield, TrendingUp, BadgeCheck } from "lucide-react"
import { useOneTimeAnimation } from "@/hooks/use-one-time-animation"

export default function Hero() {
  const { shouldAnimate, hasAnimated } = useOneTimeAnimation("hero")

  // Handle smooth scrolling for the CTA button
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 80, // Offset for header height
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-800"></div>

        {/* Animated circles */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-900/20 rounded-full filter blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-800/20 rounded-full filter blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/3 w-48 h-48 bg-blue-700/20 rounded-full filter blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        ></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-10"></div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="particle bg-blue-400/20 w-2 h-2 rounded-full absolute top-[10%] left-[15%] animate-float-slow"></div>
          <div
            className="particle bg-blue-400/20 w-3 h-3 rounded-full absolute top-[35%] left-[80%] animate-float-slow"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="particle bg-blue-400/20 w-2 h-2 rounded-full absolute top-[65%] left-[25%] animate-float-slow"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="particle bg-blue-400/20 w-4 h-4 rounded-full absolute top-[80%] left-[70%] animate-float-slow"
            style={{ animationDelay: "3s" }}
          ></div>
        </div>
      </div>

      <div className="container-custom relative z-10 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <div
            className={`inline-block px-4 py-2 rounded-full text-blue-400 font-medium mb-6 ${
              shouldAnimate ? "animate-fade-in" : "opacity-100"
            }`}
          >
            <span className="flex items-center">
              <BadgeCheck className="h-5 w-5 mr-2 text-blue-400 animate-pulse-slow" />
              Guaranteed 2× ROI on Your Ad Spend
            </span>
          </div>

          <h1
            className={`text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight mb-6 tracking-tight text-white ${
              shouldAnimate ? "animate-fade-in" : "opacity-100"
            }`}
            style={{ animationDelay: "0.2s" }}
          >
            Grow Your Network
          </h1>

          <p
            className={`text-xl md:text-2xl font-medium text-slate-300 max-w-2xl mx-auto mb-8 ${
              shouldAnimate ? "animate-slide-up" : "opacity-100"
            }`}
            style={{ animationDelay: "0.4s" }}
          >
            Data-driven Facebook Ads with guaranteed results and a performance-based partnership model.
          </p>

          {/* Feature badges */}
          <div
            className={`flex flex-wrap justify-center gap-4 mb-10 ${
              shouldAnimate ? "animate-slide-up" : "opacity-100"
            }`}
            style={{ animationDelay: "0.5s" }}
          >
            <div className="px-4 py-2 rounded-full text-blue-400 flex items-center transition-all duration-300">
              <Shield className="h-5 w-5 mr-2 text-blue-400 animate-pulse-slow" style={{ animationDelay: "1s" }} />
              <span>Zero Risk Model</span>
            </div>
            <div className="px-4 py-2 rounded-full text-blue-400 flex items-center transition-all duration-300">
              <TrendingUp className="h-5 w-5 mr-2 text-blue-400 animate-pulse-slow" style={{ animationDelay: "2s" }} />
              <span>Guaranteed 2× ROI</span>
            </div>
          </div>

          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 ${
              shouldAnimate ? "animate-slide-up" : "opacity-100"
            }`}
            style={{ animationDelay: "0.6s" }}
          >
            <a
              href="#contact"
              onClick={scrollToContact}
              className="primary-button text-lg px-8 py-4 group relative overflow-hidden"
            >
              <span className="relative z-10">Book Free Consultation</span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 opacity-80 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </a>

            <Link href="/pricing" className="secondary-button text-lg px-8 py-4 group relative overflow-hidden">
              <span className="relative z-10">View Pricing</span>
              <span className="absolute inset-0 bg-gradient-to-r from-slate-700 to-slate-600 opacity-80 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
