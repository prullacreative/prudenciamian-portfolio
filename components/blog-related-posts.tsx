"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function BlogRelatedPosts() {
  const relatedPosts = [
    {
      title: "Les meilleures pratiques pour un design UI/UX efficace en 2023",
      image: "/images/blog2.png",
      date: "28 mai 2023",
      tags: ["Design", "UI/UX"],
      slug: "/blog/meilleures-pratiques-design-uiux-2023",
    },
    {
      title: "Comment automatiser votre marketing avec l'IA",
      image: "/images/blog3.png",
      date: "10 juin 2023",
      tags: ["IA", "Marketing"],
      slug: "/blog/automatiser-marketing-ia",
    },
    {
      title: "L'avenir de l'IA générative dans le développement web",
      image: "/images/blog6.png",
      date: "18 septembre 2023",
      tags: ["IA", "Développement Web"],
      slug: "/blog/avenir-ia-generative-developpement-web",
    },
  ]

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
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  }

  return (
    <div>
      <h3 className="text-2xl font-display text-purple-heart-900 dark:text-white mb-6">Articles similaires</h3>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {relatedPosts.map((post, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card className="h-full border-none shadow-md hover:shadow-lg transition-all duration-300 bg-white dark:bg-purple-heart-950/80 backdrop-blur-sm overflow-hidden group">
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={400}
                  height={200}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <CardHeader className="pb-2 pt-4">
                <div className="flex flex-wrap gap-1 mb-1">
                  {post.tags.map((tag, idx) => (
                    <Badge
                      key={idx}
                      className="bg-purple-heart-100 text-purple-heart-800 text-xs dark:bg-purple-heart-800 dark:text-purple-heart-200"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <CardTitle className="text-base font-display text-purple-heart-900 dark:text-white group-hover:text-purple-heart-600 dark:group-hover:text-purple-heart-400 transition-colors">
                  <Link href={post.slug}>{post.title}</Link>
                </CardTitle>
              </CardHeader>

              <CardContent className="pb-2">
                <div className="flex items-center text-xs text-purple-heart-600 dark:text-purple-heart-400">
                  <Calendar className="h-3 w-3 mr-1" />
                  <span>{post.date}</span>
                </div>
              </CardContent>

              <CardFooter>
                <Link
                  href={post.slug}
                  className="text-sm text-purple-heart-600 dark:text-purple-heart-400 hover:text-purple-heart-800 dark:hover:text-purple-heart-200 flex items-center"
                >
                  Lire l'article
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
