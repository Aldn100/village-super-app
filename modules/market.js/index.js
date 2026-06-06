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

  console.log('[VillageMarket] Module registered.');
})(window);
