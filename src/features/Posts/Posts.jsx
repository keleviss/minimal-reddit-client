import { useInView } from "react-intersection-observer";
import Post from "../../components/Post/Post";
import { useEffect } from "react";

export default function Posts({ posts, isFetchingCurrent, isFetchingNext, setLastPostInView }) {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
    delay: 2000,
  });

  useEffect(() => {
    if (inView) {
      setLastPostInView(true);
    } else {
      setLastPostInView(false);
    }
  }, [inView]);

  return (
    <div className="flex justify-center px-4 lg:px-0">
      <div className="w-4xl mt-40">
        {isFetchingCurrent && <p>Loading reddit posts...</p>}
        {!isFetchingCurrent && posts && (
          <ul>
            {posts.children.map((post, i) =>
              i === posts.children.length - 1 ? (
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
        {isFetchingNext && <p>Loading reddit posts...</p>}
      </div>
    </div>
  );
}
