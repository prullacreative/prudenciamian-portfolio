"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, Clock, Search } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Input } from "@/components/ui/input"

// Données des articles de blog (à remplacer par une vraie API ou CMS)
const allBlogPosts = [
  {
    title: "Comment intégrer ChatGPT dans votre workflow de développement",
    excerpt:
      "Découvrez comment utiliser ChatGPT pour améliorer votre productivité en tant que développeur et accélérer votre workflow.",
    image: "/images/blog1.png",
    date: "15 avril 2023",
    readTime: "5 min",
    tags: ["IA", "Développement", "Productivité"],
    slug: "/blog/integrer-chatgpt-workflow-developpement",
    category: "IA",
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
    category: "Design",
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
    category: "IA",
  },
  {
    title: "Les fondamentaux de Next.js pour les débutants",
    excerpt: "Apprenez les bases de Next.js, le framework React qui révolutionne le développement web moderne.",
    image: "/images/blog4.png",
    date: "22 juillet 2023",
    readTime: "8 min",
    tags: ["Next.js", "React", "Développement Web"],
    slug: "/blog/fondamentaux-nextjs-debutants",
    category: "Développement",
  },
  {
    title: "Comment créer une API REST avec Node.js et Express",
    excerpt: "Guide étape par étape pour construire une API REST robuste avec Node.js et Express.",
    image: "/images/blog5.png",
    date: "5 août 2023",
    readTime: "10 min",
    tags: ["Node.js", "API", "Backend"],
    slug: "/blog/creer-api-rest-nodejs-express",
    category: "Développement",
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
    category: "IA",
  },
  {
    title: "Optimiser les performances de votre site Next.js",
    excerpt: "Découvrez les techniques avancées pour améliorer les performances de votre application Next.js.",
    image: "/images/blog7.png",
    date: "3 octobre 2023",
    readTime: "8 min",
    tags: ["Next.js", "Performance", "Optimisation"],
    slug: "/blog/optimiser-performances-site-nextjs",
    category: "Développement",
  },
  {
    title: "Les principes du design responsive en 2023",
    excerpt:
      "Maîtrisez les principes fondamentaux du design responsive pour créer des sites web qui s'adaptent parfaitement à tous les appareils.",
    image: "/images/blog8.png",
    date: "12 novembre 2023",
    readTime: "6 min",
    tags: ["Design", "Responsive", "CSS"],
    slug: "/blog/principes-design-responsive-2023",
    category: "Design",
  },
]

export default function BlogGrid() {
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 6

  // Filtrer les articles en fonction de la recherche
  const filteredPosts = allBlogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  // Pagination
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost)
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <div>
      {/* Barre de recherche */}
      <div className="mb-8 relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-purple-heart-400" />
        </div>
        <Input
          type="text"
          placeholder="Rechercher un article..."
          className="pl-10 border-purple-heart-200 dark:border-purple-heart-700 focus:border-purple-heart-500 focus:ring-purple-heart-500 dark:bg-purple-heart-800/30 dark:text-white"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value)
            setCurrentPage(1) // Réinitialiser à la première page lors d'une nouvelle recherche
          }}
        />
      </div>

      {/* Résultats de recherche */}
      {searchQuery && (
        <div className="mb-6">
          <p className="text-purple-heart-700 dark:text-purple-heart-300">
            {filteredPosts.length} résultat(s) pour "{searchQuery}"
          </p>
        </div>
      )}

      {/* Grille d'articles */}
      {currentPosts.length > 0 ? (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {currentPosts.map((post, index) => (
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
      ) : (
        <div className="text-center py-12">
          <p className="text-purple-heart-700 dark:text-purple-heart-300 text-lg">
            Aucun article ne correspond à votre recherche.
          </p>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-12">
          <div className="flex space-x-2">
            <Button
              variant="outline"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="border-purple-heart-300 text-purple-heart-700 dark:border-purple-heart-700 dark:text-purple-heart-300"
            >
              Précédent
            </Button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                onClick={() => setCurrentPage(page)}
                className={
                  currentPage === page
                    ? "bg-purple-heart-600 hover:bg-purple-heart-700 text-white"
                    : "border-purple-heart-300 text-purple-heart-700 dark:border-purple-heart-700 dark:text-purple-heart-300"
                }
              >
                {page}
              </Button>
            ))}
            <Button
              variant="outline"
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="border-purple-heart-300 text-purple-heart-700 dark:border-purple-heart-700 dark:text-purple-heart-300"
            >
              Suivant
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
