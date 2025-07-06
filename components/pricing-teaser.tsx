"use client"

import type React from "react"

import Link from "next/link"
import { Check, ArrowRight, TrendingUp } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function PricingTeaser() {
  const { ref, isVisible } = useScrollAnimation({ animationId: "pricing-teaser" })

  return (
    <section
      id="pricing"
      ref={ref as React.RefObject<HTMLDivElement>}
      className="section-padding bg-slate-800 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-900/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
      <div
        className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-blue-800/20 rounded-full filter blur-3xl animate-pulse-slow"
        style={{ animationDelay: "1s" }}
      ></div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="particle bg-blue-400/20 w-2 h-2 rounded-full absolute top-[10%] left-[45%] animate-float-slow"></div>
        <div
          className="particle bg-blue-400/20 w-3 h-3 rounded-full absolute top-[55%] left-[60%] animate-float-slow"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="particle bg-blue-400/20 w-2 h-2 rounded-full absolute top-[35%] left-[15%] animate-float-slow"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="particle bg-blue-400/20 w-4 h-4 rounded-full absolute top-[70%] left-[30%] animate-float-slow"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <div
            className={`inline-block bg-slate-700 px-4 py-2 rounded-full text-blue-400 font-medium mb-4 ${isVisible ? "animate-fade-in" : ""} hover:scale-105 transition-all duration-300 transform`}
          >
            <span className="flex items-center">
              <TrendingUp className="h-5 w-5 mr-2 text-blue-400 animate-pulse-slow" />
              Guaranteed 2× ROI
            </span>
          </div>

          <h2 className={`mb-4 text-white ${isVisible ? "animate-fade-in" : ""}`}>Performance-Based Partnership</h2>
          <p
            className={`text-xl text-slate-300 max-w-3xl mx-auto ${isVisible ? "animate-slide-up" : ""}`}
            style={{ animationDelay: "0.2s" }}
          >
            A unique model where you only pay for results
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Month 1 Card */}
          <div
            className={`bg-slate-700 rounded-xl shadow-md overflow-hidden border border-slate-600 hover:shadow-lg hover:shadow-blue-900/20 transition-all duration-500 transform ${isVisible ? "animate-slide-up" : ""} hover:-translate-y-2 glow-on-hover`}
            style={{ animationDelay: "0.3s" }}
          >
            <div className="bg-blue-600 p-8 text-white text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700"></div>
              <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-20"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold">Month 1: Guaranteed 2× ROI</h3>
                <div className="mt-4 flex items-center justify-center">
                  <span className="text-5xl font-bold animate-pulse-slow">Zero</span>
                  <span className="text-lg opacity-80 ml-2">risk</span>
                </div>
              </div>
            </div>

            <div className="p-8">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-blue-900/30 p-1 rounded-full mr-3 flex-shrink-0 mt-0.5">
                    <Check className="h-4 w-4 text-blue-400" />
                  </div>
                  <span className="text-slate-300">You set and pre-fund your ad budget</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-900/30 p-1 rounded-full mr-3 flex-shrink-0 mt-0.5">
                    <Check className="h-4 w-4 text-blue-400" />
                  </div>
                  <span className="text-slate-300">We guarantee leads that double your investment</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-900/30 p-1 rounded-full mr-3 flex-shrink-0 mt-0.5">
                    <Check className="h-4 w-4 text-blue-400" />
                  </div>
                  <span className="text-slate-300">We cover extra costs if needed</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Month 2+ Card */}
          <div
            className={`bg-slate-700 rounded-xl shadow-md overflow-hidden border border-slate-600 hover:shadow-lg hover:shadow-blue-900/20 transition-all duration-500 transform ${isVisible ? "animate-slide-up" : ""} hover:-translate-y-2 glow-on-hover`}
            style={{ animationDelay: "0.4s" }}
          >
            <div className="bg-slate-600 p-8 text-white text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-slate-600 to-slate-700"></div>
              <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-20"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold">Month 2+: Profit-Sharing</h3>
                <div className="mt-4 flex items-center justify-center">
                  <span className="text-5xl font-bold animate-pulse-slow" style={{ animationDelay: "1s" }}>
                    100%
                  </span>
                  <span className="text-lg opacity-80 ml-2">yours by month 6</span>
                </div>
              </div>
            </div>

            <div className="p-8">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-blue-900/30 p-1 rounded-full mr-3 flex-shrink-0 mt-0.5">
                    <Check className="h-4 w-4 text-blue-400" />
                  </div>
                  <span className="text-slate-300">Month 2: You keep 75% of revenue</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-900/30 p-1 rounded-full mr-3 flex-shrink-0 mt-0.5">
                    <Check className="h-4 w-4 text-blue-400" />
                  </div>
                  <span className="text-slate-300">Month 5: You keep 90% of revenue</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-900/30 p-1 rounded-full mr-3 flex-shrink-0 mt-0.5">
                    <Check className="h-4 w-4 text-blue-400" />
                  </div>
                  <span className="text-slate-300">Month 6+: You keep 100% of revenue</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/pricing"
            className="primary-button inline-flex items-center group px-8 py-4 relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              View Full Pricing Details
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </Link>
        </div>
      </div>
    </section>
  )
}
