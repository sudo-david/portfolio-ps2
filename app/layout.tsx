import type { Metadata } from "next";
import "./globals.css";
import BackgroundScene from "@/components/BackgroundScene";
import BootMask from "@/components/BootMask";

export const metadata: Metadata = {
  metadataBase: new URL("https://david-duque.vercel.app"), // reemplaza por tu dominio real al desplegar
  title: "David Duque Vélez — Desarrollador Full Stack",
  description:
    "Estudiante de Ingeniería de Sistemas y desarrollador full stack en Medellín. Python, Flask, Next.js, React, MySQL, Java y Spring Boot.",
  openGraph: {
    title: "David Duque Vélez — Desarrollador Full Stack",
    description:
      "Estudiante de Ingeniería de Sistemas y desarrollador full stack en Medellín, construyendo RutaXRuta y NEXUS.",
    type: "website",
    locale: "es_CO",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <BackgroundScene />
        <BootMask />
        <div className="vignette" />
        {children}
      </body>
    </html>
  );
}
