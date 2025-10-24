"use client";

import { motion } from "motion/react";
import { Rocket, Shield, Timer, Users } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const features = [
  {
    icon: Rocket,
    title: "Desarrollo Ágil",
    description: "Entregas rápidas y eficientes con metodologías modernas",
  },
  {
    icon: Shield,
    title: "Código Seguro",
    description: "Aplicaciones robustas con las mejores prácticas de seguridad",
  },
  {
    icon: Timer,
    title: "Soporte 24/7",
    description: "Estamos disponibles cuando nos necesites",
  },
  {
    icon: Users,
    title: "Equipo Experto",
    description: "Profesionales con años de experiencia en la industria",
  },
];

export function Features() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-background via-indigo-950/10 to-background" />
      
      <div className="container max-w-360 mx-auto px-4 md:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl blur-2xl opacity-20" />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1579403124614-197f69d8187b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50fGVufDF8fHx8MTc2MTIyNDA2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Software Development"
                className="relative rounded-2xl shadow-2xl border border-purple-500/20"
              />
            </div>
          </motion.div>
          
          {/* Content Side */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent pb-2">
              ¿Por qué elegirnos?
            </h2>
            <p className="text-gray-400 mb-10 text-lg">
              Nos diferenciamos por nuestro compromiso con la excelencia y la innovación constante.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    className="flex gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-indigo-600 p-2.5 flex items-center justify-center">
                        <Icon className="w-full h-full text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg mb-1 text-white">{feature.title}</h3>
                      <p className="text-gray-400 text-sm">{feature.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
