import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react"
import { footerUsefulResources, footerQuickLinks, contactInfo, copyrightText, themeColors, colors } from "@/lib/data"

export function SiteFooter() {
  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case "Facebook":
        return Facebook
      case "Instagram":
        return Instagram
      case "Youtube":
        return Youtube
      case "Linkedin":
        return Linkedin
      default:
        return Facebook
    }
  }

  return (
    <footer className="text-white py-12" style={{ backgroundColor: themeColors.footerBg }}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Useful Resources</h3>
            <ul className="space-y-2">
              {footerUsefulResources.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-[#C7C9D9] hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {footerQuickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-[#C7C9D9] hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Reach Us</h3>
            <div className="space-y-4 text-[#C7C9D9]">
              <p className="font-semibold text-white">
                {contactInfo.title}
                <br />
                {contactInfo.subtitle}
              </p>
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <p>
                  {contactInfo.address.line1}
                  <br />
                  {contactInfo.address.line2}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-white">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <a href={`tel:${contactInfo.phone}`} className="hover:text-white">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex gap-4 mt-4">
                {contactInfo.socialLinks.map((social, index) => {
                  const IconComponent = getSocialIcon(social.icon)
                  return (
                    <a
                      key={index}
                      href={social.url}
                      className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#6BC533] transition-colors"
                      style={{ backgroundColor: colors.primary }}
                      aria-label={social.platform}
                    >
                      <IconComponent className="h-5 w-5" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#6B7588] pt-8 text-center text-[#C7C9D9]">
          <p>{copyrightText}</p>
        </div>
      </div>
    </footer>
  )
}
