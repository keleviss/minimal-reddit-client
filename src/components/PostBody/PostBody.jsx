import VideoPlayer from "../VideoPlayer/VideoPlayer";

function fixRedditUrl(url) {
  if (url) {
    return url.replace(/&amp;/g, "&");
  }
  return url;
}

export default function PostBody({ bodyText, postMedia }) {

  let media;

  if (postMedia) {
    if (postMedia.post_hint === "image") {
      media = <div
        className={`rounded-2xl bg-center bg-cover border-1 border-gray-500 overflow-hidden`}
        style={{ backgroundImage: `url(${fixRedditUrl(postMedia.image)})` }}
      >
        <div className="flex justify-center items-center backdrop-blur-2xl">
          <img
            className="max-h-150"
            src={fixRedditUrl(postMedia.image)}
            alt=""
          />
        </div>
      </div>
    } else if (postMedia.is_video) {
      media = <div
        className="rounded-2xl bg-black border-1 border-gray-500 overflow-hidden"
      >
        <div className="flex justify-center items-center">
          <VideoPlayer 
            dashUrl={fixRedditUrl(postMedia.secure_media.reddit_video.dash_url)}
            hlsUrl={fixRedditUrl(postMedia.secure_media.reddit_video.hls_url)}
          />
        </div>
      </div>
    }
  }

  return (
    <>
      <p className="text-sm">{bodyText}</p>
      {media}
    </>
  );
}