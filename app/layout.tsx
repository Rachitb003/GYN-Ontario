import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

// Enhanced metadata for better SEO
export const metadata: Metadata = {
  title: "GYN Ontario | Facebook Ads Marketing Agency - Guaranteed 2× ROI",
  description:
    "Grow Your Network with data-driven Facebook Ads. Zero risk, guaranteed 2× ROI. Performance-based partnership model. Book your free consultation today.",
  keywords:
    "facebook ads, marketing agency, ad strategy, social media marketing, grow your network, guaranteed roi, performance marketing, ontario marketing",
  authors: [{ name: "GYN Ontario" }],
  creator: "GYN Ontario",
  publisher: "GYN Ontario",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://gynontario.org",
    siteName: "GYN Ontario",
    title: "GYN Ontario | Facebook Ads Marketing Agency - Guaranteed 2× ROI",
    description:
      "Grow Your Network with data-driven Facebook Ads. Zero risk, guaranteed 2× ROI. Performance-based partnership model.",
    images: [
      {
        url: "https://gynontario.org/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "GYN Ontario - Facebook Ads Marketing Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GYN Ontario | Facebook Ads Marketing Agency",
    description: "Grow Your Network with data-driven Facebook Ads. Zero risk, guaranteed 2× ROI.",
    images: ["https://gynontario.org/og-image.jpg"],
  },
  alternates: {
    canonical: "https://gynontario.org",
  },
  verification: {
    google: "BuSeabzDR-0VGnLWj4UeMRqWe3-DgQe7YNEGWhHlqe4", // Just the code, not the HTML tag
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Additional SEO meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1e40af" />
        <link rel="canonical" href="https://gynontario.org" />

        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "GYN Ontario",
              alternateName: "Grow Your Network Ontario",
              url: "https://gynontario.org",
              logo: "https://gynontario.org/logo.png",
              description:
                "Facebook Ads Marketing Agency with guaranteed 2× ROI and performance-based partnership model.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "CA",
                addressRegion: "Ontario",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-XXX-XXX-XXXX",
                contactType: "customer service",
                email: "gynontario@gmail.com",
              },
              sameAs: ["https://facebook.com/gynontario", "https://linkedin.com/company/gynontario"],
            }),
          }}
        />

        {/* Hash navigation script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function scrollToElement(id) {
                  const element = document.getElementById(id);
                  if (element) {
                    const headerOffset = 80;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    });
                    return true;
                  }
                  return false;
                }
                
                function handleHash() {
                  if (window.location.hash) {
                    const id = window.location.hash.substring(1);
                    
                    if (!scrollToElement(id)) {
                      setTimeout(() => {
                        scrollToElement(id);
                      }, 500);
                      
                      setTimeout(() => {
                        scrollToElement(id);
                      }, 1000);
                    }
                  }
                }
                
                if (document.readyState === 'loading') {
                  document.addEventListener('DOMContentLoaded', handleHash);
                } else {
                  handleHash();
                }
                
                window.addEventListener('hashchange', handleHash);
              })();
            `,
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
