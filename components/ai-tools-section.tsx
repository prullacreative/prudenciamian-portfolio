"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Bot, Zap, MessageSquare, ImageIcon, FileText, Workflow } from "lucide-react"

export default function AIToolsSection() {
  const aiTools = [
    {
      name: "ChatGPT",
      icon: <MessageSquare className="w-6 h-6 text-green-500" />,
      description:
        "Mon assistant IA préféré pour la génération de contenu, le brainstorming et la résolution de problèmes de code.",
      useCases: ["Rédaction de contenu", "Debugging de code", "Brainstorming d'idées"],
      color: "from-green-400 to-emerald-600",
    },
    {
      name: "Midjourney",
      icon: <ImageIcon className="w-6 h-6 text-indigo-500" />,
      description: "Outil de génération d'images que j'utilise pour créer des visuels uniques pour mes projets.",
      useCases: ["Création d'illustrations", "Design de produits", "Concepts visuels"],
      color: "from-indigo-400 to-purple-600",
    },
    {
      name: "Notion AI",
      icon: <FileText className="w-6 h-6 text-gray-500" />,
      description: "Mon outil de productivité préféré, enrichi par l'IA pour organiser mes projets et mes idées.",
      useCases: ["Organisation de projets", "Prise de notes", "Résumés automatiques"],
      color: "from-gray-400 to-slate-600",
    },
    {
      name: "GitHub Copilot",
      icon: <Bot className="w-6 h-6 text-blue-500" />,
      description: "Mon partenaire de codage qui m'aide à écrire du code plus rapidement et avec moins d'erreurs.",
      useCases: ["Autocomplétion de code", "Suggestions de fonctions", "Documentation"],
      color: "from-blue-400 to-sky-600",
    },
    {
      name: "Zapier",
      icon: <Workflow className="w-6 h-6 text-yellow-500" />,
      description: "J'utilise Zapier pour automatiser mes workflows et connecter mes applications préférées.",
      useCases: ["Automatisation de tâches", "Intégration d'applications", "Workflows personnalisés"],
      color: "from-yellow-400 to-amber-600",
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="ai-tools" className="py-20 bg-white dark:bg-purple-heart-950 relative overflow-hidden">
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
            Intelligence Artificielle
          </span>
          <h2 className="text-3xl md:text-4xl font-display text-purple-heart-900 dark:text-white mb-4">
            Mes outils IA préférés
          </h2>
          <p className="text-purple-heart-700 dark:text-purple-heart-300 max-w-2xl mx-auto">
            Découvrez les outils d'intelligence artificielle que j'utilise quotidiennement pour optimiser mon workflow
            et créer des expériences digitales exceptionnelles.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-heart-400 to-purple-heart-600 mx-auto mt-4"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
        >
          {aiTools.map((tool, index) => (
            <motion.div key={index} variants={itemVariants} className="xl:col-span-1">
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-purple-heart-900/50 backdrop-blur-sm overflow-hidden group">
                {/* Top gradient */}
                <div className={`h-1 w-full bg-gradient-to-r ${tool.color}`}></div>

                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <div
                      className={`p-2 rounded-lg bg-gradient-to-br ${tool.color} text-white mr-3 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}
                    >
                      {tool.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-purple-heart-900 dark:text-white">{tool.name}</h3>
                  </div>

                  <p className="text-sm text-purple-heart-700 dark:text-purple-heart-300 mb-3">{tool.description}</p>

                  <div>
                    <h4 className="text-xs font-semibold text-purple-heart-600 dark:text-purple-heart-400 mb-2">
                      Comment je l'utilise:
                    </h4>
                    <ul className="space-y-1">
                      {tool.useCases.map((useCase, idx) => (
                        <li
                          key={idx}
                          className="text-xs flex items-start text-purple-heart-800 dark:text-purple-heart-200"
                        >
                          <Zap className="h-3 w-3 text-purple-heart-500 dark:text-purple-heart-400 mr-1 mt-0.5 shrink-0" />
                          <span>{useCase}</span>
                        </li>
                      ))}
                    </ul>
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
