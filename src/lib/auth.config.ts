// lib/auth.config.ts
import type { NextAuthConfig } from "next-auth"

export const authConfig: NextAuthConfig = {
  session: { strategy: "jwt" },
  pages: {
    signIn: "/login",
    signOut: "/",
    error: "/login",
  },
  providers: [], // ← gol aici, providerii rămân în auth.ts
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      // Logica de protecție — rulează pe Edge
      const isLoggedIn = !!auth?.user
      const isProtectedPath = nextUrl.pathname.startsWith('/dashboard3')

      if (isProtectedPath && !isLoggedIn) {
        const loginUrl = new URL('/login', nextUrl.origin)
        loginUrl.searchParams.set('redirect_to', nextUrl.pathname)
        return Response.redirect(loginUrl)
      }

      return true
    },
  },
}