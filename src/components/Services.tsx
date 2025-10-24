"use client";

import { motion } from "motion/react";
import { Code2, Smartphone, Globe, Palette, Zap, Cpu } from "lucide-react";
import { Card } from "./ui/card";

const services = [
  {
    icon: Globe,
    title: "Landing Pages",
    description: "Páginas de aterrizaje diseñadas para convertir visitantes en clientes. Optimizadas para SEO y velocidad.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Code2,
    title: "Software a Medida",
    description: "Desarrollo de aplicaciones web personalizadas que se adaptan perfectamente a las necesidades de tu negocio.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Smartphone,
    title: "Desarrollo Mobile",
    description: "Apps nativas e híbridas para iOS y Android. Experiencias móviles de alta calidad.",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Diseño de interfaces intuitivas y atractivas que mejoran la experiencia del usuario.",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: Zap,
    title: "Optimización Web",
    description: "Mejoramos el rendimiento de tu sitio web para una experiencia ultrarrápida.",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    icon: Cpu,
    title: "Integración de APIs",
    description: "Conectamos tus sistemas con servicios externos para expandir funcionalidades.",
    gradient: "from-green-500 to-emerald-500",
  },
];

export function Services() {
  return (
    <section className="py-24 relative overflow-hidden" id="servicios">
      <div className="absolute inset-0 bg-linear-to-b from-background via-purple-950/10 to-background" />
      
      <div className="container max-w-360 mx-auto px-4 md:px-6 lg:px-12 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-linear-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Nuestros Servicios
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Soluciones tecnológicas completas para llevar tu negocio al siguiente nivel
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-purple-500/20 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 group h-full">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-xl mb-3 text-white">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{service.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
