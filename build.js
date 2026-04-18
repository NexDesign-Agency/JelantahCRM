const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, 'index.html');
let content = fs.readFileSync(indexPath, 'utf8');

// Ambil nilai dari Environment Variable Vercel
const geminiKey = process.env.GEMINI_KEY || 'PLACEHOLDER_GEMINI_KEY';
const webhookUrl = process.env.WEBHOOK_URL || 'PLACEHOLDER_WEBHOOK_URL';

console.log('--- Build: Injecting Environment Variables ---');

if (geminiKey !== 'PLACEHOLDER_GEMINI_KEY') {
    console.log('Injecting GEMINI_KEY...');
    content = content.replace('PLACEHOLDER_GEMINI_KEY', geminiKey);
} else {
    console.log('GEMINI_KEY not found in environment, skipping injection.');
}

if (webhookUrl !== 'PLACEHOLDER_WEBHOOK_URL') {
    console.log('Injecting WEBHOOK_URL...');
    content = content.replace('PLACEHOLDER_WEBHOOK_URL', webhookUrl);
} else {
    console.log('WEBHOOK_URL not found in environment, skipping injection.');
}

fs.writeFileSync(indexPath, content);
console.log('--- Build: Success ---');
