import type { Metadata } from "next"
import ClientPage from "./ClientPage"

export const metadata: Metadata = {
  title: "GYN Ontario | Facebook Ads Marketing Agency - Guaranteed 2× ROI",
  description:
    "Grow Your Network with data-driven Facebook Ads. Zero risk, guaranteed 2× ROI. Performance-based partnership model. Book your free consultation today.",
  keywords:
    "facebook ads, marketing agency, ad strategy, social media marketing, grow your network, guaranteed roi, performance marketing, ontario marketing, facebook advertising, digital marketing",
  alternates: {
    canonical: "https://gynontario.org",
  },
  openGraph: {
    title: "GYN Ontario | Facebook Ads Marketing Agency - Guaranteed 2× ROI",
    description:
      "Grow Your Network with data-driven Facebook Ads. Zero risk, guaranteed 2× ROI. Performance-based partnership model.",
    url: "https://gynontario.org",
    siteName: "GYN Ontario",
    images: [
      {
        url: "https://gynontario.org/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "GYN Ontario - Facebook Ads Marketing Agency",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
}

export default function Home() {
  return <ClientPage />
}
