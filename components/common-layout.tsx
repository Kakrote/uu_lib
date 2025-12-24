import { ReactNode } from "react"
import { TopBar, SiteHeader, SiteFooter } from "@/components/library-home"

interface CommonLayoutProps {
  children: ReactNode
}

export function CommonLayout({ children }: CommonLayoutProps) {
  return (
    <div className="min-h-screen bg-[#ffffff]">
      <TopBar />
      <SiteHeader />
      {children}
      <SiteFooter />
    </div>
  )
}
