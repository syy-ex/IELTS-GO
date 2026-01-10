const fs = require('fs');
const path = require('path');

const srcDir = __dirname;
const wwwDir = path.join(__dirname, 'www');

// Ensure www directory exists
if (!fs.existsSync(wwwDir)) {
    fs.mkdirSync(wwwDir, { recursive: true });
}

// Files to copy
const filesToCopy = [
    'index.html',
    'manifest.json',
    'sw.js',
    'icon-192.png',
    'icon-512.png'
];

// Copy single files
filesToCopy.forEach(file => {
    const src = path.join(srcDir, file);
    const dest = path.join(wwwDir, file);
    if (fs.existsSync(src)) {
        fs.copyFileSync(src, dest);
        console.log(`Copied: ${file}`);
    }
});

// Copy all vocabulary_part*.js files
fs.readdirSync(srcDir).forEach(file => {
    if (file.startsWith('vocabulary') && file.endsWith('.js')) {
        const src = path.join(srcDir, file);
        const dest = path.join(wwwDir, file);
        fs.copyFileSync(src, dest);
        console.log(`Copied: ${file}`);
    }
});

// Copy vendor directory
const vendorSrc = path.join(srcDir, 'vendor');
const vendorDest = path.join(wwwDir, 'vendor');

if (fs.existsSync(vendorSrc)) {
    if (!fs.existsSync(vendorDest)) {
        fs.mkdirSync(vendorDest, { recursive: true });
    }
    fs.readdirSync(vendorSrc).forEach(file => {
        const src = path.join(vendorSrc, file);
        const dest = path.join(vendorDest, file);
        fs.copyFileSync(src, dest);
        console.log(`Copied: vendor/${file}`);
    });
}

console.log('\n✅ Web assets copied to www/ successfully!');
