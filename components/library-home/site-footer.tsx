import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-[#2A2A2F] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Useful Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-[#C7C9D9] hover:text-white">
                  Frequently Asked Questions (FAQs)
                </a>
              </li>
              <li>
                <a href="#" className="text-[#C7C9D9] hover:text-white">
                  Turnitin
                </a>
              </li>
              <li>
                <a href="#" className="text-[#C7C9D9] hover:text-white">
                  DElegate@BU
                </a>
              </li>
              <li>
                <a href="#" className="text-[#C7C9D9] hover:text-white">
                  Tutorials
                </a>
              </li>
              <li>
                <a href="#" className="text-[#C7C9D9] hover:text-white">
                  LRC Rules
                </a>
              </li>
              <li>
                <a href="#" className="text-[#C7C9D9] hover:text-white">
                  OPAC (Book Catalogue)
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-[#C7C9D9] hover:text-white">
                  National Digital Library of India
                </a>
              </li>
              <li>
                <a href="#" className="text-[#C7C9D9] hover:text-white">
                  ShodhGanga (a reservoir of Indian theses)
                </a>
              </li>
              <li>
                <a href="#" className="text-[#C7C9D9] hover:text-white">
                  ShodhGangotri (Indian Research in Progress)
                </a>
              </li>
              <li>
                <a href="#" className="text-[#C7C9D9] hover:text-white">
                  E-ShodhSindhu
                </a>
              </li>
              <li>
                <a href="#" className="text-[#C7C9D9] hover:text-white">
                  Free e-Books
                </a>
              </li>
              <li>
                <a href="#" className="text-[#C7C9D9] hover:text-white">
                  SWAYAM (Free MOOC Courses)
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Reach Us</h3>
            <div className="space-y-4 text-[#C7C9D9]">
              <p className="font-semibold text-white">
                Learning Resource Centre (LRC)
                <br />
                Bennett University
              </p>
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <p>
                  Plot No-8-11, Tech Zone II,
                  <br />
                  Greater Noida, UP-201310
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a href="mailto:library@bennett.edu.in" className="hover:text-white">
                  library@bennett.edu.in
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <a href="tel:+917207182546" className="hover:text-white">
                  (+91) - 720-7182546
                </a>
              </div>
              <div className="flex gap-4 mt-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#3048cd] flex items-center justify-center hover:bg-[#6BC533] transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#3048cd] flex items-center justify-center hover:bg-[#6BC533] transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#3048cd] flex items-center justify-center hover:bg-[#6BC533] transition-colors"
                >
                  <Youtube className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#3048cd] flex items-center justify-center hover:bg-[#6BC533] transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#6B7588] pt-8 text-center text-[#C7C9D9]">
          <p>© 2025 – Learning Resource Centre, Bennett University, Greater Noida. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
