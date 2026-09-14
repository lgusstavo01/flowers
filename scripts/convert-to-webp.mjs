// Converte as imagens de src/assets/img e src/assets/iv para .webp e
// remove os arquivos originais (.jpeg/.jpg/.png). Rodar após adicionar
// novas fotos: npm run images:webp
import { readdir, unlink } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const TARGET_DIRS = ["src/assets/img", "src/assets/iv"];
const SOURCE_EXTENSIONS = [".jpeg", ".jpg", ".png"];

for (const dir of TARGET_DIRS) {
  const files = await readdir(dir);

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (!SOURCE_EXTENSIONS.includes(ext)) continue;

    const srcPath = path.join(dir, file);
    const destPath = path.join(dir, `${path.basename(file, ext)}.webp`);

    await sharp(srcPath).webp({ quality: 80 }).toFile(destPath);
    await unlink(srcPath);

    console.log(`${srcPath} -> ${destPath}`);
  }
}
