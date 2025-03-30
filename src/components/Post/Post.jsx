import Button from "../Button/Button";
import PostHeader from "../PostHeader/PostHeader";
import PostMedia from "../PostMedia/PostMedia";
import { timeDiff } from "../../utils/timeDifference";
import { useEffect, useState } from "react";
import ReactMarkDown from "react-markdown";

export default function Post({ postData }) {
  const [subredditIcon, setSubredditIcon] = useState(null);

  useEffect(() => {
    const fetchSubredditIcon = async () => {
      try {
        const response = await fetch(`https://www.reddit.com/r/${postData.subreddit}/about.json`);
        const json = await response.json();
        setSubredditIcon(json.data.icon_img || null);
      } catch (error) {
        console.error("Failed to fetch subreddit icon:", error);
        setSubredditIcon(null);
      }
    };

    fetchSubredditIcon();
  }, [postData]);

  const created = timeDiff(postData.created, Math.floor(Date.now() / 1000));

  return (
    <div className="flex flex-col gap-2 py-4 px-4 my-6 rounded-2xl border-1 border-stone-400 hover:border-orange-600 hover:shadow-lg hover:cursor-pointer transition-all">
      <PostHeader
        subreddit={postData.subreddit}
        subredditImg={subredditIcon}
        title={postData.title}
        created={created}
      />
      <div className="no-tailwind-markdown text-sm">
        <ReactMarkDown>{postData.selftext}</ReactMarkDown>
      </div>
      <PostMedia postMedia={postData} />
      <div className="flex gap-4">
        <Button btnType="votes" text={postData.ups - postData.downs} />
        <Button btnType="comments" text={postData.num_comments} />
        <Button btnType="share" text="Share" />
      </div>
    </div>
  );
}