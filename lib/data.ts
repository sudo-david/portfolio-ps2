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
    subtitle: "Carpooling · Mapas en tiempo real",
    summary:
      "App para coordinar rutas compartidas del metro de Medellín, con mapas interactivos en tiempo real.",
    description:
      "RutaXRuta es una aplicación de carpooling construida en equipo con Daniela Cataño y Anderson Medina, pensada para coordinar rutas compartidas del metro de Medellín usando mapas interactivos con geolocalización en tiempo real.",
    challenges: [
      "Serialización de coordenadas LatLng de Leaflet.js que rompía al guardarse en MySQL",
      "Discrepancias de esquema entre columnas DATETIME y TIME en distintas tablas",
      "Animaciones de Framer Motion que fallaban en renderizado sobre Android",
    ],
    learnings: [
      "Cómo depurar problemas de serialización entre librerías de mapas y bases de datos relacionales",
      "Reemplazar animaciones basadas en JS por CSS @keyframes nativas para mejorar compatibilidad mobile",
      "Coordinar trabajo en equipo sobre un repositorio compartido con conflictos de merge frecuentes",
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