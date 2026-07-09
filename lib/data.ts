export type Skill = {
  name: string;
  level: "core" | "learning";
  pct: number;
  icon: string;
};

export const skills: Skill[] = [
  { name: "Python", level: "core", pct: 92, icon: "python" },
  { name: "Flask", level: "core", pct: 88, icon: "flask" },
  { name: "Next.js", level: "core", pct: 85, icon: "nextjs" },
  { name: "React", level: "core", pct: 85, icon: "react" },
  { name: "MySQL", level: "core", pct: 88, icon: "mysql" },
  { name: "JavaScript", level: "core", pct: 90, icon: "js" },
  { name: "Tailwind CSS", level: "core", pct: 80, icon: "tailwind" },
  { name: "Git", level: "core", pct: 82, icon: "git" },
  { name: "Java", level: "learning", pct: 40, icon: "java" },
  { name: "Spring Boot", level: "learning", pct: 35, icon: "spring" },
];

export type Project = {
  slug: string;
  emoji: string;
  name: string;
  subtitle: string;
  summary: string;
  description: string;
  challenges: string[];
  learnings: string[];
  stack: string[];
  repoUrl: string;
};

export const projects: Project[] = [
  {
    slug: "rutaxruta",
    emoji: "🚗",
    name: "RutaXRuta",
    subtitle: "Carpooling · Mapas en tiempo real · Diseño web",
    summary:
      "App para coordinar rutas compartidas del en Medellín, con mapas interactivos en tiempo real.",
    description:
      "RutaXRuta es un ecosistema digital y una aplicación web responsiva diseñada para transformar la movilidad urbana mediante el transporte colaborativo (carpooling). El sistema conecta en tiempo real a conductores y pasajeros que comparten trayectos y horarios similares, permitiendo una planificación de viajes eficiente y organizada",
    challenges: [
      "Gestión de Roles Dinámica: El sistema adapta su interfaz de forma inteligente. Si el usuario ingresa como Conductor, dispone de herramientas para publicar su ruta, indicar la placa del vehículo y la hora de salida. Si ingresa como Pasajero, la plataforma le despliega un listado de viajes disponibles para solicitar su cupo de inmediato.",
      "Geolocalización Interactiva: Integra un mapa de cobertura en tiempo real que permite a los usuarios marcar con precisión sus puntos de origen y destino, garantizando un emparejamiento de rutas óptimo.",
      "Enfoque de Impacto Sostenible: Ataca directamente problemáticas urbanas críticas como la congestión vehicular, los altos costos de transporte para los usuarios y la contaminación ambiental provocada por el uso ineficiente de vehículos con un solo ocupante",
    ],
    learnings: [
      "Arquitectura de Software y Renderizado con Next.js",
      "Desarrollo Frontend Responsivo y Adaptabilidad (Mobile-First)",
      "Integración de Servicios en Tiempo Real y Geolocalización con Leaflet.js",
    ],
    stack: ["Next.js", "React", "Tailwind CSS", "Leaflet.js", "MySQL", "Framer Motion → CSS keyframes"],
    repoUrl: "https://github.com/sudo-david/rutaxruta",
  },
  {
    slug: "nexus",
    emoji: "🌐",
    name: "NEXUS",
    subtitle: "Red social · Proyecto de bases de datos",
    summary:
      "Red social con estética cyberpunk, construida como proyecto de bases de datos, con autenticación segura y arquitectura Blueprint.",
    description:
      "NEXUS es una red social con estética cyberpunk construida como proyecto de curso de bases de datos. Incluye un sistema completo de solicitudes de amistad, notificaciones, y autenticación segura, sustentado ante evaluación oral.",
    challenges: [
      "Diseñar un esquema relacional normalizado para relaciones de amistad bidireccionales",
      "Responder preguntas orales sobre JOINs complejos durante la sustentación",
      "Organizar el backend con Flask Blueprints para mantener el código modular",
    ],
    learnings: [
      "Diseño de bases de datos relacionales desde cero, incluyendo normalización y claves foráneas",
      "Autenticación segura con bcrypt y manejo de sesiones con Flask-Session",
      "Cómo defender decisiones técnicas de diseño frente a preguntas directas",
    ],
    stack: ["Flask", "MySQL", "Tailwind CSS", "bcrypt", "Flask-Session", "Flask Blueprints"],
    repoUrl: "https://github.com/sudo-david/nexus-social",
  },
];