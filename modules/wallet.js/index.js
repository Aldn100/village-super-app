/**
 * Village Wallet — sovereign citizen wallet with localized P2P routing.
 */
(function (global) {
  'use strict';

  function persistWalletSnapshot() {
    if (!global.CitizenState || !global.CitizenLedger || !global.villagePayState) return;
    var citizen = global.CitizenState.getCurrent();
    global.CitizenLedger.saveWalletSnapshot(citizen.citizenId, {
      fiatBalanceTzs: global.villagePayState.fiatBalanceTzs,
      solBalance: global.villagePayState.solBalance || 0,
      currency: global.VillageCurrency ? global.VillageCurrency.getCurrent() : 'USD'
    });
  }

  function wrapPayHandlers() {
    if (global.submitPayDeposit && !global.submitPayDeposit.__citizenWrapped) {
      var origDeposit = global.submitPayDeposit;
      global.submitPayDeposit = function () {
        origDeposit.apply(global, arguments);
        setTimeout(persistWalletSnapshot, 1600);
      };
      global.submitPayDeposit.__citizenWrapped = true;
    }
    if (global.submitPaySwap && !global.submitPaySwap.__citizenWrapped) {
      var origSwap = global.submitPaySwap;
      global.submitPaySwap = function () {
        origSwap.apply(global, arguments);
        setTimeout(persistWalletSnapshot, 1600);
      };
      global.submitPaySwap.__citizenWrapped = true;
    }
    if (global.submitPaySend && !global.submitPaySend.__citizenWrapped) {
      var origSend = global.submitPaySend;
      global.submitPaySend = function () {
        origSend.apply(global, arguments);
        setTimeout(persistWalletSnapshot, 1700);
      };
      global.submitPaySend.__citizenWrapped = true;
    }
  }

  function activate() {
    var chain = global.CitizenState ? global.CitizenState.hydrate() : Promise.resolve();
    chain.then(function () {
      if (global.CitizenLedger) return global.CitizenLedger.open();
    }).then(function () {
      wrapPayHandlers();
      if (global.CitizenState) global.CitizenState.syncCitizenTags();
      if (typeof global.initVillagePayHub === 'function') global.initVillagePayHub();
      console.log('[VillageWallet] Sovereign wallet module activated.');
    });
  }

  function onAppReady() {
    wrapPayHandlers();
    if (global.CitizenState) global.CitizenState.syncCitizenTags();
  }

  global.VillageModules = global.VillageModules || {};
  global.VillageModules.pay = { activate: activate };
  global.VillageWallet = { activate: activate, persistSnapshot: persistWalletSnapshot };

  document.addEventListener('village:app-ready', onAppReady);
})(window);
