"use client";

import { motion } from "motion/react";
import { ArrowRight, Code2, Rocket, Zap, Star } from "lucide-react";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import Image from "next/image";
import { APP_CONFIG } from '@/config/globals';

export function Hero() {
  // Estado para las partículas flotantes
  const [particles, setParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    duration: number;
    delay: number;
  }>>([]);

  // Generar partículas solo en el cliente
  useEffect(() => {
    const generateParticles = () => {
      return Array.from({ length: 30 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
        duration: Math.random() * 20 + 10,
        delay: Math.random() * 5,
      }));
    };
    
    setParticles(generateParticles());
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background con lineares mejorados */}
      <div className="absolute inset-0 bg-linear-to-br from-background via-purple-950/20 to-indigo-950/20" />
      
      {/* lineare radial central */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-linear-to-r from-purple-600/30 via-indigo-600/30 to-pink-600/30 rounded-full blur-3xl opacity-30" />
      
      {/* Grid mejorado */}
      <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-linear(rgba(139, 92, 246, 0.05) 1px, transparent 1px),
          linear-linear(90deg, rgba(139, 92, 246, 0.05) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
      }} />
      
      {/* Partículas flotantes */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-purple-400/30"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Orbes flotantes más grandes */}
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Contenido principal */}
      <div className="container max-w-360 mx-auto px-4 md:px-6 lg:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Título principal */}
          <motion.div
            className="text-center mb-8 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Image
              src="/logo.webp"
              alt="Lobito Consulting Logo"
              width={240}
              height={237}
              className="mx-auto mb-4"
              priority
            />
            <h1 className="text-5xl md:text-7xl lg:text-8xl mb-6 tracking-tight flex">
              {/* <span className="block bg-linear-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                Lobito 
              </span> */}
              <span className="block bg-linear-to-r from-purple-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent pb-4 text-center w-full">
                Lobito Consulting
              </span>
            </h1>

            {/* Badge superior */}
            <motion.div
              className="flex justify-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-linear-to-r from-purple-500/10 to-indigo-500/10 border border-purple-500/30 backdrop-blur-sm -mt-2">
                <Star className="w-4 h-4 text-purple-400 fill-purple-400" />
                <span className="text-sm text-purple-300">Soluciones Digitales de Vanguardia</span>
                <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
              </div>
            </motion.div>

          </motion.div>
          
          {/* Subtítulo */}
          <motion.p
            className="text-center text-xl md:text-2xl text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Transformamos tus ideas en{" "}
            <span className="text-purple-400">experiencias digitales</span>{" "}
            extraordinarias que impulsan tu negocio al futuro
          </motion.p>
          
          {/* Descripción */}
          <motion.p
            className="text-center text-gray-400 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Landing pages de alto impacto • Software a medida • Desarrollo móvil • UI/UX Design
          </motion.p>
          
          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a 
              className="relative z-10 flex items-center gap-2"
              href={`https://wa.me/${APP_CONFIG.whatspp}?text=${APP_CONFIG.message}`}
              target="_blank"
            >
              <Button
                size="lg"
                className="relative bg-linear-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-10 py-7 group overflow-hidden"
              >
                <div className="relative z-10 flex items-center gap-2">
                  Comienza Tu Proyecto
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="absolute inset-0 bg-linear-to-r from-purple-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>
            </a>
            <a href="#servicios">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-purple-500/50 hover:bg-purple-500/10 hover:border-purple-400 text-white px-10 py-7 backdrop-blur-sm"
              >
                Explorar Servicios
              </Button>
            </a>
          </motion.div>
          
          {/* Cards flotantes con servicios destacados */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {[
              {
                icon: Code2,
                title: "Desarrollo Web",
                description: "Sitios y apps de alto rendimiento",
                linear: "from-blue-500 to-cyan-500",
              },
              {
                icon: Rocket,
                title: "Launch Rápido",
                description: "De la idea al mercado en semanas",
                linear: "from-purple-500 to-pink-500",
              },
              {
                icon: Zap,
                title: "Optimización",
                description: "Máxima velocidad y SEO",
                linear: "from-yellow-500 to-orange-500",
              },
            ].map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  className="relative group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="absolute inset-0 bg-linear-to-br from-purple-500/10 to-indigo-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                  <div className="relative p-6 rounded-2xl bg-linear-to-br from-gray-900/80 to-gray-800/80 border border-purple-500/20 backdrop-blur-sm group-hover:border-purple-500/40 transition-all h-full">
                    <div className={`w-12 h-12 rounded-xl bg-linear-to-br ${service.linear} p-2.5 mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-full h-full text-white" />
                    </div>
                    <h3 className="text-lg mb-2 text-white">{service.title}</h3>
                    <p className="text-sm text-gray-400">{service.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
      
      {/* Líneas decorativas */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-purple-500/50 to-transparent" />
    </section>
  );
}
