"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const MyPhoto = "https://res.cloudinary.com/dl2yc7401/image/upload/v1754697654/IMG_2705_nqcdd9.jpg";


export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-950 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-heart-300 dark:via-purple-heart-700 to-transparent"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-heart-100/30 dark:bg-purple-heart-900/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-purple-heart-200/30 dark:bg-purple-heart-800/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-script text-2xl text-purple-heart-600 dark:text-purple-heart-400 block mb-2">
            À propos
          </span>
          <h2 className="text-4xl md:text-5xl font-display text-purple-heart-900 dark:text-white mb-4">Qui suis-je?</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-heart-400 to-purple-heart-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Decorative frame */}
              <div className="absolute -inset-4 bg-purple-heart-100 dark:bg-purple-heart-800 rounded-lg rotate-3"></div>
              <div className="absolute inset-0 bg-purple-heart-200 dark:bg-purple-heart-700 rounded-lg -rotate-3"></div>

              {/* Image container */}
              <div className="relative aspect-square rounded-lg overflow-hidden border-4 border-white dark:border-gray-950 shadow-xl">
                <Image
                  src={MyPhoto}
                  alt="PrullaCreative"
                  width={500}
                  height={500}
                  className="object-cover"
                />

                {/* Decorative elements */}
                {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-purple-heart-900/50 to-transparent"></div> */}
                <div className="absolute bottom-4 right-4 font-script text-2xl text-white rotate-[-5deg]">
                  PrullaCreative
                </div>

                {/* Geometric accents */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-heart-500 dark:bg-purple-heart-400 rounded-full"></div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-purple-heart-400 dark:bg-purple-heart-500 rounded-full"></div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col space-y-6"
          >
            <h3 className="text-2xl font-display text-purple-heart-800 dark:text-purple-heart-200">
              Développeuse fullstack,{" "}
              <span className="text-purple-heart-600 dark:text-purple-heart-400">passionnée</span> par la tech et l'expérience utilisateur
            </h3>

            <p className="text-purple-heart-700 dark:text-purple-heart-300">
              Bienvenue dans mon univers créatif ! Je suis une développeuse fullstack qui aime fusionner technologie et
              créativité pour créer des expériences digitales uniques et impactantes.
            </p>

            {/* <p className="text-purple-heart-700 dark:text-purple-heart-300">
              Mon parcours m'a permis d'acquérir une expertise dans le développement web et mobile, avec une attention
              particulière pour le design UI/UX et l'optimisation de l'expérience utilisateur.
            </p> */}

            {/* <div className="relative">
              <p className="text-purple-heart-700 dark:text-purple-heart-300 pl-6 border-l-2 border-purple-heart-400 dark:border-purple-heart-500 italic">
                Je crois fermement que chaque projet est une opportunité de repousser les limites de la créativité et de
                l'innovation. Mon approche combine rigueur technique et sensibilité artistique.
              </p>
              <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-4 h-4 bg-purple-heart-400 dark:bg-purple-heart-500 rounded-full"></div>
            </div> */}

            <div className="pt-4">
              <h4 className="text-lg font-display text-purple-heart-800 dark:text-purple-heart-200 mb-3 flex items-center">
                <span className="w-6 h-px bg-purple-heart-400 dark:bg-purple-heart-500 mr-2"></span>
                Découvrez mes compétences
              </h4>
              <p className="text-purple-heart-700 dark:text-purple-heart-300 mb-4">
                J'ai développé une expertise dans de nombreux domaines du développement web et du design. Consultez ma
                section dédiée pour en savoir plus.
              </p>
              <a
                href="#skills"
                className="inline-flex items-center px-4 py-2 rounded-md bg-purple-heart-100 text-purple-heart-800 hover:bg-purple-heart-200 dark:bg-purple-heart-800 dark:text-purple-heart-200 dark:hover:bg-purple-heart-700 transition-colors"
              >
                Voir toutes mes compétences
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
