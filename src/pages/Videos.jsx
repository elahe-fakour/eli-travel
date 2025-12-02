import React, { useEffect, useState } from "react"
import PageContainer from "../components/PageContainer"
import LoadingScreen from "../components/LoadingScreen"

const VideoCard = ({ video, isShort = false }) => {
  const videoUrl = `https://youtu.be/${video.id}`
  const thumbnailUrl = video.snippet.thumbnails.medium.url
  const title = video.snippet.title

  const imageClasses = isShort ? "h-64" : "h-48"

  return (
    <a 
      href={videoUrl} 
      target="_blank" 
      rel="noopener noreferrer" 
      key={video.id} 
      className="group block relative p-1 bg-gradient-to-br from-brandGold to-brandBlue rounded-xl 
                 hover:shadow-2xl hover:shadow-brandGold/40 transition duration-300 
                 transform hover:-translate-y-1"
    >
      <div className="bg-brandCream rounded-lg overflow-hidden h-full">
        <img 
          src={thumbnailUrl} 
          alt={title} 
          className={`w-full ${imageClasses} object-cover group-hover:opacity-90 transition duration-300`} 
        />

        <div className="p-4 flex flex-col justify-between h-auto">
          <h3 className="font-bold text-brandBlue text-base mb-2 line-clamp-2">{title}</h3>
          <p className="text-xs text-gray-500 font-medium">Watch on YouTube →</p>
        </div>
      </div>
    </a>
  )
}


const Videos = () => {
  const [videos, setVideos] = useState([])
  const [shorts, setShorts] = useState([])
  const [loading, setLoading] = useState(true)

  // NOTE: These IDs are for demonstration. Replace them with your actual video IDs.
  const regularVideoIds = ["ol0Ry6tg_fw", "M5ToB-8qblk", "f6gqcqTRYVo", "pxbs3NLMipc", "i7wJHuasyEI"]
  const shortsIds = ["1hBXpAhedcg", "-QVOZ_nmOlY", "WqG1lpFzH2U", "V11y9PU2Kn0"]

  const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const regRes = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails&id=${regularVideoIds.join(",")}&key=${API_KEY}`)
        const regData = await regRes.json()

        const shortRes = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails&id=${shortsIds.join(",")}&key=${API_KEY}`)
        const shortData = await shortRes.json()

        setVideos(regData.items)
        setShorts(shortData.items)
        setLoading(false)
      } catch (error) {
        console.error("Failed to fetch videos:", error)
        setLoading(false)
      }
    }

    if (API_KEY) {
        fetchVideos()
    } else {
        console.error("YouTube API Key is missing.")
        setLoading(false)
    }
    
  }, [API_KEY])

  if (loading) {
    return <LoadingScreen message="Loading Videos..." />
  }

  return (
    <PageContainer>
      <div className="text-brandBlue pt-10 max-w-7xl mx-auto px-4">
        
        <h1 className="text-5xl font-extrabold text-center mb-4">
            <span className="inline-block bg-gradient-to-r from-brandBlue to-brandGold bg-clip-text text-transparent">My Video Gallery ✨</span>
        </h1>
        <p className="text-center text-xl mb-12 text-brandBlue/80 font-medium italic">Cozy moments, coding stories, and travel visuals from my YouTube channel.</p>

        <section className="mt-12">
          <h2 className="text-3xl font-extrabold text-brandBlue mb-8 border-b-2 border-brandGold pb-2 max-w-lg mx-auto text-center">
            Full-Length Videos 🎥
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video) => (
              <VideoCard key={video.id} video={video} isShort={false} />
            ))}
          </div>
        </section>

        <section className="mt-20">
          <h2 className="text-3xl font-extrabold text-brandBlue mb-8 border-b-2 border-brandGold pb-2 max-w-lg mx-auto text-center">
            YouTube Shorts ⚡
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {shorts.map((short) => (
              <VideoCard key={short.id} video={short} isShort={true} />
            ))}
          </div>
        </section>
        
      </div>
    </PageContainer>
  )
}

export default Videos