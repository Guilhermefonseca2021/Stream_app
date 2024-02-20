import { useParams } from "react-router-dom";
import VideoPlay from "./VideoPlayer";
import useFetchVideoUrl from "../hook/useFetchVideoUrl";

export default function VideoPlayer() {
  const { id } = useParams();
  const { video } = useFetchVideoUrl(id!);

  return (
    <div className="App">
      <div className="w-full justify-center">
        <VideoPlay />
        <h4>{video?.title}</h4>
        <p>{video?.description}</p>
      </div>
    </div>
  );
}
