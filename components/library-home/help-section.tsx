import { Button } from "@/components/ui/button"
import { helpSection } from "@/lib/data"

export function HelpSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#3048cd] to-[#6BC533] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl font-extrabold mb-4">{helpSection.title}</h2>
        <p className="text-xl mb-8 text-white/90">
          {helpSection.description}
        </p>
        <Button 
          size="lg" 
          className="text-white font-bold px-8 py-6 text-lg"
          style={{ 
            backgroundColor: helpSection.buttonColor,
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = helpSection.buttonHoverColor}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = helpSection.buttonColor}
        >
          {helpSection.buttonText}
        </Button>
      </div>
    </section>
  )
}
