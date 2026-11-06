export const profile = {
  name: "Luis Fernando Rengifo Palacios",
  first: "LUIS FERNANDO",
  last: "RENGIFO PALACIOS",
  roles: [
    "Ingeniero de Sistemas",
    "Data Analyst",
    "BI Developer",
    "Full Stack Developer",
    "Especialista en Automatización",
  ],
  typing: [
    "Desarrollador Full Stack",
    "Especialista en Business Intelligence",
    "Power BI Developer",
    "Python Developer",
    "SQL Developer",
    "AI Enthusiast",
  ],
  description:
    "Ingeniero de Sistemas con experiencia en el desarrollo y mantenimiento de plataformas internas, implementación de APIs REST y automatización de procesos para entornos empresariales. Trabajo con Node.js, NestJS, React, Python y PostgreSQL, y construyo procesos ETL y paneles de Business Intelligence con Power BI.",
  description2:
    "Mi objetivo es construir herramientas que optimicen procesos y ayuden a las empresas a tomar mejores decisiones mediante el uso de la tecnología.",
  story: [
    "Soy Ingeniero de Sistemas con experiencia en desarrollo Full Stack, Business Intelligence y análisis de datos. He participado en el ciclo completo de desarrollo de software: levantamiento de requerimientos, diseño de bases de datos, implementación, pruebas y despliegue con Docker.",
    "Me apasiona crear soluciones tecnológicas que automaticen procesos, optimicen operaciones y faciliten la toma de decisiones mediante datos.",
    "Disfruto aprender nuevas tecnologías y desarrollar proyectos que generen valor real para las empresas.",
  ],
};

export const stats = [
  { value: 12, suffix: "+", label: "Proyectos" },
  { value: 15, suffix: "+", label: "Tecnologías" },
  { value: 3, suffix: "", label: "Certificaciones" },
  { value: 100, suffix: "%", label: "Compromiso" },
];

export const floatingTech = [
  "Python",
  "React",
  "Node.js",
  "Power BI",
  "SQL",
  "Laravel",
  "MongoDB",
  "AWS",
  "Docker",
  "Firebase",
  "IA",
];

export const education = [
  {
    title: "Maestría en Análisis y Visualización de Datos Masivos",
    place: "La Unir México",
    detail: "En curso",
  },
  {
    title: "Ingeniería de Sistemas",
    place: "Institución Universitaria de Envigado",
    detail: "Graduado · Diciembre 2024",
  },
  {
    title: "Bachiller",
    place: "Institución Educativa Matías Trespalacios",
    detail: "Graduado",
  },
];

export const languages = [
  { name: "Español", level: "Nativo", value: 100 },
  { name: "Inglés", level: "Nivel B1", value: 60 },
];

export const experience = [
  {
    year: "Mar 2026 – Actualidad",
    company: "Provecol Antioquia S.A.S.",
    role: "Desarrollador de Software · Itagüí",
    tasks: [
      "Desarrollo y mantenimiento de plataformas internas para la gestión operativa del grupo empresarial",
      "Diseño e implementación de APIs REST y operaciones CRUD sobre PostgreSQL",
      "Automatización de procesos con Python, pandas y openpyxl, incluida geocodificación",
      "Interfaces web con React 19, Vite y Tailwind CSS v4",
      "Levantamiento de requerimientos, diseño de bases de datos y despliegue con Docker",
    ],
  },
  {
    year: "Abr 2025 – Ago 2025",
    company: "EMTELCO",
    role: "Asesor de Fidelización y Soporte",
    tasks: [
      "Atención y retención de usuarios",
      "Resolución de incidencias",
      "Cumplimiento de indicadores de nivel de servicio (SLA)",
    ],
  },
  {
    year: "Nov 2024 – Dic 2024",
    company: "DANE",
    role: "Censista de Barrido / Calidad de Datos",
    tasks: [
      "Recolección y validación de información para el Censo Económico Nacional Urbano",
      "Verificación de integridad y consistencia de registros digitales",
      "Cumplimiento de protocolos estadísticos",
    ],
  },
  {
    year: "Ago 2023 – Feb 2024",
    company: "EMTELCO",
    role: "Practicante de Licenciamiento y Gestión de TI",
    tasks: [
      "Control, validación y gestión de licencias corporativas de software",
      "Optimización de flujos operativos",
      "Seguimiento centralizado de requerimientos de clientes internos",
    ],
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "HTML5", "CSS3", "Tailwind", "JavaScript", "TypeScript"],
  },
  {
    title: "Backend",
    items: ["Python", "Node.js", "NestJS", "FastAPI", "Laravel", "PHP", "Java", "Express"],
  },
  {
    title: "Bases de datos",
    items: ["PostgreSQL", "MySQL", "MongoDB", "SQL Server", "Oracle"],
  },
  {
    title: "Business Intelligence",
    items: ["Power BI", "ETL", "pandas", "Metabase", "Tableau", "Excel", "Power Query"],
  },
  { title: "Inteligencia Artificial", items: ["OpenAI", "Claude", "Gemini", "Kimi"] },
];

export const technologies = [
  "Python",
  "JavaScript",
  "TypeScript",
  "SQL",
  "PHP",
  "Java",
  "React",
  "Next.js",
  "Laravel",
  "Node.js",
  "NestJS",
  "FastAPI",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "SQL Server",
  "Firebase",
  "Docker",
  "Git",
  "GitHub",
  "Postman",
  "pandas",
  "Power BI",
  "Metabase",
  "Tableau",
  "AWS",
];

export const projects = [
  {
    name: "AppsyOne",
    status: "2026",
    description:
      "Plataforma integral de gestión empresarial, operaciones y analítica que integra los procesos de la empresa en una sola solución.",
    features: ["Gestión empresarial", "Operaciones", "Analítica", "Cliente de escritorio"],
    tech: ["NestJS", "PostgreSQL", "React", "Tauri v2"],
    github: "",
  },
  {
    name: "BGC-Appsy",
    status: "En producción",
    description:
      "Sistema inteligente de georreferenciación para administración y visualización de activos en campo.",
    features: ["Mapas en tiempo real", "Gestión de activos", "Reportes", "Roles de usuario"],
    tech: ["React", "Node.js", "Google Maps API"],
    github: "https://github.com/LuisRengifoP/BGC-Appsy",
  },
  {
    name: "ETL de Conciliación de Inventarios",
    status: "Finalizado · 2026",
    description:
      "Sistema web que extrae información de inventarios mediante IMAP o carga manual, transforma y valida los datos y genera los inventarios en el formato estándar de DistriApp, con exportación a Excel.",
    features: [
      "Extracción por IMAP o carga manual",
      "Normalización y homologación",
      "Formato estándar DistriApp",
      "Exportación a Excel",
    ],
    tech: ["Python", "Flask", "Pandas", "Google Drive API", "IMAP API"],
    github: "https://github.com/LuisRengifoP/Sistema-ETL-Appsy",
  },
  {
    name: "Dashboard Metabase",
    status: "Activo",
    description:
      "La información es almacenada en BigQuery, las consultas se realizan mediante SQL y Metabase se utiliza para la construcción de dashboards, indicadores (KPIs) y reportes para el análisis del negocio.",
    features: ["KPIs ejecutivos", "Modelado de datos", "Automatización de reportes"],
    tech: ["BigQuery", "SQL", "Metabase"],
    github:
      "https://github.com/LuisRengifoP/Manual_Tecnico_Appsy/blob/main/Manual_Tecnico_AppsyBI.md",
  },
  {
    name: "SBCG – Sistema de Búsqueda de Coordenadas Geográficas",
    status: "Activo · 2026",
    description:
      "Herramienta que cruza la información de rutas con una base maestra de clientes y obtiene coordenadas geográficas mediante Google Maps, automatizando la georreferenciación masiva de clientes.",
    features: [
      "Obtención de coordenadas",
      "Validación geográfica",
      "Administración masiva",
      "Optimización de procesamiento",
    ],
    tech: ["FastAPI", "SQLite", "openpyxl", "Google Maps API"],
    github: "https://github.com/LuisRengifoP/Sistema-de-agregaci-n-de-coordenadas-",
  },
];

export const futureProjects = [
  "Portal Corporativo TBJ",
  "Bot Inteligente de Atención al Cliente",
  "Sistema de Optimización de Rutas",
  "Sistema de Inventarios Inteligente",
  "Dashboard Ejecutivo Power BI",
];

export const certifications = [
  { title: "Microsoft Power BI Data Analyst Associate", issuer: "Microsoft · Octubre 2024" },
  {
    title: "Introducción a la Ciencia de Datos",
    issuer: "IE University / Santander Open Academy · Agosto 2024",
  },
  {
    title: "Inteligencia Artificial y Productividad",
    issuer: "Google / Santander Open Academy · Agosto 2024",
  },
];

export const blogTopics = [
  {
    tag: "Power BI",
    title: "Modelado de datos que escala en Power BI",
    excerpt: "Buenas prácticas de relaciones, DAX y rendimiento en informes ejecutivos.",
  },
  {
    tag: "Python",
    title: "Automatizar procesos repetitivos con Python",
    excerpt: "De scripts sueltos a pipelines confiables con Pandas y programación de tareas.",
  },
  {
    tag: "React",
    title: "Componentes reutilizables en React + TypeScript",
    excerpt: "Patrones de composición para interfaces mantenibles a largo plazo.",
  },
  {
    tag: "SQL",
    title: "Consultas SQL que no matan tu servidor",
    excerpt: "Índices, planes de ejecución y refactorización de consultas pesadas.",
  },
  {
    tag: "Laravel",
    title: "APIs limpias con Laravel",
    excerpt: "Estructura de proyecto, validación y autenticación con buenas prácticas.",
  },
  {
    tag: "Automatización",
    title: "ETL: del caos al dato confiable",
    excerpt: "Cómo diseñé un flujo de homologación de inventarios multi-sucursal.",
  },
  {
    tag: "Business Intelligence",
    title: "Indicadores que sí importan",
    excerpt: "Cómo elegir KPIs accionables para la toma de decisiones.",
  },
  {
    tag: "Inteligencia Artificial",
    title: "IA aplicada a la productividad empresarial",
    excerpt: "Casos reales de uso de modelos de lenguaje dentro de procesos internos.",
  },
];

export const socials = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/luis-fernando-rengifo-palacios-b2a5bb1b9/",
  },
  { name: "GitHub", href: "https://github.com/LuisRengifoP" },
  { name: "Instagram", href: "https://www.instagram.com/luis_rengifo24/" },
  { name: "Correo", href: "mailto:nandorengifo07@gmail.com" },
  { name: "WhatsApp", href: "https://wa.me/573146963901" },
];

export const navItems = [
  { id: "inicio", label: "Inicio" },
  { id: "sobre-mi", label: "Sobre mí" },
  { id: "experiencia", label: "Experiencia" },
  { id: "habilidades", label: "Habilidades" },
  { id: "tecnologias", label: "Tecnologías" },
  { id: "proyectos", label: "Proyectos" },
  { id: "certificaciones", label: "Certificaciones" },
  { id: "blog", label: "Blog" },
  { id: "contacto", label: "Contacto" },
];
