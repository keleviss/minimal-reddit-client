import ImageGallery from "./ImageGallery/ImageGallery";
import VideoPlayer from "./VideoPlayer/VideoPlayer";
import PostImage from "./PostImage/PostImage";

function fixRedditUrl(url) {
  return url ? url.replace(/&amp;/g, "&") : url;
}

export default function PostMedia({ postMedia }) {
  if (!postMedia) return null;

  const { post_hint, is_video, is_gallery, preview, secure_media, media_metadata } = postMedia;

  if (post_hint === "image" && preview) {
    const fixedImageUrl = fixRedditUrl(preview.images[0].source.url);

    return (
      <PostImage imageURL={fixedImageUrl} />
    );
  }

  if (is_video && secure_media?.reddit_video) {
    const { dash_url, hls_url } = secure_media.reddit_video;

    return (
      <VideoPlayer
        dashUrl={fixRedditUrl(dash_url)}
        hlsUrl={fixRedditUrl(hls_url)}
      />
    );
  }

  if (is_gallery && media_metadata) {
    const imageURLs = Object.keys(media_metadata).map(image => {
      return fixRedditUrl(media_metadata[image].s.u);
    });

    return (
      <ImageGallery imageURLs={imageURLs} />
    );
  }

  return null;
}
