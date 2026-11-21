export const CONTACT_EMAIL = "nandorengifo07@gmail.com";
export const CONTACT_PHONE = "314 696 3901";
export const CONTACT_LOCATION = "Envigado, Colombia";
export const WHATSAPP_URL = "https://wa.me/573146963901";
export const PORTFOLIO_URL = "https://portafolio-web-luis-rengifo.vercel.app";

export const profile = {
  name: "Luis Fernando Rengifo Palacios",
  first: "LUIS FERNANDO",
  last: "RENGIFO PALACIOS",
  headline: "Ingeniero de Sistemas | Desarrollador de Software | Datos y Automatización",
  location: CONTACT_LOCATION,
  phone: CONTACT_PHONE,
  roles: [
    "Ingeniero de Sistemas",
    "Desarrollador de Software",
    "Datos y Automatización",
    "Full Stack Developer",
    "BI Developer",
  ],
  typing: [
    "Desarrollador de Software",
    "Especialista en Datos y Automatización",
    "Full Stack · Node.js, NestJS & React",
    "Python, ETL & PostgreSQL",
    "Business Intelligence · Power BI",
  ],
  description:
    "Ingeniero de Sistemas con experiencia en desarrollo de software, mantenimiento de plataformas internas y automatización de procesos para entornos empresariales. Experiencia en diseño e implementación de APIs REST, gestión de bases de datos relacionales, desarrollo de aplicaciones web y construcción de procesos ETL.",
  description2:
    "Manejo de Node.js, NestJS, React, Python y PostgreSQL, con participación en el ciclo de desarrollo desde el levantamiento de requerimientos y el diseño de datos hasta las pruebas y el despliegue. Orientado a la resolución de problemas, la optimización operativa y el uso de información para apoyar la toma de decisiones.",
  story: [
    "Ingeniero de Sistemas con experiencia en desarrollo de software, mantenimiento de plataformas internas y automatización de procesos para entornos empresariales.",
    "Experiencia en diseño e implementación de APIs REST, gestión de bases de datos relacionales, desarrollo de aplicaciones web y construcción de procesos ETL con Node.js, NestJS, React, Python y PostgreSQL.",
    "Participo en el ciclo completo de desarrollo —desde el levantamiento de requerimientos y el diseño de datos hasta las pruebas y el despliegue— con enfoque en optimización operativa y toma de decisiones basada en datos.",
  ],
  workflow: [
    {
      step: "01",
      title: "Levantamiento y diseño de datos",
      detail:
        "Análisis de requerimientos operativos, modelado relacional y estructuración de bases de datos.",
    },
    {
      step: "02",
      title: "APIs REST y aplicaciones web",
      detail:
        "Implementación de servicios con Node.js, NestJS o FastAPI e interfaces con React, Vite y Tailwind.",
    },
    {
      step: "03",
      title: "Procesos ETL, datos y BI",
      detail:
        "Automatización de flujos con Python y pandas, y visualización ejecutiva en Power BI y Metabase.",
    },
    {
      step: "04",
      title: "Pruebas y despliegue",
      detail:
        "Validación de integridad, control de calidad de datos y despliegue reproducible con Docker.",
    },
  ],
};

export const stats = [
  { value: 4, suffix: "", label: "Experiencias" },
  { value: 5, suffix: "", label: "Proyectos" },
  { value: 28, suffix: "", label: "Tecnologías" },
  { value: 3, suffix: "", label: "Certificaciones" },
];

export const education = [
  {
    period: "feb. 2018 – dic. 2024",
    title: "Ingeniería de Sistemas",
    place: "Institución Universitaria de Envigado",
    detail:
      "Énfasis en bases de datos, con orientación a la modelación de datos y herramientas de visualización.",
    active: false,
  },
];

export const languages = [
  { name: "Español", level: "Lengua materna", value: 100 },
  { name: "Inglés", level: "B1", value: 60 },
];

export const experience = [
  {
    year: "mar. 2026 – actualidad",
    company: "Provecol Antioquia S.A.S.",
    location: "Itagüí",
    role: "Desarrollador de Software",
    current: true,
    tasks: [
      "Desarrollé APIs REST y operaciones CRUD sobre PostgreSQL para módulos de gestión empresarial.",
      "Automaticé la agregación de coordenadas geográficas con Python y pandas, ahorrando 25 min diarios (≈2 horas semanales).",
      "Construí plataformas internas e interfaces web con React, Vite y Tailwind, desplegándolas con Docker.",
    ],
  },
  {
    year: "abr. 2025 – ago. 2025",
    company: "Emtelco",
    location: "Medellín",
    role: "Asesor de Fidelización y Soporte",
    current: false,
    tasks: [
      "Atendí ~12 clientes diarios en procesos de fidelización, logrando ~8 retenciones exitosas (≈67% de efectividad).",
      "Gestioné la resolución de incidencias y necesidades para mejorar la retención y la calidad del servicio.",
    ],
  },
  {
    year: "nov. 2024 – dic. 2024",
    company: "DANE",
    location: "Medellín",
    role: "Censista de Barrido / Calidad de Datos",
    current: false,
    tasks: [
      "Recolecté 27 registros diarios de información socioeconómica en campo para el Censo Económico Nacional Urbano.",
      "Validé la integridad y consistencia de registros digitales conforme a los protocolos estadísticos.",
    ],
  },
  {
    year: "ago. 2023 – feb. 2024",
    company: "Emtelco",
    location: "Medellín",
    role: "Practicante de Licenciamiento y Gestión de TI",
    current: false,
    tasks: [
      "Brindé soporte tecnológico a 15 usuarios internos, principalmente del área de mesa de ayuda para atención a otros agentes internos.",
      "Gestioné el control, validación y seguimiento de licencias corporativas de software, mejorando la trazabilidad de los procesos.",
    ],
  },
];

export interface SkillGroupItem {
  name: string;
  level?: string;
}

export interface SkillGroup {
  title: string;
  summary: string;
  items: SkillGroupItem[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Lenguajes",
    summary:
      "Base sólida para desarrollo backend, frontend, consultas analíticas y automatización.",
    items: [
      { name: "TypeScript", level: "Experimentado" },
      { name: "Python", level: "Experimentado" },
      { name: "JavaScript", level: "Competente" },
      { name: "SQL" },
      { name: "Java" },
      { name: "PHP" },
    ],
  },
  {
    title: "Desarrollo",
    summary: "Arquitecturas web full stack, APIs REST e interfaces modernas.",
    items: [
      { name: "Node.js" },
      { name: "NestJS" },
      { name: "React" },
      { name: "Next.js" },
      { name: "FastAPI" },
      { name: "Laravel" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    title: "Bases de Datos",
    summary: "Diseño relacional y documental, integridad de registros y optimización de consultas.",
    items: [{ name: "PostgreSQL" }, { name: "MySQL" }, { name: "SQL Server" }, { name: "MongoDB" }],
  },
  {
    title: "Datos y BI",
    summary: "Pipelines ETL, limpieza tabular y tableros ejecutivos para toma de decisiones.",
    items: [
      { name: "ETL" },
      { name: "pandas" },
      { name: "Power BI" },
      { name: "Metabase" },
      { name: "Tableau" },
      { name: "Excel" },
    ],
  },
  {
    title: "Herramientas",
    summary: "Control de versiones, contenerización, nube y pruebas de APIs.",
    items: [
      { name: "Git" },
      { name: "Docker" },
      { name: "AWS" },
      { name: "Firebase" },
      { name: "Postman" },
    ],
  },
];

export const technologyItems = [
  { name: "JavaScript", category: "Lenguajes", level: "Competente" },
  { name: "TypeScript", category: "Lenguajes", level: "Experimentado" },
  { name: "Python", category: "Lenguajes", level: "Experimentado" },
  { name: "SQL", category: "Lenguajes" },
  { name: "Java", category: "Lenguajes" },
  { name: "PHP", category: "Lenguajes" },
  { name: "Node.js", category: "Desarrollo" },
  { name: "NestJS", category: "Desarrollo" },
  { name: "React", category: "Desarrollo" },
  { name: "Next.js", category: "Desarrollo" },
  { name: "FastAPI", category: "Desarrollo" },
  { name: "Laravel", category: "Desarrollo" },
  { name: "Tailwind CSS", category: "Desarrollo" },
  { name: "PostgreSQL", category: "Bases de Datos" },
  { name: "MySQL", category: "Bases de Datos" },
  { name: "SQL Server", category: "Bases de Datos" },
  { name: "MongoDB", category: "Bases de Datos" },
  { name: "ETL", category: "Datos y BI" },
  { name: "pandas", category: "Datos y BI" },
  { name: "Power BI", category: "Datos y BI" },
  { name: "Metabase", category: "Datos y BI" },
  { name: "Tableau", category: "Datos y BI" },
  { name: "Excel", category: "Datos y BI" },
  { name: "Git", category: "Herramientas" },
  { name: "Docker", category: "Herramientas" },
  { name: "AWS", category: "Herramientas" },
  { name: "Firebase", category: "Herramientas" },
  { name: "Postman", category: "Herramientas" },
] as const;

export const technologies = technologyItems.map((t) => t.name);

export type ProjectCategory =
  "Full Stack" | "Georreferenciación" | "Datos & ETL" | "Business Intelligence";

export interface ProjectItem {
  name: string;
  status: string;
  statusTone: "live" | "done" | "active";
  category: ProjectCategory;
  cvFeatured?: boolean;
  description: string;
  features: string[];
  tech: string[];
  github: string;
  repoLabel?: string;
}

export const projects: ProjectItem[] = [
  {
    name: "AppsyOne",
    status: "2026 – actualidad",
    statusTone: "live",
    category: "Full Stack",
    cvFeatured: true,
    description:
      "Plataforma de gestión empresarial, operaciones y analítica. Solución que integra procesos empresariales; backend con NestJS y PostgreSQL, frontend con React y cliente de escritorio desarrollado con Tauri v2.",
    features: ["Gestión empresarial", "Operaciones", "Analítica", "Cliente de escritorio Tauri v2"],
    tech: ["NestJS", "PostgreSQL", "React", "Tauri v2"],
    github: "",
  },
  {
    name: "SBCG – Sistema de Búsqueda de Coordenadas Geográficas",
    status: "2026 – actualidad",
    statusTone: "live",
    category: "Georreferenciación",
    cvFeatured: true,
    description:
      "Herramienta para cruzar información de rutas con una base maestra de clientes y obtener coordenadas geográficas mediante Google Maps, automatizando la georreferenciación masiva.",
    features: [
      "Cruce de rutas y base maestra",
      "Obtención de coordenadas vía Google Maps",
      "Procesamiento masivo con openpyxl",
      "Ahorro operativo de ~2 horas semanales",
    ],
    tech: ["FastAPI", "SQLite", "openpyxl", "Google Maps API"],
    github: "https://github.com/LuisRengifoP/Sistema-de-agregaci-n-de-coordenadas-",
    repoLabel: "Ver en GitHub",
  },
  {
    name: "ETL de Conciliación de Inventarios",
    status: "2026 – actualidad",
    statusTone: "live",
    category: "Datos & ETL",
    cvFeatured: true,
    description:
      "Sistema web para extraer información mediante IMAP o carga manual, transformar y validar datos, y generar inventarios en el formato estándar de DistriApp, con exportación a Excel.",
    features: [
      "Extracción por IMAP o carga manual",
      "Normalización y homologación",
      "Formato estándar DistriApp",
      "Exportación a Excel",
    ],
    tech: ["Python", "Flask", "pandas", "Google Drive API", "IMAP API"],
    github: "https://github.com/LuisRengifoP/Sistema-ETL-Appsy",
    repoLabel: "Ver en GitHub",
  },
  {
    name: "BGC-Appsy",
    status: "En producción",
    statusTone: "live",
    category: "Georreferenciación",
    description:
      "Sistema inteligente de georreferenciación para administración y visualización de activos en campo.",
    features: ["Mapas en tiempo real", "Gestión de activos", "Reportes", "Roles de usuario"],
    tech: ["React", "Node.js", "Google Maps API"],
    github: "https://github.com/LuisRengifoP/BGC-Appsy",
    repoLabel: "Ver en GitHub",
  },
  {
    name: "Dashboard Metabase",
    status: "Activo",
    statusTone: "active",
    category: "Business Intelligence",
    description:
      "Almacenamiento en BigQuery, consultas SQL y construcción de dashboards, indicadores (KPIs) y reportes en Metabase para el análisis del negocio.",
    features: ["KPIs ejecutivos", "Modelado de datos", "Automatización de reportes"],
    tech: ["BigQuery", "SQL", "Metabase"],
    github:
      "https://github.com/LuisRengifoP/Manual_Tecnico_Appsy/blob/main/Manual_Tecnico_AppsyBI.md",
    repoLabel: "Manual técnico",
  },
];

export const futureProjects = [
  { name: "Portal Corporativo TBJ", category: "Web Corporativa" },
  { name: "Bot Inteligente de Atención al Cliente", category: "IA & Automatización" },
  { name: "Sistema de Optimización de Rutas", category: "Logística & Geo" },
  { name: "Sistema de Inventarios Inteligente", category: "Operaciones & Datos" },
  { name: "Dashboard Ejecutivo Power BI", category: "Business Intelligence" },
];

export const certifications = [
  {
    title: "Microsoft Power BI Data Analyst Associate",
    issuer: "Microsoft",
    date: "oct. 2024",
    category: "Business Intelligence",
  },
  {
    title: "Introducción a la Ciencia de Datos",
    issuer: "IE University / Santander Open Academy",
    date: "ago. 2024",
    category: "Ciencia de Datos",
  },
  {
    title: "Inteligencia Artificial y Productividad",
    issuer: "Google / Santander Open Academy",
    date: "ago. 2024",
    category: "Inteligencia Artificial",
  },
];

export interface BlogTopic {
  tag: string;
  group: "BI & Datos" | "Desarrollo" | "Automatización & IA";
  title: string;
  excerpt: string;
  outline: string[];
}

export const blogTopics: BlogTopic[] = [
  {
    tag: "Power BI",
    group: "BI & Datos",
    title: "Modelado de datos que escala en Power BI",
    excerpt: "Buenas prácticas de relaciones, DAX y rendimiento en informes ejecutivos.",
    outline: [
      "Esquema en estrella vs. tablas planas para evitar ambigüedades en filtros.",
      "Medidas DAX reutilizables frente a columnas calculadas innecesarias.",
      "Diagnóstico de rendimiento con Performance Analyzer y optimización de cardinalidad.",
    ],
  },
  {
    tag: "Python",
    group: "Automatización & IA",
    title: "Automatizar procesos repetitivos con Python",
    excerpt: "De scripts sueltos a pipelines confiables con pandas y programación de tareas.",
    outline: [
      "Estructuración modular de ingesta, validación y salida en Excel o base de datos.",
      "Manejo explícito de errores, bitácoras y validación de esquemas antes de exportar.",
      "Empaquetado reproducible y ejecución programada sin intervención manual.",
    ],
  },
  {
    tag: "React",
    group: "Desarrollo",
    title: "Componentes reutilizables en React + TypeScript",
    excerpt: "Patrones de composición para interfaces mantenibles a largo plazo.",
    outline: [
      "Separación clara entre primitivas de diseño y lógica de negocio.",
      "Tipado estricto de props y estados para prevenir regresiones en tiempo de compilación.",
      "Accesibilidad por defecto en modales, botones y formularios empresariales.",
    ],
  },
  {
    tag: "SQL",
    group: "BI & Datos",
    title: "Consultas SQL que no matan tu servidor",
    excerpt: "Índices, planes de ejecución y refactorización de consultas pesadas.",
    outline: [
      "Lectura práctica de EXPLAIN ANALYZE para detectar escaneos secuenciales costosos.",
      "Uso adecuado de índices compuestos y CTEs legibles frente a subconsultas repetidas.",
      "Agregaciones previas para alimentar dashboards de BI con baja latencia.",
    ],
  },
  {
    tag: "Laravel",
    group: "Desarrollo",
    title: "APIs limpias con Laravel",
    excerpt: "Estructura de proyecto, validación y autenticación con buenas prácticas.",
    outline: [
      "Validación desacoplada con Form Requests y respuestas JSON consistentes.",
      "Control de acceso, políticas de autorización y versionamiento de endpoints.",
      "Separación de servicios de dominio para mantener controladores delgados.",
    ],
  },
  {
    tag: "Automatización",
    group: "Automatización & IA",
    title: "ETL: del caos al dato confiable",
    excerpt: "Cómo diseñé un flujo de homologación de inventarios multi-sucursal.",
    outline: [
      "Lectura automatizada de fuentes heterogéneas (correo IMAP y cargas manuales).",
      "Reglas de normalización, limpieza de formatos y homologación de catálogos.",
      "Generación de archivos estandarizados listos para consumo operativo.",
    ],
  },
  {
    tag: "Business Intelligence",
    group: "BI & Datos",
    title: "Indicadores que sí importan",
    excerpt: "Cómo elegir KPIs accionables para la toma de decisiones.",
    outline: [
      "Diferenciar métricas informativas de indicadores vinculados a una decisión.",
      "Definición de metas, umbrales de alerta y periodicidad de seguimiento.",
      "Diseño visual de tableros para lectura ejecutiva en menos de 30 segundos.",
    ],
  },
  {
    tag: "Inteligencia Artificial",
    group: "Automatización & IA",
    title: "IA aplicada a la productividad empresarial",
    excerpt: "Casos reales de uso de modelos de lenguaje dentro de procesos internos.",
    outline: [
      "Asistencia en análisis de requerimientos, documentación técnica y validación de código.",
      "Automatización de clasificación, resúmenes operativos y soporte interno.",
      "Criterios de verificación humana y privacidad de datos corporativos.",
    ],
  },
];

export const socials = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/luis-fernando-rengifo-palacios-b2a5bb1b9/",
  },
  { name: "GitHub", href: "https://github.com/LuisRengifoP" },
  { name: "Instagram", href: "https://www.instagram.com/luis_rengifo24/" },
  { name: "Correo", href: `mailto:${CONTACT_EMAIL}` },
  { name: "WhatsApp", href: WHATSAPP_URL },
];

export const navItems = [
  { id: "inicio", label: "Inicio" },
  { id: "sobre-mi", label: "Perfil" },
  { id: "experiencia", label: "Experiencia" },
  { id: "habilidades", label: "Habilidades" },
  { id: "proyectos", label: "Proyectos" },
  { id: "certificaciones", label: "Certificaciones" },
  { id: "blog", label: "Blog" },
];
