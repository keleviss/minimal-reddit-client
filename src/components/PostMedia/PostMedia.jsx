import VideoPlayer from "../VideoPlayer/VideoPlayer";

function fixRedditUrl(url) {
  return url ? url.replace(/&amp;/g, "&") : url;
}

export default function PostMedia({ postMedia }) {
  if (!postMedia) return null;

  const { post_hint, is_video, is_gallery, preview, secure_media, media_metadata } = postMedia;

  if (post_hint === "image" && preview) {
    const fixedImageUrl = fixRedditUrl(preview.images[0].source.ulr);
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

  if (is_gallery && media_metadata) {
    const imageURLs = Object.keys(media_metadata).map(image => {
      return fixRedditUrl(media_metadata[image].s.u);
    });
    return (
      <>
        {imageURLs.map((imageURL, i) => (
            <div
              key={`${i}-${imageURL}`}
              className="rounded-2xl bg-center bg-cover border-1 border-gray-500 overflow-hidden"
              style={{ backgroundImage: `url(${imageURL})` }}
            >
              <div className="flex justify-center items-center backdrop-blur-2xl">
                <img className="max-h-150" src={imageURL} alt="" />
              </div>
            </div>
          ))
        }
      </>
    );
  }

  return null;
}
