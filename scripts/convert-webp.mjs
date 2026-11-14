import sharp from "sharp";
import fs from "fs";
import path from "path";

const imagesDir = path.resolve("public/images");

async function convert() {
  if (!fs.existsSync(imagesDir)) return;
  const files = fs.readdirSync(imagesDir);

  for (const file of files) {
    if (file.endsWith(".jpg") || file.endsWith(".jpeg") || (file.endsWith(".png") && file !== "logo.png")) {
      const inputPath = path.join(imagesDir, file);
      const ext = path.extname(file);
      const outputPath = path.join(imagesDir, file.replace(ext, ".webp"));

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
        `✓ Converted ${file} (${(originalStats.size / 1024).toFixed(0)} KB) -> ${path.basename(outputPath)} (${(webpStats.size / 1024).toFixed(0)} KB) [Saved ${savings}%]`
      );
    }
  }
}

convert().catch((err) => {
  console.error(err);
  process.exit(1);
});

