/**
 * Village sidebar view router — sovereign citizen navigation (decentralized).
 */
(function (global) {
  'use strict';

  var VIEW_COPY = {
    social: {
      title: 'Your Village Feed',
      subtitle: 'One unified stream for text, photos, shorts, and long-form video.'
    },
    marketplace: {
      title: 'Village Marketplace',
      subtitle: 'Peer-to-peer commerce across sovereign citizen nodes — prices in your chosen fiat.'
    },
    pay: {
      title: 'Citizen Wallet',
      subtitle: 'Sovereign ledger — deposit, P2P send, swap, and localized fee routing.'
    },
    market: {
      title: 'Village Market',
      subtitle: 'Curated citizen storefronts, cart checkout, and peer trust signals.'
    },
    delivery: {
      title: 'Village Delivery',
      subtitle: 'Track shipments and courier routes across citizen nodes.'
    },
    'market-analysis': {
      title: 'Market Analysis',
      subtitle: 'Live pricing indices and demand signals from citizen merchants.'
    },
    jobs: {
      title: 'Village Jobs',
      subtitle: 'Discover gigs and hire talent across your citizen network.'
    },
    chat: {
      title: 'Messages',
      subtitle: 'Encrypted one-on-one and group conversations between citizens.'
    }
  };

  var initialized = false;
  var deps = {};

  function getProfileType() {
    if (global.CitizenState && typeof global.CitizenState.getProfileType === 'function') {
      return global.CitizenState.getProfileType();
    }
    if (typeof deps.getAccountProfileType === 'function') {
      return deps.getAccountProfileType();
    }
    return 'citizen';
  }

  function setMainCopy(view) {
    if (global.VillageI18n && typeof global.VillageI18n.setMainViewI18n === 'function') {
      global.VillageI18n.setMainViewI18n(view);
      return;
    }
    var copy = VIEW_COPY[view];
    var titleEl = document.getElementById('mainViewTitle');
    var subtitleEl = document.getElementById('mainViewSubtitle');
    if (!copy || !titleEl || !subtitleEl) return;
    titleEl.textContent = copy.title;
    subtitleEl.textContent = copy.subtitle;
  }

  function syncViewCopy() {
    var titleEl = document.getElementById('mainViewTitle');
    var view = titleEl && titleEl.dataset.i18nView ? titleEl.dataset.i18nView : 'social';
    setMainCopy(view);
  }

  function setActiveNav(view) {
    document.querySelectorAll('[data-nav-item]').forEach(function (item) {
      var key = item.getAttribute('data-nav-item');
      item.classList.toggle('sidebar__item--active', key === view);
    });
  }

  function activateModule(view) {
    if (global.VillageModules && global.VillageModules[view] && typeof global.VillageModules[view].activate === 'function') {
      global.VillageModules[view].activate();
    }
  }

  function navigate(view) {
    console.log('[VillageRouter] Sovereign navigation →', view, '(profile:', getProfileType() + ')');

    if (global.VillageViewManager && typeof global.VillageViewManager.switchTo === 'function') {
      global.VillageViewManager.switchTo(view);
    }

    setActiveNav(view);
    setMainCopy(view);
    activateModule(view);

    if (view === 'chat' && typeof global.openChatWindow === 'function') {
      global.openChatWindow('sarah-kimani');
    }

    if (view === 'pay') {
      if (global.VillageWallet && typeof global.VillageWallet.activate === 'function') {
        global.VillageWallet.activate();
      } else if (typeof global.initVillagePayHub === 'function') {
        global.initVillagePayHub();
      }
    }

    if (view === 'market' && typeof global.initVillageMarketHub === 'function') {
      global.initVillageMarketHub();
    }

    if (window.innerWidth <= 768 && typeof deps.toggleSidebar === 'function') {
      deps.toggleSidebar(false);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function init(options) {
    if (initialized) return;
    initialized = true;
    deps = options || {};

    document.querySelectorAll('[data-nav]').forEach(function (link) {
      if (link.dataset.villageRouterBound) return;
      link.dataset.villageRouterBound = '1';
      link.addEventListener('click', function (event) {
        event.preventDefault();
        var view = link.getAttribute('data-nav');
        if (view) navigate(view);
      });
    });

    if (global.CitizenState && typeof global.CitizenState.hydrate === 'function') {
      global.CitizenState.hydrate().then(function () {
        console.log('[VillageRouter] Citizen state synchronized for routing.');
      });
    }

    console.log('[VillageRouter] Decentralized citizen router initialized.');
    navigate('social');
  }

  global.VillageRouter = {
    init: init,
    navigate: navigate,
    syncViewCopy: syncViewCopy,
    VIEW_COPY: VIEW_COPY,
    getProfileType: getProfileType
  };
})(window);
