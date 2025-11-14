"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { APP_CONFIG } from '@/config/globals';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Inicio", href: "/" },
    { label: "Servicios", href: "/servicios" },
    { label: "Portafolio", href: "/portafolio" },
    { label: "Contacto", href: "/contacto" },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-xl border-b border-purple-500/20 shadow-lg shadow-purple-500/5"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container max-w-360 mx-auto px-4 md:px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-3 group relative"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Link href="/" className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-linear-to-br from-purple-600 to-indigo-600 rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity" />
                <div className="relative w-10 h-10 flex items-center justify-center">
                  <Image 
                    src="/logo.webp"
                    alt="Logo"
                    width={40}
                    height={40}
                    priority
                  />
                  {/* <Sparkles className="w-5 h-5 text-white" /> */}
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl bg-linear-to-r from-white via-purple-200 to-indigo-200 bg-clip-text text-transparent tracking-tight italic">
                  Lobito
                </span>
                <span className="text-xs text-purple-400 -mt-1 italic">Consulting</span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
              return (
                <motion.div key={item.label}>
                  <Link
                    href={item.href}
                    className={`relative px-4 py-2 transition-colors group ${
                      isActive 
                        ? 'text-white' 
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {item.label}
                    <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-linear-to-r from-purple-500 to-indigo-500 transition-all duration-300 ${
                      isActive 
                        ? 'w-3/4' 
                        : 'w-0 group-hover:w-3/4'
                    }`} />
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <motion.a
            className="hidden md:block cursor-pointer"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            href={`https://wa.me/${APP_CONFIG.whatspp}?text=${APP_CONFIG.message}`}
            target="_blank"
          >
            <Button className="relative bg-linear-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-6 overflow-hidden group">
              <span className="relative z-10">Comenzar Proyecto</span>
              <div className="absolute inset-0 bg-linear-to-r from-purple-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>
          </motion.a>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden relative w-10 h-10 flex items-center justify-center text-gray-300 hover:text-purple-400 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden border-t border-purple-500/20 bg-background/95 backdrop-blur-xl"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container max-w-360 mx-auto px-4 md:px-6 lg:px-12 py-6 space-y-1">
              {navItems.map((item, index) => {
                const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className={`block px-4 py-3 rounded-lg transition-colors ${
                        isActive 
                          ? 'text-white bg-purple-500/20' 
                          : 'text-gray-300 hover:text-white hover:bg-purple-500/10'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.a
                className="cursor-pointer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
                href={`https://wa.me/${APP_CONFIG.whatspp}?text=${APP_CONFIG.message}`}
                target="_blank"
              >
                <Button className="w-full mt-4 bg-linear-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white">
                  Comenzar Proyecto
                </Button>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
