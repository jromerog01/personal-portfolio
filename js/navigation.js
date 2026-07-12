const floatingNav = document.getElementById('floating-nav');

if (floatingNav) {
  const navLinks = Array.from(floatingNav.querySelectorAll('.nav-link[href^="#"]'));
  const sections = navLinks
    .map((link) => {
      const id = link.getAttribute('href').slice(1);
      const section = id ? document.getElementById(id) : null;
      return section ? { link, section } : null;
    })
    .filter(Boolean);

  const setActiveLink = (activeLink) => {
    navLinks.forEach((link) => {
      if (link === activeLink) {
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  };

  const updateActiveSection = () => {
    const navBottom = floatingNav.getBoundingClientRect().bottom;
    const marker = window.scrollY + navBottom + 24;
    let active = sections[0];

    sections.forEach((item) => {
      if (item.section.getBoundingClientRect().top + window.scrollY <= marker) {
        active = item;
      }
    });

    if (active) setActiveLink(active.link);
  };

  let ticking = false;
  const requestUpdate = () => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(() => {
      updateActiveSection();
      ticking = false;
    });
  };

  navLinks.forEach((link) => {
    link.addEventListener('click', () => setActiveLink(link));
  });

  window.addEventListener('scroll', requestUpdate, { passive: true });
  window.addEventListener('resize', requestUpdate);
  window.addEventListener('load', requestUpdate);
  updateActiveSection();
}
