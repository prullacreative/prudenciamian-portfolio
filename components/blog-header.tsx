"use client"

import { motion } from "framer-motion"

export default function BlogHeader() {
  return (
    <section className="py-16 bg-purple-heart-50 dark:bg-purple-heart-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-heart-300 dark:via-purple-heart-700 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-heart-300 dark:via-purple-heart-700 to-transparent"></div>

      <div className="absolute -top-20 -left-20 w-60 h-60 bg-purple-heart-200 dark:bg-purple-heart-800 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-heart-100 dark:bg-purple-heart-900 rounded-full blur-3xl opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="font-script text-2xl text-purple-heart-600 dark:text-purple-heart-400 block mb-2">Blog</span>
          <h1 className="text-4xl md:text-5xl font-display text-purple-heart-900 dark:text-white mb-4">
            Astuces & Conseils
          </h1>
          <p className="text-purple-heart-700 dark:text-purple-heart-300 max-w-2xl mx-auto">
            Explorez mes articles sur le développement web, le design UI/UX et l'intelligence artificielle. Restez à
            jour avec les dernières tendances et technologies.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-heart-400 to-purple-heart-600 mx-auto mt-4"></div>
        </motion.div>
      </div>
    </section>
  )
}
