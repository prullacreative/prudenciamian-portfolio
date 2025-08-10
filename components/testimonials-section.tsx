"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sophie Martin",
      role: "Fondatrice, TechStart",
      content:
        "Travailler avec PrullaCreative a été une expérience incroyable. Sa créativité et son expertise technique ont transformé notre vision en une réalité numérique exceptionnelle.",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Thomas Dubois",
      role: "Directeur Marketing, InnovateCorp",
      content:
        "PrullaCreative a su comprendre nos besoins et y répondre avec une solution sur mesure qui a dépassé nos attentes. Son approche alliant esthétique et fonctionnalité est remarquable.",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Léa Bernard",
      role: "Designer UX, DigitalWave",
      content:
        "J'ai eu la chance de collaborer avec PrullaCreative sur plusieurs projets. Sa maîtrise technique et sa sensibilité créative font d'elle une partenaire de choix pour tout projet digital ambitieux.",
      avatar: "/placeholder.svg?height=100&width=100",
    },
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
    <section className="py-20 bg-purple-heart-50 dark:bg-purple-heart-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-heart-300 dark:via-purple-heart-700 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-heart-300 dark:via-purple-heart-700 to-transparent"></div>

      <div className="absolute -top-20 -left-20 w-60 h-60 bg-purple-heart-200 dark:bg-purple-heart-800 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-heart-100 dark:bg-purple-heart-900 rounded-full blur-3xl opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-script text-2xl text-purple-heart-600 dark:text-purple-heart-400 block mb-2">
            Témoignages
          </span>
          <h2 className="text-3xl md:text-4xl font-display text-purple-heart-900 dark:text-white mb-4">
            Ce qu'ils en disent
          </h2>
          <p className="text-purple-heart-700 dark:text-purple-heart-300 max-w-2xl mx-auto">
            Découvrez ce que mes clients disent de notre collaboration.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-heart-400 to-purple-heart-600 mx-auto mt-4"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-purple-heart-950/80 backdrop-blur-sm overflow-hidden group relative">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-purple-heart-100 dark:bg-purple-heart-800 opacity-30 rounded-bl-full"></div>

                <CardContent className="p-6 flex flex-col h-full relative z-10">
                  <Quote className="w-10 h-10 text-purple-heart-300 dark:text-purple-heart-600 mb-4 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                  <p className="text-purple-heart-700 dark:text-purple-heart-300 italic mb-6 flex-grow">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <Avatar className="h-12 w-12 mr-4 border-2 border-purple-heart-200 dark:border-purple-heart-700 ring-2 ring-offset-2 ring-purple-heart-400 dark:ring-purple-heart-600 ring-offset-white dark:ring-offset-purple-heart-950">
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                      <AvatarFallback className="bg-purple-heart-200 dark:bg-purple-heart-800 text-purple-heart-700 dark:text-purple-heart-200">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-display text-purple-heart-900 dark:text-white">{testimonial.name}</h4>
                      <p className="text-sm text-purple-heart-600 dark:text-purple-heart-400">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
