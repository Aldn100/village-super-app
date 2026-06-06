/**
 * Village credentials validator — sovereign citizen local authentication.
 */
(function (global) {
  'use strict';

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

  function validateLocalCitizen(identifier, password) {
    if (!global.CitizenState) return false;
    var citizen = global.CitizenState.getCurrent();
    if (!citizen || !citizen.onboarded) return false;
    var id = String(identifier || '').trim().toLowerCase();
    var handle = String(citizen.handle || '').trim().toLowerCase();
    return (id === handle || id === String(citizen.citizenId).toLowerCase()) && String(password || '').length >= 6;
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

    console.log('[VillageCredentials] Validating sovereign citizen credentials…');

    var ok = true;

    if (!emailVal) {
      setFieldError(fields.email, 'Citizen ID, email, or phone is required');
      ok = false;
    }

    if (!passwordVal) {
      setFieldError(fields.password, 'Passphrase is required');
      ok = false;
    } else if (passwordVal.length < 6) {
      setFieldError(fields.password, 'Passphrase must be at least 6 characters');
      ok = false;
    }

    if (!ok) {
      console.log('[VillageCredentials] Validation failed — missing required fields.');
      return false;
    }

    if (validateLocalCitizen(emailVal, passwordVal)) {
      console.log('[VillageCredentials] Local citizen ledger credentials accepted.');
      return true;
    }

    console.log('[VillageCredentials] Credential format valid — awaiting citizen onboarding binding.');
    return true;
  }

  global.VillageCredentials = {
    validate: validate,
    validateLocalCitizen: validateLocalCitizen
  };
})(window);
