/*
  Mobile site navigation
*/
const siteNav = document.getElementById('SiteNav');

if (siteNav) {
  const navToggler = document.getElementById('NavToggler');
  const siteBody = document.getElementById('SiteBody');
  const siteHeader = document.getElementById('SiteHeader');
  const allMenus = siteNav.querySelectorAll('[data-menu-list]');
  const navMenuTriggers = document.querySelectorAll('[data-menu-trigger]');

  const closeAllMenus = () => {
    allMenus.forEach(menu => menu.classList.replace('flex', 'hidden'));
    navMenuTriggers.forEach(trigger => trigger.setAttribute('aria-expanded', 'false'));
  };

  navToggler.addEventListener('click', () => {
    const isOpen = siteNav.classList.contains('is-open');
    [siteNav, siteHeader, navToggler].forEach(el => {
      el.classList.toggle('is-open', !isOpen);
      el.classList.toggle('is-closed', isOpen);
    });
    siteBody.classList.toggle('mobile-nav-open');
  });

  navMenuTriggers.forEach(trigger => {
    trigger.addEventListener('click', (evt) => {
      evt.preventDefault();
      const target = trigger.nextElementSibling;
      const willOpen = target.classList.contains('hidden');

      closeAllMenus();

      if (willOpen) {
        target.classList.replace('hidden', 'flex');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });

  document.addEventListener('click', (evt) => {
    if (!siteNav.contains(evt.target) && evt.target !== navToggler) {
      closeAllMenus();
    }
  });
}
