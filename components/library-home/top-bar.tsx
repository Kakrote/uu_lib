import { topBarLinks, themeColors } from "@/lib/data"

export function TopBar() {
  return (
    <div className="bg-[#324997] text-white py-2" style={{ backgroundColor: themeColors.topBarBg }}>
      <div className="container mx-auto px-4">
        <div className="flex justify-end items-center gap-6 text-sm">
          {topBarLinks.map((link, index) => (
            <a key={index} href={link.href} className="hover:underline">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
