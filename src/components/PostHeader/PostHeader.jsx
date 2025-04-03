export default function PostHeader({ 
  // subredditImg, 
  subreddit, 
  created,
  title
}) {
  return (
    <>
      <div className="flex items-center gap-2">
        {/* <div><img className="w-8 rounded-full" src={subredditImg} alt="" /></div> */}
        <span className="text-xs font-semibold">r/{subreddit}</span>
        <span>-</span>
        <span className="text-xs">{created}</span>
      </div>
      <h2 className="font-bold">{title}</h2>
    </>
  );
}