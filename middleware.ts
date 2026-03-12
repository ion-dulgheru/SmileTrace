import { auth } from "@/lib/auth"
import { NextResponse } from "next/server"
// ❌ import { randomBytes } from "crypto"  -- nu merge în Edge

function generateNonce(): string {
  const array = new Uint8Array(16)
  crypto.getRandomValues(array)  // ✅ Web Crypto API - funcționează în Edge
  return Buffer.from(array).toString('base64')
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
    "frame-ancestors 'self'"
  ].join('; ')

  const response = NextResponse.next()
  response.headers.set('Content-Security-Policy', csp)
  response.headers.set('x-nonce', nonce)
  return response
})

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ]
}
