/**
 * Repair UTF-8 / mojibake artifacts in index.html
 */
const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, '..', 'index.html');
let c = fs.readFileSync(file, 'utf8');
const before = c.length;

// ── Control-character corruption (em dash, quotes, null bytes) ──
c = c.replace(/\u0000/g, '');
c = c.replace(/\u0014/g, '—');
c = c.replace(/\u001c/g, '\u201c');
c = c.replace(/\u001d/g, '\u201d');
c = c.replace(/=\u0012/g, '\u26a0\ufe0f');
c = c.replace(/<\?\u000f/g, '\ud83c\udfa4');
c = c.replace(/=\?\u000f/g, '\ud83d\udccd');

// ── Section banner comments ──
c = c.replace(/\/\* P{10,} /g, '/* ═══════════════════════════════════════════════════════════════ ');
c = c.replace(/ P{10,} \*\//g, ' ═══════════════════════════════════════════════════════════════ */');
c = c.replace(/\/\* \?\? /g, '/* ══ ');
c = c.replace(/ \?\? \*\//g, ' ══ */');
c = c.replace(/Trust Engine \? spam/g, 'Trust Engine — spam');
c = c.replace(/clip & video \? native/g, 'clip & video — native');
c = c.replace(/Encrypted chat \? location/g, 'Encrypted chat — location');

// ── Meta / title ──
c = c.replace(/Village \? The Global Super-App/g, 'Village — The Global Super-App');
c = c.replace(/Village \? Home/g, 'Village — Home');

// ── HTML comments ──
c = c.replace(/<!-- ([^-\n]+) \? /g, '<!-- $1 — ');

// ── Story reaction emojis (corrupted literals) ──
c = c.replace(
  /var STORY_REACTION_EMOJIS = \[[^\]]+\];/,
  "var STORY_REACTION_EMOJIS = ['\u2764\ufe0f', '\ud83d\udd25', '\ud83d\ude02', '\ud83d\ude2e', '\ud83d\udc4f'];"
);

// ── Known UI / JS string fixes ──
const replacements = [
  ['?? CRITICAL:', '\u26a0\ufe0f CRITICAL:'],
  ['?? Awaiting mobile connection...', '\u23f3 Awaiting mobile connection...'],
  ['?? Account restricted ? publishing', '\u26a0\ufe0f Account restricted — publishing'],
  ['?? Invalid Document:', '\u26a0\ufe0f Invalid Document:'],
  ['?? Document Expired:', '\u26a0\ufe0f Document Expired:'],
  ['? Mobile device connected', '\u2713 Mobile device connected'],
  ['? Premium Trust Shield Active', '\u2713 Premium Trust Shield Active'],
  ["activated ? you're verified!", "activated — you're verified!"],
  ['done ? \'?\' :', "done ? '\u2713' :"],
  ['Solana ? mock custody', 'Solana — mock custody'],
  ['Choose your destination ? commerce', 'Choose your destination — commerce'],
  ['who you are ? you can refine', 'who you are — you can refine'],
  ['PDF only ? max 10 MB', 'PDF only — max 10 MB'],
  ['one profile ? welcome', 'one profile — welcome'],
  ['Photo carousel ? add', 'Photo carousel — add'],
  ['Short clip ? add', 'Short clip — add'],
  ['Long-form video only ? MP4', 'Long-form video only — MP4'],
  ['Uhuru Park! ?? Bring friends', 'Uhuru Park! \ud83c\udf89 Bring friends'],
  ['on Village! ??', 'on Village! \ud83c\udfa8'],
  ['building on Village ?? #', 'building on Village \u2728 #'],
  ['128,492 views ? 3 days ago', '128,492 views \u00b7 3 days ago'],
  ['Sell on Village ? list', 'Sell on Village — list'],
  ['MacBook Pro 14" ? M2 Pro', 'MacBook Pro 14" \u00b7 M2 Pro'],
  ['Merchant ? Dar es Salaam', 'Merchant \u00b7 Dar es Salaam, TZ'],
  ['Global wallet ? deposits', 'Global wallet — deposits'],
  ['Solana RPC ? connecting?', 'Solana RPC — connecting\u2026'],
  ['gateway deposit ? funds', 'gateway deposit — funds'],
  ['Escrow Ledger ? Pending', 'Escrow Ledger — Pending'],
  ['governance fees ? SOL ? Solana', 'governance fees \u2192 SOL \u2192 Solana'],
  ['collected yet ? outbound', 'collected yet — outbound'],
  ['Stablecoin ? ERC-20', 'Stablecoin — ERC-20'],
  ['Payment Gateway ? 256-bit', 'Payment Gateway — 256-bit'],
  ['5+ sales ? 85%+ completion ? +5 net ??', '5+ sales \u00b7 85%+ completion \u00b7 +5 net \ud83d\udc4d'],
  ['15+ sales ? 90%+ completion ? +15 net ??', '15+ sales \u00b7 90%+ completion \u00b7 +15 net \ud83d\udc4d'],
  ['30+ sales ? 95%+ completion ? +30 net ??', '30+ sales \u00b7 95%+ completion \u00b7 +30 net \ud83d\udc4d'],
  ['50+ sales ? 98%+ completion ? +50 net ??', '50+ sales \u00b7 98%+ completion \u00b7 +50 net \ud83d\udc4d'],
  ['Trust Shield ? pay once', 'Trust Shield — pay once'],
  ['TZS / month ? secure', 'TZS / month — secure'],
  ['Pay Now ? 35,000', 'Pay Now — 35,000'],
  ['View once ? disappears', 'View once — disappears'],
  ['Hybrid marketplace ? products', 'Hybrid marketplace — products'],
  ['<strong>0</strong> items ? TZS 0', '<strong>0</strong> items \u00b7 TZS 0'],
  ['base TZS ? e.g.', 'base TZS — e.g.'],
  ['prices in TZS or USD by region.', 'prices in your chosen fiat currency.'],
  ['Global Wallet ? send', 'Citizen Wallet — send'],
  ['baskets ? exactly', 'baskets — exactly'],
  ['organizer ? merch', 'organizer — merch'],
  ['merch store ? flawless', 'merch store — flawless'],
  ['produce bundle ? quality', 'produce bundle — quality'],
  ['ID Document ? Back', 'ID Document — Back'],
  ['ID Document ? Front', 'ID Document — Front'],
  ['Opened ? Media Expired', 'Opened — Media Expired'],
  ['share to \' + appName + \'&', "share to ' + appName + '\u2026"],
  ['Unable to start chat — citizen', 'Unable to start chat — citizen'],
  ['Action blocked — that message', 'Action blocked — that message'],
  ['Story published — tap', 'Story published — tap'],
  ['Message sent directly to user\'s inbox!', 'Message sent directly to citizen inbox!'],
  ['Opening share to ', 'Opening share to '],
  ['?? Open Shop', '\ud83c\udfea Open Shop'],
  ['<span aria-hidden="true">??</span>', '<span aria-hidden="true">\ud83d\udcf7</span>'],
  ['payment-option__icon--crypto">?</div>', 'payment-option__icon--crypto">\u20bf</div>'],
  ["content: '?';", "content: '\u2713';"],
  ['content: "?";', 'content: "\u2713";'],
  ['\? \? ', '\ud83d\udc4d \ud83d\udc4e '],
  ["' ? ' + user.completionRate", "' \u00b7 ' + user.completionRate"],
  [' ? +computeNetThumbs', ' \u00b7 +computeNetThumbs'],
  ['(me.thumbsUp || 0) + \' ?? ? \' + (me.thumbsDown || 0) + \' ??\')', "(me.thumbsUp || 0) + ' \ud83d\udc4d \u00b7 ' + (me.thumbsDown || 0) + ' \ud83d\udc4e')"],
  ['Village Trust Engine ? account flag', 'Village Trust Engine — account flag'],
  ['Deposit successful ? ', 'Deposit successful — '],
  ['Manual wallet transfer ? ', 'Manual wallet transfer \u2192 '],
  ['Collected <strong>', 'Collected <strong>'],
  ['Fee ? Converted', 'Fee \u2192 Converted'],
  ['SOL</strong> ? Dispatched', 'SOL</strong> \u2192 Dispatched'],
  ['item.emoji || \'??\'', "item.emoji || '\ud83d\udce6'"],
  ['role: \'customer\'', "role: 'citizen'"],
];

replacements.forEach(function (pair) {
  c = c.split(pair[0]).join(pair[1]);
});

// Remaining ` ? ` in HTML text (not JS ternaries): lines with HTML tags and no `? '` ternary chain
c = c.split('\n').map(function (line) {
  if (line.indexOf('?') === -1) return line;
  if (/^\s*(var |let |const |if |else|return |function |\? |: |\|\||&&)/.test(line)) return line;
  if (/\? ['"]/.test(line) && /: /.test(line)) return line;
  if (line.indexOf('?seed=') !== -1) return line;
  if (line.indexOf('placeholder="') !== -1 && line.indexOf('?') < line.indexOf('</')) return line;
  if (/<[a-z]/i.test(line) && line.indexOf(' ? ') !== -1) {
    return line.replace(/ \? /g, ' — ');
  }
  return line;
}).join('\n');

fs.writeFileSync(file, c, 'utf8');

const remaining = (c.match(/\?\?| \? /g) || []).length;
console.log('Repaired index.html');
console.log('  chars before:', before, 'after:', c.length);
console.log('  remaining ?? or " ? " patterns:', remaining);
