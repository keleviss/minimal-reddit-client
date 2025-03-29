import Button from "../Button/Button";
import PostHeader from "../PostHeader/PostHeader";
import { timeDiff } from "../../utils/timeDifference";

function fixRedditUrl(url) {
  if (url) {
    return url.replace(/&amp;/g, "&");
  }
  return url;
}

export default function Post({ postData }) {

  const created = timeDiff(postData.created, Math.floor(Date.now() / 1000));

  return (
    <div className="flex flex-col gap-4 py-4 px-4 my-4 rounded-2xl bg-stone-50 hover:bg-stone-100 hover:cursor-pointer">
      <PostHeader 
        subreddit={postData.subreddit}
        subredditImg={postData.subredditImg}
        title={postData.title}
        created={created}
      />
      <p className="text-sm">{postData.body}</p>
      {postData.post_hint === "image" ? (
        <div
          className={`rounded-2xl bg-center bg-cover border-1 border-gray-500 overflow-hidden`}
          style={{ backgroundImage: `url(${fixRedditUrl(postData.image)})` }}
        >
          <div className="flex justify-center items-center backdrop-blur-2xl">
            <img
              className="max-h-150"
              src={fixRedditUrl(postData.image)}
              alt=""
            />
          </div>
        </div>
      ) : (
        <></>
      )}
      <div className="flex gap-4">
        <Button btnType="votes" text={postData.ups - postData.downs} />
        <Button btnType="comments" text={postData.comments} />
        <Button btnType="share" text="Share" />
      </div>
    </div>
  );
}