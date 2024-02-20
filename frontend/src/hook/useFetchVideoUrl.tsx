import { useEffect, useState } from "react";
import api from "../utils/api";
import VideoProps from "../../types/video";

export default function useFetchVideoUrl(id: string) {
  const [video, setVideo] = useState<VideoProps>();

  useEffect(() => {
    const fetchVideoById = async () => {
      const response = await api.get(`/video/${id}`);
      setVideo(response.data);
    };

    fetchVideoById();
  });

  return { video };
}
