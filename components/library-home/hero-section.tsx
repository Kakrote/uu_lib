import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Clock, MapPin } from "lucide-react"

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
  // Set this to either:
  // - a YouTube link (watch/youtu.be/embed/shorts)
  // - a direct video file (e.g. /videos/library-hero.mp4)
  const backgroundMediaUrl = "https://youtu.be/7PIji8OubXU?si=9UJ5KIAIfX8YfmYs"
  const posterImageUrl = "/images/screencapture-library-bennett-edu-in-2025-12-19-11-43-48.png"

  const youTubeId = getYouTubeId(backgroundMediaUrl)

  return (
    <section
      className="relative py-24 bg-cover bg-center min-h-[calc(100vh-10rem)]"
      style={{
        backgroundImage: `url(${posterImageUrl})`,
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
          poster={posterImageUrl}
          aria-hidden="true"
        >
          <source src={backgroundMediaUrl} />
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
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-[#fdfdff] mt-1.5"></div>
                <div>
                  <p className="font-semibold text-[#ffffff]">Regular Days (Monday–Sunday)</p>
                  <p className="text-[#ffffff]">8:00 AM – 11:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-[#6BC533] mt-1.5"></div>
                <div>
                  <p className="font-semibold text-[#ffffff]">Extended Hours (During Exams)</p>
                  <p className="text-[#ffffff]">8:00 AM – 4:00 AM</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-[#FFA200] mt-1.5"></div>
                <div>
                  <p className="font-semibold text-[#ffffff]">Holidays</p>
                  <p className="text-[#ffffff]">9:00 AM – 5:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-[#E32424] mt-1.5"></div>
                <div>
                  <p className="font-semibold text-[#ffffff]">Circulation Service</p>
                  <p className="text-[#ffffff]">Available</p>
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-[#ffffff]" />
                <span className="text-[#ffffff]">Book Issue/Renew: 8:00 AM – 11:00 PM</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#ffffff]" />
                <span className="text-[#ffffff]">Book Return: 24/7 (Through RFID Book Drop Box)</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
