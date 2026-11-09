const fs = require('fs');
const path = require('path');

// 1. India (24 spokes Ashoka Chakra)
function getIndiaSVG() {
  const spokes = [];
  for (let i = 0; i < 24; i++) {
    const angle = i * 15;
    spokes.push(`<line x1="450" y1="300" x2="${450 + 72 * Math.cos(angle * Math.PI / 180)}" y2="${300 + 72 * Math.sin(angle * Math.PI / 180)}" stroke="#000080" stroke-width="3.5"/>`);
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600" width="900" height="600">
  <rect width="900" height="200" fill="#FF9933"/>
  <rect y="200" width="900" height="200" fill="#FFFFFF"/>
  <rect y="400" width="900" height="200" fill="#138808"/>
  <circle cx="450" cy="300" r="76" fill="none" stroke="#000080" stroke-width="7"/>
  <circle cx="450" cy="300" r="15" fill="#000080"/>
  ${spokes.join('\n  ')}
</svg>`;
}

// 2. UAE (United Arab Emirates)
function getUaeSVG() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600" width="1200" height="600">
  <rect x="300" y="0" width="900" height="200" fill="#00732F"/>
  <rect x="300" y="200" width="900" height="200" fill="#FFFFFF"/>
  <rect x="300" y="400" width="900" height="200" fill="#000000"/>
  <rect x="0" y="0" width="300" height="600" fill="#FF0000"/>
</svg>`;
}

// 3. Qatar (9 white serrated points, maroon #8D1B3D)
function getQatarSVG() {
  // 9 points along y from 0 to 600. step = 600 / 9 = 66.666
  let points = '0,0 280,0';
  for (let i = 0; i < 9; i++) {
    const yTop = i * (600 / 9);
    const yMid = (i + 0.5) * (600 / 9);
    const yBot = (i + 1) * (600 / 9);
    points += ` 380,${yMid.toFixed(1)} 280,${yBot.toFixed(1)}`;
  }
  points += ' 0,600';

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600" width="1200" height="600">
  <rect width="1200" height="600" fill="#8D1B3D"/>
  <polygon points="${points}" fill="#FFFFFF"/>
</svg>`;
}

// 4. Bahrain (5 white serrated points, red #CE1126)
function getBahrainSVG() {
  let points = '0,0 300,0';
  for (let i = 0; i < 5; i++) {
    const yMid = (i + 0.5) * (600 / 5);
    const yBot = (i + 1) * (600 / 5);
    points += ` 440,${yMid.toFixed(1)} 300,${yBot.toFixed(1)}`;
  }
  points += ' 0,600';

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 600" width="1000" height="600">
  <rect width="1000" height="600" fill="#CE1126"/>
  <polygon points="${points}" fill="#FFFFFF"/>
</svg>`;
}

// 5. Saudi Arabia (Green #006C35 with sword & calligraphy silhouette)
function getSaudiSVG() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600" width="900" height="600">
  <rect width="900" height="600" fill="#006C35"/>
  <g fill="#FFFFFF">
    <!-- Stylized Kufic Arabic Script Silhouette -->
    <path d="M 230 250 C 250 210, 310 210, 340 250 C 370 210, 430 210, 460 250 C 490 200, 560 200, 600 240 L 670 240 C 685 240, 685 260, 670 260 L 630 260 C 630 280, 610 295, 590 295 L 290 295 C 260 295, 230 280, 230 250 Z" opacity="0.95"/>
    <path d="M 260 200 L 280 200 L 280 260 L 260 260 Z" />
    <path d="M 320 180 L 340 180 L 340 260 L 320 260 Z" />
    <path d="M 380 190 L 400 190 L 400 260 L 380 260 Z" />
    <path d="M 440 175 L 460 175 L 460 260 L 440 260 Z" />
    <path d="M 500 185 L 520 185 L 520 260 L 500 260 Z" />
    <path d="M 560 190 L 580 190 L 580 260 L 560 260 Z" />
    <!-- Traditional Curved Sword -->
    <path d="M 270 365 L 610 365 C 645 365, 675 355, 685 345 C 680 358, 650 378, 610 378 L 270 378 Z"/>
    <rect x="250" y="350" width="20" height="42" rx="4" />
    <circle cx="235" cy="371" r="10" />
  </g>
</svg>`;
}

// 6. Oman
function getOmanSVG() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600" width="1200" height="600">
  <rect x="300" y="0" width="900" height="200" fill="#FFFFFF"/>
  <rect x="300" y="200" width="900" height="200" fill="#DB161B"/>
  <rect x="300" y="400" width="900" height="200" fill="#008000"/>
  <rect x="0" y="0" width="300" height="600" fill="#DB161B"/>
  <!-- National Emblem in white -->
  <g transform="translate(150, 100) scale(0.65)" fill="#FFFFFF" stroke="#FFFFFF" stroke-width="2">
    <circle cx="0" cy="0" r="10" fill="#FFFFFF"/>
    <path d="M -50 -40 L 50 40 M 50 -40 L -50 40" stroke="#FFFFFF" stroke-width="8"/>
    <path d="M 0 -60 L 0 50" stroke="#FFFFFF" stroke-width="10"/>
    <path d="M -20 -10 C -20 25, 20 25, 20 -10 Z" fill="#FFFFFF"/>
  </g>
</svg>`;
}

// 7. Kuwait
function getKuwaitSVG() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600" width="1200" height="600">
  <rect width="1200" height="200" fill="#007A3D"/>
  <rect y="200" width="1200" height="200" fill="#FFFFFF"/>
  <rect y="400" width="1200" height="200" fill="#CE1126"/>
  <polygon points="0,0 300,200 300,400 0,600" fill="#000000"/>
</svg>`;
}

// 8. USA
function getUsaSVG() {
  let stripes = '';
  for (let i = 0; i < 13; i++) {
    stripes += `<rect y="${i * (600 / 13)}" width="1000" height="${600 / 13}" fill="${i % 2 === 0 ? '#B22234' : '#FFFFFF'}"/>`;
  }
  // 50 stars in canton
  let stars = '';
  for (let row = 0; row < 9; row++) {
    const isOdd = row % 2 === 0;
    const count = isOdd ? 6 : 5;
    const xOffset = isOdd ? 35 : 68;
    const y = 20 + row * 24;
    for (let col = 0; col < count; col++) {
      const x = xOffset + col * 66;
      stars += `<circle cx="${x}" cy="${y}" r="6" fill="#FFFFFF"/>`;
    }
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 600" width="1000" height="600">
  ${stripes}
  <rect width="400" height="${7 * (600 / 13)}" fill="#3C3B6E"/>
  ${stars}
</svg>`;
}

// 9. UK
function getUkSVG() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 600" width="1000" height="600">
  <clipPath id="uk-clip">
    <rect width="1000" height="600"/>
  </clipPath>
  <g clip-path="url(#uk-clip)">
    <rect width="1000" height="600" fill="#012169"/>
    <!-- Diagonal white -->
    <line x1="0" y1="0" x2="1000" y2="600" stroke="#FFFFFF" stroke-width="120"/>
    <line x1="1000" y1="0" x2="0" y2="600" stroke="#FFFFFF" stroke-width="120"/>
    <!-- Diagonal red -->
    <line x1="0" y1="0" x2="1000" y2="600" stroke="#C8102E" stroke-width="40"/>
    <line x1="1000" y1="0" x2="0" y2="600" stroke="#C8102E" stroke-width="40"/>
    <!-- Cross white -->
    <rect x="400" width="200" height="600" fill="#FFFFFF"/>
    <rect y="200" width="1000" height="200" fill="#FFFFFF"/>
    <!-- Cross red -->
    <rect x="440" width="120" height="600" fill="#C8102E"/>
    <rect y="240" width="1000" height="120" fill="#C8102E"/>
  </g>
</svg>`;
}

// 10. Global / International
function getGlobalSVG() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="600" height="600">
  <defs>
    <radialGradient id="globe-grad" cx="40%" cy="40%" r="65%">
      <stop offset="0%" stop-color="#1E75C4"/>
      <stop offset="60%" stop-color="#062B60"/>
      <stop offset="100%" stop-color="#021533"/>
    </radialGradient>
  </defs>
  <circle cx="300" cy="300" r="280" fill="url(#globe-grad)"/>
  <circle cx="300" cy="300" r="280" fill="none" stroke="#539FE0" stroke-width="12" opacity="0.6"/>
  <!-- Latitude lines -->
  <line x1="25" y1="300" x2="575" y2="300" stroke="#BFE0FC" stroke-width="8" opacity="0.75"/>
  <ellipse cx="300" cy="300" rx="275" ry="140" fill="none" stroke="#BFE0FC" stroke-width="8" opacity="0.75"/>
  <ellipse cx="300" cy="300" rx="230" ry="240" fill="none" stroke="#BFE0FC" stroke-width="8" opacity="0.75"/>
  <!-- Longitude lines -->
  <line x1="300" y1="20" x2="300" y2="580" stroke="#BFE0FC" stroke-width="8" opacity="0.75"/>
  <ellipse cx="300" cy="300" rx="140" ry="275" fill="none" stroke="#BFE0FC" stroke-width="8" opacity="0.75"/>
</svg>`;
}

const flags = {
  'in.svg': getIndiaSVG(),
  'ae.svg': getUaeSVG(),
  'qa.svg': getQatarSVG(),
  'bh.svg': getBahrainSVG(),
  'sa.svg': getSaudiSVG(),
  'om.svg': getOmanSVG(),
  'kw.svg': getKuwaitSVG(),
  'us.svg': getUsaSVG(),
  'uk.svg': getUkSVG(),
  'global.svg': getGlobalSVG()
};

const dirs = [
  path.join(__dirname, '..', 'public', 'images', 'flags'),
  path.join(__dirname, '..', 'dist', 'images', 'flags')
];

dirs.forEach(d => {
  if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true });
});

for (const [filename, content] of Object.entries(flags)) {
  dirs.forEach(dir => {
    fs.writeFileSync(path.join(dir, filename), content.trim(), 'utf-8');
  });
  console.log(`Saved ${filename}`);
}
console.log('All flags successfully generated!');
