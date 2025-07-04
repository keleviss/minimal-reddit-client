import { useInView } from "react-intersection-observer";
import Post from "../../components/Post/Post";
import { useEffect } from "react";

export default function Posts({ posts, isFetchingCurrent, isFetchingNext, setLastPostInView }) {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      setLastPostInView(true);
    } else {
      setLastPostInView(false);
    }
  }, [inView]);

  return (
    <div className="flex justify-center">
      <div className="w-4xl mt-30 sm:mt-40">
        {!isFetchingCurrent && posts && (
          <ul>
            {posts.children.map((post, i) =>
              i === posts.children.length - 2 ? (
                <div key={post.data.id} ref={ref}>
                  <Post postData={post.data} />
                </div>
              ) : (
                <div key={post.data.id}>
                  <Post postData={post.data} />
                </div>
              )
            )}
          </ul>
        )}
        {isFetchingNext && <p className="my-20 text-center text-xl">🔃 Loading reddit posts...</p>}
      </div>
    </div>
  );
}
