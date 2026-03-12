const fs = require('fs');
const path = require('path');

let securityHeaders = [];

try {
  const jsonPath = path.join(__dirname, 'security-headers.json');
  const data = fs.readFileSync(jsonPath, 'utf-8');
  const allHeaders = JSON.parse(data);

  // ✅ SCOATE CSP din lista statică
  securityHeaders = allHeaders.filter(h => 
    h.key !== 'Content-Security-Policy'
  );

} catch (e) {
  console.warn('⚠️ security-headers.json not found');
}

module.exports = {
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
};