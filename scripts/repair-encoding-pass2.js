const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, '..', 'index.html');
let c = fs.readFileSync(file, 'utf8');

const emojiFixes = [
  ['?? Language', '🌐 Language'],
  ['placeholder="????????"', 'placeholder="••••••••"'],
  ['<p class="village-auth-panel-emoji">??</p>', '<p class="village-auth-panel-emoji">🏛️</p>'],
  ['??? Security Trust Badge', '🛡️ Security Trust Badge'],
  ['?? Send Money', '💸 Send Money'],
  ['?? Instant Swap', '⚡ Instant Swap'],
  ['?? Active Escrow Lockbox Ledger', '🔒 Active Escrow Lockbox Ledger'],
  ['??? Treasury Tracker', '🏦 Treasury Tracker'],
  ['?? Front Side of Document', '🪪 Front Side of Document'],
  ['?? Back Side of Document', '🪪 Back Side of Document'],
  ['?? Document Expiry Date', '📅 Document Expiry Date'],
  ['<p>?? NO Hats', '<p>🚫 NO Hats'],
  ['<p>?? NO Sunglasses', '<p>🚫 NO Sunglasses'],
  ['<p>?? Ensure you are', '<p>💡 Ensure you are'],
  ['?? Prefer using your phone?', '📱 Prefer using your phone?'],
  ['?? Please upload an official', '📄 Please upload an official'],
  ['?? Issue Date of Document', '📅 Issue Date of Document'],
  ['?? Location matched!', '📍 Location matched!'],
  ['??? Add Photos', '🖼️ Add Photos'],
  ['?? Add Video Clip', '🎬 Add Video Clip'],
  ['?? Drag &amp; drop', '📁 Drag &amp; drop'],
  ['?? Posts', '📝 Posts'],
  ['?? Videos', '🎥 Videos'],
  ['??? Platform Treasury Tracker', '🏦 Platform Treasury Tracker'],
  ['?? Security Warning:', '⚠️ Security Warning:'],
  ['data-story-emoji="??" aria-label="Like">??</button>', 'data-story-emoji="❤️" aria-label="Like">❤️</button>'],
  ['data-story-emoji="??" aria-label="Love">??</button>', 'data-story-emoji="😍" aria-label="Love">😍</button>'],
  ['data-story-emoji="??" aria-label="Laugh">??</button>', 'data-story-emoji="😂" aria-label="Laugh">😂</button>'],
  ['data-story-emoji="??" aria-label="Wow">??</button>', 'data-story-emoji="😮" aria-label="Wow">😮</button>'],
  ['data-story-emoji="??" aria-label="Fire">??</button>', 'data-story-emoji="🔥" aria-label="Fire">🔥</button>'],
  ['?? Quota reached:', '⚠️ Quota reached:'],
  ['?? Payment Confirmed!', '✅ Payment Confirmed!'],
  ['?? End-to-End Encrypted.', '🔐 End-to-End Encrypted.'],
  ['Share location ??"', 'Share location 📍"'],
  ['Village Market ??', 'Village Market 🛒'],
  ['?? Products', '📦 Products'],
  ['?? Services', '🛠️ Services'],
  ['?? Transport', '🚚 Transport'],
  ['?? Property', '🏠 Property'],
  ['???? Agriculture', '🌾 Agriculture'],
  ['?? Chat with Seller', '💬 Chat with Seller'],
  ['?? Proceed to Checkout', '🛒 Proceed to Checkout'],
  ['<span class="kyc-capture-option__icon" aria-hidden="true">??</span>', '<span class="kyc-capture-option__icon" aria-hidden="true">📷</span>'],
  ['<span class="kyc-compliance-fail__icon" aria-hidden="true">??</span>', '<span class="kyc-compliance-fail__icon" aria-hidden="true">⚠️</span>'],
  ['<div class="security-warning-modal__icon" aria-hidden="true">??</div>', '<div class="security-warning-modal__icon" aria-hidden="true">⚠️</div>'],
  ['<span class="long-video-upload-zone__icon" aria-hidden="true">??</span>', '<span class="long-video-upload-zone__icon" aria-hidden="true">🎬</span>'],
  ['<span class="payment-channel__icon">??</span>', '<span class="payment-channel__icon">📱</span>'],
  ['id="marketProductDetailImagePlaceholder">??</div>', 'id="marketProductDetailImagePlaceholder">📦</div>'],
  ['title="Attach image, video, or PDF">??</button>', 'title="Attach image, video, or PDF">📎</button>'],
  ['title="Hold or click to record voice">???</button>', 'title="Hold or click to record voice">🎤</button>'],
  ['title="Send circular video note">??</button>', 'title="Send circular video note">📹</button>'],
];

emojiFixes.forEach(function (pair) {
  c = c.split(pair[0]).join(pair[1]);
});

// Remaining standalone ?? in button/label text at line starts
c = c.replace(/>\?\? ([A-Za-z])/g, '>\u2728 $1');

fs.writeFileSync(file, c, 'utf8');
const left = (c.match(/\?\?/g) || []).length;
console.log('Pass 2 complete. Remaining ?? count:', left);
