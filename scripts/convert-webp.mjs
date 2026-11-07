import sharp from "sharp";
import fs from "fs";
import path from "path";

const imagesDir = path.resolve("public/images");
const images = ["hero.jpg", "about.jpg", "global.jpg", "technology.jpg"];

async function convert() {
  for (const img of images) {
    const inputPath = path.join(imagesDir, img);
    const outputPath = path.join(imagesDir, img.replace(".jpg", ".webp"));

    if (fs.existsSync(inputPath)) {
      const originalStats = fs.statSync(inputPath);
      await sharp(inputPath)
        .webp({ quality: 85, effort: 6 })
        .toFile(outputPath);

      const webpStats = fs.statSync(outputPath);
      const savings = (
        ((originalStats.size - webpStats.size) / originalStats.size) *
        100
      ).toFixed(1);

      console.log(
        `✓ Converted ${img} (${(originalStats.size / 1024).toFixed(0)} KB) -> ${path.basename(outputPath)} (${(webpStats.size / 1024).toFixed(0)} KB) [Saved ${savings}%]`
      );
    } else {
      console.warn(`File not found: ${inputPath}`);
    }
  }
}

convert().catch((err) => {
  console.error(err);
  process.exit(1);
});

