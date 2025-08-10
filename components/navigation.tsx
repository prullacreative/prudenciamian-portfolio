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

  // Optimisation : Débouncer le scroll pour réduire les calculs sur mobile
  useEffect(() => {
    setMounted(true)
    let scrollTimeout: NodeJS.Timeout
    const handleScroll = () => {
      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(() => {
        setIsScrolled(window.scrollY > 10)
      }, 100) // Débouncer à 100ms
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
        isScrolled ? "bg-white/90 dark:bg-gray-950/90 shadow-md py-2" : "bg-transparent py-3"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-[96%]">
        {/* Flex avec ajustement pour mobile */}
        <div className="flex justify-between items-center min-h-[60px]">
          <Link href="/" className="text-xl sm:text-2xl font-display text-gray-900 dark:text-white flex-shrink-0">
            Prudencia<span className="text-purple-heart-600 dark:text-purple-heart-400">MIAN</span>
            <span className="font-script text-xs sm:text-sm ml-1 text-purple-heart-500 block">Creative Developer</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 xl:space-x-6">
            {navLinks[language as keyof typeof navLinks].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-800 dark:text-gray-200 hover:text-purple-heart-600 dark:hover:text-purple-heart-400 transition-colors text-sm xl:text-base font-medium"
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 text-gray-800 dark:text-gray-200 hover:text-purple-heart-600 dark:hover:text-purple-heart-400 transition-colors text-sm xl:text-base font-medium"
              aria-label="Changer de langue"
            >
              <Globe size={16} />
              <span>{language.toUpperCase()}</span>
            </button>
            <ThemeToggle />
            <Button className="bg-purple-heart-600 hover:bg-purple-heart-700 text-white rounded-full px-4 xl:px-6 text-sm xl:text-base">
              <Link href="/#contact" className="flex w-full h-full items-center justify-center">
                {language === "fr" ? "Me Contacter" : "Contact Me"}
              </Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }} // Animation plus rapide
            className="md:hidden bg-white/95 dark:bg-gray-950/95 border-t border-purple-heart-200 dark:border-purple-heart-800"
          >
            <div className="container mx-auto px-4 sm:px-6 py-4 flex flex-col space-y-3 max-w-[96%]">
              {navLinks[language as keyof typeof navLinks].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-800 dark:text-gray-200 hover:text-purple-heart-600 dark:hover:text-purple-heart-400 py-2 text-base font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Button className="bg-purple-heart-600 hover:bg-purple-heart-700 text-white w-full rounded-full text-base py-2">
                <Link href="/#contact" className="flex w-full h-full items-center justify-center">
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