"use client";

import React, { useState } from 'react';
import { motion } from "motion/react";
import { Mail, MessageSquare, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card } from "./ui/card";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<FormStatus>({
    type: 'idle',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validación básica
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        type: 'error',
        message: 'Por favor, completa todos los campos requeridos.'
      });
      return;
    }

    setStatus({ type: 'loading', message: 'Enviando mensaje...' });

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({
          type: 'success',
          message: '¡Mensaje enviado correctamente! Te contactaremos pronto.'
        });
        
        // Limpiar el formulario
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error(result.error || 'Error al enviar el mensaje');
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Error inesperado al enviar el mensaje'
      });
    }
  };

  return (
    <section className="py-24 relative overflow-hidden" id="contacto">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-purple-950/10 to-background" />
      
      <div className="container mx-auto px-4 relative z-10 max-w-4xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Comienza Tu Proyecto
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Cuéntanos sobre tu idea y te ayudaremos a convertirla en realidad
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Card className="p-8 bg-gradient-to-br from-gray-900/70 to-gray-800/70 border-purple-500/30 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm text-gray-300">
                    Nombre
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    className="bg-gray-900/50 border-purple-500/30 text-white placeholder:text-gray-500 focus:border-purple-500"
                    disabled={status.type === 'loading'}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm text-gray-300">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      className="bg-gray-900/50 border-purple-500/30 text-white placeholder:text-gray-500 pl-11 focus:border-purple-500"
                      disabled={status.type === 'loading'}
                      required
                    />
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm text-gray-300">
                  Asunto
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="¿En qué podemos ayudarte?"
                  className="bg-gray-900/50 border-purple-500/30 text-white placeholder:text-gray-500 focus:border-purple-500"
                  disabled={status.type === 'loading'}
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm text-gray-300">
                  Mensaje
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Cuéntanos sobre tu proyecto..."
                    rows={6}
                    className="bg-gray-900/50 border-purple-500/30 text-white placeholder:text-gray-500 pl-11 focus:border-purple-500 resize-none"
                    disabled={status.type === 'loading'}
                    required
                  />
                </div>
              </div>
              
              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white group"
                disabled={status.type === 'loading'}
              >
                {status.type === 'loading' ? 'Enviando...' : 'Enviar Mensaje'}
                <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>

            {/* Mostrar estado del formulario */}
            {status.message && (
              <div className={`mt-6 p-4 rounded-lg text-sm ${
                status.type === 'success' 
                  ? 'bg-green-900/50 text-green-300 border border-green-500/30' 
                  : status.type === 'error'
                  ? 'bg-red-900/50 text-red-300 border border-red-500/30'
                  : 'bg-blue-900/50 text-blue-300 border border-blue-500/30'
              }`}>
                {status.message}
              </div>
            )}
          </Card>
        </motion.div>
        
        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {[
            { value: "100+", label: "Proyectos" },
            { value: "50+", label: "Clientes Felices" },
            { value: "5+", label: "Años" },
            { value: "99%", label: "Satisfacción" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-purple-500/20"
            >
              <div className="text-3xl md:text-4xl mb-2 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
