const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

// Design specifications
const PRIMARY_COLOR = '#4a4538'; // Beige/brown background
const TEXT_COLOR = '#f5f5f0'; // Light text color for contrast
const HEBREW_TEXT = 'המ'; // Hebrew letters

/**
 * Create an SVG with Hebrew text centered on a colored background
 */
function createIconSVG(size) {
  const fontSize = Math.floor(size * 0.5); // Font size is 50% of icon size
  const padding = size * 0.15; // 15% padding

  return `
    <svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
      <!-- Background -->
      <rect width="${size}" height="${size}" fill="${PRIMARY_COLOR}" rx="${size * 0.1}"/>

      <!-- Hebrew Text -->
      <text
        x="50%"
        y="50%"
        font-family="Arial, sans-serif"
        font-size="${fontSize}"
        font-weight="700"
        fill="${TEXT_COLOR}"
        text-anchor="middle"
        dominant-baseline="central"
        direction="rtl"
      >${HEBREW_TEXT}</text>
    </svg>
  `.trim();
}

/**
 * Generate PNG icon from SVG
 */
async function generateIcon(outputPath, size) {
  const svg = createIconSVG(size);

  try {
    await sharp(Buffer.from(svg))
      .resize(size, size)
      .png()
      .toFile(outputPath);

    console.log(`✓ Generated: ${outputPath} (${size}x${size}px)`);
  } catch (error) {
    console.error(`✗ Failed to generate ${outputPath}:`, error.message);
    throw error;
  }
}

/**
 * Generate logo with larger size
 */
async function generateLogo(outputPath, width, height) {
  const size = Math.max(width, height);
  const svg = createIconSVG(size);

  try {
    await sharp(Buffer.from(svg))
      .resize(width, height, {
        fit: 'contain',
        background: { r: 74, g: 69, b: 56, alpha: 1 }
      })
      .png()
      .toFile(outputPath);

    console.log(`✓ Generated: ${outputPath} (${width}x${height}px)`);
  } catch (error) {
    console.error(`✗ Failed to generate ${outputPath}:`, error.message);
    throw error;
  }
}

/**
 * Main execution
 */
async function main() {
  console.log('🎨 Generating icons for המגשרת...\n');

  const projectRoot = path.join(__dirname, '..');

  // Define output paths
  const icons = [
    { path: path.join(projectRoot, 'src/app/icon.png'), size: 32 },
    { path: path.join(projectRoot, 'src/app/apple-icon.png'), size: 180 },
    { path: path.join(projectRoot, 'public/logo.png'), width: 800, height: 600 }
  ];

  // Generate all icons
  for (const icon of icons) {
    if (icon.size) {
      await generateIcon(icon.path, icon.size);
    } else {
      await generateLogo(icon.path, icon.width, icon.height);
    }
  }

  console.log('\n✅ All icons generated successfully!');
  console.log('\nNext steps:');
  console.log('1. Check the generated icons in src/app/ and public/');
  console.log('2. Run "npm run dev" to see them in the browser');
  console.log('3. The favicon will be automatically used by Next.js 15');
}

// Run the script
main().catch(error => {
  console.error('\n❌ Error generating icons:', error);
  process.exit(1);
});
