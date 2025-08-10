import Image from "next/image"
import { cn } from "@/lib/utils"

interface TechIconProps {
  name: string
  className?: string
  size?: number
}

export default function TechIcon({ name, className, size = 24 }: TechIconProps) {
  const iconMap: Record<string, string> = {
    react: "/icons/react.png",
    nextjs: "/icons/nextjs.png",
    typescript: "/icons/typescript.png",
    tailwind: "/icons/tailwind.png",
    nodejs: "/icons/nodejs.png",
    // Ajoutez d'autres icônes au besoin
  }

  const iconPath = iconMap[name.toLowerCase()] || null

  if (!iconPath) {
    return <span className={cn("inline-block", className)}>{name}</span>
  }

  return (
    <div className={cn("relative inline-block", className)} style={{ width: size, height: size }}>
      <Image src={iconPath || "/placeholder.svg"} alt={name} width={size} height={size} className="object-contain" />
    </div>
  )
}
