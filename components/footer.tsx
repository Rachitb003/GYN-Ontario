"use client"

import type React from "react"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Facebook, Linkedin, Mail, ArrowUp } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { storeTargetSection, scrollToSection } from "@/utils/section-navigation"

export default function Footer() {
  const { ref, isVisible } = useScrollAnimation({ animationId: "footer" })
  const currentYear = new Date().getFullYear()
  const pathname = usePathname()
  const router = useRouter()

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  // Handle navigation for anchor links
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()

    // If we're already on the home page, just scroll to the section
    if (pathname === "/") {
      scrollToSection(id)
    } else {
      // If we're on another page, store the target section and navigate to home
      storeTargetSection(id)
      router.push("/")
    }
  }

  return (
    <footer
      ref={ref as React.RefObject<HTMLDivElement>}
      className="bg-slate-900 text-white pt-16 pb-8 relative overflow-hidden border-t border-slate-800"
    >
      <div className="container-custom relative z-10">
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 ${isVisible ? "animate-fade-in" : ""}`}>
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">GYN Ontario</h3>
            <p className="text-slate-400 mb-6">We help you Grow Your Network with data-driven Facebook Ads.</p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:gynontario@gmail.com"
                className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  onClick={(e) => handleNavigation(e, "services")}
                  className="text-slate-400 hover:text-blue-400 transition-colors duration-300 flex items-center"
                >
                  <span className="w-0 h-0.5 bg-blue-500 mr-0 transition-all duration-300 group-hover:w-2 group-hover:mr-2"></span>
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => handleNavigation(e, "testimonials")}
                  className="text-slate-400 hover:text-blue-400 transition-colors duration-300 flex items-center"
                >
                  <span className="w-0 h-0.5 bg-blue-500 mr-0 transition-all duration-300 group-hover:w-2 group-hover:mr-2"></span>
                  Testimonials
                </a>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-slate-400 hover:text-blue-400 transition-colors duration-300 flex items-center"
                >
                  <span className="w-0 h-0.5 bg-blue-500 mr-0 transition-all duration-300 group-hover:w-2 group-hover:mr-2"></span>
                  Pricing
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => handleNavigation(e, "contact")}
                  className="text-slate-400 hover:text-blue-400 transition-colors duration-300 flex items-center"
                >
                  <span className="w-0 h-0.5 bg-blue-500 mr-0 transition-all duration-300 group-hover:w-2 group-hover:mr-2"></span>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Contact Us</h3>
            <p className="text-slate-400 mb-2">Email: gynontario@gmail.com</p>
            <p className="text-slate-400">Hours: Monday - Friday, 9am - 5pm EST</p>
          </div>
        </div>

        <div
          className={`border-t border-slate-800 pt-6 flex flex-col md:flex-row justify-between items-center ${
            isVisible ? "animate-fade-in" : ""
          }`}
          style={{ animationDelay: "0.4s" }}
        >
          <p className="text-slate-500 text-sm mb-4 md:mb-0">&copy; {currentYear} GYN Ontario. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="bg-slate-800 hover:bg-slate-700 p-3 rounded-full text-slate-400 hover:text-blue-400 transition-all duration-300 hover:-translate-y-1 transform"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  )
}
