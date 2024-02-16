import { useEffect, useState } from "react";
import api from "../utils/api";
import VideoProps from "../../types/video";
import Video from "../components/Video";

export default function Home() {
  const [data, setData] = useState<VideoProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get("/videos");
      setData(response.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      {data?.map((video) => {
        return (
          <Video
            key={video.id}
            title={video.title}
            description={video.description}
            videoUrl={video.videoUrl}
            filename={video.filename}
          />
        );
      })}
    </div>
  );
}
