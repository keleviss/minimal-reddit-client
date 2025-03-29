import Button from "../Button/Button";
import { timeDiff } from "../../utils/timeDifference";

function fixRedditUrl(url) {
  if (url) {
    return url.replace(/&amp;/g, "&");
  }
  return url;
}

export default function Post({ postData }) {

  return (
    <div className="flex flex-col gap-4 py-4 px-4 mb-12 rounded-2xl hover:bg-stone-100">
      <div className="flex items-center gap-2">
        <div><img className="w-8 rounded-full" src={postData.subredditImg} alt="" /></div>
        <span className="text-xs font-semibold">r/{postData.subreddit}</span>
        <span>-</span>
        <span className="text-xs">{timeDiff(postData.created, Math.floor(Date.now() / 1000))}</span>
      </div>
      <h2 className="font-bold">{postData.title}</h2>
      <p className="text-sm">{postData.body}</p>
      {postData.post_hint === "image" ? (
        <div className="flex justify-center rounded-2xl border-1 border-stone-300 bg-stone-100">
          <img
            className="w-md"
            src={fixRedditUrl(postData.image)}
            alt=""
          />
        </div>
      ) : (
        <></>
      )}
      <div className="flex gap-4">
        <Button text={postData.ups - postData.downs} />
        <Button text={postData.comments} />
        <Button text="Share" />
      </div>
    </div>
  );
}