/**
 * Village module registry — verifies load order and dependencies at boot.
 */
(function (global) {
  'use strict';

  var MODULE_CHECKS = [
    { id: 'VillageStorage', ok: function () { return !!global.VillageStorage; } },
    { id: 'VillageRouter', ok: function () { return !!global.VillageRouter && typeof global.VillageRouter.init === 'function'; } },
    { id: 'VillageFeed', ok: function () { return !!(global.VillageModules && global.VillageModules.social); } },
    { id: 'VillageMarket', ok: function () { return !!(global.VillageModules && global.VillageModules.marketplace); } },
    { id: 'VillageChat', ok: function () { return !!(global.VillageModules && global.VillageModules.chat); } },
    { id: 'VillageDelivery', ok: function () { return !!(global.VillageModules && global.VillageModules.delivery); } },
    { id: 'VillageJobs', ok: function () { return !!(global.VillageModules && global.VillageModules.jobs); } },
    { id: 'VillageApp', ok: function () { return !!global.VillageApp && typeof global.VillageApp.bootstrap === 'function'; } },
    { id: 'CitizenState', ok: function () { return !!global.CitizenState; } },
    { id: 'DigitalNationCore', ok: function () { return !!global.DigitalNationCore; }, optional: true }
  ];

  function verify() {
    var missing = [];
    MODULE_CHECKS.forEach(function (mod) {
      if (mod.ok()) {
        console.log('[VillageRegistry] Module OK:', mod.id);
      } else if (!mod.optional) {
        missing.push(mod.id);
        console.error('[VillageRegistry] Module MISSING:', mod.id);
      }
    });
    if (!missing.length) {
      console.log('[VillageRegistry] All core modules registered.');
    }
    return missing;
  }

  global.VillageRegistry = { verify: verify, MODULE_CHECKS: MODULE_CHECKS };

  document.addEventListener('village:modules-ready', verify);
  document.addEventListener('village:app-ready', verify);

  function scheduleVerify() {
    setTimeout(verify, 800);
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', scheduleVerify);
  } else {
    scheduleVerify();
  }
})(window);
