// rename-png-to-lowercase.js
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

// Get __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Folder to process
const folderPath = path.join(__dirname, 'public/StarMap/Content/SmallerThings');

async function renamePNGs() {
    try {
        const files = await fs.readdir(folderPath);

        for (const file of files) {
            const ext = path.extname(file); // file extension
            const base = path.basename(file, ext); // filename without extension

            if (ext.toLowerCase() === '.png' && ext !== '.png') {
                const oldPath = path.join(folderPath, file);
                const newPath = path.join(folderPath, base + '.png');

                await fs.rename(oldPath, newPath);
                console.log(`Renamed ${file} -> ${base}.png`);
            }
        }
        console.log('All PNG files processed!');
    } catch (err) {
        console.error('Error:', err);
    }
}

renamePNGs();
