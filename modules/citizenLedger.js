/**
 * CitizenLedger — browser-isolated IndexedDB ledger for sovereign citizen nodes.
 */
(function (global) {
  'use strict';

  var DB_NAME = 'village_citizen_ledger';
  var DB_VERSION = 1;
  var db = null;
  var ready = false;

  function open() {
    if (ready && db) return Promise.resolve(db);
    if (!global.indexedDB) {
      console.warn('[CitizenLedger] IndexedDB unavailable — falling back to localStorage mirror.');
      ready = true;
      return Promise.resolve(null);
    }
    return new Promise(function (resolve, reject) {
      var request = global.indexedDB.open(DB_NAME, DB_VERSION);
      request.onupgradeneeded = function (event) {
        var database = event.target.result;
        if (!database.objectStoreNames.contains('ledger_entries')) {
          var ledger = database.createObjectStore('ledger_entries', { keyPath: 'id' });
          ledger.createIndex('citizenId', 'citizenId', { unique: false });
          ledger.createIndex('type', 'type', { unique: false });
          ledger.createIndex('timestamp', 'timestamp', { unique: false });
        }
        if (!database.objectStoreNames.contains('wallet_snapshot')) {
          database.createObjectStore('wallet_snapshot', { keyPath: 'citizenId' });
        }
        if (!database.objectStoreNames.contains('escrows')) {
          var esc = database.createObjectStore('escrows', { keyPath: 'id' });
          esc.createIndex('status', 'status', { unique: false });
        }
        if (!database.objectStoreNames.contains('p2p_routes')) {
          var routes = database.createObjectStore('p2p_routes', { keyPath: 'routeId' });
          routes.createIndex('timestamp', 'timestamp', { unique: false });
        }
        if (!database.objectStoreNames.contains('peer_nodes')) {
          database.createObjectStore('peer_nodes', { keyPath: 'nodeId' });
        }
      };
      request.onsuccess = function (event) {
        db = event.target.result;
        ready = true;
        console.log('[CitizenLedger] IndexedDB ledger opened.');
        resolve(db);
      };
      request.onerror = function () {
        reject(request.error);
      };
    });
  }

  function tx(storeNames, mode) {
    return db.transaction(storeNames, mode || 'readonly');
  }

  function appendEntry(entry) {
    var record = Object.assign({
      id: 'le_' + Date.now() + '_' + Math.random().toString(36).slice(2, 8),
      timestamp: Date.now()
    }, entry);
    if (!db) {
      mirrorLedgerToLocalStorage(record);
      return Promise.resolve(record);
    }
    return new Promise(function (resolve, reject) {
      var request = tx(['ledger_entries'], 'readwrite').objectStore('ledger_entries').add(record);
      request.onsuccess = function () { resolve(record); };
      request.onerror = function () { reject(request.error); };
    });
  }

  function saveWalletSnapshot(citizenId, snapshot) {
    var record = Object.assign({ citizenId: citizenId, updatedAt: Date.now() }, snapshot);
    if (!db) {
      try { localStorage.setItem('village_ledger_wallet_' + citizenId, JSON.stringify(record)); } catch (e) { /* noop */ }
      return Promise.resolve(record);
    }
    return new Promise(function (resolve, reject) {
      var request = tx(['wallet_snapshot'], 'readwrite').objectStore('wallet_snapshot').put(record);
      request.onsuccess = function () { resolve(record); };
      request.onerror = function () { reject(request.error); };
    });
  }

  function getWalletSnapshot(citizenId) {
    if (!db) {
      try {
        var raw = localStorage.getItem('village_ledger_wallet_' + citizenId);
        return Promise.resolve(raw ? JSON.parse(raw) : null);
      } catch (e) {
        return Promise.resolve(null);
      }
    }
    return new Promise(function (resolve, reject) {
      var request = tx(['wallet_snapshot']).objectStore('wallet_snapshot').get(citizenId);
      request.onsuccess = function () { resolve(request.result || null); };
      request.onerror = function () { reject(request.error); };
    });
  }

  function saveP2PRoute(route) {
    if (!db) {
      mirrorRouteToLocalStorage(route);
      return Promise.resolve(route);
    }
    return new Promise(function (resolve, reject) {
      var request = tx(['p2p_routes'], 'readwrite').objectStore('p2p_routes').put(route);
      request.onsuccess = function () { resolve(route); };
      request.onerror = function () { reject(request.error); };
    });
  }

  function upsertPeerNode(node) {
    if (!db) {
      try {
        var key = 'village_peer_' + node.nodeId;
        localStorage.setItem(key, JSON.stringify(node));
      } catch (e) { /* noop */ }
      return Promise.resolve(node);
    }
    return new Promise(function (resolve, reject) {
      var request = tx(['peer_nodes'], 'readwrite').objectStore('peer_nodes').put(node);
      request.onsuccess = function () { resolve(node); };
      request.onerror = function () { reject(request.error); };
    });
  }

  function getPeerNode(nodeId) {
    if (!db) {
      try {
        var raw = localStorage.getItem('village_peer_' + nodeId);
        return Promise.resolve(raw ? JSON.parse(raw) : null);
      } catch (e) {
        return Promise.resolve(null);
      }
    }
    return new Promise(function (resolve, reject) {
      var request = tx(['peer_nodes']).objectStore('peer_nodes').get(nodeId);
      request.onsuccess = function () { resolve(request.result || null); };
      request.onerror = function () { reject(request.error); };
    });
  }

  function mirrorLedgerToLocalStorage(record) {
    try {
      var key = 'village_ledger_mirror';
      var list = JSON.parse(localStorage.getItem(key) || '[]');
      list.unshift(record);
      if (list.length > 500) list.length = 500;
      localStorage.setItem(key, JSON.stringify(list));
    } catch (e) { /* noop */ }
  }

  function mirrorRouteToLocalStorage(route) {
    try {
      var key = 'village_p2p_routes_mirror';
      var list = JSON.parse(localStorage.getItem(key) || '[]');
      list.unshift(route);
      if (list.length > 200) list.length = 200;
      localStorage.setItem(key, JSON.stringify(list));
    } catch (e) { /* noop */ }
  }

  global.CitizenLedger = {
    open: open,
    appendEntry: appendEntry,
    saveWalletSnapshot: saveWalletSnapshot,
    getWalletSnapshot: getWalletSnapshot,
    saveP2PRoute: saveP2PRoute,
    upsertPeerNode: upsertPeerNode,
    getPeerNode: getPeerNode,
    isReady: function () { return ready; }
  };
})(window);
