import { CommonLayout } from '@/components/common-layout'
import { Reserve_a_Book } from '@/lib/service'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Library, 
  BookMarked, 
  CheckCircle2, 
  Settings, 
  Calendar, 
  AlertCircle,
  Clock,
  ArrowRight
} from "lucide-react"

const iconMap: Record<number, any> = {
  0: CheckCircle2,
  1: Settings,
  2: Calendar,
  3: AlertCircle,
}

const colorSchemes = [
  {
    gradient: "from-blue-500/10 to-cyan-500/10 border-blue-200 dark:border-blue-800",
    iconBg: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
    badge: "bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800"
  },
  {
    gradient: "from-purple-500/10 to-pink-500/10 border-purple-200 dark:border-purple-800",
    iconBg: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
    badge: "bg-purple-50 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800"
  },
  {
    gradient: "from-emerald-500/10 to-green-500/10 border-emerald-200 dark:border-emerald-800",
    iconBg: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400",
    badge: "bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800"
  },
  {
    gradient: "from-amber-500/10 to-orange-500/10 border-amber-200 dark:border-amber-800",
    iconBg: "bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400",
    badge: "bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800"
  }
]

const ReserveBookPage = () => {
  return (
    <CommonLayout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <div className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <BookMarked className="w-16 h-16 mx-auto mb-4" />
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Reserve a Book</h1>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Secure your desired books and ensure availability when you need them
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
            {Reserve_a_Book.title}
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Reserve your desired books conveniently through your library account. 
            Follow our simple reservation system to ensure you get the books you need.
          </p>
        </div>

        {/* Introduction Card */}
        <Card className="mb-10 border-2 shadow-lg bg-gradient-to-br from-primary/5 to-primary/10 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent rounded-full -mr-32 -mt-32" />
          <CardContent className="py-8 relative">
            <div className="flex items-start gap-4">
              <div className="p-4 rounded-xl bg-primary text-primary-foreground shrink-0">
                <BookMarked className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-3">How to Reserve Books</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Users can reserve books from their library account through the ERP system. 
                  The reservation system ensures fair access to library materials and helps 
                  you secure the books you need for your academic pursuits.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Reservation Rules Grid */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-primary/10">
              <Settings className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold">Reservation Guidelines</h2>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            {Reserve_a_Book.steps.map((step, index) => {
              const Icon = iconMap[index] || CheckCircle2
              const colors = colorSchemes[index % colorSchemes.length]
              
              return (
                <Card 
                  key={index}
                  className={`group border-2 bg-gradient-to-br ${colors.gradient} hover:shadow-xl transition-all duration-300 hover:scale-[1.02] overflow-hidden relative`}
                >
                  {/* Decorative background */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
                  
                  <CardHeader className="relative">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl ${colors.iconBg} group-hover:scale-110 transition-transform duration-300 shrink-0`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <Badge variant="outline" className={`mb-3 ${colors.badge}`}>
                          Step {index + 1}
                        </Badge>
                        <CardTitle className="text-lg leading-relaxed">
                          {step}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Process Timeline */}
        <Card className="border-2 shadow-lg mb-10">
          <CardHeader className="bg-gradient-to-r from-primary/5 to-primary/10">
            <div className="flex items-center gap-2">
              <Clock className="w-6 h-6 text-primary" />
              <CardTitle className="text-2xl">Reservation Process</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Login to ERP",
                  description: "Access your library account through the university ERP system",
                  color: "text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30"
                },
                {
                  step: "2",
                  title: "Browse & Select",
                  description: "Search for your desired book and check its availability status",
                  color: "text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30"
                },
                {
                  step: "3",
                  title: "Reserve Book",
                  description: "Click the reserve button for checked-out books you want to borrow",
                  color: "text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/30"
                },
                {
                  step: "4",
                  title: "Collect Within 2 Days",
                  description: "Visit the Circulation Counter after receiving confirmation to collect your book",
                  color: "text-amber-600 dark:text-amber-400 bg-amber-100 dark:bg-amber-900/30"
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className={`w-12 h-12 rounded-full ${item.color} flex items-center justify-center font-bold text-lg shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                  {index < 3 && (
                    <ArrowRight className="w-5 h-5 text-muted-foreground mt-3 group-hover:text-primary transition-colors" />
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

       

     
      </div>
      </div>
    </CommonLayout>
  )
}

export default ReserveBookPage
