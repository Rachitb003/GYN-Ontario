import { NextResponse } from "next/server"

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

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, company, budget, message } = body

    // Validate the request
    if (!name || !email || !company || !budget || !message) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 })
    }

    // Validate business email
    if (!isBusinessEmail(email)) {
      return NextResponse.json({ message: "Please provide a valid business email" }, { status: 400 })
    }

    // Create the email content with reply-to information prominently displayed
    const emailContent = `
      <h1>New Contact Form Submission</h1>
      <p style="background-color: #f0f0f0; padding: 10px; border-left: 4px solid #0284c7;">
        <strong>REPLY TO:</strong> ${name} &lt;${email}&gt;
      </p>
      <hr />
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Business Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Budget:</strong> ${budget}</p>
      <p><strong>Message:</strong> ${message}</p>
    `

    // Use the provided API key directly
    const RESEND_API_KEY = "re_9cEQhBzR_LozG7eyPavQgGzapvjVd75KW"

    // Send email using Resend API
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "GYN Ontario <onboarding@resend.dev>", // Using the default sender
        to: ["rachit@gynontario.org"], // Send to your verified email
        reply_to: email, // Set reply-to as the user's email
        subject: `New Contact Form Submission from ${name} at ${company}`,
        html: emailContent,
        text: `New Contact Form Submission\n\nREPLY TO: ${name} <${email}>\n\nName: ${name}\nBusiness Email: ${email}\nCompany: ${company}\nBudget: ${budget}\nMessage: ${message}`,
      }),
    })

    const responseData = await response.json()

    if (!response.ok) {
      console.error("Resend API error:", responseData)
      return NextResponse.json(
        {
          message: "Failed to send email",
          error: responseData.message || "Unknown error",
          details: responseData,
        },
        { status: 500 },
      )
    }

    return NextResponse.json(
      {
        message: "Email sent successfully",
        id: responseData.id,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json(
      {
        message: "Failed to send email",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
