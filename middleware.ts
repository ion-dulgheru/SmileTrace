import { auth } from "@/lib/auth"
import { NextResponse } from "next/server"

function generateNonce(): string {
  const array = new Uint8Array(16)
  crypto.getRandomValues(array)
  return btoa(String.fromCharCode(...array))  // ✅ fără Buffer
}

export default auth((req) => {
  const protectedPaths = ['/dashboard3']

  const isProtectedPath = protectedPaths.some(path =>
    req.nextUrl.pathname.startsWith(path)
  )

  if (isProtectedPath && !req.auth) {
    const loginUrl = new URL('/login', req.nextUrl.origin)
    loginUrl.searchParams.set('redirect_to', req.nextUrl.pathname)
    return NextResponse.redirect(loginUrl)
  }

  const nonce = generateNonce()

  const csp = [
    "default-src 'none'",
    `script-src 'self' 'nonce-${nonce}'`,
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "img-src 'self' data: blob: https:",
    "font-src 'self' https://fonts.gstatic.com",
    "frame-src 'self'",
    "connect-src 'self' https://smiletrace.vercel.app",
    "frame-ancestors 'self'",
    "object-src 'none'",     // ✅ adăugat explicit
    "base-uri 'self'",       // ✅ previne injectare <base> tag
  ].join('; ')

  // ✅ Nonce-ul merge în REQUEST headers (citit server-side de _document)
  const requestHeaders = new Headers(req.headers)
  requestHeaders.set('x-nonce', nonce)

  const response = NextResponse.next({
    request: { headers: requestHeaders },
  })

  response.headers.set('Content-Security-Policy', csp)
  // ✅ x-nonce NU apare în response — doar în request (server-side)

  return response
})

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}
