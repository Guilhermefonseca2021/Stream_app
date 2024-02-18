import { useParams } from "react-router-dom"
import VideoJS from "../components/VideoJS"

export default function VideoPlayer() {
  const { id } = useParams()

  const videoOptions = {
    autoplay: false,
    controls: true,
    fluid: true,
    alwaysShowControls: true,
    source: [{
      src: 0,
    }]
  }

  return (
    <div className="w-full flex justify-center">
    </div>
  )
}
