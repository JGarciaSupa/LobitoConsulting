"use client";

import { motion } from "motion/react";
import { MessageCircle, X } from "lucide-react";
import { useState } from "react";

export function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  
  // Reemplaza con tu número de WhatsApp (formato internacional sin +, -, o espacios)
  const phoneNumber = "34641256504";
  const message = "Hola! Me interesa saber más sobre sus servicios.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <>
      {/* Tooltip */}
      <motion.div
        className="fixed bottom-24 right-6 z-50"
        initial={{ opacity: 0, x: 20 }}
        animate={{ 
          opacity: showTooltip ? 1 : 0,
          x: showTooltip ? 0 : 20,
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg blur-md opacity-50" />
          <div className="relative px-4 py-3 bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-sm border border-purple-500/30 rounded-lg shadow-xl">
            <p className="text-white text-sm whitespace-nowrap">¿Necesitas ayuda?</p>
            <p className="text-purple-300 text-xs">Escríbenos por WhatsApp</p>
          </div>
          {/* Arrow */}
          <div className="absolute -bottom-2 right-8 w-4 h-4 bg-gray-900 border-r border-b border-purple-500/30 transform rotate-45" />
        </div>
      </motion.div>

      {/* Main Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 group"
        onMouseEnter={() => {
          setIsHovered(true);
          setShowTooltip(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
          setShowTooltip(false);
        }}
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ 
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 1,
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
        
        {/* Pulse animation */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Button */}
        <div className="relative w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/50 border-2 border-white/20">
          <motion.div
            animate={{ rotate: isHovered ? 360 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <MessageCircle className="w-8 h-8 text-white fill-white" />
          </motion.div>
        </div>

        {/* Notification badge */}
        <motion.div
          className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-red-500 to-pink-500 rounded-full border-2 border-background flex items-center justify-center"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <span className="text-white text-xs">1</span>
        </motion.div>
      </motion.a>
    </>
  );
}
