(function (global) {
  'use strict';

  global.VillageModules = global.VillageModules || {};

  global.VillageModules.jobs = {
    activate: function () {
      console.log('[VillageJobs] Jobs board module active.');
    }
  };

  global.VillageJobs = global.VillageModules.jobs;
  console.log('[VillageJobs] Module registered.');
})(window);
