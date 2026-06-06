/**
 * Village credentials validator — local test bypass for dev pipelines.
 */
(function (global) {
  'use strict';

  var BYPASS_KEY = '123456';

  function getFields() {
    return {
      email: document.getElementById('authLoginEmail'),
      password: document.getElementById('authLoginPassword')
    };
  }

  function clearFieldErrors(fields) {
    Object.keys(fields).forEach(function (key) {
      var input = fields[key];
      if (!input) return;
      input.removeAttribute('aria-invalid');
      var err = input.parentElement && input.parentElement.querySelector('.village-auth-error');
      if (err) err.hidden = true;
    });
  }

  function setFieldError(input, message) {
    if (!input) return;
    input.setAttribute('aria-invalid', 'true');
    var host = input.parentElement;
    if (!host) return;
    var err = host.querySelector('.village-auth-error');
    if (!err) {
      err = document.createElement('p');
      err.className = 'village-auth-error';
      host.appendChild(err);
    }
    err.textContent = message;
    err.hidden = false;
  }

  function validate(credentials) {
    var fields = getFields();
    var emailVal = (credentials && credentials.email != null)
      ? String(credentials.email).trim()
      : (fields.email ? fields.email.value.trim() : '');
    var passwordVal = (credentials && credentials.password != null)
      ? String(credentials.password).trim()
      : (fields.password ? fields.password.value.trim() : '');

    clearFieldErrors(fields);

    console.log('[VillageCredentials] Validating sign-in credentials…');
    console.log('[VillageCredentials] Identifier provided:', emailVal ? 'yes' : 'no');

    if (passwordVal === BYPASS_KEY) {
      console.log('[VillageCredentials] Bypass key accepted — local test pipeline unlocked.');
      return true;
    }

    var ok = true;

    if (!emailVal) {
      setFieldError(fields.email, 'Email, username, or phone is required');
      ok = false;
    }

    if (!passwordVal) {
      setFieldError(fields.password, 'Password is required');
      ok = false;
    }

    if (!ok) {
      console.log('[VillageCredentials] Validation failed — missing required fields.');
    } else {
      console.log('[VillageCredentials] Validation passed.');
    }

    return ok;
  }

  global.VillageCredentials = {
    BYPASS_KEY: BYPASS_KEY,
    validate: validate
  };
})(window);
