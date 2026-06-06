/**
 * Village App — sovereign citizen i18n, navigation, and decentralized bootstrap.
 */
(function (global) {
  'use strict';

  var STORAGE_KEY = 'village_global_language';
  var SUPPORTED = ['en', 'sw', 'es', 'fr', 'de', 'ar', 'pt'];
  var currentLang = 'en';

  var TRANSLATIONS = {
    en: {
      'nav.home': 'Home',
      'nav.messages': 'Messages',
      'nav.profile': 'Profile',
      'nav.language': 'Language',
      'nav.currency': 'Currency',
      'nav.wallet': 'Citizen Wallet',
      'search.placeholder': 'Search citizens, products, services',
      'main.title.social': 'Your Village Feed',
      'main.subtitle.social': 'Connect, share, and discover — all in one global super-app.',
      'main.title.marketplace': 'Village Marketplace',
      'main.subtitle.marketplace': 'Peer-to-peer commerce across sovereign citizen nodes — prices in your chosen fiat.',
      'main.title.chat': 'Messages',
      'main.subtitle.chat': 'Encrypted one-on-one and group conversations.',
      'main.title.jobs': 'Village Jobs',
      'main.subtitle.jobs': 'Discover gigs and hire talent across your community.',
      'main.title.delivery': 'Village Delivery',
      'main.subtitle.delivery': 'Track shipments and courier routes in real time.',
      'main.title.market-analysis': 'Market Analysis',
      'main.subtitle.market-analysis': 'Live pricing indices and demand signals for merchants.',
      'sidebar.utilities': 'Utilities',
      'sidebar.nav.social': 'Social Feed',
      'sidebar.nav.market': 'Village Market',
      'sidebar.nav.marketplace': 'Marketplace',
      'sidebar.nav.pay': 'Village Pay',
      'sidebar.nav.delivery': 'Delivery',
      'sidebar.nav.jobs': 'Jobs',
      'sidebar.nav.marketAnalysis': 'Market Analysis',
      'sidebar.nav.messages': 'Messages',
      'sidebar.personalizedFeed': 'Personalized Feed',
      'sidebar.signedInAs': 'Citizen node active as',
      'sidebar.editProfile': 'Edit Profile',
      'sidebar.accountVisibility': 'Account Visibility',
      'sidebar.public': 'Public',
      'sidebar.private': 'Private',
      'sidebar.profileType': 'Profile Type',
      'sidebar.citizen': 'Citizen',
      'sidebar.merchant': 'Merchant',
      'dropdown.viewProfile': 'View Full Profile',
      'dropdown.editProfile': 'Edit Profile'
    },
    sw: {
      'nav.home': 'Nyumbani',
      'nav.messages': 'Ujumbe',
      'nav.wallet': 'Mkoba',
      'nav.profile': 'Wasifu',
      'nav.language': 'Lugha',
      'nav.currency': 'Sarafu',
      'search.placeholder': 'Tafuta raia, bidhaa, huduma',
      'main.title.social': 'Mlisho wa Kijiji Chako',
      'main.subtitle.social': 'Unganisha, shiriki, na gundua — yote katika programu moja ya kimataifa.',
      'main.title.marketplace': 'Soko la Village',
      'main.subtitle.marketplace': 'Nunua na uza katika jamii yako — bei kwa TZS au USD kulingana na eneo.',
      'main.title.chat': 'Ujumbe',
      'main.subtitle.chat': 'Mazungumzo ya kibinafsi na vikundi vilivyosimbwa.',
      'main.title.jobs': 'Kazi za Village',
      'main.subtitle.jobs': 'Gundua kazi na ajira katika jamii yako.',
      'main.title.delivery': 'Usafirishaji wa Village',
      'main.subtitle.delivery': 'Fuatilia mizigo na njia za uwasilishaji kwa wakati halisi.',
      'main.title.market-analysis': 'Uchambuzi wa Soko',
      'main.subtitle.market-analysis': 'Viashiria vya bei na mahitaji kwa wafanyabiashara.',
      'sidebar.utilities': 'Huduma',
      'sidebar.nav.social': 'Mlisho wa Kijamii',
      'sidebar.nav.market': 'Soko la Village',
      'sidebar.nav.marketplace': 'Soko',
      'sidebar.nav.pay': 'Village Pay',
      'sidebar.nav.delivery': 'Usafirishaji',
      'sidebar.nav.jobs': 'Kazi',
      'sidebar.nav.marketAnalysis': 'Uchambuzi wa Soko',
      'sidebar.nav.messages': 'Ujumbe',
      'sidebar.personalizedFeed': 'Mlisho Uliobinafsishwa',
      'sidebar.signedInAs': 'Umeingia kama',
      'sidebar.editProfile': 'Hariri Wasifu',
      'sidebar.accountVisibility': 'Uonekano wa Akaunti',
      'sidebar.public': 'Hadharani',
      'sidebar.private': 'Binafsi',
      'sidebar.profileType': 'Aina ya Wasifu',
      'sidebar.citizen': 'Raia',
      'sidebar.merchant': 'Mfanyabiashara',
      'dropdown.viewProfile': 'Tazama Wasifu Kamili',
      'dropdown.editProfile': 'Hariri Wasifu'
    },
    es: {
      'nav.home': 'Inicio',
      'nav.messages': 'Mensajes',
      'nav.wallet': 'Billetera',
      'nav.profile': 'Perfil',
      'nav.language': 'Idioma',
      'nav.currency': 'Moneda',
      'search.placeholder': 'Buscar ciudadanos, productos, servicios',
      'main.title.social': 'Tu feed de Village',
      'main.subtitle.social': 'Conecta, comparte y descubre — todo en una super-app global.',
      'main.title.marketplace': 'Mercado Village',
      'main.subtitle.marketplace': 'Compra y vende en tu comunidad — precios en TZS o USD según la región.',
      'main.title.chat': 'Mensajes',
      'main.subtitle.chat': 'Conversaciones cifradas individuales y grupales.',
      'main.title.jobs': 'Empleos Village',
      'main.subtitle.jobs': 'Descubre trabajos y contrata talento en tu comunidad.',
      'main.title.delivery': 'Entregas Village',
      'main.subtitle.delivery': 'Rastrea envíos y rutas de mensajería en tiempo real.',
      'main.title.market-analysis': 'Análisis de mercado',
      'main.subtitle.market-analysis': 'Índices de precios y señales de demanda para comerciantes.',
      'sidebar.utilities': 'Utilidades',
      'sidebar.nav.social': 'Feed social',
      'sidebar.nav.market': 'Mercado Village',
      'sidebar.nav.marketplace': 'Mercado',
      'sidebar.nav.pay': 'Village Pay',
      'sidebar.nav.delivery': 'Entregas',
      'sidebar.nav.jobs': 'Empleos',
      'sidebar.nav.marketAnalysis': 'Análisis de mercado',
      'sidebar.nav.messages': 'Mensajes',
      'sidebar.personalizedFeed': 'Feed personalizado',
      'sidebar.signedInAs': 'Conectado como',
      'sidebar.editProfile': 'Editar perfil',
      'sidebar.accountVisibility': 'Visibilidad de cuenta',
      'sidebar.public': 'Público',
      'sidebar.private': 'Privado',
      'sidebar.profileType': 'Tipo de perfil',
      'sidebar.citizen': 'Ciudadano',
      'sidebar.merchant': 'Comerciante',
      'dropdown.viewProfile': 'Ver perfil completo',
      'dropdown.editProfile': 'Editar perfil'
    },
    fr: {
      'nav.home': 'Accueil',
      'nav.messages': 'Messages',
      'nav.wallet': 'Portefeuille',
      'nav.profile': 'Profil',
      'nav.language': 'Langue',
      'nav.currency': 'Devise',
      'search.placeholder': 'Rechercher citoyens, produits, services',
      'main.title.social': 'Votre fil Village',
      'main.subtitle.social': 'Connectez, partagez et découvrez — tout dans une super-app mondiale.',
      'main.title.marketplace': 'Marché Village',
      'main.subtitle.marketplace': 'Achetez et vendez dans votre communauté — prix en TZS ou USD selon la région.',
      'main.title.chat': 'Messages',
      'main.subtitle.chat': 'Conversations chiffrées individuelles et de groupe.',
      'main.title.jobs': 'Emplois Village',
      'main.subtitle.jobs': 'Découvrez des missions et recrutez des talents.',
      'main.title.delivery': 'Livraison Village',
      'main.subtitle.delivery': 'Suivez les colis et les itinéraires en temps réel.',
      'main.title.market-analysis': 'Analyse de marché',
      'main.subtitle.market-analysis': 'Indices de prix et signaux de demande pour les marchands.',
      'sidebar.utilities': 'Utilitaires',
      'sidebar.nav.social': 'Fil social',
      'sidebar.nav.market': 'Marché Village',
      'sidebar.nav.marketplace': 'Marché',
      'sidebar.nav.pay': 'Village Pay',
      'sidebar.nav.delivery': 'Livraison',
      'sidebar.nav.jobs': 'Emplois',
      'sidebar.nav.marketAnalysis': 'Analyse de marché',
      'sidebar.nav.messages': 'Messages',
      'sidebar.personalizedFeed': 'Fil personnalisé',
      'sidebar.signedInAs': 'Connecté en tant que',
      'sidebar.editProfile': 'Modifier le profil',
      'sidebar.accountVisibility': 'Visibilité du compte',
      'sidebar.public': 'Public',
      'sidebar.private': 'Privé',
      'sidebar.profileType': 'Type de profil',
      'sidebar.citizen': 'Citoyen',
      'sidebar.merchant': 'Marchand',
      'dropdown.viewProfile': 'Voir le profil complet',
      'dropdown.editProfile': 'Modifier le profil'
    },
    de: {
      'nav.home': 'Start',
      'nav.messages': 'Nachrichten',
      'nav.wallet': 'Wallet',
      'nav.profile': 'Profil',
      'nav.language': 'Sprache',
      'nav.currency': 'Währung',
      'search.placeholder': 'Bürger, Produkte, Dienste suchen',
      'main.title.social': 'Dein Village-Feed',
      'main.subtitle.social': 'Verbinden, teilen und entdecken — alles in einer globalen Super-App.',
      'main.title.marketplace': 'Village-Marktplatz',
      'main.subtitle.marketplace': 'Kaufe und verkaufe in deiner Community — Preise in TZS oder USD je nach Region.',
      'main.title.chat': 'Nachrichten',
      'main.subtitle.chat': 'Verschlüsselte Einzel- und Gruppenchats.',
      'main.title.jobs': 'Village-Jobs',
      'main.subtitle.jobs': 'Finde Aufträge und stelle Talente ein.',
      'main.title.delivery': 'Village-Lieferung',
      'main.subtitle.delivery': 'Sendungen und Kurierrouten in Echtzeit verfolgen.',
      'main.title.market-analysis': 'Marktanalyse',
      'main.subtitle.market-analysis': 'Preisindizes und Nachfragesignale für Händler.',
      'sidebar.utilities': 'Werkzeuge',
      'sidebar.nav.social': 'Social-Feed',
      'sidebar.nav.market': 'Village-Markt',
      'sidebar.nav.marketplace': 'Marktplatz',
      'sidebar.nav.pay': 'Village Pay',
      'sidebar.nav.delivery': 'Lieferung',
      'sidebar.nav.jobs': 'Jobs',
      'sidebar.nav.marketAnalysis': 'Marktanalyse',
      'sidebar.nav.messages': 'Nachrichten',
      'sidebar.personalizedFeed': 'Personalisierter Feed',
      'sidebar.signedInAs': 'Angemeldet als',
      'sidebar.editProfile': 'Profil bearbeiten',
      'sidebar.accountVisibility': 'Kontosichtbarkeit',
      'sidebar.public': 'Öffentlich',
      'sidebar.private': 'Privat',
      'sidebar.profileType': 'Profiltyp',
      'sidebar.citizen': 'Bürger',
      'sidebar.merchant': 'Händler',
      'dropdown.viewProfile': 'Vollständiges Profil anzeigen',
      'dropdown.editProfile': 'Profil bearbeiten'
    },
    ar: {
      'nav.home': 'الرئيسية',
      'nav.messages': 'الرسائل',
      'nav.wallet': 'المحفظة',
      'nav.profile': 'الملف الشخصي',
      'nav.language': 'اللغة',
      'nav.currency': 'العملة',
      'search.placeholder': 'ابحث عن المواطنين والمنتجات والخدمات',
      'main.title.social': 'خلاصة القرية الخاصة بك',
      'main.subtitle.social': 'تواصل وشارك واكتشف — كل ذلك في تطبيق عالمي واحد.',
      'main.title.marketplace': 'سوق القرية',
      'main.subtitle.marketplace': 'اشترِ وبِع في مجتمعك — أسعار بالشلن التنزاني أو الدولار حسب المنطقة.',
      'main.title.chat': 'الرسائل',
      'main.subtitle.chat': 'محادثات مشفرة فردية وجماعية.',
      'main.title.jobs': 'وظائف القرية',
      'main.subtitle.jobs': 'اكتشف فرص العمل ووظّف المواهب في مجتمعك.',
      'main.title.delivery': 'توصيل القرية',
      'main.subtitle.delivery': 'تتبع الشحنات ومسارات التوصيل في الوقت الفعلي.',
      'main.title.market-analysis': 'تحليل السوق',
      'main.subtitle.market-analysis': 'مؤشرات الأسعار وإشارات الطلب للتجار.',
      'sidebar.utilities': 'الأدوات',
      'sidebar.nav.social': 'الخلاصة الاجتماعية',
      'sidebar.nav.market': 'سوق القرية',
      'sidebar.nav.marketplace': 'السوق',
      'sidebar.nav.pay': 'دفع القرية',
      'sidebar.nav.delivery': 'التوصيل',
      'sidebar.nav.jobs': 'الوظائف',
      'sidebar.nav.marketAnalysis': 'تحليل السوق',
      'sidebar.nav.messages': 'الرسائل',
      'sidebar.personalizedFeed': 'خلاصة مخصصة',
      'sidebar.signedInAs': 'مسجل الدخول كـ',
      'sidebar.editProfile': 'تعديل الملف',
      'sidebar.accountVisibility': 'ظهور الحساب',
      'sidebar.public': 'عام',
      'sidebar.private': 'خاص',
      'sidebar.profileType': 'نوع الملف',
      'sidebar.citizen': 'مواطن',
      'sidebar.merchant': 'تاجر',
      'dropdown.viewProfile': 'عرض الملف الكامل',
      'dropdown.editProfile': 'تعديل الملف'
    },
    pt: {
      'nav.home': 'Início',
      'nav.messages': 'Mensagens',
      'nav.wallet': 'Carteira',
      'nav.profile': 'Perfil',
      'nav.language': 'Idioma',
      'nav.currency': 'Moeda',
      'search.placeholder': 'Pesquisar cidadãos, produtos, serviços',
      'main.title.social': 'Seu feed Village',
      'main.subtitle.social': 'Conecte, compartilhe e descubra — tudo em um super-app global.',
      'main.title.marketplace': 'Mercado Village',
      'main.subtitle.marketplace': 'Compre e venda na sua comunidade — preços em TZS ou USD por região.',
      'main.title.chat': 'Mensagens',
      'main.subtitle.chat': 'Conversas criptografadas individuais e em grupo.',
      'main.title.jobs': 'Empregos Village',
      'main.subtitle.jobs': 'Descubra trabalhos e contrate talentos na sua comunidade.',
      'main.title.delivery': 'Entrega Village',
      'main.subtitle.delivery': 'Acompanhe envios e rotas de entrega em tempo real.',
      'main.title.market-analysis': 'Análise de mercado',
      'main.subtitle.market-analysis': 'Índices de preços e sinais de demanda para comerciantes.',
      'sidebar.utilities': 'Utilitários',
      'sidebar.nav.social': 'Feed social',
      'sidebar.nav.market': 'Mercado Village',
      'sidebar.nav.marketplace': 'Mercado',
      'sidebar.nav.pay': 'Village Pay',
      'sidebar.nav.delivery': 'Entrega',
      'sidebar.nav.jobs': 'Empregos',
      'sidebar.nav.marketAnalysis': 'Análise de mercado',
      'sidebar.nav.messages': 'Mensagens',
      'sidebar.personalizedFeed': 'Feed personalizado',
      'sidebar.signedInAs': 'Conectado como',
      'sidebar.editProfile': 'Editar perfil',
      'sidebar.accountVisibility': 'Visibilidade da conta',
      'sidebar.public': 'Público',
      'sidebar.private': 'Privado',
      'sidebar.profileType': 'Tipo de perfil',
      'sidebar.citizen': 'Cidadão',
      'sidebar.merchant': 'Comerciante',
      'dropdown.viewProfile': 'Ver perfil completo',
      'dropdown.editProfile': 'Editar perfil'
    }
  };

  var LANGUAGE_LABELS = {
    en: 'English',
    sw: 'Kiswahili',
    es: 'Español',
    fr: 'Français',
    de: 'Deutsch',
    ar: 'العربية',
    pt: 'Português'
  };

  /* ── Foolproof viewport switcher ── */
  var VIEW_ROUTE_MAP = {
    social: 'socialView',
    marketplace: 'marketplaceView',
    delivery: 'deliveryView',
    jobs: 'jobsView',
    chat: 'chatView',
    pay: 'pay-page',
    market: 'market-page',
    'market-analysis': 'marketAnalysisView',
    'pay-inline': 'payView'
  };

  var currentActiveView = 'social';

  function deactivateAllViewPanels() {
    document.querySelectorAll('.view-panel').forEach(function (panel) {
      panel.classList.remove('active-view');
      panel.classList.add('hidden');
      panel.setAttribute('aria-hidden', 'true');
    });

    document.querySelectorAll('.app-view').forEach(function (view) {
      view.classList.add('app-view--hidden');
      view.setAttribute('aria-hidden', 'true');
    });

    document.body.classList.remove('village-pay-active', 'village-market-active');
    document.body.style.overflow = '';

    if (typeof global.closeChatWindow === 'function') global.closeChatWindow();
    if (typeof global.dismissVillagePayShell === 'function') global.dismissVillagePayShell();
    if (typeof global.dismissVillageMarketShell === 'function') global.dismissVillageMarketShell();

    console.log('[VillageViewManager] All view panels deactivated.');
  }

  function activateViewPanel(viewKey) {
    deactivateAllViewPanels();

    var panelId = VIEW_ROUTE_MAP[viewKey];
    if (!panelId) {
      console.warn('[VillageViewManager] Unknown view key:', viewKey);
      return false;
    }

    var panel = document.getElementById(panelId);
    if (!panel) {
      console.warn('[VillageViewManager] Panel not found:', panelId);
      return false;
    }

    panel.classList.add('active-view');
    panel.classList.remove('hidden', 'app-view--hidden');
    panel.setAttribute('aria-hidden', 'false');
    currentActiveView = viewKey;

    if (viewKey === 'pay') {
      document.body.classList.add('village-pay-active');
      document.body.style.overflow = 'hidden';
      if (typeof global.initVillagePayHub === 'function') global.initVillagePayHub();
    }

    if (viewKey === 'market') {
      document.body.classList.add('village-market-active');
      document.body.style.overflow = 'hidden';
      if (typeof global.openVillageMarketFromSidebar === 'function') {
        /* shell init only — panel already active */
      }
      if (typeof global.renderMarketGrid === 'function') global.renderMarketGrid();
    }

    if (global.VillageI18n && typeof global.VillageI18n.setMainViewI18n === 'function') {
      if (VIEW_ROUTE_MAP[viewKey] && viewKey !== 'pay' && viewKey !== 'market') {
        global.VillageI18n.setMainViewI18n(viewKey);
      }
    }

    if (global.VillageModules && global.VillageModules[viewKey] && typeof global.VillageModules[viewKey].activate === 'function') {
      global.VillageModules[viewKey].activate();
    }

    console.log('[VillageViewManager] Activated view:', viewKey, '→', panelId);
    document.dispatchEvent(new CustomEvent('village:view-changed', { detail: { view: viewKey } }));
    return true;
  }

  function switchToView(viewKey) {
    return activateViewPanel(viewKey);
  }

  function initViewPanelBindings() {
    var chatHubBtn = document.getElementById('chatHubOpenInbox');
    if (chatHubBtn && !chatHubBtn.dataset.bound) {
      chatHubBtn.dataset.bound = '1';
      chatHubBtn.addEventListener('click', function () {
        if (typeof global.openChatWindow === 'function') global.openChatWindow('sarah-kimani');
      });
    }

    document.querySelectorAll('[data-delivery-job]').forEach(function (btn) {
      if (btn.dataset.bound) return;
      btn.dataset.bound = '1';
      btn.addEventListener('click', function () {
        var jobId = btn.getAttribute('data-delivery-job');
        if (typeof global.acceptVillageExpressJob === 'function') global.acceptVillageExpressJob(jobId);
      });
    });
  }

  global.VillageViewManager = {
    switchTo: switchToView,
    deactivateAll: deactivateAllViewPanels,
    activate: activateViewPanel,
    getCurrentView: function () { return currentActiveView; },
    VIEW_ROUTE_MAP: VIEW_ROUTE_MAP
  };

  function t(key) {
    var pack = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
    return pack[key] || TRANSLATIONS.en[key] || key;
  }

  function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (key) el.textContent = t(key);
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      if (key) el.setAttribute('placeholder', t(key));
    });

    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-aria');
      if (key) el.setAttribute('aria-label', t(key));
    });

    var title = document.getElementById('mainViewTitle');
    var subtitle = document.getElementById('mainViewSubtitle');
    if (title && title.dataset.i18nView) {
      title.textContent = t('main.title.' + title.dataset.i18nView);
    }
    if (subtitle && subtitle.dataset.i18nView) {
      subtitle.textContent = t('main.subtitle.' + subtitle.dataset.i18nView);
    }

    console.log('[VillageI18n] Applied language:', currentLang);
    document.dispatchEvent(new CustomEvent('village:language-changed', { detail: { lang: currentLang } }));
  }

  function setMainViewI18n(view) {
    var title = document.getElementById('mainViewTitle');
    var subtitle = document.getElementById('mainViewSubtitle');
    if (title) {
      title.dataset.i18nView = view;
      title.textContent = t('main.title.' + view);
    }
    if (subtitle) {
      subtitle.dataset.i18nView = view;
      subtitle.textContent = t('main.subtitle.' + view);
    }
  }

  function setLanguage(code) {
    if (SUPPORTED.indexOf(code) === -1) code = 'en';
    currentLang = code;
    document.documentElement.lang = code;
    document.documentElement.dir = code === 'ar' ? 'rtl' : 'ltr';
    try { localStorage.setItem(STORAGE_KEY, code); } catch (e) { /* noop */ }
    applyTranslations();
    if (global.VillageRouter && global.VillageRouter.syncViewCopy) {
      global.VillageRouter.syncViewCopy();
    }
  }

  function loadStoredLanguage() {
    try {
      var stored = localStorage.getItem(STORAGE_KEY);
      if (stored && SUPPORTED.indexOf(stored) !== -1) return stored;
    } catch (e) { /* noop */ }
    return 'en';
  }

  function initLanguageSelector() {
    var sel = document.getElementById('globalLanguageSelector');
    if (!sel || sel.dataset.villageI18nBound) return;
    sel.dataset.villageI18nBound = '1';
    sel.value = currentLang;
    sel.addEventListener('change', function () {
      var code = sel.value;
      console.log('[VillageI18n] Language switched to:', code);
      setLanguage(code);
      if (typeof global.applyGlobalLanguage === 'function') {
        global.applyGlobalLanguage(code);
      }
    });
  }

  function syncProfileDropdownMeta() {
    if (global.CitizenState && typeof global.CitizenState.syncCitizenTags === 'function') {
      global.CitizenState.syncCitizenTags();
    }
    var nameSrc = document.getElementById('sidebarCitizenName') || document.getElementById('sidebarUserName');
    var roleSrc = document.getElementById('sidebarCitizenRole') || document.getElementById('sidebarUserRole');
    var avatarSrc = document.getElementById('topnavAvatar');
    var nameDst = document.getElementById('topnavDropdownName');
    var roleDst = document.getElementById('topnavDropdownRole');
    var avatarDst = document.getElementById('topnavDropdownAvatar');
    if (global.CitizenState) {
      var citizen = global.CitizenState.getCurrent();
      if (nameDst) nameDst.textContent = citizen.displayName || 'Citizen';
      if (roleDst) {
        var roleLabel = citizen.profileType === 'merchant' ? 'Merchant' : 'Citizen';
        roleDst.textContent = roleLabel + ' | ' + (citizen.location || citizen.countryCode || 'Sovereign Node');
      }
    } else {
      if (nameSrc && nameDst) nameDst.textContent = nameSrc.textContent;
      if (roleSrc && roleDst) roleDst.textContent = roleSrc.textContent;
    }
    if (avatarSrc && avatarDst) avatarDst.src = avatarSrc.src;
  }

  function closeProfileDropdown() {
    var dropdown = document.getElementById('topnavProfileDropdown');
    var btn = document.getElementById('topnavAvatarBtn');
    if (!dropdown) return;
    dropdown.hidden = true;
    dropdown.setAttribute('aria-hidden', 'true');
    dropdown.classList.remove('topnav__profile-dropdown--open');
    if (btn) btn.setAttribute('aria-expanded', 'false');
  }

  function toggleProfileDropdown(forceOpen) {
    var dropdown = document.getElementById('topnavProfileDropdown');
    var btn = document.getElementById('topnavAvatarBtn');
    if (!dropdown) return;
    syncProfileDropdownMeta();
    var open = typeof forceOpen === 'boolean' ? forceOpen : dropdown.hidden;
    dropdown.hidden = !open;
    dropdown.setAttribute('aria-hidden', open ? 'false' : 'true');
    dropdown.classList.toggle('topnav__profile-dropdown--open', open);
    if (btn) btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (open) setTopNavActive('profileNavLink');
  }

  function setTopNavActive(linkId) {
    ['topnavHomeLink', 'topnavMessagesLink', 'topnavWalletLink', 'profileNavLink'].forEach(function (id) {
      var link = document.getElementById(id);
      if (!link) return;
      var active = id === linkId;
      link.classList.toggle('topnav__link--active', active);
      if (active) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
  }

  function showChatPanel() {
    switchToView('chat');
    setMainViewI18n('chat');
    if (typeof global.openChatWindow === 'function') {
      global.openChatWindow('sarah-kimani');
      return;
    }
    var chat = document.getElementById('villageChatWindow');
    if (chat) {
      chat.classList.add('chat-window--open');
      chat.classList.remove('chat-window--minimized');
      chat.setAttribute('aria-hidden', 'false');
    }
  }

  function showWalletPanel() {
    closeProfileDropdown();
    switchToView('pay');
  }

  function navigateHome() {
    closeProfileDropdown();
    if (typeof global.toggleProfilePanel === 'function') global.toggleProfilePanel(false);
    switchToView('social');
    setMainViewI18n('social');
    setTopNavActive('topnavHomeLink');
  }

  function navigateMessages() {
    closeProfileDropdown();
    if (typeof global.toggleProfilePanel === 'function') global.toggleProfilePanel(false);
    showChatPanel();
    setTopNavActive('topnavMessagesLink');
    console.log('[VillageApp] Chat panel module activated.');
  }

  function navigateWallet() {
    if (typeof global.toggleProfilePanel === 'function') global.toggleProfilePanel(false);
    showWalletPanel();
    setTopNavActive('topnavWalletLink');
    console.log('[VillageApp] Village Pay module activated.');
  }

  function navigateProfile() {
    if (typeof global.closeChatWindow === 'function') global.closeChatWindow();
    toggleProfileDropdown();
    console.log('[VillageApp] Profile summary dropdown toggled.');
  }

  function initTopNavigation() {
    if (document.body.dataset.villageTopnavBound) return;
    document.body.dataset.villageTopnavBound = '1';

    document.addEventListener('click', function (e) {
      var menu = document.getElementById('topnavProfileMenu');
      if (!menu || menu.contains(e.target)) return;
      closeProfileDropdown();
    });

    var home = document.getElementById('topnavHomeLink');
    var messages = document.getElementById('topnavMessagesLink');
    var wallet = document.getElementById('topnavWalletLink');
    var profile = document.getElementById('profileNavLink');
    var avatar = document.getElementById('topnavAvatarBtn');
    var viewProfile = document.getElementById('topnavDropdownViewProfile');
    var editProfile = document.getElementById('topnavDropdownEditProfile');

    if (home) home.addEventListener('click', function (e) { e.preventDefault(); navigateHome(); });
    if (messages) messages.addEventListener('click', function (e) { e.preventDefault(); navigateMessages(); });
    if (wallet) wallet.addEventListener('click', function (e) { e.preventDefault(); navigateWallet(); });
    if (profile) profile.addEventListener('click', function (e) { e.preventDefault(); navigateProfile(); });
    if (avatar) avatar.addEventListener('click', function (e) { e.preventDefault(); e.stopPropagation(); navigateProfile(); });
    if (viewProfile) viewProfile.addEventListener('click', function () {
      closeProfileDropdown();
      if (typeof global.toggleProfilePanel === 'function') global.toggleProfilePanel(true);
      if (global.VillageRouter) global.VillageRouter.navigate('social');
    });
    if (editProfile) editProfile.addEventListener('click', function () {
      closeProfileDropdown();
      var editBtn = document.getElementById('editProfileBtn');
      if (editBtn) editBtn.click();
    });

    console.log('[VillageApp] Top navigation wired.');
  }

  /* ── Global country registry (ISO 3166-1 alpha-2, alphabetical) ── */
  var CURRENCY_STORAGE_KEY = 'village_global_currency';

  function resolveSovereignDefaultCurrency() {
    if (global.CitizenState && typeof global.CitizenState.getCurrency === 'function') {
      return global.CitizenState.getCurrency();
    }
    try {
      var stored = localStorage.getItem(CURRENCY_STORAGE_KEY);
      if (stored) return stored;
    } catch (e) { /* noop */ }
    return 'USD';
  }

  var VILLAGE_DEFAULT_CURRENCY = 'USD';
  var currentCurrency = VILLAGE_DEFAULT_CURRENCY;

  var VILLAGE_FIAT_CURRENCIES = [
    { code: 'AED', name: 'UAE Dirham', symbol: 'AED ', region: 'Middle East', decimals: 2 },
    { code: 'AFN', name: 'Afghan Afghani', symbol: 'AFN ', region: 'Asia', decimals: 0 },
    { code: 'ALL', name: 'Albanian Lek', symbol: 'L ', region: 'Europe', decimals: 0 },
    { code: 'AMD', name: 'Armenian Dram', symbol: 'AMD ', region: 'Asia', decimals: 0 },
    { code: 'ANG', name: 'Netherlands Antillean Guilder', symbol: 'ANG ', region: 'Americas', decimals: 2 },
    { code: 'AOA', name: 'Angolan Kwanza', symbol: 'Kz ', region: 'Africa', decimals: 0 },
    { code: 'ARS', name: 'Argentine Peso', symbol: 'ARS ', region: 'South America', decimals: 2 },
    { code: 'AUD', name: 'Australian Dollar', symbol: 'A$', region: 'Oceania', decimals: 2 },
    { code: 'AWG', name: 'Aruban Florin', symbol: 'AWG ', region: 'Americas', decimals: 2 },
    { code: 'AZN', name: 'Azerbaijani Manat', symbol: 'AZN ', region: 'Asia', decimals: 2 },
    { code: 'BAM', name: 'Bosnia-Herzegovina Mark', symbol: 'KM ', region: 'Europe', decimals: 2 },
    { code: 'BBD', name: 'Barbadian Dollar', symbol: 'BBD ', region: 'Americas', decimals: 2 },
    { code: 'BDT', name: 'Bangladeshi Taka', symbol: 'BDT ', region: 'Asia', decimals: 0 },
    { code: 'BGN', name: 'Bulgarian Lev', symbol: 'BGN ', region: 'Europe', decimals: 2 },
    { code: 'BHD', name: 'Bahraini Dinar', symbol: 'BHD ', region: 'Middle East', decimals: 3 },
    { code: 'BIF', name: 'Burundian Franc', symbol: 'BIF ', region: 'East Africa', decimals: 0 },
    { code: 'BMD', name: 'Bermudian Dollar', symbol: 'BMD ', region: 'Americas', decimals: 2 },
    { code: 'BND', name: 'Brunei Dollar', symbol: 'BND ', region: 'Asia', decimals: 2 },
    { code: 'BOB', name: 'Bolivian Boliviano', symbol: 'BOB ', region: 'South America', decimals: 2 },
    { code: 'BRL', name: 'Brazilian Real', symbol: 'R$', region: 'South America', decimals: 2 },
    { code: 'BSD', name: 'Bahamian Dollar', symbol: 'BSD ', region: 'Americas', decimals: 2 },
    { code: 'BTN', name: 'Bhutanese Ngultrum', symbol: 'BTN ', region: 'Asia', decimals: 0 },
    { code: 'BWP', name: 'Botswana Pula', symbol: 'P ', region: 'Southern Africa', decimals: 2 },
    { code: 'BYN', name: 'Belarusian Ruble', symbol: 'BYN ', region: 'Europe', decimals: 2 },
    { code: 'BZD', name: 'Belize Dollar', symbol: 'BZD ', region: 'Americas', decimals: 2 },
    { code: 'CAD', name: 'Canadian Dollar', symbol: 'C$', region: 'Americas', decimals: 2 },
    { code: 'CDF', name: 'Congolese Franc', symbol: 'CDF ', region: 'Africa', decimals: 0 },
    { code: 'CHF', name: 'Swiss Franc', symbol: 'CHF ', region: 'Europe', decimals: 2 },
    { code: 'CLP', name: 'Chilean Peso', symbol: 'CLP ', region: 'South America', decimals: 0 },
    { code: 'CNY', name: 'Chinese Yuan', symbol: '\u00A5', region: 'Asia', decimals: 2 },
    { code: 'COP', name: 'Colombian Peso', symbol: 'COP ', region: 'South America', decimals: 0 },
    { code: 'CRC', name: 'Costa Rican Colón', symbol: 'CRC ', region: 'Americas', decimals: 0 },
    { code: 'CUP', name: 'Cuban Peso', symbol: 'CUP ', region: 'Americas', decimals: 2 },
    { code: 'CVE', name: 'Cape Verdean Escudo', symbol: 'CVE ', region: 'Africa', decimals: 0 },
    { code: 'CZK', name: 'Czech Koruna', symbol: 'CZK ', region: 'Europe', decimals: 0 },
    { code: 'DJF', name: 'Djiboutian Franc', symbol: 'DJF ', region: 'East Africa', decimals: 0 },
    { code: 'DKK', name: 'Danish Krone', symbol: 'DKK ', region: 'Europe', decimals: 2 },
    { code: 'DOP', name: 'Dominican Peso', symbol: 'DOP ', region: 'Americas', decimals: 2 },
    { code: 'DZD', name: 'Algerian Dinar', symbol: 'DZD ', region: 'Africa', decimals: 0 },
    { code: 'EGP', name: 'Egyptian Pound', symbol: 'EGP ', region: 'Africa', decimals: 2 },
    { code: 'ERN', name: 'Eritrean Nakfa', symbol: 'ERN ', region: 'East Africa', decimals: 0 },
    { code: 'ETB', name: 'Ethiopian Birr', symbol: 'ETB ', region: 'East Africa', decimals: 0 },
    { code: 'EUR', name: 'Euro', symbol: '\u20AC', region: 'Europe', decimals: 2 },
    { code: 'FJD', name: 'Fijian Dollar', symbol: 'FJD ', region: 'Oceania', decimals: 2 },
    { code: 'FKP', name: 'Falkland Islands Pound', symbol: 'FKP ', region: 'Americas', decimals: 2 },
    { code: 'GBP', name: 'British Pound', symbol: '\u00A3', region: 'Europe', decimals: 2 },
    { code: 'GEL', name: 'Georgian Lari', symbol: 'GEL ', region: 'Asia', decimals: 2 },
    { code: 'GHS', name: 'Ghanaian Cedi', symbol: 'GHS ', region: 'West Africa', decimals: 2 },
    { code: 'GIP', name: 'Gibraltar Pound', symbol: 'GIP ', region: 'Europe', decimals: 2 },
    { code: 'GMD', name: 'Gambian Dalasi', symbol: 'GMD ', region: 'West Africa', decimals: 0 },
    { code: 'GNF', name: 'Guinean Franc', symbol: 'GNF ', region: 'West Africa', decimals: 0 },
    { code: 'GTQ', name: 'Guatemalan Quetzal', symbol: 'GTQ ', region: 'Americas', decimals: 2 },
    { code: 'GYD', name: 'Guyanese Dollar', symbol: 'GYD ', region: 'South America', decimals: 0 },
    { code: 'HKD', name: 'Hong Kong Dollar', symbol: 'HK$', region: 'Asia', decimals: 2 },
    { code: 'HNL', name: 'Honduran Lempira', symbol: 'HNL ', region: 'Americas', decimals: 2 },
    { code: 'HTG', name: 'Haitian Gourde', symbol: 'HTG ', region: 'Americas', decimals: 0 },
    { code: 'HUF', name: 'Hungarian Forint', symbol: 'HUF ', region: 'Europe', decimals: 0 },
    { code: 'IDR', name: 'Indonesian Rupiah', symbol: 'Rp ', region: 'Asia', decimals: 0 },
    { code: 'ILS', name: 'Israeli New Shekel', symbol: '\u20AA', region: 'Middle East', decimals: 2 },
    { code: 'INR', name: 'Indian Rupee', symbol: '\u20B9', region: 'Asia', decimals: 2 },
    { code: 'IQD', name: 'Iraqi Dinar', symbol: 'IQD ', region: 'Middle East', decimals: 0 },
    { code: 'IRR', name: 'Iranian Rial', symbol: 'IRR ', region: 'Middle East', decimals: 0 },
    { code: 'ISK', name: 'Icelandic Króna', symbol: 'ISK ', region: 'Europe', decimals: 0 },
    { code: 'JMD', name: 'Jamaican Dollar', symbol: 'JMD ', region: 'Americas', decimals: 2 },
    { code: 'JOD', name: 'Jordanian Dinar', symbol: 'JOD ', region: 'Middle East', decimals: 3 },
    { code: 'JPY', name: 'Japanese Yen', symbol: '\u00A5', region: 'Asia', decimals: 0 },
    { code: 'KES', name: 'Kenyan Shilling', symbol: 'KSh ', region: 'East Africa', decimals: 0 },
    { code: 'KGS', name: 'Kyrgyzstani Som', symbol: 'KGS ', region: 'Asia', decimals: 0 },
    { code: 'KHR', name: 'Cambodian Riel', symbol: 'KHR ', region: 'Asia', decimals: 0 },
    { code: 'KMF', name: 'Comorian Franc', symbol: 'KMF ', region: 'East Africa', decimals: 0 },
    { code: 'KRW', name: 'South Korean Won', symbol: '\u20A9', region: 'Asia', decimals: 0 },
    { code: 'KWD', name: 'Kuwaiti Dinar', symbol: 'KWD ', region: 'Middle East', decimals: 3 },
    { code: 'KYD', name: 'Cayman Islands Dollar', symbol: 'KYD ', region: 'Americas', decimals: 2 },
    { code: 'KZT', name: 'Kazakhstani Tenge', symbol: 'KZT ', region: 'Asia', decimals: 0 },
    { code: 'LAK', name: 'Lao Kip', symbol: 'LAK ', region: 'Asia', decimals: 0 },
    { code: 'LBP', name: 'Lebanese Pound', symbol: 'LBP ', region: 'Middle East', decimals: 0 },
    { code: 'LKR', name: 'Sri Lankan Rupee', symbol: 'LKR ', region: 'Asia', decimals: 0 },
    { code: 'LRD', name: 'Liberian Dollar', symbol: 'LRD ', region: 'West Africa', decimals: 0 },
    { code: 'LSL', name: 'Lesotho Loti', symbol: 'LSL ', region: 'Southern Africa', decimals: 2 },
    { code: 'LYD', name: 'Libyan Dinar', symbol: 'LYD ', region: 'Africa', decimals: 3 },
    { code: 'MAD', name: 'Moroccan Dirham', symbol: 'MAD ', region: 'Africa', decimals: 2 },
    { code: 'MDL', name: 'Moldovan Leu', symbol: 'MDL ', region: 'Europe', decimals: 2 },
    { code: 'MGA', name: 'Malagasy Ariary', symbol: 'MGA ', region: 'East Africa', decimals: 0 },
    { code: 'MKD', name: 'Macedonian Denar', symbol: 'MKD ', region: 'Europe', decimals: 0 },
    { code: 'MMK', name: 'Myanmar Kyat', symbol: 'MMK ', region: 'Asia', decimals: 0 },
    { code: 'MNT', name: 'Mongolian Tögrög', symbol: 'MNT ', region: 'Asia', decimals: 0 },
    { code: 'MOP', name: 'Macanese Pataca', symbol: 'MOP ', region: 'Asia', decimals: 2 },
    { code: 'MRU', name: 'Mauritanian Ouguiya', symbol: 'MRU ', region: 'West Africa', decimals: 0 },
    { code: 'MUR', name: 'Mauritian Rupee', symbol: 'MUR ', region: 'East Africa', decimals: 0 },
    { code: 'MVR', name: 'Maldivian Rufiyaa', symbol: 'MVR ', region: 'Asia', decimals: 2 },
    { code: 'MWK', name: 'Malawian Kwacha', symbol: 'MWK ', region: 'East Africa', decimals: 0 },
    { code: 'MXN', name: 'Mexican Peso', symbol: 'MX$', region: 'Americas', decimals: 2 },
    { code: 'MYR', name: 'Malaysian Ringgit', symbol: 'MYR ', region: 'Asia', decimals: 2 },
    { code: 'MZN', name: 'Mozambican Metical', symbol: 'MZN ', region: 'East Africa', decimals: 0 },
    { code: 'NAD', name: 'Namibian Dollar', symbol: 'NAD ', region: 'Southern Africa', decimals: 2 },
    { code: 'NGN', name: 'Nigerian Naira', symbol: '\u20A6', region: 'West Africa', decimals: 0 },
    { code: 'NIO', name: 'Nicaraguan Córdoba', symbol: 'NIO ', region: 'Americas', decimals: 2 },
    { code: 'NOK', name: 'Norwegian Krone', symbol: 'NOK ', region: 'Europe', decimals: 2 },
    { code: 'NPR', name: 'Nepalese Rupee', symbol: 'NPR ', region: 'Asia', decimals: 0 },
    { code: 'NZD', name: 'New Zealand Dollar', symbol: 'NZ$', region: 'Oceania', decimals: 2 },
    { code: 'OMR', name: 'Omani Rial', symbol: 'OMR ', region: 'Middle East', decimals: 3 },
    { code: 'PAB', name: 'Panamanian Balboa', symbol: 'PAB ', region: 'Americas', decimals: 2 },
    { code: 'PEN', name: 'Peruvian Sol', symbol: 'PEN ', region: 'South America', decimals: 2 },
    { code: 'PGK', name: 'Papua New Guinean Kina', symbol: 'PGK ', region: 'Oceania', decimals: 2 },
    { code: 'PHP', name: 'Philippine Peso', symbol: '\u20B1', region: 'Asia', decimals: 2 },
    { code: 'PKR', name: 'Pakistani Rupee', symbol: 'PKR ', region: 'Asia', decimals: 0 },
    { code: 'PLN', name: 'Polish Złoty', symbol: 'PLN ', region: 'Europe', decimals: 2 },
    { code: 'PYG', name: 'Paraguayan Guaraní', symbol: 'PYG ', region: 'South America', decimals: 0 },
    { code: 'QAR', name: 'Qatari Riyal', symbol: 'QAR ', region: 'Middle East', decimals: 2 },
    { code: 'RON', name: 'Romanian Leu', symbol: 'RON ', region: 'Europe', decimals: 2 },
    { code: 'RSD', name: 'Serbian Dinar', symbol: 'RSD ', region: 'Europe', decimals: 0 },
    { code: 'RUB', name: 'Russian Ruble', symbol: '\u20BD', region: 'Europe', decimals: 2 },
    { code: 'RWF', name: 'Rwandan Franc', symbol: 'RWF ', region: 'East Africa', decimals: 0 },
    { code: 'SAR', name: 'Saudi Riyal', symbol: 'SAR ', region: 'Middle East', decimals: 2 },
    { code: 'SBD', name: 'Solomon Islands Dollar', symbol: 'SBD ', region: 'Oceania', decimals: 2 },
    { code: 'SCR', name: 'Seychellois Rupee', symbol: 'SCR ', region: 'East Africa', decimals: 0 },
    { code: 'SDG', name: 'Sudanese Pound', symbol: 'SDG ', region: 'Africa', decimals: 0 },
    { code: 'SEK', name: 'Swedish Krona', symbol: 'SEK ', region: 'Europe', decimals: 2 },
    { code: 'SGD', name: 'Singapore Dollar', symbol: 'S$', region: 'Asia', decimals: 2 },
    { code: 'SHP', name: 'Saint Helena Pound', symbol: 'SHP ', region: 'Africa', decimals: 2 },
    { code: 'SLE', name: 'Sierra Leonean Leone', symbol: 'SLE ', region: 'West Africa', decimals: 0 },
    { code: 'SOS', name: 'Somali Shilling', symbol: 'SOS ', region: 'East Africa', decimals: 0 },
    { code: 'SRD', name: 'Surinamese Dollar', symbol: 'SRD ', region: 'South America', decimals: 2 },
    { code: 'SSP', name: 'South Sudanese Pound', symbol: 'SSP ', region: 'East Africa', decimals: 0 },
    { code: 'STN', name: 'São Tomé and Príncipe Dobra', symbol: 'STN ', region: 'Africa', decimals: 2 },
    { code: 'SVC', name: 'Salvadoran Colón', symbol: 'SVC ', region: 'Americas', decimals: 2 },
    { code: 'SYP', name: 'Syrian Pound', symbol: 'SYP ', region: 'Middle East', decimals: 0 },
    { code: 'SZL', name: 'Swazi Lilangeni', symbol: 'SZL ', region: 'Southern Africa', decimals: 2 },
    { code: 'THB', name: 'Thai Baht', symbol: '\u0E3F', region: 'Asia', decimals: 2 },
    { code: 'TJS', name: 'Tajikistani Somoni', symbol: 'TJS ', region: 'Asia', decimals: 2 },
    { code: 'TMT', name: 'Turkmenistani Manat', symbol: 'TMT ', region: 'Asia', decimals: 2 },
    { code: 'TND', name: 'Tunisian Dinar', symbol: 'TND ', region: 'Africa', decimals: 3 },
    { code: 'TOP', name: 'Tongan Paʻanga', symbol: 'TOP ', region: 'Oceania', decimals: 2 },
    { code: 'TRY', name: 'Turkish Lira', symbol: '\u20BA', region: 'Europe', decimals: 2 },
    { code: 'TTD', name: 'Trinidad and Tobago Dollar', symbol: 'TTD ', region: 'Americas', decimals: 2 },
    { code: 'TWD', name: 'New Taiwan Dollar', symbol: 'NT$', region: 'Asia', decimals: 0 },
    { code: 'TZS', name: 'Tanzanian Shilling', symbol: 'TZS ', region: 'East Africa', decimals: 0 },
    { code: 'UAH', name: 'Ukrainian Hryvnia', symbol: '\u20B4', region: 'Europe', decimals: 2 },
    { code: 'UGX', name: 'Ugandan Shilling', symbol: 'USh ', region: 'East Africa', decimals: 0 },
    { code: 'USD', name: 'US Dollar', symbol: '$', region: 'International', decimals: 2 },
    { code: 'UYU', name: 'Uruguayan Peso', symbol: 'UYU ', region: 'South America', decimals: 2 },
    { code: 'UZS', name: 'Uzbekistani Som', symbol: 'UZS ', region: 'Asia', decimals: 0 },
    { code: 'VES', name: 'Venezuelan Bolívar', symbol: 'VES ', region: 'South America', decimals: 2 },
    { code: 'VND', name: 'Vietnamese Đồng', symbol: '\u20AB', region: 'Asia', decimals: 0 },
    { code: 'VUV', name: 'Vanuatu Vatu', symbol: 'VUV ', region: 'Oceania', decimals: 0 },
    { code: 'WST', name: 'Samoan Tala', symbol: 'WST ', region: 'Oceania', decimals: 2 },
    { code: 'XAF', name: 'Central African CFA Franc', symbol: 'FCFA ', region: 'Central Africa', decimals: 0 },
    { code: 'XCD', name: 'East Caribbean Dollar', symbol: 'XCD ', region: 'Americas', decimals: 2 },
    { code: 'XOF', name: 'West African CFA Franc', symbol: 'CFA ', region: 'West Africa', decimals: 0 },
    { code: 'XPF', name: 'CFP Franc', symbol: 'XPF ', region: 'Oceania', decimals: 0 },
    { code: 'YER', name: 'Yemeni Rial', symbol: 'YER ', region: 'Middle East', decimals: 0 },
    { code: 'ZAR', name: 'South African Rand', symbol: 'R ', region: 'Southern Africa', decimals: 2 },
    { code: 'ZMW', name: 'Zambian Kwacha', symbol: 'ZMW ', region: 'East Africa', decimals: 0 },
    { code: 'ZWL', name: 'Zimbabwean Dollar', symbol: 'ZWL ', region: 'East Africa', decimals: 0 }
  ];

  var VILLAGE_CURRENCY_FX_FALLBACK = {
    USD: 1, AED: 3.67, AFN: 71.5, ALL: 94.2, AMD: 387, ANG: 1.79, AOA: 830, ARS: 890, AUD: 1.52,
    AWG: 1.79, AZN: 1.7, BAM: 1.8, BBD: 2, BDT: 110, BGN: 1.8, BHD: 0.376, BIF: 2850, BMD: 1, BND: 1.34,
    BOB: 6.91, BRL: 5.05, BSD: 1, BTN: 83.2, BWP: 13.6, BYN: 3.27, BZD: 2, CAD: 1.36, CDF: 2750, CHF: 0.9,
    CLP: 940, CNY: 7.24, COP: 3950, CRC: 520, CUP: 24, CVE: 101, CZK: 23.1, DJF: 177.7, DKK: 6.87, DOP: 58.5,
    DZD: 134, EGP: 47.5, ERN: 15, ETB: 57.2, EUR: 0.92, FJD: 2.25, FKP: 0.79, GBP: 0.79, GEL: 2.7, GHS: 14.8,
    GIP: 0.79, GMD: 67.5, GNF: 8600, GTQ: 7.8, GYD: 209, HKD: 7.82, HNL: 24.7, HTG: 132, HUF: 360, IDR: 15800,
    ILS: 3.7, INR: 83.2, IQD: 1310, IRR: 42000, ISK: 138, JMD: 155, JOD: 0.709, JPY: 157, KES: 129, KGS: 89,
    KHR: 4100, KMF: 453, KRW: 1370, KWD: 0.307, KYD: 0.83, KZT: 450, LAK: 21000, LBP: 89500, LKR: 300,
    LRD: 190, LSL: 18.5, LYD: 4.82, MAD: 10.1, MDL: 17.8, MGA: 4500, MKD: 56.5, MMK: 2100, MNT: 3400,
    MOP: 8.05, MRU: 39.5, MUR: 46, MVR: 15.4, MWK: 1700, MXN: 17.1, MYR: 4.72, MZN: 63.8, NAD: 18.5, NGN: 1550,
    NIO: 36.6, NOK: 10.6, NPR: 133, NZD: 1.64, OMR: 0.385, PAB: 1, PEN: 3.75, PGK: 3.9, PHP: 56.5, PKR: 278,
    PLN: 4, PYG: 7300, QAR: 3.64, RON: 4.58, RSD: 108, RUB: 92, RWF: 1300, SAR: 3.75, SBD: 8.4, SCR: 13.5,
    SDG: 600, SEK: 10.5, SGD: 1.35, SHP: 0.79, SLE: 22.5, SOS: 570, SRD: 36, SSP: 1300, STN: 22.5, SVC: 8.75,
    SYP: 13000, SZL: 18.5, THB: 36.5, TJS: 10.9, TMT: 3.5, TND: 3.12, TOP: 2.35, TRY: 32.5, TTD: 6.78,
    TWD: 32.2, TZS: 2600, UAH: 40.5, UGX: 3700, UYU: 39, UZS: 12600, VES: 36.5, VND: 25400, VUV: 119,
    WST: 2.7, XAF: 603, XCD: 2.7, XOF: 603, XPF: 110, YER: 250, ZAR: 18.5, ZMW: 27, ZWL: 322
  };

  var currencyByCode = {};
  VILLAGE_FIAT_CURRENCIES.forEach(function (c) {
    currencyByCode[c.code] = c;
  });

  function getCurrencyByCode(code) {
    return currencyByCode[code] || null;
  }

  function getCurrencySymbol(code) {
    var c = getCurrencyByCode(code);
    return c ? c.symbol : (code + ' ');
  }

  function getCurrencyDecimals(code) {
    var c = getCurrencyByCode(code);
    return c ? c.decimals : 2;
  }

  function loadStoredCurrency() {
    if (global.CitizenState && typeof global.CitizenState.getCurrency === 'function') {
      var citizenCur = global.CitizenState.getCurrency();
      if (citizenCur && getCurrencyByCode(citizenCur)) return citizenCur;
    }
    try {
      var stored = localStorage.getItem(CURRENCY_STORAGE_KEY);
      if (stored && getCurrencyByCode(stored)) return stored;
    } catch (e) { /* ignore */ }
    return resolveSovereignDefaultCurrency();
  }

  function buildFxFromTzs() {
    var tzsPerUsd = VILLAGE_CURRENCY_FX_FALLBACK.TZS || 2600;
    var out = { TZS: 1 };
    Object.keys(VILLAGE_CURRENCY_FX_FALLBACK).forEach(function (code) {
      if (code === 'TZS') return;
      var usdRate = VILLAGE_CURRENCY_FX_FALLBACK[code];
      if (usdRate) out[code] = tzsPerUsd / usdRate;
    });
    return out;
  }

  function buildSymbolsMap() {
    var map = {};
    VILLAGE_FIAT_CURRENCIES.forEach(function (c) {
      map[c.code] = c.symbol;
    });
    return map;
  }

  function mergeFxExtensions() {
    var symbols = buildSymbolsMap();
    if (global.CURRENCY_SYMBOLS) Object.assign(global.CURRENCY_SYMBOLS, symbols);
    if (global.VILLAGE_MARKET_FX_FALLBACK) {
      Object.assign(global.VILLAGE_MARKET_FX_FALLBACK, VILLAGE_CURRENCY_FX_FALLBACK);
    } else {
      global.VILLAGE_MARKET_FX_FALLBACK = Object.assign({}, VILLAGE_CURRENCY_FX_FALLBACK);
    }
    var fromTzs = buildFxFromTzs();
    if (global.VILLAGE_MARKET_FX_FROM_TZS) Object.assign(global.VILLAGE_MARKET_FX_FROM_TZS, fromTzs);
    if (global.VILLAGE_MARKET_FX) Object.assign(global.VILLAGE_MARKET_FX, fromTzs);
    if (global.liveExchangeRates && !global.liveExchangeRatesReady) {
      Object.assign(global.liveExchangeRates, VILLAGE_CURRENCY_FX_FALLBACK);
    }
  }

  function convertTzsToCurrencyLocal(amountTzs, targetCode) {
    var amount = Number(amountTzs || 0);
    var target = targetCode || currentCurrency;
    if (target === 'TZS') return amount;
    var rates = (global.liveExchangeRatesReady && global.liveExchangeRates) ? global.liveExchangeRates : VILLAGE_CURRENCY_FX_FALLBACK;
    if (typeof global.getActiveMarketFxRates === 'function') rates = global.getActiveMarketFxRates();
    var tzsRate = rates.TZS || VILLAGE_CURRENCY_FX_FALLBACK.TZS;
    var targetRate = rates[target] || VILLAGE_CURRENCY_FX_FALLBACK[target];
    if (!tzsRate || !targetRate) return amount;
    return (amount / tzsRate) * targetRate;
  }

  function formatAmountForCurrency(amountTzs, code) {
    if (typeof global.formatMarketPrice === 'function') {
      var full = global.formatMarketPrice(amountTzs, code || currentCurrency);
      var sym = getCurrencySymbol(code || currentCurrency);
      if (full.indexOf(sym) === 0) return full.slice(sym.length).trim();
      return full;
    }
    var converted = convertTzsToCurrencyLocal(amountTzs, code || currentCurrency);
    var dec = getCurrencyDecimals(code || currentCurrency);
    return Number(converted || 0).toLocaleString('en', { minimumFractionDigits: dec, maximumFractionDigits: dec });
  }

  function ensureSelectHasCurrencyOption(select, code) {
    if (!select || select.querySelector('option[value="' + code + '"]')) return;
    var c = getCurrencyByCode(code);
    if (!c) return;
    var opt = document.createElement('option');
    opt.value = c.code;
    opt.textContent = c.code + ' — ' + c.name;
    select.appendChild(opt);
  }

  function populateCurrencySelect(select, compact) {
    if (!select || select.dataset.currenciesPopulated === '1') return;
    select.innerHTML = '';
    VILLAGE_FIAT_CURRENCIES.slice().sort(function (a, b) {
      return a.code.localeCompare(b.code);
    }).forEach(function (c) {
      var option = document.createElement('option');
      option.value = c.code;
      option.textContent = compact ? c.code : (c.code + ' — ' + c.name);
      select.appendChild(option);
    });
    select.dataset.currenciesPopulated = '1';
  }

  function syncCurrencySelects() {
    var globalSel = document.getElementById('global-currency-select');
    if (globalSel && globalSel.value !== currentCurrency) globalSel.value = currentCurrency;
    var marketSel = document.getElementById('marketGlobalCurrencySelect');
    if (marketSel) {
      ensureSelectHasCurrencyOption(marketSel, currentCurrency);
      marketSel.value = currentCurrency;
    }
  }

  function updateFeedMarketCards() {
    document.querySelectorAll('.market-card[data-price-tzs]').forEach(function (card) {
      var tzs = parseInt(card.getAttribute('data-price-tzs'), 10);
      if (!isFinite(tzs)) return;
      var priceEl = card.querySelector('.market-card__price');
      var curEl = card.querySelector('.market-card__currency');
      if (priceEl) priceEl.textContent = formatAmountForCurrency(tzs, currentCurrency);
      if (curEl) curEl.textContent = currentCurrency;
    });
  }

  function updateCurrencyLabels() {
    document.querySelectorAll('.listing-panel__currency-tag').forEach(function (el) {
      el.textContent = currentCurrency;
    });
    ['payDepositCurrencyLabel', 'paySendCurrencyLabel', 'paySwapCurrencyLabel'].forEach(function (id) {
      var el = document.getElementById(id);
      if (el) el.textContent = currentCurrency;
    });
  }

  function refreshAllPricingDisplays() {
    mergeFxExtensions();
    global.VillageAppSettings = global.VillageAppSettings || {};
    global.VillageAppSettings.currency = currentCurrency;
    if (global.VillageAppSettings.wallet) global.VillageAppSettings.wallet.currency = currentCurrency;
    if (global.villageMarketState) global.villageMarketState.currency = currentCurrency;
    if (global.villagePayState) global.villagePayState.displayCurrency = currentCurrency;

    syncCurrencySelects();

    if (typeof global.onMarketGlobalCurrencyChange === 'function') {
      global.onMarketGlobalCurrencyChange(currentCurrency);
    } else {
      if (typeof global.renderMarketGrid === 'function') global.renderMarketGrid();
      if (typeof global.updateMarketCartBar === 'function') global.updateMarketCartBar();
    }

    if (typeof global.renderPayWalletHero === 'function') global.renderPayWalletHero();
    updateFeedMarketCards();
    updateCurrencyLabels();

    document.dispatchEvent(new CustomEvent('village:currency-changed', { detail: { currency: currentCurrency } }));
  }

  function setGlobalCurrency(code, options) {
    var c = getCurrencyByCode(code);
    if (!c) return;
    currentCurrency = c.code;
    try { localStorage.setItem(CURRENCY_STORAGE_KEY, currentCurrency); } catch (e) { /* ignore */ }
    if (global.CitizenState && typeof global.CitizenState.setCurrency === 'function') {
      global.CitizenState.setCurrency(currentCurrency);
    }
    refreshAllPricingDisplays();
    if (!options || !options.silent) {
      console.log('[VillageCurrency] Display currency switched to:', currentCurrency);
    }
  }

  function initGlobalCurrencySelect() {
    var select = document.getElementById('global-currency-select');
    if (!select || select.dataset.currencyBound === '1') return;

    populateCurrencySelect(select, false);
    currentCurrency = loadStoredCurrency();
    VILLAGE_DEFAULT_CURRENCY = currentCurrency;
    if (select.querySelector('option[value="' + currentCurrency + '"]')) {
      select.value = currentCurrency;
    } else {
      select.value = VILLAGE_DEFAULT_CURRENCY;
      currentCurrency = VILLAGE_DEFAULT_CURRENCY;
    }

    select.dataset.currencyBound = '1';
    select.addEventListener('change', function () {
      setGlobalCurrency(select.value || VILLAGE_DEFAULT_CURRENCY);
    });

    var marketSel = document.getElementById('marketGlobalCurrencySelect');
    if (marketSel && marketSel.dataset.currenciesPopulated !== '1') {
      populateCurrencySelect(marketSel, true);
    }

    mergeFxExtensions();
    refreshAllPricingDisplays();
    console.log('[VillageCurrency] Global fiat selector ready —', VILLAGE_FIAT_CURRENCIES.length, 'currencies (sovereign default:', currentCurrency + ').');
  }

  function initCitizenSovereignty() {
    if (!global.CitizenState) return Promise.resolve();
    return global.CitizenState.hydrate().then(function () {
      if (global.CitizenLedger) return global.CitizenLedger.open();
    }).then(function () {
      global.CitizenState.syncCitizenTags();
      console.log('[VillageApp] Citizen sovereignty engine online.');
    });
  }

  var VILLAGE_COUNTRIES = [
    { code: 'AF', name: 'Afghanistan' },
    { code: 'AL', name: 'Albania' },
    { code: 'DZ', name: 'Algeria' },
    { code: 'AD', name: 'Andorra' },
    { code: 'AO', name: 'Angola' },
    { code: 'AG', name: 'Antigua and Barbuda' },
    { code: 'AR', name: 'Argentina' },
    { code: 'AM', name: 'Armenia' },
    { code: 'AU', name: 'Australia' },
    { code: 'AT', name: 'Austria' },
    { code: 'AZ', name: 'Azerbaijan' },
    { code: 'BS', name: 'Bahamas' },
    { code: 'BH', name: 'Bahrain' },
    { code: 'BD', name: 'Bangladesh' },
    { code: 'BB', name: 'Barbados' },
    { code: 'BY', name: 'Belarus' },
    { code: 'BE', name: 'Belgium' },
    { code: 'BZ', name: 'Belize' },
    { code: 'BJ', name: 'Benin' },
    { code: 'BT', name: 'Bhutan' },
    { code: 'BO', name: 'Bolivia' },
    { code: 'BA', name: 'Bosnia and Herzegovina' },
    { code: 'BW', name: 'Botswana' },
    { code: 'BR', name: 'Brazil' },
    { code: 'BN', name: 'Brunei' },
    { code: 'BG', name: 'Bulgaria' },
    { code: 'BF', name: 'Burkina Faso' },
    { code: 'BI', name: 'Burundi' },
    { code: 'CV', name: 'Cabo Verde' },
    { code: 'KH', name: 'Cambodia' },
    { code: 'CM', name: 'Cameroon' },
    { code: 'CA', name: 'Canada' },
    { code: 'CF', name: 'Central African Republic' },
    { code: 'TD', name: 'Chad' },
    { code: 'CL', name: 'Chile' },
    { code: 'CN', name: 'China' },
    { code: 'CO', name: 'Colombia' },
    { code: 'KM', name: 'Comoros' },
    { code: 'CG', name: 'Congo' },
    { code: 'CD', name: 'Congo (Democratic Republic)' },
    { code: 'CR', name: 'Costa Rica' },
    { code: 'CI', name: "Côte d'Ivoire" },
    { code: 'HR', name: 'Croatia' },
    { code: 'CU', name: 'Cuba' },
    { code: 'CY', name: 'Cyprus' },
    { code: 'CZ', name: 'Czech Republic' },
    { code: 'DK', name: 'Denmark' },
    { code: 'DJ', name: 'Djibouti' },
    { code: 'DM', name: 'Dominica' },
    { code: 'DO', name: 'Dominican Republic' },
    { code: 'EC', name: 'Ecuador' },
    { code: 'EG', name: 'Egypt' },
    { code: 'SV', name: 'El Salvador' },
    { code: 'GQ', name: 'Equatorial Guinea' },
    { code: 'ER', name: 'Eritrea' },
    { code: 'EE', name: 'Estonia' },
    { code: 'SZ', name: 'Eswatini' },
    { code: 'ET', name: 'Ethiopia' },
    { code: 'FJ', name: 'Fiji' },
    { code: 'FI', name: 'Finland' },
    { code: 'FR', name: 'France' },
    { code: 'GA', name: 'Gabon' },
    { code: 'GM', name: 'Gambia' },
    { code: 'GE', name: 'Georgia' },
    { code: 'DE', name: 'Germany' },
    { code: 'GH', name: 'Ghana' },
    { code: 'GR', name: 'Greece' },
    { code: 'GD', name: 'Grenada' },
    { code: 'GT', name: 'Guatemala' },
    { code: 'GN', name: 'Guinea' },
    { code: 'GW', name: 'Guinea-Bissau' },
    { code: 'GY', name: 'Guyana' },
    { code: 'HT', name: 'Haiti' },
    { code: 'HN', name: 'Honduras' },
    { code: 'HU', name: 'Hungary' },
    { code: 'IS', name: 'Iceland' },
    { code: 'IN', name: 'India' },
    { code: 'ID', name: 'Indonesia' },
    { code: 'IR', name: 'Iran' },
    { code: 'IQ', name: 'Iraq' },
    { code: 'IE', name: 'Ireland' },
    { code: 'IL', name: 'Israel' },
    { code: 'IT', name: 'Italy' },
    { code: 'JM', name: 'Jamaica' },
    { code: 'JP', name: 'Japan' },
    { code: 'JO', name: 'Jordan' },
    { code: 'KZ', name: 'Kazakhstan' },
    { code: 'KE', name: 'Kenya' },
    { code: 'KI', name: 'Kiribati' },
    { code: 'KW', name: 'Kuwait' },
    { code: 'KG', name: 'Kyrgyzstan' },
    { code: 'LA', name: 'Laos' },
    { code: 'LV', name: 'Latvia' },
    { code: 'LB', name: 'Lebanon' },
    { code: 'LS', name: 'Lesotho' },
    { code: 'LR', name: 'Liberia' },
    { code: 'LY', name: 'Libya' },
    { code: 'LI', name: 'Liechtenstein' },
    { code: 'LT', name: 'Lithuania' },
    { code: 'LU', name: 'Luxembourg' },
    { code: 'MG', name: 'Madagascar' },
    { code: 'MW', name: 'Malawi' },
    { code: 'MY', name: 'Malaysia' },
    { code: 'MV', name: 'Maldives' },
    { code: 'ML', name: 'Mali' },
    { code: 'MT', name: 'Malta' },
    { code: 'MH', name: 'Marshall Islands' },
    { code: 'MR', name: 'Mauritania' },
    { code: 'MU', name: 'Mauritius' },
    { code: 'MX', name: 'Mexico' },
    { code: 'FM', name: 'Micronesia' },
    { code: 'MD', name: 'Moldova' },
    { code: 'MC', name: 'Monaco' },
    { code: 'MN', name: 'Mongolia' },
    { code: 'ME', name: 'Montenegro' },
    { code: 'MA', name: 'Morocco' },
    { code: 'MZ', name: 'Mozambique' },
    { code: 'MM', name: 'Myanmar' },
    { code: 'NA', name: 'Namibia' },
    { code: 'NR', name: 'Nauru' },
    { code: 'NP', name: 'Nepal' },
    { code: 'NL', name: 'Netherlands' },
    { code: 'NZ', name: 'New Zealand' },
    { code: 'NI', name: 'Nicaragua' },
    { code: 'NE', name: 'Niger' },
    { code: 'NG', name: 'Nigeria' },
    { code: 'KP', name: 'North Korea' },
    { code: 'MK', name: 'North Macedonia' },
    { code: 'NO', name: 'Norway' },
    { code: 'OM', name: 'Oman' },
    { code: 'PK', name: 'Pakistan' },
    { code: 'PW', name: 'Palau' },
    { code: 'PS', name: 'Palestine' },
    { code: 'PA', name: 'Panama' },
    { code: 'PG', name: 'Papua New Guinea' },
    { code: 'PY', name: 'Paraguay' },
    { code: 'PE', name: 'Peru' },
    { code: 'PH', name: 'Philippines' },
    { code: 'PL', name: 'Poland' },
    { code: 'PT', name: 'Portugal' },
    { code: 'QA', name: 'Qatar' },
    { code: 'RO', name: 'Romania' },
    { code: 'RU', name: 'Russia' },
    { code: 'RW', name: 'Rwanda' },
    { code: 'KN', name: 'Saint Kitts and Nevis' },
    { code: 'LC', name: 'Saint Lucia' },
    { code: 'VC', name: 'Saint Vincent and the Grenadines' },
    { code: 'WS', name: 'Samoa' },
    { code: 'SM', name: 'San Marino' },
    { code: 'ST', name: 'Sao Tome and Principe' },
    { code: 'SA', name: 'Saudi Arabia' },
    { code: 'SN', name: 'Senegal' },
    { code: 'RS', name: 'Serbia' },
    { code: 'SC', name: 'Seychelles' },
    { code: 'SL', name: 'Sierra Leone' },
    { code: 'SG', name: 'Singapore' },
    { code: 'SK', name: 'Slovakia' },
    { code: 'SI', name: 'Slovenia' },
    { code: 'SB', name: 'Solomon Islands' },
    { code: 'SO', name: 'Somalia' },
    { code: 'ZA', name: 'South Africa' },
    { code: 'KR', name: 'South Korea' },
    { code: 'SS', name: 'South Sudan' },
    { code: 'ES', name: 'Spain' },
    { code: 'LK', name: 'Sri Lanka' },
    { code: 'SD', name: 'Sudan' },
    { code: 'SR', name: 'Suriname' },
    { code: 'SE', name: 'Sweden' },
    { code: 'CH', name: 'Switzerland' },
    { code: 'SY', name: 'Syria' },
    { code: 'TW', name: 'Taiwan' },
    { code: 'TJ', name: 'Tajikistan' },
    { code: 'TZ', name: 'Tanzania' },
    { code: 'TH', name: 'Thailand' },
    { code: 'TL', name: 'Timor-Leste' },
    { code: 'TG', name: 'Togo' },
    { code: 'TO', name: 'Tonga' },
    { code: 'TT', name: 'Trinidad and Tobago' },
    { code: 'TN', name: 'Tunisia' },
    { code: 'TR', name: 'Turkey' },
    { code: 'TM', name: 'Turkmenistan' },
    { code: 'TV', name: 'Tuvalu' },
    { code: 'UG', name: 'Uganda' },
    { code: 'UA', name: 'Ukraine' },
    { code: 'AE', name: 'United Arab Emirates' },
    { code: 'GB', name: 'United Kingdom' },
    { code: 'US', name: 'United States' },
    { code: 'UY', name: 'Uruguay' },
    { code: 'UZ', name: 'Uzbekistan' },
    { code: 'VU', name: 'Vanuatu' },
    { code: 'VA', name: 'Vatican City' },
    { code: 'VE', name: 'Venezuela' },
    { code: 'VN', name: 'Vietnam' },
    { code: 'YE', name: 'Yemen' },
    { code: 'ZM', name: 'Zambia' },
    { code: 'ZW', name: 'Zimbabwe' }
  ];

  var VILLAGE_DEFAULT_COUNTRY = '';

  function initCountrySelect() {
    var select = document.getElementById('country-select');
    if (!select || select.dataset.countriesPopulated === '1') return;

    var placeholder = document.createElement('option');
    placeholder.value = '';
    placeholder.disabled = true;
    placeholder.selected = true;
    placeholder.textContent = 'Select your nation';

    select.innerHTML = '';
    select.appendChild(placeholder);

    VILLAGE_COUNTRIES.forEach(function (country) {
      var option = document.createElement('option');
      option.value = country.code;
      option.textContent = country.name;
      select.appendChild(option);
    });

    var preferred = global.CitizenState ? global.CitizenState.getCountry() : VILLAGE_DEFAULT_COUNTRY;
    if (preferred && select.querySelector('option[value="' + preferred + '"]')) {
      select.value = preferred;
    }

    if (!select.dataset.citizenCountryBound) {
      select.dataset.citizenCountryBound = '1';
      select.addEventListener('change', function () {
        if (global.CitizenState && select.value) {
          global.CitizenState.setCountry(select.value);
        }
      });
    }

    select.dataset.countriesPopulated = '1';
    console.log('[VillageApp] Nation registry populated —', VILLAGE_COUNTRIES.length, 'sovereign states (no centralized default).');
  }

  function bootstrap() {
    global.VillageModules = global.VillageModules || {};
    currentLang = loadStoredLanguage();
    initCitizenSovereignty().then(function () {
      initLanguageSelector();
      initGlobalCurrencySelect();
      initCountrySelect();
      applyTranslations();
      initTopNavigation();
      initViewPanelBindings();
      switchToView('social');
      console.log('[VillageApp] Sovereign citizen engine ready —', SUPPORTED.length, 'languages loaded.');
      document.dispatchEvent(new CustomEvent('village:modules-ready'));
    });
  }

  function onAppReady() {
    initCitizenSovereignty().then(function () {
      initTopNavigation();
      initLanguageSelector();
      initGlobalCurrencySelect();
      initCountrySelect();
      mergeFxExtensions();
      refreshAllPricingDisplays();
      applyTranslations();
      initViewPanelBindings();
      syncProfileDropdownMeta();
      if (global.VillageWallet && typeof global.VillageWallet.activate === 'function') {
        global.VillageWallet.activate();
      }
    });
  }

  global.VillageI18n = {
    t: t,
    setLanguage: setLanguage,
    apply: applyTranslations,
    setMainViewI18n: setMainViewI18n,
    getLanguage: function () { return currentLang; },
    SUPPORTED: SUPPORTED,
    LANGUAGE_LABELS: LANGUAGE_LABELS,
    TRANSLATIONS: TRANSLATIONS,
    onAppReady: onAppReady
  };

  global.VillageApp = {
    bootstrap: bootstrap,
    navigateHome: navigateHome,
    navigateMessages: navigateMessages,
    navigateWallet: navigateWallet,
    navigateProfile: navigateProfile,
    toggleProfileDropdown: toggleProfileDropdown,
    closeProfileDropdown: closeProfileDropdown,
    showChatPanel: showChatPanel,
    showWalletPanel: showWalletPanel,
    switchToView: switchToView,
    initCountrySelect: initCountrySelect,
    initGlobalCurrencySelect: initGlobalCurrencySelect,
    setGlobalCurrency: setGlobalCurrency,
    initCitizenSovereignty: initCitizenSovereignty,
    syncCitizenUI: syncProfileDropdownMeta
  };

  global.VillageCountries = {
    list: VILLAGE_COUNTRIES,
    defaultCode: VILLAGE_DEFAULT_COUNTRY,
    init: initCountrySelect
  };

  global.VillageCurrency = {
    list: VILLAGE_FIAT_CURRENCIES,
    fxFallback: VILLAGE_CURRENCY_FX_FALLBACK,
    defaultCode: VILLAGE_DEFAULT_CURRENCY,
    getCurrent: function () { return currentCurrency; },
    getByCode: getCurrencyByCode,
    getSymbol: getCurrencySymbol,
    convertFromTzs: convertTzsToCurrencyLocal,
    formatFromTzs: formatAmountForCurrency,
    set: setGlobalCurrency,
    refresh: refreshAllPricingDisplays,
    mergeFx: mergeFxExtensions,
    init: initGlobalCurrencySelect
  };

  document.addEventListener('village:app-ready', onAppReady);

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootstrap);
  } else {
    bootstrap();
  }
})(window);
