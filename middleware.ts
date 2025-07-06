import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()

  // Force HTTPS redirect
  if (url.protocol === "http:" && process.env.NODE_ENV === "production") {
    url.protocol = "https:"
    return NextResponse.redirect(url)
  }

  // Handle www redirect - redirect www to non-www
  if (url.hostname.startsWith("www.")) {
    url.hostname = url.hostname.replace("www.", "")
    return NextResponse.redirect(url, 301)
  }

  // Handle trailing slashes - remove them except for root
  if (url.pathname !== "/" && url.pathname.endsWith("/")) {
    url.pathname = url.pathname.slice(0, -1)
    return NextResponse.redirect(url, 301)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
}
