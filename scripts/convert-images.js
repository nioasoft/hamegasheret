const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

const INPUT_DIR = path.join(__dirname, '../public/images');
const OUTPUT_DIR = path.join(__dirname, '../public/images');

const IMAGES_TO_CONVERT = [
  'consultation-hero.jpg',
  'articles-hero.jpg',
  'child-support-hero.jpg',
  'divorce-mistakes.jpg',
  'shared-custody.jpg',
  'asaf.jpg',
  'zehavit.jpg'
];

async function convertToWebP() {
  console.log('Starting WebP conversion...');

  for (const imageName of IMAGES_TO_CONVERT) {
    const inputPath = path.join(INPUT_DIR, imageName);
    const outputName = imageName.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    const outputPath = path.join(OUTPUT_DIR, outputName);

    try {
      await sharp(inputPath)
        .webp({
          quality: 85,
          effort: 6
        })
        .toFile(outputPath);

      const inputStats = await fs.stat(inputPath);
      const outputStats = await fs.stat(outputPath);
      const reduction = ((1 - outputStats.size / inputStats.size) * 100).toFixed(1);

      console.log(`✓ ${imageName} → ${outputName} (${reduction}% smaller)`);
    } catch (error) {
      console.error(`✗ Error converting ${imageName}:`, error.message);
    }
  }

  console.log('WebP conversion complete!');
}

convertToWebP().catch(console.error);