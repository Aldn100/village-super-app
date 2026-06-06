const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, '..', 'index.html');
let c = fs.readFileSync(file, 'utf8');

const fixes = [
  ['APPRECIATION (THUMBS) ? post-card ??/?? counters', 'APPRECIATION (THUMBS) — post-card 👍/👎 counters'],
  ["(me.thumbsUp || 0) + ' ?👍 👎 ' + (me.thumbsDown || 0) + ' ??)'", "(me.thumbsUp || 0) + ' 👍 · ' + (me.thumbsDown || 0) + ' 👎')"],
  ['?? Sending push PIN', '📲 Sending push PIN'],
  ['Net ??', 'Net 👍'],
  ['?? RPC Timed Out', '⚠️ RPC Timed Out'],
  ['?? Simulation Mode', '🟡 Simulation Mode'],
  ['?? Connected ? ', '🟢 Connected — '],
  ['/* ??? Village Market Hub ??? */', '/* ═══ Village Market Hub ═══ */'],
  ["emoji: '??', rating: 4.7", "emoji: '📱', rating: 4.7"],
  ["emoji: '??', rating: 4.5, reviews: 42", "emoji: '👔', rating: 4.5, reviews: 42"],
  ["emoji: '??', rating: 4.8, reviews: 89", "emoji: '🔊', rating: 4.8, reviews: 89"],
  ["emoji: '??', rating: 4.9, reviews: 56", "emoji: '🎨', rating: 4.9, reviews: 56"],
  ["emoji: '??', rating: 4.5, reviews: 204", "emoji: '🚗', rating: 4.5, reviews: 204"],
  ["emoji: '??', rating: 4.6, reviews: 14", "emoji: '🏢', rating: 4.6, reviews: 14"],
  ["emoji: '??', rating: 4.8, reviews: 95", "emoji: '🌽', rating: 4.8, reviews: 95"],
  ["emoji: '??', rating: 4.9, reviews: 67", "emoji: '🥑', rating: 4.9, reviews: 67"],
  ['Airport Transfer ? DSM', 'Airport Transfer — DSM'],
  ['2BR Apartment ? Masaki', '2BR Apartment — Masaki'],
  ['Fresh Maize ? 50kg', 'Fresh Maize — 50kg'],
  ['Organic Avocados ? Crate', 'Organic Avocados — Crate'],
  ["p.emoji || '??'", "p.emoji || '📦'"],
  ["emoji: '??', rating: 5", "emoji: '🆕', rating: 5"],
  ["'?? Funds Released'", "'✅ Funds Released'"],
  ["'?? Escrow Locked'", "'🔒 Escrow Locked'"],
];

fixes.forEach(function (pair) {
  c = c.split(pair[0]).join(pair[1]);
});

fs.writeFileSync(file, c, 'utf8');
console.log('Pass 3 complete. Remaining ?? count:', (c.match(/\?\?/g) || []).length);
