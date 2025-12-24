import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Clock, MapPin } from "lucide-react"
import { heroMedia, libraryHours, libraryServices } from "@/lib/data"

function getYouTubeId(input: string): string | null {
  try {
    const url = new URL(input)
    const host = url.hostname.replace(/^www\./, "").toLowerCase()

    if (host === "youtu.be") {
      const id = url.pathname.split("/").filter(Boolean)[0]
      return id || null
    }

    if (host === "youtube.com" || host === "m.youtube.com" || host === "music.youtube.com") {
      if (url.pathname === "/watch") return url.searchParams.get("v")

      const parts = url.pathname.split("/").filter(Boolean)
      if (parts[0] === "embed" && parts[1]) return parts[1]
      if (parts[0] === "shorts" && parts[1]) return parts[1]
    }

    return null
  } catch {
    return null
  }
}

function getYouTubeEmbedSrc(id: string) {
  const params = new URLSearchParams({
    autoplay: "1",
    mute: "1",
    controls: "0",
    rel: "0",
    modestbranding: "1",
    playsinline: "1",
    loop: "1",
    playlist: id,
  })
  return `https://www.youtube-nocookie.com/embed/${id}?${params.toString()}`
}

export function HeroSection() {
  const youTubeId = getYouTubeId(heroMedia.backgroundMediaUrl)

  return (
    <section
      className="relative py-24 bg-cover bg-center min-h-[calc(100vh-10rem)]"
      style={{
        backgroundImage: `url(${heroMedia.posterImageUrl})`,
      }}
    >
      {/* Background media (keeps backgroundImage as fallback) */}
      {youTubeId ? (
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <iframe
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-[177.78vh] h-[56.25vw]"
            src={getYouTubeEmbedSrc(youTubeId)}
            title="Hero background video"
            frameBorder={0}
            allow="autoplay; encrypted-media; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      ) : (
        <video
          className="absolute inset-0 h-full w-full object-cover pointer-events-none"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster={heroMedia.posterImageUrl}
          aria-hidden="true"
        >
          <source src={heroMedia.backgroundMediaUrl} />
        </video>
      )}

      <div className="absolute inset-0 bg-black/40"></div>
      <div className="container mx-auto px-4 relative z-10">
        <Card className="max-w-4xl mx-auto mt-6 border-[#fcfcfc] bg-white/10 backdrop-blur">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="h-5 w-5 text-[#fdfafa]" />
              <h3 className="text-xl font-bold text-[#fdfdfd]">Library Working Hours</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              {libraryHours.map((hour, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full mt-1.5" style={{ backgroundColor: hour.color }}></div>
                  <div>
                    <p className="font-semibold text-[#ffffff]">{hour.title}</p>
                    <p className="text-[#ffffff]">{hour.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-4 text-sm">
              {libraryServices.map((service, index) => (
                <div key={index} className="flex items-center gap-2">
                  {service.icon === "BookOpen" ? (
                    <BookOpen className="h-4 w-4 text-[#ffffff]" />
                  ) : (
                    <MapPin className="h-4 w-4 text-[#ffffff]" />
                  )}
                  <span className="text-[#ffffff]">{service.text}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
