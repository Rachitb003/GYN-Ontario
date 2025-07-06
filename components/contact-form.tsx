"use client"

import type React from "react"
import { useState } from "react"
import { Send, AlertCircle } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

// List of common personal email domains to reject
const PERSONAL_EMAIL_DOMAINS = [
  "gmail.com",
  "yahoo.com",
  "hotmail.com",
  "outlook.com",
  "aol.com",
  "icloud.com",
  "mail.com",
  "protonmail.com",
  "zoho.com",
  "yandex.com",
  "gmx.com",
  "live.com",
  "me.com",
  "inbox.com",
]

// Function to validate business email
const isBusinessEmail = (email: string): boolean => {
  if (!email) return false

  // Basic email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) return false

  // Extract domain from email
  const domain = email.split("@")[1].toLowerCase()

  // Check if domain is not in the list of personal email domains
  return !PERSONAL_EMAIL_DOMAINS.includes(domain)
}

export default function ContactForm() {
  const { ref, isVisible } = useScrollAnimation({ animationId: "contact-form" })

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: "",
  })

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: "",
    details: "",
  })

  const [emailError, setEmailError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear email error when user types in email field
    if (name === "email") {
      setEmailError("")
    }
  }

  const validateEmail = (email: string): boolean => {
    if (!isBusinessEmail(email)) {
      setEmailError("Please enter a valid business email (e.g., name@company.domain)")
      return false
    }
    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate email before submission
    if (!validateEmail(formData.email)) {
      return
    }

    setIsSubmitting(true)
    setFormStatus({
      submitted: false,
      success: false,
      message: "",
      details: "",
    })

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setFormStatus({
          submitted: true,
          success: true,
          message: "Thanks! We will contact you soon.",
          details: `Email ID: ${data.id || "N/A"}`,
        })
        // Reset form
        setFormData({
          name: "",
          email: "",
          company: "",
          budget: "",
          message: "",
        })
      } else {
        throw new Error(data.error || data.message || "Something went wrong")
      }
    } catch (error) {
      setFormStatus({
        submitted: true,
        success: false,
        message: error instanceof Error ? error.message : "Failed to submit form",
        details: "Please try again or contact us directly at gynontario@gmail.com",
      })
    } finally {
      setIsSubmitting(false)

      // Clear status message after 10 seconds
      setTimeout(() => {
        setFormStatus((prev) => ({ ...prev, submitted: false }))
      }, 10000)
    }
  }

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLDivElement>}
      className="section-padding bg-slate-800 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-900/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-900/10 rounded-full filter blur-3xl"></div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className={`mb-4 text-white ${isVisible ? "animate-fade-in" : ""}`}>Ready to Grow Your Network?</h2>
          <p
            className={`text-xl text-slate-300 max-w-3xl mx-auto ${isVisible ? "animate-slide-up" : ""}`}
            style={{ animationDelay: "0.2s" }}
          >
            Fill out the form below and we'll get back to you within 24 hours
          </p>
        </div>

        <div className={`max-w-2xl mx-auto ${isVisible ? "animate-slide-up" : ""}`} style={{ animationDelay: "0.4s" }}>
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-slate-700 p-8 rounded-xl shadow-md border border-slate-600"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white transition-all duration-300"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">
                  Business Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 bg-slate-800 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white transition-all duration-300 ${
                    emailError ? "border-red-500" : "border-slate-600"
                  }`}
                  placeholder="name@company.domain"
                />
                {emailError && (
                  <div className="mt-1 text-red-400 text-sm flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {emailError}
                  </div>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-1">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white transition-all duration-300"
                />
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-slate-300 mb-1">
                  Monthly Budget
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white transition-all duration-300"
                >
                  <option value="">Select a budget</option>
                  <option value="$500 - $1,000">$500 - $1,000</option>
                  <option value="$1,000 - $2,500">$1,000 - $2,500</option>
                  <option value="$2,500 - $5,000">$2,500 - $5,000</option>
                  <option value="$5,000+">$5,000+</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                required
                className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white transition-all duration-300"
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                disabled={isSubmitting || !!emailError}
                className="primary-button w-full flex items-center justify-center py-4 text-lg group"
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                    Book Free Consultation
                  </>
                )}
              </button>
            </div>

            {formStatus.submitted && (
              <div
                className={`p-6 rounded-lg ${
                  formStatus.success ? "bg-green-900/50 text-green-300" : "bg-red-900/50 text-red-300"
                } animate-fade-in`}
              >
                <p className="font-medium">{formStatus.message}</p>
                {formStatus.details && <p className="text-sm mt-1 opacity-80">{formStatus.details}</p>}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
