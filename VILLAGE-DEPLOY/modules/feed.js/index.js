(function (global) {
  'use strict';

  global.VillageModules = global.VillageModules || {};

  global.VillageModules.social = {
    activate: function () {
      console.log('[VillageFeed] Social feed grid active.');
    }
  };

  console.log('[VillageFeed] Module registered.');
})(window);
