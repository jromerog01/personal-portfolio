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

  // A clicked anchor lands at its scroll-margin-top, so the marker must sit at
  // that same line (plus a pixel of slack) or the previous section still wins.
  const markerOffset = (section) =>
    parseFloat(getComputedStyle(section).scrollMarginTop) || 0;

  const updateActiveSection = () => {
    // At the bottom of the page the last section may never reach the marker.
    const atBottom =
      window.innerHeight + window.scrollY >= document.body.scrollHeight - 2;
    if (atBottom) {
      setActiveLink(sections[sections.length - 1].link);
      return;
    }

    let active = sections[0];
    sections.forEach((item) => {
      const top = item.section.getBoundingClientRect().top + window.scrollY;
      if (top <= window.scrollY + markerOffset(item.section) + 1) {
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

  // Hold the clicked link active until the smooth scroll settles, so the
  // intermediate sections it flies past don't steal the highlight.
  let lockUntil = 0;
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      setActiveLink(link);
      lockUntil = Date.now() + 800;
    });
  });

  const onScroll = () => {
    if (Date.now() < lockUntil) return;
    requestUpdate();
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', requestUpdate);
  window.addEventListener('load', requestUpdate);
  updateActiveSection();
}
