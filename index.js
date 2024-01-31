import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

console.log('Hello World!');
console.log(10_000_000_000);
console.log(__dirname);
