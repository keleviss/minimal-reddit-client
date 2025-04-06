import { useEffect, useState } from "react";
import { fetchData } from "../api/fetchPosts";
import Sorts from "../features/Sorts/Sorts";
import Posts from "../features/Posts/Posts";
import { useParams } from "react-router";

export default function Home() {
  const [posts, setPosts] = useState();
  const [errorFetchingPosts, setErrorFetchingPosts] = useState();
  const [isFetching, setIsFetching] = useState(false);

  // const localData = JSON.parse(localStorage.getItem("posts"));
  // if (localData && !posts) {
  //   setPosts(localData);
  // }

  const { sort } = useParams();

  useEffect(() => {
    async function fetchPosts() {
      // if (!localData) {
        try {
          setIsFetching(true);
          const { data } = await fetchData(
            `https://www.reddit.com/r/popular/${sort ? sort : ""}.json`
          );
          setPosts(data);
          localStorage.setItem("posts", JSON.stringify(data));
        } catch (error) {
          setErrorFetchingPosts({
            message:
              error.message ||
              "Could not retrieve reddit posts. Please try again later.",
          });
        }
      // }
    }

    fetchPosts();
    setIsFetching(false);
  }, [sort]);

  if (errorFetchingPosts) {
    return <p>{errorFetchingPosts.message}</p>;
  }

  return (
    <>
      <Sorts />
      <Posts
        posts={posts}
        isFetching={isFetching}
      />
    </>
  );
}
