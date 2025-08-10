"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send } from "lucide-react"

export default function BlogNewsletter() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simuler un appel API
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setEmail("")

    // Réinitialiser le message de succès après 5 secondes
    setTimeout(() => {
      setIsSubmitted(false)
    }, 5000)
  }

  return (
    <div className="bg-white dark:bg-purple-heart-950/80 rounded-xl shadow-md p-6">
      <h3 className="text-xl font-display text-purple-heart-900 dark:text-white mb-2">Newsletter</h3>
      <p className="text-purple-heart-700 dark:text-purple-heart-300 text-sm mb-4">
        Abonnez-vous pour recevoir mes derniers articles et conseils directement dans votre boîte mail.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="space-y-3">
          <Input
            type="email"
            placeholder="Votre email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border-purple-heart-200 dark:border-purple-heart-700 focus:border-purple-heart-500 focus:ring-purple-heart-500 dark:bg-purple-heart-800/30 dark:text-white"
          />
          <Button
            type="submit"
            className="w-full bg-purple-heart-600 hover:bg-purple-heart-700 text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="flex items-center">
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Inscription...
              </span>
            ) : (
              <span className="flex items-center">
                <Send className="mr-2 h-4 w-4" />
                S'abonner
              </span>
            )}
          </Button>
        </div>
      </form>

      {isSubmitted && (
        <div className="mt-3 p-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-md text-sm text-center">
          Merci pour votre inscription ! Vous recevrez bientôt nos prochains articles.
        </div>
      )}
    </div>
  )
}
