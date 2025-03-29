import VideoPlayer from "../VideoPlayer/VideoPlayer";

function fixRedditUrl(url) {
  return url ? url.replace(/&amp;/g, "&") : url;
}

export default function Media({ postMedia }) {
  if (!postMedia) return null;

  const { post_hint, is_video, image, secure_media } = postMedia;

  if (post_hint === "image" && image) {
    const fixedImageUrl = fixRedditUrl(image);
    return (
      <div
        className="rounded-2xl bg-center bg-cover border-1 border-gray-500 overflow-hidden"
        style={{ backgroundImage: `url(${fixedImageUrl})` }}
      >
        <div className="flex justify-center items-center backdrop-blur-2xl">
          <img className="max-h-150" src={fixedImageUrl} alt="" />
        </div>
      </div>
    );
  }

  if (is_video && secure_media?.reddit_video) {
    const { dash_url, hls_url } = secure_media.reddit_video;
    return (
      <div className="rounded-2xl bg-black border-1 border-gray-500 overflow-hidden">
        <div className="flex justify-center items-center backdrop-blur-2xl">
          <VideoPlayer
            dashUrl={fixRedditUrl(dash_url)}
            hlsUrl={fixRedditUrl(hls_url)}
          />
        </div>
      </div>
    );
  }

  return null;
}
