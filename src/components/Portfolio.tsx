"use client";

import { motion } from "motion/react";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

import { APP_CONFIG } from '@/config/globals';

const projects = [
  // Clínicas
  {
    title: "Landing Clínica Moderna 01",
    description: "Landing page profesional para clínica médica con diseño limpio, sistema de citas y secciones de servicios médicos.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwY2xpbmljfGVufDB8fHx8MTczMjEyMDAwMHww&ixlib=rb-4.1.0&q=80&w=1080",
    technologies: ["React", "Tailwind CSS", "Motion", "Responsive"],
    category: "Clínicas",
    liveUrl: "https://landing-clinica-01.pages.dev/",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Landing Clínica Moderna 02",
    description: "Sitio web para centro médico con enfoque en experiencia del paciente, galería de instalaciones y testimonios.",
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtZWRpY2FsJTIwY2xpbmljfGVufDB8fHx8MTczMjEyMDAwMHww&ixlib=rb-4.1.0&q=80&w=1080",
    technologies: ["React", "Tailwind CSS", "Motion", "Responsive"],
    category: "Clínicas",
    liveUrl: "https://landing-clinica-02.pages.dev/",
    gradient: "from-teal-500 to-blue-500",
  },
  {
    title: "Landing Clínica Moderna 03",
    description: "Landing especializada en servicios de salud con diseño intuitivo, información de especialidades y formulario de contacto.",
    image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxtZWRpY2FsJTIwY2xpbmljfGVufDB8fHx8MTczMjEyMDAwMHww&ixlib=rb-4.1.0&q=80&w=1080",
    technologies: ["React", "Tailwind CSS", "Motion", "Responsive"],
    category: "Clínicas",
    liveUrl: "https://landing-clinica-03.pages.dev/",
    gradient: "from-cyan-500 to-indigo-500",
  },
  
  // Restaurantes
  {
    title: "Landing Restaurante Gourmet 01",
    description: "Landing elegante para restaurante con menú digital, reservaciones en línea y galería de platillos destacados.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50fGVufDB8fHx8MTczMjEyMDAwMHww&ixlib=rb-4.1.0&q=80&w=1080",
    technologies: ["React", "Tailwind CSS", "Motion", "Responsive"],
    category: "Restaurantes",
    liveUrl: "https://landing-restaurant-01.pages.dev/",
    gradient: "from-orange-500 to-red-500",
  },
  {
    title: "Landing Restaurante Gourmet 02",
    description: "Sitio web para restaurante con diseño atractivo, carta interactiva y sistema de pedidos para llevar.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxyZXN0YXVyYW50fGVufDB8fHx8MTczMjEyMDAwMHww&ixlib=rb-4.1.0&q=80&w=1080",
    technologies: ["React", "Tailwind CSS", "Motion", "Responsive"],
    category: "Restaurantes",
    liveUrl: "https://landing-restaurant-02.pages.dev/",
    gradient: "from-red-500 to-pink-500",
  },
  {
    title: "Landing Restaurante Gourmet 03",
    description: "Landing moderna para establecimiento gastronómico con sección de chef, eventos especiales y reseñas de clientes.",
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxyZXN0YXVyYW50fGVufDB8fHx8MTczMjEyMDAwMHww&ixlib=rb-4.1.0&q=80&w=1080",
    technologies: ["React", "Tailwind CSS", "Motion", "Responsive"],
    category: "Restaurantes",
    liveUrl: "https://landing-restaurant-03.pages.dev/",
    gradient: "from-amber-500 to-orange-500",
  },
  
  // Talleres Mecánicos
  {
    title: "Landing Taller Mecánico 01",
    description: "Landing profesional para taller automotriz con servicios detallados, sistema de citas y promociones especiales.",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjByZXBhaXJ8ZW58MHx8fHwxNzMyMTIwMDAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    technologies: ["React", "Tailwind CSS", "Motion", "Responsive"],
    category: "Talleres Mecánicos",
    liveUrl: "https://landing-mecanica-01.pages.dev/",
    gradient: "from-gray-700 to-gray-900",
  },
  {
    title: "Landing Taller Mecánico 02",
    description: "Sitio web para servicio automotriz con catálogo de servicios, garantías y testimonios de clientes satisfechos.",
    image: "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxjYXIlMjByZXBhaXJ8ZW58MHx8fHwxNzMyMTIwMDAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    technologies: ["React", "Tailwind CSS", "Motion", "Responsive"],
    category: "Talleres Mecánicos",
    liveUrl: "https://landing-mecanica-02.pages.dev/",
    gradient: "from-slate-600 to-zinc-800",
  },
  {
    title: "Landing Taller Mecánico 03",
    description: "Landing especializada en reparación de vehículos con sección de diagnóstico, precios transparentes y ubicación.",
    image: "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxjYXIlMjByZXBhaXJ8ZW58MHx8fHwxNzMyMTIwMDAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    technologies: ["React", "Tailwind CSS", "Motion", "Responsive"],
    category: "Talleres Mecánicos",
    liveUrl: "https://landing-mecanica-03.pages.dev/",
    gradient: "from-neutral-700 to-stone-900",
  },
];

export function Portfolio() {
  return (
    <section className="py-24 relative overflow-hidden" id="portafolio">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-indigo-950/10 to-background" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
      
      <div className="container max-w-360 mx-auto px-4 md:px-6 lg:px-12 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Nuestro Portafolio
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Proyectos que hemos desarrollado con éxito para nuestros clientes
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card className="group relative overflow-hidden bg-gradient-to-br from-gray-900/90 to-gray-800/90 border-purple-500/20 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 h-full flex flex-col">
                {/* Image container */}
                <div className="relative overflow-hidden aspect-video">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity`} />
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Overlay with link on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white shadow-lg"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Ver Sitio
                      </a>
                    </Button>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl text-white group-hover:text-purple-300 transition-colors">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-purple-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                  
                  <p className="text-gray-400 text-sm mb-4 flex-1">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-purple-500/10 text-purple-300 border border-purple-500/30 hover:bg-purple-500/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                {/* Bottom gradient accent */}
                <div className={`h-1 bg-gradient-to-r ${project.gradient}`} />
              </Card>
            </motion.div>
          ))}
        </div>
        
        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <p className="text-gray-400 mb-6">
            ¿Tienes un proyecto en mente?
          </p>
          <a 
            href={`https://wa.me/${APP_CONFIG.whatspp}?text=${APP_CONFIG.message}`}
            target="_blank"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8"
            >
              Trabajemos Juntos
              <ArrowUpRight className="ml-2 w-5 h-5" />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
