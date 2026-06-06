/**
 * One-shot: migrate localStorage/sessionStorage calls to VillageStorage.
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const targets = [
  'index.html',
  'modules/app.js',
  'modules/citizenState.js',
  'modules/citizenLedger.js',
  'modules/p2pWalletRouter.js',
  'modules/sovereignty/index.js'
];

function migrate(content) {
  let out = content;
  out = out.replace(/localStorage\.getItem\(/g, 'VillageStorage.getItem(');
  out = out.replace(/localStorage\.setItem\(/g, 'VillageStorage.setItem(');
  out = out.replace(/localStorage\.removeItem\(/g, 'VillageStorage.removeItem(');
  out = out.replace(/sessionStorage\.getItem\(/g, 'VillageStorage.getSessionItem(');
  out = out.replace(/sessionStorage\.setItem\(/g, 'VillageStorage.setSessionItem(');
  out = out.replace(/sessionStorage\.removeItem\(/g, 'VillageStorage.removeSessionItem(');
  out = out.replace(/sessionStorage\.clear\(\)/g, 'VillageStorage.clearSession()');
  return out;
}

targets.forEach(function (rel) {
  const file = path.join(ROOT, rel);
  if (!fs.existsSync(file)) {
    console.warn('Skip missing:', rel);
    return;
  }
  const before = fs.readFileSync(file, 'utf8');
  const after = migrate(before);
  if (before !== after) {
    fs.writeFileSync(file, after, 'utf8');
    console.log('Patched:', rel);
  } else {
    console.log('No changes:', rel);
  }
});

console.log('Storage heal complete.');
