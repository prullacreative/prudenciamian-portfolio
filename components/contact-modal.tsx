"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Linkedin, MessageSquare } from "lucide-react"
import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconBrandWhatsapp } from "@tabler/icons-react"

// Type pour les props du composant
interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
  planName: string
}

// Composant de modal pour choisir un moyen de contact
export default function ContactModal({ isOpen, onClose, planName }: ContactModalProps) {
  // État pour gérer l'ouverture de la modal
  const [open, setOpen] = useState(false)

  // Synchroniser l'état local avec les props
  useEffect(() => {
    setOpen(isOpen)
  }, [isOpen])

  // Fermer la modal
  const handleClose = () => {
    setOpen(false)
    onClose()
  }

  // Informations de contact
  const contactInfo = {
    phoneNumber: "+2290151868342",
    socialMedia: {
      facebook: "https://facebook.com/prullacreative",
      instagram: "https://instagram.com/prullacreative",
      linkedin: "https://linkedin.com/in/prudenciamian",
      whatsapp: `https://wa.me/2290151868342?text=Bonjour, je suis intéressé(e) par le plan "${planName}". Pouvons-nous en discuter?`,
    },
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md bg-white dark:bg-purple-heart-900 border-none shadow-xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-display text-purple-heart-900 dark:text-white">
            Discutons de votre projet
          </DialogTitle>
          <DialogDescription className="text-purple-heart-700 dark:text-purple-heart-300">
            Vous êtes intéressé(e) par le plan <span className="font-semibold">{planName}</span>. Choisissez votre moyen
            de contact préféré pour en discuter.
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-2 gap-4 py-4">
          <a
            href={contactInfo.socialMedia.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/40 transition-colors"
          >
            <IconBrandWhatsapp className="h-8 w-8 text-green-600 dark:text-green-400 mb-2" />
            <span className="text-green-800 dark:text-green-300 font-medium">WhatsApp</span>
          </a>

          <a
            href={contactInfo.socialMedia.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors"
          >
            <IconBrandFacebook className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-2" />
            <span className="text-blue-800 dark:text-blue-300 font-medium">Facebook</span>
          </a>

          <a
            href={contactInfo.socialMedia.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-4 bg-pink-50 dark:bg-pink-900/20 rounded-lg hover:bg-pink-100 dark:hover:bg-pink-900/40 transition-colors"
          >
            <IconBrandInstagram className="h-8 w-8 text-pink-600 dark:text-pink-400 mb-2" />
            <span className="text-pink-800 dark:text-pink-300 font-medium">Instagram</span>
          </a>

          <a
            href={contactInfo.socialMedia.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors"
          >
            <IconBrandLinkedin className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-2" />
            <span className="text-blue-800 dark:text-blue-300 font-medium">LinkedIn</span>
          </a>
        </div>

        <div className="flex justify-center mt-2">
          <Button
            variant="outline"
            onClick={handleClose}
            className="border-purple-heart-300 text-purple-heart-700 dark:border-purple-heart-700 dark:text-purple-heart-300"
          >
            Fermer
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
