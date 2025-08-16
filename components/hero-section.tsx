"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowDown } from 'lucide-react'
import { IconServer } from "@tabler/icons-react"

const MyPhoto = "https://res.cloudinary.com/dl2yc7401/image/upload/v1754697654/IMG_2705_nqcdd9.jpg";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="w-full section-padding relative overflow-hidden bg-gradient-to-br from-white via-purple-heart-50/50 to-lavender-100/30 dark:from-gray-900 dark:via-purple-heart-950/50 dark:to-gray-950"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-heart-200/20 dark:bg-purple-heart-800/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-heart-300/15 dark:bg-purple-heart-700/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-heart-100/10 dark:bg-purple-heart-800/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[90vh]">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 space-y-8"
          >
           
            <div className="space-y-2">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-6xl md:text-6xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-none tracking-tight"
                style={{ fontFamily: 'Arial Black, sans-serif' }}
              >
                HELLO HELLO
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex items-center space-x-4"
              >
                <span 
                  className="text-6xl md:text-6xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-none tracking-tight"
                  style={{ fontFamily: 'Arial Black, sans-serif' }}
                >
                  J'SUIS
                </span>
                {/* Profile image integrated in text */}
                <div className="relative">
                  <div className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                    <Image
                      src={MyPhoto}
                      alt="Prudencia MIAN"
                      width={160}
                      height={160}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-purple-heart-500 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Name */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-5xl md:text-7xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-none tracking-tight"
              style={{ fontFamily: 'Arial Black, sans-serif' }}
            >
              PRUDENCIA
              <br />
              <span className="text-purple-heart-600 dark:text-purple-heart-400">MIAN</span>
            </motion.h2>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="space-y-4"
            >
              <p className="text-xl md:text-2xl text-gray-800 dark:text-gray-200 font-medium">
                Développeuse Fullstack
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
                Passionnée par la création d'expériences web innovantes et performantes. 
                Je transforme vos idées en solutions digitales élégantes et fonctionnelles.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Button
                className="bg-purple-heart-600 hover:bg-purple-heart-700 text-white text-lg px-8 py-6 rounded-full relative overflow-hidden group shadow-xl hover:shadow-2xl transition-all duration-300"
                size="lg"
                asChild
              >
                <Link href="#projects">
                  <span className="relative z-10">Voir mes projets</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-heart-500 to-purple-heart-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </Link>
              </Button>
              <Button
                variant="outline"
                className="border-2 border-purple-heart-600 text-purple-heart-700 dark:text-purple-heart-300 dark:border-purple-heart-500 hover:bg-purple-heart-100 dark:hover:bg-purple-heart-900/30 text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                size="lg"
                asChild
              >
                <Link href="#contact">
                  Me contacter
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right side - Image with floating sections */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative">
              {/* Main image background */}
              <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                {/* Background avec pattern et gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-heart-500 via-purple-heart-600 to-purple-heart-700"></div>
                
                {/* Pattern décoratif */}
                <div className="absolute inset-0 opacity-20">
                  <div 
                    className="absolute inset-0" 
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                    }}
                  ></div>
                </div>

                {/* Image principale */}
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={MyPhoto}
                    alt="Développement web et design"
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Overlay pour garder la lisibilité */}
                  {/* <div className="absolute inset-0 bg-purple-heart-600/60 backdrop-blur-[1px]"></div> */}
                </motion.div>

                {/* Effet de brillance */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
              </div>

              {/* Section flottante - Gauche */}
              <motion.div
                initial={{ opacity: 0, x: -40, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="absolute -left-6 top-16 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-5 w-48 border border-gray-100 dark:border-gray-700"
              >
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-sm">&lt;/&gt;</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white text-sm">Frontend</h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Interface utilisateur</p>
                    </div>
                  </div>
                  {/* <div className="space-y-2">
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full font-medium">React</span>
                      <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs rounded-full font-medium">Vue.js</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs rounded-full font-medium">Next.js</span>
                    </div>
                  </div> */}
                </div>
              </motion.div>

              {/* Section flottante - Droite */}
              <motion.div
                initial={{ opacity: 0, x: 40, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="absolute -right-6 bottom-16 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-5 w-48 border border-gray-100 dark:border-gray-700"
              >
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                      {/* <span className="text-white font-bold text-sm">⚡</span> */}
                      <IconServer className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white text-sm">Backend</h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Serveur & API</p>
                    </div>
                  </div>
                  {/* <div className="space-y-2">
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 text-xs rounded-full font-medium">Node.js</span>
                      <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full font-medium">Python</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs rounded-full font-medium">PHP</span>
                    </div>
                  </div> */}
                </div>
              </motion.div>

              {/* Éléments décoratifs flottants */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-8 right-12 w-16 h-16 bg-gradient-to-r from-purple-heart-400/30 to-purple-heart-500/30 rounded-full backdrop-blur-sm border border-white/20"
              ></motion.div>
              
              <motion.div
                animate={{ y: [0, 12, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-24 left-8 w-12 h-12 bg-gradient-to-r from-purple-heart-300/40 to-purple-heart-400/40 backdrop-blur-sm border border-white/20"
                style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' }}
              ></motion.div>
              
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-1/3 right-1/4 w-8 h-8 bg-gradient-to-r from-purple-heart-500/40 to-purple-heart-600/40 rounded-full backdrop-blur-sm border border-white/20"
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <Link href="#about" className="flex flex-col items-center space-y-2 text-purple-heart-600 dark:text-purple-heart-400 hover:text-purple-heart-800 dark:hover:text-purple-heart-200 transition-colors group">
          <span className="text-sm font-medium">Découvrir</span>
          <ArrowDown className="w-6 h-6 animate-bounce group-hover:animate-pulse" />
        </Link>
      </motion.div>
    </section>
  )
}