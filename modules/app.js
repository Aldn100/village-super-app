/**
 * Village App — i18n engine, top navigation wiring, and bootstrap.
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
      'nav.wallet': 'Wallet',
      'nav.profile': 'Profile',
      'nav.language': 'Language',
      'search.placeholder': 'Search citizens, products, services',
      'main.title.social': 'Your Village Feed',
      'main.subtitle.social': 'Connect, share, and discover — all in one global super-app.',
      'main.title.marketplace': 'Village Marketplace',
      'main.subtitle.marketplace': 'Buy and sell across your community — prices in TZS or USD by region.',
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
      'sidebar.signedInAs': 'Signed in as',
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
    var nameSrc = document.getElementById('sidebarUserName');
    var roleSrc = document.getElementById('sidebarUserRole');
    var avatarSrc = document.getElementById('topnavAvatar');
    var nameDst = document.getElementById('topnavDropdownName');
    var roleDst = document.getElementById('topnavDropdownRole');
    var avatarDst = document.getElementById('topnavDropdownAvatar');
    if (nameSrc && nameDst) nameDst.textContent = nameSrc.textContent;
    if (roleSrc && roleDst) roleDst.textContent = roleSrc.textContent;
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

  var VILLAGE_DEFAULT_COUNTRY = 'TZ';

  function initCountrySelect() {
    var select = document.getElementById('country-select');
    if (!select || select.dataset.countriesPopulated === '1') return;

    var placeholder = document.createElement('option');
    placeholder.value = '';
    placeholder.disabled = true;
    placeholder.textContent = 'Select country';

    select.innerHTML = '';
    select.appendChild(placeholder);

    VILLAGE_COUNTRIES.forEach(function (country) {
      var option = document.createElement('option');
      option.value = country.code;
      option.textContent = country.name;
      select.appendChild(option);
    });

    if (select.querySelector('option[value="' + VILLAGE_DEFAULT_COUNTRY + '"]')) {
      select.value = VILLAGE_DEFAULT_COUNTRY;
    }

    select.dataset.countriesPopulated = '1';
    console.log('[VillageApp] Country dropdown populated with', VILLAGE_COUNTRIES.length, 'nations (default: Tanzania).');
  }

  function bootstrap() {
    global.VillageModules = global.VillageModules || {};
    currentLang = loadStoredLanguage();
    initLanguageSelector();
    initCountrySelect();
    applyTranslations();
    initTopNavigation();
    initViewPanelBindings();
    switchToView('social');

    console.log('[VillageApp] i18n engine ready —', SUPPORTED.length, 'languages loaded.');
    document.dispatchEvent(new CustomEvent('village:modules-ready'));
  }

  function onAppReady() {
    initTopNavigation();
    initLanguageSelector();
    initCountrySelect();
    applyTranslations();
    initViewPanelBindings();
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
    initCountrySelect: initCountrySelect
  };

  global.VillageCountries = {
    list: VILLAGE_COUNTRIES,
    defaultCode: VILLAGE_DEFAULT_COUNTRY,
    init: initCountrySelect
  };

  document.addEventListener('village:app-ready', onAppReady);

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootstrap);
  } else {
    bootstrap();
  }
})(window);
