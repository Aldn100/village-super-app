/**
 * P2P Wallet Router — isolated client-side mock routing between ledger nodes.
 * No centralized clearing server; balances settle between localized peer nodes.
 */
(function (global) {
  'use strict';

  var PEER_REGISTRY_KEY = 'village_p2p_peer_registry';

  function loadPeerRegistry() {
    try {
      return JSON.parse(localStorage.getItem(PEER_REGISTRY_KEY) || '{}');
    } catch (e) {
      return {};
    }
  }

  function savePeerRegistry(registry) {
    try { localStorage.setItem(PEER_REGISTRY_KEY, JSON.stringify(registry)); } catch (e) { /* noop */ }
  }

  function mockHash(input) {
    var str = String(input || '');
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
      hash = ((hash << 5) - hash) + str.charCodeAt(i);
      hash |= 0;
    }
    return 'p2p_' + Math.abs(hash).toString(16);
  }

  function resolvePeerNode(recipient) {
    var handle = String(recipient || '').trim().replace(/^@/, '').toLowerCase();
    if (!handle) return null;
    var registry = loadPeerRegistry();
    if (registry[handle]) return registry[handle];

    var node = {
      nodeId: mockHash(handle),
      handle: handle,
      displayName: handle.replace(/[_-]/g, ' '),
      fiatBalanceTzs: Math.floor(Math.random() * 500000) + 50000,
      solBalance: Math.random() * 2,
      localized: true,
      lastSeen: Date.now()
    };
    registry[handle] = node;
    savePeerRegistry(registry);

    if (global.CitizenLedger && global.CitizenLedger.upsertPeerNode) {
      global.CitizenLedger.upsertPeerNode(node);
    }
    return node;
  }

  function calculateNodeTransfer(sourceNodeId, targetNode, amountTzs, currency) {
    var registry = loadPeerRegistry();
    var sourceKey = Object.keys(registry).find(function (k) {
      return registry[k].nodeId === sourceNodeId;
    });
    var source = sourceKey ? registry[sourceKey] : null;

    if (source) {
      source.fiatBalanceTzs = Math.max(0, (source.fiatBalanceTzs || 0) - amountTzs);
    }
    targetNode.fiatBalanceTzs = (targetNode.fiatBalanceTzs || 0) + amountTzs;
    registry[targetNode.handle] = targetNode;
    savePeerRegistry(registry);

    return {
      sourceNodeId: sourceNodeId,
      targetNodeId: targetNode.nodeId,
      amountTzs: amountTzs,
      currency: currency,
      sourceBalanceTzs: source ? source.fiatBalanceTzs : null,
      targetBalanceTzs: targetNode.fiatBalanceTzs
    };
  }

  function routePeerExchange(opts) {
    var citizen = global.CitizenState ? global.CitizenState.getCurrent() : {};
    var sourceNodeId = citizen.ledgerNodeId || 'node_local';
    var recipient = opts.recipient;
    var amountTzs = Number(opts.amountTzs || 0);
    var currency = opts.currency || (global.VillageCurrency ? global.VillageCurrency.getCurrent() : 'USD');

    if (!recipient || !isFinite(amountTzs) || amountTzs <= 0) {
      return Promise.reject(new Error('Invalid P2P exchange parameters'));
    }

    var targetNode = resolvePeerNode(recipient);
    if (!targetNode) return Promise.reject(new Error('Peer node not found'));

    var routeId = 'route_' + Date.now() + '_' + Math.random().toString(36).slice(2, 7);
    var settlement = calculateNodeTransfer(sourceNodeId, targetNode, amountTzs, currency);

    var route = {
      routeId: routeId,
      type: opts.type || 'p2p_currency',
      status: 'settled',
      timestamp: Date.now(),
      hops: [
        { from: sourceNodeId, to: targetNode.nodeId, amountTzs: amountTzs, currency: currency, hop: 1 }
      ],
      settlement: settlement,
      commodity: opts.commodity || null,
      signature: mockHash(routeId + sourceNodeId + targetNode.nodeId + amountTzs)
    };

    var ledgerEntry = {
      citizenId: citizen.citizenId,
      type: 'p2p_send',
      routeId: routeId,
      amountTzs: amountTzs,
      currency: currency,
      counterparty: targetNode.handle,
      counterpartyNodeId: targetNode.nodeId,
      status: 'settled'
    };

    var promises = [];
    if (global.CitizenLedger) {
      promises.push(global.CitizenLedger.saveP2PRoute(route));
      promises.push(global.CitizenLedger.appendEntry(ledgerEntry));
    }

    return Promise.all(promises).then(function () {
      console.log('[P2PWalletRouter] Route settled locally:', routeId, '→', targetNode.handle);
      document.dispatchEvent(new CustomEvent('citizen:p2p-settled', { detail: route }));
      return route;
    });
  }

  function routeCommodityExchange(opts) {
    return routePeerExchange(Object.assign({}, opts, { type: 'p2p_commodity' }));
  }

  global.P2PWalletRouter = {
    routePeerExchange: routePeerExchange,
    routeCommodityExchange: routeCommodityExchange,
    resolvePeerNode: resolvePeerNode,
    mockHash: mockHash
  };
})(window);
