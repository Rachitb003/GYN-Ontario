import type { Metadata } from "next"
import PricingClientPage from "./PricingClientPage"

export const metadata: Metadata = {
  title: "Pricing | GYN Ontario - Guaranteed 2× ROI Facebook Ads",
  description:
    "Transparent pricing with guaranteed 2× ROI. Zero risk model with performance-based partnership. Month 1 guaranteed, profit-sharing from Month 2+.",
  keywords:
    "facebook ads pricing, guaranteed roi, performance marketing pricing, facebook advertising cost, marketing agency pricing",
  alternates: {
    canonical: "https://gynontario.org/pricing",
  },
  openGraph: {
    title: "Pricing | GYN Ontario - Guaranteed 2× ROI Facebook Ads",
    description: "Transparent pricing with guaranteed 2× ROI. Zero risk model with performance-based partnership.",
    url: "https://gynontario.org/pricing",
    siteName: "GYN Ontario",
    images: [
      {
        url: "https://gynontario.org/og-image.png", // Updated to use the new image
        width: 1200,
        height: 630,
        alt: "GYN Ontario Pricing - Facebook Ads Marketing Agency",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing | GYN Ontario - Guaranteed 2× ROI Facebook Ads",
    description: "Transparent pricing with guaranteed 2× ROI. Zero risk model with performance-based partnership.",
    images: ["https://gynontario.org/og-image.png"], // Updated to use the new image
  },
}

export default function PricingPage() {
  return <PricingClientPage />
}
