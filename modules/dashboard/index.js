import { DigitalNationCore } from '../sovereignty/index.js';

function escapeHtml(text) {
  return String(text || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function renderProposalList() {
  var proposals = DigitalNationCore.governance.activeProposals;
  if (!proposals.length) {
    return '<p class="nation-core-empty">No active proposals. The nation is currently stable.</p>';
  }
  return '<ul class="proposal-list">' + proposals.map(function (prop) {
    return '<li class="proposal-card village-glass-card">' +
      '<div class="proposal-card__meta"><span class="citizen-id-tag">' + escapeHtml(prop.id) + '</span>' +
      '<span class="proposal-card__status proposal-card__status--' + escapeHtml(prop.status.toLowerCase()) + '">' + escapeHtml(prop.status) + '</span></div>' +
      '<h3 class="proposal-card__title">' + escapeHtml(prop.title) + '</h3>' +
      '<p class="proposal-card__desc">' + escapeHtml(prop.description) + '</p>' +
      '<p class="proposal-card__votes">For: <strong>' + prop.votesFor + '</strong> · Against: <strong>' + prop.votesAgainst + '</strong></p>' +
      '</li>';
  }).join('') + '</ul>';
}

function renderDisputeList() {
  var disputes = DigitalNationCore.judiciary.disputes;
  if (!disputes.length) {
    return '<p class="nation-core-empty">No peer judicial disputes pending.</p>';
  }
  return '<ul class="dispute-list">' + disputes.map(function (d) {
    return '<li class="dispute-card village-glass-card">' +
      '<span class="citizen-id-tag">' + escapeHtml(d.disputeId) + '</span>' +
      '<p><strong>Contract:</strong> ' + escapeHtml(d.contractId) + '</p>' +
      '<p><strong>Status:</strong> ' + escapeHtml(d.status) + '</p>' +
      '<p class="dispute-card__details">' + escapeHtml(d.details) + '</p>' +
      '</li>';
  }).join('') + '</ul>';
}

/**
 * Initializes the Sovereign Nation Interface on the Dashboard
 */
export function initializeDashboard() {
  console.log('Loading Sovereign Nation Protocols...');

  DigitalNationCore.hydrate();

  var dashboard = document.getElementById('dashboard-view');
  if (!dashboard) return;

  var articlesHtml = DigitalNationCore.constitution.articles.map(function (art) {
    return '<div class="article-card village-glass-card">' +
      '<strong class="article-card__title">' + escapeHtml(art.title) + '</strong>' +
      '<p class="article-card__clause">' + escapeHtml(art.clause) + '</p>' +
      '</div>';
  }).join('');

  dashboard.innerHTML =
    '<div class="nation-core-layout">' +
      '<section class="constitution-section">' +
        '<h2 class="nation-core-layout__title">Supreme Digital Constitution</h2>' +
        '<p class="preamble"><em>&ldquo;' + escapeHtml(DigitalNationCore.constitution.preamble) + '&rdquo;</em></p>' +
        '<div class="articles">' + articlesHtml + '</div>' +
      '</section>' +
      '<section class="governance-section">' +
        '<h2 class="nation-core-layout__title">Citizen Legislative Proposals</h2>' +
        '<div id="proposal-list">' + renderProposalList() + '</div>' +
      '</section>' +
      '<section class="judiciary-section">' +
        '<h2 class="nation-core-layout__title">Peer Judicial Arbitrage</h2>' +
        '<div id="dispute-list">' + renderDisputeList() + '</div>' +
      '</section>' +
    '</div>';
}

if (typeof globalThis !== 'undefined' && globalThis.window) {
  globalThis.initializeDashboard = initializeDashboard;
  globalThis.VillageModules = globalThis.VillageModules || {};
  globalThis.VillageModules.dashboard = {
    activate: initializeDashboard
  };
}

document.addEventListener('DOMContentLoaded', initializeDashboard);
document.addEventListener('digital-nation:ready', initializeDashboard);
document.addEventListener('village:app-ready', initializeDashboard);
document.addEventListener('village:view-changed', function (event) {
  if (event.detail && event.detail.view === 'sovereignty') {
    initializeDashboard();
  }
});
