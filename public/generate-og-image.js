// This is a simple script to generate the OG image
// You can run this locally or use an online tool to convert the SVG to PNG

const fs = require("fs")

const svgContent = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#1e293b;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#334155;stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <rect width="1200" height="630" fill="url(#bg)"/>
  
  <circle cx="300" cy="150" r="100" fill="#3b82f6" opacity="0.1"/>
  <circle cx="900" cy="480" r="120" fill="#3b82f6" opacity="0.1"/>
  
  <text x="600" y="180" text-anchor="middle" fill="#3b82f6" font-family="Arial, sans-serif" font-size="48" font-weight="bold">GYN Ontario</text>
  
  <text x="600" y="280" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="64" font-weight="900">Grow Your Network</text>
  
  <text x="600" y="340" text-anchor="middle" fill="#cbd5e1" font-family="Arial, sans-serif" font-size="32" font-weight="300">Facebook Ads with Guaranteed 2× ROI</text>
  
  <text x="300" y="450" text-anchor="middle" fill="#3b82f6" font-family="Arial, sans-serif" font-size="24" font-weight="600">✓ Zero Risk</text>
  <text x="600" y="450" text-anchor="middle" fill="#3b82f6" font-family="Arial, sans-serif" font-size="24" font-weight="600">✓ Guaranteed ROI</text>
  <text x="900" y="450" text-anchor="middle" fill="#3b82f6" font-family="Arial, sans-serif" font-size="24" font-weight="600">✓ Performance-Based</text>
</svg>
`

console.log("SVG content generated. Convert this to PNG using an online tool.")
