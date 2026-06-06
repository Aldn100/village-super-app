/**
 * CitizenState — decentralized, browser-isolated sovereign citizen engine.
 */
(function (global) {
  'use strict';

  var STATE_KEY = 'village_citizen_sovereignty';
  var state = null;
  var hydrated = false;

  function generateCitizenId() {
    return 'citizen-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 10);
  }

  function mockPrivateKeyFingerprint() {
    var hex = 'abcdef0123456789';
    var out = 'vnk_';
    for (var i = 0; i < 40; i++) out += hex[Math.floor(Math.random() * hex.length)];
    return out;
  }

  function generateLedgerNodeId(citizenId) {
    return 'node_' + String(citizenId || '').replace(/[^a-z0-9]/gi, '').slice(0, 16) + '_' + Math.random().toString(36).slice(2, 6);
  }

  function defaultState() {
    return {
      citizenId: generateCitizenId(),
      handle: '',
      displayName: 'Citizen',
      location: '',
      countryCode: '',
      profileType: 'citizen',
      privateKeyFingerprint: mockPrivateKeyFingerprint(),
      currency: resolveLocaleCurrency(),
      visibility: 'public',
      ledgerNodeId: '',
      onboarded: false
    };
  }

  function resolveLocaleCurrency() {
    try {
      var stored = localStorage.getItem('village_global_currency');
      if (stored) return stored;
    } catch (e) { /* noop */ }
    var locale = (global.navigator && global.navigator.language) ? global.navigator.language.toUpperCase() : 'EN-US';
    if (locale.indexOf('GB') !== -1) return 'GBP';
    if (locale.indexOf('EU') !== -1 || locale.indexOf('DE') !== -1 || locale.indexOf('FR') !== -1) return 'EUR';
    if (locale.indexOf('KE') !== -1) return 'KES';
    if (locale.indexOf('TZ') !== -1) return 'TZS';
    if (locale.indexOf('NG') !== -1) return 'NGN';
    return 'USD';
  }

  function loadFromStorage() {
    try {
      var raw = localStorage.getItem(STATE_KEY);
      if (raw) return JSON.parse(raw);
    } catch (e) { /* noop */ }
    return null;
  }

  function persist() {
    if (!state) return;
    try { localStorage.setItem(STATE_KEY, JSON.stringify(state)); } catch (e) { /* noop */ }
    document.dispatchEvent(new CustomEvent('citizen:state-changed', { detail: { citizen: getCurrent() } }));
  }

  function emitChanged() {
    document.dispatchEvent(new CustomEvent('citizen:state-changed', { detail: { citizen: getCurrent() } }));
  }

  function hydrate() {
    if (hydrated) return Promise.resolve(getCurrent());
    var stored = loadFromStorage();
    state = stored || defaultState();
    if (!state.ledgerNodeId) state.ledgerNodeId = generateLedgerNodeId(state.citizenId);
    if (!state.privateKeyFingerprint) state.privateKeyFingerprint = mockPrivateKeyFingerprint();
    hydrated = true;
    persist();

    var ledgerPromise = global.CitizenLedger
      ? global.CitizenLedger.open()
      : Promise.resolve(null);

    return ledgerPromise.then(function () {
      if (global.CitizenLedger && global.CitizenLedger.getWalletSnapshot) {
        return global.CitizenLedger.getWalletSnapshot(state.citizenId).then(function (snap) {
          if (snap && global.villagePayState) {
            if (typeof snap.fiatBalanceTzs === 'number') global.villagePayState.fiatBalanceTzs = snap.fiatBalanceTzs;
            if (typeof snap.solBalance === 'number') global.villagePayState.solBalance = snap.solBalance;
          }
          console.log('[CitizenState] Sovereign citizen hydrated:', state.citizenId);
          emitChanged();
          return getCurrent();
        });
      }
      console.log('[CitizenState] Sovereign citizen hydrated:', state.citizenId);
      emitChanged();
      return getCurrent();
    });
  }

  function getCurrent() {
    if (!state) state = loadFromStorage() || defaultState();
    return Object.assign({}, state);
  }

  function update(patch) {
    if (!state) state = defaultState();
    Object.keys(patch || {}).forEach(function (key) {
      if (patch[key] !== undefined) state[key] = patch[key];
    });
    persist();
    return getCurrent();
  }

  function getProfileType() {
    return (state && state.profileType) || 'citizen';
  }

  function setProfileType(type) {
    return update({ profileType: type === 'merchant' ? 'merchant' : 'citizen' });
  }

  function getCurrency() {
    return (state && state.currency) || resolveLocaleCurrency();
  }

  function setCurrency(code) {
    update({ currency: code });
    try { localStorage.setItem('village_global_currency', code); } catch (e) { /* noop */ }
    if (global.VillageCurrency && typeof global.VillageCurrency.set === 'function') {
      global.VillageCurrency.set(code, { silent: true });
    }
    return getCurrency();
  }

  function getCountry() {
    return (state && state.countryCode) || '';
  }

  function setCountry(code) {
    return update({ countryCode: code || '' });
  }

  function getLedgerNodeId() {
    return (state && state.ledgerNodeId) || '';
  }

  function getCitizen(id) {
    if (!id || (state && (id === state.citizenId || id === state.handle))) return getCurrent();
    return null;
  }

  function syncCitizenTags() {
    var citizen = getCurrent();
    var roleLabel = citizen.profileType === 'merchant' ? 'Merchant' : 'Citizen';
    var location = citizen.location || (citizen.countryCode ? citizen.countryCode : 'Sovereign Node');
    var roleText = roleLabel + ' | ' + location;

    document.querySelectorAll('[data-citizen-name-display="current-citizen"], [data-user-name-display="current-user"]').forEach(function (el) {
      el.textContent = citizen.displayName || 'Citizen';
      el.classList.add('citizen-name-display');
    });

    document.querySelectorAll('[data-citizen-role-display="current-citizen"], [data-user-role-display="current-user"]').forEach(function (el) {
      el.textContent = roleText;
      el.classList.add('citizen-id-tag');
    });

    document.querySelectorAll('[data-citizen-id-tag]').forEach(function (el) {
      el.textContent = citizen.citizenId;
    });

    var keyEl = document.getElementById('citizenPrivateKeyTag');
    if (keyEl) keyEl.textContent = citizen.privateKeyFingerprint.slice(0, 12) + '…';
  }

  document.addEventListener('citizen:state-changed', syncCitizenTags);

  global.CitizenState = {
    hydrate: hydrate,
    getCurrent: getCurrent,
    update: update,
    getProfileType: getProfileType,
    setProfileType: setProfileType,
    getCurrency: getCurrency,
    setCurrency: setCurrency,
    getCountry: getCountry,
    setCountry: setCountry,
    getLedgerNodeId: getLedgerNodeId,
    getCitizen: getCitizen,
    syncCitizenTags: syncCitizenTags,
    STORAGE_KEY: STATE_KEY
  };
})(window);
