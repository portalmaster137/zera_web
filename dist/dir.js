import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const __root = path.join(__dirname, '..');
export default {
    __filename,
    __dirname,
    __root
};
