import Image from "next/image"

export function SiteHeader() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image
              src="/images/icons/university.png"
              alt="Bennett University"
              width={150}
              height={60}
              className="h-14 w-auto"
            />
           
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-[#3048cd] font-semibold">
              Home
            </a>
            <div className="relative group">
              <button className="text-[#2A2A2F] hover:text-[#3048cd] flex items-center gap-1">
                About Us
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <div className="relative group">
              <button className="text-[#2A2A2F] hover:text-[#3048cd] flex items-center gap-1">
                Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <div className="relative group">
              <button className="text-[#2A2A2F] hover:text-[#3048cd] flex items-center gap-1">
                Resources
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <a href="#" className="text-[#2A2A2F] hover:text-[#3048cd]">
              D&amp;S @ BU
            </a>
            <a href="#" className="text-[#2A2A2F] hover:text-[#3048cd]">
              Research Support
            </a>
            <a href="#" className="text-[#2A2A2F] hover:text-[#3048cd]">
              Events
            </a>
            <a href="#" className="text-[#2A2A2F] hover:text-[#3048cd]">
              Contact Us
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
