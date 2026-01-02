import { CommonLayout } from '@/components/common-layout'
import { Plagiarism_Checking_Services } from '@/lib/service'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Library, 
  Shield, 
  CheckCircle2, 
  FileText,
  Database,
  BarChart3,
  Zap,
  FileStack,
  Award,
  AlertCircle,
  Mail,
  Upload,
  Search,
  Eye,
  Edit,
  RefreshCw
} from "lucide-react"

const PlagiarismCheck = () => {
  const featureIcons: Record<string, any> = {
    "Comprehensive Database": Database,
    "Detailed Reports": BarChart3,
    "User-Friendly": Zap,
    "Multiple Formats": FileStack,
    "Ethical Writing": Award,
  }

  const processIcons = [Upload, Search, Eye, Edit, RefreshCw]

  const featureColors = [
    {
      gradient: "from-blue-500/10 to-cyan-500/10 border-blue-200 dark:border-blue-800",
      iconBg: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
    },
    {
      gradient: "from-purple-500/10 to-pink-500/10 border-purple-200 dark:border-purple-800",
      iconBg: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400"
    },
    {
      gradient: "from-emerald-500/10 to-green-500/10 border-emerald-200 dark:border-emerald-800",
      iconBg: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400"
    },
    {
      gradient: "from-amber-500/10 to-orange-500/10 border-amber-200 dark:border-amber-800",
      iconBg: "bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400"
    },
    {
      gradient: "from-rose-500/10 to-red-500/10 border-rose-200 dark:border-rose-800",
      iconBg: "bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400"
    }
  ]

  return (
    <CommonLayout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <div className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <Shield className="w-16 h-16 mx-auto mb-4" />
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Plagiarism Check</h1>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Ensure originality and academic integrity with our advanced detection tools
              </p>
            </div>
          </div>
        </div>
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <Library className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary">Academic Integrity</span>
          </div>
          <h2 className="text-3xl font-bold mb-4">
            {Plagiarism_Checking_Services.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {Plagiarism_Checking_Services.introduction}
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            <Badge variant="secondary" className="text-sm px-4 py-1">
              <Shield className="w-4 h-4 mr-2 inline" />
              Free Service
            </Badge>
            <Badge variant="secondary" className="text-sm px-4 py-1">
              <CheckCircle2 className="w-4 h-4 mr-2 inline" />
              Confidential
            </Badge>
          </div>
        </div>

        {/* Turnitin Introduction */}
        <Card className="mb-10 border-2 shadow-lg bg-linear-to-br from-primary/5 to-primary/10 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-linear-to-br from-primary/10 to-transparent rounded-full -mr-32 -mt-32" />
          <CardContent className="py-8 relative">
            <div className="flex items-start gap-4">
              <div className="p-4 rounded-xl bg-primary text-primary-foreground shrink-0">
                <FileText className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-3">About Turnitin</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {Plagiarism_Checking_Services.description}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {Plagiarism_Checking_Services.purpose}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Features */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-primary/10">
              <Award className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold">Key Features</h2>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Plagiarism_Checking_Services.keyFeatures.map((feature, index) => {
              const Icon = featureIcons[feature.title] || CheckCircle2
              const colors = featureColors[index % featureColors.length]
              
              return (
                <Card 
                  key={index}
                  className={`group border-2 bg-linear-to-br ${colors.gradient} hover:shadow-xl transition-all duration-300 hover:scale-[1.02] overflow-hidden relative`}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-primary/5 to-transparent rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
                  
                  <CardHeader className="relative">
                    <div className="flex items-start gap-3">
                      <div className={`p-3 rounded-xl ${colors.iconBg} group-hover:scale-110 transition-transform duration-300 shrink-0`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-2 group-hover:text-primary transition-colors">
                          {feature.title}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>

        {/* How to Use */}
        <Card className="mb-10 border-2 shadow-lg">
          <CardHeader className="bg-linear-to-r from-primary/5 to-primary/10">
            <div className="flex items-center gap-2">
              <Mail className="w-6 h-6 text-primary" />
              <CardTitle className="text-2xl">How to Get Started</CardTitle>
            </div>
            <CardDescription className="text-base mt-2">
              Follow these simple steps to activate your Turnitin account
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-6">
              {Plagiarism_Checking_Services.howToUse.map((item, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-linear-to-br from-primary to-primary/60 text-primary-foreground flex items-center justify-center font-bold text-lg shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">
                      {item.step}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                    {item.step === "Request Access" && (
                      <div className="mt-3 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-medium">
                        <Mail className="w-4 h-4" />
                        {Plagiarism_Checking_Services.contactEmail}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Submission Process */}
        <Card className="mb-10 border-2 shadow-lg">
          <CardHeader className="bg-linear-to-r from-primary/5 to-primary/10">
            <div className="flex items-center gap-2">
              <Upload className="w-6 h-6 text-primary" />
              <CardTitle className="text-2xl">Document Submission Workflow</CardTitle>
            </div>
            <CardDescription className="text-base mt-2">
              Step-by-step process to check your documents
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-8">
            <div className="grid gap-6 md:grid-cols-5">
              {Plagiarism_Checking_Services.submissionProcess.map((item, index) => {
                const Icon = processIcons[index]
                const colors = featureColors[index % featureColors.length]
                
                return (
                  <div key={index} className="relative">
                    <div className="flex flex-col items-center text-center group">
                      <div className={`w-16 h-16 rounded-full ${colors.iconBg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">
                        {item.step}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                    {index < Plagiarism_Checking_Services.submissionProcess.length - 1 && (
                      <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-linear-to-r from-primary/30 to-primary/10" />
                    )}
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Important Notes */}
        <Card className="mb-10 border-2 border-amber-200 dark:border-amber-800 bg-linear-to-br from-amber-500/10 to-orange-500/10 shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-2">
              <AlertCircle className="w-6 h-6 text-amber-600 dark:text-amber-400" />
              <CardTitle className="text-2xl">Important Guidelines</CardTitle>
            </div>
            <CardDescription className="text-base mt-2">
              Please read and follow these important instructions carefully
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {Plagiarism_Checking_Services.importantNotes.map((note, index) => (
                <li key={index} className="flex items-start gap-3 group">
                  <div className="p-1.5 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5">
                    <AlertCircle className="w-4 h-4" />
                  </div>
                  <span className="text-muted-foreground leading-relaxed">{note}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Bottom CTA */}
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="border-2 border-primary/20 bg-linear-to-br from-primary/5 to-primary/10 shadow-lg">
            <CardContent className="py-8 text-center">
              <Shield className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Ensure Academic Integrity</h3>
              <p className="text-muted-foreground mb-6">
                Use Turnitin to verify the originality of your academic work and maintain the highest standards of scholarship.
              </p>
              <Badge className="text-sm px-6 py-2 cursor-pointer hover:scale-105 transition-transform">
                Request Access
              </Badge>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary/20 bg-linear-to-br from-primary/5 to-primary/10 shadow-lg">
            <CardContent className="py-8 text-center">
              <Mail className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Need Assistance?</h3>
              <p className="text-muted-foreground mb-6">
                Our library staff is ready to help you with Turnitin access and usage. Contact us for support.
              </p>
              <a href={`mailto:${Plagiarism_Checking_Services.contactEmail}`}>
                <Badge className="text-sm px-6 py-2 cursor-pointer hover:scale-105 transition-transform">
                  Email: {Plagiarism_Checking_Services.contactEmail}
                </Badge>
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
      </div>
    </CommonLayout>
  )
}

export default PlagiarismCheck
