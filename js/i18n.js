const translations = {
  es: {
    nav_inicio: "Inicio",
    nav_acerca: "Acerca",
    nav_proyectos: "Proyectos",
    nav_servicios: "Servicios",
    hero_greeting: "Hola, soy",
    hero_desc:
      'Soy estudiante de 7º semestre de <strong class="text-gray-800 dark:text-gray-100 font-semibold">Ciencias de la Computación</strong> en la UNAM, con enfoque en backend y desarrollo de software escalable. Comprometido con la calidad del código y el aprendizaje continuo.',
    btn_hire: "Contratar",
    btn_cv: "Descargar CV",
    label_follow: "Contáctame",
    about_heading: "Acerca de Mí",
    about_subtitle: "Transformando ideas en experiencias digitales",
    about_bio1:
      "Estudiante de 7º semestre de Ciencias de la Computación en la UNAM, con experiencia en desarrollo de software y enfoque en la resolución de problemas complejos.",
    about_bio2:
      "Interesado en áreas de backend, desarrollo de sistemas y creación de software escalable. Comprometido con la calidad del código, el aprendizaje continuo y el trabajo en equipo.",
    lang_english: "Inglés — B2 (Upper Intermediate)",
    btn_view_projects: "Ver Proyectos",
    formacion_heading: "Formación Académica",
    formacion_subtitle: "Proyectos académicos y trayectoria técnica",
    degree_title: "Licenciatura en Ciencias de la Computación",
    degree_gpa: "Promedio: 9.58/10 · Avance en créditos: 71%",
    degree_dates: "Ago 2023 — Presente",
    prev_edu_label: "Educación previa",
    prev_edu_title: "Estudio Técnico Especializado en Computación",
    badge_featured: "Proyecto Principal",
    stockflow_desc:
      "Gestión de inventarios: proveedores, productos y stock, funcionando además como punto de venta (POS) con registro de ventas e historial de movimientos",
    btn_view_code: "Ver código",
    btn_view_demo: "Ver demo",
    homelab_title: "Servidor Personal",
    homelab_desc:
      "Autoalojo este portafolio y mis proyectos personales (incluyendo StockFlow) mediante Docker, para poder probarlos en vivo. También funciona como el cerebro de mi hogar inteligente con Home Assistant.",
    label_backend: "Backend",
    eventos_title: "Sistema Backend de Gestión de Eventos Multirrol",
    eventos_desc:
      "Conexión a PostgreSQL vía JDBC, operaciones CRUD completas sobre las tablas de la base de datos",
    label_cliente_servidor: "Cliente-Servidor",
    tienda_title: "Tienda en Línea Multilenguaje",
    tienda_desc:
      "Arquitectura cliente-servidor con RMI, internacionalización dinámica según nacionalidad del usuario, carrito de compras dinámico",
    label_mvc: "MVC",
    biblioteca_title: "Gestor de Préstamos para Biblioteca",
    biblioteca_desc:
      "Roles de Bibliotecario y Usuario, patrón Modelo-Vista-Controlador, arquitectura cliente-servidor con Proxy",
    inprogress_label: "En proceso / Próximamente",
    flashcards_title: "App de Flashcards",
    flashcards_sub: "Móvil &amp; Web",
    locator_title: "Localizador de Bibliotecas",
    health_title: "Panel de Datos de Apple Health",
    health_sub: "Dashboard Web",
    proj2_subtitle: "Soluciones backend construidas de punta a punta",
    proj2_comingsoon: "Próximamente más proyectos",
    proj2_meanwhile:
      'Mientras tanto, puedes ver StockFlow API REST en <a class="text-blue-500 dark:text-blue-400 hover:underline" href="#formacion">Formación Académica</a>.',
    theme_toggle_label: "Cambiar tema",
    lang_toggle_label: "Cambiar idioma",
  },
  en: {
    nav_inicio: "Home",
    nav_acerca: "About",
    nav_proyectos: "Projects",
    nav_servicios: "Services",
    hero_greeting: "Hi, I'm",
    hero_desc:
      'I\'m a 7th-semester <strong class="text-gray-800 dark:text-gray-100 font-semibold">Computer Science</strong> student at UNAM, focused on backend and scalable software development. Committed to code quality and continuous learning.',
    btn_hire: "Hire Me",
    btn_cv: "Download CV",
    label_follow: "Contact Me",
    about_heading: "About Me",
    about_subtitle: "Turning ideas into digital experiences",
    about_bio1:
      "7th-semester Computer Science student at UNAM, with experience in software development and a focus on solving complex problems.",
    about_bio2:
      "Interested in backend, systems development, and building scalable software. Committed to code quality, continuous learning, and teamwork.",
    lang_english: "English — B2 (Upper Intermediate)",
    btn_view_projects: "View Projects",
    formacion_heading: "Academic Background",
    formacion_subtitle: "Academic projects and technical journey",
    degree_title: "Bachelor's Degree in Computer Science",
    degree_gpa: "GPA: 9.58/10 · Credits completed: 71%",
    degree_dates: "Aug 2023 — Present",
    prev_edu_label: "Previous Education",
    prev_edu_title: "Specialized Technical Studies in Computing",
    badge_featured: "Featured Project",
    stockflow_desc:
      "Inventory management: suppliers, products, and stock, also working as a point of sale (POS) with sales tracking and movement history",
    btn_view_code: "View Code",
    btn_view_demo: "View Demo",
    homelab_title: "Personal Server",
    homelab_desc:
      "I self-host this portfolio and my personal projects (including StockFlow) with Docker, so I can test them live. It also acts as the brain of my smart home with Home Assistant.",
    label_backend: "Backend",
    eventos_title: "Multi-role Event Management Backend System",
    eventos_desc:
      "PostgreSQL connection via JDBC, full CRUD operations across the database tables",
    label_cliente_servidor: "Client-Server",
    tienda_title: "Multilingual Online Store",
    tienda_desc:
      "Client-server architecture with RMI, dynamic internationalization based on user nationality, dynamic shopping cart",
    label_mvc: "MVC",
    biblioteca_title: "Library Loan Management System",
    biblioteca_desc:
      "Librarian and User roles, Model-View-Controller pattern, client-server architecture with Proxy",
    inprogress_label: "In Progress / Coming Soon",
    flashcards_title: "Flashcards App",
    flashcards_sub: "Mobile &amp; Web",
    locator_title: "Library Locator",
    health_title: "Apple Health Data Dashboard",
    health_sub: "Web Dashboard",
    proj2_subtitle: "End-to-end backend solutions",
    proj2_comingsoon: "More projects coming soon",
    proj2_meanwhile:
      'In the meantime, you can check out StockFlow API REST in <a class="text-blue-500 dark:text-blue-400 hover:underline" href="#formacion">Academic Background</a>.',
    theme_toggle_label: "Switch theme",
    lang_toggle_label: "Switch language",
  },
};

const typewriterWords = {
  es: ["Ciencias de la Computación", "Ingeniería de Software", "Desarrollo Backend"],
  en: ["Computer Science", "Software Engineering", "Backend Development"],
};

function detectLanguage() {
  const saved = localStorage.getItem("lang");
  if (saved === "es" || saved === "en") return saved;
  return navigator.language && navigator.language.toLowerCase().startsWith("es") ? "es" : "en";
}

function applyLanguage(lang) {
  const dict = translations[lang];
  document.documentElement.setAttribute("lang", lang);
  document.title = lang === "es" ? "Portafolio - Jesús Romero" : "Portfolio - Jesús Romero";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.getAttribute("data-i18n-html");
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });

  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) themeToggle.setAttribute("aria-label", dict.theme_toggle_label);

  const langToggle = document.getElementById("lang-toggle");
  if (langToggle) {
    langToggle.setAttribute("aria-label", dict.lang_toggle_label);
    langToggle.textContent = lang === "es" ? "EN" : "ES";
  }

  if (typeof restartTypewriter === "function") {
    restartTypewriter(typewriterWords[lang]);
  }
}

const currentLang = detectLanguage();
applyLanguage(currentLang);

const langToggleBtn = document.getElementById("lang-toggle");
if (langToggleBtn) {
  langToggleBtn.addEventListener("click", () => {
    const next = document.documentElement.getAttribute("lang") === "es" ? "en" : "es";
    localStorage.setItem("lang", next);
    applyLanguage(next);
  });
}
