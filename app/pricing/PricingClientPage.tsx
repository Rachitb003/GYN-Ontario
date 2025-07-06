"use client"

import type React from "react"
import { useEffect } from "react"
import { Check, ArrowRight, Zap } from "lucide-react"
import { useRouter } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useOneTimeAnimation } from "@/hooks/use-one-time-animation"
import { storeTargetSection } from "@/utils/section-navigation"

export default function PricingClientPage() {
  const { shouldAnimate } = useOneTimeAnimation("pricing-page")
  const router = useRouter()

  // Fix for scrolling issue - scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Navigate to homepage with target section
  const navigateToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    storeTargetSection(sectionId)
    router.push("/")
  }

  return (
    <main className="flex min-h-screen flex-col bg-slate-900">
      <Header />

      <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-20 md:py-24 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-900/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div
          className="absolute bottom-0 left-0 w-64 h-64 bg-blue-800/20 rounded-full filter blur-3xl animate-pulse-slow"
          style={{ animationDelay: "2s" }}
        ></div>

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

        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div
              className={`inline-block bg-blue-500/10 backdrop-blur-sm px-4 py-2 rounded-full text-blue-400 font-medium mb-4 border border-blue-500/20 ${shouldAnimate ? "animate-fade-in" : "opacity-100"}`}
            >
              <span className="flex items-center">
                <Zap className="h-5 w-5 mr-2 text-blue-400" />
                Simple, Transparent Pricing
              </span>
            </div>
            <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${shouldAnimate ? "animate-fade-in" : "opacity-100"}`}>
              Guaranteed 2× ROI – Zero Risk
            </h1>
            <p
              className={`text-xl text-slate-300 ${shouldAnimate ? "animate-slide-up" : "opacity-100"}`}
              style={{ animationDelay: "0.2s" }}
            >
              A performance-based partnership where we only succeed when you do
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Two-column pricing model */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Month 1 */}
              <div
                className={`bg-slate-800 p-8 rounded-xl border border-slate-700 shadow-lg hover:shadow-blue-900/20 transition-all duration-500 transform hover:-translate-y-1 ${shouldAnimate ? "animate-slide-up" : "opacity-100"}`}
                style={{ animationDelay: "0.1s" }}
              >
                <div className="flex items-center mb-6">
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mr-4 animate-pulse-slow">
                    1
                  </div>
                  <h2 className="text-2xl font-bold text-white">Month 1: Guaranteed 2× ROI</h2>
                </div>

                <ul className="space-y-4 mb-6">
                  <li className="flex items-start">
                    <div className="bg-blue-900/30 p-1 rounded-full mr-3 flex-shrink-0 mt-0.5">
                      <Check className="h-4 w-4 text-blue-400" />
                    </div>
                    <span className="text-slate-300">You set the ad budget (e.g., $2,000)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-900/30 p-1 rounded-full mr-3 flex-shrink-0 mt-0.5">
                      <Check className="h-4 w-4 text-blue-400" />
                    </div>
                    <span className="text-slate-300">We deliver enough leads to double your investment</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-900/30 p-1 rounded-full mr-3 flex-shrink-0 mt-0.5">
                      <Check className="h-4 w-4 text-blue-400" />
                    </div>
                    <span className="text-slate-300">If we're efficient, we keep the remaining budget</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-900/30 p-1 rounded-full mr-3 flex-shrink-0 mt-0.5">
                      <Check className="h-4 w-4 text-blue-400" />
                    </div>
                    <span className="text-slate-300">If we need more budget, we cover the extra costs</span>
                  </li>
                </ul>

                <div className="bg-blue-900/30 border border-blue-800/50 p-4 rounded-lg text-center">
                  <p className="text-white font-bold">Your guaranteed profit: 2× your investment</p>
                </div>
              </div>

              {/* Month 2+ */}
              <div
                className={`bg-slate-800 p-8 rounded-xl border border-slate-700 shadow-lg hover:shadow-blue-900/20 transition-all duration-500 transform hover:-translate-y-1 ${shouldAnimate ? "animate-slide-up" : "opacity-100"}`}
                style={{ animationDelay: "0.2s" }}
              >
                <div className="flex items-center mb-6">
                  <div
                    className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mr-4 animate-pulse-slow"
                    style={{ animationDelay: "1s" }}
                  >
                    2+
                  </div>
                  <h2 className="text-2xl font-bold text-white">Month 2+: Performance-Based</h2>
                </div>

                <div className="mb-6">
                  <p className="text-slate-300 mb-4">Our success fee decreases over time:</p>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between bg-slate-700 p-3 rounded-lg">
                      <span className="text-slate-300">Month 2</span>
                      <div className="flex items-center">
                        <span className="text-white font-bold">75%</span>
                        <span className="text-slate-400 ml-1">yours</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between bg-slate-700 p-3 rounded-lg">
                      <span className="text-slate-300">Month 3</span>
                      <div className="flex items-center">
                        <span className="text-white font-bold">80%</span>
                        <span className="text-slate-400 ml-1">yours</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between bg-slate-700 p-3 rounded-lg">
                      <span className="text-slate-300">Month 4</span>
                      <div className="flex items-center">
                        <span className="text-white font-bold">85%</span>
                        <span className="text-slate-400 ml-1">yours</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between bg-slate-700 p-3 rounded-lg">
                      <span className="text-slate-300">Month 5</span>
                      <div className="flex items-center">
                        <span className="text-white font-bold">90%</span>
                        <span className="text-slate-400 ml-1">yours</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between bg-blue-900/30 p-3 rounded-lg border border-blue-800/50">
                      <span className="text-white">Month 6+</span>
                      <div className="flex items-center">
                        <span className="text-white font-bold">100%</span>
                        <span className="text-blue-400 ml-1">yours</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-900/30 border border-blue-800/50 p-4 rounded-lg text-center">
                  <p className="text-white font-bold">You only pay after realizing revenue</p>
                </div>
              </div>
            </div>

            {/* Example */}
            <div
              className={`bg-slate-800 p-8 rounded-xl border border-slate-700 shadow-lg hover:shadow-blue-900/20 transition-all duration-500 ${shouldAnimate ? "animate-fade-in" : "opacity-100"}`}
              style={{ animationDelay: "0.3s" }}
            >
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                  Ex
                </span>
                Quick Example
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-700 p-5 rounded-lg">
                  <h3 className="text-lg font-bold text-white mb-3">Month 1 Scenario</h3>
                  <ul className="space-y-2 text-slate-300">
                    <li>• Your ad budget: $2,000</li>
                    <li>• Revenue per lead: $250</li>
                    <li>• Leads needed for 2× ROI: 16 leads</li>
                    <li>• Guaranteed revenue: $4,000</li>
                    <li className="text-blue-400 font-bold">• Your profit: $2,000</li>
                  </ul>
                </div>

                <div className="bg-slate-700 p-5 rounded-lg">
                  <h3 className="text-lg font-bold text-white mb-3">Month 3 Example</h3>
                  <ul className="space-y-2 text-slate-300">
                    <li>• Leads generated: 20</li>
                    <li>• Total revenue: $5,000</li>
                    <li>• Your share (80%): $4,000</li>
                    <li>• Our fee (20%): $1,000</li>
                    <li className="text-blue-400 font-bold">• Zero upfront costs</li>
                  </ul>
                </div>
              </div>
            </div>

            <div
              className={`text-center mt-12 ${shouldAnimate ? "animate-fade-in" : "opacity-100"}`}
              style={{ animationDelay: "0.4s" }}
            >
              <a
                href="#"
                onClick={(e) => navigateToSection(e, "contact")}
                className="primary-button inline-flex items-center group px-8 py-4 text-lg relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Book Your Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left opacity-70"></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
