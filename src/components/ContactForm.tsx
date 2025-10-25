'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  subject: string;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    subject: ''
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
          phone: '',
          company: '',
          message: '',
          subject: ''
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
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Contáctanos
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Nombre *
          </label>
          <Input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Tu nombre completo"
            required
            disabled={status.type === 'loading'}
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email *
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="tu@email.com"
            required
            disabled={status.type === 'loading'}
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Teléfono
          </label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+51 999 999 999"
            disabled={status.type === 'loading'}
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
            Empresa
          </label>
          <Input
            id="company"
            name="company"
            type="text"
            value={formData.company}
            onChange={handleChange}
            placeholder="Tu empresa (opcional)"
            disabled={status.type === 'loading'}
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
            Asunto
          </label>
          <Input
            id="subject"
            name="subject"
            type="text"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Asunto del mensaje"
            disabled={status.type === 'loading'}
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Mensaje *
          </label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Cuéntanos sobre tu proyecto..."
            rows={4}
            required
            disabled={status.type === 'loading'}
          />
        </div>

        <Button
          type="submit"
          className="w-full"
          disabled={status.type === 'loading'}
        >
          {status.type === 'loading' ? 'Enviando...' : 'Enviar Mensaje'}
        </Button>
      </form>

      {/* Mostrar estado del formulario */}
      {status.message && (
        <div className={`mt-4 p-3 rounded-md text-sm ${
          status.type === 'success' 
            ? 'bg-green-100 text-green-700 border border-green-300' 
            : status.type === 'error'
            ? 'bg-red-100 text-red-700 border border-red-300'
            : 'bg-blue-100 text-blue-700 border border-blue-300'
        }`}>
          {status.message}
        </div>
      )}

      <div className="mt-6 text-xs text-gray-500 text-center">
        Los campos marcados con * son obligatorios
      </div>
    </div>
  );
}