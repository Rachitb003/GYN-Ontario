# GYN Ontario - Facebook Ads Marketing Agency

A production-ready Next.js landing page for GYN Ontario, a Facebook Ads marketing agency.

## Email Setup Instructions

The contact form sends emails to gynontario@gmail.com using Resend. To make this work, you need to set up the following environment variables:

### For Production (Vercel)

Add the following environment variable in your Vercel project settings:

1. `RESEND_API_KEY`: Your Resend API key

### How to Set Up Resend

1. Create a Resend account at [resend.com](https://resend.com/)
2. Verify your domain (optional but recommended)
3. Create an API key
4. Add the API key to your Vercel environment variables

Resend offers a generous free tier with 100 emails/day and 3,000 emails/month on their free plan.

## Business Email Validation

The contact form validates that users enter a business email address (not a personal email like Gmail or Yahoo). This validation happens both on the client-side and server-side for security.

## Features

- Next.js with App Router
- TypeScript for type safety
- Tailwind CSS for styling
- Responsive design
- Contact form with email sending capability via Resend
- Business email validation
- SEO optimization
\`\`\`

Let's also update the .env.local file to include the Resend API key:
