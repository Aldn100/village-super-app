(function (global) {
  'use strict';

  global.VillageModules = global.VillageModules || {};

  global.VillageModules.jobs = {
    activate: function () {
      console.log('[VillageJobs] Jobs board module active.');
    }
  };

  console.log('[VillageJobs] Module registered.');
})(window);
