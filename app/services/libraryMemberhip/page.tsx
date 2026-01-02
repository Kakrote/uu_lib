import { CommonLayout } from '@/components/common-layout'
import { library_Membership } from '@/lib/service'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Library, ExternalLink, Users, Globe, Award } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const LibraryMembership = () => {
  return (
    <CommonLayout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <div className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <Library className="w-16 h-16 mx-auto mb-4" />
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Library Membership</h1>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Access world-class academic resources through our partnerships
              </p>
            </div>
          </div>
        </div>
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <Library className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary">Partnerships & Resources</span>
          </div>
          <h2 className="text-3xl font-bold mb-4">
            Our Partner Networks
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore leading digital libraries and research networks
          </p>
          <div className="mt-6 flex items-center justify-center gap-2">
            <Badge variant="secondary" className="text-sm px-4 py-1">
              <Users className="w-4 h-4 mr-2 inline" />
              {library_Membership.members.length} Partner Networks
            </Badge>
          </div>
        </div>

        {/* Introduction Card */}
        <Card className="mb-10 border-2 shadow-lg bg-gradient-to-br from-primary/5 to-primary/10">
          <CardContent className="py-8">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-primary/10 shrink-0">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">Premium Membership Benefits</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our Central Library maintains memberships with prestigious digital library networks, 
                  providing you with access to millions of scholarly resources, research papers, theses, 
                  and academic journals. Explore cutting-edge research and enhance your academic journey.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Member Networks Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {library_Membership.members.map((member, index) => {
            const gradients = [
              "from-blue-500/10 to-cyan-500/10 border-blue-200 dark:border-blue-800",
              "from-purple-500/10 to-pink-500/10 border-purple-200 dark:border-purple-800",
              "from-emerald-500/10 to-green-500/10 border-emerald-200 dark:border-emerald-800",
              "from-amber-500/10 to-orange-500/10 border-amber-200 dark:border-amber-800",
            ]
            const gradient = gradients[index % gradients.length]

            return (
              <Card 
                key={index}
                className={`group border-2 bg-gradient-to-br ${gradient} hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] overflow-hidden relative`}
              >
                {/* Decorative background */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary/5 to-transparent rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-500" />
                
                <CardHeader className="relative pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline" className="text-xs">
                      <Globe className="w-3 h-3 mr-1 inline" />
                      Digital Access
                    </Badge>
                    <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  
                  {/* Logo Section */}
                  <div className="flex justify-center mb-6 p-6 bg-white dark:bg-gray-900 rounded-lg shadow-sm group-hover:shadow-md transition-shadow">
                    <div className="relative w-full h-24 flex items-center justify-center">
                      <Image 
                        src={member.logo}
                        alt={member.name}
                        width={200}
                        height={96}
                        className="object-contain max-h-24 w-auto group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>

                  <CardTitle className="text-xl leading-tight group-hover:text-primary transition-colors">
                    {member.name}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative pt-0">
                  <Link 
                    href={member.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="flex items-center justify-between p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors group/link">
                      <span className="text-sm font-medium text-primary">Visit Portal</span>
                      <div className="flex items-center gap-2 text-primary">
                        <span className="text-xs opacity-70 group-hover/link:opacity-100 transition-opacity">
                          Access Now
                        </span>
                        <svg 
                          className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </Link>

                  {/* Additional Info */}
                  <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span>Active Membership</span>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Features Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Membership Features</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center">
                <div className="inline-flex p-4 rounded-full bg-blue-100 dark:bg-blue-900/30 mb-4">
                  <Library className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="font-bold text-lg mb-2">Vast Collection</h3>
                <p className="text-sm text-muted-foreground">
                  Access millions of research papers, theses, and academic journals from around the world
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center">
                <div className="inline-flex p-4 rounded-full bg-purple-100 dark:bg-purple-900/30 mb-4">
                  <Globe className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="font-bold text-lg mb-2">24/7 Access</h3>
                <p className="text-sm text-muted-foreground">
                  Round-the-clock online access to digital resources from anywhere, anytime
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center">
                <div className="inline-flex p-4 rounded-full bg-emerald-100 dark:bg-emerald-900/30 mb-4">
                  <Award className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="font-bold text-lg mb-2">Premium Quality</h3>
                <p className="text-sm text-muted-foreground">
                  Curated content from trusted academic institutions and research organizations
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

       
      </div>
      </div>
    </CommonLayout>
  )
}

export default LibraryMembership
