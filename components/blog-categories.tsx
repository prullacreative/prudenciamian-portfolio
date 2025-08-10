"use client"

import { useState } from "react"
import Link from "next/link"

export default function BlogCategories() {
  const [activeCategory, setActiveCategory] = useState("Tous")

  const categories = [
    { name: "Tous", count: 8 },
    { name: "IA", count: 3 },
    { name: "Développement", count: 3 },
    { name: "Design", count: 2 },
  ]

  return (
    <div className="bg-white dark:bg-purple-heart-950/80 rounded-xl shadow-md p-6">
      <h3 className="text-xl font-display text-purple-heart-900 dark:text-white mb-4">Catégories</h3>
      <ul className="space-y-2">
        {categories.map((category) => (
          <li key={category.name}>
            <Link
              href={`/blog/categorie/${category.name.toLowerCase()}`}
              className={`flex justify-between items-center py-2 px-3 rounded-md transition-colors ${
                activeCategory === category.name
                  ? "bg-purple-heart-100 text-purple-heart-800 dark:bg-purple-heart-800 dark:text-purple-heart-200"
                  : "text-purple-heart-700 dark:text-purple-heart-300 hover:bg-purple-heart-50 dark:hover:bg-purple-heart-900/50"
              }`}
              onClick={(e) => {
                e.preventDefault() // Empêcher la navigation pour la démo
                setActiveCategory(category.name)
              }}
            >
              <span>{category.name}</span>
              <span className="bg-purple-heart-200 dark:bg-purple-heart-700 text-purple-heart-800 dark:text-purple-heart-200 text-xs px-2 py-1 rounded-full">
                {category.count}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <h3 className="text-xl font-display text-purple-heart-900 dark:text-white mb-4">Tags populaires</h3>
        <div className="flex flex-wrap gap-2">
          {["IA", "Next.js", "React", "Design", "UI/UX", "Performance", "Node.js", "API"].map((tag) => (
            <Link
              key={tag}
              href={`/blog/tag/${tag.toLowerCase()}`}
              className="bg-purple-heart-100 text-purple-heart-800 hover:bg-purple-heart-200 dark:bg-purple-heart-800 dark:text-purple-heart-200 dark:hover:bg-purple-heart-700 px-3 py-1 rounded-full text-sm transition-colors"
              onClick={(e) => e.preventDefault()} // Empêcher la navigation pour la démo
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
