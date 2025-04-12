import { useInView } from "react-intersection-observer";
import ImageGallery from "./ImageGallery/ImageGallery";
import VideoPlayer from "./VideoPlayer/VideoPlayer";
import PostImage from "./PostImage/PostImage";

function fixRedditUrl(url) {
  return url ? url.replace(/&amp;/g, "&") : url;
}

const PostMedia = ({ postMedia }) => {
  const { ref, inView, entry } = useInView({
    triggerOnce: true,
    rootMargin: "500px",
  });

  const {
    post_hint,
    is_video,
    is_gallery,
    preview,
    secure_media,
    media_metadata,
  } = postMedia;

  if (!postMedia) return null;

  return (
    <div ref={ref}>
      {inView && (
        <>
          {post_hint === "image" && preview && (
            <PostImage imageURL={fixRedditUrl(preview.images[0].source.url)} />
          )}
          {is_video && secure_media?.reddit_video && (
            <VideoPlayer
              dashUrl={fixRedditUrl(secure_media.reddit_video.dash_url)}
              hlsUrl={fixRedditUrl(secure_media.reddit_video.hls_url)}
            />
          )}
          {is_gallery && media_metadata && (
            <ImageGallery
              imageURLs={Object.keys(media_metadata).map((image) =>
                fixRedditUrl(media_metadata[image].s.u)
              )}
            />
          )}
        </>
      )}
    </div>
  );
};

export default PostMedia;
