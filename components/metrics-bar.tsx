"use client"

import type React from "react"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Shield, TrendingUp, DollarSign } from "lucide-react"

export default function MetricsBar() {
  const { ref, isVisible } = useScrollAnimation({ animationId: "metrics-bar" })

  const metrics = [
    {
      icon: <Shield className="h-12 w-12 text-blue-400" />,
      value: "2×",
      label: "Guaranteed ROI",
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-blue-400" />,
      value: "0%",
      label: "Risk",
    },
    {
      icon: <DollarSign className="h-12 w-12 text-blue-400" />,
      value: "100%",
      label: "Revenue Share (Month 6+)",
    },
  ]

  return (
    <section ref={ref as React.RefObject<HTMLDivElement>} className="py-16 bg-slate-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="particle bg-blue-400/10 w-2 h-2 rounded-full absolute top-[20%] left-[25%] animate-float-slow"></div>
        <div
          className="particle bg-blue-400/10 w-3 h-3 rounded-full absolute top-[45%] left-[70%] animate-float-slow"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="particle bg-blue-400/10 w-2 h-2 rounded-full absolute top-[75%] left-[35%] animate-float-slow"
          style={{ animationDelay: "2.5s" }}
        ></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center stagger-animation">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className={`bg-slate-800 p-8 rounded-lg shadow-md border border-slate-700 hover:shadow-lg hover:shadow-blue-900/20 transition-all duration-500 transform ${
                isVisible ? "animate-slide-up" : ""
              } hover:-translate-y-2 glow-on-hover`}
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div
                className="mb-4 p-4 bg-slate-700 inline-block rounded-full animate-float"
                style={{ animationDelay: `${index * 0.5}s` }}
              >
                {metric.icon}
              </div>
              <div
                className="text-3xl font-bold text-blue-400 mb-2 animate-pulse-slow"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                {metric.value}
              </div>
              <div className="text-slate-300">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
