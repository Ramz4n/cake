document.getElementById('year').textContent = new Date().getFullYear();

const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');

navToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

const galleryFilters = document.getElementById('galleryFilters');
const galleryPhotos = document.querySelectorAll('.gallery__photo');

galleryFilters.addEventListener('click', (event) => {
  const button = event.target.closest('.gallery__filter');
  if (!button) return;

  galleryFilters.querySelectorAll('.gallery__filter').forEach((btn) => {
    btn.classList.toggle('is-active', btn === button);
  });

  const filter = button.dataset.filter;
  galleryPhotos.forEach((photo) => {
    const matches = filter === 'all' || photo.dataset.category === filter;
    photo.classList.toggle('is-hidden', !matches);
  });
});

const translations = {
  ru: {
    'nav.about': 'О мастере',
    'nav.works': 'Работы',
    'nav.contacts': 'Контакты',
    'nav.toggle': 'Открыть меню',
    'hero.photoAlt': 'Портрет кондитера Ованеса',
    'hero.lead': 'Торты, пирожные, пироги и капкейки ручной работы — на день рождения, свадьбу или просто для радости.',
    'hero.text': 'Я Ованес, и с Rubenyan\'s pastry ваш праздник точно будет вкусным. Тортами и выпечкой занимаюсь с 17 лет — и за это время ни разу не разлюбил своё дело, а значит, в каждый торт вкладываю не только хорошие продукты, но и настоящее удовольствие от работы. Учту любые пожелания по вкусу и оформлению — так, чтобы захотелось заказать ещё.',
    'hero.cta1': 'Заказать торт',
    'hero.cta2': 'Смотреть работы',
    'works.title': 'Работы',
    'filter.all': 'Все',
    'filter.tort': 'Торты',
    'filter.pirozhnoe': 'Пирожные',
    'filter.pirog': 'Пироги',
    'filter.kapkeyk': 'Капкейки',
    'photo.tort': 'Торт на заказ',
    'photo.pirozhnoe': 'Пирожные ассорти',
    'photo.pirog': 'Домашний пирог',
    'photo.kapkeyk': 'Праздничные капкейки',
    'contacts.title': 'Контакты',
    'contacts.text': 'Свяжитесь любым удобным способом — обсудим ваш торт.'
  },
  hy: {
    'nav.about': 'Վարպետի մասին',
    'nav.works': 'Աշխատանքներ',
    'nav.contacts': 'Կապ',
    'nav.toggle': 'Բացել ընտրացանկը',
    'hero.photoAlt': 'Հրուշակագործ Հովհաննեսի դիմանկարը',
    'hero.lead': 'Ձեռագործ տորթեր, խմորեղեն, կարկանդակներ և կափքեյքեր՝ ծննդյան օրվա, հարսանիքի կամ պարզապես ուրախության համար։',
    'hero.text': 'Ես Հովհաննեսն եմ, և Rubenyan\'s pastry-ի հետ ձեր տոնը իսկապես համեղ կլինի։ Տորթեր և խմորեղեն պատրաստում եմ 17 տարեկանից, և այս ընթացքում երբեք չեմ դադարել սիրել իմ գործը՝ նշանակում է, որ յուրաքանչյուր տորթի մեջ դնում եմ ոչ միայն որակյալ մթերքներ, այլև իրական հաճույք աշխատանքից։ Հաշվի կառնեմ ցանկացած ցանկություն՝ համի և ձևավորման հարցում, որպեսզի ուզենաք պատվիրել կրկին։',
    'hero.cta1': 'Պատվիրել տորթ',
    'hero.cta2': 'Դիտել աշխատանքները',
    'works.title': 'Աշխատանքներ',
    'filter.all': 'Բոլորը',
    'filter.tort': 'Տորթեր',
    'filter.pirozhnoe': 'Խմորեղեն',
    'filter.pirog': 'Կարկանդակներ',
    'filter.kapkeyk': 'Կափքեյքեր',
    'photo.tort': 'Պատվերով տորթ',
    'photo.pirozhnoe': 'Խմորեղենի տեսականի',
    'photo.pirog': 'Տնական կարկանդակ',
    'photo.kapkeyk': 'Տոնական կափքեյքեր',
    'contacts.title': 'Կապ',
    'contacts.text': 'Կապվեք ցանկացած հարմար եղանակով՝ քննարկենք ձեր տորթը։'
  },
  en: {
    'nav.about': 'About',
    'nav.works': 'Works',
    'nav.contacts': 'Contacts',
    'nav.toggle': 'Open menu',
    'hero.photoAlt': 'Portrait of pastry chef Hovhannes',
    'hero.lead': 'Handmade cakes, pastries, pies and cupcakes — for a birthday, a wedding, or just because.',
    'hero.text': 'I\'m Hovhannes, and with Rubenyan\'s pastry your celebration will truly taste good. I\'ve been making cakes and pastries since I was 17 — and I still love every bit of it, which means every cake gets not just quality ingredients, but real care. I\'ll take care of any wishes for taste and design, so you\'ll want to order again.',
    'hero.cta1': 'Order a cake',
    'hero.cta2': 'View works',
    'works.title': 'Works',
    'filter.all': 'All',
    'filter.tort': 'Cakes',
    'filter.pirozhnoe': 'Pastries',
    'filter.pirog': 'Pies',
    'filter.kapkeyk': 'Cupcakes',
    'photo.tort': 'Custom cake',
    'photo.pirozhnoe': 'Assorted pastries',
    'photo.pirog': 'Homemade pie',
    'photo.kapkeyk': 'Festive cupcakes',
    'contacts.title': 'Contacts',
    'contacts.text': 'Reach out any way that\'s convenient — let\'s talk about your cake.'
  }
};

const langSwitch = document.getElementById('langSwitch');
const supportedLangs = Object.keys(translations);

function applyLanguage(lang) {
  const dict = translations[lang] || translations.ru;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (dict[key]) el.textContent = dict[key];
  });

  document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
    const key = el.dataset.i18nAlt;
    if (dict[key]) el.alt = dict[key];
  });

  document.querySelectorAll('[data-i18n-aria-label]').forEach((el) => {
    const key = el.dataset.i18nAriaLabel;
    if (dict[key]) el.setAttribute('aria-label', dict[key]);
  });

  langSwitch.querySelectorAll('button').forEach((btn) => {
    btn.classList.toggle('is-active', btn.dataset.lang === lang);
  });

  document.documentElement.lang = lang;
  localStorage.setItem('lang', lang);
}

langSwitch.addEventListener('click', (event) => {
  const button = event.target.closest('button[data-lang]');
  if (!button) return;
  applyLanguage(button.dataset.lang);
});

const savedLang = localStorage.getItem('lang');
applyLanguage(supportedLangs.includes(savedLang) ? savedLang : 'ru');
