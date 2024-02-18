import { useEffect, useState } from "react";
import api from "../utils/api";
import VideoProps from "../../types/video";
import Video from "../components/Video";
import { Link } from "react-router-dom";

export default function Home() {
  const [data, setData] = useState<VideoProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get("/videos");
      setData(response.data.videos);
    };

    fetchData();
  }, []);

  return (
    <div className="m-4">
      <h1 className="text-3xl font-bold p-1 text-center">Streaming ON</h1>
      <div className="flex items-center">
        {data?.map((video) => {
          return (
            <Link to={`/videos/${video._id}`} key={video._id}>
              <Video
                key={video._id}
                title={video.title}
                description={video.description}
                videoUrl={video.videoUrl}
                filename={video.filename}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
