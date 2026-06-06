(function (global) {
  'use strict';

  global.VillageModules = global.VillageModules || {};

  global.VillageModules.chat = {
    activate: function () {
      console.log('[VillageChat] Messages panel active.');
    }
  };

  global.VillageChat = global.VillageModules.chat;
  console.log('[VillageChat] Module registered.');
})(window);
