"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Github, Linkedin, Instagram, Send, Phone, Facebook, Link, Mail, MapPin } from 'lucide-react'

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
    project: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const contactInfo = {
    email: "prullacreative@gmail.com",
    phoneNumber: "+2290151868342",
    location: "Cotonou, Bénin",
    socialMedia: {
      facebook: "https://facebook.com/prullacreative",
      instagram: "https://instagram.com/prullacreative",
      linkedin: "https://linkedin.com/in/prudenciamian",
      linktree: "https://linktr.ee/prullacreative",
      github: "https://github.com/prullacreative",
    },
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSelectChange = (value: string) => {
    setFormState({
      ...formState,
      project: value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({ name: "", email: "", message: "", project: "" })

      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire:", error)
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="w-full section-padding bg-white dark:bg-gray-950 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-heart-300 dark:via-purple-heart-700 to-transparent"></div>

      <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-heart-100/30 dark:bg-purple-heart-900/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-purple-heart-200/30 dark:bg-purple-heart-800/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-script text-2xl text-purple-heart-600 dark:text-purple-heart-400 block mb-2">
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-display text-gray-900 dark:text-white mb-4">
            Travaillons Ensemble
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Vous avez un projet en tête ? Discutons-en et créons quelque chose d'extraordinaire ensemble.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-heart-400 to-purple-heart-600 mx-auto mt-4"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-purple-heart-50 to-white dark:from-purple-heart-900/20 dark:to-gray-950/50 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden"
          >
            {/* Background decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-heart-200/20 dark:bg-purple-heart-700/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-purple-heart-300/10 dark:bg-purple-heart-600/10 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              {/* Contact info cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="text-center p-6 bg-white/50 dark:bg-gray-800/30 rounded-2xl backdrop-blur-sm">
                  <div className="w-12 h-12 bg-purple-heart-100 dark:bg-purple-heart-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-6 h-6 text-purple-heart-600 dark:text-purple-heart-400" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Email</h3>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-gray-700 dark:text-gray-300 hover:text-purple-heart-600 dark:hover:text-purple-heart-400 transition-colors text-sm"
                  >
                    {contactInfo.email}
                  </a>
                </div>

                <div className="text-center p-6 bg-white/50 dark:bg-gray-800/30 rounded-2xl backdrop-blur-sm">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">WhatsApp</h3>
                  <a
                    href={`https://wa.me/${contactInfo.phoneNumber.replace(/\+|\s/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 dark:text-gray-300 hover:text-purple-heart-600 dark:hover:text-purple-heart-400 transition-colors text-sm"
                  >
                    {contactInfo.phoneNumber}
                  </a>
                </div>

                <div className="text-center p-6 bg-white/50 dark:bg-gray-800/30 rounded-2xl backdrop-blur-sm">
                  <div className="w-12 h-12 bg-purple-heart-100 dark:bg-purple-heart-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-6 h-6 text-purple-heart-600 dark:text-purple-heart-400" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Localisation</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">{contactInfo.location}</p>
                </div>
              </div>

              {/* Contact form */}
              <div onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-800 dark:text-gray-200 font-medium">
                      Nom complet
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="Votre nom"
                      required
                      className="border-purple-heart-200 dark:border-purple-heart-700 dark:bg-gray-800/30 dark:text-white rounded-xl outline-none focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus:ring-0"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-800 dark:text-gray-200 font-medium">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="votre.email@exemple.com"
                      required
                      className="border-purple-heart-200 dark:border-purple-heart-700 dark:bg-gray-800/30 dark:text-white rounded-xl outline-none focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus:ring-0"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="project" className="text-gray-800 dark:text-gray-200 font-medium">
                    Type de projet
                  </Label>
                  <Select value={formState.project} onValueChange={handleSelectChange}>
                    <SelectTrigger className="border-purple-heart-200 dark:border-purple-heart-700 dark:bg-gray-800/30 dark:text-white rounded-xl outline-none focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus:ring-0">
                      <SelectValue placeholder="Sélectionner un type de projet" />
                    </SelectTrigger>
                    <SelectContent className="bg-white dark:bg-gray-900 border-purple-heart-200 dark:border-purple-heart-700 rounded-xl">
                      <SelectItem value="site-vitrine">Site vitrine</SelectItem>
                      <SelectItem value="e-commerce">E-commerce</SelectItem>
                      <SelectItem value="application">Application web</SelectItem>
                      <SelectItem value="mobile">Application mobile</SelectItem>
                      <SelectItem value="design">Design UI/UX</SelectItem>
                      <SelectItem value="autre">Autre</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-800 dark:text-gray-200 font-medium">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Décrivez votre projet en détail..."
                    required
                    className="min-h-[150px] border-purple-heart-200 dark:border-purple-heart-700 dark:bg-gray-800/30 dark:text-white rounded-xl outline-none focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus:ring-0 resize-none"
                  />
                </div>

                <Button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-heart-500 to-purple-heart-700 hover:from-purple-heart-600 hover:to-purple-heart-800 text-white py-4 rounded-xl relative overflow-hidden group text-lg outline-none focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus:ring-0"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Envoi en cours...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <Send className="w-5 h-5 mr-2" />
                      Envoyer le message
                    </span>
                  )}
                </Button>

                {isSubmitted && (
                  <div className="p-4 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-xl text-center">
                    ✨ Message envoyé avec succès ! Je vous répondrai très bientôt.
                  </div>
                )}
              </div>

              {/* Social media links */}
              <div className="mt-12 pt-8 border-t border-purple-heart-200 dark:border-purple-heart-800">
                <h3 className="text-center text-lg font-semibold text-gray-900 dark:text-white mb-6">
                  Suivez-moi sur les réseaux sociaux
                </h3>
                <div className="flex justify-center space-x-4">
                  {[
                    { icon: Linkedin, href: contactInfo.socialMedia.linkedin, color: "hover:bg-purple-heart-100 dark:hover:bg-purple-heart-900/30" },
                    { icon: Github, href: contactInfo.socialMedia.github, color: "hover:bg-gray-100 dark:hover:bg-gray-900/30" },
                    { icon: Instagram, href: contactInfo.socialMedia.instagram, color: "hover:bg-purple-heart-100 dark:hover:bg-purple-heart-900/30" },
                    { icon: Facebook, href: contactInfo.socialMedia.facebook, color: "hover:bg-purple-heart-100 dark:hover:bg-purple-heart-900/30" },
                    { icon: Link, href: contactInfo.socialMedia.linktree, color: "hover:bg-purple-heart-100 dark:hover:bg-purple-heart-900/30" }
                  ].map(({ icon: Icon, href, color }, index) => (
                    <a
                      key={index}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-full bg-white/50 dark:bg-gray-800/30 backdrop-blur-sm ${color} transition-colors outline-none focus:outline-none`}
                      aria-label="Réseau social"
                    >
                      <Icon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}