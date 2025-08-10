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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
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
        isScrolled ? "bg-white/90 dark:bg-gray-950/90 backdrop-blur-md shadow-lg py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-display text-gray-900 dark:text-white">
          Prudencia<span className="text-purple-heart-600 dark:text-purple-heart-400">MIAN</span>
          <span className="font-script text-sm ml-1 text-purple-heart-500 block">Creative Developer</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks[language as keyof typeof navLinks].map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-800 dark:text-gray-200 hover:text-purple-heart-600 dark:hover:text-purple-heart-400 transition-colors text-sm font-medium"
            >
              {link.name}
            </Link>
          ))}
          
          <button
            onClick={toggleLanguage}
            className="flex items-center space-x-1 text-gray-800 dark:text-gray-200 hover:text-purple-heart-600 dark:hover:text-purple-heart-400 transition-colors text-sm font-medium"
          >
            <Globe size={16} />
            <span>{language.toUpperCase()}</span>
          </button>
          
          <ThemeToggle />
          
          <Button className="bg-purple-heart-600 hover:bg-purple-heart-700 text-white relative overflow-hidden group rounded-full px-6">
            <Link href="/#contact" className="relative z-10 flex w-full h-full items-center justify-center">
              {language === "fr" ? "Me Contacter" : "Contact Me"}
            </Link>
            <span className="absolute inset-0 bg-gradient-to-r from-purple-heart-500 to-purple-heart-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleLanguage}
            className="text-gray-800 dark:text-gray-200 p-2"
          >
            <Globe size={20} />
          </button>
          <ThemeToggle />
          <button
            className="text-gray-800 dark:text-gray-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 dark:bg-gray-950/95 backdrop-blur-md border-t border-purple-heart-200 dark:border-purple-heart-800"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
              {navLinks[language as keyof typeof navLinks].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-800 dark:text-gray-200 hover:text-purple-heart-600 dark:hover:text-purple-heart-400 py-2 transition-colors font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Button className="bg-purple-heart-600 hover:bg-purple-heart-700 text-white w-full relative overflow-hidden group rounded-full">
                <Link href="/#contact" className="relative z-10 flex w-full h-full items-center justify-center">
                  {language === "fr" ? "Me Contacter" : "Contact Me"}
                </Link>
                <span className="absolute inset-0 bg-gradient-to-r from-purple-heart-500 to-purple-heart-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
