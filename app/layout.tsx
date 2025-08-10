import type React from "react"
import type { Metadata } from "next"
import { Manrope, Playfair_Display, Dancing_Script } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { cn } from "@/lib/utils"
import WhatsAppButton from "@/components/whatsapp-button"

// Définition des polices
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing-script",
  display: "swap",
})

// Métadonnées de la page
export const metadata: Metadata = {
  title: "PrullaCreative | Développement Web & Mobile, Design UI/UX, IA",
  description:
    "Portfolio de PrullaCreative, studio de développement web et mobile spécialisé en design UI/UX et intégration d'IA pour des expériences digitales innovantes.",
  keywords: ["développement web", "design UI/UX", "intelligence artificielle", "portfolio", "freelance", "Bénin"],
  authors: [{ name: "Prudencia Mian", url: "https://prullacreative.site" }],
  creator: "PrullaCreative",
   
}

// Composant principal de mise en page
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={cn(manrope.variable, playfair.variable, dancingScript.variable, "font-sans antialiased")}>
        {/* Configuration simplifiée du ThemeProvider */}
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange={false}>
          <div className="relative">
            <div className="noise-pattern fixed inset-0 z-0 opacity-[0.03] pointer-events-none"></div>
            <div className="watermark pointer-events-none fixed inset-0 z-0 flex items-center justify-center opacity-[0.02] dark:opacity-[0.03]">
              <span className="font-script text-[20vw] text-purple-heart-950 dark:text-purple-heart-200 rotate-[-5deg]">
                PrullaCreative
              </span>
            </div>
            <Navigation />
            <main className="relative z-10">{children}</main>
            <Footer />
            <WhatsAppButton />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
