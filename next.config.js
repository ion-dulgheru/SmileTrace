const fs = require('fs');
const path = require('path');

// Headere care NU conțin nonce — pot fi statice
const STATIC_HEADERS = [
  'Strict-Transport-Security',
  'X-Content-Type-Options', 
  'X-Frame-Options',
  'Referrer-Policy',
  'Permissions-Policy',
  'Cross-Origin-Opener-Policy',
  'Cross-Origin-Embedder-Policy',
  'Cross-Origin-Resource-Policy',
  'Access-Control-Allow-Origin',
  'Access-Control-Allow-Credentials',
  'Vary',
]

let securityHeaders = []

try {
  const jsonPath = path.join(__dirname, 'security-headers.json')
  const data = fs.readFileSync(jsonPath, 'utf-8')
  const allHeaders = JSON.parse(data)

  // ✅ Filtrezi — CSP și x-nonce NU intră aici, le gestionează middleware-ul
  securityHeaders = allHeaders.filter(h => 
    STATIC_HEADERS.includes(h.key)
  )
} catch (e) {
  console.warn('⚠️ security-headers.json not found, headers disabled.')
}

module.exports = {
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }]
  },
}