(function (global) {
  'use strict';

  global.VillageModules = global.VillageModules || {};

  global.VillageModules.marketplace = {
    activate: function () {
      console.log('[VillageMarket] Marketplace grid active.');
    }
  };

  global.VillageModules.market = {
    activate: function () {
      console.log('[VillageMarket] Village Market hub active.');
    }
  };

  global.VillageMarket = {
    marketplace: global.VillageModules.marketplace,
    market: global.VillageModules.market,
    activate: function (view) {
      var mod = view === 'market' ? global.VillageModules.market : global.VillageModules.marketplace;
      if (mod && typeof mod.activate === 'function') mod.activate();
    }
  };

  console.log('[VillageMarket] Module registered.');
})(window);
