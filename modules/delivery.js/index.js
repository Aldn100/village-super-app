(function (global) {
  'use strict';

  global.VillageModules = global.VillageModules || {};

  global.VillageModules.delivery = {
    activate: function () {
      console.log('[VillageDelivery] Delivery tracking module active.');
    }
  };

  global.VillageDelivery = global.VillageModules.delivery;
  console.log('[VillageDelivery] Module registered.');
})(window);
