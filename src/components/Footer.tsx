"use client";

import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { APP_CONFIG } from '@/config/globals';

export function Footer() {
  return (
    <footer className="py-12 border-t border-purple-500/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-purple-950/10 to-transparent" />
      
      <div className="container max-w-360 mx-auto px-4 md:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl mb-3 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Lobito Consulting
            </h3>
            <p className="text-gray-400 mb-4 max-w-md">
              Transformando ideas en soluciones digitales de última generación. Tu socio tecnológico de confianza.
            </p>
            <div className="flex gap-4">
              <a
                href={`mailto:${APP_CONFIG.email}?subject=${APP_CONFIG.subject}`}
                className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center hover:bg-purple-500/20 transition-colors"
              >
                <Mail className="w-5 h-5 text-purple-400" />
              </a>
              {/* <a
                href="#"
                className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center hover:bg-purple-500/20 transition-colors"
              >
                <Github className="w-5 h-5 text-purple-400" />
              </a> */}
              {/* <a
                href="#"
                className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center hover:bg-purple-500/20 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-purple-400" />
              </a> */}
              {/* <a
                href="#"
                className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center hover:bg-purple-500/20 transition-colors"
              >
                <Twitter className="w-5 h-5 text-purple-400" />
              </a> */}
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="mb-4 text-white">Servicios</h4>
            <ul className="space-y-2">
              <li>
                <a href="#servicios" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Landing Pages
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Software a Medida
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Desarrollo Mobile
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-400 hover:text-purple-400 transition-colors">
                  UI/UX Design
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Power BI & Analytics
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-400 hover:text-purple-400 transition-colors">
                  SAP Business One
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-400 hover:text-purple-400 transition-colors">
                  SAP S/4HANA
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Power Apps
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-400 hover:text-purple-400 transition-colors">
                  RPA Automatizaciones IA
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Base de datos
                </a>
              </li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="mb-4 text-white">Compañía</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Contacto
                </a>
              </li>
              {/* <li>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Blog
                </a>
              </li> */}
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-purple-500/20 text-center text-gray-400">
          <p>© 2025 Lobito Consulting. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
