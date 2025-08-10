"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { PhoneIcon as WhatsApp, X } from "lucide-react"
import { IconBrandWhatsapp } from "@tabler/icons-react"

// Composant pour le bouton WhatsApp flottant
export default function WhatsAppButton() {
  // État pour gérer l'ouverture/fermeture de la bulle
  const [isOpen, setIsOpen] = useState(false)

  // Numéro de téléphone WhatsApp
  const phoneNumber = "+22901518683422" // Numéro WhatsApp de Prudencia Mian

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="absolute bottom-16 right-0 bg-white dark:bg-purple-heart-900 p-4 rounded-lg shadow-lg mb-2 w-72"
          >
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold text-purple-heart-900 dark:text-white">Contactez-moi</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-purple-heart-500 hover:text-purple-heart-700 dark:text-purple-heart-400 dark:hover:text-purple-heart-200"
              >
                <X size={18} />
              </button>
            </div>
            <p className="text-sm text-purple-heart-700 dark:text-purple-heart-300 mb-4">
              Discutons de votre projet directement sur WhatsApp !
            </p>
            <a
              href={`https://wa.me/${phoneNumber.replace(/\+|\s/g, "")}?text=Bonjour, je souhaite discuter d'un projet avec vous.`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded text-center transition-colors"
            >
              <div className="flex items-center justify-center">
                <IconBrandWhatsapp className="mr-2 h-5 w-5" />
                <span>Discuter sur WhatsApp</span>
              </div>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center relative"
      >
        <IconBrandWhatsapp size={24} />
        <motion.div
          className="absolute inset-0 bg-green-500 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [1, 0, 0],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: 1,
          }}
        />
      </motion.button>
    </div>
  )
}
