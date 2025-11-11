"use client";

import { motion } from "motion/react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

import { APP_CONFIG } from '@/config/globals';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Plataforma de comercio electrónico moderna con carrito de compras, pasarela de pagos y panel de administración.",
    image: "https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlfGVufDF8fHx8MTc2MTI3ODIxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    technologies: ["React", "Node.js", "Stripe", "MongoDB"],
    githubUrl: "https://github.com/JGarciaSupa",
    liveUrl: "https://github.com/JGarciaSupa/Maquina-Calera-Service",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Analytics Dashboard",
    description: "Dashboard interactivo con visualización de datos en tiempo real, gráficos personalizables y reportes automatizados.",
    image: "https://images.unsplash.com/photo-1653307986572-d0176190386d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBkZXNpZ258ZW58MXx8fHwxNzYxMzE2ODk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    technologies: ["Next.js", "TypeScript", "Recharts", "Tailwind"],
    githubUrl: "https://github.com/JGarciaSupa",
    liveUrl: "https://github.com/JGarciaSupa/Maquina-Calera-Service",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Mobile Fitness App",
    description: "Aplicación móvil para seguimiento de ejercicios, planes de nutrición y rutinas personalizadas con IA.",
    image: "https://images.unsplash.com/photo-1613441583994-7080eafd6e6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBzY3JlZW58ZW58MXx8fHwxNzYxMjc2NzQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    technologies: ["React Native", "Firebase", "Redux", "Expo"],
    githubUrl: "https://github.com/JGarciaSupa",
    liveUrl: "https://github.com/JGarciaSupa/Maquina-Calera-Service",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    title: "SaaS Landing Page",
    description: "Landing page de alto impacto para startup SaaS con animaciones avanzadas y formularios de conversión optimizados.",
    image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYxMjI1NDQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    technologies: ["React", "Motion", "Tailwind", "Vite"],
    githubUrl: "https://github.com/JGarciaSupa",
    liveUrl: "https://github.com/JGarciaSupa/Maquina-Calera-Service",
    gradient: "from-orange-500 to-red-500",
  },
  {
    title: "AI Chat Platform",
    description: "Plataforma de chat inteligente con integración de IA, mensajería en tiempo real y análisis de sentimientos.",
    image: "https://images.unsplash.com/photo-1579403124614-197f69d8187b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50fGVufDF8fHx8MTc2MTIyNDA2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    technologies: ["Vue.js", "Socket.io", "OpenAI", "PostgreSQL"],
    githubUrl: "https://github.com/JGarciaSupa",
    liveUrl: "https://github.com/JGarciaSupa/Maquina-Calera-Service",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    title: "Real Estate Portal",
    description: "Portal inmobiliario con búsqueda avanzada, tours virtuales 360° y sistema de gestión de propiedades.",
    image: "https://images.unsplash.com/photo-1672581437674-3186b17b405a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjEyODYzOTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    technologies: ["Angular", "NestJS", "GraphQL", "AWS"],
    githubUrl: "https://github.com/JGarciaSupa",
    liveUrl: "https://github.com/JGarciaSupa/Maquina-Calera-Service",
    gradient: "from-yellow-500 to-orange-500",
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
                  
                  {/* Overlay with links on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-white/20 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Ver Demo
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
