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

  // The probe line sits a third down the viewport: a section becomes current
  // once it reaches that line, not when its edge grazes the nav. It must also
  // clear scroll-margin-top, or a freshly clicked anchor lands below the line
  // and the previous section stays highlighted.
  const probeLine = () => {
    const margins = sections.map(
      ({ section }) => parseFloat(getComputedStyle(section).scrollMarginTop) || 0
    );
    return Math.max(Math.max(...margins) + 1, window.innerHeight / 3);
  };

  const updateActiveSection = () => {
    if (!sections.length) return;

    // The last section may be too short to ever reach the probe line.
    const atBottom =
      window.innerHeight + window.scrollY >= document.body.scrollHeight - 2;
    if (atBottom) {
      setActiveLink(sections[sections.length - 1].link);
      return;
    }

    const probe = window.scrollY + probeLine();
    let active = sections[0];

    // Sections are ordered by position, so the last one starting above the
    // probe is the one being read. (#proyectos is nested inside #formacion,
    // but its start still comes later, so ordering by start still holds.)
    sections.forEach((item) => {
      const top = item.section.getBoundingClientRect().top + window.scrollY;
      if (top <= probe) active = item;
    });

    setActiveLink(active.link);
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

  // Hold the clicked link until the smooth scroll settles, so the sections it
  // flies past don't steal the highlight on the way there.
  let lockUntil = 0;
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      setActiveLink(link);
      lockUntil = Date.now() + 800;
    });
  });

  window.addEventListener(
    'scroll',
    () => {
      if (Date.now() < lockUntil) return;
      requestUpdate();
    },
    { passive: true }
  );
  window.addEventListener('resize', requestUpdate);
  window.addEventListener('load', requestUpdate);
  updateActiveSection();
}
