import { useEffect, useState } from "react";
import Post from "../../components/Post/Post";
// import { posts } from "../../mock/posts";
import { fetchPosts } from "../../api/fetchPosts";

export default function Posts() {
  // const { data } = posts;
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts("https://www.reddit.com/r/popular.json").then((response) => {
      const { data } = response;
      setPosts(data);
    })
  }, []);

  if (!posts.children) {
    return <p>Loading posts...</p>
  }

  return (
    <ul className="mt-40">
      {
        posts.children.map((post) =>
          <div key={post.data.id}>
            {/* <hr className="text-stone-400"></hr> */}
            <Post postData={post.data} />
          </div>
        )
      }
    </ul>
  );
}