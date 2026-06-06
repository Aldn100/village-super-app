/**
 * VILLAGE DECENTRALIZED NATION: SOVEREIGNTY SYSTEM PROTOCOL
 * Core Module: Cryptographic Constitution & Distributed Governance Engine
 */

var STORAGE_KEY = 'village_sovereign_state';

function storageGet(key) {
  try {
    var store = (typeof globalThis !== 'undefined' && globalThis.VillageStorage) || (typeof window !== 'undefined' && window.VillageStorage);
    return store ? store.getItem(key) : null;
  } catch (e) { return null; }
}

function loadState() {
  try {
    var raw = storageGet(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) { /* noop */ }
  return null;
}

export var DigitalNationCore = {
  // Article I: The Supreme Digital Constitution
  constitution: {
    preamble: 'We, the Autonomous Citizens of the Village, establishing a borderless digital network state, declare our complete sovereignty over our digital assets, interactions, and governance.',
    articles: [
      { id: 1, title: 'Sovereign Identity', clause: "Every Citizen retains absolute ownership of their cryptographic data, private keys, and digital footprint. No central authority can seize or modify a Citizen's identity." },
      { id: 2, title: 'Algorithmic Economy', clause: 'All transactions, commodity exchanges, and asset routings are peer-to-peer. The economic ledger is immutable and governed entirely by mathematical consensus.' },
      { id: 3, title: 'Decentralized Justice', clause: "Disputes arising within the network's marketplace or delivery matrix shall be adjudicated by an automated, peer-vetted judicial pool selected at random from active Citizen nodes." }
    ]
  },

  // Article II: Distributed Governance (Voting & Legislation)
  governance: {
    activeProposals: [],

    submitProposal: function (citizenId, title, description, executionPatch) {
      var proposal = {
        id: 'PROP-' + (Math.floor(Math.random() * 900000) + 100000),
        proposer: citizenId,
        title: title,
        description: description,
        executionPatch: executionPatch,
        votesFor: 0,
        votesAgainst: 0,
        voterLedger: {},
        status: 'ACTIVE',
        timestamp: Date.now()
      };
      this.activeProposals.push(proposal);
      DigitalNationCore.saveSovereignState();
      return proposal;
    },

    castVote: function (proposalId, citizenId, voteType) {
      var proposal = this.activeProposals.find(function (p) { return p.id === proposalId; });
      if (!proposal || proposal.status !== 'ACTIVE') return false;
      if (!citizenId || proposal.voterLedger[citizenId]) return false;

      if (voteType === 'FOR') proposal.votesFor++;
      if (voteType === 'AGAINST') proposal.votesAgainst++;
      proposal.voterLedger[citizenId] = voteType;

      this.evaluateProposalState(proposal);
      DigitalNationCore.saveSovereignState();
      return true;
    },

    evaluateProposalState: function (proposal) {
      var totalVotes = proposal.votesFor + proposal.votesAgainst;
      if (totalVotes >= 50) {
        proposal.status = proposal.votesFor > proposal.votesAgainst ? 'PASSED_AND_EXECUTED' : 'REJECTED';
        DigitalNationCore.saveSovereignState();
      }
    }
  },

  // Article III: Peer Judicial Arbitrage
  judiciary: {
    disputes: [],

    createDispute: function (contractId, plaintiffId, defendantId, details) {
      var dispute = {
        disputeId: 'JST-' + (Math.floor(Math.random() * 90000) + 10000),
        contractId: contractId,
        plaintiffId: plaintiffId,
        defendantId: defendantId,
        details: details,
        jurors: this.selectRandomJurors(3),
        votes: {},
        status: 'PENDING_ARBITRATION'
      };
      this.disputes.push(dispute);
      DigitalNationCore.saveSovereignState();
      return dispute;
    },

    selectRandomJurors: function (count) {
      var jurors = [];
      for (var i = 0; i < count; i++) {
        jurors.push('CITIZEN-' + (Math.floor(Math.random() * 8999) + 1000));
      }
      return jurors;
    }
  },

  hydrate: function () {
    var saved = loadState();
    if (saved) {
      if (saved.proposals) this.governance.activeProposals = saved.proposals;
      if (saved.disputes) this.judiciary.disputes = saved.disputes;
    }
    console.log('[DigitalNationCore] Sovereign constitution hydrated from local ledger.');
    return this;
  },

  saveSovereignState: function () {
    try {
      var store = (typeof globalThis !== 'undefined' && globalThis.VillageStorage) || (typeof window !== 'undefined' && window.VillageStorage);
      var payload = JSON.stringify({
        proposals: this.governance.activeProposals,
        disputes: this.judiciary.disputes
      });
      if (store) {
        if (!store.setItem(STORAGE_KEY, payload)) {
          console.error('[SovereigntyCore] Storage access blocked by browser privacy settings.');
        }
        return;
      }
      try {
        localStorage.setItem(STORAGE_KEY, payload);
      } catch (storageErr) {
        console.error('[SovereigntyCore] Storage access blocked by browser privacy settings.');
      }
    } catch (e) {
      console.error('[SovereigntyCore] Storage access blocked by browser privacy settings.');
    }
  }
};

function attachGlobals() {
  if (typeof globalThis === 'undefined' || !globalThis.window) return;
  globalThis.DigitalNationCore = DigitalNationCore;
  globalThis.VillageSovereignty = DigitalNationCore;
  globalThis.VillageModules = globalThis.VillageModules || {};
  globalThis.VillageModules.sovereignty = {
    activate: function () {
      DigitalNationCore.hydrate();
      if (typeof globalThis.initializeDashboard === 'function') {
        globalThis.initializeDashboard();
      }
    }
  };
  globalThis.document.dispatchEvent(new CustomEvent('digital-nation:ready', { detail: DigitalNationCore }));
}

attachGlobals();
DigitalNationCore.hydrate();

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', function () {
    DigitalNationCore.hydrate();
    attachGlobals();
  });
  document.addEventListener('citizen:state-changed', function () {
    DigitalNationCore.saveSovereignState();
  });
}

export default DigitalNationCore;
