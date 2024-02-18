import { useRef, useEffect } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

export default function VideoJS(src: string) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const playerRef = useRef<videojs.Player>();

  useEffect(() => {
    // Initialize Video.js player
    playerRef.current = videojs(videoRef.current || '', {}, () => {
      console.log('Player is ready');
    });

    // Load the video source
    playerRef.current.src({
      src,
      type: 'video/mp4',
    });

    // Cleanup when component unmounts
    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
      }
    };
  }, [src]);

  return (
    <div data-vjs-player>
      <video ref={videoRef} className="video-js" />
    </div>
  );
}