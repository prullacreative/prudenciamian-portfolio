"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Monitor, Server } from 'lucide-react'

export default function ServicesSection() {
  const services = [
    {
      title: "Développement Frontend",
      description:
        "Je crée des interfaces qui captent l'attention de vos clients et les transforment en conversions. Des expériences utilisateur fluides qui fidélisent et font grandir votre business.",
      icon: <Monitor className="w-12 h-12 text-purple-heart-600 dark:text-purple-heart-400" />,
      features: [
        "Augmentation du taux de conversion", 
        "Expérience utilisateur engageante", 
        "Temps de chargement ultra-rapides", 
        "Accessibilité sur tous les appareils",
        "Interface intuitive qui guide vos clients",
        "Design qui renforce votre crédibilité",
        "Optimisation SEO pour plus de visibilité",
        "Intégration des réseaux sociaux",
        "Tableaux de bord analytiques en temps réel",
        "Formulaires intelligents et automatisés",
        "Chat en direct et support client intégré",
        "Systèmes de réservation et de booking"
      ],
      accent: "from-purple-heart-400 to-purple-heart-600",
      darkAccent: "from-purple-heart-600 to-purple-heart-400",
      shape: "circle",
    },
    {
      title: "Développement Backend & Infrastructure",
      description:
        "Je construis la fondation technique qui fait fonctionner votre business 24h/24. Des systèmes fiables, sécurisés et évolutifs qui grandissent avec votre entreprise.",
      icon: <Server className="w-12 h-12 text-purple-heart-600 dark:text-purple-heart-400" />,
      features: [
        "Systèmes fiables et disponibles 24h/24", 
        "Sécurité avancée de vos données", 
        "Évolutivité selon votre croissance", 
        "Automatisation des processus métier",
        "Intégrations avec vos outils existants",
        "Réduction des coûts opérationnels",
        "Gestion complète des utilisateurs",
        "Systèmes de paiement sécurisés",
        "Sauvegarde automatique et récupération",
        "APIs pour connecter vos services",
        "Notifications et alertes intelligentes",
        "Reporting et analytics détaillés"
      ],
      accent: "from-purple-heart-500 to-purple-heart-700",
      darkAccent: "from-purple-heart-700 to-purple-heart-500",
      shape: "square",
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="services" className="w-full section-padding bg-purple-heart-50 dark:bg-purple-heart-900/20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-heart-300 dark:via-purple-heart-700 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-heart-300 dark:via-purple-heart-700 to-transparent"></div>

      <div className="absolute -top-20 -left-20 w-60 h-60 bg-purple-heart-200/30 dark:bg-purple-heart-800/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-heart-100/30 dark:bg-purple-heart-900/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-script text-2xl text-purple-heart-600 dark:text-purple-heart-400 block mb-2">
            Services
          </span>
          <h2 className="text-4xl md:text-5xl font-display text-gray-900 dark:text-white mb-4">
            Solutions Digitales Complètes
          </h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Je développe des solutions web complètes qui transforment votre vision en succès business. Du frontend qui convertit au backend qui performe.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-heart-400 to-purple-heart-600 mx-auto mt-4"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-950/80 backdrop-blur-sm overflow-hidden group relative p-8">
                {/* Top accent */}
                <div
                  className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.accent} dark:${service.darkAccent}`}
                ></div>

                {/* Background shape */}
                <div className="absolute -right-10 -bottom-10 w-40 h-40 opacity-5 dark:opacity-10 transition-all duration-300 group-hover:scale-110">
                  {service.shape === "circle" && (
                    <div className="w-full h-full rounded-full bg-gray-950 dark:bg-gray-200"></div>
                  )}
                  {service.shape === "square" && (
                    <div className="w-full h-full rotate-45 bg-gray-950 dark:bg-gray-200"></div>
                  )}
                </div>

                <CardHeader className="pb-6 relative z-10">
                  <div className="mb-6 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl font-display text-gray-900 dark:text-white group-hover:text-purple-heart-700 dark:group-hover:text-purple-heart-400 transition-colors mb-4">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative z-10">
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start text-gray-800 dark:text-gray-200"
                      >
                        <span
                          className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.accent} dark:${service.darkAccent} mr-3 mt-2 shrink-0`}
                        ></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}