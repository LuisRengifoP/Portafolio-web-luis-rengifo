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
    "Ingeniero de Sistemas apasionado por transformar datos en soluciones tecnológicas de alto impacto. Especializado en desarrollo web, Business Intelligence, análisis de datos, automatización de procesos y desarrollo de soluciones basadas en Inteligencia Artificial.",
  description2:
    "Mi objetivo es construir herramientas que optimicen procesos y ayuden a las empresas a tomar mejores decisiones mediante el uso de la tecnología.",
  story: [
    "Soy Ingeniero de Sistemas con experiencia en desarrollo Full Stack, Business Intelligence y análisis de datos.",
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
    detail: "Graduado",
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
    year: "Actual",
    company: "Provecol Antioquia S.A.S.",
    role: "Desarrollador de Software",
    tasks: [
      "Desarrollo de soluciones de software",
      "Automatización de procesos internos",
      "Análisis y gestión de información",
      "Herramientas de análisis de datos",
      "Solución de incidencias técnicas",
      "Mantenimiento de aplicaciones internas",
    ],
  },
  {
    year: "2023",
    company: "EMTELCO",
    role: "Practicante de Licenciamiento y Gestión",
    tasks: [
      "Documentación",
      "Análisis de información",
      "Gestión de requerimientos",
      "Optimización de procesos",
    ],
  },
  {
    year: "2024",
    company: "DANE",
    role: "Censista",
    tasks: [
      "Recolección de información",
      "Validación de datos",
      "Trabajo de campo",
      "Calidad de información",
    ],
  },
  {
    year: "2025",
    company: "EMTELCO",
    role: "Asesor de Fidelización",
    tasks: [
      "Retención de clientes",
      "Atención de casos",
      "Cumplimiento de indicadores",
      "Soluciones personalizadas",
    ],
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "HTML5", "CSS3", "Tailwind", "JavaScript", "TypeScript"],
  },
  { title: "Backend", items: ["Python", "Node.js", "Laravel", "PHP", "Express"] },
  {
    title: "Bases de datos",
    items: ["PostgreSQL", "MySQL", "MongoDB", "SQL Server", "Oracle"],
  },
  {
    title: "Business Intelligence",
    items: ["Power BI", "Metabase", "Tableau", "Excel", "Power Query"],
  },
  { title: "Inteligencia Artificial", items: ["OpenAI", "Claude", "Gemini", "Kimi"] },
];

export const technologies = [
  "Python",
  "JavaScript",
  "TypeScript",
  "SQL",
  "PHP",
  "React",
  "Next.js",
  "Laravel",
  "Node.js",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "SQL Server",
  "Firebase",
  "Docker",
  "Git",
  "GitHub",
  "Power BI",
  "Metabase",
  "Tableau",
  "AWS",
];

export const projects = [
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
    name: "Sistema ETL",
    status: "Finalizado",
    description:
      "Sistema que automatiza la recepción, transformación, validación y carga de información proveniente de múltiples archivos de inventario hacia una base de datos centralizada.",
    features: ["Normalización", "Homologación", "Limpieza", "Automatización"],
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
    name: "Desarrollo de Sistema de Agregación de Coordenadas",
    status: "Activo",
    description:
      "Plataforma desarrollada para automatizar el proceso de georreferenciación de clientes, permitiendo obtener, validar y administrar coordenadas geográficas de forma masiva, optimizando el tiempo de procesamiento y mejorando la calidad de la información geoespacial utilizada por la empresa.",
    features: [
      "Obtención de coordenadas",
      "Validación geográfica",
      "Administración masiva",
      "Optimización de procesamiento",
    ],
    tech: ["React", "Node.js", "Google Maps API"],
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
  { title: "Microsoft Power BI Data Analyst Associate", issuer: "Microsoft" },
  { title: "Introducción a la Ciencia de Datos", issuer: "IE University" },
  { title: "Inteligencia Artificial y Productividad", issuer: "Google" },
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
  { name: "LinkedIn", href: "https://www.linkedin.com/in/luis-fernando-rengifo-palacios-b2a5bb1b9/" },
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
