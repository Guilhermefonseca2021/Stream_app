import { useParams } from "react-router-dom";
import VideoProps from "../../types/video";
import useFetchVideoUrl from "../hook/useFetchVideoUrl";

export default function Video({ title, description }: VideoProps) {
  const { id } = useParams();
  const { video } = useFetchVideoUrl(id!);

  return (
    <div className="m-4 container">
      <video src={video?.videoUrl} className="w-full max-w-52" />
      <h2 className="text-lg">{title}</h2>
      <p className="text-sm">{description}</p>
    </div>
  );
}
