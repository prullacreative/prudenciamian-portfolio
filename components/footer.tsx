"use client"


import Link from "next/link"

export default function Footer() {
 
  const currentYear = new Date().getFullYear()


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
      postman: "https://www.postman.com/prullacreative",
     
    },
  }

  return (
    <footer className="py-2 bg-purple-heart-950 text-white relative overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-heart-700 to-transparent"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-heart-900 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-purple-heart-800 rounded-full blur-3xl opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
       
        <div className=" border-purple-heart-800 pt-1 mt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-purple-heart-400 text-sm mb-4 md:mb-0">
            © {currentYear} PrullaCreative. Tous droits réservés.
          </p>
          <div className="flex items-center">
            <a
              href={`mailto:${contactInfo.email}`}
              className="text-purple-heart-400 hover:text-purple-heart-300 text-sm mx-3"
            >
              {contactInfo.email}
            </a>
            <span className="text-purple-heart-700">|</span>
            <a
              href={`https://wa.me/${contactInfo.phoneNumber.replace(/\+|\s/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-heart-400 hover:text-purple-heart-300 text-sm mx-3"
            >
              {contactInfo.phoneNumber}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
