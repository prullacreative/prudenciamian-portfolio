"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, ExternalLink, Star } from "lucide-react"
import Image from "next/image"

export default function EbooksSection() {
  const ebooks = [
    {
      title: "Guide complet de l'IA pour les développeurs",
      description:
        "Un guide pratique pour intégrer l'IA dans vos projets de développement, avec des exemples concrets et des tutoriels pas à pas.",
      image: "/images/ebook1.png",
      price: "19,99€",
      pages: 120,
      rating: 4.8,
      reviews: 42,
      tags: ["IA", "Développement", "Guide pratique"],
    },
    {
      title: "Automatiser votre workflow avec l'IA",
      description:
        "Découvrez comment utiliser l'IA pour automatiser vos tâches quotidiennes et augmenter votre productivité.",
      image: "/images/ebook2.png",
      price: "14,99€",
      pages: 85,
      rating: 4.6,
      reviews: 28,
      tags: ["Automatisation", "Productivité", "Workflow"],
    },
    {
      title: "L'IA pour les designers UI/UX",
      description:
        "Comment utiliser l'intelligence artificielle pour améliorer votre processus de design et créer des interfaces plus intuitives.",
      image: "/images/ebook3.png",
      price: "17,99€",
      pages: 95,
      rating: 4.7,
      reviews: 35,
      tags: ["Design", "UI/UX", "Créativité"],
    },
  ]

  // Lien Linktree/Bento pour tous les e-books
  const linktreeUrl = "https://linktr.ee/prullacreative"
  // Alternative: const bentoUrl = "https://bento.me/prullacreative"

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
    <section id="ebooks" className="py-20 bg-white dark:bg-purple-heart-950 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-heart-300 dark:via-purple-heart-700 to-transparent"></div>

      <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-heart-100 dark:bg-purple-heart-900 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-purple-heart-200 dark:bg-purple-heart-800 rounded-full blur-3xl opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-script text-2xl text-purple-heart-600 dark:text-purple-heart-400 block mb-2">
            Ressources
          </span>
          <h2 className="text-3xl md:text-4xl font-display text-purple-heart-900 dark:text-white mb-4">
            Mes E-books sur l'IA
          </h2>
          <p className="text-purple-heart-700 dark:text-purple-heart-300 max-w-2xl mx-auto">
            Des ressources complètes pour vous aider à maîtriser l'intelligence artificielle et l'intégrer dans vos
            projets et votre workflow quotidien.
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
          {ebooks.map((ebook, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-500 bg-white dark:bg-purple-heart-950/80 backdrop-blur-sm overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={ebook.image || "/placeholder.svg"}
                    alt={ebook.title}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 right-4 bg-purple-heart-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {ebook.price}
                  </div>
                </div>

                <CardHeader className="pb-2">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {ebook.tags.map((tag, idx) => (
                      <Badge
                        key={idx}
                        className="bg-purple-heart-100 text-purple-heart-800 hover:bg-purple-heart-200 dark:bg-purple-heart-800 dark:text-purple-heart-200 dark:hover:bg-purple-heart-700"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <CardTitle className="text-xl font-display text-purple-heart-900 dark:text-white group-hover:text-purple-heart-600 dark:group-hover:text-purple-heart-400 transition-colors">
                    {ebook.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <CardDescription className="text-purple-heart-700 dark:text-purple-heart-300 mb-4">
                    {ebook.description}
                  </CardDescription>
                  <div className="flex justify-between items-center text-sm">
                    <div className="flex items-center text-purple-heart-600 dark:text-purple-heart-400">
                      <BookOpen className="h-4 w-4 mr-1" />
                      <span>{ebook.pages} pages</span>
                    </div>
                    <div className="flex items-center text-amber-500">
                      <Star className="h-4 w-4 mr-1 fill-current" />
                      <span>
                        {ebook.rating} ({ebook.reviews} avis)
                      </span>
                    </div>
                  </div>
                </CardContent>

                <CardFooter>
                  <Button className="w-full bg-purple-heart-600 hover:bg-purple-heart-700 text-white" asChild>
                    <a href={linktreeUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Voir sur Linktree
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Button
            className="bg-purple-heart-600 hover:bg-purple-heart-700 text-white relative overflow-hidden group"
            asChild
          >
            <a href={linktreeUrl} target="_blank" rel="noopener noreferrer">
              <span className="relative z-10 flex items-center">
                <ExternalLink className="mr-2 h-5 w-5" />
                Accéder à tous mes e-books sur Linktree
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-heart-500 to-purple-heart-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
