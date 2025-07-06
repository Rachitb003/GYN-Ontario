"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Menu, X } from "lucide-react"
import { storeTargetSection, scrollToSection } from "@/utils/section-navigation"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  // Handle scroll event to change header appearance
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Handle navigation for anchor links
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()

    // If we're already on the home page, just scroll to the section
    if (pathname === "/") {
      scrollToSection(id)
      setIsMenuOpen(false)
    } else {
      // If we're on another page, store the target section and navigate to home
      storeTargetSection(id)
      router.push("/")
    }
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-slate-900/95 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container-custom flex items-center justify-between py-4">
        <Link href="/" className="flex items-center space-x-2 relative">
          <span className="text-2xl font-bold text-blue-400 relative">
            GYN Ontario
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 animate-[growWidth_0.5s_ease-in-out_forwards]"></span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#"
            onClick={(e) => handleNavigation(e, "services")}
            className="text-slate-300 hover:text-blue-400 font-medium transition-colors duration-300"
          >
            Services
          </a>
          <a
            href="#"
            onClick={(e) => handleNavigation(e, "testimonials")}
            className="text-slate-300 hover:text-blue-400 font-medium transition-colors duration-300"
          >
            Testimonials
          </a>
          <Link
            href="/pricing"
            className="text-slate-300 hover:text-blue-400 font-medium transition-colors duration-300"
          >
            Pricing
          </Link>
          <a href="#" onClick={(e) => handleNavigation(e, "contact")} className="primary-button">
            Book Free Consultation
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-slate-300 hover:text-blue-400 transition-colors duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-slate-800 py-4 px-6 shadow-lg animate-fade-in">
          <div className="flex flex-col space-y-4">
            <a
              href="#"
              onClick={(e) => handleNavigation(e, "services")}
              className="text-slate-300 hover:text-blue-400 font-medium transition-colors duration-300"
            >
              Services
            </a>
            <a
              href="#"
              onClick={(e) => handleNavigation(e, "testimonials")}
              className="text-slate-300 hover:text-blue-400 font-medium transition-colors duration-300"
            >
              Testimonials
            </a>
            <Link
              href="/pricing"
              className="text-slate-300 hover:text-blue-400 font-medium transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <a
              href="#"
              onClick={(e) => handleNavigation(e, "contact")}
              className="primary-button inline-block text-center"
            >
              Book Free Consultation
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
