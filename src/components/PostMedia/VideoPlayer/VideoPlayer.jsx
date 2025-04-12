import { useEffect, useRef } from 'react';
import Hls from 'hls.js';
import dashjs from 'dashjs';

const VideoPlayer = ({ dashUrl, hlsUrl }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Check if HLS is supported in the browser
    if (Hls.isSupported() && hlsUrl) {
      const hls = new Hls();
      hls.loadSource(hlsUrl);
      hls.attachMedia(videoRef.current);

      // Cleanup HLS when component unmounts
      return () => {
        hls.destroy();
      };
    }

    // Check if the browser supports native HLS (e.g., Safari)
    if (videoRef.current.canPlayType('application/vnd.apple.mpegurl') && hlsUrl) {
      videoRef.current.src = hlsUrl;

      return () => {
        videoRef.current.src = '';
      };
    }

    // If DASH streaming is preferred
    if (dashUrl) {
      const player = dashjs.MediaPlayer().create();
      player.initialize(videoRef.current, dashUrl, true);

      return () => {
        player.destroy();
      };
    }
  }, [hlsUrl, dashUrl]);

  return (
    <div className="rounded-2xl bg-black border-1 border-gray-500 overflow-hidden">
      <div className="flex justify-center items-center backdrop-blur-2xl">
        <div>
          <video
            className='w-full h-auto max-h-150'
            ref={videoRef}
            controls
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;