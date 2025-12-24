import Image from "next/image"
import Link from "next/link"
import { headerLogo, mainNavigation, colors } from "@/lib/data"
import { pages as aboutPages } from "@/lib/about"

export function SiteHeader() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image
              src={headerLogo.src}
              alt={headerLogo.alt}
              width={headerLogo.width}
              height={headerLogo.height}
              className="h-14 w-auto"
            />
           
          </div>
          <nav className="hidden md:flex items-center gap-6">
            {mainNavigation.map((item, index) => (
              item.hasDropdown ? (
                <div key={index} className="relative group">
                  <button className="text-[#2A2A2F] hover:text-[#3048cd] flex items-center gap-1">
                    {item.label}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {item.label === "About Us" && (
                    <div className="absolute left-0 mt-5 w-56 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-gray-100">
                      <div className="py-2">
                        {aboutPages.map((page, pageIndex) => (
                          <Link
                            key={pageIndex}
                            href={page.href}
                            className="block px-4 py-2 text-sm text-[#2A2A2F] hover:bg-[#F2F2F5] hover:scale-105 hover:rounded-l-md duration-150 transition-transform hover:rounded-r-md hover:text-[#3048cd] "
                          >
                            {page.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link 
                  key={index} 
                  href={item.href} 
                  className={item.active ? "text-[#3048cd] font-semibold" : "text-[#2A2A2F] hover:text-[#3048cd]"}
                >
                  {item.label}
                </Link>
              )
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
