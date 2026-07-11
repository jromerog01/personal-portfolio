const translations = {
  es: {
    nav_inicio: "Inicio",
    nav_acerca: "Acerca",
    nav_proyectos: "Proyectos",
    nav_servicios: "Servicios",
    hero_greeting: "Hola, soy",
    hero_desc:
      'Soy estudiante de 7º semestre de <strong class="text-gray-800 dark:text-gray-100 font-semibold">Ciencias de la Computación</strong> en la UNAM, con enfoque en backend y desarrollo de software escalable. Con <strong class="text-gray-800 dark:text-gray-100 font-semibold">más de 3 años de experiencia programando</strong>, estoy comprometido con la calidad del código y el aprendizaje continuo.',
    btn_hire: "Ver Portafolio",
    btn_cv: "Descargar CV",
    btn_show_more_tech: "Ver más",
    btn_show_less_tech: "Ver menos",
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
    btn_view_details: "Ver detalles",

    sf_back: "Volver al portafolio",
    sf_kicker: "Proyecto Principal",
    sf_subtitle:
      "Sistema de gestión de inventarios construido con Spring Boot y PostgreSQL, funcionando además como punto de venta (POS) con registro de ventas e historial de movimientos.",
    sf_stat_type: "REST API",
    sf_stat_stack: "Spring Boot & PostgreSQL",
    sf_stat_persist: "JPA + Hibernate",
    sf_stat_deploy: "Contenedorizado con Docker",
    sf_overview_heading: "Resumen",
    sf_overview_p1:
      "StockFlow API REST es un sistema de gestión de inventarios pensado para pequeños y medianos negocios: administra proveedores, catálogo de productos y niveles de stock desde un único backend.",
    sf_overview_p2:
      "Además de la gestión de inventario, StockFlow funciona como punto de venta (POS): registra ventas, actualiza el stock automáticamente y mantiene un historial completo de movimientos para trazabilidad total.",
    sf_facts_heading: "Datos rápidos",
    sf_facts_role_label: "Rol",
    sf_facts_role_value: "Desarrollo individual",
    sf_facts_status_label: "Estado",
    sf_facts_status_value: "En producción (self-hosted)",
    sf_facts_docs_label: "Documentación",
    sf_facts_docs_value: "Swagger / OpenAPI",
    sf_facts_deploy_label: "Despliegue",
    sf_facts_deploy_value: "Docker en servidor personal",
    sf_features_heading: "Funcionalidades clave",
    sf_feature1_title: "Gestión de Proveedores",
    sf_feature1_desc: "Alta, edición y consulta de proveedores asociados a los productos del inventario.",
    sf_feature2_title: "Catálogo de Productos y Stock",
    sf_feature2_desc: "Control de existencias en tiempo real, con actualización automática ante cada movimiento.",
    sf_feature3_title: "Punto de Venta (POS)",
    sf_feature3_desc: "Registro de ventas que descuenta stock automáticamente y calcula totales al momento.",
    sf_feature4_title: "Historial de Movimientos",
    sf_feature4_desc: "Trazabilidad completa de entradas y salidas de inventario para auditoría y reportes.",
    sf_stack_heading: "Stack Tecnológico",
    sf_arch_heading: "Arquitectura",
    sf_arch1: "API REST construida con Spring Boot y Spring Web",
    sf_arch2: "Persistencia con JPA / Hibernate sobre PostgreSQL",
    sf_arch3: "Documentación interactiva con Swagger / OpenAPI",
    sf_arch4: "Contenedorizada con Docker y desplegada en el home lab personal",
    sf_docs_heading: "Documentación de la API",
    sf_docs_desc:
      "Explora todos los endpoints, modelos de datos y prueba las peticiones directamente desde Swagger UI.",
    sf_cta_heading: "¿Quieres ver más proyectos?",
    sf_cta_desc: "Regresa al portafolio para conocer el resto de mi trabajo.",

    sf_design1_label: "Diseño 1",
    sf_design2_label: "Diseño 2",
    sf_design3_label: "Diseño 3",
    sf_view_other_design: "Ver otro diseño",
    sf_nav_overview: "Resumen",
    sf_nav_features: "Funcionalidades",
    sf_nav_stack: "Stack",
    sf_nav_arch: "Arquitectura",
    sf_nav_api: "API",
    sf_nav_docs: "Documentación",
    sf_request_label: "Petición",
    sf_response_label: "Respuesta",
    sf_terminal_caption: "Ejemplo real: registrar una venta descuenta el stock automáticamente",

    sf_problem_kicker: "El problema",
    sf_problem_p:
      "Antes de StockFlow, controlar inventario y ventas implicaba hojas de cálculo dispersas, sin historial confiable de movimientos ni relación clara entre productos y proveedores.",
    sf_solution_kicker: "La solución",
    sf_solution_p:
      "Una API REST que centraliza proveedores, catálogo, stock y ventas en un solo lugar, con trazabilidad completa: cada movimiento queda registrado y el stock se actualiza al instante.",
    sf_flow_heading: "Cómo funciona",
    sf_flow_step1: "Proveedor",
    sf_flow_step1_desc: "Se registra y se asocia a los productos que surte.",
    sf_flow_step2: "Producto & Stock",
    sf_flow_step2_desc: "Se da de alta en el catálogo con su cantidad disponible.",
    sf_flow_step3: "Punto de Venta",
    sf_flow_step3_desc: "Cada venta descuenta stock y calcula el total al instante.",
    sf_flow_step4: "Historial",
    sf_flow_step4_desc: "El movimiento queda registrado para trazabilidad y auditoría.",
    sf_quote_text:
      "Construí StockFlow para poner en práctica arquitectura backend real: persistencia con JPA/Hibernate, documentación con Swagger y despliegue con Docker en mi propio servidor.",
    sf_quote_author: "Jesús Romero, desarrollador",
    sf_stack_strip_label: "Construido con",
    sf_stack_group_lang: "Backend",
    sf_stack_group_data: "Persistencia",
    sf_stack_group_docs: "Pruebas y documentación",
    sf_stack_group_tools: "Infraestructura y despliegue",
  },
  en: {
    nav_inicio: "Home",
    nav_acerca: "About",
    nav_proyectos: "Projects",
    nav_servicios: "Services",
    hero_greeting: "Hi, I'm",
    hero_desc:
      'I\'m a 7th-semester <strong class="text-gray-800 dark:text-gray-100 font-semibold">Computer Science</strong> student at UNAM, focused on backend and scalable software development. With <strong class="text-gray-800 dark:text-gray-100 font-semibold">over 3 years of coding experience</strong>, I\'m committed to code quality and continuous learning.',
    btn_hire: "View Portfolio",
    btn_cv: "Download CV",
    btn_show_more_tech: "Show more",
    btn_show_less_tech: "Show less",
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
    btn_view_details: "View details",

    sf_back: "Back to portfolio",
    sf_kicker: "Featured Project",
    sf_subtitle:
      "Inventory management system built with Spring Boot and PostgreSQL, also working as a point of sale (POS) with sales tracking and movement history.",
    sf_stat_type: "REST API",
    sf_stat_stack: "Spring Boot & PostgreSQL",
    sf_stat_persist: "JPA + Hibernate",
    sf_stat_deploy: "Dockerized",
    sf_overview_heading: "Overview",
    sf_overview_p1:
      "StockFlow API REST is an inventory management system designed for small and medium businesses: it manages suppliers, product catalog, and stock levels from a single backend.",
    sf_overview_p2:
      "Beyond inventory management, StockFlow also works as a point of sale (POS): it records sales, updates stock automatically, and keeps a full movement history for complete traceability.",
    sf_facts_heading: "Quick facts",
    sf_facts_role_label: "Role",
    sf_facts_role_value: "Solo development",
    sf_facts_status_label: "Status",
    sf_facts_status_value: "In production (self-hosted)",
    sf_facts_docs_label: "Documentation",
    sf_facts_docs_value: "Swagger / OpenAPI",
    sf_facts_deploy_label: "Deployment",
    sf_facts_deploy_value: "Docker on personal server",
    sf_features_heading: "Key Features",
    sf_feature1_title: "Supplier Management",
    sf_feature1_desc: "Create, edit, and query suppliers linked to inventory products.",
    sf_feature2_title: "Product Catalog & Stock",
    sf_feature2_desc: "Real-time inventory control, automatically updated with every movement.",
    sf_feature3_title: "Point of Sale (POS)",
    sf_feature3_desc: "Sales registration that automatically deducts stock and calculates totals on the spot.",
    sf_feature4_title: "Movement History",
    sf_feature4_desc: "Full traceability of inventory in/out movements for auditing and reporting.",
    sf_stack_heading: "Tech Stack",
    sf_arch_heading: "Architecture",
    sf_arch1: "REST API built with Spring Boot and Spring Web",
    sf_arch2: "Persistence with JPA / Hibernate on PostgreSQL",
    sf_arch3: "Interactive documentation with Swagger / OpenAPI",
    sf_arch4: "Containerized with Docker and deployed on my personal home lab",
    sf_docs_heading: "API Documentation",
    sf_docs_desc:
      "Explore every endpoint, data model, and try out requests directly from Swagger UI.",
    sf_cta_heading: "Want to see more projects?",
    sf_cta_desc: "Head back to the portfolio to check out the rest of my work.",

    sf_design1_label: "Design 1",
    sf_design2_label: "Design 2",
    sf_design3_label: "Design 3",
    sf_view_other_design: "View other design",
    sf_nav_overview: "Overview",
    sf_nav_features: "Features",
    sf_nav_stack: "Stack",
    sf_nav_arch: "Architecture",
    sf_nav_api: "API",
    sf_nav_docs: "Documentation",
    sf_request_label: "Request",
    sf_response_label: "Response",
    sf_terminal_caption: "Real example: recording a sale automatically deducts stock",

    sf_problem_kicker: "The problem",
    sf_problem_p:
      "Before StockFlow, tracking inventory and sales meant scattered spreadsheets, no reliable movement history, and no clear link between products and suppliers.",
    sf_solution_kicker: "The solution",
    sf_solution_p:
      "A REST API that centralizes suppliers, catalog, stock, and sales in one place, with full traceability: every movement gets recorded and stock updates instantly.",
    sf_flow_heading: "How it works",
    sf_flow_step1: "Supplier",
    sf_flow_step1_desc: "Registered and linked to the products it supplies.",
    sf_flow_step2: "Product & Stock",
    sf_flow_step2_desc: "Added to the catalog with its available quantity.",
    sf_flow_step3: "Point of Sale",
    sf_flow_step3_desc: "Every sale deducts stock and calculates the total instantly.",
    sf_flow_step4: "History",
    sf_flow_step4_desc: "The movement is recorded for traceability and auditing.",
    sf_quote_text:
      "I built StockFlow to put real backend architecture into practice: persistence with JPA/Hibernate, documentation with Swagger, and deployment with Docker on my own server.",
    sf_quote_author: "Jesús Romero, developer",
    sf_stack_strip_label: "Built with",
    sf_stack_group_lang: "Backend",
    sf_stack_group_data: "Persistence",
    sf_stack_group_docs: "Testing & Documentation",
    sf_stack_group_tools: "Infrastructure & Deployment",
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
