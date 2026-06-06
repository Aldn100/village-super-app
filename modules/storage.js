/**
 * VillageStorage — tracking-prevention-safe local/session persistence.
 */
(function (global) {
  'use strict';

  function getItem(key) {
    try { return global.localStorage.getItem(key); } catch (e) { return null; }
  }

  function setItem(key, value) {
    try { global.localStorage.setItem(key, value); return true; } catch (e) { return false; }
  }

  function removeItem(key) {
    try { global.localStorage.removeItem(key); return true; } catch (e) { return false; }
  }

  function getJSON(key, fallback) {
    var raw = getItem(key);
    if (raw == null) return fallback;
    try { return JSON.parse(raw); } catch (e) { return fallback; }
  }

  function setJSON(key, value) {
    try { return setItem(key, JSON.stringify(value)); } catch (e) { return false; }
  }

  function getSessionItem(key) {
    try { return global.sessionStorage.getItem(key); } catch (e) { return null; }
  }

  function setSessionItem(key, value) {
    try { global.sessionStorage.setItem(key, value); return true; } catch (e) { return false; }
  }

  function removeSessionItem(key) {
    try { global.sessionStorage.removeItem(key); return true; } catch (e) { return false; }
  }

  function clearSession() {
    try { global.sessionStorage.clear(); return true; } catch (e) { return false; }
  }

  global.VillageStorage = {
    getItem: getItem,
    setItem: setItem,
    removeItem: removeItem,
    getJSON: getJSON,
    setJSON: setJSON,
    getSessionItem: getSessionItem,
    setSessionItem: setSessionItem,
    removeSessionItem: removeSessionItem,
    clearSession: clearSession
  };
})(window);
