import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Globe } from "lucide-react"
import { collectionStats, themeColors } from "@/lib/data"

export function CollectionStatsSection() {
  return (
    <section className="py-16" style={{ backgroundColor: themeColors.collectionStatsBg }}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-center text-white mb-4">{collectionStats.title}</h2>
        <p className="text-center text-white/90 mb-12 text-lg">{collectionStats.subtitle}</p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {collectionStats.items.map((item, index) => {
            const IconComponent = item.icon === "Globe" ? Globe : BookOpen
            return (
              <Card key={index} className="bg-white text-center border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-[#3048cd] flex items-center justify-center">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <p className="text-3xl font-extrabold text-[#3048cd] mb-2">{item.count}</p>
                  <p className="text-[#2A2A2F] font-semibold">{item.label}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
