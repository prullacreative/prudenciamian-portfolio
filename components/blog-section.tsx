"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, Clock, BookOpen } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function BlogSection() {
  const blogPosts = [
    {
      title: "Comment intégrer ChatGPT dans votre workflow de développement",
      excerpt:
        "Découvrez comment utiliser ChatGPT pour améliorer votre productivité en tant que développeur et accélérer votre workflow.",
      image: "/images/blog1.png",
      date: "15 avril 2023",
      readTime: "5 min",
      tags: ["IA", "Développement", "Productivité"],
      slug: "/blog/integrer-chatgpt-workflow-developpement",
      featured: true,
    },
    {
      title: "Les meilleures pratiques pour un design UI/UX efficace en 2023",
      excerpt:
        "Un guide complet des tendances et meilleures pratiques pour créer des interfaces utilisateur modernes et intuitives.",
      image: "/images/blog2.png",
      date: "28 mai 2023",
      readTime: "7 min",
      tags: ["Design", "UI/UX", "Tendances"],
      slug: "/blog/meilleures-pratiques-design-uiux-2023",
      featured: false,
    },
    {
      title: "Comment automatiser votre marketing avec l'IA",
      excerpt:
        "Explorez les différentes façons d'utiliser l'intelligence artificielle pour optimiser vos campagnes marketing.",
      image: "/images/blog3.png",
      date: "10 juin 2023",
      readTime: "6 min",
      tags: ["IA", "Marketing", "Automatisation"],
      slug: "/blog/automatiser-marketing-ia",
      featured: false,
    },
    {
      title: "Les fondamentaux de Next.js pour les débutants",
      excerpt: "Apprenez les bases de Next.js, le framework React qui révolutionne le développement web moderne.",
      image: "/images/blog4.png",
      date: "22 juillet 2023",
      readTime: "8 min",
      tags: ["Next.js", "React", "Développement Web"],
      slug: "/blog/fondamentaux-nextjs-debutants",
      featured: false,
    },
    {
      title: "Comment créer une API REST avec Node.js et Express",
      excerpt: "Guide étape par étape pour construire une API REST robuste avec Node.js et Express.",
      image: "/images/blog5.png",
      date: "5 août 2023",
      readTime: "10 min",
      tags: ["Node.js", "API", "Backend"],
      slug: "/blog/creer-api-rest-nodejs-express",
      featured: false,
    },
    {
      title: "L'avenir de l'IA générative dans le développement web",
      excerpt:
        "Explorez comment l'IA générative transforme le développement web et ce que cela signifie pour l'avenir du métier.",
      image: "/images/blog6.png",
      date: "18 septembre 2023",
      readTime: "9 min",
      tags: ["IA", "Futur", "Développement Web"],
      slug: "/blog/avenir-ia-generative-developpement-web",
      featured: true,
    },
  ]

  // Filtrer les articles en vedette pour la section principale
  const featuredPosts = blogPosts.filter((post) => post.featured)
  // Limiter à 4 articles récents pour la grille principale
  const recentPosts = blogPosts.slice(0, 4)

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
    <section id="blog" className="py-20 bg-purple-heart-50 dark:bg-purple-heart-900 relative overflow-hidden">
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
          <span className="font-script text-2xl text-purple-heart-600 dark:text-purple-heart-400 block mb-2">Blog</span>
          <h2 className="text-3xl md:text-4xl font-display text-purple-heart-900 dark:text-white mb-4">
            Astuces & Conseils
          </h2>
          <p className="text-purple-heart-700 dark:text-purple-heart-300 max-w-2xl mx-auto">
            Je partage régulièrement mes connaissances, astuces et réflexions sur le développement, le design et l'IA.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-heart-400 to-purple-heart-600 mx-auto mt-4"></div>
        </motion.div>

        {/* Featured Post - Larger display */}
        {featuredPosts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="bg-white dark:bg-purple-heart-950/80 rounded-xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-64 md:h-auto">
                  <Image
                    src={featuredPosts[0].image || "/placeholder.svg"}
                    alt={featuredPosts[0].title}
                    width={800}
                    height={600}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-purple-heart-600 text-white hover:bg-purple-heart-700">
                      Article en vedette
                    </Badge>
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {featuredPosts[0].tags.map((tag, idx) => (
                      <Badge
                        key={idx}
                        className="bg-purple-heart-100 text-purple-heart-800 hover:bg-purple-heart-200 dark:bg-purple-heart-800 dark:text-purple-heart-200 dark:hover:bg-purple-heart-700"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="text-2xl font-display text-purple-heart-900 dark:text-white mb-3">
                    {featuredPosts[0].title}
                  </h3>
                  <div className="flex items-center text-sm text-purple-heart-600 dark:text-purple-heart-400 space-x-4 mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{featuredPosts[0].date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{featuredPosts[0].readTime}</span>
                    </div>
                  </div>
                  <p className="text-purple-heart-700 dark:text-purple-heart-300 mb-6">{featuredPosts[0].excerpt}</p>
                  <Button className="self-start bg-purple-heart-600 hover:bg-purple-heart-700 text-white" asChild>
                    <Link href={featuredPosts[0].slug}>
                      <BookOpen className="mr-2 h-4 w-4" />
                      Lire l'article complet
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Recent Posts Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {recentPosts.map((post, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-500 bg-white dark:bg-purple-heart-950/80 backdrop-blur-sm overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                <CardHeader className="pb-2">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {post.tags.map((tag, idx) => (
                      <Badge
                        key={idx}
                        className="bg-purple-heart-100 text-purple-heart-800 hover:bg-purple-heart-200 dark:bg-purple-heart-800 dark:text-purple-heart-200 dark:hover:bg-purple-heart-700"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <CardTitle className="text-xl font-display text-purple-heart-900 dark:text-white group-hover:text-purple-heart-600 dark:group-hover:text-purple-heart-400 transition-colors">
                    <Link href={post.slug}>{post.title}</Link>
                  </CardTitle>
                  <div className="flex items-center text-sm text-purple-heart-600 dark:text-purple-heart-400 space-x-4 mt-1">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <CardDescription className="text-purple-heart-700 dark:text-purple-heart-300">
                    {post.excerpt}
                  </CardDescription>
                </CardContent>

                <CardFooter>
                  <Button
                    variant="ghost"
                    className="text-purple-heart-600 dark:text-purple-heart-400 hover:text-purple-heart-800 dark:hover:text-purple-heart-200 p-0 hover:bg-transparent"
                    asChild
                  >
                    <Link href={post.slug} className="flex items-center">
                      Lire l'article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
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
            <Link href="/blog">
              <span className="relative z-10 flex items-center">
                <BookOpen className="mr-2 h-5 w-5" />
                Voir tous les articles
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-heart-500 to-purple-heart-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
