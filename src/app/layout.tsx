import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

// Fuente popping
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Lobito Consulting | Desarrollo de Software a Medida",
  description: "Servicios profesionales de desarrollo de software: landing pages, bases de datos, aplicaciones web y soluciones personalizadas para tu negocio.",
  keywords: [
    "desarrollo de software",
    "aplicaciones web",
    "landing pages",
    "bases de datos",
    "desarrollo a medida",
    "consultoría IT",
    "desarrollo web",
    "aplicaciones personalizadas",
    "soluciones empresariales",
    "desarrollo de aplicaciones",
    "desarrollo fullstack",
    "servicios de programación",
    "desarrollo frontend",
    "desarrollo backend",
    "diseño web profesional",
    "optimización web",
    "desarrollo de sistemas",
    "tecnologías web",
    "software empresarial",
    "aplicaciones móviles"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
