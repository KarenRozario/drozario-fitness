import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const imagesDir = path.resolve('public/images');

async function optimiseImages() {
  if (!fs.existsSync(imagesDir)) {
    console.log('No public/images directory found');
    return;
  }

  const files = fs.readdirSync(imagesDir);

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (!['.jpg', '.jpeg', '.png'].includes(ext)) {
      continue;
    }

    const baseName = path.basename(file, ext);
    const inputPath = path.join(imagesDir, file);
    const outputPath = path.join(imagesDir, `${baseName}.webp`);

    let maxWidth = 1200; // default for cards & portraits
    if (baseName.includes('hero')) {
      maxWidth = 1920; // full-bleed / hero images
    } else if (baseName.startsWith('blog-') && baseName.length <= 8) {
      // blog-1, blog-2, blog-3 thumbnails
      maxWidth = 800;
    }

    const metadata = await sharp(inputPath).metadata();
    console.log(`Processing ${file} (${metadata.width}x${metadata.height}) -> max width ${maxWidth}px`);

    let pipeline = sharp(inputPath);
    if (metadata.width && metadata.width > maxWidth) {
      pipeline = pipeline.resize({ width: maxWidth, withoutEnlargement: true });
    }

    await pipeline
      .webp({ quality: 75, effort: 6 })
      .toFile(outputPath);

    const oldSize = fs.statSync(inputPath).size;
    const newSize = fs.statSync(outputPath).size;
    console.log(`Converted ${file} (${(oldSize / 1024).toFixed(1)} KB) -> ${baseName}.webp (${(newSize / 1024).toFixed(1)} KB)`);

    // Remove the original file
    fs.unlinkSync(inputPath);
  }

  console.log('Image optimisation complete.');
}

optimiseImages().catch((err) => {
  console.error('Error optimizing images:', err);
  process.exit(1);
});

