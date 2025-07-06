"use client"

import type React from "react"

import { BarChart3, Target, Palette, TrendingUp } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function Services() {
  const { ref, isVisible } = useScrollAnimation({ animationId: "services" })

  const services = [
    {
      icon: <Target className="h-12 w-12 text-blue-400" />,
      title: "Ad Strategy",
      description: "Custom Facebook ad strategies tailored to your business goals and target audience.",
    },
    {
      icon: <Palette className="h-12 w-12 text-blue-400" />,
      title: "Creative Design",
      description: "Eye-catching ad creatives that grab attention and drive engagement with your brand.",
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-blue-400" />,
      title: "Audience Targeting",
      description: "Precision targeting to reach the most valuable potential customers for your business.",
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-blue-400" />,
      title: "Analytics & Optimization",
      description: "Continuous performance monitoring and campaign optimization for maximum ROI.",
    },
  ]

  return (
    <section
      id="services"
      ref={ref as React.RefObject<HTMLDivElement>}
      className="section-padding bg-slate-800 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="particle bg-blue-400/10 w-2 h-2 rounded-full absolute top-[10%] left-[15%] animate-float-slow"></div>
        <div
          className="particle bg-blue-400/10 w-3 h-3 rounded-full absolute top-[35%] left-[80%] animate-float-slow"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="particle bg-blue-400/10 w-2 h-2 rounded-full absolute top-[65%] left-[25%] animate-float-slow"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="particle bg-blue-400/10 w-4 h-4 rounded-full absolute top-[80%] left-[70%] animate-float-slow"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className={`mb-4 text-white ${isVisible ? "animate-fade-in" : ""}`}>Our Services</h2>
          <p
            className={`text-xl text-slate-300 max-w-3xl mx-auto ${isVisible ? "animate-slide-up" : ""}`}
            style={{ animationDelay: "0.2s" }}
          >
            We offer comprehensive Facebook advertising services to help your business grow
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-animation">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-slate-700 p-8 rounded-lg shadow-md border border-slate-600 hover:shadow-lg hover:shadow-blue-900/20 transition-all duration-500 transform ${
                isVisible ? "animate-slide-up" : ""
              } hover:-translate-y-2 glow-on-hover`}
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div
                className="mb-6 p-4 bg-slate-800 inline-block rounded-lg animate-float"
                style={{ animationDelay: `${index * 0.5}s` }}
              >
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
              <p className="text-slate-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
