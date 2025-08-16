"use client"

import type React from "react"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Eye, MousePointer, ChevronLeft, ChevronRight } from 'lucide-react'
import Link from "next/link"

export default function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(1)

 const projects = [
  {
    id: 1,
    title: "Florelle Couture",
    shortDescription: "Site vitrine développé avec React.js et TailwindCSS pour une couturière, présentant ses créations, ses services et ses réalisations sur mesure.",
    image: "https://res.cloudinary.com/dl2yc7401/image/upload/v1754777933/florellecouture_hqax9y.png", 
    technologies: ["React.js", "TailwindCSS"],
    category: "Site vitrine",
    views: 0,
    clicks: 0,
    link: "https://florelle-couture-229.vercel.app/",
    github: "#"
  },
  {
    id: 2,
    title: "DollyBeauty",
    shortDescription: "Site vitrine développé avec React.js et TailwindCSS pour une coiffeuse, présentant ses services de coiffure et ses réalisations.",
    image: "https://res.cloudinary.com/dl2yc7401/image/upload/v1754822204/dollybeautycapture_m4mwr5.png", 
    technologies: ["React.js", "TailwindCSS"],
    category: "Site vitrine",
    views: 0,
    clicks: 0,
    link: "https://dolly-beauty-229.vercel.app/",
    github: "#"
  },
  {
    id: 3,
    title: "NovaTrass",
    shortDescription: "Plateforme d'investissement en ligne développée avec Laravel et Bootstrap, offrant un espace sécurisé pour gérer et suivre les investissements.",
    image: "https://res.cloudinary.com/dl2yc7401/image/upload/v1754777938/novatrass_yw14kn.png",
    technologies: ["Laravel", "Bootstrap", "MySQL"],
    category: "Plateforme",
    views: 0,
    clicks: 0,
    link: "https://novatrass.com/",
    github: "#"
  },
  {
    id: 4,
    title: "Publiconnect",
    shortDescription: "Solution de communication et de collaboration dédiée au marché public, permettant aux membres d'un espace de travail d'échanger efficacement.",
    image: "https://res.cloudinary.com/dl2yc7401/image/upload/v1754777917/publiconnect_eqeijo.png",
    technologies: ["Laravel", "Bootstrap", "MySQL"],
    category: "Collaboration",
    views: 0,
    clicks: 0,
    link: "https://publiconnect.lesmeilleursarticles.com/",
    github: "#"
  },
  {
    id: 5,
    title: "ProcureLearn",
    shortDescription: "Plateforme de formation en ligne spécialisée dans le marché public, développée avec Laravel et Bootstrap.",
    image: "https://res.cloudinary.com/dl2yc7401/image/upload/v1754777927/proculearn_btzcjq.png",
    technologies: ["Laravel", "Bootstrap", "MySQL"],
    category: "E-learning",
    views: 0,
    clicks: 0,
    link: "https://procurelearn.lesmeilleursarticles.com/",
    github: "#"
  },
  {
    id: 6,
    title: "Digital Success Kit",
    shortDescription: "Solution SaaS développée avec Laravel et Bootstrap, proposant des outils digitaux pour la productivité et la gestion en ligne.",
    image: "https://res.cloudinary.com/dl2yc7401/image/upload/v1754777925/digisuccess_kgb8f5.png",
    technologies: ["Laravel", "Bootstrap", "MySQL"],
    category: "SaaS",
    views: 0,
    clicks: 0,
    link: "https://digitalsuccesskit.store/",
    github: "#"
  },
  {
    id: 7,
    title: "Laiterie Bio",
    shortDescription: "Template React et TailwindCSS pour la présentation d'une entreprise laitière bio, mettant en valeur ses produits et sa philosophie.",
    image: "https://res.cloudinary.com/dl2yc7401/image/upload/v1754777930/laiterie_r6jjc3.png",
    technologies: ["React.js", "TailwindCSS"],
    category: "Site vitrine",
    views: 0,
    clicks: 0,
    link: "https://laiterie-bio-react-frontend.vercel.app/",
    github: "#"
  },
  {
    id: 8,
    title: "Créatrice de Mode",
    shortDescription: "Template React et TailwindCSS conçu pour les créatrices de mode, offrant une présentation visuelle élégante et moderne.",
    image: "https://res.cloudinary.com/dl2yc7401/image/upload/v1754822208/creatrice_de_mode_capture_ci0d8q.png",
    technologies: ["React.js", "TailwindCSS"],
    category: "Template",
    views: 0,
    clicks: 0,
    link: "https://template-react-creatrice-de-mode-frontend.vercel.app/",
    github: "#"
  },
  {
    id: 9,
    title: "Créatrice de Bijoux",
    shortDescription: "Template landing page HTML/CSS/JS pour mettre en valeur les créations de bijoux artisanaux, avec un design raffiné et responsive.",
    image: "https://res.cloudinary.com/dl2yc7401/image/upload/v1754822207/creatrice_de_bijoux_capture_tjnnor.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    category: "Template",
    views: 0,
    clicks: 0,
    link: "https://creatrice-bijoux-landing-page-html-css.vercel.app/",
    github: "#"
  }
];


  const nextProject = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevProject = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    )
  }

  const getVisibleProjects = () => {
    const visible = []
    const total = projects.length

    // Projet précédent
    const prevIndex = currentIndex === 0 ? total - 1 : currentIndex - 1
    visible.push({ ...projects[prevIndex], position: 'prev' })

    // Projet actuel (centre)
    visible.push({ ...projects[currentIndex], position: 'current' })

    // Projet suivant
    const nextIndex = currentIndex === total - 1 ? 0 : currentIndex + 1
    visible.push({ ...projects[nextIndex], position: 'next' })

    return visible
  }

  return (
    <section id="projects" className="w-full py-20 bg-gradient-to-br from-purple-heart-50 to-purple-heart-100/30 dark:from-purple-heart-950/20 dark:to-gray-900 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header - votre style original */}
        <div className="flex flex-col items-center justify-between mb-12 opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards]">
          <div className="text-center">
            <span className="font-script text-2xl text-purple-heart-600 dark:text-purple-heart-400 block mb-2">
              Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl font-display text-gray-800 dark:text-white mb-4">
              Projets Récents
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Un aperçu de mes dernières créations digitales
            </p>
          </div>
          
          <div className="flex items-center space-x-4 mt-6">
            <button className="px-6 py-3 bg-purple-heart-600 hover:bg-purple-heart-700 text-white rounded-full font-medium transition-all duration-300 shadow-lg whitespace-nowrap">
              Voir tous les projets
            </button>
          </div>
        </div>

        {/* Carousel 3D - Version responsive */}
        <div className="relative flex items-center justify-center gap-2 md:gap-8">
          {/* Navigation gauche */}
          <button
            onClick={prevProject}
            className="p-2 md:p-3 rounded-full bg-white/80 dark:bg-gray-800 hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 shadow-lg border border-purple-heart-100 dark:border-purple-heart-400/20 z-40 flex-shrink-0"
          >
            <ChevronLeft className="w-4 h-4 md:w-6 md:h-6 text-purple-heart-600 dark:text-purple-heart-400" />
          </button>

          {/* Container du carousel avec perspective et overflow contrôlé */}
          <div className="relative w-full max-w-sm md:max-w-6xl h-[400px] md:h-[500px] perspective-1000 overflow-hidden">
            <div className="relative w-full h-full flex items-center justify-center">
              {getVisibleProjects().map((project) => {
                const isCenter = project.position === 'current'
                const isPrev = project.position === 'prev'
                const isNext = project.position === 'next'

                return (
                  <div
                    key={`${project.id}-${project.position}`}
                    className={`absolute transition-all duration-700 ease-out cursor-pointer ${
                      isCenter
                        ? 'z-30 scale-100 opacity-100'
                        : 'z-20 scale-75  md:opacity-60 opacity-0'
                    }`}
                    onClick={() => !isCenter && (isPrev ? prevProject() : isNext ? nextProject() : null)}
                    onMouseEnter={() => isCenter && setHoveredProject(project.id)}
                    onMouseLeave={() => setHoveredProject(null)}
                    style={{
                      transform: `
                        translateX(${
                          isCenter ? '0px' : 
                          isPrev ? (window.innerWidth < 768 ? '-100px' : '-280px') : 
                          isNext ? (window.innerWidth < 768 ? '100px' : '280px') : '0px'
                        }) 
                        scale(${isCenter ? '1' : (window.innerWidth < 768 ? '0.9' : '0.8')}) 
                        rotateY(${isCenter ? '0deg' : isPrev ? '-15deg' : isNext ? '15deg' : '0deg'})
                      `,
                    }}
                  >
                    {/* Carte projet */}
                    <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-purple-heart-100/50 dark:border-purple-heart-400/20 w-72 md:w-80">
                      <div className="relative overflow-hidden group">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-40 md:h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        {/* Actions visibles uniquement si carte centrale hover */}
                        {isCenter && hoveredProject === project.id && (
                          <div className="absolute inset-0 flex items-center justify-center space-x-3 opacity-0 animate-[fadeIn_0.3s_ease-out_forwards]">
                            <a
                              href={project.github}
                              className="p-2 md:p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/40 transition-colors"
                              aria-label="Voir sur GitHub"
                            >
                              <Github className="w-4 h-4 md:w-5 md:h-5 text-white" />
                            </a>
                            <button className="px-4 py-2 md:px-6 md:py-3 bg-purple-heart-600/90 backdrop-blur-sm text-white rounded-full font-medium transition-all duration-300 shadow-lg text-sm md:text-base whitespace-nowrap hover:bg-purple-heart-700/90">
                              <Link href={project.link}>
                                Voir le projet
                              </Link>
                            </button>
                            <a
                              href={project.link}
                              className="p-2 md:p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/40 transition-colors"
                              aria-label="Voir le projet"
                            >
                              <ExternalLink className="w-4 h-4 md:w-5 md:h-5 text-white" />
                            </a>
                          </div>
                        )}
                      </div>

                      <div className="p-4 md:p-6">
                        <div className="flex items-center justify-between mb-2">
                          <Badge className="bg-purple-heart-100 dark:bg-purple-heart-900/30 text-purple-heart-700 dark:text-purple-heart-300 hover:bg-purple-heart-200 dark:hover:bg-purple-heart-900/50 text-xs">
                            {project.category}
                          </Badge>
                        </div>
                        
                        <h3 className="text-lg md:text-xl font-semibold text-white mb-2 font-display">
                          {project.title}
                        </h3>
                        
                        <p className="text-gray-300 text-xs md:text-sm leading-relaxed mb-4">
                          {project.shortDescription}
                        </p>
                        
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.slice(0, 3).map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 3 && (
                            <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">
                              +{project.technologies.length - 3}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Navigation droite */}
          <button
            onClick={nextProject}
            className="p-2 md:p-3 rounded-full bg-white/80 dark:bg-gray-800 hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 shadow-lg border border-purple-heart-100 dark:border-purple-heart-400/20 z-40 flex-shrink-0"
          >
            <ChevronRight className="w-4 h-4 md:w-6 md:h-6 text-purple-heart-600 dark:text-purple-heart-400" />
          </button>
        </div>

        {/* Indicateurs */}
        <div className="flex justify-center gap-2 mt-8">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-purple-heart-600 scale-125'
                  : 'bg-purple-heart-300 hover:bg-purple-heart-400'
              }`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @media (max-width: 768px) {
          .perspective-1000 {
            perspective: 600px;
          }
        }
      `}</style>
    </section>
  )
}