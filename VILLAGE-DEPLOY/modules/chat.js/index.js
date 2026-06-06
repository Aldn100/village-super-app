(function (global) {
  'use strict';

  global.VillageModules = global.VillageModules || {};

  global.VillageModules.chat = {
    activate: function () {
      console.log('[VillageChat] Messages panel active.');
    }
  };

  console.log('[VillageChat] Module registered.');
})(window);
