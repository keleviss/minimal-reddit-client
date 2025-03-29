import Button from "../Button/Button";
import PostHeader from "../PostHeader/PostHeader";
import PostBody from "../PostBody/PostBody";
import { timeDiff } from "../../utils/timeDifference";

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
      <PostBody 
        bodyText={postData.body}
        postMedia={postData}
      />
      <div className="flex gap-4">
        <Button btnType="votes" text={postData.ups - postData.downs} />
        <Button btnType="comments" text={postData.comments} />
        <Button btnType="share" text="Share" />
      </div>
    </div>
  );
}