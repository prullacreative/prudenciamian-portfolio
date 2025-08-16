"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Globe } from 'lucide-react'
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "next-themes"
import ThemeToggle from "@/components/theme-toggle"

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [language, setLanguage] = useState("fr")
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    let scrollTimeout: NodeJS.Timeout
    const handleScroll = () => {
      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(() => {
        setIsScrolled(window.scrollY > 10)
      }, 100)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      clearTimeout(scrollTimeout)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const navLinks = {
    fr: [
      { name: "Accueil", href: "/" },
      { name: "À propos", href: "/#about" },
      { name: "Services", href: "/#services" },
      { name: "Projets", href: "/#projects" },
    ],
    en: [
      { name: "Home", href: "/" },
      { name: "About", href: "/#about" },
      { name: "Services", href: "/#services" },
      { name: "Projects", href: "/#projects" },
    ]
  }

  const toggleLanguage = () => {
    setLanguage(language === "fr" ? "en" : "fr")
  }

  if (!mounted) return null

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-gray-950/90 shadow-md py-2"
          : "bg-transparent py-3"
      }`}
    >
      <div className="w-full px-3 sm:px-4 lg:px-6">
        {/* Conteneur principal */}
        <div className="flex justify-between items-center flex-wrap gap-2 min-h-[60px]">
          
          {/* Logo avec largeur limitée */}
          <Link
            href="/"
            className="text-lg sm:text-xl md:text-2xl font-display text-gray-900 dark:text-white 
                       flex-shrink min-w-0 max-w-[60%] truncate leading-tight"
          >
            Prudencia
            <span className="text-purple-heart-600 dark:text-purple-heart-400">
              MIAN
            </span>
            <span className="font-script text-[10px] sm:text-xs md:text-sm ml-1 text-purple-heart-500 block truncate">
              Creative Developer
            </span>
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center flex-wrap gap-3 lg:gap-5">
            {navLinks[language as keyof typeof navLinks].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-800 dark:text-gray-200 hover:text-purple-heart-600 dark:hover:text-purple-heart-400 transition-colors text-sm lg:text-base font-medium"
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 text-gray-800 dark:text-gray-200 hover:text-purple-heart-600 dark:hover:text-purple-heart-400 text-sm lg:text-base font-medium"
              aria-label="Changer de langue"
            >
              <Globe size={16} />
              <span>{language.toUpperCase()}</span>
            </button>
            <ThemeToggle />
            <Button className="bg-purple-heart-600 hover:bg-purple-heart-700 text-white rounded-full px-4 lg:px-6 text-sm lg:text-base">
              <Link
                href="/#contact"
                className="flex w-full h-full items-center justify-center"
              >
                {language === "fr" ? "Me Contacter" : "Contact Me"}
              </Link>
            </Button>
          </nav>

          {/* Boutons Mobile */}
          <div className="md:hidden flex items-center left-0 right-0  gap-1 sm:gap-3">
            <button
              onClick={toggleLanguage}
              className="text-gray-800 dark:text-gray-200 p-2"
              aria-label="Changer de langue"
            >
              <Globe size={18} />
            </button>
            <ThemeToggle />
            <button
              className="text-gray-800 dark:text-gray-200 p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

     {/* Menu Mobile */}
    <AnimatePresence>
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-white/95 w-72 dark:bg-gray-950/95 border-t border-purple-heart-200 dark:border-purple-heart-800"
        >
          <div className="px-3 sm:px-4 py-3 flex flex-col gap-2">
            {navLinks[language as keyof typeof navLinks].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-800 dark:text-gray-200 hover:text-purple-heart-600 dark:hover:text-purple-heart-400 py-1.5 text-sm font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button className="bg-purple-heart-600 w-64 hover:bg-purple-heart-700 text-white rounded-full text-sm py-1.5">
              <Link
                href="/#contact"
                className="flex w-full h-full items-center justify-center"
              >
                {language === "fr" ? "Me Contacter" : "Contact Me"}
              </Link>
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>

    </header>
  )
}
