"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { 
  IconBrandReact, 
  IconBrandNextjs, 
  IconBrandJavascript, 
  IconBrandHtml5, 
  IconBrandTailwind, 
  IconBrandTypescript,
  IconApi,
  IconGitBranch,
  IconDeviceMobile,
  IconBrandFlutter,
  IconBrandAndroid,
  IconBrandFigma,
  IconPalette,
  IconBrandAdobePhotoshop,
  IconSql,
  IconBrandPhp,
  IconBrandLaravel
} from '@tabler/icons-react'

export default function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const skillCategories = {
    frontend: {
      title: "Frontend Development",
      color: "from-purple-heart-400 to-purple-heart-600",
      skills: [
        { name: "React", icon: IconBrandReact },
        { name: "Next.js", icon: IconBrandNextjs },
        { name: "TypeScript", icon: IconBrandTypescript },
        { name: "Tailwind CSS", icon: IconBrandTailwind },
        { name: "JavaScript", icon: IconBrandJavascript },
        { name: "HTML/CSS", icon: IconBrandHtml5 }
      ]
    },
    backend: {
      title: "Backend Development",
      color: "from-purple-heart-500 to-purple-heart-700",
      skills: [
        { name: "Php", icon: IconBrandPhp },
        { name: "Laravel", icon: IconBrandLaravel },
        { name: "MySql", icon: IconSql },
        { name: "API REST", icon: IconApi },
        { name: "Git", icon: IconGitBranch }
      ]
    },
    mobile: {
      title: "Mobile Development",
      color: "from-purple-heart-600 to-purple-heart-800",
      skills: [
        { name: "React Native", icon: IconDeviceMobile },
        { name: "Flutter", icon: IconBrandFlutter },
        { name: "Android Studio", icon: IconBrandAndroid },
      ]
    },
    design: {
      title: "UI/UX Design",
      color: "from-purple-heart-400 to-purple-heart-700",
      skills: [
        { name: "Figma", icon: IconBrandFigma },
        { name: "Photoshop", icon: IconBrandAdobePhotoshop },
        { name: "Illustrator", icon: IconPalette },
      ]
    }
  }

  return (
    <section id="skills" className=" w-full section-padding bg-white dark:bg-gray-950">
      <div className="container mx-auto px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-script text-2xl text-purple-heart-600 dark:text-purple-heart-400 block mb-2">
            Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-display text-gray-800 dark:text-white mb-4">
            Mes Compétences
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Une expertise technique diversifiée au service de la créativité et de l'innovation
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-heart-400 to-purple-heart-600 mx-auto mt-4"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-4">
          {Object.entries(skillCategories).map(([key, category], categoryIndex) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className={`text-2xl font-semibold bg-gradient-to-r ${category.color} bg-clip-text text-transparent mb-8 font-display`}>
                {category.title}
              </h3>
              
              <div className="grid grid-cols-2 px-6 gap-4">
                {category.skills.map((skill, index) => {
                  const IconComponent = skill.icon
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      onHoverStart={() => setHoveredSkill(skill.name)}
                      onHoverEnd={() => setHoveredSkill(null)}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="group cursor-pointer"
                    >
                      <div className=" h-full">
                        <div className="flex flex-col items-center space-y-4">
                          <motion.div 
                            className={`w-16 h-16 flex items-center justify-center bg-gradient-to-r ${category.color} rounded-xl group-hover:scale-110 transition-transform`}
                            animate={{
                              scale: hoveredSkill === skill.name ? 1.1 : 1,
                              rotate: hoveredSkill === skill.name ? 5 : 0
                            }}
                          >
                            <IconComponent className="w-8 h-8 text-white" stroke={1.5} />
                          </motion.div>
                          
                          <h4 className="font-medium text-gray-800 dark:text-white text-center text-sm">
                            {skill.name}
                          </h4>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}