// FrameShield — Next.js Security Headers (Auto-Generated)
const fs = require('fs');
const path = require('path');

let securityHeaders = [];

try {
  const jsonPath = path.join(__dirname, 'security-headers.json');
  const data = fs.readFileSync(jsonPath, 'utf-8');
  securityHeaders = JSON.parse(data);
} catch (e) {
  console.warn('⚠️ security-headers.json not found, headers disabled.');
}

module.exports = {
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
};
