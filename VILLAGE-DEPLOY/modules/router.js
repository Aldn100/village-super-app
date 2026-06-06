/**
 * Village sidebar view router — delegates to VillageViewManager for isolation.
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
      subtitle: 'Buy and sell across your community — prices in TZS or USD by region.'
    },
    pay: {
      title: 'Village Pay Dashboard',
      subtitle: 'Global Wallet — send, deposit, swap, and track governance fees.'
    },
    market: {
      title: 'Village Market',
      subtitle: 'Curated regional storefronts, cart checkout, and vendor trust.'
    },
    delivery: {
      title: 'Village Delivery',
      subtitle: 'Track shipments and courier routes in real time.'
    },
    'market-analysis': {
      title: 'Market Analysis',
      subtitle: 'Live pricing indices and demand signals for merchants.'
    },
    jobs: {
      title: 'Village Jobs',
      subtitle: 'Discover gigs and hire talent across your community.'
    },
    chat: {
      title: 'Messages',
      subtitle: 'Encrypted one-on-one and group conversations.'
    }
  };

  var MERCHANT_ONLY = ['delivery', 'market-analysis'];
  var initialized = false;
  var deps = {};

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

  function navigate(view) {
    console.log('[VillageRouter] Navigating to view:', view);

    var profileType = typeof deps.getAccountProfileType === 'function'
      ? deps.getAccountProfileType()
      : 'citizen';

    if (MERCHANT_ONLY.indexOf(view) !== -1 && profileType !== 'merchant') {
      if (typeof deps.showToast === 'function') {
        deps.showToast('Switch to Merchant Account to access business utilities');
      }
      return;
    }

    if (global.VillageViewManager && typeof global.VillageViewManager.switchTo === 'function') {
      global.VillageViewManager.switchTo(view);
    }

    setActiveNav(view);
    setMainCopy(view);

    if (view === 'chat' && typeof global.openChatWindow === 'function') {
      global.openChatWindow('sarah-kimani');
    }

    if (view === 'pay' && typeof global.initVillagePayHub === 'function') {
      global.initVillagePayHub();
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

    console.log('[VillageRouter] Sidebar navigation router initialized.');
    navigate('social');
  }

  global.VillageRouter = {
    init: init,
    navigate: navigate,
    syncViewCopy: syncViewCopy,
    VIEW_COPY: VIEW_COPY
  };
})(window);
