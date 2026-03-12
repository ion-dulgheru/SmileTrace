// middleware.ts
import NextAuth from "next-auth"
import { authConfig } from "@/lib/auth.config"  // ✅ fără Prisma
import { NextResponse } from "next/server"

// ✅ Auth separat, doar JWT, compatibil Edge
const { auth } = NextAuth(authConfig)

function generateNonce(): string {
  const array = new Uint8Array(16)
  crypto.getRandomValues(array)
  return btoa(String.fromCharCode(...array))
}

export default auth((req) => {
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
    "object-src 'none'",
    "base-uri 'self'",
  ].join('; ')
    console.log('✅ CSP setat pentru:', req.nextUrl.pathname)
  const requestHeaders = new Headers(req.headers)
  requestHeaders.set('x-nonce', nonce)

  const response = NextResponse.next({
    request: { headers: requestHeaders },
  })

  response.headers.set('Content-Security-Policy', csp)
  return response
})

export const config = {
  matcher: [
    {
      source: '/((?!_next/static|_next/image|favicon.ico).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
  ],
}


