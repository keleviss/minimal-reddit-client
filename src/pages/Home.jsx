import { useEffect, useState } from "react";
import { fetchPosts } from "../api/fetchPosts";
import Sorts from "../features/Sorts/Sorts";
import Posts from "../features/Posts/Posts";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("posts"));

    if (localData) {
      setPosts(localData);
    } else {
      fetchPosts("https://www.reddit.com/r/popular.json").then((response) => {
        const { data } = response;
        setPosts(data);
        localStorage.setItem("posts", JSON.stringify(data));
      })
    }
  }, []);

  if (!posts.children) {
    return <p>Loading posts...</p>
  }

  return (
    <>
      <Sorts />
      <Posts posts={posts} />
    </>
  );
}