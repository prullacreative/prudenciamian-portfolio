import type { Metadata } from "next"
import BlogHeader from "@/components/blog-header"
import BlogGrid from "@/components/blog-grid"
import BlogCategories from "@/components/blog-categories"
import BlogNewsletter from "@/components/blog-newsletter"

export const metadata: Metadata = {
  title: "Blog | PrullaCreative - Développement Web, Design UI/UX et IA",
  description: "Découvrez mes articles sur le développement web, le design UI/UX et l'intelligence artificielle.",
}

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <BlogHeader />
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <BlogGrid />
          </div>
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <BlogCategories />
              <div className="mt-8">
                <BlogNewsletter />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
