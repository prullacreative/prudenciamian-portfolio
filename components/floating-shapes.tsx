"use client"

import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function FloatingShapes() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Floating circles */}
      <motion.div
        className="absolute top-[15%] right-[10%] w-64 h-64 rounded-full bg-purple-heart-300/10 dark:bg-purple-heart-700/10 blur-3xl"
        animate={{
          y: [0, 30, 0],
          x: [0, 15, 0],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-[20%] left-[5%] w-80 h-80 rounded-full bg-purple-heart-400/10 dark:bg-purple-heart-600/10 blur-3xl"
        animate={{
          y: [0, -40, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-[40%] left-[20%] w-72 h-72 rounded-full bg-purple-heart-200/10 dark:bg-purple-heart-800/10 blur-3xl"
        animate={{
          y: [0, 50, 0],
          x: [0, -30, 0],
        }}
        transition={{
          duration: 30,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Geometric shapes */}
      <motion.div
        className="absolute top-[60%] right-[15%] w-40 h-40 rotate-45 bg-purple-heart-300/5 dark:bg-purple-heart-700/5 blur-xl"
        animate={{
          rotate: [45, 90, 45],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-[25%] left-[30%] w-24 h-24 rotate-12 bg-purple-heart-400/5 dark:bg-purple-heart-600/5 blur-xl"
        style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
        animate={{
          rotate: [12, -12, 12],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-[30%] right-[25%] w-32 h-32 bg-purple-heart-200/5 dark:bg-purple-heart-800/5 blur-xl"
        style={{ clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)" }}
        animate={{
          rotate: [0, 360],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 40,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />
    </div>
  )
}
