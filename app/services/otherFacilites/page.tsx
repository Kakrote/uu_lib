import { CommonLayout } from '@/components/common-layout'
import { otherFacilites } from '@/lib/service'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  MonitorSmartphone, 
  BookCopy, 
  Printer, 
  HelpCircle, 
  Share2, 
  Wifi,
  Library
} from "lucide-react"

const facilityIcons: Record<string, any> = {
  information_Technology: MonitorSmartphone,
  inter_Library_Loan: BookCopy,
  photocopy_Facility: Printer,
  reference_Service: HelpCircle,
  resource_Sharing: Share2,
  wifi_Internet_Facility: Wifi,
}

const facilityColors: Record<string, string> = {
  information_Technology: "from-blue-500/10 to-cyan-500/10 border-blue-200 dark:border-blue-800",
  inter_Library_Loan: "from-purple-500/10 to-pink-500/10 border-purple-200 dark:border-purple-800",
  photocopy_Facility: "from-emerald-500/10 to-green-500/10 border-emerald-200 dark:border-emerald-800",
  reference_Service: "from-amber-500/10 to-orange-500/10 border-amber-200 dark:border-amber-800",
  resource_Sharing: "from-rose-500/10 to-red-500/10 border-rose-200 dark:border-rose-800",
  wifi_Internet_Facility: "from-indigo-500/10 to-violet-500/10 border-indigo-200 dark:border-indigo-800",
}

const iconBgColors: Record<string, string> = {
  information_Technology: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
  inter_Library_Loan: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
  photocopy_Facility: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400",
  reference_Service: "bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400",
  resource_Sharing: "bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400",
  wifi_Internet_Facility: "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400",
}

const OtherFacilites = () => {
  const facilities = Object.entries(otherFacilites)

  return (
    <CommonLayout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <div className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <Library className="w-16 h-16 mx-auto mb-4" />
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Other Facilities</h1>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Additional services and amenities to enhance your library experience
              </p>
            </div>
          </div>
        </div>
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <Library className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary">Library Services</span>
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Other Facilities
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover the comprehensive range of services and facilities available at our Central Library
          </p>
          <div className="mt-6 flex items-center justify-center gap-2">
            <Badge variant="secondary" className="text-sm px-4 py-1">
              {facilities.length} Services Available
            </Badge>
          </div>
        </div>

        {/* Facilities Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {facilities.map(([key, facility], index) => {
            const Icon = facilityIcons[key] || Library
            const gradientClass = facilityColors[key] || "from-gray-500/10 to-gray-500/10"
            const iconBgClass = iconBgColors[key] || "bg-gray-100 text-gray-600"
            
            return (
              <Card 
                key={key}
                className={`group border-2 bg-gradient-to-br ${gradientClass} hover:shadow-xl transition-all duration-300 hover:scale-[1.02] overflow-hidden relative`}
              >
                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
                
                <CardHeader className="relative">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl ${iconBgClass} group-hover:scale-110 transition-transform duration-300 shrink-0`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl leading-tight group-hover:text-primary transition-colors">
                        {facility.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="relative">
                  <p className="text-muted-foreground leading-relaxed">
                    {facility.para}
                  </p>
                  
                  {/* Read more indicator */}
                  <div className="mt-4 flex items-center gap-2 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>Learn more</span>
                    <svg 
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

      </div>
      </div>
    </CommonLayout>
  )
}

export default OtherFacilites
