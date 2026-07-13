const translations = {
  es: {
    nav_inicio: "Inicio",
    nav_acerca: "Acerca",
    nav_proyectos: "Proyectos",
    nav_servicios: "Servicios",
    nav_formacion: "Formación",
    hero_greeting: "Hola!, soy",
    hero_desc:
      'Soy estudiante de 7.º semestre de <strong class="text-gray-800 dark:text-gray-100 font-semibold">Ciencias de la Computación</strong> en la UNAM, enfocado en desarrollo backend con <strong class="text-gray-800 dark:text-gray-100 font-semibold">Java y Spring Boot</strong>. Cuento con más de tres años programando y experiencia con PostgreSQL, Hibernate, JPA, Docker y Git.',
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
      "Me enfoco en el desarrollo backend, la construcción de sistemas y la creación de software escalable. Valoro la calidad del código, disfruto colaborar en equipo, busco aprender constantemente nuevas tecnologías y formas de mejorar con cada proyecto.",
    lang_english: "Inglés — B2 (Upper Intermediate)",
    lang_spanish: "Español — Nativo",
    section_languages: "Idiomas",
    section_tech: "Stack Tecnológico",
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
      "API REST para gestión de inventarios: proveedores, productos y stock, funcionando además como punto de venta (POS) con registro de ventas e historial de movimientos",
    btn_view_code: "Ver código",
    btn_view_demo: "Ver demo",
    homelab_title: "Servidor Personal",
    homelab_desc:
      "Servidor propio corriendo 24/7 donde autoalojo mis proyectos con Docker: despliegue mediante contenedores, acceso remoto seguro y administración de servicios en un entorno de producción real.",
    label_backend: "Backend",
    label_db: "Bases de Datos",
    eventos_title: "Gestión de Eventos Multirrol",
    eventos_desc:
      "Modelado relacional y consultas SQL sobre PostgreSQL para un sistema de eventos con múltiples roles de personal. Sobre esto, construí una API REST en Spring Boot con JDBC y un panel web para operar el CRUD.",
    label_reservaciones: "Reservas & Mapas",
    reservaciones_title: "Sistema de Reservaciones de Hospedaje",
    reservaciones_desc:
      "Sistema hecho para gestionar reservaciones de distintos tipos de hospedaje en varias sedes de parques, ubicados en un mapa interactivo, aplicando reglas de negocio de temporada, disponibilidad y capacidad.",
    ev_subtitle:
      "Base de datos relacional para un torneo con múltiples roles de personal, participantes y ventas: modelado desde cero en PostgreSQL, con restricciones, programación en la base y consultas de reporte. Sobre esto, una API REST en Spring Boot con JDBC y un panel web para operarla.",
    ev_sql_caption: "Una de las 15 consultas de reporte pedidas por el caso de uso",
    ev_nav_model: "Modelo de datos",
    ev_overview_p1:
      "Proyecto de la materia Fundamentos de Bases de Datos, se modeló desde cero la base de datos para un torneo con varias sedes, distintos tipos de competencia, personal con roles diferenciados (cuidadores, limpiadores, registradores y vendedores), participantes, visitantes y ventas.",
    ev_overview_p2:
      "El entregable no fue solo el esquema: incluye el modelo entidad-relación y su traducción al modelo relacional, el DDL con sus restricciones de integridad, la programación dentro de la base (disparadores y procedimientos almacenados) y consultas no triviales que responden al caso de uso.",
    ev_overview_p3:
      "Sobre ese esquema construí una aplicación en Spring Boot que expone la base por HTTP mediante JDBC, con un panel web para dar de alta, consultar, editar y eliminar registros.",
    ev_facts_role_value: "Trabajo en equipo",
    ev_facts_course_value: "Fundamentos de Bases de Datos",
    ev_facts_status_value: "Proyecto académico",
    ev_facts_scale_label: "Escala",
    ev_facts_scale_value: "34 tablas · 45 llaves foráneas",
    ev_flow_step1: "Modelo E-R",
    ev_flow_step1_desc: "Entidades, relaciones y cardinalidades a partir del caso de uso.",
    ev_flow_step2: "Esquema relacional",
    ev_flow_step2_desc: "DDL con llaves, restricciones CHECK e integridad referencial.",
    ev_flow_step3: "Lógica en la base",
    ev_flow_step3_desc: "Disparadores y procedimientos que hacen cumplir las reglas del torneo.",
    ev_flow_step4: "API y panel",
    ev_flow_step4_desc: "Spring Boot expone la base por HTTP y un panel web opera el CRUD.",
    ev_feature1_title: "Modelado relacional",
    ev_feature1_desc:
      "34 tablas y 45 llaves foráneas que modelan personal con roles distintos, participantes, visitantes, tres tipos de torneo y las ventas de cada evento.",
    ev_feature2_title: "Disparadores y procedimientos",
    ev_feature2_desc:
      "Reglas del torneo aplicadas dentro de la base: impedir inscripciones incompatibles y recalcular las ganancias de un evento en cada venta.",
    ev_feature3_title: "Consultas de reporte",
    ev_feature3_desc:
      "15 consultas con JOINs, agregaciones y funciones de ventana: ingresos por día, semana y mes, ventas por vendedor y estadísticas de los torneos.",
    ev_feature4_title: "API REST y panel de administración",
    ev_feature4_desc:
      "Spring Boot con JDBC: SQL escrito a mano, parámetros nombrados y mapeo manual de resultados, más un panel en HTML, CSS y JavaScript para operar el CRUD.",
    ev_model_heading: "Modelo de datos",
    ev_model_desc:
      "El diseño partió de un modelo entidad-relación y se tradujo después al modelo relacional que dio origen al DDL. Haz clic en cualquiera de los dos para verlo en grande.",
    ev_model_er: "Modelo entidad-relación",
    ev_model_rel: "Modelo relacional",
    ev_stack_group_db: "Base de datos",
    ev_stack_group_front: "Interfaz",
    ev_arch1: "Esquema normalizado con integridad referencial y restricciones CHECK sobre cada tabla",
    ev_arch2: "Reglas de negocio dentro de la base con disparadores y procedimientos en PL/pgSQL",
    ev_arch3: "Aplicación Spring Boot por capas: controlador, servicio, repositorio y mapeo de filas",
    ev_arch4: "Acceso a datos con JDBC y parámetros nombrados",
    ev_quote_text:
      "Es el proyecto donde aprendí a pensar primero en los datos: modelar el dominio, imponerle restricciones y escribir el SQL a mano. Ya que una base bien diseñada sostiene todo lo que se construye encima, una mal diseñada se paga después.",

    lf_kicker: "Reservas & Mapas",
    lf_title: "Sistema de Reservaciones de Hospedaje",
    lf_subtitle:
      "Sistema hecho para gestionar reservaciones de distintos tipos de hospedaje en varias sedes de parques del Festival de las Luciérnagas, ubicados en un mapa interactivo, aplicando reglas de negocio de temporada, disponibilidad y capacidad.",
    lf_terminal_caption:
      "# Cada reservación pasa por el formulario, el facade y el template method antes de guardarse",
    lf_stat1_value: "Jun—Ago",
    lf_stat1_label: "Temporada del festival",
    lf_stat2_value: "3 roles",
    lf_stat2_label: "Visitante, Cliente, Admin",
    lf_stat3_value: "4 patrones",
    lf_stat3_label: "Facade, Template, Observer, Adapter",
    lf_stat4_value: "Mapa en vivo",
    lf_stat4_label: "Leaflet + OpenStreetMap",
    lf_nav_rules: "Reglas",
    lf_overview_p1:
      "Proyecto final de Ingeniería de Software, desarrollado con Django para el Festival de Luciérnagas: varios parques participantes, cada uno con sus servicios y distintos tipos de hospedaje, que el visitante puede explorar en un catálogo y ubicar en un mapa interactivo antes de reservar.",
    lf_overview_p2:
      "El sistema distingue tres tipos de uso: visitantes que exploran el catálogo público, clientes autenticados que crean y gestionan sus reservaciones, y administradores que gestionan parques, servicios, hospedajes y consultan todas las reservaciones.",
    lf_facts_role_value: "Desarrollo en equipo (5 integrantes)",
    lf_facts_status_value: "Proyecto académico, demostración en línea",
    lf_facts_course_label: "Materia",
    lf_facts_deploy_value: "Docker en servidor personal",
    lf_flow_step1: "Explorar Parques",
    lf_flow_step1_desc: "Catálogo con filtros y mapa interactivo con Leaflet/OpenStreetMap.",
    lf_flow_step2: "Formulario de Reserva",
    lf_flow_step2_desc: "El cliente elige fechas, unidades y huéspedes para un hospedaje.",
    lf_flow_step3: "Facade + Template Method",
    lf_flow_step3_desc: "Se validan temporada, disponibilidad y reglas de mantenimiento.",
    lf_flow_step4: "Observer notifica",
    lf_flow_step4_desc: "La reservación queda activa y se notifica su creación o cancelación.",
    lf_feature1_title: "Catálogo de Parques con Mapa",
    lf_feature1_desc:
      "Listado público con filtros por estado, hospedaje y servicios, además de un mapa interactivo construido con un patrón Adapter para Leaflet/OpenStreetMap.",
    lf_feature2_title: "Roles y Permisos",
    lf_feature2_desc:
      "Usuario personalizado con roles de Cliente y Administrador, e inicio de sesión con Google vía django-allauth.",
    lf_feature3_title: "Reglas de Reservación",
    lf_feature3_desc:
      "Validación de temporada, disponibilidad, capacidad y días de mantenimiento antes de confirmar cada reserva.",
    lf_feature4_title: "Patrones de Diseño",
    lf_feature4_desc:
      "Facade para crear/cancelar reservas, Template Method para el flujo de creación, Observer para notificaciones y Adapter para el mapa.",
    lf_stack_group_backend: "Backend",
    lf_stack_group_data: "Datos",
    lf_stack_group_maps: "Mapas",
    lf_stack_group_ui: "Auth & UI",
    lf_arch1: "Apps separadas por dominio: usuarios, parques y reservaciones",
    lf_arch2: "Modelo de usuario personalizado con roles CLIENTE y ADMINISTRADOR",
    lf_arch3: "ReservacionFacade y ReservacionTemplate encapsulan la lógica de creación y cancelación",
    lf_arch4: "MapaAdapter permite intercambiar OpenStreetMap por otro proveedor sin tocar las vistas",
    lf_arch5: "Contenerizado con Docker y desplegado en el home lab personal",
    lf_rules_heading: "Reglas de reservación",
    lf_rule1: "La estancia debe caer dentro de la temporada del festival: junio, julio y agosto",
    lf_rule2: "No se permiten noches en martes, reservados como días de mantenimiento",
    lf_rule3: "Las unidades reservadas deben cubrir la capacidad según el número de huéspedes",
    lf_rule4: "No se permite sobre-reservar unidades con reservaciones activas en el mismo periodo",
    lf_rule5: "Las reservaciones en temporada reciben un recargo del 20%",
    lf_rule6: "La estancia máxima para un hospedaje es de 30 noches",
    lf_quote_text:
      "Lo desarrollamos en equipo para la materia de Ingeniería de Software, aplicando patrones de diseño reales (Facade, Template Method, Observer, Adapter) a un sistema de reservaciones con reglas de negocio complejas.",
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
    contact_heading: "¿Hablamos?",
    contact_subtitle: "Estoy abierto a nuevas oportunidades y proyectos. Escríbeme y con gusto platicamos. Si te interesa mi perfil o quieres conocer más sobre mi trabajo, no dudes en contactarme.",
    btn_email: "Enviar Correo",
    btn_linkedin: "LinkedIn",
    label_phone: "Teléfono",
    contact_status: "Disponible",
    contact_location: "Ciudad de México, México",
    contact_response: "Respondo en menos de 2 horas",
    footer_copyright: "© 2026 Jesús Antonio Romero Godoy",
    footer_built_with: "Desarrollado con HTML, CSS y JavaScript",
    theme_toggle_label: "Cambiar tema",
    lang_toggle_label: "Cambiar idioma",
    btn_view_details: "Ver detalles",

    sf_back: "Volver al portafolio",
    sf_kicker: "Proyecto Principal",
    sf_live_badge: "API en vivo",
    sf_subtitle:
      "API REST para la gestión de inventarios construido con Spring Boot y PostgreSQL, funcionando además como punto de venta (POS) con registro de ventas e historial de movimientos.",
    sf_stat_type: "REST API",
    sf_stat_stack: "Spring Boot & PostgreSQL",
    sf_stat_persist: "JPA + Hibernate",
    sf_stat_deploy: "Contenerizado con Docker",
    sf_overview_heading: "Resumen",
    sf_overview_p1:
      "StockFlow es una API REST que proporciona un sistema de gestión de inventarios pensado para pequeños y medianos negocios, ya que administra proveedores, catálogo de productos y niveles de stock desde un único backend.",
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
    sf_feature3_desc: "Registro de ventas que descuenta stock automáticamente y calcula totales con y sin impuestos al momento.",
    sf_feature4_title: "Historial de Movimientos",
    sf_feature4_desc: "Trazabilidad completa de entradas y salidas de inventario para auditoría y reportes.",
    sf_stack_heading: "Stack Tecnológico",
    sf_arch_heading: "Arquitectura",
    sf_arch1: "API REST construida con Spring Boot y Spring Web",
    sf_arch2: "Persistencia con JPA / Hibernate sobre PostgreSQL",
    sf_arch3: "Documentación interactiva con Swagger / OpenAPI",
    sf_arch4:
      'Contenerizada con Docker y desplegada en el <a class="text-[#5E81AC] dark:text-[#88C0D0] underline underline-offset-2 hover:text-gray-900 dark:hover:text-white transition-colors" href="homelab.html">home lab personal</a>',
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
      "Construí StockFlow para poner en práctica arquitectura backend real: persistencia con JPA/Hibernate y PostgreSQL, reglas de negocio, documentación con Swagger y despliegue con Docker.",
    sf_quote_author: "Jesús Romero, desarrollador",
    sf_stack_strip_label: "Construido con",
    sf_stack_group_lang: "Backend",
    sf_stack_group_data: "Persistencia",
    sf_stack_group_docs: "Pruebas y documentación",
    sf_stack_group_tools: "Infraestructura y despliegue",

    hl_kicker: "Infraestructura",
    hl_title: "Servidor Personal (Home Lab)",
    hl_subtitle:
      "Servidor propio corriendo 24/7 donde autoalojo mis proyectos con Docker: despliegue mediante contenedores, acceso remoto seguro y administración de servicios en un entorno de producción real.",
    hl_btn_github: "Ver perfil de GitHub",
    hl_btn_live: "Ver un proyecto en vivo",
    hl_terminal_caption: "# Todo corre en contenedores, accesible de forma remota vía Tailscale",
    hl_nav_access: "Acceso remoto",
    hl_overview_p1:
      "Es un equipo con Ubuntu Server encendido las 24 horas en casa. Lo monté para practicar infraestructura real más allá del código: cada proyecto vive aislado en su propio contenedor Docker, orquestado con Docker Compose.",
    hl_overview_p2:
      "Administrarlo me da control sobre dónde y cómo corren mis proyectos, y me ha servido para practicar administración de servicios en Linux, redes y acceso remoto seguro mediante Tailscale y SSH, sin exponer puertos innecesarios a internet.",
    hl_facts_status_value: "Activo, en producción 24/7",
    hl_facts_os_label: "Sistema operativo",
    hl_facts_deploy_value: "Docker & Docker Compose",
    hl_flow_step1: "Ubuntu Server",
    hl_flow_step1_desc: "Máquina base corriendo 24/7 en casa, accesible por SSH.",
    hl_flow_step2: "Docker Compose",
    hl_flow_step2_desc: "Orquesta y aísla cada servicio en su propio contenedor.",
    hl_flow_step3: "Servicios desplegados",
    hl_flow_step3_desc: "Sitios, APIs y bases de datos corriendo en paralelo, aislados entre sí.",
    hl_flow_step4: "Acceso remoto",
    hl_flow_step4_desc: "Tailscale expone lo necesario de forma segura, sin abrir puertos.",
    hl_feature1_title: "Hosting de Proyectos",
    hl_feature1_desc: "Aloja este portafolio y StockFlow en contenedores Docker independientes, listos para probarse en vivo.",
    hl_feature2_title: "Publicación con Nginx y Cloudflare Tunnel",
    hl_feature2_desc: "Nginx sirve los sitios y un túnel de Cloudflare los expone en subdominios propios con HTTPS.",
    hl_feature3_title: "Orquestación con Docker Compose",
    hl_feature3_desc: "Cada servicio vive en su propio contenedor, con despliegues reproducibles y aislados.",
    hl_feature4_title: "Acceso Remoto Seguro",
    hl_feature4_desc: "Tailscale y SSH permiten administrar y acceder al servidor desde cualquier lugar sin exponer puertos a internet.",
    hl_stack_group_os: "Sistema & Virtualización",
    hl_stack_group_containers: "Contenedores",
    hl_stack_group_network: "Redes & Acceso remoto",
    hl_stack_group_automation: "Automatización",
    hl_arch1: "Ubuntu Server como sistema base, corriendo de forma ininterrumpida en casa",
    hl_arch2: "Cada servicio aislado en su propio contenedor Docker, con su red y volúmenes",
    hl_arch3: "Orquestación y despliegues reproducibles con Docker Compose",
    hl_arch4: "Acceso remoto seguro vía Tailscale y SSH, sin exponer puertos innecesarios",
    hl_access_heading: "Todo corre aquí mismo",
    hl_access_desc: "Este portafolio, StockFlow y el resto de mis proyectos en producción se sirven desde este mismo servidor personal.",
    hl_access_btn: "Ver StockFlow",
    hl_quote_text:
      "Monté este servidor para tener control total sobre dónde y cómo corren mis proyectos: aprender infraestructura real, no solo código, contenerizando y desplegando todo con mis propias manos.",
  },
  en: {
    nav_inicio: "Home",
    nav_acerca: "About",
    nav_proyectos: "Projects",
    nav_servicios: "Services",
    nav_formacion: "Education",
    hero_greeting: "Hi!, I'm",
    hero_desc:
      'I\'m a 7th-semester <strong class="text-gray-800 dark:text-gray-100 font-semibold">Computer Science</strong> student at UNAM, focused on backend development with <strong class="text-gray-800 dark:text-gray-100 font-semibold">Java and Spring Boot</strong>. I have over three years of programming experience and hands-on work with PostgreSQL, Hibernate, JPA, Docker, and Git.',
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
      "I focus on backend development, systems architecture, and building scalable software. I value code quality, enjoy collaborating as part of a team, constantly look to learn new technologies and ways to improve with every project.",
    lang_english: "English — B2 (Upper Intermediate)",
    lang_spanish: "Spanish — Native",
    section_languages: "Languages",
    section_tech: "Tech Stack",
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
      "REST API for inventory management: suppliers, products, and stock, also working as a point of sale (POS) with sales tracking and movement history",
    btn_view_code: "View Code",
    btn_view_demo: "View Demo",
    homelab_title: "Personal Server",
    homelab_desc:
      "My own server running 24/7 where I self-host my projects with Docker: container deployment, secure remote access, and service administration in a real production environment.",
    label_backend: "Backend",
    label_db: "Databases",
    eventos_title: "Multi-role Event Management",
    eventos_desc:
      "Relational modeling and SQL queries on PostgreSQL for an event system with multiple staff roles. On top of that, I built a REST API in Spring Boot with JDBC and a web panel to run the CRUD.",
    label_reservaciones: "Bookings & Maps",
    reservaciones_title: "Lodging Reservation System",
    reservaciones_desc:
      "A system built to manage reservations for different lodging types across several park venues, placed on an interactive map, applying business rules for season, availability, and capacity.",
    ev_subtitle:
      "Relational database for a tournament with multiple staff roles, participants, and sales: modeled from scratch in PostgreSQL, with constraints, in-database programming, and reporting queries. On top of it, a REST API in Spring Boot with JDBC and a web panel to operate it.",
    ev_sql_caption: "One of the 15 reporting queries required by the use case",
    ev_nav_model: "Data model",
    ev_overview_p1:
      "A project for the Database Fundamentals course: the database was modeled from scratch for a tournament with several venues, different competition types, staff with distinct roles (caretakers, cleaners, registrars, and vendors), participants, visitors, and sales.",
    ev_overview_p2:
      "The deliverable was not just the schema: it includes the entity-relationship model and its translation into the relational model, the DDL with its integrity constraints, in-database programming (triggers and stored procedures), and non-trivial queries answering the use case.",
    ev_overview_p3:
      "On top of that schema I built a Spring Boot application that exposes the database over HTTP through JDBC, with a web panel to create, read, update, and delete records.",
    ev_facts_role_value: "Team work",
    ev_facts_course_value: "Database Fundamentals",
    ev_facts_status_value: "Academic project",
    ev_facts_scale_label: "Scale",
    ev_facts_scale_value: "34 tables · 45 foreign keys",
    ev_flow_step1: "E-R model",
    ev_flow_step1_desc: "Entities, relationships, and cardinalities drawn from the use case.",
    ev_flow_step2: "Relational schema",
    ev_flow_step2_desc: "DDL with keys, CHECK constraints, and referential integrity.",
    ev_flow_step3: "Logic in the database",
    ev_flow_step3_desc: "Triggers and procedures that enforce the tournament rules.",
    ev_flow_step4: "API and panel",
    ev_flow_step4_desc: "Spring Boot exposes the database over HTTP and a web panel runs the CRUD.",
    ev_feature1_title: "Relational modeling",
    ev_feature1_desc:
      "34 tables and 45 foreign keys modeling staff with different roles, participants, visitors, three tournament types, and the sales of each event.",
    ev_feature2_title: "Triggers and stored procedures",
    ev_feature2_desc:
      "Tournament rules enforced inside the database: preventing incompatible sign-ups and recalculating an event's revenue on every sale.",
    ev_feature3_title: "Reporting queries",
    ev_feature3_desc:
      "15 queries with JOINs, aggregations, and window functions: daily, weekly, and monthly revenue, sales per vendor, and tournament statistics.",
    ev_feature4_title: "REST API and admin panel",
    ev_feature4_desc:
      "Spring Boot with JDBC: hand-written SQL, named parameters, and manual row mapping, plus a panel in HTML, CSS, and JavaScript to operate the CRUD.",
    ev_model_heading: "Data model",
    ev_model_desc:
      "The design started from an entity-relationship model and was then translated into the relational model that gave rise to the DDL. Click either one to view it full size.",
    ev_model_er: "Entity-relationship model",
    ev_model_rel: "Relational model",
    ev_stack_group_db: "Database",
    ev_stack_group_front: "Interface",
    ev_arch1: "Normalized schema with referential integrity and CHECK constraints on every table",
    ev_arch2: "Business rules inside the database with PL/pgSQL triggers and procedures",
    ev_arch3: "Layered Spring Boot application: controller, service, repository, and row mapping",
    ev_arch4: "Data access with JDBC and named parameters",
    ev_quote_text:
      "It's the project where I learned to think about the data first: model the domain, constrain it, and write the SQL by hand. Since a well-designed database holds up everything built on top of it, a poorly designed one is paid for later.",

    lf_kicker: "Bookings & Maps",
    lf_title: "Lodging Reservation System",
    lf_subtitle:
      "A system built to manage reservations for different lodging types across several park venues of the Luciérnagas Festival, placed on an interactive map, applying business rules for season, availability, and capacity.",
    lf_terminal_caption:
      "# Every reservation goes through the form, the facade, and the template method before it's saved",
    lf_stat1_value: "Jun—Aug",
    lf_stat1_label: "Festival season",
    lf_stat2_value: "3 roles",
    lf_stat2_label: "Visitor, Client, Admin",
    lf_stat3_value: "4 patterns",
    lf_stat3_label: "Facade, Template, Observer, Adapter",
    lf_stat4_value: "Live map",
    lf_stat4_label: "Leaflet + OpenStreetMap",
    lf_nav_rules: "Rules",
    lf_overview_p1:
      "Final project for the Software Engineering course, built with Django for the Luciérnagas Festival: several participating parks, each with its own services and lodging types, which visitors can browse in a catalog and locate on an interactive map before booking.",
    lf_overview_p2:
      "The system supports three types of use: visitors who browse the public catalog, authenticated clients who create and manage their reservations, and administrators who manage parks, services, lodging, and view all reservations.",
    lf_facts_role_value: "Team development (5 members)",
    lf_facts_status_value: "Academic project, live demo",
    lf_facts_course_label: "Course",
    lf_facts_deploy_value: "Docker on personal server",
    lf_flow_step1: "Explore Parks",
    lf_flow_step1_desc: "Catalog with filters and an interactive Leaflet/OpenStreetMap map.",
    lf_flow_step2: "Reservation Form",
    lf_flow_step2_desc: "The client picks dates, units, and guests for a lodging option.",
    lf_flow_step3: "Facade + Template Method",
    lf_flow_step3_desc: "Season, availability, and maintenance rules get validated.",
    lf_flow_step4: "Observer notifies",
    lf_flow_step4_desc: "The reservation becomes active and its creation or cancellation is notified.",
    lf_feature1_title: "Park Catalog with Map",
    lf_feature1_desc:
      "Public listing with filters by state, lodging, and services, plus an interactive map built with an Adapter pattern for Leaflet/OpenStreetMap.",
    lf_feature2_title: "Roles and Permissions",
    lf_feature2_desc:
      "Custom user model with Client and Administrator roles, plus Google sign-in via django-allauth.",
    lf_feature3_title: "Reservation Rules",
    lf_feature3_desc:
      "Validates season, availability, capacity, and maintenance days before confirming each reservation.",
    lf_feature4_title: "Design Patterns",
    lf_feature4_desc:
      "Facade to create/cancel reservations, Template Method for the creation flow, Observer for notifications, and Adapter for the map.",
    lf_stack_group_backend: "Backend",
    lf_stack_group_data: "Data",
    lf_stack_group_maps: "Maps",
    lf_stack_group_ui: "Auth & UI",
    lf_arch1: "Apps split by domain: users, parks, and reservations",
    lf_arch2: "Custom user model with CLIENT and ADMINISTRATOR roles",
    lf_arch3: "ReservacionFacade and ReservacionTemplate encapsulate creation and cancellation logic",
    lf_arch4: "MapaAdapter allows swapping OpenStreetMap for another provider without touching the views",
    lf_arch5: "Containerized with Docker and deployed on the personal home lab",
    lf_rules_heading: "Reservation Rules",
    lf_rule1: "The stay must fall within the festival season: June, July, and August",
    lf_rule2: "No Tuesday nights are allowed, reserved as maintenance days",
    lf_rule3: "Reserved units must cover capacity based on the number of guests",
    lf_rule4: "Units can't be over-booked when there are active reservations in the same period",
    lf_rule5: "Reservations during the season get a 20% surcharge",
    lf_rule6: "The maximum stay for a lodging is 30 nights",
    lf_quote_text:
      "We built this as a team for our Software Engineering course, applying real design patterns (Facade, Template Method, Observer, Adapter) to a reservation system with complex business rules.",
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
    contact_heading: "Let's Talk",
    contact_subtitle: "I'm open to new opportunities and projects. Reach out and let's chat. If you're interested in my profile or want to know more about my work, don't hesitate to contact me.",
    btn_email: "Send Email",
    btn_linkedin: "LinkedIn",
    label_phone: "Phone",
    contact_status: "Available",
    contact_location: "Mexico City, Mexico",
    contact_response: "I usually reply within 2 hours",
    footer_copyright: "© 2026 Jesús Antonio Romero Godoy",
    footer_built_with: "Built with HTML, CSS, and JavaScript",
    theme_toggle_label: "Switch theme",
    lang_toggle_label: "Switch language",
    btn_view_details: "View details",

    sf_back: "Back to portfolio",
    sf_kicker: "Featured Project",
    sf_live_badge: "Live API",
    sf_subtitle:
      "REST API for inventory management built with Spring Boot and PostgreSQL, also working as a point of sale (POS) with sales tracking and movement history.",
    sf_stat_type: "REST API",
    sf_stat_stack: "Spring Boot & PostgreSQL",
    sf_stat_persist: "JPA + Hibernate",
    sf_stat_deploy: "Dockerized",
    sf_overview_heading: "Overview",
    sf_overview_p1:
      "StockFlow is a REST API that provides an inventory management system designed for small and medium businesses, managing suppliers, product catalog, and stock levels from a single backend.",
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
    sf_feature3_desc: "Sales registration that automatically deducts stock and calculates totals with and without taxes on the spot.",
    sf_feature4_title: "Movement History",
    sf_feature4_desc: "Full traceability of inventory in/out movements for auditing and reporting.",
    sf_stack_heading: "Tech Stack",
    sf_arch_heading: "Architecture",
    sf_arch1: "REST API built with Spring Boot and Spring Web",
    sf_arch2: "Persistence with JPA / Hibernate on PostgreSQL",
    sf_arch3: "Interactive documentation with Swagger / OpenAPI",
    sf_arch4:
      'Containerized with Docker and deployed on my <a class="text-[#5E81AC] dark:text-[#88C0D0] underline underline-offset-2 hover:text-gray-900 dark:hover:text-white transition-colors" href="homelab.html">personal home lab</a>',
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
      "I built StockFlow to put real backend architecture into practice: persistence with JPA/Hibernate and PostgreSQL, business rules, documentation with Swagger, and deployment with Docker.",
    sf_quote_author: "Jesús Romero, developer",
    sf_stack_strip_label: "Built with",
    sf_stack_group_lang: "Backend",
    sf_stack_group_data: "Persistence",
    sf_stack_group_docs: "Testing & Documentation",
    sf_stack_group_tools: "Infrastructure & Deployment",

    hl_kicker: "Infrastructure",
    hl_title: "Personal Server (Home Lab)",
    hl_subtitle:
      "My own server running 24/7 where I self-host my projects with Docker: container deployment, secure remote access, and service administration in a real production environment.",
    hl_btn_github: "View GitHub profile",
    hl_btn_live: "See a live project",
    hl_terminal_caption: "# Everything runs in containers, remotely accessible via Tailscale",
    hl_nav_access: "Remote access",
    hl_overview_p1:
      "It's a machine running Ubuntu Server, powered on 24/7 at home. I set it up to practice real infrastructure beyond code: each project lives isolated in its own Docker container, orchestrated with Docker Compose.",
    hl_overview_p2:
      "Running it gives me control over where and how my projects run, and it has taught me Linux service administration, networking, and secure remote access through Tailscale and SSH, without exposing unnecessary ports to the internet.",
    hl_facts_status_value: "Active, running 24/7",
    hl_facts_os_label: "Operating system",
    hl_facts_deploy_value: "Docker & Docker Compose",
    hl_flow_step1: "Ubuntu Server",
    hl_flow_step1_desc: "Base machine running 24/7 at home, accessible via SSH.",
    hl_flow_step2: "Docker Compose",
    hl_flow_step2_desc: "Orchestrates and isolates each service in its own container.",
    hl_flow_step3: "Deployed services",
    hl_flow_step3_desc: "Sites, APIs, and databases running side by side, isolated from each other.",
    hl_flow_step4: "Remote access",
    hl_flow_step4_desc: "Tailscale exposes what's needed securely, without opening ports.",
    hl_feature1_title: "Project Hosting",
    hl_feature1_desc: "Hosts this portfolio and StockFlow in independent Docker containers, ready to test live.",
    hl_feature2_title: "Publishing with Nginx and Cloudflare Tunnel",
    hl_feature2_desc: "Nginx serves the sites and a Cloudflare tunnel exposes them on my own subdomains over HTTPS.",
    hl_feature3_title: "Orchestration with Docker Compose",
    hl_feature3_desc: "Each service lives in its own container, with reproducible, isolated deployments.",
    hl_feature4_title: "Secure Remote Access",
    hl_feature4_desc: "Tailscale and SSH allow managing and accessing the server from anywhere without exposing ports to the internet.",
    hl_stack_group_os: "OS & Virtualization",
    hl_stack_group_containers: "Containers",
    hl_stack_group_network: "Networking & Remote Access",
    hl_stack_group_automation: "Automation",
    hl_arch1: "Ubuntu Server as the base system, running uninterrupted at home",
    hl_arch2: "Each service isolated in its own Docker container, with its own network and volumes",
    hl_arch3: "Orchestration and reproducible deployments with Docker Compose",
    hl_arch4: "Secure remote access via Tailscale and SSH, without exposing unnecessary ports",
    hl_access_heading: "Everything runs right here",
    hl_access_desc: "This portfolio, StockFlow, and the rest of my production projects are served from this very personal server.",
    hl_access_btn: "View StockFlow",
    hl_quote_text:
      "I set up this server to have full control over where and how my projects run: learning real infrastructure, not just code, containerizing and deploying everything with my own hands.",
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
